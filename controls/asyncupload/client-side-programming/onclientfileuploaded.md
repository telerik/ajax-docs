---
title: OnClientFileUploaded
page_title: OnClientFileUploaded | UI for ASP.NET AJAX Documentation
description: OnClientFileUploaded
slug: asyncupload/client-side-programming/onclientfileuploaded
tags: onclientfileuploaded
published: True
position: 8
---

# OnClientFileUploaded

## 

The __OnClientFileUploaded__ client-side event occurs after a file has been uploaded

The event handler receives two parameters:

1. The instance of the __RadAsyncUpload__ control firing the event.

1. An eventArgs parameter containing the following methods:

* __get_fileInfo__ returns fileInfo object containing information regarding the uploaded file. Essentially, this is the UploadedFileInfo object serialized from the HttpHandler

* __get_fileName__ returns the name of the file selected

* __get_row__ returns the upload row for which the event	was fired.

````ASPNET
<telerik:RadAsyncUpload runat="server" ID="RadAsyncUpload1" OnClientFileUploaded="OnClientFileUploaded"></telerik:RadAsyncUpload>
````

````JavaScript
function OnClientFileUploaded(sender, args) {
	var contentType = args.get_fileInfo().ContentType;
	alert(contentType);
}
````


