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



The main functionality of Telerik's Persistence Framework is to provide long-term UI state persistence of Telerik UI for ASP.NET AJAX. Since not all Telerik controls have user interaction modifiable configuration not all of the controls' state can be persisted.

The following is a list of controls and the properties that can be persisted with Persistence Framework:


| Control | Properties |
| ------ | ------ |
| __RadButton__ |CheckedSelectedToggleStateIndex|
| __RadCalendar__ |FocusedDateSelectedDate|
| __RadColorPicker__ |SelectedColor|
| __RadComboBox__ |Selected NodesChecked Nodes|
| __RadDataPager__ |PageSizeStartRowIndex|
| __RadDock__ |ClosedCollapsedDockZoneIDExpandedHeightHeightIndexLeftPinnedTopWidth|
| __RadDropDownList__ |SelectedIndex|
| __RadDropDownTree__ |ExpandedIndicesCheckedIndicesSelected indices of the embedded tree|
| __RadFilter__ |FilterExpression (internal property)|
| __RadGrid__ |CurrentPageIndexPageSizeEditIndexesSelectedCellIndexesSelectedIndexesMulti-column sorting|
| __GridTableView__ |ColumnSettingsCurrentPageIndexFilterExpressionGroupByExpressionIsItemInsertedPageSizeSortExpression|
| __RadListBox__ |CheckedIndices (internal property)SelectedIndices (internal property)|
| __RadListView__ |CurrentPageIndexEditIndexesFilterExpressionsIsItemInsertedPageSizeSelectedIndexesSortExpressions|
| __RadMenu__ |SelectedIndex|
| __RadOrgChart__ |CollapsedIndices (internal property)GroupCollapseIndices (internal property)|
| __RadPane__ |CollapsedHeightWidth|
| __RadPanelBar__ |ExpandedIndices (internal property)SelectedIndex (internal property)|
| __RadPivotGrid__ |AggregatesPositionAggregatesLevelPageSizeCurrentPageIndexFilterExpressionsFields collection (FieldSettings)

* SortOrder

* ZoneIndex

* UniqueName

* ZoneTypeCollapsedRowIndexesCollapsedColumnIndexesSortExpressionsConfigurationPanel-LayoutType|
| __RadRibbonBar__ |MinimizedSelectedTabIndex|
| __RadScheduler__ |Selected DateSelected View|
| __RadSkinManager__ |Skin|
| __RadSlider__ |SelectionEndSelectionStartValue|
| __RadSlidingPane__ |HeightWidth|
| __RadSlidingZone__ |DockedPaneIdExpandedPaneId|
| __RadTabStrip__ |SelectedIndices (internal property)|
| __RadTileList__ |TileGroupIndices (internal property)SelectedTilesUniqueIds (internal property)|
| __RadToolBar__ |CheckedIndices (internal property)|
| __RadTreeList__ |CurrentPageIndexEditIndexesExpandedIndexesInsertIndexesIsItemInsertedPageSizeSelectedIndexesSortExpressions|
| __RadTreeView__ |CheckedIndices (internal property)ExpandedIndices (internal property)SelectedIndex (internal property)|
