---
title: Telerik.Web.UI.AsyncUploadHandler
page_title: Telerik.Web.UI.AsyncUploadHandler
description: Telerik.Web.UI.AsyncUploadHandler
---

# Telerik.Web.UI.AsyncUploadHandler

This Class implements the inbuilt default AsyncUploadHandler
            that inherits IHttpHandler and IRequiresSessionState.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.Common.PreventableHandler
* Telerik.Web.UI.AsyncUploadHandler : IHttpHandler, IRequiresSessionState

## Properties

###  Configuration `IAsyncUploadConfiguration`

Gets or sets the configuration.

###  FullPath `String`

Gets the full path.

###  IsReusable `Boolean`

Gets a value indicating whether another request can use the 
            instance.

###  MaxJsonLength `Int32`

Gets or sets the MaxJsonLength.

###  TemporaryFileName `String`

Gets or sets the name of the temporary file.

###  TemporaryFolder `String`

Gets or sets the temporary folder.

## Methods

###  CreateDefaultUploadResult

Creates an object of type T (that implements IAsyncUploadResult)
            and populates all properties specified in the interface. The user is then free to populate any additional properties.

#### Parameters

#### file `Telerik.Web.UI.UploadedFile`

Contains information about the uploaded file

#### Returns

`Telerik.Web.UI.T` An object of type T populated with all properties specified in IAsyncUploadResult

###  DecryptFolder

Decrypts a string encrypted with LOS serializer.

#### Returns

`System.String` The decrypted string

###  IsFileSizeValid

Indicates whether the currently processed file has valid size. The size is checked against the maximum size specified in the 
            async upload configuration.

#### Parameters

#### contentLength `System.Int64`

The content length of the current request.

#### maxFileSize `System.Int32`

The maximum allowed size for the file.

#### Returns

`System.Boolean` Boolean value indicating whether the file has valid size or not.

###  Process

Processes the current the HTTP Web Request and saves the file to the temp folder. This method can be overridden.

#### Parameters

#### file `Telerik.Web.UI.UploadedFile`

The uploaded file

#### context `System.Web.HttpContext`

The HttpContext for the current request.

#### configuration `Telerik.Web.UI.IAsyncUploadConfiguration`

Object that implements IAsyncUploadConfiguration
            It can be a custom object sent from the page.

#### tempFileName `System.String`

The temporary name of the uploaded file.

#### Returns

`Telerik.Web.UI.IAsyncUploadResult` Object that implements theIAsyncUploadResultinterface. 
            It can be a custom defined object and may contain additional information which can then be accessed on the server.

###  ProcessRequest

Enables processing of HTTP Web requests by a custom HttpHandler that
            implements the  interface.

#### Parameters

#### context `System.Web.HttpContext`

An  object that provides
            references to the intrinsic server objects (for example, Request, Response, Session,
            and Server) used to service HTTP requests.

#### Returns

`System.Void` 

###  SaveToTempFolder

Saves the uploaded file to the temporary folder.

#### Parameters

#### file `Telerik.Web.UI.UploadedFile`

The uploaded file

#### config `Telerik.Web.UI.IAsyncUploadConfiguration`

The async upload config

#### context `System.Web.HttpContext`

The HttpContext for the current request.

#### tempFileName `System.String`

The temporary name of the uploaded fiel.

#### Returns

`System.Void` 

