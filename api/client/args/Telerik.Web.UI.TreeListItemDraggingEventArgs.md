---
title: Telerik.Web.UI.TreeListItemDraggingEventArgs
page_title: Client-side API Reference
description: Client-side API Reference
slug: Telerik.Web.UI.TreeListItemDraggingEventArgs
---

# Telerik.Web.UI.TreeListItemDraggingEventArgs : Sys.EventArgs

## Inheritance Hierarchy

* Sys.EventArgs
* *[Telerik.Web.UI.TreeListItemDraggingEventArgs]({%slug Telerik.Web.UI.TreeListItemDraggingEventArgs%})*

## Methods

### get_canDrop

Returns  bool indicating whether the item can be dropped at that position. This property returns true by default, except if the user is trying to perform an invalid reorder operation - e.g. dropping a parent item over its own child, or dropping an item onto itself. This is useful in the cases, when the developer needs to change the 'drop clue' icon in order to notify the user that it is not possible to perform this operation

#### Parameters

#### Returns

`Boolean`

### get_domEvent

Returns the Sys.UI.DomEvent instance associated to the raised event.

#### Parameters

#### Returns

`Sys.UI.DomEvent`

### get_draggedContainer

Returns the 'tr' element used for representing the dragged row.

#### Parameters

#### Returns

`Element`

### get_isOverHeaderItem

Returns bool indicating whether the dragged item is over the header item.

#### Parameters

#### Returns

`Boolean`

### get_targetItem

Gets the target item.

#### Parameters

#### Returns

`Telerik.Web.UI.TreeListDataItem`

### set_canDrop

Sets a bool indicating whether the item can be dropped at that position. Setting this property to true means that if the user tries to drop the item at this point, all further drag and drop operations will be canceled (OnItemDropping and OnItemDropped events won't be triggered).

#### Parameters

##### value `Boolean`

#### Returns

`None`

### set_dropClueVisible

Sets whether the drop clue (an arrow image in front of the dragged row) should be visible.

#### Parameters

##### value `Boolean`

#### Returns

`None`



