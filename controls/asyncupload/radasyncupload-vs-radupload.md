---
title: RadAsyncUpload vs RadUpload
page_title: RadAsyncUpload vs RadUpload | RadAsyncUpload for ASP.NET AJAX Documentation
description: RadAsyncUpload vs RadUpload
slug: asyncupload/radasyncupload-vs-radupload
tags: radasyncupload,vs,radupload
published: True
position: 1
---

# RadAsyncUpload vs RadUpload

## 

This help article describes the differences between **RadAsyncUpload** and **RadUpload** controls.

>caption  

| RadAsyncUpload | RadUpload for ASP.NET AJAX |
| ------ | ------ |
|Uploads the file(s) automatically and asynchronously to a temporary folder.The files will be copied to the TargetFolder on postback.|Uploads the files during postback.|
|Can be updated with **UpdatePanel** / **RadAjaxPanel** / **RadAjaxManager** |Cannot be updated with **UpdatePanel** / **RadAjaxPanel** / **RadAjaxManager** . Files cannot be uploaded during AJAX updates.|
|Requires registration of an HTTP handler - **Telerik.Web.UI.WebResource.axd** The same handler is registered by **RadScriptManager** / **RadStyleSheetManager** |Does not require handler registration to upload files.|
|Progress monitoring is done in real time when the Flash module is in use. Otherwise progress polling is used (through **RadProgressManager** ).|Progress monitoring through **RadProgressManager** only.|
|Integrated visual clue of the current operations - uploading, upload successfully completed, upload failed.|Current operation can be monitored only through **RadProgressArea** |
|Client side events for upload completed and upload failed|No client events for upload completed or failed|
|Extension and size validation are done on the client|You need a page postback to validate the file|
|Requires anonymous access to the **Telerik.Web.UI.WebResource.axd** handler|Can upload files with disabled anonymous access|
| **SERVER SIDE:** <br> :New Event: **FileUploaded** <br> Removed Events: **Validating** , **FileExists** <br> New Properties: **TemporaryFolder** , **TemporaryFileExpiration** <br> Removed Properties: **InvalidFiles** , **TargetPhysicalFolder** , **ReadOnlyInputs** ||
| **CLIENT SIDE:** <br> New Events: **OnClientFileUploading** , **OnClientFileUploaded** , **OnClientFileUploadFailed** , **OnClientValidationFailed** , **OnClientUploadProgress** , **OnClientFileUploadRemoved** , **OnClientFileUploadRemoving** <br> Removed Event: **OnClientClearing** , **OnClientDeleting** ||

# See Also

 * [Getting Started]({%slug asyncupload/getting-started%})

 * [Migrating from RadUpload for ASP.NET AJAX to RadAsyncUpload]({%slug asyncupload/migrating-from-radupload-for-asp.net-ajax-to-radasyncupload%})

 * [Online Demos](http://demos.telerik.com/aspnet-ajax/asyncupload/examples/overview/defaultcs.aspx)
