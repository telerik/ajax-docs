---
title: Filter file selection in the upload dialog
description: Filter the files shown to the user in the upload dialog when uploading with RadAsyncUpload How to filter file selection in the upload dialog.
type: how-to
page_title: Filter file selection in the upload dialog
slug: asyncupload-how-to-filter-file-selection-in-the-upload-dialog
res_type: kb
---

## DESCRIPTION

Filter the files shown to the user when selecting a file to upload through RadAsyncUpload.

This allows the user to only see the files they can upload and you, as the developer, can limit that choice.

With current browsers (IE9 and above, Chrome, Firefox), RadAsyncUpload uses the HTML5 `FileAPI` to upload files.

Browsers can interpret the `accept` attribute of the `<input type="file"/>` in order to filter the files the end user can see through their MIME types.

## SOLUTION

You can define a set of MIME types that match the extensions you want to allow and **set** the **accept attribute** of the **file input** in the [OnClientAdded event]({%slug asyncupload/client-side-programming/onclientadded%}). Keep in mind that some file formats should be passed as extension, e.g. for a Comma Separated Excel file, you should add `.csv` in the `data-clientFilter` attribute.

- [https://stackoverflow.com/questions/11832930/html-input-file-accept-attribute-file-type-csv](https://stackoverflow.com/questions/11832930/html-input-file-accept-attribute-file-type-csv)

````ASP.NET
<telerik:RadAsyncUpload runat="server" ID="RadAsyncUpload1"
    AllowedFileExtensions="png,jpg,jpeg,mp4"
    data-clientFilter="image/png, image/jpeg, video/mp4"
    OnClientAdded="OnClientAdded"
    AutoAddFileInputs="true">
</telerik:RadAsyncUpload>
 
<script>
    function OnClientAdded(sender, args) {
        var allowedMimeTypes = $telerik.$(sender.get_element()).attr("data-clientFilter");
        $telerik.$(args.get_row()).find(".ruFileInput").attr("accept", allowedMimeTypes);
    }
</script>
````


