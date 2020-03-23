---
title: Telerik.Web.UI.RadTreeList
title_prefix: Client-side API Reference
description: Telerik.Web.UI.RadTreeList
slug: Telerik.Web.UI.RadTreeList
---

# Telerik.Web.UI.RadTreeList : Telerik.Web.UI.RadWebControl 

## Inheritance Hierarchy

* [Telerik.Web.UI.RadWebControl]({%slug Telerik.Web.UI.RadWebControl%})
* *[Telerik.Web.UI.RadTreeList]({%slug Telerik.Web.UI.RadTreeList%})*


## Methods

### deselectAllItems

Deselects all RadTreeListDataItems in the current RadTreeList instance.

#### Parameters

#### Returns

`None` 

### deselectItem

Deselects a RadTreeListDataItem.

#### Parameters

##### item `Telerik.Web.UI.RadTreeListDataItem`

#### Returns

`None` 

### fireCommand

Fires command with specified command name and argument

#### Parameters

##### commandName `String`

The name of the command that will be executed.

##### commandArgument `String`

The command argument with which the command will be executed.

#### Returns

`None` 

### forEachDataItem

Iterates over all RadTreeListDataItems in the current RadTreeList instance and calls the specified function in the context of each data item.

#### Parameters

##### func `Function`

The function to call in the context of each RadTreeListDataItem.

#### Returns

`None` 

### get_childItems

A property which gets a collection of the visible child items of the current item.

#### Parameters

#### Returns

`None` 

### get_clientDataKeyNames

Property which gets a collection of the client datakey names.

#### Parameters

#### Returns

`None` 

### get_clientSettings

Gets a dictionary of non-default client settings for RadTreeList.

#### Parameters

#### Returns

`None` 

### get_columns

Property which returns a collection of the columns in the treelist.

#### Parameters

#### Returns

`None` 

### get_currentPageIndex

Property which returns the current page index of the treelist.

#### Parameters

#### Returns

`None` 

### get_dataItems

Gets an array of all items in the current RadTreeList instance.

#### Parameters

#### Returns

`Array` 

### get_dataKeyValue

A property which gets value of the client datakey name for this item  by the given keyname.

#### Parameters

#### Returns

`None` 

### get_displayIndex

A property which gets the index of the current item in the current page regardless of its nested level.

#### Parameters

#### Returns

`None` 

### get_expanded

A property which returns whether the current item is expanded.

#### Parameters

#### Returns

`None` 

### get_hierarchicalIndex

A property which gets the index of the current item in the treelist hierarchy.

#### Parameters

#### Returns

`None` 

### get_isRoot

A property which returns whether the current item is root item for the treelist.

#### Parameters

#### Returns

`None` 

### get_nextSibling

A property which gets the next sibling of the current item.

#### Parameters

#### Returns

`None` 

### get_owner

A property which gets a reference to the owner RadTreeList object.

#### Parameters

#### Returns

`None` 

### get_parentItem

A property which gets the parent of the current item.

#### Parameters

#### Returns

`None` 

### get_previousSibling

A property which gets the previous sibling of the current item.

#### Parameters

#### Returns

`None` 

### get_selected

A boolean property indicating whether the item is selected or not.

#### Parameters

#### Returns

`None` 

### get_selectedIndexes

Gets the indexes of all selected items in RadTreeList.

#### Parameters

#### Returns

`Array` 

### get_selectedItems

Gets a collection of all selected items in RadTreeList.

#### Parameters

#### Returns

`Array` 

### get_uniqueID

Gets the unique id of RadTreeList's container

#### Parameters

#### Returns

`None` 

### get_uniqueName

A property which returns the unique name of the column.

#### Parameters

#### Returns

`None` 

### getCellByColumnUniqueName

Property which returns the table cell of the TreeList by a given item(row) and column unique name

#### Parameters

#### Returns

`None` 

### getColumnByUniqueName

Property which gets the client side object for the column by a given unique name.

#### Parameters

#### Returns

`None` 

### getContainerItem

Gets the RadTreeListDataItem instance that is the container of the specified element.

#### Parameters

##### element `Element`

An HTML DOM element that is nested in a tree list item.

#### Returns

`Telerik.Web.UI.RadTreeListDataItem` 

### getItem

Gets a RadTreeListDataItem instance by specified id, row index or a row DOM element.

#### Parameters

##### rowIdIndex `Object`

An id

#### Returns

`Telerik.Web.UI.RadTreeListDataItem` 

### hide

The column at the specified columnIndex will be hidden.

#### Parameters

#### Returns

`None` 

### notifyClientStateModified

Notifies RadTreeList that its client settings have been modified.

#### Parameters

#### Returns

`None` 

### page

Changes the page in RadTreeList.

#### Parameters

##### command `String`

One of the page commands

#### Returns

`None` 

### saveClientState

Saves the client settings of RadTreeList for sending to the server.

#### Parameters

#### Returns

`None` 

### selectAllItems

Selects all RadTreeListDataItems in the current RadTreeList instance.

#### Parameters

#### Returns

`None` 

### selectItem

Selects a RadTreeListDataItem.

#### Parameters

##### item `Telerik.Web.UI.RadTreeListDataItem`

#### Returns

`None` 

### set_currentPageIndex

Property which sets the current page index by firing a Page command.

#### Parameters

#### Returns

`None` 

### set_selected

A property which selects or deselects the current item based on the boolean value passed.

#### Parameters

#### Returns

`None` 

### set_selectedIndexes

Sets the collection of all selected indexes in RadTreeList.

#### Parameters

##### value `Array`

An array of integer indexes.

#### Returns

`None` 

### show

The column at the specified columnIndex will be shown.

#### Parameters

#### Returns

`None` 

### updateClientStateIfModified

