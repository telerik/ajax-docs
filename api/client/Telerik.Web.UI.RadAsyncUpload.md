---
title: Telerik.Web.UI.RadAsyncUpload
page_title: Client-side API Reference
description: Client-side API Reference
slug: Telerik.Web.UI.RadAsyncUpload
---

# Telerik.Web.UI.RadAsyncUpload : Telerik.Web.UI.RadWebControl

## Inheritance Hierarchy

* [Telerik.Web.UI.RadWebControl]({%slug Telerik.Web.UI.RadWebControl%})
* *[Telerik.Web.UI.RadAsyncUpload]({%slug Telerik.Web.UI.RadAsyncUpload%})*

## Methods

### get_multipleFileSelectionEnabled

#### Parameters

#### Returns

`None` 

### get_dropZones

#### Parameters

#### Returns

`None` 

### get_initialFileInputsCount

RadAsyncUpload

#### Parameters

#### Returns

`Object` 

### get_element

RadAsyncUpload

#### Parameters

#### Returns

`Element` 

### get_loadedModuleName

#### Parameters

#### Returns

`None` 

### set_maxFileCount

RadAsyncUpload

#### Parameters

##### integer `Object`

#### Returns

`Object` 

### pauseUpload

When FileAPI module is used the method pauses the upload. Keep in mind that it stops right after the uploading chunk is uploaded.

#### Parameters

#### Returns

`None` 

### get_fileFilter

#### Parameters

#### Returns

`None` 

### saveClientState

Saves the client state to the client state hidden field.

#### Parameters

#### Returns

`None` 

### resumeUpload

When FileAPI module is used the method resumes the upload when its paused.

#### Parameters

#### Returns

`None` 

### deleteAllFileInputs

Deletes all file inputs.

#### Parameters

#### Returns

`None` 

### set_enabled

Sets a boolean value indicating whether the RadAsyncUpload is enabled.

#### Parameters

##### enable `Boolean`

enable

#### Returns

`None` 

### getID

RadAsyncUpload

#### Parameters

##### string `Object`

#### Returns

`Object` 

### get_handlerUrl

#### Parameters

#### Returns

`None` 

### set_dropZones

#### Parameters

#### Returns

`None` 

### isExtensionValid

Gets a value indicating whether the file extension is valid.

#### Parameters

#### Returns

`Boolean` True if the file extension is valid

### getUploadedFiles

#### Parameters

#### Returns

`None` 

### set_allowedFileExtensions

#### Parameters

#### Returns

`None` 

### get_allowedFileExtensions

#### Parameters

#### Returns

`None` 

### deleteFileInputAt

Deletes the file input at the the specified index

#### Parameters

##### index `Number`

The index to delete at

##### skipEvent `Boolean`

Specifies whether the onRowDeleting event should be skipped or not

#### Returns

`None` 

### getInvalidFiles

#### Parameters

#### Returns

`None` 

### addFileInput

Adds a new row to the RadAsyncUpload control.

#### Parameters

#### Returns

`None` 

### startUpload

Starts the upload when ManualUplaod is set and files are selected.

#### Parameters

#### Returns

`None` 

### get_enabled

Gets a value indicating whether the RadAsyncUpload is enabled.

#### Parameters

#### Returns

`Boolean` True if the RadAsyncUpload is enabled

### get_maxFileCount

RadAsyncUpload

#### Parameters

#### Returns

`Object` 

## Events

### added

The added event occurs when a new row has just been added to the RadAsyncUpload control.

#### Event Data

##### sender `Telerik.Web.UI.RadAsyncUpload`

The instance of the RadAsyncUpload raised the event.

##### args `Telerik.Web.UI.RadAsyncUploadClientAddedEventArgs`

The event arguments.  

### fileDropped

The fileDropped client-side event occurs when file(s) are dropped on some of the drop zones of RadAsyncUpload or on the control itself. If more then one file is dropped the event is fired for each one of them. 

#### Event Data

##### sender `Telerik.Web.UI.RadAsyncUpload`

The instance of the RadAsyncUpload raised the event.

##### args `Telerik.Web.UI.RadAsyncUploadFileDroppedEventArgs`

The event arguments.  

### fileSelected

The fileSelected client-side event occurs when a file is selected in a file input control.

##### sender `Telerik.Web.UI.RadAsyncUpload`

The instance of the RadAsyncUpload raised the event.

##### args `Telerik.Web.UI.RadAsyncUploadFileSelectedEventArgs`

The event arguments.  

### filesSelected

The filesSelected client-side event occurs when files(s) are selected. These event can be cancelled, which will erase the selected files collection.

##### sender `Telerik.Web.UI.RadAsyncUpload`

The instance of the RadAsyncUpload raised the event.

##### args `Telerik.Web.UI.RadAsyncUploadFilesSelectedEventArgs`

The event arguments.  

### fileUploading

The fileUploading client-side event occurs when a file has started uploading. 

##### sender `Telerik.Web.UI.RadAsyncUpload`

The instance of the RadAsyncUpload raised the event.

##### args `Telerik.Web.UI.RadAsyncUploadFileUploadingEventArgs`

The event arguments.  

### fileUploaded

The fileUploaded client-side event occurs after a file has been uploaded.

##### sender `Telerik.Web.UI.RadAsyncUpload`

The instance of the RadAsyncUpload raised the event.

##### args `Telerik.Web.UI.RadAsyncUploadFileUploadedEventArgs`

The event arguments.  

### fileUploadRemoving

The fileUploadRemoving occurs before a selected file is about to be removed from the uploaded files collection. The event can be cancelled.

##### sender `Telerik.Web.UI.RadAsyncUpload`

The instance of the RadAsyncUpload raised the event.

##### args `Telerik.Web.UI.RadAsyncUploadFileUploadRemovingEventArgs`

The event arguments.  

### fileUploadRemoved

The fileUploadRemoved occurs after the selected file has been removed from the uploaded files collection.

##### sender `Telerik.Web.UI.RadAsyncUpload`

The instance of the RadAsyncUpload raised the event.

##### args `Telerik.Web.UI.RadAsyncUploadFileUploadRemovedEventArgs`

The event arguments.
### progressUpdating

The progressUpdating occurs each time the inline progress indicator is being updated.

##### sender `Telerik.Web.UI.RadAsyncUpload`

The instance of the RadAsyncUpload raised the event.

##### args `Telerik.Web.UI.RadAsyncUploadProgressUpdatingEventArgs`

The event arguments.

### fileUploadFailed

The fileUploadFailed client-side event occurs when error uploading the selected files(s) has occured. Common reason for this event firing is Telerik.Web.UI.WebResource.axd handler not being registered in the web.config. Another reason might be server-side error in custom upload handler is being used. 

##### sender `Telerik.Web.UI.RadAsyncUpload`

The instance of the RadAsyncUpload raised the event.

##### args `Telerik.Web.UI.RadAsyncUploadUploadFailedEventArgs`

The event arguments.

### validationFailed

The validationFailed client-side event occurs after a validation for selected file has failed either due to invalid file size or invalid extension.

##### sender `Telerik.Web.UI.RadAsyncUpload`

The instance of the RadAsyncUpload raised the event.

##### args `Telerik.Web.UI.RadAsyncUploadValidationFailedEventArgs`

The event arguments.