---
title: Disabling Drag-Drop in ASP.NET RadFileExplorer with AsyncUpload and Custom Fields
description: Learn how to disable the drag-drop functionality in ASP.NET RadFileExplorer while using AsyncUpload and custom fields to prevent errors.
type: how-to
page_title: Prevent Drag-Drop Upload in ASP.NET RadFileExplorer with AsyncUpload Enabled
meta_title: Prevent Drag-Drop Upload in ASP.NET RadFileExplorer with AsyncUpload Enabled
slug: disable-drag-drop-radfileexplorer-asyncupload
tags: asp.net, fileexplorer, asyncupload, drag-drop, onclientfilesdropping, javascript
res_type: kb
ticketid: 1710042
---

## Environment

<table>
<tbody>
<tr>
<td> Product </td>
<td> UI for ASP.NET AJAX FileExplorer </td>
</tr>
<tr>
<td> Version </td>
<td> All</td>
</tr>
</tbody>
</table>

## Description

I want to prevent users from dragging and dropping files into ASP.NET RadFileExplorer when AsyncUpload is activated. This causes JavaScript validation errors for required custom fields and results in an unresponsive spinner. I need a way to disable the drag-drop functionality while keeping AsyncUpload active and ensuring proper validation for custom fields.

This knowledge base article also answers the following questions:
- How to disable drag-drop upload in RadFileExplorer with AsyncUpload?
- How to prevent JavaScript validation errors in RadFileExplorer uploads?
- How to stop unwanted drag-drop file uploads in ASP.NET RadFileExplorer?

## Solution

To disable the drag-drop functionality in ASP.NET RadFileExplorer while keeping AsyncUpload active, use the `OnClientFilesDropping` event. Cancel the event to prevent files from being uploaded via drag-drop. Add the following JavaScript code:

````JavaScript
function onClientFilesDropping(sender, args) {
    args.set_cancel(true);        
}
````

This approach ensures users can only upload files via the "Upload" button while maintaining validation for required custom fields.

## See Also

- [RadFileExplorer Client-Side Programming: OnClientFilesDropping Event](https://www.telerik.com/products/aspnet-ajax/documentation/controls/fileexplorer/client-side-programming/events/onclientfilesdropping#onclientfilesdropping)
- [RadFileExplorer Overview](https://www.telerik.com/products/aspnet-ajax/documentation/controls/fileexplorer/overview)
- [AsyncUpload Overview](https://www.telerik.com/products/aspnet-ajax/documentation/controls/asyncupload/overview)
