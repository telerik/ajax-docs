---
title: OnClientFileUploading
page_title: OnClientFileUploading | UI for ASP.NET AJAX Documentation
description: OnClientFileUploading
slug: cloudupload/client-side-programming/events/onclientfileuploading
tags: onclientfileuploading
published: True
position: 3
---

# OnClientFileUploading



## 

The __OnClientFileUploading__ occurs before the __RadCloudUpload__ starts to upload the specified file to the Cloud Storage Provider. This event can be cancelled.

The event handler receives two parameters:

1. The instance of the __RadCloudUpload__ control firing the event.

1. An __eventArgs__ parameter containing the following methods:

* __get_row__ returns the created row from the __FileListPanel__ section (<LI> element)

* __get_fileName__ returns the name of the file selected

* __set_cancel__ cancel the upload process

````ASPNET
	            <telerik:RadCloudUpload runat="server" ID="RadCloudUpload1" OnClientFileUploading="onClientFileUploading" ...>
	            </telerik:RadCloudUpload>
````



````JavaScript
	        function onClientFileUploading(sender, eventArgs) {
	            alert(eventArgs.get_fileName().length);
	            if (eventArgs.get_fileName().length > 20) {
	                eventArgs.set_cancel(true);
	            }
	            else {
	                eventArgs.set_cancel(false);
	            }
	        }
````


