---
title: Chunk Upload
page_title: Chunk Upload - RadAsyncUpload
description: Check our Web Forms article about Chunk Upload.
slug: asyncupload/functionality/chunk-upload
tags: chunk,upload
published: True
position: 1
---

# Chunk Upload



## Chunk Size

The **ChunkSize** property was added in **Q1 2013**. You can set it to the desired size of bytes, Telerik recommends that you set this value to be more that 3000 because when it is less than 3000, the uploading progress may not work correctly.

## Disable Chunk Upload

The **DisableChunkUpload** property is available as of **Q3 2012**. By setting the **DisableChunkUpload** property to **true** the **RadAsyncUpload** can upload files in one chunk. This functionality is useful in custom handler scenarios.

For example, when a custom handler is used and the **Process** method is overridden the uploading file is not saved to the Temporary folder until the the base method of the **Process** method is called. This allows users to save files directly into a database without saving them on the server.

>note When setting the **DisableChunkUpload="true"** property the **Silverlight** and **Flash modules** are automatically disabled. This will turn off the multiple file selection in the appropriate browsers.
>

>note The **DisableChunkUpload** property of **RadAsyncUpload** influences the way files are being saved in the temporary folder on server. In case the property is not set or it is set to "false", temporary files are named under the convention **timestamp + actual file name + actual file extension**. In case the property is set to "true", files receive **random strings** for both their name and extension.
>


## See Also

[Getting Started]({%slug asyncupload/getting-started%})

[Disable Plugins]({%slug asyncupload/functionality/disable-plugins%})

[Drag and Drop Upload]({%slug asyncupload/functionality/drag-and-drop-upload%})
