---
title: RadCloudUpload Object
page_title: RadCloudUpload Object | UI for ASP.NET AJAX Documentation
description: RadCloudUpload Object
slug: cloudupload/client-side-programming/radcloudupload-object
tags: radcloudupload,object
published: True
position: 1
---

# RadCloudUpload Object



## 

The following table lists the important **RadCloudUpload** client-side methods:


>caption  

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| **get_localization** |none|Localization Object|Accessing the Localization, you could easily find the predefined localization settings.(see ex.1)|
| **set_enabled** |none|boolean|Sets the Enabled state of the RadCloudUpload.(see ex.2)|
| **get_uploadedFiles** |none|Array|Returns an array of the successfully uploaded files.(see ex.3)|

Example 1

````JavaScript
function getLocalizationInfo() {
	var cloudUpload = $find("<%= RadCloudUpload1.ClientID %>"),
		localization = cloudUpload.get_localization();
	alert("SelectButtonText is \"" +
			localization.SelectButtonText + "\" and SizeValidationFailedMessage is \"" +
			localization.SizeValidationFailedMessage + "\"");
}
````



Example 2

````JavaScript
function manageEnabledState(value) {
	var cloudUpload = $find("<%= RadCloudUpload1.ClientID %>");
	cloudUpload.set_enabled(value);
}
````



Example 3

````JavaScript
function getUploadedFilesCount() {
	var cloudUpload = $find("<%= RadCloudUpload1.ClientID %>"),
		uploadedFiles = cloudUpload.get_uploadedFiles(),
		uploadedFilesCount = uploadedFiles.length;
	alert("Uploaded Files count is " + uploadedFilesCount);
}
````


