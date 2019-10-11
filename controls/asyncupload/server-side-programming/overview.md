---
title: Overview
page_title: Server-Side Programming Overview | RadAsyncUpload for ASP.NET AJAX Documentation
description: Overview
slug: asyncupload/server-side-programming/overview
tags: overview
published: True
position: 0
---

# Server-Side Programming Overview


This article provides a list and detailed description of the properties and methods that you can use with the **RadAsyncUpload** control.

## Properties

| Name | Type | Description |
| ------ | ------ | ------ |
| **AccessKey** |string|Sets or returns a String that represents the shortcut key, also known as the accelerator key, for a specified object.|
| **AllowedFileExtensions** |string|Gets or sets the allowed file extensions for uploading.|
| **ChunkSize** |int|Gets or sets the size of the uploading chunks in bytes.|
| **DisableChunkUpload** |bool|Gets or sets whether the upload will be in chunks (2MB each) or the file will be uploaded with one request.|
| **DisablePlugins** |bool|Specify whether RadAsyncUpload will use 3rd party plugins like Flash/Silverlight or will stick to the native modules only (IFrame, File API).|
| **DropZones** |string|Gets or sets the drop zones for upload.|
| **Enabled** |bool|Enable or disable the **RadAsyncUpload** control.|
| **EnableEmbeddedBaseStylesheet** |bool|Gets or sets the value, indicating whether to render the link to the embedded base stylesheet of the control or not.|
| **EnableEmbeddedScripts** |bool|Gets or sets the value, indicating whether to render script references to the embedded scripts or not.|
| **EnableEmbeddedSkins** |bool|Gets or sets the value, indicating whether to render links to the embedded skins or not.|
| **EnableFileInputSkinning** |bool|Gets or sets the value indicating whether the file input fields skinning will be enabled.|
| **EnableInlineProgress** |bool|Specifies whether RadAsyncUpload displays an inline progress next to each file being uploaded.|
| **EnablePermissionsCheck** |bool|Specifies whether RadAsyncUpload performs check for write permissions upon load.|
| **HideFileInput** |bool|Gets or sets whether to render the file input.|
| **HttpHandlerUrl** |string|Specifies the URL of the custom upload HTTP Handler.|
| **InputSize** |int|Gets or sets the size of the file input field.|
| **IsSkinSet** |bool|For internal use.|
| **Localization** |AsyncUploadStrings|Gets the localization.|
| **LocalizationPath** |string|Gets or sets a string value indicating where **RadAsyncUpload** will look for its .resx localization files.|
| **ManualUpload** |bool|Gets or sets whether the upload will start automatically after the files are selected.|
| **MaxFileInputsCount** |int|Gets or sets the maximum file input fields that can be added to the control in single selection mode. MultipleFileSelection is not supported out of the box.|
| **MaxFileSize** |int|Gets or sets the maximum file size allowed for uploading in bytes.|
| **MultipleFileSelection** |AsyncUpload.MultipleFileSelection|Gets or sets a value indicating whether RadAsyncUpload allows selecting multiple files in the File Selection dialog.|
| **OnClientAdded** |string|Gets or sets the name of the client-side function which will be executed after a new fileinput is added to a RadUAsyncpload instance.|
| **OnClientFileDropped** |string|Gets or sets the name of the client-side function which will be executed after a file has been dropped.|
| **OnClientFileSelected** |string|Gets or sets the name of the client-side function which will be executed after a file has been selected.|
| **OnClientFilesSelected** |string|Gets or sets the name of the client-side function which will be executed after files have been selected.|
| **OnClientFilesUploaded** |string|Gets or sets the name of the client-side function which will be executed all selected files have been uploaded.|
| **OnClientFileUploaded** |string|Gets or sets the name of the client-side function which will be executed when a file upload finishes successfully.|
| **OnClientFileUploadFailed** |string|Gets or sets the name of the client-side function which will be executed when a file upload ends unsuccessfully.|
| **OnClientFileUploading** |string|Gets or sets the name of the client-side function which will be executed when a file upload starts.|
| **OnClientFileUploadRemoved** |string|Gets or sets the name of the client-side function which will be executed after a file input has been deleted from a RadAsyncUpload instance.|
| **OnClientFileUploadRemoving** |string|Gets or sets the name of the client-side function which will be executed before a file input is deleted from a RadAsyncUpload instance.|
| **OnClientProgressUpdating** |string|Gets or sets the name of the client-side function which will be executed on an in-line progress update.|
| **OnClientValidationFailed** |string|Gets or sets the name of the client-side function which will be executed if the selected file has invalid extension.|
| **PersistConfiguration** |bool|Gets or sets whether the upload configuration should be persisted into ControlState (if the upload configuration is different than null).|
| **PostbackTriggers** |string|Gets or sets whether the client state should be persisted (if the postback is triggered by particular control).|
| **ProgressHandlerUrl** |string|Gets or sets the URL which for the progress handler that takes care of the progress monitoring when the IFrame module is used.|
| **RegisterWithScriptManager** |bool|Whether to register with the ScriptManager control on the page.|
| **RenderMode** |RenderMode|Specifies the rendering mode of the control.|
| **Skin** |string|Specifies the skin that will be used by the control.|
| **TabIndex** |short|Gets or sets the tab order of the control within its container.|
| **TargetFolder** |string|Gets or sets the virtual path of the folder, where **RadAsyncUpload** will automatically save the valid files after the upload completes.|
| **TemporaryFileExpiration** |TimeSpan|Sets how long temporary files should be kept before automatically deleting them. The default value is 4 hours.|
| **TemporaryFolder** |string|Gets or sets the path to a folder where RadAsyncUpload should save files temporarily until a postback occurs. Defaults to App_Data\RadUploadTemp subfolder of the Application Path.|
| **UploadConfiguration** |IAsyncUploadConfiguration|Sets upload configuration. The generic object can be obtained using the `CreateUploadConfiguration<T>` method, where T is custom class that implements `IAsyncUploadConfiguration`. If you use this, see [Security - Custom Metadata]({%slug asyncupload-security%}#custom-metadata).|
| **UploadedFiles** |UploadedFileCollection|Provides access to the valid files uploaded by the RadAsyncUpload instance.|
| **UploadedFilesRendering** |AsyncUpload.UploadedFilesRendering|Gets or sets a value indicating whether RadAsyncUpload will render the uploaded files above/below the current file input.|
| **UseApplicationPoolImpersonation** |bool|Gets or sets whether the application pool impersonation should be used.|

>note The **LastModifiedDate** property was added to the AsyncUploadedFile class as of Q3 2012. The value is available only when we are uploading files with IE10, FireFox, Google Chrome and Safari browsers. In IE9 it is not available because it does not support **File API** while in Opera, **LastModifiedDate** is not available due to security reasons.
>

## Methods

| Name | Description |
| ------ | ------ |
| **CreateDefaultUploadConfiguration\<T\>** |Creates an object of type T (that implements IAsyncUploadConfiguration) and populates all properties specified in the interface from this RadAsyncUpload instance.|

## Properties of the UploadedFiles Collection

| Name | Type | Description |
| ------ | ------ | ------ |
| **ContentLength** |int|Gets the size in bytes of an uploaded file.|
| **ContentType** |string|Gets the MIME content type of a file sent by a client.|
| **FileName** |string|Gets the fully-qualified name of the file on the client's computer (for example "C:\MyFiles\Test.txt").|
| **InputStream** |System.IO.Stream|Gets a Stream object which points to the uploaded file to prepare for reading the contents of the file. The property is available only in RadAsyncUpload control when FileApi module is used.|
| **LastModifiedDate** |DateTime|Gets the last modified date of the uploaded file. The property is available only in RadAsyncUpload control when FileApi module is used.|

## Methods of the UploadedFiles Collection 

| Name | Description |
| ------ | ------ |
| **GetExtension** |Returns the extension of the file on the client's computer.|
| **GetFieldValue** |Returns the value of a custom field.|
| **GetIsFieldChecked** |Returns the checked state of a custom field.|
| **GetName** |Returns the name and extension of the file on the client's computer.|
| **GetNameWithoutExtension** |Returns the name of the file on the client's computer without the extension.|
| **SaveAs** |Saves the contents of an uploaded file.|

# See Also

 * [Getting Started]({%slug asyncupload/getting-started%})

 * [Uploaded Files Position]({%slug asyncupload/functionality/uploaded-files-position%})

 * [Server-Side Events]({%slug asyncupload/server-side-programming/events%})
