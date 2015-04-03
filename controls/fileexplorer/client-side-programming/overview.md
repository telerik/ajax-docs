---
title: Client-side Programming Overview
page_title: Overview | UI for ASP.NET AJAX Documentation
description: Overview
slug: fileexplorer/client-side-programming/overview
tags: overview
published: True
position: 0
---

# Client-side Programming Overview



__RadFileExplorer__ has a number of client-side properties and methods that you could use :

## Telerik.Web.UI.FileExplorer methods




>caption  

|  __Method__  |  __Description__  |
| ------ | ------ |
| __add_delete(eventHandler)__ |Sets the the name of the JavaScript function called when the user tries to delete a file.|
| __remove_delete(eventHandler)__ |Removes the function declared in the add_delete() method.|
| __add_createNewFolder(eventHandler)__ |Sets the the name of the JavaScript function called when a new folder is created|
| __remove_createNewFolder(eventHandler)__ |Removes the function declared in the add_createNewFolder() method.|
| __add_fileOpen(eventHandler)__ |Sets the name of the JavaScript function called when an item is double clicked in the grid.|
| __remove_fileOpen(eventHandler)__ |Removes the function declared in the add_fileOpen() method.|
| __add_folderChange(eventHandler)__ |Sets the name of the JavaScript function called when the the selected folder in the tree changes.|
| __remove_folderChange(eventHandler)__ |Removes the function declared in the add_folderChange() method.|
| __add_folderLoaded(eventHandler)__ |Sets the name of the JavaScript function called when a folder is loaded in the grid.|
| __remove_folderLoaded(eventHandler)__ |Removes the function declared in the add_folderLoaded() method.|
| __add_itemSelected(eventHandler)__ |Sets the name of the JavaScript function called when the user selects an item in the explorer.|
| __remove_itemSelected(eventHandler)__ |Removes the function declared in the add_itemSelected() method.|
| __add_load(eventHandler)__ |Sets the name of the JavaScript function called when the control loads in the browser.|
| __remove_load(eventHandler)__ |Removes the function declared in the add_load() method.|
| __add_move(eventHandler)__ |Set the name of the JavaScript function called when the user tries to rename/move a file or folder.|
| __remove_move(eventHandler)__ |Removes the function declared in the add_move() method.|
| __add_copy(eventHandler)__ |Set the name of the JavaScript function called when the user tries to copy a file or folder.|
| __remove_copy(eventHandler)__ |Removes the function declared in the add_copy() method.|
| __createNewDirectory(path, newName)__ |Creates a new directory. The *path* parameter should be a virtual path. In case that the second parameter is not specified a radprompt dialog appears and asks for the new name.|
| __deleteItem(item, showConfirmDialog)__ |Deletes an item (folder or file). The parameter is of type __Telerik.Web.UI.FileExplorerItemType.File__ or __Telerik.Web.UI.FileExplorerItemType.Directory__ The second parameter is optional and indicates whether to show the confirmation dialog or delete the file immediately. The default value is * __true__ * |
| __deleteItem(path, showConfirmDialog)__ |Deletes an item. The parameter is the virtual path to the item; it starts with the / __RootProjectFolder__ /PathToTheItem.The second parameter is optional and indicates whether to show the confirmation dialog or delete the file immediately. The default value is * __true__ * |
| __get_currentDirectory()__ |Returns a string value that represents the path to the currently selected directory. The returned path is a virtual path, such as /RootProjectFolder/SelectedDir|
| __set_currentDirectory(value,addToStack)__ |Change the currently selected directory. The first parameter is the new path, relevant to the root path of the project : /RootProjectFolder/NewPath. The second parameter accepts a Boolean value that determines whether the current change of the directory to be stored in the Previous – Next stack|
| __get_currentPermissions()__ |Returns the permissions of the currently selected folder in the TreeView|
| __get_element()__ |Returns a reference to the DIV that wraps __RadFileExplorer__ .|
| __get_enableOpenFile()__ |Returns a Boolean value that indicates whether the files can be open in the preview window.|
| __set_enableOpenFile()__ |Accepts a Boolean value that indicates whether the files can be open in the preview window.|
| __getFileExplorerItemFromNode(node)__ |Gets the __Telerik.Web.UI.FileExplorerItem__ by the passed __Telerik.Web.UI.RadTreeNode__ object|
| __get_fileList()__ |Returns a reference to the FileList object. Returns 'null' when the FileList is not visible, i.e. only the RadTreeView is shown|
| __get_grid()__ |Returns a reference to the __RadGrid's__ object.|
| __get_listView()__ |Returns a reference to the embedded RadListView object. Returns 'null' when the embedded ListView is not visible|
| __get_gridContextMenu()__ |Returns an object of type __Telerik.Web.UI.RadContextMenu__ . This is the context menu that appears over the RadGrid’s area.|
| __get_ajaxLoadingPanel()__ |Returns an object of type RadAjaxLoadingPanel and then you can use its client side API and manipulate that object.|
| __get_windowManager()__ |Returns a reference to the RadWindowManager object. You can use that object’s client-side API and attach event handlers to the newly opened windows.|
| __get_pathSeparator()__ |Returns the symbol used as path separator|
| __get_allowPaging()__ |Returns whether the Grid's paging is enabled|
| __get_addressBox()__ |Returns the ID of the input that shows the currently selected folder (AddressBox). Returns an empty string when the AddressBox is not visible|
| __get_newFolderDefaultValue()__ |Returns the default text that is shown in the CreateNewFolder dialog|
| __set_newFolderDefaultValue(newDefaultName)__ |Sets the default folder name that will be shown in the CreateNewFolder dialog|
| __get_id()__ |Returns the ID of the control.|
| __get_selectedItem()__ |Returns the first selected item ( __Telerik.Web.UI.FileExplorerItem__ )|
| __get_selectedItems()__ |Returns an array of the selected item on the Grid items. The items are of type __Telerik.Web.UI.FileExplorerItem__ |
| __open(item)__ |Opens the item in a new RadWindow if it is a file. Else, opens the folder in the RadGrid.The parameter is optional and if not specified the current selected item will be used.|
| __clearFolderCache()__ |Clears the cached data on the browser|
| __deleteSelectedItems(showConfirmDialog)__ |Performs delete operation for all of the currently selected items on the Grid. __ *showConfirmDialog -* __ this parameter is optional and indicates whether to show the confirmation dialog or delete the files immediately. The default value is * __true__ * |
| __get_toolbar()__ |Returns a reference to the __RadToolBar__ object.|
| __get_tree()__ |Returns a reference to the __RadTreeView__ object.|
| __loadFolder(path,addToStack)__ |Loads a new folder and sets the focus on it. The second parameter accepts a Boolean value that determines whether the current change of the directory to be stored in the Previous – Next stack|
| __refresh()__ |Refresh the current folder.|
| __filter(keyWord)__ |Filters the items in the currently selected directory.|
| __addFileNameInvalidChar(char)__ |Adds additional characters to the file name invalid characters list. Default list is ['\\', '/', ':', '*', '?', '"', '<', '>', '|']|
| __removeFileNameInvalidChar(char)__ |Removes items from the file name invalid characters list. Default list is ['\\', '/', ':', '*', '?', '"', '<', '>', '|']|



