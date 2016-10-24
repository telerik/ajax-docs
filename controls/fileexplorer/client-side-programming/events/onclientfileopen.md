---
title: OnClientFileOpen
page_title: OnClientFileOpen | RadFileExplorer for ASP.NET AJAX Documentation
description: OnClientFileOpen
slug: fileexplorer/client-side-programming/events/onclientfileOpen
tags: onclientdelete
published: True
position: 7
---

# OnClientFileOpen

The client-side **FileOpen** event is raised when a file is opened in **RadFileExplorer**.

To handle this event, simply write a JavaScript function that can be called when the event occurs. Then assign the name of this function as the value of the **OnClientFileOpen** property of the control.

**Example 1** shows how to cancel the **FileOpen** event. This approach is useful in cases where you need to control the way **RadFileExplorer** handles files. In this case we are instructing **RadFileExplorer** to open JPEG images directly in the browser and not in **RadWindow**.

The client-side **OnClientFileOpen** event handler receives two arguments:

1. Sender: The [RadFileExplorer object](http://docs.telerik.com/devtools/aspnet-ajax/api/client/Telerik.Web.UI.RadFileExplorer) that fired the event.

1. Event arguments: An event arguments object of type Telerik.Web.UI.FileExplorerEventArgs that exposes the following methods:

	>caption Table 1: OnClientFileOpen Event Arguments Object

	|  **Name**  |  **Parameters**  |  **Return Type**  |  **Description**  |
	| ------ | ------ | ------ | ------ |
	|get_cancel()||Boolean|Returns a value that indicates whether the event is cancelled.|
	|get_item()||Object|Returns the file that will be opened.|
	|get_path()||String|Returns the path to the file that will be opened.|
	|set_cancel(value)|Boolean||Sets whether the event will be cancelled (if true is passed).|

>caption Example 1: Handle the **RadFileExplorer**'s client-side **FileOpen** event.

````ASP.NET
<telerik:RadFileExplorer ID="RadFileExplorer1" runat="server" OnClientFileOpen="onClientFileOpen">
    <Configuration ViewPaths="~/Images" DeletePaths="~/Images" UploadPaths="~/Images" />
</telerik:RadFileExplorer>
<script>
    function onClientFileOpen(fileExplorer, args) {
        var item = args.get_item();
        if (item && !item.isDirectory() && (item.get_extension() == "jpeg" || item.get_extension() == "jpg")) {
            //file is a a JPEG image, do not open a new window.          
            args.set_cancel(true);
            //tell browser to open file directly          
            window.location.href = item.get_url();
        }
    }
</script>
````


## See Also

 * [RadFileExplorer Client-side Basics]({%slug fileexplorer/client-side-programming/overview%})

 * [RadFileExplorer Client-side Events Overview]({%slug fileexplorer/client-side-programming/events%})
