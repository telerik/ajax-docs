---
title: OnClientFileSelected
page_title: OnClientFileSelected | UI for ASP.NET AJAX Documentation
description: OnClientFileSelected
slug: cloudupload/client-side-programming/events/onclientfileselected
tags: onclientfileselected
published: True
position: 2
---

# OnClientFileSelected



## 

The __OnClientFileSelected__ client-side event occurs when certain file has just been selected.

The event handler receives two parameters:

1. The instance of the __RadCloudUpload__ control firing the event.

1. An __eventArgs__ parameter containing the following methods:

* __get_row__ returns the created row from the FileListPanel section (<LI> element)

* __get_fileName__ returns the name of the file selected

````ASPNET
	            <telerik:RadCloudUpload runat="server" ID="RadCloudUpload1" OnClientFileSelected="onClientFilesSelected" ...>
	            </telerik:RadCloudUpload>
````



````JavaScript
	        function onClientFilesSelected(sender, eventArgs) {
	            var fileName = eventArgs.get_fileName();
	            alert(fileName)
	        }
````


