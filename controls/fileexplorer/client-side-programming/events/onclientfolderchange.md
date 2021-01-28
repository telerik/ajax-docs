---
title: OnClientFolderChange
page_title: OnClientFolderChange - RadFileExplorer
description: Check our Web Forms article about OnClientFolderChange.
slug: fileexplorer/client-side-programming/events/onclientfolderchange
tags: onclientfolderchange
published: True
position: 10
---

# OnClientFolderChange

The client-side **FolderChange** event is raised when the selected folder in the tree of **RadFileExplorer** is changed.

To handle this event, simply write a JavaScript function that can be called when the event occurs. Then assign the name of this function as the value of the **OnClientFolderChange** property of the control.

The client-side **OnClientFolderChange** event handler receives two arguments:

1. Sender: The [RadFileExplorer object](https://docs.telerik.com/devtools/aspnet-ajax/api/client/Telerik.Web.UI.RadFileExplorer) that fired the event.

1. Event arguments: An event arguments object of type Telerik.Web.UI.FileExplorerEventArgs that exposes the following methods:

	>caption Table 1: OnClientFolderChange Event Arguments Object

	|  **Name**  |  **Parameters**  |  **Return Type**  |  **Description**  |
	| ------ | ------ | ------ | ------ |
	|get_cancel()||Boolean|Returns a value that indicates whether the event is cancelled.|
	|get_item()||Object|Returns the folder that is about to be opened.|
	|get_path()||Returns the path to the folder that is about to be opened.|
	|set_cancel(value)|Boolean||Sets whether the event will be cancelled (if true is passed).|

>caption Example 1: Detect the folder change in the **RadFileExplorer**'s client-side **OnClientFolderChange** event handler.

````ASP.NET
<telerik:RadFileExplorer ID="RadFileExplorer1" runat="server"  OnClientFolderChange="onClientFolderChange">
    <Configuration ViewPaths="~/Images" DeletePaths="~/Images" UploadPaths="~/Images" />
</telerik:RadFileExplorer>
<script>
    function onClientFolderChange(fileExplorer, args) {
        // Get the selected folder path    
        alert(" Selected folder path : " + args.get_path());
    }
</script>
````


## See Also

 * [RadFileExplorer Client-side Basics]({%slug fileexplorer/client-side-programming/overview%})

 * [RadFileExplorer Client-side Events Overview]({%slug fileexplorer/client-side-programming/events%})