Saves the client settings of RadTreeList for sending to the server if the state has been modified. RadTreeList is notified of state changes using the notifyClientStateModified method.

#### Parameters

#### Returns

`None` 


## Events

### keyPress

This event is fired (only when Keyboard Navigation is enabled) when any key is pressed inside the RadTreeList and the treelist control is about to process this key.

#### Event Data

##### sender `Telerik.Web.UI.RadTreeList`

The RadTreeList instance raised the event.

##### args `Telerik.Web.UI.TreeListKeyPressEventArgs`

The arguments of the  event.

### columnResized

This event is fired after the treelist column is resized.

#### Event Data

##### sender `Telerik.Web.UI.RadTreeList`

The RadTreeList instance raised the event.

##### args `Telerik.Web.UI.TreeListColumnResizedEventArgs`

The arguments of the  event.

### columnResizing

This event is fired before the treelist column is resized.

#### Event Data

##### sender `Telerik.Web.UI.RadTreeList`

The RadTreeList instance raised the event.

##### args `Telerik.Web.UI.TreeListColumnResizingEventArgs`

The arguments of the  event.

### itemClick

This event is fired when a data item is clicked in RadTreeList.

#### Event Data

##### sender `Telerik.Web.UI.RadTreeList`

The RadTreeList instance raised the event.

##### args `Telerik.Web.UI.TreeListItemClickEventArgs`

The arguments of the  event.

### itemDblClick

This event is fired when a data item is double-clicked in RadTreeList.

#### Event Data

##### sender `Telerik.Web.UI.RadTreeList`

The RadTreeList instance raised the event.

##### args `Telerik.Web.UI.TreeListItemDblClickEventArgs`

The arguments of the  event.

### itemDragStarted

This event is fired when a drag action is started upon the TreeListDataItem.

#### Event Data

##### sender `Telerik.Web.UI.RadTreeList`

The RadTreeList instance raised the event.

##### args `Telerik.Web.UI.TreeListItemDragStartedEventArgs`

The arguments of the  event.

### itemContextMenu

This event is fired when a right click on a TreeListDataItem happens.

#### Event Data

##### sender `Telerik.Web.UI.RadTreeList`

The RadTreeList instance raised the event.

##### args `Telerik.Web.UI.TreeListItemContextMenuEventArgs`

The arguments of the  event.

### itemDropped

This event is fired when a TreeListDataItem has been dropped after dragging.

#### Event Data

##### sender `Telerik.Web.UI.RadTreeList`

The RadTreeList instance raised the event.

##### args `Telerik.Web.UI.TreeListItemDroppedEventArgs`

The arguments of the  event.

### itemDeselecting

This event is fired when a TreeListDataItem is about to be deselected on the client. This

                                    event can be canceled.

#### Event Data

##### sender `Telerik.Web.UI.RadTreeList`

The RadTreeList instance raised the event.

##### args `Telerik.Web.UI.TreeListItemDeselectingEventArgs`

The arguments of the  event.

### itemSelecting

This event is fired when a TreeListDataItem is about to be selected on the client. This event

                                    can be canceled.

#### Event Data

##### sender `Telerik.Web.UI.RadTreeList`

The RadTreeList instance raised the event.

##### args `Telerik.Web.UI.TreeListItemSelectingEventArgs`

The arguments of the  event.

### itemDragging

This event is fired when a TreeListDataItem is being dragged.

#### Event Data

##### sender `Telerik.Web.UI.RadTreeList`

The RadTreeList instance raised the event.

##### args `Telerik.Web.UI.TreeListItemDraggingEventArgs`

The arguments of the  event.

### itemDropping

This event is fired when a TreeListDataItem is being dropped.

#### Event Data

##### sender `Telerik.Web.UI.RadTreeList`

The RadTreeList instance raised the event.

##### args `Telerik.Web.UI.TreeListItemDroppingEventArgs`

The arguments of the  event.

### itemDeselected

This event is fired when a TreeListDataItem is deselected on the client.

#### Event Data

##### sender `Telerik.Web.UI.RadTreeList`

The RadTreeList instance raised the event.

##### args `Telerik.Web.UI.TreeListItemDeselectedEventArgs`

The arguments of the  event.

### itemSelected

This event is fired when a TreeListDataItem is selected on the client.

#### Event Data

##### sender `Telerik.Web.UI.RadTreeList`

The RadTreeList instance raised the event.

##### args `Telerik.Web.UI.TreeListItemSelectedEventArgs`

The arguments of the  event.

### itemCreated

This event is fired when each of the TreeListDataItem client components is created.

#### Event Data

##### sender `Telerik.Web.UI.RadTreeList`

The RadTreeList instance raised the event.

##### args `Telerik.Web.UI.TreeListItemCreatedEventArgs`

The arguments of the  event.

### treeListDestroying

This event is fired when the RadTreeList client component is about to be disposed.

#### Event Data

##### sender `Telerik.Web.UI.RadTreeList`

The RadTreeList instance raised the event.

##### args `Sys.EventArgs`

The arguments of the  event.

### treeListCreated

This event is fired when the RadTreeList client component is initialized.

#### Event Data

##### sender `Telerik.Web.UI.RadTreeList`

The RadTreeList instance raised the event.

##### args `Sys.EventArgs`

The arguments of the  event.

### treeListCreating

This event is fired when the RadTreeList client component is initializing.

#### Event Data

##### sender `Telerik.Web.UI.RadTreeList`

The RadTreeList instance raised the event.

##### args `Sys.EventArgs`

The arguments of the  event.

### scroll

This event is fired when the treelist is scrolled.

#### Event Data

##### sender `Telerik.Web.UI.RadTreeList`

The RadTreeList instance raised the event.

##### args `Telerik.Web.UI.TreeListScrollEventArgs`

The arguments of the  event.


