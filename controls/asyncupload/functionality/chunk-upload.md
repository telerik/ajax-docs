---
title: Chunk Upload
page_title: Chunk Upload | RadAsyncUpload for ASP.NET AJAX Documentation
description: Chunk Upload
slug: asyncupload/functionality/chunk-upload
tags: chunk,upload
published: True
position: 1
---

# Chunk Upload



## Chunk Size

The **ChunkSize** property was added in Q1 2013. You can set it to the desired size of bytes, Telerik recommends that you set this value to be more that 3000 because when it is less than 3000, the uploading progress may not work correctly.

## Disable Chunk Upload

The **DisableChunkUpload** property is available as of Q3 2012. By setting the **DisableChunkUpload** property to **true** the **RadAsyncUpload** can upload files in one chunk. This functionality is useful in custom handler scenarios.

For example, when a custom handler is used andthe **Process** method is overridden the uploading file is not saved to the Temporary folder until the the base method of the **Process** method is called. This allows users to save files directly into a database without saving them on the server.

>note When setting the DisableChunkUpload="true" property the Silverlight and Flash modules are automatically disabled. This will turn off the multiple file selection in the appropriate browsers.
>


## See Also

[Getting Started]({%slug asyncupload/getting-started%})

[Disable Plugins]({%slug asyncupload/functionality/disable-plugins%})

[Drag and Drop Upload]({%slug asyncupload/functionality/drag-and-drop-upload%})
