---
title: Displaying PDF Preview on File Selection with RadAsyncUpload
description: Learn how to display a PDF preview in a SlidingPanel when using RadAsyncUpload in UI for ASP.NET AJAX, immediately after file selection.
type: how-to
page_title: How to Show PDF Preview After File Selection in UI for ASP.NET AJAX
meta_title: Show PDF Preview After File Selection in RadAsyncUpload
slug: asyncupload-display-pdf-preview-file-selection
tags: asyncupload, slidingpanel, pdf, preview, file-selected, ui-for-aspnet-ajax
res_type: kb
ticketid: 1701830
---

## Environment
<table>
<tbody>
<tr>
<td>Product</td>
<td>AsyncUpload for ASP.NET AJAX</td>
</tr>
<tr>
<td>Version</td>
<td>All</td>
</tr>
</tbody>
</table>

## Description

I need to display a PDF preview immediately after selecting a file in [RadAsyncUpload](https://www.telerik.com/products/aspnet-ajax/documentation/controls/asyncupload/overview). The PDF content must be shown before the file upload event is triggered, and other instructions are executed during the upload process.

This knowledge base article also answers the following questions:

- How to show a PDF preview when selecting a file in RadAsyncUpload?
- How to use FileReader API with RadAsyncUpload for PDF preview?

## Solution

To display a PDF preview immediately after file selection in RadAsyncUpload, use the `FileReader` API in combination with the `OnClientFileSelected` event. RadAsyncUpload does not provide built-in PDF preview functionality before upload, but this method allows you to achieve the desired behavior.

1. Configure RadAsyncUpload with the `OnClientFileSelected` event.
2. Override the private `_onFileSelected` function to access the file object in the client-side event.
3. Use the `FileReader` API to read the selected PDF file.
4. Display the PDF content in an `<iframe>` for preview.

````ASP.NET
<telerik:RadAsyncUpload runat="server" ID="RadAsyncUpload1" OnClientFileSelected="previewPdfOnSelect" />
<telerik:RadSlidingPane ID="PaneAnteprima" runat="server" Title="Anteprima File" DockOnOpen="True">
    <iframe id="pdfPreview" style="width: 100%; height: 600px;"></iframe>
</telerik:RadSlidingPane>
````

````JavaScript
// Override to make the file accessible in OnClientFileSelected event
Telerik.Web.UI.RadAsyncUpload.prototype._onFileSelected = function (row, fileInput, fileName, shouldAddNewInput, file) {
    let args = {
        row: row,
        fileInputField: fileInput,
        file: file
    };

    args.rowIndex = $(row).index();
    args.fileName = fileName;
    this._selectedFilesCount++;

    shouldAddNewInput = shouldAddNewInput && (this.get_maxFileCount() === 0 || this._selectedFilesCount < this.get_maxFileCount());
    this._marshalUpload(row, fileName, shouldAddNewInput);
    let labels = $("label", row);

    if (labels.length > 0) labels.remove();

    $.raiseControlEvent(this, "fileSelected", args);
};

function previewPdfOnSelect(sender, args) {
    let file = args.get_file();

    if (file?.type === "application/pdf") {
        let reader = new FileReader();

        reader.onload = function (e) {
            document.getElementById("pdfPreview").src = e.target.result;
        };

        reader.readAsDataURL(file);
    }
}
````

This solution ensures that the PDF content is displayed immediately after file selection without triggering the upload event.

## See Also

- [RadAsyncUpload Overview](https://www.telerik.com/products/aspnet-ajax/documentation/controls/asyncupload/overview)
- [Preview Uploaded Image with RadAsyncUpload](https://www.telerik.com/products/aspnet-ajax/documentation/knowledge-base/asyncupload-preview-uploaded-image#preview-uploaded-image-with-radasyncupload)
- [Access Selected File in OnClientFileSelected Event of AsyncUpload](https://www.telerik.com/products/aspnet-ajax/documentation/knowledge-base/asyncupload-access-selected-file-in-the-arguments-of-onclientfileselected-event#access-selected-file-in-the-arguments-of-onclientfileselected-event-of-asyncupload)
---
