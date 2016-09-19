---
title: OnClientDelete
page_title: OnClientDelete | RadFileExplorer for ASP.NET AJAX Documentation
description: OnClientDelete
slug: fileexplorer/client-side-programming/events/onclientdelete
tags: onclientdelete
published: True
position: 6
---

# OnClientDelete

The client-side **Delete** event is raised when a file or folder is deleted in **RadFileExplorer**.

To handle this event, simply write a JavaScript function that can be called when the event occurs. Then assign the name of this function as the value of the **OnClientDelete** property of the control.

The client-side **OnClientDelete** event handler receives two arguments:

1. Sender—the [RadFileExplorer object](http://docs.telerik.com/devtools/aspnet-ajax/api/client/Telerik.Web.UI.RadFileExplorer) that fired the event.

1. Event arguments—an event arguments object of type Telerik.Web.UI.FileExplorerEventArgs that exposes the following methods:

	>caption Table 1: OnClientDelete Event Arguments Object

	|  **Name**  |  **Parameters**  |  **Return Type**  |  **Description**  |
	| ------ | ------ | ------ | ------ |
	|get_cancel()||Boolean|Returns a value that indicates whether the event is cancelled.|
	|get_item()||Object|Returns the file/folder that will be deleted.|
	|get_path()||String|Returns the path to the deleted file/folder.|
	|set_cancel(value)|Boolean||Sets whether the event will be cancelled (if true is passed).|

>caption Example 1: Handle the **RadFileExplorer**'s client-side **Delete** event.

````ASP.NET
<telerik:RadFileExplorer ID="RadFileExplorer1" runat="server" OnClientDelete="onClientDelete">
    <Configuration ViewPaths="~/Images" DeletePaths="~/Images" UploadPaths="~/Images" />
</telerik:RadFileExplorer>
<script>
    function onClientDelete(fileExplorer, args) {
        alert("Deleted file : " + args.get_path());
    }
</script>
````


## See Also

 * [RadFileExplorer Client-side Basics]({%slug fileexplorer/client-side-programming/overview%})

 * [RadFileExplorer Client-side Events Overview]({%slug fileexplorer/client-side-programming/events%})
