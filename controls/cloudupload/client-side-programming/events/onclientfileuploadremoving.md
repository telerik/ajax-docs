---
title: OnClientFileUploadRemoving
page_title: OnClientFileUploadRemoving | UI for ASP.NET AJAX Documentation
description: OnClientFileUploadRemoving
slug: cloudupload/client-side-programming/events/onclientfileuploadremoving
tags: onclientfileuploadremoving
published: True
position: 7
---

# OnClientFileUploadRemoving



## 

The __OnClientFileUploadRemoving__ occurs before the file is about to be removed from the __FileListPanel__. The event can be cancelled.

The event handler receives two parameters:

1. The instance of the __RadCloudUpload__ control firing the event.

1. An __eventArgs__ parameter containing the following methods:

* __set_cancel__ lets you prevent the row from being deleted.

* __get_fileName__ the name of the file that is about to be removed from the uploaded files collection.

* __get_row__ returns the row containing the file input field for the file that is just about to be removed (<LI> element)

* __get_isFailed__ returns a boolean value, specifying if the file, which is about to be removed had passed the validation.

````ASPNET
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


