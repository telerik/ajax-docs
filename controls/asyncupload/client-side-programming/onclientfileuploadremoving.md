---
title: OnClientFileUploadRemoving
page_title: OnClientFileUploadRemoving - RadAsyncUpload
description: Check our Web Forms article about OnClientFileUploadRemoving.
slug: asyncupload/client-side-programming/onclientfileuploadremoving
tags: onclientfileuploadremoving
published: True
position: 12
---

# OnClientFileUploadRemoving

## 

The **OnClientFileUploadRemoving** occurs before a selected file is about to be removed from the uploaded files collection.The event can be cancelled

The event handler receives two parameters:

1. The instance of the **RadAsyncUpload** control firing the event.

1. An eventArgs parameter containing the following methods:

* **set_cancel** lets you prevent the row from being deleted.

* **get_cancel** returns whether the removing has been cancelled.

* **get_fileName** the name of the file that is about to be removed from the uploaded files collection.

* **get_row** returns the row containing the file input field for the file that is just about to be removed (\<li\> element)

* **get_rowIndex** the index of the row that is about to be removed from the uploaded files collection.

````ASPNET
<telerik:RadAsyncUpload RenderMode="Lightweight" runat="server" ID="RadAsyncUpload1" OnClientFileUploadRemoving="OnClientFileUploadRemoving"></telerik:RadAsyncUpload>
````

````JavaScript
function OnClientFileUploadRemoving(sender,args) {

	if (args.get_rowIndex()==0) {
		args.set_cancel(true);
	}
}
````


