---
title: Overview
page_title: Client-side Programming Overview | RadFileExplorer for ASP.NET AJAX Documentation
description: Overview
slug: fileexplorer/client-side-programming/overview
tags: overview
published: True
position: 0
---

# Client-side Programming Overview

**RadFileExplorer** has a number of client-side properties and methods that you could use:

## Telerik.Web.UI.FileExplorer methods

|  **Method**  |  **Description**  |
| ------ | ------ |
| **add_delete(eventHandler)** |Sets the the name of the JavaScript function called when the user tries to delete a file.|
| **remove_delete(eventHandler)** |Removes the function declared in the add_delete() method.|
| **add_createNewFolder(eventHandler)** |Sets the the name of the JavaScript function called when a new folder is created|
| **remove_createNewFolder(eventHandler)** |Removes the function declared in the add_createNewFolder() method.|
| **add_fileOpen(eventHandler)** |Sets the name of the JavaScript function called when an item is double clicked in the grid.|
| **remove_fileOpen(eventHandler)** |Removes the function declared in the add_fileOpen() method.|
| **add_folderChange(eventHandler)** |Sets the name of the JavaScript function called when the the selected folder in the tree changes.|
| **remove_folderChange(eventHandler)** |Removes the function declared in the add_folderChange() method.|
| **add_folderLoaded(eventHandler)** |Sets the name of the JavaScript function called when a folder is loaded in the grid.|
| **remove_folderLoaded(eventHandler)** |Removes the function declared in the add_folderLoaded() method.|
| **add_itemSelected(eventHandler)** |Sets the name of the JavaScript function called when the user selects an item in the explorer.|
| **remove_itemSelected(eventHandler)** |Removes the function declared in the add_itemSelected() method.|
| **add_load(eventHandler)** |Sets the name of the JavaScript function called when the control loads in the browser.|
| **remove_load(eventHandler)** |Removes the function declared in the add_load() method.|
| **add_move(eventHandler)** |Set the name of the JavaScript function called when the user tries to rename/move a file or folder.|
| **remove_move(eventHandler)** |Removes the function declared in the add_move() method.|
| **add_copy(eventHandler)** |Set the name of the JavaScript function called when the user tries to copy a file or folder.|
| **remove_copy(eventHandler)** |Removes the function declared in the add_copy() method.|
| **createNewDirectory(path, newName)** |Creates a new directory. The *path* parameter should be a virtual path. In case that the second parameter is not specified a radprompt dialog appears and asks for the new name.|
| **deleteItem(item, showConfirmDialog)** |Deletes an item (folder or file). The parameter is of type **Telerik.Web.UI.FileExplorerItemType.File** or **Telerik.Web.UI.FileExplorerItemType.Directory** The second parameter is optional and indicates whether to show the confirmation dialog or delete the file immediately. The default value is * **true** * |
| **deleteItem(path, showConfirmDialog)** |Deletes an item. The parameter is the virtual path to the item; it starts with the / **RootProjectFolder** /PathToTheItem.The second parameter is optional and indicates whether to show the confirmation dialog or delete the file immediately. The default value is * **true** * |
| **get_currentDirectory()** |Returns a string value that represents the path to the currently selected directory. The returned path is a virtual path, such as /RootProjectFolder/SelectedDir|
| **set_currentDirectory(value,addToStack)** |Change the currently selected directory. The first parameter is the new path, relevant to the root path of the project : /RootProjectFolder/NewPath. The second parameter accepts a Boolean value that determines whether the current change of the directory to be stored in the Previous – Next stack|
| **get_currentPermissions()** |Returns the permissions of the currently selected folder in the TreeView|
| **get_element()** |Returns a reference to the DIV that wraps **RadFileExplorer** .|
| **get_enableOpenFile()** |Returns a Boolean value that indicates whether the files can be open in the preview window.|
| **set_enableOpenFile()** |Accepts a Boolean value that indicates whether the files can be open in the preview window.|
| **getFileExplorerItemFromNode(node)** |Gets the **Telerik.Web.UI.FileExplorerItem** by the passed **Telerik.Web.UI.RadTreeNode** object|
| **get_fileList()** |Returns a reference to the FileList object. Returns 'null' when the FileList is not visible, i.e. only the RadTreeView is shown|
| **get_grid()** |Returns a reference to the **RadGrid's** object.|
| **get_listView()** |Returns a reference to the embedded RadListView object. Returns 'null' when the embedded ListView is not visible|
| **get_gridContextMenu()** |Returns an object of type **Telerik.Web.UI.RadContextMenu** . This is the context menu that appears over the RadGrid’s area.|
| **get_ajaxLoadingPanel()** |Returns an object of type RadAjaxLoadingPanel and then you can use its client side API and manipulate that object.|
| **get_windowManager()** |Returns a reference to the RadWindowManager object. You can use that object’s client-side API and attach event handlers to the newly opened windows.|
| **get_pathSeparator()** |Returns the symbol used as path separator|
| **get_allowPaging()** |Returns whether the Grid's paging is enabled|
| **get_addressBox()** |Returns the ID of the input that shows the currently selected folder (AddressBox). Returns an empty string when the AddressBox is not visible|
| **get_newFolderDefaultValue()** |Returns the default text that is shown in the CreateNewFolder dialog|
| **set_newFolderDefaultValue(newDefaultName)** |Sets the default folder name that will be shown in the CreateNewFolder dialog|
| **get_id()** |Returns the ID of the control.|
| **get_selectedItem()** |Returns the first selected item ( **Telerik.Web.UI.FileExplorerItem** )|
| **get_selectedItems()** |Returns an array of the selected item on the Grid items. The items are of type **Telerik.Web.UI.FileExplorerItem** |
| **open(item)** |Opens the item in a new RadWindow if it is a file. Else, opens the folder in the RadGrid.The parameter is optional and if not specified the current selected item will be used.|
| **clearFolderCache()** |Clears the cached data on the browser|
| **deleteSelectedItems(showConfirmDialog)** |Performs delete operation for all of the currently selected items on the Grid. ** *showConfirmDialog -* ** this parameter is optional and indicates whether to show the confirmation dialog or delete the files immediately. The default value is * **true** * |
| **get_toolbar()** |Returns a reference to the **RadToolBar** object.|
| **get_tree()** |Returns a reference to the **RadTreeView** object.|
| **loadFolder(path,addToStack)** |Loads a new folder and sets the focus on it. The second parameter accepts a Boolean value that determines whether the current change of the directory to be stored in the Previous – Next stack|
| **refresh()** |Refresh the current folder.|
| **filter(keyWord)** |Filters the items in the currently selected directory.|
| **addFileNameInvalidChar(char)** |Adds additional characters to the file name invalid characters list. Default list is ['\\', '/', ':', '*', '?', '"', '<', '>', '|']|
| **removeFileNameInvalidChar(char)** |Removes items from the file name invalid characters list. Default list is ['\\', '/', ':', '*', '?', '"', '<', '>', '|']|


