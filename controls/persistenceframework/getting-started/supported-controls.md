---
title: Supported Controls
page_title: Supported Controls - RadPersistenceFramework
description: Check our Web Forms article about Supported Controls.
slug: persistenceframework/getting-started/supported-controls
tags: supported,controls
published: True
position: 1
---

# Supported Controls

The main functionality of Telerik Persistence Framework is to provide long-term UI state persistence of Telerik® UI for ASP.NET AJAX controls. Since not all Telerik controls have user interaction modifiable configuration, therefore, not all of the controls' state can be persisted.

Following is a list of controls and the properties that can be persisted with Persistence Framework:

## Controls

### RadButton

- Properties
  - `Checked`
  - `SelectedToggleStateIndex`

### RadCalendar

- Properties
  - `FocusedDate`
  - `SelectedDate`

### RadColorPicker

- Properties
  - `SelectedColor`

### RadComboBox

- Selected Nodes
- Checked Nodes

### RadDataPager

- Properties
  - `PageSize`
  - `StartRowIndex`

### RadDock

- Properties
  - `Closed`
  - `Collapsed`
  - `DockZoneID`
  - `ExpandedHeight`
  - `Height`
  - `Index`
  - `Left`
  - `Pinned`
  - `Top`
  - `Width`

### RadDropDownList

- Properties
  - `SelectedIndex`

### RadDropDownTree

- Properties
  - `ExpandedIndices`
  - `CheckedIndices`
- Selected indices of the embedded tree

### RadFilter

- Properties
  - `FilterExpression` (internal property)

### RadGrid

- Grid Properties
  - `CurrentPageIndex`
  - `PageSize`
  - `EditIndexes`
  - `SelectedCellIndexes`
  - `SelectedIndexes`
  - `AllowMultiColumnSorting`
  - `Group-by expressions`
  - `Sort Expressions`
  - `Filter Expressions`
- MasterTableView
  - `ColumnSettings`
  - `CurrentPageIndex`
  - `FilterExpression`
  - `GroupByExpression`
  - `IsItemInserted`
  - `PageSize`
  - `SortExpression`
- Columns
  - `Width`
  - `OrderIndex`
  - `Display`
  - `Visible`
  - `CurrentFilterFunction`
  - `CurrentFilterValue`

Make sure to call the `.Rebind()` method of the grid after you call `.LoadState()`, so that the newly loaded settings take effect.
>important Hierarchy and DetailTable persistence is not supported

### RadListBox

- Properties
  - `CheckedIndices` (internal property)
  - `SelectedIndices` (internal property)

### RadListView

- Properties
  - `CurrentPageIndex`
  - `EditIndexes`
  - `FilterExpressions`
  - `IsItemInserted`
  - `PageSize`
  - `SelectedIndexes`
  - `SortExpressions`

### RadMenu

- Properties
  - `SelectedIndex`

### RadOrgChart

- Properties
  - `CollapsedIndices` (internal property)
  - `GroupCollapseIndices` (internal property)

### RadPane

- Properties
  - `CollapsedHeightWidth`

### RadPanelBar

- Properties
  - `ExpandedIndices` (internal property)
  - `SelectedIndex` (internal property)

### RadPivotGrid

- Properties
  - `AggregatesPosition`
  - `AggregatesLevel`
  - `PageSize`
  - `CurrentPageIndex`
  - `FilterExpressions`
- Field settings
  - `SortOrder`
  - `ZoneIndex`
  - `UniqueName`
  - `ZoneType`
- `CollapsedRowIndexes`
- `CollapsedColumnIndexes`
- `SortExpressions`
- `ConfigurationPanel-LayoutType`

### RadRibbonBar

- Properties
  - `Minimized`
  - `SelectedTabIndex`

### RadScheduler

- Properties
  - `Selected Date`
  - `Selected View`

### RadSkinManager

- Properties
  - `Skin`

### RadSlider

- Properties
  - `SelectionEnd`
  - `SelectionStart`
  - `Value`

### RadSlidingPane

- Properties
  - `Height`
  - `Width`

### RadSlidingZone

- Properties
  - `DockedPaneId`
  - `ExpandedPaneId`

### RadTabStrip

- Properties
  - `SelectedIndices` (internal property)

### RadTileList

- Properties
  - `TileGroupIndices` (internal property)
  - `SelectedTilesUniqueIds` (internal property)

### RadToolBar

- Properties
  - `CheckedIndices` (internal property)

### RadTreeList

- Properties
  - `CurrentPageIndex`
  - `EditIndexes`
  - `ExpandedIndexes`
  - `InsertIndexes`
  - `IsItemInserted`
  - `PageSize`
  - `SelectedIndexes`
  - `SortExpressions`

### RadTreeView

- Properties
  - `CheckedIndices` (internal property)
  - `ExpandedIndices` (internal property)
  - `SelectedIndex` (internal property)
