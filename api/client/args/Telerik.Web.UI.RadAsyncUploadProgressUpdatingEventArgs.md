---
title: Telerik.Web.UI.RadAsyncUploadProgressUpdatingEventArgs
page_title: Client-side API Reference
description: Client-side API Reference
---

# Telerik.Web.UI.RadAsyncUploadProgressUpdatingEventArgs

## Methods

### get_row

Returns the row containing the file input field for the file that was just selected (<LI> element)

#### Parameters

#### Returns

`Element` <LI> element containing the file input for the selected file.

### get_data

Returns data object containing information regarding the progress. The data object contains the following properties:
- percent - returns the percentage of the uploaded file.
- fileSize - returns the file size in bytes.
- fileName - returns the name of the uploading file.
- uploadedBytes - returns the number of uploaded bytes.

#### Parameters

#### Returns

`Object` data object containing information regarding the progress.