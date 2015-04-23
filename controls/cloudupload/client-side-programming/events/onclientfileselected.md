---
title: OnClientFileSelected
page_title: OnClientFileSelected | RadCloudUpload for ASP.NET AJAX Documentation
description: OnClientFileSelected
slug: cloudupload/client-side-programming/events/onclientfileselected
tags: onclientfileselected
published: True
position: 2
---

# OnClientFileSelected



## 

The **OnClientFileSelected** client-side event occurs when certain file has just been selected.

The event handler receives two parameters:

1. The instance of the **RadCloudUpload** control firing the event.

1. An **eventArgs** parameter containing the following methods:

* **get_row** returns the created row from the FileListPanel section (`<LI>` element)

* **get_fileName** returns the name of the file selected

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


