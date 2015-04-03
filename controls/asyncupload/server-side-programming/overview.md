---
title: Server-Side Programming Overview
page_title: Overview | UI for ASP.NET AJAX Documentation
description: Overview
slug: asyncupload/server-side-programming/overview
tags: overview
published: True
position: 0
---

# Server-Side Programming Overview



This article provides a list and detailed description of the properties and methods that you can use with the __RadAsyncUpload__control.

## Properties

The __LastModifiedDate__ property was added to the AsyncUploadedFile class as of Q3 2012. The value is available only when we are uploading files with IE10, FireFox, Google Chrome and Safari browsers. In IE9 it is not available because it does not support __File API__ while in Opera, __LastModifiedDate__ is not available due to security reasons.


>caption  

| Name | Type | Description |
| ------ | ------ | ------ |
| __AccessKey__ |string|Sets or returns a String that represents the shortcut key, also known as the accelerator key, for a specified object.|
| __AllowedFileExtensions__ |string|Gets or sets the allowed file extensions for uploading.|
| __ChunkSize__ |int|Gets or sets the size of the uploading chunks in bytes.|
| __DisableChunkUpload__ |bool|Gets or sets whether the upload will be in chunks (2MB each) or the file will be uploaded with one request.|
| __DisablePlugins__ |bool|Specify whether RadAsyncUpload will use 3rd party plugins like Flash/Silverlight or will stick to the native modules only (IFrame, File API).|
| __DropZones__ |string|Gets or sets the drop zones for upload.|
| __Enabled__ |bool|Enable or disable the __RadAsyncUpload__ control.|
| __EnableEmbeddedBaseStylesheet__ |bool|Gets or sets the value, indicating whether to render the link to the embedded base stylesheet of the control or not.|
| __EnableEmbeddedScripts__ |bool|Gets or sets the value, indicating whether to render script references to the embedded scripts or not.|
| __EnableEmbeddedSkins__ |bool|Gets or sets the value, indicating whether to render links to the embedded skins or not.|
| __EnableFileInputSkinning__ |bool|Gets or sets the value indicating whether the file input fields skinning will be enabled.|
| __EnableInlineProgress__ |bool|Specifies whether RadAsyncUpload displays an inline progress next to each file being uploaded.|
| __EnablePermissionsCheck__ |bool|Specifies whether RadAsyncUpload performs check for write permissions upon load.|
| __HideFileInput__ |bool|Gets or sets whether to render the file input.|
| __HttpHandlerUrl__ |string|Specifies the URL of the custom upload HTTP Handler.|
| __InputSize__ |int|Gets or sets the size of the file input field.|
| __IsSkinSet__ |bool|For internal use.|
| __Localization__ |AsyncUploadStrings|Gets the localization.|
| __LocalizationPath__ |string|Gets or sets a string value indicating where __RadAsyncUpload__ will look for its .resx localization files.|
| __ManualUpload__ |bool|Gets or sets whether the upload will start automatically after the files are selected.|
| __MaxFileInputsCount__ |int|Gets or sets the maximum file input fields that can be added to the control in single selection mode. MultipleFileSelection is not supported out of the box.|
| __MaxFileSize__ |int|Gets or sets the maximum file size allowed for uploading in bytes.|
| __MultipleFileSelection__ |AsyncUpload.MultipleFileSelection|Gets or sets a value indicating whether RadAsyncUpload allows selecting multiple files in the File Selection dialog.|
| __OnClientAdded__ |string|Gets or sets the name of the client-side function which will be executed after a new fileinput is added to a RadUAsyncpload instance.|
| __OnClientFileDropped__ |string|Gets or sets the name of the client-side function which will be executed after a file has been dropped.|
| __OnClientFileSelected__ |string|Gets or sets the name of the client-side function which will be executed after a file has been selected.|
| __OnClientFilesSelected__ |string|Gets or sets the name of the client-side function which will be executed after files have been selected.|
| __OnClientFilesUploaded__ |string|Gets or sets the name of the client-side function which will be executed all selected files have been uploaded.|
| __OnClientFileUploaded__ |string|Gets or sets the name of the client-side function which will be executed when a file upload finishes successfully.|
| __OnClientFileUploadFailed__ |string|Gets or sets the name of the client-side function which will be executed when a file upload ends unsuccessfully.|
| __OnClientFileUploading__ |string|Gets or sets the name of the client-side function which will be executed when a file upload starts.|
| __OnClientFileUploadRemoved__ |string|Gets or sets the name of the client-side function which will be executed after a file input has been deleted from a RadAsyncUpload instance.|
| __OnClientFileUploadRemoving__ |string|Gets or sets the name of the client-side function which will be executed before a file input is deleted from a RadAsyncUpload instance.|
| __OnClientProgressUpdating__ |string|Gets or sets the name of the client-side function which will be executed on an in-line progress update.|
| __OnClientValidationFailed__ |string|Gets or sets the name of the client-side function which will be executed if the selected file has invalid extension.|
| __PersistConfiguration__ |bool|Gets or sets whether the upload configuration should be persisted into ControlState (if the upload configuration is different than null).|
| __PostbackTriggers__ |string|Gets or sets whether the client state should be persisted (if the postback is triggered by particular control).|
| __ProgressHandlerUrl__ |string|Gets or sets the URL which for the progress handler that takes care of the progress monitoring when the IFrame module is used.|
| __RegisterWithScriptManager__ |bool|Whether to register with the ScriptManager control on the page.|
| __RenderMode__ |RenderMode|Specifies the rendering mode of the control.|
| __Skin__ |string|Specifies the skin that will be used by the control.|
| __TabIndex__ |short|Gets or sets the tab order of the control within its container.|
| __TargetFolder__ |string|Gets or sets the virtual path of the folder, where __RadAsyncUpload__ will automatically save the valid files after the upload completes.|
| __TemporaryFileExpiration__ |TimeSpan|Sets how long temporary files should be kept before automatically deleting them. The default value is 4 hours.|
| __TemporaryFolder__ |string|Gets or sets the path to a folder where RadAsyncUpload should save files temporarily until a postback occurs. Defaults to App_Data\RadUploadTemp subfolder of the Application Path.|
| __UploadConfiguration__ |IAsyncUploadConfiguration|Sets upload configuration. The generic object can be obtained using the CreateUploadConfiguration<T> method, where T is custom class that implements IAsyncUploadConfiguration.|
| __UploadedFiles__ |UploadedFileCollection|Provides access to the valid files uploaded by the RadAsyncUpload instance.|
| __UploadedFilesRendering__ |AsyncUpload.UploadedFilesRendering|Gets or sets a value indicating whether RadAsyncUpload will render the uploaded files above/below the current file input.|
| __UseApplicationPoolImpersonation__ |bool|Gets or sets whether the application pool impersonation should be used.|

