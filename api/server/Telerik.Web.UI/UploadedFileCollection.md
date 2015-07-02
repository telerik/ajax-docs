---
title: Telerik.Web.UI.UploadedFileCollection
page_title: Telerik.Web.UI.UploadedFileCollection
description: Telerik.Web.UI.UploadedFileCollection
---

# Telerik.Web.UI.UploadedFileCollection

Provides access to and organizes files uploaded by a client.

#### Remarks
Clients encode files and transmit them in the content body using multipart MIME
            format with an HTTP Content-Typeheader of multipart/form-data. RadUpload
            extracts the encoded file(s) from the content body into individual members of an
            UploadedFileCollection. Methods and properties of the
            UploadedFileclass provide access to the contents and properties of
            each file.

## Inheritance Hierarchy

* System.Object
* System.Collections.CollectionBase
* Telerik.Web.UI.UploadedFileCollection

## Properties

###  Item `UploadedFile`

Gets an individual UploadedFile object from the file
                collection.In C#, this property is the indexer for the
                UploadedFileCollection class.

