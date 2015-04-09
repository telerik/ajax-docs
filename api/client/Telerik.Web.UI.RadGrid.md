---
title: Telerik.Web.UI.RadGrid
page_title: Client-side API Reference
description: Client-side API Reference
---

# Telerik.Web.UI.RadGrid : Telerik.Web.UI.RadWebControl

## Methods

### onWindowResize

Resizes the modal background of the grid, when the window is resized

#### Parameters

#### Returns

`None` 

### get_selectedItems

Returns a collection of selected items in the grid instance

#### Parameters

#### Returns

`Array` 

### set_allowMultiRowSelection

Sets a Boolean value, indicating whether we have enabled multi row selection for the control

#### Parameters

##### value `Boolean`

#### Returns

`None` 

### get_masterTableViewHeader

Returns the master table view header instance of the grid

#### Parameters

#### Returns

`Object` 

### isInEditModeByHierarchicalIndex

Returns a Boolean value, indicating whether the control is in edit mode, based on the passed Hierarchical index

#### Parameters

##### hierarchicalIndex `String`

#### Returns

`Boolean` 

### clearSelectedItems

Clears the selected items collection of RadGrid

#### Parameters

#### Returns

`None` 

### clearActiveRow

Clears the current active row for the control

#### Parameters

#### Returns

`None` 

### get_selectedItemsInternal

Gets an internal collection of selected items in the grid

#### Parameters

#### Returns

`Number` 

### saveClientState

Saves the client state of the grid instance

#### Parameters

#### Returns

`None` 

### get_allowActiveRowCycle

Returns a Boolean value, indicating whether KeyboardNavigationSettings AllowActiveRowCycle="true"

#### Parameters

#### Returns

`Boolean` 

### get_headerMenu

Gets the header menu of the grid instance

#### Parameters

#### Returns

`Object` 

### get_editItems

#### Parameters

#### Returns

`Array` 

### get_allowMultiRowSelection

Returns a Boolean value, indicating whether we have enabled multi row selection for the control

#### Parameters

#### Returns

`Boolean` 

### set_selectedItemsInternal

Sets an internal collection of selected items in the grid

#### Parameters

##### value `Number`

#### Returns

`None` 

### resizeModalBackground

Resizes the modal background of the grid, when the window is resized

#### Parameters

#### Returns

`None` 

### get_element

#### Parameters

#### Returns

`Element` 

### repaint

Redraws the client side object on the client

#### Parameters

#### Returns

`None` 

### set_visible

#### Parameters

#### Returns

`Object` 

### get_id

#### Parameters

#### Returns

`String` 

### get_masterTableView

Returns the master table view instance of the grid

#### Parameters

#### Returns

`Telerik.Web.UI.GridTableView` 

### confirm

Shows a confirm window

#### Parameters

##### text `String`

##### e `Object`

##### title `String`

##### width `Number`

##### height `Number`

#### Returns

`None` 

### get_detailTables

Returns a collection of detail tables in RadGrid

#### Parameters

#### Returns

`Array` 

### get_visible

Boolean

#### Parameters

#### Returns

`None` 

### get_masterTableViewFooter

Returns the master table view footer instance of the grid

#### Parameters

#### Returns

`Object` 

### set_allowActiveRowCycle

Sets a value, indicating whether AllowActiveRowCycle="true"

#### Parameters

#### Returns

`Boolean` 

## Events

### activeRowChanging

#### Event Data

##### sender `Telerik.Web.UI.RadGrid`

The instance of the RadGrid raised the event.

##### args `Telerik.Web.UI.GridDataItemCancelEventArgs`

### activeRowChanged

#### Event Data

##### sender `Telerik.Web.UI.RadGrid`

The instance of the RadGrid raised the event.

##### args `Telerik.Web.UI.GridDataItemEventArgs`

### cellDeselecting

#### Event Data

##### sender `Telerik.Web.UI.RadGrid`

The instance of the RadGrid raised the event.

##### args `Telerik.Web.UI.GridCellSelectCancelEventArgs`

### cellDeselected

#### Event Data

##### sender `Telerik.Web.UI.RadGrid`

The instance of the RadGrid raised the event.

##### args `Telerik.Web.UI.GridCellSelectEventArgs`

### cellSelecting

#### Event Data

##### sender `Telerik.Web.UI.RadGrid`

The instance of the RadGrid raised the event.

##### args `Telerik.Web.UI.GridCellSelectCancelEventArgs`

### cellSelected

#### Event Data

##### sender `Telerik.Web.UI.RadGrid`

The instance of the RadGrid raised the event.

##### args `Telerik.Web.UI.GridCellSelectEventArgs`

### columnClick

#### Event Data

##### sender `Telerik.Web.UI.RadGrid`

