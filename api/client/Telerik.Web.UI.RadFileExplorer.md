---
title: Telerik.Web.UI.RadFileExplorer
page_title: Client-side API Reference
description: Client-side API Reference
---

# Telerik.Web.UI.RadFileExplorer : Telerik.Web.UI.RadWebControl

## Methods

### serverFilter

Force the server to do the filtering

#### Parameters

##### keyWord `Object`

#### Returns

`Object` 

### set_newFolderDefaultValue

Sets the default text that will be shown in the CreateNewFolder dialog

#### Parameters

##### newDefaultName `String`

#### Returns

`None` 

### copy

Copies the selected items from the specified control.

#### Parameters

##### fromControl `Telerik.Web.UI.FileExplorerControls`

The control

#### Returns

`None` 

### deleteSelectedItems

Performs delete operation for all of the currently selected items on the Grid

#### Parameters

##### showConfirmDialog `Boolean`

Show or not the confirmation dialog. If 

#### Returns

`None` 

### copyMoreItems

Marks the provided items as copied and appends them to the previously copied ones.

#### Parameters

##### items `Array`

The items to copy

#### Returns

`None` 

### get_currentDirectory

Returns a string value that represents the path to the currently selected directory. The returned path is a virtual path, such as "/RootProjectFolder/SelectedDir"

#### Parameters

#### Returns

`String` 

### get_selectedItem

Returns the first selected item on the Grid. Returns the selected item on the TreeView if there is no selected items in the Grid

#### Parameters

#### Returns

`Telerik.Web.UI.FileExplorerItem` 

### bindToData

Shortcut method for set_dataSource(data); dataBind().

#### Parameters

##### data `Array`

#### Returns

`Object` 

### attachEventHandlers

Attach/detach the event handlers

#### Parameters

##### toAttach `Object`

#### Returns

`Object` 

### paste

Pastes the copied items into the provided destination directory

#### Parameters

##### destinationDirectory `Telerik.Web.UI.FileExplorerItem`

#### Returns

`None` 

### loadFolder

Loads a new folder and sets the focus on it. The second parameter accepts a Boolean value that determines whether the current change of the directory to be stored in the Previous/Next stack

#### Parameters

##### path `String`

The path to the folder

##### addToStack `Boolean`

Indicates whether the loaded path to be added to the Back

#### Returns

`None` 

### filter

Filters the items in the currently selected directory.

#### Parameters

#### Returns

`None` 

### findFileByName

Find a file by its name

#### Parameters

##### fileName `Object`

#### Returns

`Object` 

### get_currentPermissions

Returns the permissions set to the currently selected folder in the TreeView

#### Parameters

#### Returns

`Telerik.Web.UI.FileExplorerItemPermissions` 

### get_fileList

Returns a reference to the FileList object. Returns "null" when the FileList is not visible, i.e. only the RadTreeView is shown

#### Parameters

#### Returns

`Telerik.Web.UI.FileExplorer.FileList` 

### refresh

Refreshes the current folder

#### Parameters

#### Returns

`None` 

### rename

Renames the item with the new name

#### Parameters

##### item `Telerik.Web.UI.FileExplorerItem`

##### newName `String`

#### Returns

`None` 

### getFileExplorerItemFromGridDataItem

Gets the FileExplorerItem by the passed grid data item object

#### Parameters

##### item `Telerik.Web.UI.GridDataItem`

A data item from the Grid

#### Returns

`Telerik.Web.UI.FileExplorerItem` 

### removeFileNameInvalidChar

Removes items from the file name invalid characters list. Default list is ["\\", "/", ":", "*", "?", """, "<", ">", "|"]

#### Parameters

##### char `String`

The char to remove from the file name invalid chars list

#### Returns

`None` 

### get_extension

Gets the extension of the item - txt for example if it is a text file, ‘null’ when the selected item does not have extension(i.e. if the selected item is a folder)

#### Parameters

#### Returns

`None` 

### getFileExplorerItemFromNode

Gets the FileExplorerItem by the passed TreeNode object

#### Parameters

##### node `Telerik.Web.UI.RadTreeNode`

A node from the TreeView

#### Returns

`Telerik.Web.UI.FileExplorerItem` 

### get_listView

Returns a reference to the embedded RadListView object. Returns "null" when the embedded ListView is not visible

#### Parameters

#### Returns

`Telerik.Web.UI.RadListView` 

### sort

Sort the file list

#### Parameters

##### sortExpression `Object`

#### Returns

`Object` 

### addFileNameInvalidChar

Adds additional characters to the file name invalid characters list. Default list is ["\\", "/", ":", "*", "?", """, "<", ">", "|"]

