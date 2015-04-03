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

The __OnClientValidationFailed__ client-side event occurs after a validation for selected file has failed either due to invalid file size or invalid extension.

The event handler receives two parameters:

1. The instance of the __RadCloudUpload__ control firing the event.

1. An __eventArgs__ parameter containing the following methods:

* __get_fileName__ returns the name of the file whose validation has failed.

* __get_message__returns the original message from the localization.

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


