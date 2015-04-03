---
title: OnClientFileUploadRemoved
page_title: OnClientFileUploadRemoved | UI for ASP.NET AJAX Documentation
description: OnClientFileUploadRemoved
slug: cloudupload/client-side-programming/events/onclientfileuploadremoved
tags: onclientfileuploadremoved
published: True
position: 8
---

# OnClientFileUploadRemoved



## 

The __OnClienFileUploadRemoved__ occurs after the selected file has been removed from the __FileListPanel__.

The event handler receives two parameters:

1. The instance of the __RadCloudUpload__ control firing the event.

1. An __eventArgs__ parameter containing the following methods:

* __get_fileName__ The name of the file that has been removed from the uploaded files collection.

````ASPNET
	        <telerik:RadCloudUpload runat="server" ID="RadCloudUpload1" OnClientFileUploadRemoved="OnClientFileUploadRemoved" ...></telerik:RadCloudUpload>
````



````JavaScript
	        function onClientFileUploadRemoved(sender, eventArgs) {
	            var fileName = eventArgs.get_fileName();
	            alert("File " + fileName + " has just been removed!");
	        }
````


