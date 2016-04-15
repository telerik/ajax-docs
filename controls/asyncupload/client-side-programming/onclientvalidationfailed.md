---
title: OnClientValidationFailed
page_title: OnClientValidationFailed | RadAsyncUpload for ASP.NET AJAX Documentation
description: OnClientValidationFailed
slug: asyncupload/client-side-programming/onclientvalidationfailed
tags: onclientvalidationfailed
published: True
position: 10
---

# OnClientValidationFailed

## 

The **OnClientValidationFailed** client-side event occurs after a validation for selected file has failed either due to invalid file size or invalid extension

The event handler receives two parameters:

1. The instance of the **RadAsyncUpload** control firing the event.

1. An eventArgs parameter containing the following methods:

* **get_fileName** returns the name of the file whose validation has failed

* **get_row** returns the upload row for which the event was fired.

One useful case that can be applied in this event is getting information if the validation is triggered by the size of the file or by its extension:

````ASPNET
<telerik:RadAsyncUpload RenderMode="Lightweight" runat="server" ID="RadAsyncUpload1" OnClientValidationFailed="OnClientValidationFailed"></telerik:RadAsyncUpload>
````

````JavaScript
function OnClientValidationFailed(sender, args) {
	var fileExtention = args.get_fileName().substring(args.get_fileName().lastIndexOf('.') + 1, args.get_fileName().length);
	if (args.get_fileName().lastIndexOf('.')!=-1) {//this checks if the extension is correct
		if (sender.get_allowedFileExtensions().indexOf(fileExtention)==-1) {
			alert("Wrong Extension!");
		}
		else {
			alert("Wrong file size!");
		}
	}
	else {
		alert("not correct extension!");
	}
}
````


