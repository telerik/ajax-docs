---
title: Alerting When Selected File Exceeds MaxFileSize in RadAsyncUpload
description: Learn how to alert users when selected files exceed the configured MaxFileSize in RadAsyncUpload for UI for ASP.NET AJAX.
type: how-to
page_title: Alert on File Size Limit Exceeded in RadAsyncUpload
meta_title: Alert on File Size Limit Exceeded in RadAsyncUpload
slug: asyncupload-alert-on-file-size-limit
tags: asyncupload, ui for asp.net ajax, onclientfilesselected, maxfilesize, file size validation
res_type: kb
ticketid: 1715702
---

## Environment
<table>
<tbody>
<tr>
<td> Product </td>
<td> AsyncUpload for UI for ASP.NET AJAX </td>
</tr>
<tr>
<td> Version </td>
<td>All</td>
</tr>
</tbody>
</table>

## Description

I want to alert users when they select files that exceed the configured `MaxFileSize` during the `OnClientFilesSelected` event in [RadAsyncUpload](https://docs.telerik.com/devtools/aspnet-ajax/controls/asyncupload/overview). This should support multiple file selection and show a message for each file that exceeds the size limit.

This knowledge base article also answers the following questions:
- How to validate file size during OnClientFilesSelected event in RadAsyncUpload?
- How to show an alert for files exceeding the maximum size in RadAsyncUpload?
- How to enforce MaxFileSize validation in RadAsyncUpload using JavaScript?

## Solution

To alert users when a selected file exceeds the `MaxFileSize` during the `OnClientFilesSelected` event, you can get a reference to all the selected files, iterate them and check for their file size:

````JavaScript
function OnClientFilesSelected(sender, args) {
    let maxFileSize = 1048576; // Set maximum file size in bytes (1MB in this case)
    let files = sender._fileInput.files; // Get the selected files

    for (let i = 0; i < files.length; i++) {
        let file = files[i];
        let size = file?.size; // Get the file size

        if (file && size > maxFileSize) {
            alert("The selected file '" + file.name + "' exceeds the maximum allowed size of " + (maxFileSize / 1048576) + " MB.");
            args.set_cancel(true); // Cancel the file selection
        }
    }
}
````

This implementation ensures that users receive an alert message whenever they select files that exceed the specified size limit.

## See Also

- [RadAsyncUpload Overview](https://docs.telerik.com/devtools/aspnet-ajax/controls/asyncupload/overview)
- [Client-Side Events - RadAsyncUpload](https://docs.telerik.com/devtools/aspnet-ajax/controls/asyncupload/client-side-programming/events)
- [MaxFileSize Property](https://docs.telerik.com/devtools/aspnet-ajax/controls/asyncupload/server-side-programming/overview#maxfilesize)
