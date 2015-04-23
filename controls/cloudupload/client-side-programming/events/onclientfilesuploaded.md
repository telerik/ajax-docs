---
title: OnClientFilesUploaded
page_title: OnClientFilesUploaded | RadCloudUpload for ASP.NET AJAX Documentation
description: OnClientFilesUploaded
slug: cloudupload/client-side-programming/events/onclientfilesuploaded
tags: onclientfilesuploaded
published: True
position: 5
---

# OnClientFilesUploaded



## 

The **OnClientFilesUploaded** client-side event occurs when the files has finished uploading to the Cloud Storage Provider.

The event handler receives one parameter

1. The instance of the **RadCloudUpload** control firing the event.

````ASPNET
<telerik:RadCloudUpload runat="server" ID="RadCloudUpload1" OnClientFilesUploaded="onClientFilesUploaded" MultipleFileSelection="Automatic" ...></telerik:RadCloudUpload>
````



````JavaScript
function onClientFilesUploaded(sender, eventArgs) {
	var processFiles = confirm("All files were correctly uploaded. Do you want to process them to the Cloud Storage?");
	if (processFiles)
		**doPostBack();
}
````


