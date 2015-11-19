---
title: Telerik.Web.UI.RadImageSessionPersister
page_title: Telerik.Web.UI.RadImageSessionPersister
description: Telerik.Web.UI.RadImageSessionPersister
---

# Telerik.Web.UI.RadImageSessionPersister

Represents an object which can handle image data's storage and retrieval using HTTPCache

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.RadImageSessionPersister : IRadImageFileNameContainer, IRadImagePersister

## Properties

###  ImageKey `String`

Gets portion of generated Uri which represents image's identification key value

###  UrlKey `String`

Gets portion of generated Uri which represents image's identification key name

###  CurrentContext `HttpContext`

Gets current  instance

###  ImageFileName `String`

Gets or sets the name of the image file.

## Methods

###  GenerateBinaryImageUrl

Generates an Uri at which the image's data can be accessed

#### Parameters

#### imageHandlerUrl `System.String`

URL of the HTTPHandler from which image data
            should be served

#### Returns

`System.String` Generated Uri

###  SaveImage

Saves a image's data to storage

#### Parameters

#### image `System.Byte`

Image's binary data

#### Returns

`System.Void` 

###  LoadImage

Retrieves image binary data from storage

#### Returns

`Telerik.Web.UI.BinaryImageDataContainer` image's data

