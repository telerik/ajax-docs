---
title: File Filtering
page_title: File Filtering - RadAsyncUpload
description: Check our Web Forms article about File Filtering.
slug: asyncupload/functionality/file-filtering
tags: file,filtering
published: True
position: 3
---


# RadAsyncUpload File Filtering

As of **2026 Q1 SP2**, the legacy **IFrame**, **Silverlight** and **Flash** modules have been removed from the source code. This change improves the compatibility with modern browsers and hardens the security of the RadAsyncUpload control. As a result, the `FileFilters` property is no longer functional and should not be used.

To set file filtering on modern browsers, use the **accept** attribute of the **input type="file"** element. For example, this will allow most images:

````JavaScript
function pageLoad() {
    $telerik.$('.ruFileInput').attr('accept', 'image/*');
}
````

You can find a more detailed example in the [How to filter file selection in the upload dialog](https://www.telerik.com/support/kb/aspnet-ajax/upload-(async)/details/how-to-filter-file-selection-in-the-upload-dialog) article.

# See Also

 * [How to filter file selection in the upload dialog](https://www.telerik.com/support/kb/aspnet-ajax/upload-(async)/details/how-to-filter-file-selection-in-the-upload-dialog)

 * [RadAsyncUpload Validation Demo](https://demos.telerik.com/aspnet-ajax/upload/examples/async/validation/defaultcs.aspx?product=asyncupload)
 
 * [RadAsyncUpload Upload Modules]({%slug asyncupload/upload-modules%})
 
