---
title: OnClientFolderLoaded
page_title: OnClientFolderLoaded | RadFileExplorer for ASP.NET AJAX Documentation
description: OnClientFolderLoaded
slug: fileexplorer/client-side-programming/events/onclientfolderloaded
tags: onclientfolderloaded
published: True
position: 11
---

# OnClientFolderLoaded

The client-side **FolderLoaded** event is raised when a folder is loaded in the grid of **RadFileExplorer**.

To handle this event, simply write a JavaScript function that can be called when the event occurs. Then assign the name of this function as the value of the **OnClientFolderLoaded** property of the control.

The client-side **OnClientFolderLoaded** event handler receives two arguments:

1. Sender—the [RadFileExplorer object](http://docs.telerik.com/devtools/aspnet-ajax/api/client/Telerik.Web.UI.RadFileExplorer) that fired the event.

1. Event arguments—an event arguments object of type Telerik.Web.UI.FileExplorerEventArgs that exposes the following methods:

	>caption Table 1: OnClientFolderLoaded Event Arguments Object

	|  **Name**  |  **Parameters**  |  **Return Type**  |  **Description**  |
	| ------ | ------ | ------ | ------ |
	|get_cancel()||Boolean|Returns a value that indicates whether the event is cancelled.|
	|get_isRename()||Boolean|Specifies whether the item is renamed.|
	|get_item()||Object|Returns a reference to the loaded folder.|
	|get_path()||String|Returns the path to the loaded folder.|
	|set_cancel(value)|Boolean||Sets whether the event will be cancelled (if true is passed).|

>caption Example 1: Handle the **RadFileExplorer**'s client-side **FolderLoaded** event.

````ASP.NET
<telerik:RadFileExplorer ID="RadFileExplorer1" runat="server"  OnClientFolderLoaded="onClientFolderLoaded">
    <Configuration ViewPaths="~/Images" DeletePaths="~/Images" UploadPaths="~/Images" />
</telerik:RadFileExplorer>
<script>
    function onClientFolderLoaded(fileExplorer, args) {
        // Get the loaded folder path    
        alert(" The path to the loaded folder is:  " + args.get_path());
    }
</script>
````


## See Also

 * [RadFileExplorer Client-side Basics]({%slug fileexplorer/client-side-programming/overview%})

 * [RadFileExplorer Client-side Events Overview]({%slug fileexplorer/client-side-programming/events%})
