# Process Log Analytics for Creatio

Turn raw **SysProcessLog** entries into clear, actionable dashboards – with a five-minute install and no code changes to your instance.

---

## ✨ Features

- **Single analytics table** populated by a script task  
- **7 ready-made dashboards**  
  - Successful calls  
  - Calls by hour (24 h heat map)  
  - Last calls average duration (ms)  
  - Error calls count  
  - Calls by user  
  - Grouping by status  
  - Running count (+ hanging > 24 h indicator)
- Works on **PostgreSQL** and **SQL Server** out of the box
- No additional licences or external services

---

## 🔍 Data points captured

| Category | Fields |
|----------|--------|
| **Ownership** | `Owner`, `Process` |
| **Volumes** | `NumberOfCalls`, `Calls24h`, `Calls7d` |
| **Errors** | `InstancesWithErrorResult`, `ErrorExecutions24h`, `ErrorExecutionsPercent`, `ErrorPercent24h`, `LastErrorDate`, `LastErrorDescription` |
| **Performance** | `AVG`, `MinExecutionTime`, `MaxExecutionTime`, `LastDurationMinutes` |
| **States** | `InstancesInProgress`, `InstancesInProgressMoreThanDay`, `RunningCount` |
| **Timestamps** | `LastStartDate`, `LastEndDate` |

---

## 🛠️ Installation

1. **Download** the *.zip* release → *Custom package*.  
2. In your Creatio instance open **Configuration → Installed applications → Add application → Install from file**.  
3. Publish the package – that’s it.  
   - The script task will create/refresh the analytics table on first run.  
   - Dashboards appear under **Analytics → Workspace “Process Log Analytics”**.

> **Upgrade**: simply import a newer package; existing data will be updated, not removed.

---

## ⚙️ How it works

```text
+--------------+             +-------------------------+
| SysProcessLog| -- SQL -->  |  ProcessLogAnalytics    |
+--------------+             +-------------------------+
                                |   Script task fills &
                                |   updates this table
                                v
                      +-------------------------------+
                      | Dashboards (Creatio Analytics)|
                      +-------------------------------+
