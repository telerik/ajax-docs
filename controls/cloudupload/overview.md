---
title: CloudUpload Overview
page_title: Overview | UI for ASP.NET AJAX Documentation
description: Overview
slug: cloudupload/overview
tags: overview
published: True
position: 0
---

# CloudUpload Overview



## General Information

__RadCloudUpload__ provides the ability to upload files directly to Cloud Storage Providers - AmazonS3, Azure and Telerik Backend Services (formerly Everlive).The upload workflow is as follows : the file, which is about to be uploaded is initially processed to a handler and the handler uploads the file to the specified storage provider__(files are not stored on the server's hard drive)__.

The main built-in features of __RadCloudUpload__ include:

* Validation

* Multiple File Selection

* Progress Monitoring

* Custom Events

The files are passed to a Handler with a single request or on chunks. Telerik Backend Services does not support a multipart upload and the files are sent with a single request to the used Handler. The predefined chunk sizes for the Amazon and Azure storage providers are respectively- 5MB and 2MB. If the browser supports FileAPI, the control will create a module based on its functionality, otherwise it will use the iFrame module (e.g. IE9, IE8, IE7, IE6 will use iFrame module).

## Erasure Process

__RadCloudUpload__ is configured to use a __callback__ mechanism - to delete the uploaded files from the Storage Provider if they are not processed after a PostBack. For example, when a file is uploaded, it could be removed from the uploaded files collection, when the “Remove” button is clicked. In this case, its record from the client state is removed and after a certain time the __callback__ (triggered from the cache of the application) will remove it from the storage.

## Cloud Storage Providers

* [ Telerik Backend Services ]({%slug cloudupload/cloud-storage-providers/telerik-backend-services%})

* [ AmazonS3 ]({%slug cloudupload/cloud-storage-providers/amazon-s3%})

* [ Azure ]({%slug cloudupload/cloud-storage-providers/azure-blob-storage%})

## 

See Also

[Full list of features of Telerik’s ASP.NET Cloud Upload](http://www.telerik.com/products/aspnet-ajax/cloud-upload.aspx)

[Overview demo of Telerik’s ASP.NET Cloud Upload](http://demos.telerik.com/aspnet-ajax/cloud-upload/examples/overview/defaultcs.aspx)