The instance of the RadGrid raised the event.

##### args `Telerik.Web.UI.GridColumnEventArgs`

### columnContextMenu

#### Event Data

##### sender `Telerik.Web.UI.RadGrid`

The instance of the RadGrid raised the event.

##### args `Telerik.Web.UI.GridColumnEventArgs`

### columnCreated

#### Event Data

##### sender `Telerik.Web.UI.RadGrid`

The instance of the RadGrid raised the event.

##### args `Telerik.Web.UI.GridColumnCreatedEventArgs`

### columnDblClick

#### Event Data

##### sender `Telerik.Web.UI.RadGrid`

The instance of the RadGrid raised the event.

##### args `Telerik.Web.UI.GridColumnEventArgs`

### columnHiding

#### Event Data

##### sender `Telerik.Web.UI.RadGrid`

The instance of the RadGrid raised the event.

##### args `Telerik.Web.UI.GridColumnCancelEventArgs`

### columnHidden

#### Event Data

##### sender `Telerik.Web.UI.RadGrid`

The instance of the RadGrid raised the event.

##### args `Telerik.Web.UI.GridColumnEventArgs`

### columnMouseOut

#### Event Data

##### sender `Telerik.Web.UI.RadGrid`

The instance of the RadGrid raised the event.

##### args `Telerik.Web.UI.GridColumnEventArgs`

### columnMouseOver

#### Event Data

##### sender `Telerik.Web.UI.RadGrid`

The instance of the RadGrid raised the event.

##### args `Telerik.Web.UI.GridColumnEventArgs`

### columnMovingToLeft

#### Event Data

##### sender `Telerik.Web.UI.RadGrid`

The instance of the RadGrid raised the event.

##### args `Telerik.Web.UI.GridColumnCancelEventArgs`

### columnMovedToLeft

#### Event Data

##### sender `Telerik.Web.UI.RadGrid`

The instance of the RadGrid raised the event.

##### args `Telerik.Web.UI.GridColumnEventArgs`

### columnMovingToRight

#### Event Data

##### sender `Telerik.Web.UI.RadGrid`

The instance of the RadGrid raised the event.

##### args `Telerik.Web.UI.GridColumnCancelEventArgs`

### columnMovedToRight

#### Event Data

##### sender `Telerik.Web.UI.RadGrid`

The instance of the RadGrid raised the event.

##### args `Telerik.Web.UI.GridColumnEventArgs`

### columnResizing

#### Event Data

##### sender `Telerik.Web.UI.RadGrid`

The instance of the RadGrid raised the event.

##### args `Telerik.Web.UI.GridColumnCancelEventArgs`

### columnResized

#### Event Data

##### sender `Telerik.Web.UI.RadGrid`

The instance of the RadGrid raised the event.

##### args `Telerik.Web.UI.GridColumnEventArgs`

### columnShowing

#### Event Data

##### sender `Telerik.Web.UI.RadGrid`

The instance of the RadGrid raised the event.

##### args `Telerik.Web.UI.GridColumnCancelEventArgs`

### columnShown

#### Event Data

##### sender `Telerik.Web.UI.RadGrid`

The instance of the RadGrid raised the event.

##### args `Telerik.Web.UI.GridColumnEventArgs`

### columnSwapping

#### Event Data

##### sender `Telerik.Web.UI.RadGrid`

The instance of the RadGrid raised the event.

##### args `Telerik.Web.UI.GridColumnSwappingEventArgs`

### columnSwapped

#### Event Data

##### sender `Telerik.Web.UI.RadGrid`

The instance of the RadGrid raised the event.

##### args `Telerik.Web.UI.GridColumnSwappedEventArgs`

### command

#### Event Data

##### sender `Telerik.Web.UI.RadGrid`

The instance of the RadGrid raised the event.

##### args `Telerik.Web.UI.GridCommandEventArgs`

### dataBinding

#### Event Data

##### sender `Telerik.Web.UI.RadGrid`

The instance of the RadGrid raised the event.

##### args `Telerik.Web.UI.GridDataBindingEventArgs`

### dataBindingFailed

#### Event Data

##### sender `Telerik.Web.UI.RadGrid`

The instance of the RadGrid raised the event.

##### args `Telerik.Web.UI.GridDataBindingFailedEventArgs`

### dataSourceResolved

#### Event Data

##### sender `Telerik.Web.UI.RadGrid`

The instance of the RadGrid raised the event.

##### args `Telerik.Web.UI.GridDataSourceResolvedEventArgs`

### filterMenuShowing

#### Event Data

##### sender `Telerik.Web.UI.RadGrid`

The instance of the RadGrid raised the event.

##### args `Telerik.Web.UI.GridFilterMenuShowingEventArgs`