## Telerik.Web.UI.FileExplorer.FileList Methods
 

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
|dataBind()|||Bind the already provided data(use set_dataSource(data)) to the underlying bindable control|
|bindToServerData(serverData, pageIndex)|object, integer||Bind the data to the underlying bindable control|
|bindToData(data)|Array||Shortcut method for set_dataSource(data); dataBind().|
|get_dataSource()||Array|Get the data source provided to the control|
|set_dataSource(data)|Array||Set the data needed for the data bindable control|
|get_pageSize()||integer|Get the page size as maximum number of items per page|
|set_pageSize(value)|integer||Set the size of the page, i.e. the maximum number of items per page|
|get_control()||object|Get a reference to the underlying bindable control|
|get_contextMenu()||object|Get a reference to the context menu that is utilized by the file list|
|get_fileExplorer()||object|Get a reference to the RadFileExplorer that used this instance of FileList|
|get_element()||DOM Element|Gets the DOM element, where the file list resides.|
|get_items()||Array|Get the items displayed in the file list.|
|get_selectedItems()||Array|Get the selected items from the file list|
|getSelectedFiles()||Array|Get the selected files(Telerik.Web.UI.FileExplorerItem) from the file list|
|get_selectedItem()||object|Get the first selected item from the file list|
|selectFile(file)|object||Select an item from the file list|
|selectFileByName(fileName)|string||Select a file item from the file list by the provided name|
|selectFileList(fileNames)|Array||Select a list of files by their names|
|selectDefaultFile()|||Try to select a default item from the file list. Usually this is the first item, or none if list is empty|
|clearSelection()|||Clear any item selection in the file list|
|findFileByName(fileName)|string|object|Find a file by its name|
|findFileByPath(path)|string|object|Find a file by its path|
|get_grid()||object|Get a reference to the grid control that displays the list of files if such is being used to display the items|
|get_listView()||object|Get a reference to the list view control that displays the list of files if such is being used to display the items|
|open(item)|object||Open the corresponding file item. If directory, the explorer navigates to it and displays its content|
|focus()|||Focus the underlying control's DOM element|
|focusPagerControl()|||Focus the paging control of the file list|
|attachEventHandlers(toAttach)|boolean||Attach/detach the event handlers|
|showFolderFileList(folderPath)|string||Show the content of a folder. This method takes advantage of a cached folder content, if the folder has already been loaded|
|refreshFileList(folderPath)|string||Force a server call to collect the content of the folder|
|sort(sortExpression)|string||Sort the file list|
|showPageContent(startIndex, pageSize)|integer, integer||Show the content of a particular page|
|filterList(keyWord)|string||Filter the file list by the provided keyword. This method raises a filter event|
|doFiltering(keyWord)|string||Filter the file list by the provided keyword. This method does not raise a filter event|
|serverFilter(keyWord)|string||Force the server to do the filtering|
|clientFilter(keyWord)|string||Filter the file list on the client only. Note that only the items displayed items will be filtered, i.e. paged content will filter only the current page|
|clearFilter()|||Clears the filtering by reseting the filter and clearing the filter text box|
|dispose()|||Disposes the control. Does not dispose the underlying bindable control|

## Telerik.Web.UI.RadFileExplorerEventArgs

|  **Method**  |  **Description**  |
| ------ | ------ |
| **get_path()** |Returns the virtual path to the item|
| **get_newPath()** |When "Rename" is performed returns the new name of the item. When the "Move" is performed returns the new destination of the moved folder (see the OnClientMove example bellow)|
| **get_item()** |Returns an object of type Telerik.Web.UI.FileExplorerItem|

## Telerik.Web.UI.FileExplorerItem

|  **Method**  |  **Description**  |
| ------ | ------ |
| **get_type()** |Returns the type of the item – one of the enumerable values in theTelerik.Web.UI.FileExplorerItemType enumerable|
| **get_permissions()**  |Returns the applied current permissions to the item - enumerable value of type Telerik.Web.UI.FileExplorerItemPermissions|
| **get_name()**  |Returns the name of the item|
| **get_path()** |Returns the virtual path to the item|
| **get_extension()** |Gets the extension of the item - txt for example if it is a text file, ‘null’ when the selected item does not have extension(i.e. if the selected item is a folder)|
| **get_size()** |Returns the size of the currently selected item. NaN if the selected item is a folder|
| **get_url()** |Has the same functionality as the get_path() function|
| **isDirectory()** |Returns a Boolean value that indicates whether the selected item is a folder or not|




