---
title: OnClientFileUploadRemoving
page_title: OnClientFileUploadRemoving | RadCloudUpload for ASP.NET AJAX Documentation
description: OnClientFileUploadRemoving
slug: cloudupload/client-side-programming/events/onclientfileuploadremoving
tags: onclientfileuploadremoving
published: True
position: 7
---

# OnClientFileUploadRemoving



## 

The **OnClientFileUploadRemoving** occurs before the file is about to be removed from the **FileListPanel**. The event can be cancelled.

The event handler receives two parameters:

1. The instance of the **RadCloudUpload** control firing the event.

1. An **eventArgs** parameter containing the following methods:

* **set_cancel** lets you prevent the row from being deleted.

* **get_fileName** the name of the file that is about to be removed from the uploaded files collection.

* **get_row** returns the row containing the file input field for the file that is just about to be removed (`<LI>` element)

* **get_isFailed** returns a boolean value, specifying if the file, which is about to be removed had passed the validation.

````ASP.NET
<telerik:RadCloudUpload runat="server" ID="RadCloudUpload1" OnClientFileUploadRemoving="onClientFileUploadRemoving" ...>
</telerik:RadCloudUpload>
````



````JavaScript
function onClientFileUploadRemoving(sender, eventArgs) {
	if (eventArgs.get_fileName().length > "10") {
		alert("Cannot delete files, which name's length is larger then 10 symbols");
		eventArgs.set_cancel(true);
	}

}
````


