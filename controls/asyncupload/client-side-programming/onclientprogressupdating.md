---
title: OnClientProgressUpdating
page_title: OnClientProgressUpdating | RadAsyncUpload for ASP.NET AJAX Documentation
description: OnClientProgressUpdating
slug: asyncupload/client-side-programming/onclientprogressupdating
tags: onclientprogressupdating
published: True
position: 14
---

# OnClientProgressUpdating

## 

The **OnClientProgressUpdating** occurs each time the inline progress indicator is being updated.

>note This event is not fired when the **RadAsyncUpload** uses the IFrame module, for example in IE9 if the control's **DisablePlugins** property is set to **true** the **RadAsyncUpload** will default to using IFrame module, since IE9 does not support File API.  
>

The event handler receives two parameters:

1. The instance of the **RadAsyncUpload** control firing the event.

1. An eventArgs parameter containing the following method:

* **get_row** - returns the row whose update indicator has been updated

* **get_data** - returns data object containing information regarding the progress. The data object contains the following properties:

* percent- returns the percentage of the uploaded file.

* fileSize - returns the file size in bytes.

* fileName - returns the name of the uploading file.

* uploadedBytes - returns the number of uploaded bytes.

````ASPNET
<telerik:RadAsyncUpload RenderMode="Lightweight" runat="server" ID="RadAsyncUpload1" OnClientProgressUpdating="onClientFileUploading" MultipleFileSelection="Automatic"></telerik:RadAsyncUpload>
````

````JavaScript
<script type="text/javascript">
	function onClientFileUploading(sender, args) {
		var data = args.get_data();
		var percents = data.percent;
		var fileSize = data.fileSize;
		var fileName = data.fileName;
		var uploadedBytes = data.uploadedBytes;
		alert("Uploading information: File name: "	+ fileName + ",	" + percents + "% completed,
		total size: " + fileSize + " , uploaded: bytes " + uploadedBytes + "." );
	}
</script>
````




