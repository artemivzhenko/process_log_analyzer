define("iaProcessLogAnalytics_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "Tabs",
				"values": {
					"styleType": "default",
					"mode": "tab",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "GeneralInfoTab",
				"values": {
					"iconPosition": "only-text"
				}
			},
			{
				"operation": "merge",
				"name": "CardToggleTabPanel",
				"values": {
					"styleType": "default",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "Feed",
				"values": {
					"dataSourceName": "PDS",
					"entitySchemaName": "iaProcessLogAnalytics"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "42e7a890-97c2-48ff-b264-bbce0452e19f",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "ComboBox_9ehpacw",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_iaProcess_885v3ao",
					"labelPosition": "auto",
					"control": "$PDS_iaProcess_885v3ao",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "addRecord_ng82xad",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_ng82xad_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_9ehpacw",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_01rup3v",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_iaOwner_xs6jp4o",
					"labelPosition": "auto",
					"control": "$PDS_iaOwner_xs6jp4o",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_e8o3jlo",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_e8o3jlo_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_01rup3v",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NumberInput_2c0hxl0",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_iaNumberOfCalls_tt0hzse",
					"labelPosition": "auto",
					"control": "$PDS_iaNumberOfCalls_tt0hzse",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "NumberInput_b6xo1n4",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 4,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_iaCalls24h_d4y639k",
					"labelPosition": "auto",
					"control": "$PDS_iaCalls24h_d4y639k",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "NumberInput_15akrt9",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 5,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_iaCalls7d_5lg9tc6",
					"labelPosition": "auto",
					"control": "$PDS_iaCalls7d_5lg9tc6",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "IndicatorWidget_qmqfjr9",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 6,
						"rowSpan": 1
					},
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(IndicatorWidget_qmqfjr9_title)#",
						"data": {
							"providing": {
								"attribute": "IndicatorWidget_qmqfjr9_Data",
								"schemaName": "SysProcessLog",
								"filters": {
									"filter": {
										"items": {
											"5db4b8ed-fb63-4874-80ad-c58dee8ece6f": {
												"filterType": 4,
												"comparisonType": 3,
												"isEnabled": true,
												"trimDateTimeParameterToDate": false,
												"leftExpression": {
													"expressionType": 0,
													"columnPath": "Status"
												},
												"isAggregative": false,
												"dataValueType": 10,
												"referenceSchemaName": "SysProcessStatus",
												"rightExpressions": [
													{
														"expressionType": 2,
														"parameter": {
															"dataValueType": 10,
															"value": {
																"Name": "Running",
																"Id": "ed2ae277-b6e2-df11-971b-001d60e938c6",
																"value": "ed2ae277-b6e2-df11-971b-001d60e938c6",
																"displayValue": "Running"
															}
														}
													}
												]
											}
										},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "SysProcessLog"
									},
									"filterAttributes": []
								},
								"aggregation": {
									"column": {
										"orderDirection": 0,
										"orderPosition": -1,
										"isVisible": true,
										"expression": {
											"expressionType": 1,
											"functionArgument": {
												"expressionType": 0,
												"columnPath": "Id"
											},
											"functionType": 2,
											"aggregationType": 1,
											"aggregationEvalType": 2
										}
									}
								},
								"dependencies": [
									{
										"attributePath": "SysSchema",
										"relationPath": "PDS.iaProcess"
									}
								]
							},
							"formatting": {
								"type": "number",
								"decimalSeparator": ".",
								"decimalPrecision": 0,
								"thousandSeparator": ","
							}
						},
						"text": {
							"template": "#ResourceString(IndicatorWidget_qmqfjr9_template)#",
							"metricMacros": "{0}",
							"fontSizeMode": "medium",
							"labelPosition": "above-under"
						},
						"layout": {
							"color": "green"
						},
						"theme": "glassmorphism"
					},
					"visible": true
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "NumberInput_gtfvcww",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_iaAVG_mejyca8",
					"labelPosition": "auto",
					"control": "$PDS_iaAVG_mejyca8",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_cmhgqee",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"pickerType": "datetime",
					"label": "$Resources.Strings.PDS_iaLastStartDate_a7la5aw",
					"labelPosition": "auto",
					"control": "$PDS_iaLastStartDate_a7la5aw",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "NumberInput_9kh42gx",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_iaMaxExecutionTime_o8gg4ov",
					"labelPosition": "auto",
					"control": "$PDS_iaMaxExecutionTime_o8gg4ov",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_keiticp",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"pickerType": "datetime",
					"label": "$Resources.Strings.PDS_iaLastEndDate_eh5b7ck",
					"labelPosition": "auto",
					"control": "$PDS_iaLastEndDate_eh5b7ck",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "NumberInput_x1o6vj6",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_iaMinExecutionTime_k3lqu0e",
					"labelPosition": "auto",
					"control": "$PDS_iaMinExecutionTime_k3lqu0e",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_jig4g4s",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"pickerType": "datetime",
					"label": "$Resources.Strings.PDS_iaLastDurationMinutes_skybrmg",
					"labelPosition": "auto",
					"control": "$PDS_iaLastDurationMinutes_skybrmg",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "NumberInput_vjhasqb",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 4,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_iaErrorExecutionsPercent_4gknywy",
					"labelPosition": "auto",
					"control": "$PDS_iaErrorExecutionsPercent_4gknywy",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "NumberInput_6j4i23h",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 4,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_iaInstancesInProgressMoreThanDay_nxnje5d",
					"labelPosition": "auto",
					"control": "$PDS_iaInstancesInProgressMoreThanDay_nxnje5d",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_7bwzwuq",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 5,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"pickerType": "datetime",
					"label": "$Resources.Strings.PDS_iaLastErrorDate_wo427nm",
					"labelPosition": "auto",
					"control": "$PDS_iaLastErrorDate_wo427nm",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "NumberInput_r1bv9ac",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 5,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_iaInstancesWithErrorResult_91a71us",
					"labelPosition": "auto",
					"control": "$PDS_iaInstancesWithErrorResult_91a71us",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 9
			},
			{
				"operation": "insert",
				"name": "NumberInput_2zwd5z0",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 6,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_iaErrorPercent24h_xm71cxw",
					"labelPosition": "auto",
					"control": "$PDS_iaErrorPercent24h_xm71cxw",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 10
			},
			{
				"operation": "insert",
				"name": "NumberInput_gfh4qlc",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 7,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_iaErrorExecutions24h_8drq8a7",
					"labelPosition": "auto",
					"control": "$PDS_iaErrorExecutions24h_8drq8a7",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 11
			},
			{
				"operation": "insert",
				"name": "Input_5zvyfpk",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 2,
						"row": 8,
						"rowSpan": 3
					},
					"type": "crt.RichTextEditor",
					"multiline": false,
					"label": "$Resources.Strings.PDS_iaLastErrorDescription_dx0z0h9",
					"labelPosition": "auto",
					"control": "$PDS_iaLastErrorDescription_dx0z0h9",
					"filesStorage": {
						"masterRecordColumnValue": "$Id",
						"entitySchemaName": "SysFile",
						"recordColumnName": "RecordId"
					},
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": "",
					"toolbarDisplayMode": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 12
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_1k03du3",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_1k03du3_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true,
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_wrx0rh2",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_1k03du3",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_kmf62xp",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_wrx0rh2",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_0kmk4q4",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_0kmk4q4_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "SysProcessLog"
						}
					}
				},
				"parentName": "FlexContainer_kmf62xp",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_ga1wp6r",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_ga1wp6r_caption)#",
					"icon": "reload-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_09epbqbDS"
						}
					}
				},
				"parentName": "FlexContainer_kmf62xp",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_mt67d9m",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_mt67d9m_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_kmf62xp",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_18jogi9",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_18jogi9_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_09epbqb"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_mt67d9m",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_e0rbc2q",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_e0rbc2q_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "SysProcessLog"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_mt67d9m",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_zzf2ea6",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_zzf2ea6_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_zzf2ea6_GridDetail_09epbqb",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_09epbqb"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_zzf2ea6_SearchValue",
							"GridDetailSearchFilter_zzf2ea6_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_kmf62xp",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_cebtsx6",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": [],
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch"
				},
				"parentName": "ExpansionPanel_1k03du3",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_09epbqb",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"features": {
						"rows": {
							"selection": false
						},
						"editable": {
							"enable": false,
							"itemsCreation": false,
							"floatingEditPanel": false
						}
					},
					"items": "$GridDetail_09epbqb",
					"primaryColumnName": "GridDetail_09epbqbDS_Id",
					"columns": [
						{
							"id": "6655e2e7-fef4-683d-e8c0-5077a82460b7",
							"code": "GridDetail_09epbqbDS_StartDate",
							"caption": "#ResourceString(GridDetail_09epbqbDS_StartDate)#",
							"dataValueType": 7,
							"width": 184
						},
						{
							"id": "0b40ca45-82b4-3220-c8d3-f2720f1b6091",
							"code": "GridDetail_09epbqbDS_CompleteDate",
							"caption": "#ResourceString(GridDetail_09epbqbDS_CompleteDate)#",
							"dataValueType": 7,
							"width": 233
						},
						{
							"id": "c1c0d2d6-a359-9f33-1128-98eab5a1e207",
							"code": "GridDetail_09epbqbDS_DurationInMinutes",
							"caption": "#ResourceString(GridDetail_09epbqbDS_DurationInMinutes)#",
							"dataValueType": 31,
							"width": 194
						},
						{
							"id": "8499d08b-8af0-9861-901b-d512c139ff9c",
							"code": "GridDetail_09epbqbDS_Status",
							"caption": "#ResourceString(GridDetail_09epbqbDS_Status)#",
							"dataValueType": 10,
							"width": 170
						},
						{
							"id": "c325db04-cda2-a702-ccd3-7e026b27d4fe",
							"code": "GridDetail_09epbqbDS_CreatedBy",
							"caption": "#ResourceString(GridDetail_09epbqbDS_CreatedBy)#",
							"dataValueType": 10,
							"width": 172
						},
						{
							"id": "5e848c35-d9e1-9628-ad4b-61b3ee5b6eb8",
							"code": "GridDetail_09epbqbDS_ErrorDescription",
							"caption": "#ResourceString(GridDetail_09epbqbDS_ErrorDescription)#",
							"dataValueType": 29
						}
					],
					"placeholder": false
				},
				"parentName": "GridContainer_cebtsx6",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TabContainer_44eh0pw",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_44eh0pw_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_8vvdjv4",
				"values": {
					"type": "crt.GridContainer",
					"items": [],
					"rows": "minmax(32px, max-content)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					}
				},
				"parentName": "TabContainer_44eh0pw",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ChartWidget_vvt1mlc",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.ChartWidget",
					"config": {
						"title": "#ResourceString(ChartWidget_vvt1mlc_title)#",
						"color": "forest-green",
						"theme": "full-fill",
						"scales": {
							"stacked": true,
							"xAxis": {
								"name": "#ResourceString(ChartWidget_vvt1mlc_xAxis)#",
								"formatting": {
									"type": "string",
									"maxLinesCount": 2,
									"maxLineLength": 10
								}
							},
							"yAxis": {
								"name": "#ResourceString(ChartWidget_vvt1mlc_yAxis)#",
								"formatting": {
									"type": "number",
									"thousandAbbreviation": {
										"enabled": true
									}
								}
							}
						},
						"series": [
							{
								"color": "burnt-coral",
								"type": "bar",
								"label": "#ResourceString(ChartWidget_vvt1mlc_series_0)#",
								"legend": {
									"enabled": false
								},
								"data": {
									"providing": {
										"attribute": "ChartWidget_vvt1mlc_SeriesData_pmqb2fb",
										"schemaName": "SysProcessLog",
										"filters": {
											"filter": {
												"items": {
													"e8c92b0d-c4e1-4559-8b44-b346dd1b6292": {
														"filterType": 4,
														"comparisonType": 3,
														"isEnabled": true,
														"trimDateTimeParameterToDate": false,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "Status"
														},
														"isAggregative": false,
														"dataValueType": 10,
														"referenceSchemaName": "SysProcessStatus",
														"rightExpressions": [
															{
																"expressionType": 2,
																"parameter": {
																	"dataValueType": 10,
																	"value": {
																		"Name": "Completed",
																		"Id": "815c9586-b6e2-df11-971b-001d60e938c6",
																		"value": "815c9586-b6e2-df11-971b-001d60e938c6",
																		"displayValue": "Completed"
																	}
																}
															}
														]
													},
													"columnIsNotNullFilter": {
														"comparisonType": 2,
														"filterType": 2,
														"isEnabled": true,
														"isNull": false,
														"trimDateTimeParameterToDate": false,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "CreatedOn"
														}
													}
												},
												"logicalOperation": 0,
												"isEnabled": true,
												"filterType": 6,
												"rootSchemaName": "SysProcessLog"
											},
											"filterAttributes": []
										},
										"aggregation": {
											"column": {
												"orderDirection": 0,
												"orderPosition": -1,
												"isVisible": true,
												"expression": {
													"expressionType": 1,
													"functionArgument": {
														"expressionType": 0,
														"columnPath": "Id"
													},
													"functionType": 2,
													"aggregationType": 1,
													"aggregationEvalType": 2
												}
											}
										},
										"dependencies": [
											{
												"attributePath": "SysSchema",
												"relationPath": "PDS.iaProcess"
											}
										],
										"rowCount": 50,
										"grouping": {
											"type": "by-date-part",
											"column": [
												{
													"orderDirection": 0,
													"orderPosition": -1,
													"isVisible": true,
													"expression": {
														"expressionType": 1,
														"functionArgument": {
															"expressionType": 0,
															"columnPath": "CreatedOn"
														},
														"functionType": 3,
														"datePartType": 1
													}
												},
												{
													"orderDirection": 0,
													"orderPosition": -1,
													"isVisible": true,
													"expression": {
														"expressionType": 1,
														"functionArgument": {
															"expressionType": 0,
															"columnPath": "CreatedOn"
														},
														"functionType": 3,
														"datePartType": 3
													}
												},
												{
													"orderDirection": 0,
													"orderPosition": -1,
													"isVisible": true,
													"expression": {
														"expressionType": 1,
														"functionArgument": {
															"expressionType": 0,
															"columnPath": "CreatedOn"
														},
														"functionType": 3,
														"datePartType": 4
													}
												}
											]
										}
									},
									"formatting": {
										"type": "number",
										"decimalSeparator": ".",
										"decimalPrecision": 0,
										"thousandSeparator": ","
									}
								},
								"dataLabel": {
									"display": false
								}
							}
						],
						"seriesOrder": {
							"type": "by-grouping-value",
							"direction": 1
						},
						"layout": {}
					},
					"sectionBindingColumnRecordId": "$Id"
				},
				"parentName": "GridContainer_8vvdjv4",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LastCallsAVGDuration_ChartWidget",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.ChartWidget",
					"config": {
						"title": "#ResourceString(LastCallsAVGDuration_ChartWidget_title)#",
						"color": "light-blue",
						"theme": "full-fill",
						"scales": {
							"stacked": false,
							"xAxis": {
								"name": "#ResourceString(LastCallsAVGDuration_ChartWidget_xAxis)#",
								"formatting": {
									"type": "string",
									"maxLinesCount": 2,
									"maxLineLength": 10
								}
							},
							"yAxis": {
								"name": "#ResourceString(LastCallsAVGDuration_ChartWidget_yAxis)#",
								"formatting": {
									"type": "number",
									"thousandAbbreviation": {
										"enabled": true
									}
								}
							}
						},
						"series": [
							{
								"color": "burnt-coral",
								"type": "line",
								"label": "#ResourceString(LastCallsAVGDuration_ChartWidget_series_0)#",
								"legend": {
									"enabled": false
								},
								"data": {
									"providing": {
										"attribute": "ChartWidget_y3wv7dc_SeriesData_dhfpbti",
										"schemaName": "SysProcessLog",
										"filters": {
											"filter": {
												"items": {
													"columnIsNotNullFilter": {
														"comparisonType": 2,
														"filterType": 2,
														"isEnabled": true,
														"isNull": false,
														"trimDateTimeParameterToDate": false,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "CreatedOn"
														}
													}
												},
												"logicalOperation": 0,
												"isEnabled": true,
												"filterType": 6,
												"rootSchemaName": "SysProcessLog"
											},
											"filterAttributes": []
										},
										"aggregation": {
											"column": {
												"orderDirection": 0,
												"orderPosition": -1,
												"isVisible": true,
												"expression": {
													"expressionType": 1,
													"functionArgument": {
														"expressionType": 0,
														"columnPath": "DurationInMilliseconds"
													},
													"functionType": 2,
													"aggregationType": 3,
													"aggregationEvalType": 0
												}
											}
										},
										"dependencies": [
											{
												"attributePath": "SysSchema",
												"relationPath": "PDS.iaProcess"
											}
										],
										"rowCount": 50,
										"grouping": {
											"type": "by-date-part",
											"column": [
												{
													"orderDirection": 0,
													"orderPosition": -1,
													"isVisible": true,
													"expression": {
														"expressionType": 1,
														"functionArgument": {
															"expressionType": 0,
															"columnPath": "CreatedOn"
														},
														"functionType": 3,
														"datePartType": 1
													}
												},
												{
													"orderDirection": 0,
													"orderPosition": -1,
													"isVisible": true,
													"expression": {
														"expressionType": 1,
														"functionArgument": {
															"expressionType": 0,
															"columnPath": "CreatedOn"
														},
														"functionType": 3,
														"datePartType": 3
													}
												},
												{
													"orderDirection": 0,
													"orderPosition": -1,
													"isVisible": true,
													"expression": {
														"expressionType": 1,
														"functionArgument": {
															"expressionType": 0,
															"columnPath": "CreatedOn"
														},
														"functionType": 3,
														"datePartType": 4
													}
												}
											]
										}
									},
									"formatting": {
										"type": "number",
										"decimalSeparator": ".",
										"decimalPrecision": 2,
										"thousandSeparator": ","
									}
								},
								"dataLabel": {
									"display": false
								}
							}
						],
						"seriesOrder": {
							"type": "by-grouping-value",
							"direction": 1
						},
						"layout": {}
					},
					"sectionBindingColumnRecordId": "$Id",
					"visible": true
				},
				"parentName": "GridContainer_8vvdjv4",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ChartWidget_w8sn37r",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.ChartWidget",
					"config": {
						"title": "#ResourceString(ChartWidget_w8sn37r_title)#",
						"color": "forest-green",
						"theme": "full-fill",
						"scales": {
							"stacked": false,
							"xAxis": {
								"name": "#ResourceString(ChartWidget_w8sn37r_xAxis)#",
								"formatting": {
									"type": "string",
									"maxLinesCount": 2,
									"maxLineLength": 10
								}
							},
							"yAxis": {
								"name": "#ResourceString(ChartWidget_w8sn37r_yAxis)#",
								"formatting": {
									"type": "number",
									"thousandAbbreviation": {
										"enabled": true
									}
								}
							}
						},
						"series": [
							{
								"color": "burnt-coral",
								"type": "area",
								"label": "#ResourceString(ChartWidget_w8sn37r_series_0)#",
								"legend": {
									"enabled": false
								},
								"data": {
									"providing": {
										"attribute": "ChartWidget_w8sn37r_SeriesData_yoy4cya",
										"schemaName": "SysProcessLog",
										"filters": {
											"filter": {
												"items": {
													"columnIsNotNullFilter": {
														"comparisonType": 2,
														"filterType": 2,
														"isEnabled": true,
														"isNull": false,
														"trimDateTimeParameterToDate": false,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "CreatedOn"
														}
													}
												},
												"logicalOperation": 0,
												"isEnabled": true,
												"filterType": 6,
												"rootSchemaName": "SysProcessLog"
											},
											"filterAttributes": []
										},
										"aggregation": {
											"column": {
												"orderDirection": 0,
												"orderPosition": -1,
												"isVisible": true,
												"expression": {
													"expressionType": 1,
													"functionArgument": {
														"expressionType": 0,
														"columnPath": "Id"
													},
													"functionType": 2,
													"aggregationType": 1,
													"aggregationEvalType": 2
												}
											}
										},
										"dependencies": [
											{
												"attributePath": "SysSchema",
												"relationPath": "PDS.iaProcess"
											}
										],
										"rowCount": 50,
										"grouping": {
											"type": "by-date-part",
											"column": [
												{
													"orderDirection": 0,
													"orderPosition": -1,
													"isVisible": true,
													"expression": {
														"expressionType": 1,
														"functionArgument": {
															"expressionType": 0,
															"columnPath": "CreatedOn"
														},
														"functionType": 3,
														"datePartType": 6
													}
												}
											]
										}
									},
									"formatting": {
										"type": "number",
										"decimalSeparator": ".",
										"decimalPrecision": 0,
										"thousandSeparator": ","
									}
								},
								"dataLabel": {
									"display": false
								}
							}
						],
						"seriesOrder": {
							"type": "by-grouping-value",
							"direction": 1
						},
						"layout": {}
					},
					"sectionBindingColumnRecordId": "$Id"
				},
				"parentName": "GridContainer_8vvdjv4",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ChartWidget_19zjp2s",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.ChartWidget",
					"config": {
						"title": "#ResourceString(ChartWidget_19zjp2s_title)#",
						"color": "cadmium-red",
						"theme": "full-fill",
						"scales": {
							"stacked": true,
							"xAxis": {
								"name": "#ResourceString(ChartWidget_19zjp2s_xAxis)#",
								"formatting": {
									"type": "string",
									"maxLinesCount": 2,
									"maxLineLength": 10
								}
							},
							"yAxis": {
								"name": "#ResourceString(ChartWidget_19zjp2s_yAxis)#",
								"formatting": {
									"type": "number",
									"thousandAbbreviation": {
										"enabled": true
									}
								}
							}
						},
						"series": [
							{
								"color": "burnt-coral",
								"type": "bar",
								"label": "#ResourceString(ChartWidget_19zjp2s_series_0)#",
								"legend": {
									"enabled": true
								},
								"data": {
									"providing": {
										"attribute": "ChartWidget_19zjp2s_SeriesData_r45gc68",
										"schemaName": "SysProcessLog",
										"filters": {
											"filter": {
												"items": {
													"88256943-a1a6-4a76-a40a-1cd635113513": {
														"filterType": 4,
														"comparisonType": 3,
														"isEnabled": true,
														"trimDateTimeParameterToDate": false,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "Status"
														},
														"isAggregative": false,
														"dataValueType": 10,
														"referenceSchemaName": "SysProcessStatus",
														"rightExpressions": [
															{
																"expressionType": 2,
																"parameter": {
																	"dataValueType": 10,
																	"value": {
																		"Name": "Error",
																		"Id": "f942c08d-b6e2-df11-971b-001d60e938c6",
																		"value": "f942c08d-b6e2-df11-971b-001d60e938c6",
																		"displayValue": "Error"
																	}
																}
															},
															{
																"expressionType": 2,
																"parameter": {
																	"dataValueType": 10,
																	"value": {
																		"Name": "Canceled",
																		"Id": "1be78f3e-234d-4d6a-869a-dc07253fd2f3",
																		"value": "1be78f3e-234d-4d6a-869a-dc07253fd2f3",
																		"displayValue": "Canceled"
																	}
																}
															}
														]
													},
													"columnIsNotNullFilter": {
														"comparisonType": 2,
														"filterType": 2,
														"isEnabled": true,
														"isNull": false,
														"trimDateTimeParameterToDate": false,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "ModifiedOn"
														}
													}
												},
												"logicalOperation": 0,
												"isEnabled": true,
												"filterType": 6,
												"rootSchemaName": "SysProcessLog"
											},
											"filterAttributes": []
										},
										"aggregation": {
											"column": {
												"orderDirection": 0,
												"orderPosition": -1,
												"isVisible": true,
												"expression": {
													"expressionType": 1,
													"functionArgument": {
														"expressionType": 0,
														"columnPath": "Id"
													},
													"functionType": 2,
													"aggregationType": 1,
													"aggregationEvalType": 2
												}
											}
										},
										"dependencies": [
											{
												"attributePath": "SysSchema",
												"relationPath": "PDS.iaProcess"
											}
										],
										"rowCount": 50,
										"grouping": {
											"type": "by-date-part",
											"column": [
												{
													"orderDirection": 0,
													"orderPosition": -1,
													"isVisible": true,
													"expression": {
														"expressionType": 1,
														"functionArgument": {
															"expressionType": 0,
															"columnPath": "ModifiedOn"
														},
														"functionType": 3,
														"datePartType": 1
													}
												},
												{
													"orderDirection": 0,
													"orderPosition": -1,
													"isVisible": true,
													"expression": {
														"expressionType": 1,
														"functionArgument": {
															"expressionType": 0,
															"columnPath": "ModifiedOn"
														},
														"functionType": 3,
														"datePartType": 3
													}
												},
												{
													"orderDirection": 0,
													"orderPosition": -1,
													"isVisible": true,
													"expression": {
														"expressionType": 1,
														"functionArgument": {
															"expressionType": 0,
															"columnPath": "ModifiedOn"
														},
														"functionType": 3,
														"datePartType": 4
													}
												}
											]
										}
									},
									"formatting": {
										"type": "number",
										"decimalSeparator": ".",
										"decimalPrecision": 0,
										"thousandSeparator": ","
									}
								},
								"dataLabel": {
									"display": true
								}
							}
						],
						"seriesOrder": {
							"type": "by-grouping-value",
							"direction": 1
						},
						"layout": {}
					},
					"sectionBindingColumnRecordId": "$Id"
				},
				"parentName": "GridContainer_8vvdjv4",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_l7l2noy",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"items": [],
					"fitContent": true,
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch"
				},
				"parentName": "TabContainer_44eh0pw",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "CallsByUser_ChartWidget",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 2,
						"row": 1,
						"rowSpan": 6
					},
					"type": "crt.ChartWidget",
					"config": {
						"title": "#ResourceString(CallsByUser_ChartWidget_title)#",
						"color": "dark-blue",
						"theme": "full-fill",
						"scales": {
							"stacked": false,
							"xAxis": {
								"name": "",
								"formatting": {
									"type": "string",
									"maxLinesCount": 2,
									"maxLineLength": 10
								}
							},
							"yAxis": {
								"name": "",
								"formatting": {
									"type": "number",
									"thousandAbbreviation": {
										"enabled": true
									}
								}
							}
						},
						"series": [
							{
								"type": "doughnut",
								"label": "#ResourceString(CallsByUser_ChartWidget_series_0)#",
								"legend": {
									"enabled": false
								},
								"data": {
									"providing": {
										"attribute": "ChartWidget_18etg4q_SeriesData_bxwnu9v",
										"schemaName": "SysProcessLog",
										"filters": {
											"filter": {
												"items": {
													"columnIsNotNullFilter": {
														"comparisonType": 2,
														"filterType": 2,
														"isEnabled": true,
														"isNull": false,
														"trimDateTimeParameterToDate": false,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "CreatedBy"
														}
													}
												},
												"logicalOperation": 0,
												"isEnabled": true,
												"filterType": 6,
												"rootSchemaName": "SysProcessLog"
											},
											"filterAttributes": []
										},
										"aggregation": {
											"column": {
												"orderDirection": 0,
												"orderPosition": -1,
												"isVisible": true,
												"expression": {
													"expressionType": 1,
													"functionArgument": {
														"expressionType": 0,
														"columnPath": "Id"
													},
													"functionType": 2,
													"aggregationType": 1,
													"aggregationEvalType": 2
												}
											}
										},
										"dependencies": [
											{
												"attributePath": "SysSchema",
												"relationPath": "PDS.iaProcess"
											}
										],
										"rowCount": 50,
										"grouping": {
											"type": "by-value",
											"column": {
												"orderDirection": 0,
												"orderPosition": -1,
												"isVisible": true,
												"expression": {
													"expressionType": 0,
													"columnPath": "CreatedBy"
												}
											}
										}
									},
									"formatting": {
										"type": "number",
										"decimalSeparator": ".",
										"decimalPrecision": 0,
										"thousandSeparator": ","
									}
								},
								"dataLabel": {
									"display": false
								}
							}
						],
						"seriesOrder": {
							"type": "by-grouping-value",
							"direction": 1
						},
						"layout": {}
					},
					"sectionBindingColumnRecordId": "$Id"
				},
				"parentName": "GridContainer_l7l2noy",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ChartWidget_pxcm61n",
				"values": {
					"layoutConfig": {
						"column": 3,
						"colSpan": 2,
						"row": 1,
						"rowSpan": 6
					},
					"type": "crt.ChartWidget",
					"config": {
						"title": "#ResourceString(ChartWidget_pxcm61n_title)#",
						"color": "dark-blue",
						"theme": "full-fill",
						"scales": {
							"stacked": false,
							"xAxis": {
								"name": "",
								"formatting": {
									"type": "string",
									"maxLinesCount": 2,
									"maxLineLength": 10
								}
							},
							"yAxis": {
								"name": "",
								"formatting": {
									"type": "number",
									"thousandAbbreviation": {
										"enabled": true
									}
								}
							}
						},
						"series": [
							{
								"type": "doughnut",
								"label": "#ResourceString(ChartWidget_pxcm61n_series_0)#",
								"legend": {
									"enabled": false
								},
								"data": {
									"providing": {
										"attribute": "ChartWidget_pxcm61n_SeriesData_vn17d9p",
										"schemaName": "VwSysProcessLog",
										"filters": {
											"filter": {
												"items": {
													"columnIsNotNullFilter": {
														"comparisonType": 2,
														"filterType": 2,
														"isEnabled": true,
														"isNull": false,
														"trimDateTimeParameterToDate": false,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "Status"
														}
													}
												},
												"logicalOperation": 0,
												"isEnabled": true,
												"filterType": 6,
												"rootSchemaName": "VwSysProcessLog"
											},
											"filterAttributes": []
										},
										"aggregation": {
											"column": {
												"orderDirection": 0,
												"orderPosition": -1,
												"isVisible": true,
												"expression": {
													"expressionType": 1,
													"functionArgument": {
														"expressionType": 0,
														"columnPath": "Id"
													},
													"functionType": 2,
													"aggregationType": 1,
													"aggregationEvalType": 2
												}
											}
										},
										"dependencies": [
											{
												"attributePath": "SysSchema",
												"relationPath": "PDS.iaProcess"
											}
										],
										"rowCount": 50,
										"grouping": {
											"type": "by-value",
											"column": {
												"orderDirection": 0,
												"orderPosition": -1,
												"isVisible": true,
												"expression": {
													"expressionType": 0,
													"columnPath": "Status"
												}
											}
										}
									},
									"formatting": {
										"type": "number",
										"decimalSeparator": ".",
										"decimalPrecision": 0,
										"thousandSeparator": ","
									}
								},
								"dataLabel": {
									"display": false
								}
							}
						],
						"seriesOrder": {
							"type": "by-grouping-value",
							"direction": 1
						},
						"layout": {}
					},
					"sectionBindingColumnRecordId": "$Id"
				},
				"parentName": "GridContainer_l7l2noy",
				"propertyName": "items",
				"index": 1
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"PDS_iaProcess_885v3ao": {
						"modelConfig": {
							"path": "PDS.iaProcess"
						}
					},
					"PDS_iaNumberOfCalls_tt0hzse": {
						"modelConfig": {
							"path": "PDS.iaNumberOfCalls"
						}
					},
					"PDS_iaMaxExecutionTime_o8gg4ov": {
						"modelConfig": {
							"path": "PDS.iaMaxExecutionTime"
						}
					},
					"PDS_iaMinExecutionTime_k3lqu0e": {
						"modelConfig": {
							"path": "PDS.iaMinExecutionTime"
						}
					},
					"PDS_iaInstancesInProgressMoreThanDay_nxnje5d": {
						"modelConfig": {
							"path": "PDS.iaInstancesInProgressMoreThanDay"
						}
					},
					"PDS_iaInstancesWithErrorResult_91a71us": {
						"modelConfig": {
							"path": "PDS.iaInstancesWithErrorResult"
						}
					},
					"PDS_iaErrorExecutionsPercent_4gknywy": {
						"modelConfig": {
							"path": "PDS.iaErrorExecutionsPercent"
						}
					},
					"PDS_iaAVG_mejyca8": {
						"modelConfig": {
							"path": "PDS.iaAVG"
						}
					},
					"GridDetail_09epbqb": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_09epbqbDS",
							"filterAttributes": [
								{
									"name": "GridDetailSearchFilter_zzf2ea6_GridDetail_09epbqb",
									"loadOnChange": true
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_09epbqbDS_StartDate": {
									"modelConfig": {
										"path": "GridDetail_09epbqbDS.StartDate"
									}
								},
								"GridDetail_09epbqbDS_CompleteDate": {
									"modelConfig": {
										"path": "GridDetail_09epbqbDS.CompleteDate"
									}
								},
								"GridDetail_09epbqbDS_DurationInMinutes": {
									"modelConfig": {
										"path": "GridDetail_09epbqbDS.DurationInMinutes"
									}
								},
								"GridDetail_09epbqbDS_Status": {
									"modelConfig": {
										"path": "GridDetail_09epbqbDS.Status"
									}
								},
								"GridDetail_09epbqbDS_CreatedBy": {
									"modelConfig": {
										"path": "GridDetail_09epbqbDS.CreatedBy"
									}
								},
								"GridDetail_09epbqbDS_ErrorDescription": {
									"modelConfig": {
										"path": "GridDetail_09epbqbDS.ErrorDescription"
									}
								},
								"GridDetail_09epbqbDS_Id": {
									"modelConfig": {
										"path": "GridDetail_09epbqbDS.Id"
									}
								}
							}
						}
					},
					"PDS_iaLastErrorDate_wo427nm": {
						"modelConfig": {
							"path": "PDS.iaLastErrorDate"
						}
					},
					"PDS_iaErrorExecutions24h_8drq8a7": {
						"modelConfig": {
							"path": "PDS.iaErrorExecutions24h"
						}
					},
					"PDS_iaErrorPercent24h_xm71cxw": {
						"modelConfig": {
							"path": "PDS.iaErrorPercent24h"
						}
					},
					"PDS_iaLastDurationMinutes_skybrmg": {
						"modelConfig": {
							"path": "PDS.iaLastDurationMinutes"
						}
					},
					"PDS_iaLastEndDate_eh5b7ck": {
						"modelConfig": {
							"path": "PDS.iaLastEndDate"
						}
					},
					"PDS_iaLastStartDate_a7la5aw": {
						"modelConfig": {
							"path": "PDS.iaLastStartDate"
						}
					},
					"PDS_iaLastErrorDescription_dx0z0h9": {
						"modelConfig": {
							"path": "PDS.iaLastErrorDescription"
						}
					},
					"PDS_iaCalls24h_d4y639k": {
						"modelConfig": {
							"path": "PDS.iaCalls24h"
						}
					},
					"PDS_iaCalls7d_5lg9tc6": {
						"modelConfig": {
							"path": "PDS.iaCalls7d"
						}
					},
					"PDS_iaOwner_xs6jp4o": {
						"modelConfig": {
							"path": "PDS.iaOwner"
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Id",
					"modelConfig"
				],
				"values": {
					"path": "PDS.Id"
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"primaryDataSourceName": "PDS",
					"dependencies": {
						"GridDetail_09epbqbDS": [
							{
								"attributePath": "SysSchema",
								"relationPath": "PDS.iaProcess"
							}
						]
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"PDS": {
						"type": "crt.EntityDataSource",
						"config": {
							"entitySchemaName": "iaProcessLogAnalytics"
						},
						"scope": "page"
					},
					"GridDetail_09epbqbDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "SysProcessLog",
							"attributes": {
								"StartDate": {
									"path": "StartDate"
								},
								"CompleteDate": {
									"path": "CompleteDate"
								},
								"DurationInMinutes": {
									"path": "DurationInMinutes"
								},
								"Status": {
									"path": "Status"
								},
								"CreatedBy": {
									"path": "CreatedBy"
								},
								"ErrorDescription": {
									"path": "ErrorDescription"
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});