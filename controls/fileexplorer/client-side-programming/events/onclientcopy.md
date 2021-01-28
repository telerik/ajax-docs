---
title: OnClientCopy
page_title: OnClientCopy - RadFileExplorer
description: Check our Web Forms article about OnClientCopy.
slug: fileexplorer/client-side-programming/events/onclientcopy
tags: onclientcopy
published: True
position: 4
---

# OnClientCopy

The client-side **Copy** event is raised when the user tries to copy an item in **RadFileExplorer**.

To handle this event, simply write a JavaScript function that can be called when the event occurs. Then assign the name of this function as the value of the **OnClientCopy** property of the control.

The client-side **OnClientCopy** event handler receives two arguments:

1. Sender: The [RadFileExplorer object](https://docs.telerik.com/devtools/aspnet-ajax/api/client/Telerik.Web.UI.RadFileExplorer) that fired the event.

1. Event arguments: An event arguments object of type Telerik.Web.UI.FileExplorerCopyEventArgs that exposes the following methods:

	>caption Table 1: OnClientCopy Event Arguments Object

	|  **Name**  |  **Parameters**  |  **Return Type**  |  **Description**  |
	| ------ | ------ | ------ | ------ |
	|get_cancel()||Boolean|Returns a value that indicates whether the event is cancelled.|
	|get_item()||Object|Returns the copied item.|
	|get_items()||Array|Returns the copied items.|
	|get_newPath()||String|Returns the target path of the copied item(s).|
	|get_path()||String|Returns the current path of the copied item(s).|
	|set_cancel(value)|Boolean||Sets whether the event will be cancelled (if true is passed).|

>caption Example 1: Handle the **RadFileExplorer**'s client-side **Copy** event.

````ASP.NET
<telerik:RadFileExplorer ID="RadFileExplorer1" runat="server" OnClientCopy="onClientCopy" EnableCopy="true">
    <Configuration ViewPaths="~/Images" DeletePaths="~/Images" UploadPaths="~/Images"/>
</telerik:RadFileExplorer>
<script>
    function onClientCopy(fileExplorer, args) {
        var destinationPath = args.get_newPath();
        alert(String.format("Item is copied to {0}", destinationPath));
    }
</script>
````


## See Also

 * [RadFileExplorer Client-side Basics]({%slug fileexplorer/client-side-programming/overview%})

 * [RadFileExplorer Client-side Events Overview]({%slug fileexplorer/client-side-programming/events%})
