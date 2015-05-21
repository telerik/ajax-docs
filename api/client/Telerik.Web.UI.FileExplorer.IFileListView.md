---
title: Telerik.Web.UI.FileExplorer.IFileListView
page_title: Client-side API Reference
description: Client-side API Reference
slug: Telerik.Web.UI.FileExplorer.IFileListView
---

# Telerik.Web.UI.FileExplorer.IFileListView  

## Inheritance Hierarchy

* *[Telerik.Web.UI.FileExplorer.IFileListView]({%slug Telerik.Web.UI.FileExplorer.IFileListView%})*

## Methods

###  attachEventHandlers

Attach/detach the event handlers

#### Parameters

##### toAttach `Boolean`

#### Returns

`None` 

###  bindToServerData

Bind the data to the underlying bindable control

#### Parameters

##### serverData `Object`

The data provided by the server callback or from cached location. Should follow the format of the Telerik.Web.UI.FileExplorer.ServerData

##### pageIndex `Number`

The page

#### Returns

`None` 

###  clearSelection

Clear any item selection in the file list

#### Parameters

#### Returns

`None` 

###  dataBind

Bind the already provided data(use set_dataSource(data)) to the underlying bindable control

#### Parameters

#### Returns

`None` 

###  filter

Filter the list by the provided keyword using the filtering capacities of the underlying control

#### Parameters

##### keyWord `String`

Filter keyword

#### Returns

`None` 

###  focusPagerControl

Focus the paging control

#### Parameters

#### Returns

`None` 

###  getItemByName

Get an item by its name if such exists

#### Parameters

##### name `String`

Name of the item

#### Returns

`None` 

###  getItemByPath

Get an item by its path if such exists

#### Parameters

##### path `String`

File path to the item

#### Returns

`None` 

###  get_container

Gets the DOM element that wraps the file list view. The container may be different from the element in more complex views

#### Parameters

#### Returns

`Object` Gets the DOM element that wraps the file list view

###  get_dataSource

Get the data source provided to the control

#### Parameters

#### Returns

`Array` The data object provided to the control

###  get_element

Gets the DOM element of the underlying control.

#### Parameters

#### Returns

`Element` The DOM element of the underlying control

###  get_id

gets the id of the underlying control

#### Parameters

#### Returns

`None` 

###  get_items

Get the items displayed in the file list.

#### Parameters

#### Returns

`Array` All items array

###  get_itemsCount

Get the number of items in the file explorer view. This number may differ from the displayed items count when paging is allowed.

#### Parameters

#### Returns

`Number` The number of items

###  get_name

Gets the name of the corresponding view. The name should be unique in a collection of views as this is the identification field

#### Parameters

#### Returns

`String` the name of the corresponding view

###  get_pageCount

Get the number of pages in the control

#### Parameters

#### Returns

`Number` The number of pages

###  get_pageIndex

Get the page size as maximum number of items per page

#### Parameters

#### Returns

`Number` The page size

###  get_pageSize

Get the page current page index

#### Parameters

#### Returns

`Number` The page index

###  get_selectedItems

Get the selected items from the file list

#### Parameters

#### Returns

`Array` Selected items array

###  selectDefaultItem

Try to select a default item from the file list. Usually this is the first item, or none if list is empty

#### Parameters

#### Returns

`None` 

###  selectItemByName

Selects an item by name

#### Parameters

##### name `String`

The name of the item to select

#### Returns

`None` 

###  selectItemsByName_Fast

This method should provide the fastest possible implementation for finding and selecting items by name.

#### Parameters

##### items `Array`

A list of item names that the control should select. 

#### Returns

`None` 

###  set_dataSource

Set the data needed for the data bindable control

#### Parameters

##### data `Array`

Sets the data for the underlying data bindable control

#### Returns

`None` 

###  set_pageIndex

Set the current page to display

#### Parameters

##### value `Number`

New page index

##### suppressPageEvent `Boolean`

Suppress the page event in order to escape irrelevant callbacks or page event handling

#### Returns

`None` 

###  set_pageSize

Set the size of the page, i.e. the maximum number of items per page

#### Parameters

##### value `Number`

New page size

#### Returns

`None` 


## Events

### contextMenu

Occurs when the context item of the Grid is shown.

#### Event Data

##### sender `Telerik.Web.UI.FileExplorer.IFileListView`

The IFileListView instance raised the event.

##### args `Sys.EventArgs`

Empty event argument.


### hideContextMenu

Occurs when the context menu gets hidden.
#### Event Data

##### sender `Telerik.Web.UI.FileExplorer.IFileListView`

The IFileListView instance raised the event.

##### args `Sys.EventArgs`

Empty event argument.

### itemDragStart

Occurs when the item is about to be dragged. The event can be cancelled.

#### Event Data

##### sender `Telerik.Web.UI.FileExplorer.IFileListView`

The IFileListView instance raised the event.

##### args `Telerik.Web.UI.FileExplorer.FileListItemCancelableEventArgs`

The arguments of the ItemDragStart event.

### itemDragging

Occurs when the item is being dragged.

#### Event Data

##### sender `Telerik.Web.UI.FileExplorer.IFileListView`

The IFileListView instance raised the event.

##### args `Telerik.Web.UI.FileExplorer.FileListItemDraggingEventArgs`

Cancel event argument.

### itemDrop

Occurs when the item from the Grid is to be dropped on the TreeView. The event can be cancelled.

#### Event Data

##### sender `Telerik.Web.UI.FileExplorer.IFileListView`

The IFileListView instance raised the event.

##### args `Telerik.Web.UI.FileExplorer.FileListItemsCancelableEventArgs`

The arguments of the ItemDrop event.

### itemDropComplete

Occurs when an item from the Grid is successfully dropped on the TreeView.

#### Event Data

##### sender `Telerik.Web.UI.FileExplorer.IFileListView`

The IFileListView instance raised the event.

##### args `Sys.EventArgs`

Empty event argument.

### itemSelect
Occurs when an item in the Grid is selected.

#### Event Data

##### sender `Telerik.Web.UI.FileExplorer.IFileListView`

The IFileListView instance raised the event.

##### args `Sys.EventArgs`

Empty event argument.

### open

Occurs when an FileListView is opened.

#### Event Data

##### sender `Telerik.Web.UI.FileExplorer.IFileListView`

The IFileListView instance raised the event.

##### args `Telerik.Web.UI.FileExplorer.FileListPageEventArgs`

The arguments of the Open event.

### page

Occurs when the curent page index is changed.

#### Event Data

##### sender `Telerik.Web.UI.FileExplorer.IFileListView`

The IFileListView instance raised the event.

##### args `Telerik.Web.UI.FileExplorer.FileListPageEventArgs`

The arguments of the Page event.

### sort

Occurs when the file items are sorted.

#### Event Data

##### sender `Telerik.Web.UI.FileExplorer.IFileListView`

The IFileListView instance raised the event.

##### args `Telerik.Web.UI.FileExplorer.FileListSortEventArgs`

The arguments of the Sort event.
