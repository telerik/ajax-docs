---
title: OnClientValidationFailed
page_title: OnClientValidationFailed | UI for ASP.NET AJAX Documentation
description: OnClientValidationFailed
slug: cloudupload/client-side-programming/events/onclientvalidationfailed
tags: onclientvalidationfailed
published: True
position: 9
---

# OnClientValidationFailed



## 

The **OnClientValidationFailed** client-side event occurs after a validation for selected file has failed either due to invalid file size or invalid extension.

The event handler receives two parameters:

1. The instance of the **RadCloudUpload** control firing the event.

1. An **eventArgs** parameter containing the following methods:

* **get_fileName** returns the name of the file whose validation has failed.

* **get_message** returns the original message from the localization.

You could raise an alert, showing the user the validation error message from the control's localization.

````ASPNET
<telerik:RadCloudUpload runat="server" ID="RadCloudUpload1" OnClientValidationFailed="onClientValidationFailed" AllowedFileExtensions=".xslt" ...>
</telerik:RadCloudUpload>
````



````JavaScript
function onClientValidationFailed(sender, eventArgs) {
	alert(eventArgs.get_message())
}
````