### groupCollapsing

#### Event Data

##### sender `Telerik.Web.UI.RadGrid`

The instance of the RadGrid raised the event.

##### args `Telerik.Web.UI.GridGroupCollapsingEventArgs`

### groupExpanding

#### Event Data

##### sender `Telerik.Web.UI.RadGrid`

The instance of the RadGrid raised the event.

##### args `Telerik.Web.UI.GridGroupExpandingEventArgs`

### headerMenuShowing

#### Event Data

##### sender `Telerik.Web.UI.RadGrid`

The instance of the RadGrid raised the event.

##### args `Telerik.Web.UI.GridHeaderMenuCancelEventArgs`

### hierarchyCollapsing

#### Event Data

##### sender `Telerik.Web.UI.RadGrid`

The instance of the RadGrid raised the event.

##### args `Telerik.Web.UI.GridHierarchyActionEventArgs`

### hierarchyCollapsed

#### Event Data

##### sender `Telerik.Web.UI.RadGrid`

The instance of the RadGrid raised the event.

##### args `Telerik.Web.UI.GridHierarchyActionEventArgs`

### hierarchyExpanding

#### Event Data

##### sender `Telerik.Web.UI.RadGrid`

The instance of the RadGrid raised the event.

##### args `Telerik.Web.UI.GridHierarchyActionEventArgs`

### hierarchyExpanded

#### Event Data

##### sender `Telerik.Web.UI.RadGrid`

The instance of the RadGrid raised the event.

##### args `Telerik.Web.UI.GridHierarchyActionEventArgs`

### keyPress

#### Event Data

##### sender `Telerik.Web.UI.RadGrid`

The instance of the RadGrid raised the event.

##### args `Telerik.Web.UI.GridKeyPressEventArgs`

### popUpShowing

#### Event Data

##### sender `Telerik.Web.UI.RadGrid`

The instance of the RadGrid raised the event.

##### args `Telerik.Web.UI.GridPopUpShowingEventArgs`

### rowClick

#### Event Data

##### sender `Telerik.Web.UI.RadGrid`

The instance of the RadGrid raised the event.

##### args `Telerik.Web.UI.GridDataItemEventArgs`

### rowContextMenu

#### Event Data

##### sender `Telerik.Web.UI.RadGrid`

The instance of the RadGrid raised the event.

##### args `Telerik.Web.UI.GridDataItemCancelEventArgs`

### rowCreated

#### Event Data

##### sender `Telerik.Web.UI.RadGrid`

The instance of the RadGrid raised the event.

##### args `Telerik.Web.UI.GridDataItemEventArgs`

### rowDataBound

#### Event Data

##### sender `Telerik.Web.UI.RadGrid`

The instance of the RadGrid raised the event.

##### args `Telerik.Web.UI.GridRowDataBoundEventArgs`

### rowDblClick

#### Event Data

##### sender `Telerik.Web.UI.RadGrid`

The instance of the RadGrid raised the event.

##### args `Telerik.Web.UI.GridDataItemEventArgs`

### rowDeleting

#### Event Data

##### sender `Telerik.Web.UI.RadGrid`

The instance of the RadGrid raised the event.

##### args `Telerik.Web.UI.GridDataItemCancelEventArgs`

### rowDeleted

#### Event Data

##### sender `Telerik.Web.UI.RadGrid`

The instance of the RadGrid raised the event.

##### args `Telerik.Web.UI.GridDataItemEventArgs`

### rowDeselecting

#### Event Data

##### sender `Telerik.Web.UI.RadGrid`

The instance of the RadGrid raised the event.

##### args `Telerik.Web.UI.GridDataItemCancelEventArgs`

### rowDeselected

#### Event Data

##### sender `Telerik.Web.UI.RadGrid`

The instance of the RadGrid raised the event.

##### args `Telerik.Web.UI.GridDataItemEventArgs`

### rowDragStarted

#### Event Data

##### sender `Telerik.Web.UI.RadGrid`

The instance of the RadGrid raised the event.

##### args `Telerik.Web.UI.GridDataItemCancelEventArgs`

### rowDropping

#### Event Data

##### sender `Telerik.Web.UI.RadGrid`

The instance of the RadGrid raised the event.

##### args `Telerik.Web.UI.GridDragDropCancelEventArgs`

### rowDropped

#### Event Data

##### sender `Telerik.Web.UI.RadGrid`

The instance of the RadGrid raised the event.

##### args `Telerik.Web.UI.GridDragDropCancelEventArgs`

### rowHiding

#### Event Data

##### sender `Telerik.Web.UI.RadGrid`

The instance of the RadGrid raised the event.

##### args `Telerik.Web.UI.GridDataItemCancelEventArgs`

