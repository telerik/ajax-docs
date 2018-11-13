---
title: OnClientFileUploaded
page_title: OnClientFileUploaded | RadCloudUpload for ASP.NET AJAX Documentation
description: OnClientFileUploaded
slug: cloudupload/client-side-programming/events/onclientfileuploaded
tags: onclientfileuploaded
published: True
position: 4
---

# OnClientFileUploaded



## 

The **OnClientFileUploaded** client-side event occurs after a file has been uploaded to the Storage Provider.

The event handler receives two parameters:

1. The instance of the **RadCloudUpload** control firing the event.

1. An **eventArgs** parameter containing the following methods:

* **get_fileInfo** returns fileInfo object containing information regarding the uploaded file. Essentially, this is the **UploadedFileInfo** object serialized from the HttpHandler.

* **get_row** returns the created row from the **FileListPanel** section (`<LI>` element)

````ASP.NET
<telerik:RadCloudUpload runat="server" ID="RadCloudUpload1" OnClientFileUploaded="onClientFileUploaded" ...>
</telerik:RadCloudUpload>
````



````JavaScript
function onClientFileUploaded(sender, eventArgs) {
	var contentType = eventArgs.get_fileInfo().contentType;
	alert(contentType);
}
````



>note From the **FileInfo** object you could get important information about the uploaded file. The properties are listed bellow:
*  **contentLength** - Returns the size of the uploaded file.
*  **contentType** - Returns the content type of the uploaded file.
*  **keyName** - Could be used to access the uploaded file on the Storage Provider.
*  **originalFileName** - Returns the original name of the uploaded file.
>

