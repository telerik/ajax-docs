---
title: OnClientFileUploading
page_title: OnClientFileUploading - RadAsyncUpload
description: Check our Web Forms article about OnClientFileUploading.
slug: asyncupload/client-side-programming/onclientfileuploading
tags: onclientfileuploading
published: True
position: 7
---

# OnClientFileUploading

## 

The **OnClientFileUploading** client-side event occurs when a file has starteduploading.

The event handler receives two parameters:

1. The instance of the **RadAsyncUpload** control firing the event.

1. An eventArgs parameter containing the following methods:

* **get_row** returns the row containing the file input field for the file that was just selected (\<li\> element)

* **get_fileName** returns the name of the file selected

* **set_cancel** cancel the upload process

````ASPNET
<telerik:RadAsyncUpload RenderMode="Lightweight" runat="server" ID="RadAsyncUpload1" OnClientFileUploading="OnClientFileUploading"></telerik:RadAsyncUpload>
````

````JavaScript
function OnClientFileUploading(sender, args) {
	alert(args.get_fileName().length);
	if (args.get_fileName().length > 20) {
		args.set_cancel(true);
	}
	else {
		args.set_cancel(false);
	}
}
````