### rowHidden

#### Event Data

##### sender `Telerik.Web.UI.RadGrid`

The instance of the RadGrid raised the event.

##### args `Telerik.Web.UI.GridDataItemEventArgs`

### rowMouseOver

#### Event Data

##### sender `Telerik.Web.UI.RadGrid`

The instance of the RadGrid raised the event.

##### args `Telerik.Web.UI.GridDataItemEventArgs`

### rowResizing

#### Event Data

##### sender `Telerik.Web.UI.RadGrid`

The instance of the RadGrid raised the event.

##### args `Telerik.Web.UI.GridDataItemCancelEventArgs`

### rowResized

#### Event Data

##### sender `Telerik.Web.UI.RadGrid`

The instance of the RadGrid raised the event.

##### args `Telerik.Web.UI.GridDataItemEventArgs`

### rowSelecting

#### Event Data

##### sender `Telerik.Web.UI.RadGrid`

The instance of the RadGrid raised the event.

##### args `Telerik.Web.UI.GridDataItemCancelEventArgs`

### rowSelected

#### Event Data

##### sender `Telerik.Web.UI.RadGrid`

The instance of the RadGrid raised the event.

##### args `Telerik.Web.UI.GridDataItemEventArgs`

### rowShowing

#### Event Data

##### sender `Telerik.Web.UI.RadGrid`

The instance of the RadGrid raised the event.

##### args `Telerik.Web.UI.GridDataItemCancelEventArgs`

### rowShown

#### Event Data

##### sender `Telerik.Web.UI.RadGrid`

The instance of the RadGrid raised the event.

##### args `Telerik.Web.UI.GridDataItemEventArgs`

### scroll

#### Event Data

##### sender `Telerik.Web.UI.RadGrid`

The instance of the RadGrid raised the event.

##### args `Telerik.Web.UI.GridScrollEventArgs`

### tableCreated

#### Event Data

##### sender `Telerik.Web.UI.RadGrid`

The instance of the RadGrid raised the event.

##### args `Telerik.Web.UI.GridTableCreatedEventArgs`

### batchEditGetEditorValue

#### Event Data

##### sender `Telerik.Web.UI.RadGrid`

The instance of the RadGrid raised the event.

##### args `Telerik.Web.UI.GridBatchEditValueActionEventArgs`

### batchEditSetEditorValue

#### Event Data

##### sender `Telerik.Web.UI.RadGrid`

The instance of the RadGrid raised the event.

##### args `Telerik.Web.UI.GridBatchEditValueActionEventArgs`

### batchEditSetCellValue

#### Event Data

##### sender `Telerik.Web.UI.RadGrid`

The instance of the RadGrid raised the event.

##### args `Telerik.Web.UI.GridBatchEditValueActionEventArgs`

### batchEditGetCellValue

#### Event Data

##### sender `Telerik.Web.UI.RadGrid`

The instance of the RadGrid raised the event.

##### args `Telerik.Web.UI.GridBatchEditValueActionEventArgs`

### batchEditOpening

#### Event Data

##### sender `Telerik.Web.UI.RadGrid`

The instance of the RadGrid raised the event.

##### args `Telerik.Web.UI.GridBatchEditCancelEventArgs`

### batchEditOpened

#### Event Data

##### sender `Telerik.Web.UI.RadGrid`

The instance of the RadGrid raised the event.

##### args `Telerik.Web.UI.GridBatchEditEventArgs`

### batchEditClosing

#### Event Data

##### sender `Telerik.Web.UI.RadGrid`

The instance of the RadGrid raised the event.

##### args `Telerik.Web.UI.GridBatchEditCancelEventArgs`

### batchEditClosed

#### Event Data

##### sender `Telerik.Web.UI.RadGrid`

The instance of the RadGrid raised the event.

##### args `Telerik.Web.UI.GridBatchEditEventArgs`

### batchEditCellValueChanged

#### Event Data

##### sender `Telerik.Web.UI.RadGrid`

The instance of the RadGrid raised the event.

##### args `Telerik.Web.UI.GridBatchEditCellValueChangedEventArgs`

### batchEditCellValueChanging

#### Event Data

##### sender `Telerik.Web.UI.RadGrid`

The instance of the RadGrid raised the event.

##### args `Telerik.Web.UI.GridBatchEditCellValueChangingEventArgs`

### userAction

#### Event Data

##### sender `Telerik.Web.UI.RadGrid`

The instance of the RadGrid raised the event.

##### args `Telerik.Web.UI.GridUserActionEventArgs`

### rowMouseOut

#### Event Data

##### sender `Telerik.Web.UI.RadGrid`

The instance of the RadGrid raised the event.

##### args `Telerik.Web.UI.GridDataItemEventArgs`
