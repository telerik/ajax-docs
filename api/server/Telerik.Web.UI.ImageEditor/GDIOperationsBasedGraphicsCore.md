---
title: Telerik.Web.UI.ImageEditor.GDIOperationsBasedGraphicsCore
page_title: Telerik.Web.UI.ImageEditor.GDIOperationsBasedGraphicsCore
description: Telerik.Web.UI.ImageEditor.GDIOperationsBasedGraphicsCore
---

# Telerik.Web.UI.ImageEditor.GDIOperationsBasedGraphicsCore

An implementation of IGraphicsCore that uses IImageOperations internally

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.ImageEditor.GDIOperationsBasedGraphicsCore : IGraphicsCore

## Methods

###  ChangeOpacity

Defines the changes of the pixel opacity of the provided Image

#### Parameters

#### image `System.Drawing.Image`

The original image being the base for the operation

#### opacity `System.Double`

The level of opacity. Should be in the range [0-1].

#### Returns

`System.Drawing.Image` The resultant image of the applied graphics method

###  Resize

Resizes the original image by shrinking or expanding it by the provided dimensions

#### Parameters

#### image `System.Drawing.Image`

The original image being the base for the operation

#### size `System.Drawing.Size`

The new dimensions of the image

#### Returns

`System.Drawing.Image` The resultant image of the applied graphics method

###  Flip

Flips the image content in the specified direction

#### Parameters

#### image `System.Drawing.Image`

The original image being the base for the operation

#### direction `Telerik.Web.UI.ImageEditor.FlipDirection`

The direction of the flip change.

#### Returns

`System.Drawing.Image` The resultant image of the applied graphics method

###  Rotate

Rotates the image using the enumerated rotation. Currently only rectangular angles' are supported - 90°, 180°, 270°

#### Parameters

#### image `System.Drawing.Image`

The original image being the base for the operation

#### rotate `Telerik.Web.UI.ImageEditor.Rotation`

The rotation direction for the rotation method

#### Returns

`System.Drawing.Image` The resultant image of the applied graphics method

###  Crop

Crops the provided image using the specified rectangular box

#### Parameters

#### image `System.Drawing.Image`

The original image being the base for the operation

#### rectange `System.Drawing.Rectangle`

The bounding box specifying the cropping area

#### Returns

`System.Drawing.Image` The resultant image of the applied graphics method

###  AddText

Adds text to the image on the provided position.

#### Parameters

#### image `System.Drawing.Image`

The original image being the base for the operation

#### position `System.Drawing.Point`

The top/left position relative to the original image.

#### text `Telerik.Web.UI.ImageEditor.ImageText`

The definition of the test to insert, including the content itself

#### Returns

`System.Drawing.Image` The resultant image of the applied graphics method

###  InsertImage

Insert another image within the original image at the specified location.

#### Parameters

#### image `System.Drawing.Image`

The original image being the base for the operation

#### position `System.Drawing.Point`

The top/left coordinates relative to the original image.

#### imageToInsert `System.Drawing.Image`

The image that should be inserted in the original image

#### Returns

`System.Drawing.Image` The resultant image of the applied graphics method

###  ConvertTo

Converts the image to the specified format. This change may degrade the quality of the image.

#### Parameters

#### original `System.Drawing.Image`

The original image being the base for the operation

#### format `Telerik.Web.UI.ImageEditor.EditableFormat`

The format of the resultant image

#### Returns

`System.Drawing.Image` The resultant image of the applied graphics method

###  ApplyOperation

Applies the provided image operation agaist the original image

#### Parameters

#### image `System.Drawing.Image`

The original image being the base for the operation

#### operation `Telerik.Web.UI.ImageEditor.IImageOperation`

The operation to apply

#### Returns

`System.Drawing.Image` The resultant image of the applied graphics method

