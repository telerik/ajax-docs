---
title: Telerik.Web.UI.GridDragDropCancelEventArgs
description: Telerik.Web.UI.GridDragDropCancelEventArgs
slug: Telerik.Web.UI.GridDragDropCancelEventArgs
---

# Telerik.Web.UI.GridDragDropCancelEventArgs : Sys.CancelEventArgs 

## Inheritance Hierarchy

* Sys.CancelEventArgs
* *[Telerik.Web.UI.GridDragDropCancelEventArgs]({%slug Telerik.Web.UI.GridDragDropCancelEventArgs%})*


## Methods

###  get_TargetDataKeyValue

Returns the DataKeyValue for the current GridDataItem object.

#### Parameters

##### columnName `String`

#### Returns

`String` 

### get_destinationHtmlElement

Returns the HTML element which the item was dropped onto.

#### Parameters

#### Returns

`Element` 

### get_domEvent

Returns the DOM event that was raised for the drag operation.

#### Parameters

#### Returns

`Sys.UI.DomEvent` 

### get_draggedItems

Returns a collection of the dragged GridDataItem objects.

#### Parameters

#### Returns

`Array` 

### get_dropPosition

Indicates the position of the drop indicator if the user is dropping over a RadGrid row - "above" or "below" it.

#### Parameters

#### Returns

`String` 

### get_targetGridDataItem

Returns a reference to the dataItem over which the user is dropping. May be null if the dataItem has not been instantiated beforehand.

#### Parameters

#### Returns

`Telerik.Web.UI.GridDataItem` 

### get_targetItemId

Returns the ClientID of the destination GridDataItem object.

#### Parameters

#### Returns

`String` 

### get_targetItemIndexHierarchical

Returns the hierarchical item index of the destination GridDataItem object.

#### Parameters

#### Returns

`String` 

### get_targetItemTableView

Returns the GridTableView object, which the target GridDataItem belongs to.

#### Parameters

#### Returns

`Telerik.Web.UI.GridTableView` 

### get_targetRadGrid

Returns the RadGrid instance which the item was dropped onto.

#### Parameters

#### Returns

`Telerik.Web.UI.RadGrid` 

### set_destinationHtmlElement

Sets the HTML element for the item to be dropped onto.

#### Parameters

##### value `Element`

#### Returns

`None` 



