---
title: Forcing a client validation when renaming a folder
description: Learn how to check whether the folder name contains a space at the end when renaming it via the File Explorer - Telerik UI for ASP.NET AJAX
type: troubleshooting
page_title: Forcing a client validation when renaming a folder
slug: fileexplorer-force-client-validation-on-rename
position: 
tags: 
ticketid: 1574550
res_type: kb
---

## Environment
<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>RadFileExplorer for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>


## Description
Learn how to check whether the folder name contains a space at the end when renaming it via the File Explorer and cancel the event if a space exists. You can further improve and customize the validation mechanism for more complex scenarios.

## Solution
You can use the following client-side validation that fires and cancels the Folder Rename event if the folder contains a space at the end:

````ASP.NET
    <telerik:RadFileExplorer OnClientMove="onClientMove" ID="rfeDocuments" runat="server" RenderMode="Classic">
        <Configuration ViewPaths="~/documents" DeletePaths="~/documents" UploadPaths="~/documents" />
    </telerik:RadFileExplorer>
    <script>
        function onClientMove(fileExplorer, args) {
            var isRename = args.get_newPath().search("/") < 0;

            if (isRename && args.get_newPath().endsWith(' ')) {
                alert("The file name could not contain a space at the end! Rename operation aborted.");
                args.set_cancel(true);
            }
        }
    </script>
````

You can find more information for the [OnClientMode]({%slug fileexplorer/client-side-programming/events/onclientmove%}) event in the documentation.

 