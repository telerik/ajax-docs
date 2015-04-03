---
title: OnClientFileUploaded
page_title: OnClientFileUploaded | UI for ASP.NET AJAX Documentation
description: OnClientFileUploaded
slug: cloudupload/client-side-programming/events/onclientfileuploaded
tags: onclientfileuploaded
published: True
position: 4
---

# OnClientFileUploaded



## 

The __OnClientFileUploaded__ client-side event occurs after a file has been uploaded to the Storage Provider.

The event handler receives two parameters:

1. The instance of the __RadCloudUpload__ control firing the event.

1. An __eventArgs__ parameter containing the following methods:

* __get_fileInfo__ returns fileInfo object containing information regarding the uploaded file. Essentially, this is the __UploadedFileInfo__ object serialized from the HttpHandler.

* __get_row__ returns the created row from the __FileListPanel__ section (<LI> element)

````ASPNET
	            <telerik:RadCloudUpload runat="server" ID="RadCloudUpload1" OnClientFileUploaded="onClientFileUploaded" ...>
	            </telerik:RadCloudUpload>
````



````JavaScript
	        function onClientFileUploaded(sender, eventArgs) {
	            var contentType = eventArgs.get_fileInfo().contentType;
	            alert(contentType);
	        }
````



>note From the __FileInfo__ object you could get important information about the uploaded file. The properties are listed bellow:
>
*  __contentLength__ - Returns the size of the uploaded file.
*  __contentType__ - Returns the content type of the uploaded file.
*  __keyName__ - Could be used to access the uploaded file on the Storage Provider.
*  __originalFileName__ - Returns the original name of the uploaded file.>

