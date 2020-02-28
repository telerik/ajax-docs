---
title: OnClientCreateNewFolder
page_title: OnClientCreateNewFolder | RadFileExplorer for ASP.NET AJAX Documentation
description: OnClientCreateNewFolder
slug: fileexplorer/client-side-programming/events/onclientcreatenewfolder
tags: onclientcreatenewfolder
published: True
position: 5
---

# OnClientCreateNewFolder

The client-side **CreateNewFolder** event is raised when a new folder is created in **RadFileExplorer**.

To handle this event, simply write a JavaScript function that can be called when the event occurs. Then assign the name of this function as the value of the **OnClientCreateNewFolder** property of the control.

The client-side **OnClientCreateNewFolder** event handler receives two arguments:

1. Sender: The [RadFileExplorer object](https://docs.telerik.com/devtools/aspnet-ajax/api/client/Telerik.Web.UI.RadFileExplorer) that fired the event.

1. Event arguments: An event arguments object of type Telerik.Web.UI.FileExplorerEventArgs that exposes the following methods:

	>caption Table 1: OnClientCreateNewFolder Event Arguments Object

	|  **Name**  |  **Parameters**  |  **Return Type**  |  **Description**  |
	| ------ | ------ | ------ | ------ |
	|get_cancel()||Boolean|Returns a value that indicates whether the event is cancelled.|
	|get_item()||Object|Returns the currently loaded folder.|
	|get_newPath()||String|Returns the path to the created folder.|
	|get_path()||String|Returns the name of the created folder.|
	|set_cancel(value)|Boolean||Sets whether the event will be cancelled (if true is passed).|

>caption Example 1: Confirm new folder creation in the **RadFileExplorer**'s client-side **CreateNewFolder** event handler.

````ASP.NET
<telerik:RadFileExplorer ID="RadFileExplorer1" runat="server" OnClientCreateNewFolder="onClientCreateNewFolder">
    <Configuration ViewPaths="~/Images" DeletePaths="~/Images" UploadPaths="~/Images" />
</telerik:RadFileExplorer>
<script>
    function onClientCreateNewFolder(fileExplorer, args) {
        var alertResult = confirm(" Do you want to perform this operation ?");
        if (alertResult) {
            alert("The new folder's name : " + args.get_newPath());
            alert("The path : " + args.get_path());
        } else {// Cancel creation        
            args.set_cancel(true);
        }
    }
</script>
````


## See Also

 * [RadFileExplorer Client-side Basics]({%slug fileexplorer/client-side-programming/overview%})

 * [RadFileExplorer Client-side Events Overview]({%slug fileexplorer/client-side-programming/events%})