## Telerik.Web.UI.FileExplorer.FileList Methods




>caption  

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




>caption  

|  __Method__  |  __Description__  |
| ------ | ------ |
| __get_path()__ |Returns the virtual path to the item|
| __get_newPath()__ |When "Rename" is performed returns the new name of the item. When the "Move" is performed returns the new destination of the moved folder (see the OnClientMove example bellow)|
| __get_item()__ |Returns an object of type Telerik.Web.UI.FileExplorerItem|



## Telerik.Web.UI.FileExplorerItem




>caption  

|  __Method__  |  __Description__  |
| ------ | ------ |
| __get_type()__ |Returns the type of the item – one of the enumerable values in theTelerik.Web.UI.FileExplorerItemType enumerable|
| __get_permissions()__  ____ |Returns the applied current permissions to the item - enumerable value of type Telerik.Web.UI.FileExplorerItemPermissions|
| __get_name()__  ____ |Returns the name of the item|
| __get_path()__ |Returns the virtual path to the item|
| __get_extension()__ |Gets the extension of the item - txt for example if it is a text file, ‘null’ when the selected item does not have extension(i.e. if the selected item is a folder)|
| __get_size()__ |Returns the size of the currently selected item. NaN if the selected item is a folder|
| __get_url()__ |Has the same functionality as the get_path() function|
| __isDirectory()__ |Returns a Boolean value that indicates whether the selected item is a folder or not|




