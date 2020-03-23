---
title: Telerik.Web.UI.RadAsyncUploadProgressUpdatingEventArgs
title_prefix: Client-side API Reference
description: Telerik.Web.UI.RadAsyncUploadProgressUpdatingEventArgs
slug: Telerik.Web.UI.RadAsyncUploadProgressUpdatingEventArgs
---

# Telerik.Web.UI.RadAsyncUploadProgressUpdatingEventArgs

## Inheritance Hierarchy

* *[Telerik.Web.UI.RadAsyncUploadProgressUpdatingEventArgs]({%slug Telerik.Web.UI.RadAsyncUploadProgressUpdatingEventArgs%})*


## Methods

### get_data

Returns data object containing information regarding the progress. The data object contains the following properties:
- percent - returns the percentage of the uploaded file.
- fileSize - returns the file size in bytes.
- fileName - returns the name of the uploading file.
- uploadedBytes - returns the number of uploaded bytes.

#### Parameters

#### Returns

`Object` data object containing information regarding the progress.
### get_row

Returns the row containing the file input field for the file that was just selected (<LI> element)

#### Parameters

#### Returns

`Element` <LI> element containing the file input for the selected file.


