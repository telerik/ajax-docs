---
title: Ensuring OnFileUploaded Event Fires Automatically in RadAsyncUpload
description: Learn how to ensure the OnFileUploaded event in RadAsyncUpload triggers automatically after file upload without requiring additional postbacks.
type: how-to
page_title: Fixing RadAsyncUpload OnFileUploaded Event Not Triggering Automatically
meta_title: Fixing RadAsyncUpload OnFileUploaded Event Not Triggering Automatically
slug: asyncupload-onfileuploaded-event
tags: asyncupload, ui for asp.net ajax, onfileuploaded, ajax, postback
res_type: kb
ticketid: 1714854
---

## Environment

<table>
<tbody>
<tr>
<td>Product</td>
<td>AsyncUpload for UI for ASP.NET AJAX</td>
</tr>
<tr>
<td>Version</td>
<td>all</td>
</tr>
</tbody>
</table>

## Description

The server-side `OnFileUploaded` event of the [RadAsyncUpload](https://docs.telerik.com/devtools/aspnet-ajax/controls/asyncupload/overview) component fires only during a postback. If you want this event to trigger automatically once a file is uploaded — without requiring additional actions like a button click — you need to initiate the postback programmatically using the client-side `OnClientFilesUploaded` event. 

Incorrect or incomplete AJAX settings, as well as certain configurations in `Page_Load`, can also prevent this event from firing as expected.

This knowledge base article also answers the following questions:
- How can I trigger the OnFileUploaded event without a button click?
- Why does the OnFileUploaded event not fire in RadAsyncUpload after a file upload?
- How do I configure RadAsyncUpload to refresh a grid after file upload?

## Solution

### Step 1: Correct Unsupported Configurations
Ensure that your `RadAsyncUpload` configuration is valid:
- **Remove conflicts between `MultipleFileSelection` and `MaxFileInputsCount`:**
  - Use `MultipleFileSelection="Automatic"` and omit `MaxFileInputsCount`, or
  - Use `MaxFileInputsCount` and set `MultipleFileSelection` to `"Single"` or `"Disabled"`.

### Step 2: Trigger Postback from `OnClientFilesUploaded`
To trigger the postback programmatically after all files finish uploading:
1. Add the `OnClientFilesUploaded` event to your `RadAsyncUpload` component.
2. Use the `__doPostBack` method to initiate the postback from the client-side.

```html
<telerik:RadAsyncUpload runat="server" ID="AsyncUpload1"
    RenderMode="Lightweight"
    MultipleFileSelection="Automatic"
    ChunkSize="1048576"
    HideFileInput="true"
    MaxFileSize="104857600"
    AllowedFileExtensions=".jpeg,.jpg,.png,.doc,.docx,.xls,.xlsx,.pdf,.xml,.eps,.pptx,.ppt"
    EnableAjax="true"
    TargetFolder="~/Files"
    OnClientFilesUploaded="OnClientFilesUploaded"
    OnFileUploaded="AsyncUpload1_FileUploaded" />

<script>
function OnClientFilesUploaded(sender, args) {
    __doPostBack(sender.get_uniqueID(), "");
}
</script>
```

### Step 3: Add AJAX Settings in `Page_Load`
Ensure that the AJAX settings are added on every request in your `Page_Load` handler. This ensures that the postback triggered via `__doPostBack` is handled correctly as a partial update.

```vb
Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs) Handles Me.Load
    Try
        EnsureUploadFoldersExist()
    Catch ex As Exception
        PLog.Log(IDBType.IDBLog.ErrorLog, If(Session.SessionID, "NoSession"), _
                 "Upload folder creation error", ex.Message & " - " & ex.StackTrace)
    End Try

    ' Register AsyncUpload1 with RadAjaxManager
    Dim ajaxManager As RadAjaxManager = RadAjaxManager.GetCurrent(Page)
    If ajaxManager IsNot Nothing Then
        ajaxManager.AjaxSettings.AddAjaxSetting(AsyncUpload1, RGridAttachment)
        ajaxManager.AjaxSettings.AddAjaxSetting(AsyncUpload1, RGridClipboard)
    End If
End Sub
```

### Step 4: Refresh the Grid in `OnFileUploaded`
In the server-side `OnFileUploaded` handler, rebind the grid to display the newly uploaded files.

```vb
Protected Sub AsyncUpload1_FileUploaded(sender As Object, e As FileUploadedEventArgs)
    ' RadAsyncUpload automatically saves e.File to TargetFolder.
    ' Just refresh the grid here to show the new file.
    RGridAttachment.Rebind()
End Sub
```

### Additional Notes
- Use `OnClientFilesUploaded` (plural) instead of `OnClientFileUploaded` to trigger a single postback after all files are uploaded.
- Avoid manually saving the uploaded file inside `OnFileUploaded` if `TargetFolder` is already set, as the file is automatically moved there.
- Correct markup errors such as duplicate attributes or unsupported configurations.

## See Also
- [RadAsyncUpload Documentation](https://docs.telerik.com/devtools/aspnet-ajax/controls/asyncupload/overview)
- [RadAjaxManager Documentation](https://docs.telerik.com/devtools/aspnet-ajax/controls/ajaxmanager/overview)
- [RadAsyncUpload Client-Side Events](https://docs.telerik.com/devtools/aspnet-ajax/controls/asyncupload/client-side-programming/events)
- [RadAsyncUpload Server-Side Events](https://docs.telerik.com/devtools/aspnet-ajax/controls/asyncupload/server-side-programming/events)
```
