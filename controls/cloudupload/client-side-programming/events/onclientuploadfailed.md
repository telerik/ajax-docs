---
title: OnClientUploadFailed
page_title: OnClientUploadFailed | UI for ASP.NET AJAX Documentation
description: OnClientUploadFailed
slug: cloudupload/client-side-programming/events/onclientuploadfailed
tags: onclientuploadfailed
published: True
position: 6
---

# OnClientUploadFailed



## 

The __OnClientFileUploadFailed__ client-side event occurs when an error has occured, while uploading the selected file. Common reason for this event to be fired is when a file upload has failed due to a server-side error.

The event handler receives two parameters:

1. The instance of the __RadCloudUpload__ control firing the event.

1. An __eventArgs__ parameter containing the following method:

* __get_message__ returns the original error message.

One useful case for using this event is to check the error message.

````ASPNET
	            <telerik:RadCloudUpload runat="server" ID="RadCloudUpload1" OnClientUploadFailed="onClientUploadFailed">
	            </telerik:RadCloudUpload>
````



````JavaScript
	        function onClientUploadFailed(sender, eventArgs) {
	            alert(eventArgs.get_message())
	        }
````


