---
title: OnClientFileUploading
page_title: OnClientFileUploading | UI for ASP.NET AJAX Documentation
description: OnClientFileUploading
slug: asyncupload/client-side-programming/onclientfileuploading
tags: onclientfileuploading
published: True
position: 7
---

# OnClientFileUploading



## 

The __OnClientFileUploading__ client-side event occurs when a file has starteduploading.

The event handler receives two parameters:

1. The instance of the __RadAsyncUpload__ control firing the event.

1. An eventArgs parameter containing the following methods:

* __get_row__ returns the row containing the file input field for the file that was just selected (<LI> element)

* __get_fileName__ returns the name of the file selected

* __set_cancel__ cancel the upload process

````ASPNET
	            <telerik:RadAsyncUpload runat="server" ID="RadAsyncUpload1" OnClientFileUploading="OnClientFileUploading"></telerik:RadAsyncUpload>
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


