---
title: OnClientFilesSelecting
page_title: OnClientFilesSelecting | UI for ASP.NET AJAX Documentation
description: OnClientFilesSelecting
slug: cloudupload/client-side-programming/events/onclientfilesselecting
tags: onclientfilesselecting
published: True
position: 1
---

# OnClientFilesSelecting



## 

The __OnClientFilesSelecting__ occurs when the files are just about to be processed.

The event handler receives two parameters:

1. The instance of the __RadCloudUpload__ control firing the event.

1. An __eventArgs__ parameter containing the following methods:

* __get_count__ returns the count of the selected files.

* __set_cancel__ lets you cancel the event and prevent items from being uploaded

````ASPNET
	            <telerik:RadCloudUpload runat="server" ID="RadCloudUpload1" OnClientFilesSelecting="onClientFilesSelecting" MultipleFileSelection="Automatic" ...>
	            </telerik:RadCloudUpload>
````



````JavaScript
	            function onClientFilesSelecting(sender, eventArgs) {
	                eventArgs.set_cancel(true);
	            }
````


