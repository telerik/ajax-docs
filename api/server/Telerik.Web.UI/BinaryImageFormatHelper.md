---
title: Telerik.Web.UI.BinaryImageFormatHelper
page_title: Telerik.Web.UI.BinaryImageFormatHelper
description: Telerik.Web.UI.BinaryImageFormatHelper
---

# Telerik.Web.UI.BinaryImageFormatHelper

Contains helper methods to retrieve and convert between image formats

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.BinaryImageFormatHelper

## Methods

###  CreateByteFromImage

Converts the specified image to a byte array

#### Parameters

#### image `System.Drawing.Image`

The  object to convert

#### imageFormat `System.Drawing.Imaging.ImageFormat`

The output  to convert the image to

#### Returns

`System.Byte[]` 

###  CreateImgFromBytes

Converts a byte array containing image data into an  object.

#### Parameters

#### data `System.Byte`

The binary image data to convert

#### Returns

`System.Drawing.Image` 

###  GetImageMimeType

Retrieves the MIME type of the specified binary image data

#### Parameters

#### image `System.Byte`

A byte array containing the binary image data

#### Returns

`System.String` 

###  GetImageFormat

Retrieves the  of the specified binary image data

#### Parameters

#### image `System.Byte`

A byte array containing the binary image data

#### Returns

`System.Drawing.Imaging.ImageFormat` 

###  IsTiff

Gets a value indicating whether the image is in TIFF format.

#### Parameters

#### image `System.Byte`

A byte array containing the binary image data

#### Returns

`System.Boolean` 

###  IsPng

Gets a value indicating whether the image is in PNG format.

#### Parameters

#### image `System.Byte`

A byte array containing the binary image data

#### Returns

`System.Boolean` 

###  IsGif

Gets a value indicating whether the image is in GIF format.

#### Parameters

#### image `System.Byte`

A byte array containing the binary image data

#### Returns

`System.Boolean` 

###  IsJpeg

Gets a value indicating whether the image is in JPEG format.

#### Parameters

#### image `System.Byte`

A byte array containing the binary image data

#### Returns

`System.Boolean` 

###  IsBmp

Gets a value indicating whether the image is in BMP format.

#### Parameters

#### image `System.Byte`

A byte array containing the binary image data

#### Returns

`System.Boolean` 

###  RemoveNonHeaderBytes

Removes any beginning non-header bytes from the binary image data. After
            the removal, the image header is guaranteed to start from the first byte index.

#### Parameters

#### image `System.Byte`

A byte array containing the binary image data

#### Returns

`System.Byte[]` 

###  GetHeaderOffset

Returns the starting offset of the image header in the specified byte array.

#### Parameters

#### bytes `System.Byte`

A byte array containing the binary image data

#### Returns

`System.Int32` 

