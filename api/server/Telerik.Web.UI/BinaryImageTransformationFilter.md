---
title: Telerik.Web.UI.BinaryImageTransformationFilter
page_title: Telerik.Web.UI.BinaryImageTransformationFilter
description: Telerik.Web.UI.BinaryImageTransformationFilter
---

# Telerik.Web.UI.BinaryImageTransformationFilter

Transformation filter which transform the image.
            The filter could alter the image width, height and manipulate cropping and interpolation mode

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.BinaryImageFilter
* Telerik.Web.UI.BinaryImageTransformationFilter

## Properties

###  Name `String`

Gets the filter's name as string representation

###  Width `Int32`

Gets or sets the width of the image.

###  Height `Int32`

Gets or sets the height of the image.

###  InterpolationMode `InterpolationMode`

Gets or sets the interpolation mode which specifies the algorithm
            that is used when images are scaled or rotated

###  Mode `BinaryImageResizeMode`

Gets or sets the resize mode of the image.

###  CropPosition `BinaryImageCropPosition`

Gets or sets the crop position that  
            can apply when cropping the binary image.

###  Name `String`

Gets the filter's name

## Methods

###  ProcessImage

Process image data by applying the filter transformations

#### Parameters

#### image `System.Byte`

#### Returns

`System.Byte[]` The processed data in bytes

###  ProcessImage

Process image data by applying the filter transformations

#### Parameters

#### input `System.Byte`

data to be processed

#### Returns

`System.Byte[]` processed data

