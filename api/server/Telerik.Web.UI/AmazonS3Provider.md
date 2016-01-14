---
title: Telerik.Web.UI.AmazonS3Provider
page_title: Telerik.Web.UI.AmazonS3Provider
description: Telerik.Web.UI.AmazonS3Provider
---

# Telerik.Web.UI.AmazonS3Provider

AmazonS3Provider is used to upload/delete files to AmazonS3.

## Inheritance Hierarchy

* System.Object
* System.Configuration.Provider.ProviderBase
* Telerik.Web.UI.AmazonS3Provider : IDisposable

## Properties

###  AccessKey `String`

Gets or sets the Access Key of the storage.

###  BucketName `String`

Gets or sets the Bucket name of the storage.

###  EnsureContainer `Boolean`

Gets or sets the EnsureContainer.
            If it is set to true creates the bucket if does not exists.

###  SecretKey `String`

Gets or sets the Secret Key of the storage.

###  SubFolderStructure `String`

Gets or sets the SubFolderStructureof of the uploaded file.
            If it is set creates a virtual directory on the storage.

###  UncommitedFilesExpirationPeriod `TimeSpan`

The time after the files are deleted from the storage if they are not processed.

#### Remarks
Default time is 4 hours.

###  UploadedPartETag `String`

Gets or sets the uploaded PartETag after a chunk is uploaded. It is used to assemble the file after all chunks are uploaded.

## Methods

###  AbortChunktUpload

Deletes all of the uncommitted uploaded chunks.

#### Parameters

#### keyName `System.String`

Key name of the uploading file.

#### uploadId `System.String`

UploadId generated when multi part upload is initiated.

#### Returns

`System.Void` 

###  CommitChunkUpload

Assembles all of the uploaded chunks into a file in storage.

#### Remarks
Invoked after all of the chunks are uploaded.

#### Parameters

#### config `System.Collections.Generic.IDictionary{System.String,System.Object}`

Contains the UploadID, all part ETags and the key name.
            string uploadId = config["uploadId"];List<PartETag< partETags = (List<PartETag<)config["partETags"];string keyName = config["keyName"];

#### metaData `System.Collections.Specialized.NameValueCollection`

No applicable.

#### Returns

`System.Void` 

###  CreateBucket

Creates a bucket.

#### Returns

`System.Void` 

###  DeleteFile

Used by the callback mechanism to deletes the files after certain time (UncommitedFilesExpirationPeriod) if they are not processed.

#### Parameters

#### keyName `System.String`

Name under which the file is uploaded to the storage.

#### Returns

`System.Void` 

###  Dispose

Disposes the instance of the AmazonS3Provider.

#### Returns

`System.Void` 

###  EnsureStorageContainer

Ensures that the set bucket will be created explicitly.

#### Returns

`System.Void` 

###  EnsureWebClient

Creates AmazonS3Client used by the provider to upload files.

#### Remarks
If the method is overridden set the newly created s3Client to the AmazonS3Client property.

#### Returns

`System.Void` 

###  Initialize

Initialize all of the public properties.

#### Remarks
If the method is overridden make sure that all of the public properties are set properly.

#### Parameters

#### name `System.String`

Name of the provider associated in the web.config

#### config `System.Collections.Specialized.NameValueCollection`

Contains all of the settings declared as attributes in the web.config

#### Returns

`System.Void` 

###  InitiateMultiPartUpload

Initiates multi part upload.

#### Remarks
Invoked before first chunk is going to be uploaded.

#### Parameters

#### keyName `System.String`

Key name of the uploading file.

#### metaData `System.Collections.Specialized.NameValueCollection`

Meta data associated with the uploading file.

#### Returns

`System.String` The uploadId used to upload all the chunks.

###  UploadChunk

Uploads current chunk of the file. It is used when the file is more than 5MB.

#### Remarks
After the upload is done the ETag of the response should be assigned to the UploadedPartETag property.

#### Parameters

#### config `System.Collections.Specialized.NameValueCollection`

Contains the UploadID, part number and the key name.
            string uploadId = config["uploadId"];string partNumber = config["partNumber"];string keyName = config["keyName"];

#### fileStream `System.IO.Stream`

The content of the uploaded chunk.

#### Returns

`System.Void` 

###  UploadFile

Uploads the file with single request. It is called when the file is less than 5MB or the file is uploaded under IE9,8,7 where chunk upload is not supported.

#### Parameters

#### keyName `System.String`

Unique name under which the file will be uploaded to the storage. This avoids file replacement.

#### metaData `System.Collections.Specialized.NameValueCollection`

Meta data associated with the current upload.

#### fileStream `System.IO.Stream`

The content of the uploaded file.

#### Returns

`System.Void` 

