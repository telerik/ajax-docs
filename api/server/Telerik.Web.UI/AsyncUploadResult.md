---
title: Telerik.Web.UI.AsyncUploadResult
page_title: Telerik.Web.UI.AsyncUploadResult
description: Telerik.Web.UI.AsyncUploadResult
---

# Telerik.Web.UI.AsyncUploadResult

Default implementation of Telerik.Web.UI.IAsyncUploadResult IAsyncUploadResult.
            Inherit this class and add additional fields to be returned from the upload handler.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.AsyncUploadResult : IAsyncUploadResult

## Properties

###  ContentLength `Int64`

Gets the size in bytes of an uploaded file.

###  ContentType `String`

Gets the MIME content type of a file sent by a client.

###  FileName `String`

Gets the fully-qualified name of the file on the client's computer (for example
            "C:\MyFiles\Test.txt").

