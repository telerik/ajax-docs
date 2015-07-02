---
title: Telerik.Web.UI.UploadedFileInfo
page_title: Telerik.Web.UI.UploadedFileInfo
description: Telerik.Web.UI.UploadedFileInfo
---

# Telerik.Web.UI.UploadedFileInfo

This class implements the UploadedFileInfo object and its fields and methods.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.UploadedFileInfo

## Properties

###  FileName `String`

Gets the fully-qualified name of the file on the client's computer (for example
            "C:\MyFiles\Test.txt").

###  ContentType `String`

Gets the MIME content type of a file sent by a client.

###  ContentLength `Int64`

Gets the size in bytes of an uploaded file.

###  DateJson `String`

Gets the last modified date of the uploaded file in JSON format.

#### Remarks
The property is available only in RadAsyncUpload control when FileApi module is used

###  Index `Int32`

Gets or sets the index.

## Methods

###  CopyFileInfo

Copies the file info to IAsyncUploadResult.

#### Parameters

#### result `Telerik.Web.UI.IAsyncUploadResult`

The result.

#### file `Telerik.Web.UI.UploadedFile`

The file.

#### Returns

`System.Void` 

