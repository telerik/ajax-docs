---
title: RadAsyncUpload vs RadUpload
page_title: RadAsyncUpload vs RadUpload | UI for ASP.NET AJAX Documentation
description: RadAsyncUpload vs RadUpload
slug: asyncupload/radasyncupload-vs-radupload
tags: radasyncupload,vs,radupload
published: True
position: 1
---

# RadAsyncUpload vs RadUpload



## 

This help article describes the differences between __RadAsyncUpload__ and __RadUpload__ controls.


>caption  

| RadAsyncUpload | RadUpload for ASP.NET AJAX |
| ------ | ------ |
|Uploads the file(s) automatically and asynchronously to a temporary folder.The files will be copied to the TargetFolder on postback.|Uploads the files during postback.|
|Can be updated with __UpdatePanel__ / __RadAjaxPanel__ / __RadAjaxManager__ |Cannot be updated with __UpdatePanel__ / __RadAjaxPanel__ / __RadAjaxManager__ . Files cannot be uploaded during AJAX updates.|
|Requires registration of an HTTP handler - __Telerik.Web.UI.WebResource.axd__ The same handler is registered by __RadScriptManager__ / __RadStyleSheetManager__ |Does not require handler registration to upload files.|
|Progress monitoring is done in real time when the Flash module is in use. Otherwise progress polling is used (through __RadProgressManager__ ).|Progress monitoring through __RadProgressManager__ only.|
|Integrated visual clue of the current operations - uploading, upload successfully completed, upload failed.|Current operation can be monitored only through __RadProgressArea__ |
|Client side events for upload completed and upload failed|No client events for upload completed or failed|
|Extension and size validation are done on the client|You need a page postback to validate the file|
|Requires anonymous access to the __Telerik.Web.UI.WebResource.axd__ handler|Can upload files with disabled anonymous access|
| __ -Server Side- __ :New Event: __FileUploaded__ Removed Events: __Validating__ , __FileExists__ New Properties: __TemporaryFolder__ , __TemporaryFileExpiration__ Removed Properties: __InvalidFiles__ , __TargetPhysicalFolder__ , __ReadOnlyInputs__ ||
| __ -Client Side:- __ New Events: __OnClientFileUploading__ , __OnClientFileUploaded__ , __OnClientFileUploadFailed__ , __OnClientValidationFailed__ , __OnClientUploadProgress__ , __OnClientFileUploadRemoved__ , __OnClientFileUploadRemoving__ Removed Event: __OnClientClearing__ , __OnClientDeleting__ ||



# See Also

 * [Getting Started]({%slug asyncupload/getting-started%})

 * [Migrating from RadUpload for ASP.NET AJAX to RadAsyncUpload]({%slug asyncupload/migrating-from-radupload-for-asp.net-ajax-to-radasyncupload%})

 * [Online Demos](http://demos.telerik.com/aspnet-ajax/asyncupload/examples/overview/defaultcs.aspx)
