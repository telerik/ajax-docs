---
title: Upload Modules
page_title: Upload Modules | UI for ASP.NET AJAX Documentation
description: Upload Modules
slug: cloudupload/upload-modules
tags: upload,modules
published: True
position: 10
---

# Upload Modules



## HTML5 File API Module

**File API Module** is the preferred one. It is supported by all modern browsers such as IE10+, FireFox (3.6+), Chrome, Safari (5+), Opera, Safari for MAC. This module offers the richest functionality. When **File API Module** is used, **RadCloudUpload** can use the full functionally providedby the different Cloud Storage Providers. Files are uploaded on chunks in Azure Blob Storage and Amazon S3.

## IFrame Module

**IFrame Module** is used to ensure compatibility for the older browsers, which don’t support HTML5 File API. Such browsers are IE9 or below. When **IFrame Module** files are uploaded at once chunks are not supported.

## 


>caption Upload Module Support

| Upload Module | Browser Support |
| ------ | ------ |
| **File API** |FireFox (3.6+), Chrome, Safari (5+), Opera, Safari for MAC, IE (10+)|
| **IFrame** |IE (7, 8, 9)|


>caption Chunks Support

| Cloud Storage Provider | File API Module | IFrame Module |
| ------ | ------ | ------ |
| **Telerik Backend Services (formerly Everlive)** |Chunks are disabled. File is submitted with a form.|Chunks are disabled. File is submitted with a form.|
| **Azure Blob Storage** |File is uploaded on chunks. Chunk size is 2MB.|Chunks are disabled. File is submitted with a form.|
| **Amazon S3** |File is uploaded on chunks. Chunk size is 5MB.|Chunks are disabled. File is submitted with a form.|
