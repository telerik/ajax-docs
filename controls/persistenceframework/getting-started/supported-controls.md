---
title: Supported Controls
page_title: Supported Controls | UI for ASP.NET AJAX Documentation
description: Supported Controls
slug: persistenceframework/getting-started/supported-controls
tags: supported,controls
published: True
position: 1
---

# Supported Controls



The main functionality of Telerik Persistence Framework is to provide long-term UI state persistence of Telerik UI for ASP.NET AJAX controls. Since not all Telerik controls have user interaction modifiable configuration not all of the controls' state can be persisted.

Following is a list of controls and the properties that can be persisted with Persistence Framework:


| Control | Properties |
| ------ | ------ |
| **RadButton** | **Checked**, **SelectedToggleStateIndex** |
| **RadCalendar** | **FocusedDate**, **SelectedDate** |
| **RadColorPicker** | **SelectedColor** |
| **RadComboBox** | **Selected Nodes**, **Checked Nodes** |
| **RadDataPager** | **PageSize**, **StartRowIndex** |
| **RadDock** | **Closed**, **Collapsed**, **DockZoneID**, **ExpandedHeight**, **Height**, **Index**, **Left**, **Pinned**, **Top**, **Width** |
| **RadDropDownList** | **SelectedIndex** |
| **RadDropDownTree** | **ExpandedIndices**, **CheckedIndices**, Selected indices of the embedded tree |
| **RadFilter** | **FilterExpression** (internal property) |
| **RadGrid** | **CurrentPageIndex**, **PageSize**, **EditIndexes**, **SelectedCellIndexes**, **SelectedIndexes**, **AllowMultiColumnSorting** |
| **GridTableView** | **ColumnSettings**, **CurrentPageIndex**, **FilterExpression**, **GroupByExpression**, **IsItemInserted**, **PageSize**, **SortExpression** |
| **RadListBox** | **CheckedIndices** (internal property), **SelectedIndices** (internal property)|
| **RadListView** | **CurrentPageIndex**, **EditIndexes**, **FilterExpressions**, **IsItemInserted**, **PageSize**, **SelectedIndexes**, **SortExpressions** |
| **RadMenu** | **SelectedIndex** |
| **RadOrgChart** | **CollapsedIndices** (internal property), **GroupCollapseIndices** (internal property) |
| **RadPane** | **CollapsedHeightWidth** |
| **RadPanelBar** | **ExpandedIndices** (internal property), **SelectedIndex** (internal property) |
| **RadPivotGrid** | **AggregatesPosition**, **AggregatesLevel**, **PageSize**, **CurrentPageIndex**, **FilterExpressions**, field settings (**SortOrder**, **ZoneIndex**, **UniqueName**, **ZoneType**),  **CollapsedRowIndexes**, **CollapsedColumnIndexes**, **SortExpressions**, **ConfigurationPanel-LayoutType** |
| **RadRibbonBar** | **Minimized**, **SelectedTabIndex** |
| **RadScheduler** | **Selected Date**, **Selected View** |
| **RadSkinManager** | **Skin** |
| **RadSlider** | **SelectionEnd**, **SelectionStart**, **Value** |
| **RadSlidingPane** | **Height**, **Width** |
| **RadSlidingZone** | **DockedPaneId**, **ExpandedPaneId** |
| **RadTabStrip** | **SelectedIndices** (internal property) |
| **RadTileList** | **TileGroupIndices** (internal property), **SelectedTilesUniqueIds** (internal property) |
| **RadToolBar** | **CheckedIndices** (internal property) |
| **RadTreeList** | **CurrentPageIndex**, **EditIndexes**, **ExpandedIndexes**, **InsertIndexes**, **IsItemInserted**, **PageSize**, **SelectedIndexes**, **SortExpressions** |
| **RadTreeView** | **CheckedIndices** (internal property), **ExpandedIndices** (internal property), **SelectedIndex** (internal property) |


