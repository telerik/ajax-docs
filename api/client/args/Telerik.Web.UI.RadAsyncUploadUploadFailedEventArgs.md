---
title: Telerik.Web.UI.RadAsyncUploadUploadFailedEventArgs
description: Telerik.Web.UI.RadAsyncUploadUploadFailedEventArgs
slug: Telerik.Web.UI.RadAsyncUploadUploadFailedEventArgs
---

# Telerik.Web.UI.RadAsyncUploadUploadFailedEventArgs 

## Inheritance Hierarchy

* *[Telerik.Web.UI.RadAsyncUploadUploadFailedEventArgs]({%slug Telerik.Web.UI.RadAsyncUploadUploadFailedEventArgs%})*


## Methods

### set_handled 

Allows you to suppress the error message that would be thrown.

#### Parameters

##### value `Boolean`

Sets a boolean value that indicates whether the message will be suppressed.

#### Returns

`None`

### get_handled 

Returns whether the error message should be suppressed. The default is true.

#### Parameters

#### Returns

`Boolean`

### get_message 

Returns the original error message.

#### Parameters

#### Returns

`String` error message with the HTTP status code.

### get_loadedModuleName 

Returns the name of the currently loaded module. Can be Silverlight/Flash/IFrame.

#### Parameters

#### Returns

`String` the name of the currently loaded module.

### get_row 

Returns the upload row for which the event was fired.

#### Parameters

#### Returns

`Element` <LI> element containing the file input for the selected file.

