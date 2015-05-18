---
title: OnClientFileUploading
page_title: OnClientFileUploading | RadCloudUpload for ASP.NET AJAX Documentation
description: OnClientFileUploading
slug: cloudupload/client-side-programming/events/onclientfileuploading
tags: onclientfileuploading
published: True
position: 3
---

# OnClientFileUploading



## 

The **OnClientFileUploading** occurs before the **RadCloudUpload** starts to upload the specified file to the Cloud Storage Provider. This event can be cancelled.

The event handler receives two parameters:

1. The instance of the **RadCloudUpload** control firing the event.

1. An **eventArgs** parameter containing the following methods:

* **get_row** returns the created row from the **FileListPanel** section (`<LI>` element)

* **get_fileName** returns the name of the file selected

* **set_cancel** cancel the upload process

````ASP.NET
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