#### Parameters

##### char `String`

The char to add to the file name invalid chars list

#### Returns

`None` 

### clientFilter

Filter the file list on the client only. Note that only the items displayed items will be filtered, i.e. paged content will filter only the current page

#### Parameters

##### keyWord `Object`

#### Returns

`Object` 

### set_enableOpenFile

Sets whether a file can be opened for preview

#### Parameters

##### value `Boolean`

#### Returns

`None` 

### get_pageSize

Get the page size as maximum number of items per page

#### Parameters

#### Returns

`Object` 

### showPageContent

Show the content of a particular page

#### Parameters

##### startIndex `Object`

##### pageSize `Object`

#### Returns

`Object` 

### refreshFileList

Force a server call to collect the content of the folder

#### Parameters

##### folderPath `Object`

#### Returns

`Object` 

### set_pageSize

Set the size of the page, i.e. the maximum number of items per page

#### Parameters

##### value `Object`

#### Returns

`Object` 

### set_currentDirectory

Changes the currently selected directory

#### Parameters

##### value `String`

The new path

##### addToStack `Boolean`

Determines whether the current change of the directory to be stored in the Previous ï

#### Returns

`None` 

### get_size

Returns the size of the currently selected item. NaN if the selected item is a folder

#### Parameters

#### Returns

`None` 

### get_dataSource

Get the data source provided to the control

#### Parameters

#### Returns

`Array` 

### createNewDirectory

Creates a new directory. The path parameter should be a virtual path. In case that the second parameter is not specified a radprompt dialog appears and asks for the new name.

#### Parameters

##### path `String`

The virtual path to the item

##### newName `String`

#### Returns

`None` 

### bindToServerData

Bind the data to the underlying bindable control

#### Parameters

##### serverData `Object`

##### pageIndex `Object`

#### Returns

`Object` 

### clearSelection

Clear any item selection in the file list

#### Parameters

#### Returns

`Object` 

### deleteItem

Deletes an item by its virtual path

#### Parameters

##### pathToItem `String`

The virtual path to the item

##### showConfirmDialog `Boolean`

Show or not the confirmation dialog. If 

#### Returns

`None` 

### get_path

Returns the virtual path to the item

#### Parameters

#### Returns

`None` 

### get_gridContextMenu

Returns a reference to a RadMenu object. Returns "null" when the embedded grid is not visible

#### Parameters

#### Returns

`Telerik.Web.UI.RadMenu` 

### get_selectedItems

Returns an array of the selected items on the Grid. The items are of type Telerik.Web.UI.FileExplorerItem Returns the selected item on the TreeView if there is no selected items in the Grid

#### Parameters

#### Returns

`Array` 

### selectFileByName

Select a file item from the file list by the provided name

#### Parameters

##### fileName `Object`

#### Returns

`Object` 

### get_permissions

Returns the applied current permissions to the item - enumerable value of type Telerik.Web.UI.FileExplorerItemPermissions

#### Parameters

#### Returns

`None` 

### get_pathSeparator

Returns the symbol used as path separator

#### Parameters

#### Returns

`String` 

### clearFilter

Clears the filtering by reseting the filter and clearing the filter text box

#### Parameters

#### Returns

`Object` 

### open

Opens a file

#### Parameters

##### currentItem `Telerik.Web.UI.FileExplorerItem`

The item that will be opened. If the passed parameter is null then the currently selected item will be opened

#### Returns

`None` 

### getSelectedFiles

Get the selected files(Telerik.Web.UI.FileExplorerItem) from the file list

#### Parameters

#### Returns

`Array` 

### findFileByPath

Find a file by its path

#### Parameters

##### path `Object`

#### Returns

`Object` 

### get_url

Has the same functionality as the get_path() function

#### Parameters

#### Returns

`None` 

### get_newPath

