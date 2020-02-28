---
title: OnClientMove
page_title: OnClientMove | RadFileExplorer for ASP.NET AJAX Documentation
description: OnClientMove
slug: fileexplorer/client-side-programming/events/onclientmove
tags: onclientmove
published: True
position: 13
---

# OnClientMove

The client-side **Move** event is raised when a file/folder is moved or renamed in **RadFileExplorer**.

To handle this event, simply write a JavaScript function that can be called when the event occurs. Then assign the name of this function as the value of the **OnClientMove** property of the control.

**Example 1** shows how to detect whether the **Move** client-side event is triggered when a file/folder is moved or renamed. 

The client-side **OnClientMove** event handler receives two arguments:

1. Sender: The [RadFileExplorer object](https://docs.telerik.com/devtools/aspnet-ajax/api/client/Telerik.Web.UI.RadFileExplorer) that fired the event.

1. Event arguments: An event arguments object of type Telerik.Web.UI.FileExplorerEventArgs that exposes the following methods:

	>caption Table 1: OnClientMove Event Arguments Object

	|  **Name**  |  **Parameters**  |  **Return Type**  |  **Description**  |
	| ------ | ------ | ------ | ------ |
	|get_cancel()||Boolean|Returns a value that indicates whether the event is cancelled.|
	|get_isRename()||Boolean|Specifies whether the item is renamed.|
	|get_item()||Object|Returns a reference to the item that is moved/renamed.|
	|get_newPath()||String|Returns the new path (if moved) or the new name (if renamed) of the item.|
	|get_path()||String|Returns the current path to the moved/renamed item.|
	|set_cancel(value)|Boolean||Sets whether the event will be cancelled (if true is passed).|

>caption Example 1: Detect whether a file is moved or renamed by handling the **RadFileExplorer**'s client-side **Move** event.

````ASP.NET
<telerik:RadFileExplorer ID="RadFileExplorer1" runat="server"  OnClientMove="onClientMove">
    <Configuration ViewPaths="~/Images" DeletePaths="~/Images" UploadPaths="~/Images" />
</telerik:RadFileExplorer>
<script>
    function onClientMove(fileExplorer, args) {
        debugger;
        // When renaming, the get_newPath() returns only the name of the item. 
        // The name does not contain any slashes 
        var isRename = args.get_newPath().search("/") < 0;

        // When moving, the get_newPath() returns the destination directory's path. 
        // The name does contain least one slash 
        var isMove = args.get_newPath().search("/") >= 0;

        alert("isRename : " + isRename + "\n isMove : " + isMove);
        alert(args.get_newPath());
    }
</script>
````


## See Also

 * [RadFileExplorer Client-side Basics]({%slug fileexplorer/client-side-programming/overview%})

 * [RadFileExplorer Client-side Events Overview]({%slug fileexplorer/client-side-programming/events%})
