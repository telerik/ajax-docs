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

The **OnClienFileUploadRemoved** occurs after the selected file has been removed from the **FileListPanel**.

The event handler receives two parameters:

1. The instance of the **RadCloudUpload** control firing the event.

1. An **eventArgs** parameter containing the following methods:

* **get_fileName** The name of the file that has been removed from the uploaded files collection.

````ASPNET
<telerik:RadCloudUpload runat="server" ID="RadCloudUpload1" OnClientFileUploadRemoved="OnClientFileUploadRemoved" ...></telerik:RadCloudUpload>
````



````JavaScript
function onClientFileUploadRemoved(sender, eventArgs) {
	var fileName = eventArgs.get_fileName();
	alert("File " + fileName + " has just been removed!");
}
````