When "Rename" is performed returns the new name of the item. When the "Move" is performed returns the new destination of the moved folder (see the OnClientMove example bellow)

#### Parameters

#### Returns

`None` 

### get_addressBox

Returns the ClientID of the input that shows the currently selected folder. Returns an empty string when the AddressBox is not visible

#### Parameters

#### Returns

`String` 

### filterList

Filter the file list by the provided keyword. This method raises a filter event

#### Parameters

##### keyWord `Object`

#### Returns

`Object` 

### selectFile

Select an item from the file list

#### Parameters

##### file `Object`

#### Returns

`Object` 

### isDirectory

Returns a Boolean value that indicates whether the selected item is a folder or not

#### Parameters

#### Returns

`None` 

### get_tree

Returns a reference to the embedded RadTreeView object. Returns "null" when the embedded TreeView is not visible

#### Parameters

#### Returns

`Telerik.Web.UI.RadTreeView` 

### get_fileExplorer

Get a reference to the RadFileExplorer that used this instance of FileList

#### Parameters

#### Returns

`Object` 

### get_allowPaging

Returns whether the Grid's paging is enabled

#### Parameters

#### Returns

`Boolean` 

### focus

Focus the underlying control's DOM element

#### Parameters

#### Returns

`Object` 

### clearCopyItems

Clears the copied items from the control state.

#### Parameters

#### Returns

`None` 

### get_type

Returns the type of the item – one of the enumerable values in the  Telerik.Web.UI.FileExplorerItemType enumerable

#### Parameters

#### Returns

`None` 

### get_grid

Returns a reference to the embedded RadGrid object. Returns "null" when the embedded Grid is not visible

#### Parameters

#### Returns

`Telerik.Web.UI.RadGrid` 

### focusPagerControl

Focus the paging control of the file list

#### Parameters

#### Returns

`Object` 

### selectDefaultFile

Try to select a default item from the file list. Usually this is the first item, or none if list is empty

#### Parameters

#### Returns

`Object` 

### selectFileList

Select a list of files by their names

#### Parameters

##### fileNames `Array`

#### Returns

`Object` 

### get_item

Returns an object of type Telerik.Web.UI.FileExplorerItem

#### Parameters

#### Returns

`None` 

### get_name

Returns the name of the item

#### Parameters

#### Returns

`None` 

### get_element

Gets the DOM element, where the file list resides.

#### Parameters

#### Returns

`Element` 

### dataBind

Bind the already provided data(use set_dataSource(data)) to the underlying bindable control

#### Parameters

#### Returns

`Object` 

### doFiltering

Filter the file list by the provided keyword. This method does not raise a filter event

#### Parameters

##### keyWord `Object`

#### Returns

`Object` 

### get_contextMenu

Get a reference to the context menu that is utilized by the file list

#### Parameters

#### Returns

`Object` 

### get_items

Get the items displayed in the file list.

#### Parameters

#### Returns

`Array` 

### get_windowManager

Returns a reference to the embedded RadWindowManager object

#### Parameters

#### Returns

`Telerik.Web.UI.RadWindowManager` 

### set_dataSource

Set the data needed for the data bindable control

#### Parameters

##### data `Array`

#### Returns

`Object` 

### get_control

Get a reference to the underlying bindable control

#### Parameters

#### Returns

`Object` 

### showFolderFileList

Show the content of a folder. This method takes advantage of a cached folder content, if the folder has already been loaded

#### Parameters

##### folderPath `Object`

#### Returns

`Object` 

### createItemFromPath

Create a FileExplorerItem from the provided path by looking at all file controls (tree or fileList)

#### Parameters

##### path `String`

The path of the file

#### Returns

`Telerik.Web.UI.FileExplorerItem` The found item

### get_toolbar

Returns a reference to the embedded RadToolBar object. Returns "null" when the embedded ToolBar is not visible

#### Parameters

#### Returns

`Telerik.Web.UI.RadToolBar` 

### dispose

Disposes the control. Does not dispose the underlying bindable control

#### Parameters

#### Returns

`Object` 

### get_ajaxLoadingPanel

Returns a reference to the embedded RadAjaxLoadingPanel object

#### Parameters

#### Returns

`Telerik.Web.UI.RadAjaxLoadingPanel` 

