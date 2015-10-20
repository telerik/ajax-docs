---
title: Telerik.Web.UI.FileExplorer.FileList
page_title: Client-side API Reference
description: Client-side API Reference
slug: Telerik.Web.UI.FileExplorer.FileList
---

# Telerik.Web.UI.FileExplorer.FileList : Sys.Component 

## Inheritance Hierarchy

* Sys.Component
* *[Telerik.Web.UI.FileExplorer.FileList]({%slug Telerik.Web.UI.FileExplorer.FileList%})*

## Methods

###  attachEventHandlers

Attach/detach the event handlers

#### Parameters

##### toAttach `Boolean`

#### Returns

`None` 

###  bindToData

Shortcut method for set_dataSource(data); dataBind().

#### Parameters

##### data `Array`

The array of elements to bind to

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

###  chooseFileListView

Chooses the view with the specified name. The view is displayed and the currently displayed one is hidden

#### Parameters

##### name `String`

The name of the view to display.

#### Returns

`None` 

###  clearFilter

Clears the filtering by reseting the filter and clearing the filter text box

#### Parameters

#### Returns

`None` 

###  clearFolderCache

Clears the caching of the specified folder, forcing a reload the next time this folder's content is loaded

#### Parameters

##### path `String`

The path to the folder

#### Returns

`None` 

###  clearSelection

Clear any item selection in the file list

#### Parameters

#### Returns

`None` 

###  clientFilter

Filter the file list on the client only. Note that only the items displayed items will be filtered, i.e. paged content will filter only the current page

#### Parameters

##### keyWord `String`

Filter keyword

#### Returns

`None` 

###  dataBind

Bind the already provided data(use set_dataSource(data)) to the underlying bindable control

#### Parameters

#### Returns

`None` 

###  doFiltering

Filter the file list by the provided keyword. This method does not raise a filter event

#### Parameters

##### keyWord `String`

Filter keyword

#### Returns

`None` 

###  filterList

Filter the file list by the provided keyword. This method raises a filter event

#### Parameters

##### keyWord `String`

Filter keyword

#### Returns

`None` 

###  findFileByName

Find a file by its name

#### Parameters

##### fileName `String`

Name of a file

#### Returns

`Telerik.Web.UI.FileExplorer.FileDataItem` Searched Item

###  findFileByPath

Find a file by its path

#### Parameters

##### path `String`

Path to a file

#### Returns

`Telerik.Web.UI.FileExplorer.FileDataItem` Searched Item

###  focus

Focus the underlying control's DOM element

#### Parameters

#### Returns

`None` 

###  focusPagerControl

Focus the paging control of the file list

#### Parameters

#### Returns

`None` 

###  getSelectedFiles

Get the selected files(Telerik.Web.UI.FileExplorerItem) from the file list

#### Parameters

#### Returns

`Array` Selected files

###  get_contextMenu

Get a reference to the context menu that is utilized by the file list

#### Parameters

#### Returns

`Telerik.Web.UI.RadMenu` 

###  get_control

Get a reference to the underlying file list view

#### Parameters

#### Returns

`Telerik.Web.UI.FileExplorer.IFileListView` 

###  get_dataSource

Get the data source provided to the control

#### Parameters

#### Returns

`Array` The data object provided to the control

###  get_element

Gets the DOM element, where the file list resides.

#### Parameters

#### Returns

`Element` The DOM element of the underlying control

###  get_fileExplorer

Get a reference to the RadFileExplorer that used this instance of FileList

#### Parameters

#### Returns

`Telerik.Web.UI.RadFileExplorer` 

###  get_filterTextBox

Gets a reference to the filter text box DOM element that resides in the current file list view

#### Parameters

##### view `Telerik.Web.UI.FileExplorer.IFileListView`

The view where to look for the filter text box. If the view is not provided

#### Returns

`Object` The input element of the filter text box

###  get_grid

Get a reference to the grid control that displays the list of files if such is being used to display the items

#### Parameters

#### Returns

`Telerik.Web.UI.RadGrid` The RadGrid managing the file list

###  get_items

Get the items displayed in the file list.

#### Parameters

#### Returns

`Array` All items array

###  get_listView

Get a reference to the list view control that displays the list of files if such is being used to display the items

#### Parameters

#### Returns

`Telerik.Web.UI.RadListView` The RadListView managing the file list

###  get_pageSize

Get the page size as maximum number of items per page

#### Parameters

#### Returns

`Number` The page size

###  get_selectedItem

Get the first selected item from the file list

#### Parameters

#### Returns

`Telerik.Web.UI.FileExplorer.FileDataItem` Selected item

###  get_selectedItems

Get the selected items from the file list

#### Parameters

#### Returns

`Array` Selected items array

###  get_view

Get a reference to the underlying file list view

#### Parameters

#### Returns

`Telerik.Web.UI.FileExplorer.IFileListView` 

###  open

Open the corresponding file item. If directory, the explorer navigates to it and displays its content

#### Parameters

##### item `Telerik.Web.UI.FileExplorerItem`

The item to open. Can be either Telerik.Web.UI.FileExlorerItem

#### Returns

`None` 

###  refreshFileList

Force a server call to collect the content of the folder

#### Parameters

##### folderPath `String`

The path to the folder

#### Returns

`None` 

###  registerFileListView

Registers a view in the file list container. This is the way to make it available later as an chosen/active file list view

#### Parameters

##### view `Telerik.Web.UI.FileExplorer.IFileListView`

The view to be registered for use. Can be chosen later by name.

#### Returns

`None` 

###  selectDefaultFile

Try to select a default item from the file list. Usually this is the first item, or none if list is empty

#### Parameters

#### Returns

`None` 

###  selectFile

Select an item from the file list

#### Parameters

##### file `Telerik.Web.UI.FileExplorer.FileDataItem`

The file could be either Telerik.Web.UI.FileDataItem

#### Returns

`None` 

###  selectFileByName

Select a file item from the file list by the provided name

#### Parameters

##### fileName `String`

The name of the file to select

#### Returns

`None` 

###  selectFileList

Select a list of files by their names

#### Parameters

##### fileNames `Array`

An array of file names to select

#### Returns

`None` 

###  serverFilter

Force the server to do the filtering.

#### Parameters

##### keyWord `String`

Filter keyword

#### Returns

`None` 

###  set_dataSource

Set the data needed for the data bindable control

#### Parameters

##### data `Array`

Sets the data for the underlying data bindable control

#### Returns

`None` 

### set_height

Set the height of the FileList. This will call set_height of all the FileListViews

#### Parameters

##### height `String`

The height to be set.

#### Returns

`None`

###  set_pageSize

Set the size of the page, i.e. the maximum number of items per page

#### Parameters

##### value `Number`

New page size

#### Returns

`None` 

###  showFolderFileList

Show the content of a folder. This method takes advantage of a cached folder content, if the folder has already been loaded

#### Parameters

##### folderPath `String`

The path to the folder

#### Returns

`None` 

###  showPageContent

Show the content of a particular page

#### Parameters

##### startIndex `Number`

The index

##### pageSize `Number`

A custom page size. Default behavior is to use the page size of the file list 

#### Returns

`None` 

###  sort

Sort the file list

#### Parameters

##### sortExpression `String`

Sorting expression. E.g. 

#### Returns

`None` 