## Methods


>caption  

| Name | Description |
| ------ | ------ |
| __CreateDefaultUploadConfiguration<T>__ |Creates an object of type T (that implements IAsyncUploadConfiguration) and populates all properties specified in the interface from this RadAsyncUpload instance.|

## Properties of the UploadedFiles Collection


>caption  

| Name | Type | Description |
| ------ | ------ | ------ |
| __ContentLength__ |int|Gets the size in bytes of an uploaded file.|
| __ContentType__ |string|Gets the MIME content type of a file sent by a client.|
| __FileName__ |string|Gets the fully-qualified name of the file on the client's computer (for example "C:\MyFiles\Test.txt").|
| __InputStream__ |System.IO.Stream|Gets a Stream object which points to the uploaded file to prepare for reading the contents of the file. The property is available only in RadAsyncUpload control when FileApi module is used.|
| __LastModifiedDate__ |DateTime|Gets the last modified date of the uploaded file. The property is available only in RadAsyncUpload control when FileApi module is used.|

## Methods of the UploadedFiles Collection


>caption  

| Name | Description |
| ------ | ------ |
| __GetExtension__ |Returns the extension of the file on the client's computer.|
| __GetFieldValue__ |Returns the value of a custom field.|
| __GetIsFieldChecked__ |Returns the checked state of a custom field.|
| __GetName__ |Returns the name and extension of the file on the client's computer.|
| __GetNameWithoutExtension__ |Returns the name of the file on the client's computer without the extension.|
| __SaveAs__ |Saves the contents of an uploaded file.|

# See Also

 * [Getting Started]({%slug asyncupload/getting-started%})

 * [Uploaded Files Position]({%slug asyncupload/functionality/uploaded-files-position%})

 * [Server-Side Events]({%slug asyncupload/server-side-programming/events%})
