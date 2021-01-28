---
title: OnClientFilesDropping
page_title: OnClientFilesDropping - RadFileExplorer
description: Check our Web Forms article about OnClientFilesDropping.
slug: fileexplorer/client-side-programming/events/onclientfilesdropping
tags: onclientfilesdropping
published: True
position: 8
---

# OnClientFilesDropping

The client-side **FilesDropping** event is raised when the user drops the files for uploading in the file list of **RadFileExplorer**.

To handle this event, simply write a JavaScript function that can be called when the event occurs. Then assign the name of this function as the value of the **OnClientFilesDropping** property of the control.

The client-side **OnClientFilesDropping** event handler receives two arguments:

1. Sender: The [RadFileExplorer object](https://docs.telerik.com/devtools/aspnet-ajax/api/client/Telerik.Web.UI.RadFileExplorer) that fired the event.

1. Event arguments: A cancelable event arguments object of type Sys.CancelEventArgs that exposes the following methods:

	>caption Table 1: OnClientFilesDropping Event Arguments Object

	|  **Name**  |  **Parameters**  |  **Return Type**  |  **Description**  |
	| ------ | ------ | ------ | ------ |
	|get_cancel()||Boolean|Returns a value that indicates whether the event is cancelled.|
	|get_count()||Integer|Returns the count of the dropped items.|
	|get_dropArgs()||Object|Returns the drop arguments of the underlying RadAsyncUpload control.|
	|set_cancel(value)|Boolean||Sets whether the event will be cancelled (if true is passed).|

>caption Example 1: Handle the **RadFileExplorer**'s client-side **FilesDropping** event.

````ASP.NET
<telerik:RadFileExplorer ID="RadFileExplorer1" runat="server"  OnClientFilesDropping="onClientFilesDropping">
    <Configuration ViewPaths="~/Images" DeletePaths="~/Images" UploadPaths="~/Images" />
</telerik:RadFileExplorer>
<script>
    function onClientFilesDropping(fileExplorer, args) {
        var filesCount = args.get_count();
        alert("You have are about to upload " + filesCount + " files.");
    }
````


## See Also

 * [RadFileExplorer Client-side Basics]({%slug fileexplorer/client-side-programming/overview%})

 * [RadFileExplorer Client-side Events Overview]({%slug fileexplorer/client-side-programming/events%})