### copyItems

Marks the provided items as copied. Only the provided items will be copied when the paste occurs.

#### Parameters

##### items `Array`

The items to copy

#### Returns

`None` 

### get_enableOpenFile

Returns whether a file can be opened for preview

#### Parameters

#### Returns

`Boolean` 

### clearFolderCache

Clears the cached data on the browser

#### Parameters

#### Returns

`None` 

### get_newFolderDefaultValue

Returns the default text that is shown in the CreateNewFolder dialog

#### Parameters

#### Returns

`String` 

## Events

### eventHandlersAttached

Occurs just after the event handlers for the dependent controls have been attached, but before the binding

#### Event Data

##### sender `Telerik.Web.UI.RadFileExplorer`

The RadFileExplorer instance raised the event.

##### args `Sys.EventArgs`

Empty event argument.

### itemSelected

Occurs when the user selects an item in the grid.

#### Event Data

##### sender `Telerik.Web.UI.RadFileExplorer`

The RadFileExplorer instance raised the event.

##### args `Telerik.Web.UI.RadFileExplorerEventArgs`

The arguments of the ItemSelected event.

### ajaxRequestStart

Occurs when an ajax request is initiated in RadFileExplorer.

#### Event Data

##### sender `Telerik.Web.UI.RadFileExplorer`

The RadFileExplorer instance raised the event.

##### args `Sys.EventArgs`

Empty event argument.

### init

Occurs just before the control loads in the browser.

#### Event Data

##### sender `Telerik.Web.UI.RadFileExplorer`

The RadFileExplorer instance raised the event.

##### args `Sys.EventArgs`

Empty event argument.

### load

Occurs when the control loads in the browser.

#### Event Data

##### sender `Telerik.Web.UI.RadFileExplorer`

The RadFileExplorer instance raised the event.

##### args `Sys.EventArgs`

Empty event argument.

### folderChange

Occurs when the user selects an item in the grid.

#### Event Data

##### sender `Telerik.Web.UI.RadFileExplorer`

The RadFileExplorer instance raised the event.

##### args `Telerik.Web.UI.RadFileExplorerEventArgs` 

The arguments of the FolderChange event.

### move

Occurs when the user tries to move or rename an item.

#### Event Data

##### sender `Telerik.Web.UI.RadFileExplorer`

The RadFileExplorer instance raised the event.

##### args `Telerik.Web.UI.RadFileExplorerEventArgs` 

The arguments of the Move event.

### copy

Occurs when the user tries to copy an item.

#### Event Data

##### sender `Telerik.Web.UI.RadFileExplorer`

The RadFileExplorer instance raised the event.

##### args `Telerik.Web.UI.RadFileExplorerCopyEventArgs` 

The arguments of the Copy event.

### folderLoaded

Occurs when a folder is loaded in the grid.

#### Event Data

##### sender `Telerik.Web.UI.RadFileExplorer`

The RadFileExplorer instance raised the event.

##### args `Telerik.Web.UI.RadFileExplorerEventArgs` 

The arguments of the FolderLoaded event.

### fileOpen

Occurs when an item is double clicked in the grid or in the tree.

#### Event Data

##### sender `Telerik.Web.UI.RadFileExplorer`

The RadFileExplorer instance raised the event.

##### args `Telerik.Web.UI.RadFileExplorerEventArgs` 

The arguments of the FileOpen event.

### ajaxRequestEnd

Occurs when a request is received from the server. The event cannot be canceled. 

#### Event Data

##### sender `Telerik.Web.UI.RadFileExplorer`

The RadFileExplorer instance raised the event.

##### args `Sys.EventArgs`

Empty event argument.

### delete

Occurs when the user tries to delete an item(file or folder).

#### Event Data

##### sender `Telerik.Web.UI.RadFileExplorer`

The RadFileExplorer instance raised the event.

##### args `Telerik.Web.UI.RadFileExplorerEventArgs` 

The arguments of the Delete event.


### createNewFolder

Occurs when a new folder is created.

#### Event Data

##### sender `Telerik.Web.UI.RadFileExplorer`

The RadFileExplorer instance raised the event.

##### args `Telerik.Web.UI.RadFileExplorerEventArgs` 

The arguments of the CreateNewFolder event.