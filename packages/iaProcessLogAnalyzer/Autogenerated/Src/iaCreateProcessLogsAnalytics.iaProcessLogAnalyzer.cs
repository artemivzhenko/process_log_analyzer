namespace Terrasoft.Core.Process
{

	using global::Common.Logging;
	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Data;
	using System.Drawing;
	using System.Globalization;
	using System.Linq;
	using System.Text;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;
	using Terrasoft.Core.DB;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Process;
	using Terrasoft.Core.Process.Configuration;

	#region Class: iaCreateProcessLogsAnalyticsMethodsWrapper

	/// <exclude/>
	public class iaCreateProcessLogsAnalyticsMethodsWrapper : ProcessModel
	{

		public iaCreateProcessLogsAnalyticsMethodsWrapper(Process process)
			: base(process) {
			AddScriptTaskMethod("ScriptTask1Execute", ScriptTask1Execute);
		}

		#region Methods: Private

		private bool ScriptTask1Execute(ProcessExecutingContext context) {
			DateTime thr24 = DateTime.UtcNow.AddDays(-1);
			DateTime thr7  = DateTime.UtcNow.AddDays(-7);
			
			log.Info("[Execute] started");
			var rows = GetAggregatedRows(UserConnection, thr24, thr7);
			FillLastErrorInfo(UserConnection, rows);
			FillLastFinishedInfo(UserConnection, rows);
			UpsertAnalytics   (UserConnection, rows);
			log.Info($"[Execute] finished, rows={rows.Count}");
			return true;
		}

			private static readonly Guid RunningStatusId = new Guid("ed2ae277-b6e2-df11-971b-001d60e938c6");
			private static readonly Guid ErrorStatusId   = new Guid("f942c08d-b6e2-df11-971b-001d60e938c6");
			
			public static ILog log = LogManager.GetLogger("ProcessLogAnalyzer");
			
			private sealed class AggRow {
				public Guid ProcessId;        public string ProcessName;
				public int  TotalCalls, ErrorCount, Calls24h, Calls7d, Error24h;
				public int  InProgressCount, InProgressDayCount;
				public double? MaxDur, MinDur, AvgDur;
				public DateTime? LastStartDate, LastEndDate, LastErrorDate;
				public double?   LastDurationMinutes;
				public string    LastErrorDescription;
			}
			
			
			private static int SafeInt32(IDataReader r, int idx) =>
			    r.IsDBNull(idx) ? 0 : r.GetInt32(idx);
			
			
			private static List<AggRow> GetAggregatedRows(UserConnection uc, DateTime thr24, DateTime thr7) {
			    log.Info("[Aggregation] start");
			    string s24 = thr24.ToString("yyyy-MM-dd HH:mm:ss");
			    string s7  = thr7 .ToString("yyyy-MM-dd HH:mm:ss");
			
			    string sql = $@"
			        SELECT
			            ""SysSchemaId"" AS ProcessId,
			            MAX(""Name"")   AS ProcName,
			
			            COUNT(*)                                                           AS TotalCalls,
			            COALESCE(SUM(CASE WHEN ""StatusId"" = '{ErrorStatusId}' THEN 1 END),0)             AS ErrorCount,
			
			            COALESCE(SUM(CASE WHEN ""StartDate"" >= '{s24}' THEN 1 END),0)                      AS Calls24h,
			            COALESCE(SUM(CASE WHEN ""StartDate"" >= '{s7}'  THEN 1 END),0)                      AS Calls7d,
			            COALESCE(SUM(CASE WHEN ""StatusId"" = '{ErrorStatusId}' AND ""StartDate"" >= '{s24}' THEN 1 END),0) AS Error24h,
			
			            COALESCE(SUM(CASE WHEN ""StatusId"" = '{RunningStatusId}' THEN 1 END),0)                               AS InProg,
			            COALESCE(SUM(CASE WHEN ""StatusId"" = '{RunningStatusId}' AND ""StartDate"" <= '{s24}' THEN 1 END),0)   AS InProgDay,
			
			            MAX(CASE WHEN ""DurationInMinutes"" >= 0 THEN ""DurationInMinutes"" END) AS MaxDur,
			            MIN(CASE WHEN ""DurationInMinutes"" >= 0 THEN ""DurationInMinutes"" END) AS MinDur,
			            AVG(CASE WHEN ""DurationInMinutes"" >= 0 THEN ""DurationInMinutes"" END) AS AvgDur,
			
			            MAX(""StartDate"") AS LastStart
			        FROM ""SysProcessLog""
			        WHERE ""SysSchemaId"" IS NOT NULL
			        AND ""DurationInMinutes"" >= 0
			        AND ""StartDate"" IS NOT NULL
			        AND ""StatusId"" IS NOT NULL
			        GROUP BY ""SysSchemaId""";
			
			    var list = new List<AggRow>();
			    using (var db = uc.EnsureDBConnection()) {
			        var q = new CustomQuery(uc, sql);
			        using (IDataReader r = q.ExecuteReader(db)) {
			            while (r.Read()) {
			                if (r.IsDBNull(0)) continue;
			
			                list.Add(new AggRow {
			                    ProcessId          = r.GetGuid(0),
			                    ProcessName        = r.IsDBNull(1) ? null : r.GetString(1),
			
			                    TotalCalls         = r.GetInt32(2),
			                    ErrorCount         = SafeInt32(r,3),
			
			                    Calls24h           = SafeInt32(r,4),
			                    Calls7d            = SafeInt32(r,5),
			                    Error24h           = SafeInt32(r,6),
			
			                    InProgressCount    = SafeInt32(r,7),
			                    InProgressDayCount = SafeInt32(r,8),
			
			                    MaxDur             = r.IsDBNull(9)  ? (double?)null : Convert.ToDouble(r.GetValue(9)),
			                    MinDur             = r.IsDBNull(10) ? (double?)null : Convert.ToDouble(r.GetValue(10)),
			                    AvgDur             = r.IsDBNull(11) ? (double?)null : Convert.ToDouble(r.GetValue(11)),
			                    LastStartDate      = r.IsDBNull(12) ? (DateTime?)null : r.GetDateTime(12)
			                });
			            }
			        }
			    }
			    log.Info($"[Aggregation] done, rows={list.Count}");
			    return list;
			}
			
			private static void FillLastErrorInfo(UserConnection uc, List<AggRow> rows) {
				log.Info("[LastError] start");
				foreach (var row in rows) {
					string sql = $@"
						SELECT ""ErrorDescription"", ""StartDate""
						FROM ""SysProcessLog""
						WHERE ""SysSchemaId"" = '{row.ProcessId}'
						  AND ""StatusId""    = '{ErrorStatusId}'
						  AND ""ErrorDescription"" IS NOT NULL
						ORDER BY ""StartDate"" DESC LIMIT 1";
					using (var db = uc.EnsureDBConnection()) {
						using (var rd = new CustomQuery(uc, sql).ExecuteReader(db)) {
							if (rd.Read()) {
								row.LastErrorDescription = rd.IsDBNull(0)? null : rd.GetString(0);
								row.LastErrorDate        = rd.IsDBNull(1)? (DateTime?)null : rd.GetDateTime(1);
							}
						}
					}
				}
				log.Info("[LastError] done");
			}
			
			private static void FillLastFinishedInfo(UserConnection uc, List<AggRow> rows) {
				log.Info("[LastFinished] start");
				foreach (var row in rows) {
					string sql = $@"
						SELECT ""DurationInMinutes"", ""StartDate""
						FROM ""SysProcessLog""
						WHERE ""SysSchemaId"" = '{row.ProcessId}'
						  AND ""StatusId""    <> '{RunningStatusId}'
						  AND ""DurationInMinutes"" >= 0
						ORDER BY ""StartDate"" DESC LIMIT 1";
					using (var db = uc.EnsureDBConnection()) {
						using (var rd = new CustomQuery(uc, sql).ExecuteReader(db)) {
							if (rd.Read() && !rd.IsDBNull(0)) {
								double dur = Convert.ToDouble(rd.GetValue(0));
								if (!double.IsNaN(dur) && !double.IsInfinity(dur)) {
									row.LastDurationMinutes = dur;
									DateTime start = rd.GetDateTime(1);
									row.LastEndDate = start.AddMinutes(dur);
								}
							}
						}
					}
				}
				log.Info("[LastFinished] done");
			}
			
			private static string T(object v) => v == null ? "null" : v.GetType().Name;
			
			
			private static void UpsertAnalytics(UserConnection uc, List<AggRow> rows) {
			    log.Info("[Upsert] start");
			    var schema = uc.EntitySchemaManager.GetInstanceByName("iaProcessLogAnalytics");
			
			    var durCol  = schema.Columns.FindByName("iaLastDurationMinutes");
			    bool durIsDate = durCol != null && durCol.DataValueType is DateTimeDataValueType;
			    var processEntity = uc.EntitySchemaManager.GetInstanceByName("SysSchema").CreateEntity(uc);
			
			    foreach (var r in rows) {
			        var e = schema.CreateEntity(uc);
			        bool exists = e.FetchFromDB("iaProcess", r.ProcessId);
			        if (!exists) {
			            if(processEntity.FetchFromDB(r.ProcessId)) {
			        		string name = processEntity.GetTypedColumnValue<string>("Name");
			            	e.SetDefColumnValues();
			        		e.SetColumnValue("iaProcessId", r.ProcessId);
			        		e.SetColumnValue("iaName", name);
			        	}
			        	else {
			        		continue;
			        	}
			        }
			
			        Set(e, "iaNumberOfCalls",             r.TotalCalls);
			        Set(e, "iaInstancesWithErrorResult",  r.ErrorCount);
			        Set(e, "iaInstancesInProgress",       r.InProgressCount);
			        Set(e, "iaInstancesInProgressMoreThanDay", r.InProgressDayCount);
			        if (r.MaxDur.HasValue) Set(e, "iaMaxExecutionTime", r.MaxDur);
			        if (r.MinDur.HasValue) Set(e, "iaMinExecutionTime", r.MinDur);
			        if (r.AvgDur.HasValue) Set(e, "iaAVG",              r.AvgDur);
			
			        double? errAll = r.TotalCalls == 0 ? (double?)null
			            : Math.Round(r.ErrorCount * 100.0 / r.TotalCalls, 2);
			        Set(e, "iaErrorExecutionsPercent", errAll);
			
			        Set(e, "iaCalls24h",           r.Calls24h);
			        Set(e, "iaCalls7d",            r.Calls7d);
			        Set(e, "iaErrorExecutions24h", r.Error24h);
			
			        double? err24 = r.Calls24h == 0 ? (double?)null
			            : Math.Round(r.Error24h * 100.0 / r.Calls24h, 2);
			        Set(e, "iaErrorPercent24h", err24);
			
			        if (r.LastStartDate.HasValue) Set(e, "iaLastStartDate", r.LastStartDate);
			        if (r.LastEndDate.HasValue)   Set(e, "iaLastEndDate",   r.LastEndDate);
			        if (r.LastErrorDate.HasValue) Set(e, "iaLastErrorDate", r.LastErrorDate);
			        if (!string.IsNullOrEmpty(r.LastErrorDescription))
			            Set(e, "iaLastErrorDescription", r.LastErrorDescription);
			
			        if (r.LastDurationMinutes.HasValue) {
			            if (durIsDate) {
			                log.Warn($"[Skip] iaLastDurationMinutes колонка=DateTime, значение {r.LastDurationMinutes}");
			            } else {
			                Set(e, "iaLastDurationMinutes", r.LastDurationMinutes);
			            }
			        }
			
			        try {
			            e.Save();
			        } catch (Exception ex) {
			            log.Error($"[SaveError] proc={r.ProcessId} -> {ex.Message}");
			            throw;
			        }
			    }
			    log.Info("[Upsert] done");
			
			    void Set(Entity ent, string col, object val) {
			        log.Debug($"[Set] {col} = '{val}' ({T(val)})");
			        ent.SetColumnValue(col, val);
			    }
			}

		#endregion

	}

	#endregion

}

