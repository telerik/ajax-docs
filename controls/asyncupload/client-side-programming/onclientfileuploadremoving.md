---
title: OnClientFileUploadRemoving
page_title: OnClientFileUploadRemoving | UI for ASP.NET AJAX Documentation
description: OnClientFileUploadRemoving
slug: asyncupload/client-side-programming/onclientfileuploadremoving
tags: onclientfileuploadremoving
published: True
position: 12
---

# OnClientFileUploadRemoving

## 

The __OnClientFileUploadRemoving__ occurs before a selected file is about to be removed from the uploaded files collection.The event can be cancelled

The event handler receives two parameters:

1. The instance of the __RadAsyncUpload__ control firing the event.

1. An eventArgs parameter containing the following methods:

* __set_cancel__ lets you prevent the row from being deleted.

* __get_cancel__ returns whether the removing has been cancelled.

* __get_fileName__ the name of the file that is about to be removed from the uploaded files collection.

* __get_row__ returns the row containing the file input field for the file that is just about to be removed (\<li\> element)

* __get_rowIndex__ the index of the row that is about to be removed from the uploaded files collection.

````ASPNET
<telerik:RadAsyncUpload runat="server" ID="RadAsyncUpload1" OnClientFileUploadRemoving="OnClientFileUploadRemoving"></telerik:RadAsyncUpload>
````

````JavaScript
function OnClientFileUploadRemoving(sender,args) {

	if (args.get_rowIndex()==0) {
		args.set_cancel(true);
	}
}
````


