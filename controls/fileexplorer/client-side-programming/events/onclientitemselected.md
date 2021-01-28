---
title: OnClientItemSelected
page_title: OnClientItemSelected - RadFileExplorer
description: Check our Web Forms article about OnClientItemSelected.
slug: fileexplorer/client-side-programming/events/onclientitemselected
tags: onclientitemselected
published: True
position: 12
---

# OnClientItemSelected

The client-side **ItemSelected** event is raised when a file/folder is selected in the grid of **RadFileExplorer**.

To handle this event, simply write a JavaScript function that can be called when the event occurs. Then assign the name of this function as the value of the **OnClientItemSelected** property of the control.

**Example 1** shows how to detect the item selection, and then determine whether the selected item is a directory or a file.

The client-side **OnClientItemSelected** event handler receives two arguments:

1. Sender: The [RadFileExplorer object](https://docs.telerik.com/devtools/aspnet-ajax/api/client/Telerik.Web.UI.RadFileExplorer) that fired the event.

1. Event arguments: An event arguments object of type Telerik.Web.UI.FileExplorerEventArgs that exposes the following methods:

	>caption Table 1: OnClientItemSelected Event Arguments Object

	|  **Name**  |  **Parameters**  |  **Return Type**  |  **Description**  |
	| ------ | ------ | ------ | ------ |
	|get_cancel()||Boolean|Returns a value that indicates whether the event is cancelled.|
	|get_item()||Object|Returns a reference to the selected file/folder.|
	|get_path()||String|Returns the path to the selected file/folder.|
	|set_cancel(value)|Boolean||Sets whether the event will be cancelled (if true is passed).|

>caption Example 1: Detect file selection by handling the **RadFileExplorer**'s client-side **ItemSelected** event.

````ASP.NET
<telerik:RadFileExplorer ID="RadFileExplorer1" runat="server"  OnClientItemSelected="onClientItemSelected">
    <Configuration ViewPaths="~/Images" DeletePaths="~/Images" UploadPaths="~/Images" />
</telerik:RadFileExplorer>
<script>
    function onClientItemSelected(fileExplorer, args) {
        if (args.get_item().get_type() == Telerik.Web.UI.FileExplorerItemType.File) {
            // if the item is a file        
            var file = "File path : " + args.get_item().get_path() + "\n";
            file = file + "File size : " + args.get_item().get_size();
            alert("Selected file: \n" + file);
        }
        else {
            // if the item is a folder        
            alert("The selected item is a directory");
        }
    }
</script>
````


## See Also

 * [RadFileExplorer Client-side Basics]({%slug fileexplorer/client-side-programming/overview%})

 * [RadFileExplorer Client-side Events Overview]({%slug fileexplorer/client-side-programming/events%})
