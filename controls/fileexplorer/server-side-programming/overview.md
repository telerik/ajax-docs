---
title: Overview
page_title: Server-side Programming Overview | RadFileExplorer for ASP.NET AJAX Documentation
description: Overview
slug: fileexplorer/server-side-programming/overview
tags: overview
published: True
position: 0
---

# Server-side Programming Overview

The **RadFileExplorer** control exposes a number or properties that can be used in order to change its behavior.

| Property name | Type | Description |
| ------ | ------ | ------ |
|Configuration|An inner property|


| Inner Property name | Type | Description |
| ------ | ------ | ------ |
|ViewPaths|A string array|Sets the folders that will be shown in RadFileExplorer|
|UploadPaths|A string array|This property is used in order to Assigns Upload (or write) permission for specific folders and their children folders|
|DeletePaths|A string array|This property is used in order to Assigns Delete permission for specific folders and their children (files and folders)|
|ContentProviderTypeName|System.String|Sets the AssemblyQualifiedName of a custom FileBrowserContentProvider that will be used in order to load the content in RadFileExplorer|
|MaxUploadFileSize|Int32|Sets the allowed file upload size.[This article](3544C667-22D4-403B-91E4-43BC8CA94778)shows how to upload large files.|
|SearchPatterns|A string array|An array of[ wildcards for search ](http://msdn.microsoft.com/en-us/library/wz42302f.aspx)||
|AllowPaging|Boolean|Enables or disables paging in the embedded RadGrid|
|PageSize|Int32|Sets the PageSize of the embedded RadGrid. This property takes effect only when AllowPaging="true" is set|
|DisplayUpFolderItem|Boolean|Show or hide thefolder in the embedded RadGrid|
|EnableCopy|Boolean|Allow or deny copy|
|EnableCreateNewFolder|Boolean|Allow or deny creating a new folder. If a custom provider is used, then the provider's CanCreateDirectory should be overridden as well|
|ExplorerMode|An enum of type: Telerik.Web.UI.FileExplorer.FileExplorerMode|Allows FileTree mode, where the files and folders are shown in the TreeView. The grid in this mode is not visible|
|Grid|Telerik.Web.UI.RadGrid|Exposes the embedded RadGrid object|
|TreeView|Telerik.Web.UI.RadTreeView|Exposes the embedded RadTreeView object|
|GridContextMenu|Telerik.Web.UI.RadContextMenu|Exposes the embedded Grid's context menu|
|InitialPath|String|Allows a file or folder to be selected when the RadFileExplorer is loaded. The value set to the property is case sensitive and should be in the same format as shown in the RadFileExplorer's addressbar|
|Splitter|Telerik.Web.UI.RadSplitter|Exposes the embedded RadSplitter object|
|ToolBar|Telerik.Web.UI.RadToolBar|Exposes the embedded RadTolBar object|
|ToolBar|Telerik.Web.UI.RadToolTip|Exposes the embedded RadToolTip object|
|WindowManager|Telerik.Web.UI.RadWindowManager|Exposes the embedded RadWindowManager object|
|Telerik.Web.UI.RadUpload|Int32|Exposes the embedded RadUpload object|
|TreePaneWidth|Int32|Allows the width of the splitter's pane to be set from the server|
|VisibleControls|Telerik.Web.UI.FileExplorer.FileExplorerControls|Determines which controls to be visible|
