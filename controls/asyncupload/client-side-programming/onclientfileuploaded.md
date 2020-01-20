---
title: OnClientFileUploaded
page_title: OnClientFileUploaded | RadAsyncUpload for ASP.NET AJAX Documentation
description: OnClientFileUploaded
slug: asyncupload/client-side-programming/onclientfileuploaded
tags: onclientfileuploaded
published: True
position: 8
---

# OnClientFileUploaded

## 

The **OnClientFileUploaded** client-side event occurs after a file has been uploaded

The event handler receives two parameters:

1. The instance of the **RadAsyncUpload** control firing the event.

1. An eventArgs parameter containing the following methods:

* **get_fileInfo** returns fileInfo object containing information regarding the uploaded file. Essentially, this is the UploadedFileInfo object serialized from the HttpHandler

* **get_fileName** returns the name of the file selected

* **get_row** returns the upload row for which the event was fired.

````ASPNET
<telerik:RadAsyncUpload RenderMode="Lightweight" runat="server" ID="RadAsyncUpload1" OnClientFileUploaded="OnClientFileUploaded"></telerik:RadAsyncUpload>
````

````JavaScript
function OnClientFileUploaded(sender, args) {
	var contentType = args.get_fileInfo().ContentType;
	var filename = args.get_fileName();
	var currentRowElement = args.get_row();
	alert(contentType);
}
````


