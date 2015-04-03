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

__File API Module__ is the preferred one. It is supported by all modern browsers such as IE10+, FireFox (3.6+), Chrome, Safari (5+), Opera, Safari for MAC. This module offers the richest functionality. When __File API Module__ is used, __RadCloudUpload__ can use the full functionally providedby the different Cloud Storage Providers. Files are uploaded on chunks in Azure Blob Storage and Amazon S3.

## IFrame Module

__IFrame Module__ is used to ensure compatibility for the older browsers, which don’t support HTML5 File API. Such browsers are IE9 or below.When __IFrame Module__ files are uploaded at once. Chunks are not supported.

## 


>caption Upload Module Support

| Upload Module | Browser Support |
| ------ | ------ |
| __File API__ |FireFox (3.6+), Chrome, Safari (5+), Opera, Safari for MAC, IE (10+)|
| __IFrame__ |IE (7, 8, 9)|


>caption Chunks Support

| Cloud Storage Provider | File API Module | IFrame Module |
| ------ | ------ | ------ |
| __Telerik Backend Services (formerly Everlive)__ |Chunks are disabled. File is submitted with a form.|Chunks are disabled. File is submitted with a form.|
| __Azure Blob Storage__ |File is uploaded on chunks. Chunk size is 2MB.|Chunks are disabled. File is submitted with a form.|
| __Amazon S3__ |File is uploaded on chunks. Chunk size is 5MB.|Chunks are disabled. File is submitted with a form.|
