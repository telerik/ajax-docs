---
title: Telerik.Web.UI.ImageEditor.GDIGraphicsCore
page_title: Telerik.Web.UI.ImageEditor.GDIGraphicsCore
description: Telerik.Web.UI.ImageEditor.GDIGraphicsCore
---

# Telerik.Web.UI.ImageEditor.GDIGraphicsCore

A straight-forward implementation of the IGraphicsCore using GDI+

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.ImageEditor.GDIGraphicsCore

## Methods

###  ChangeOpacity

Defines the changes of the pixel opacity of the provided Image

#### Parameters

#### original `System.Drawing.Image`

The original image being the base for the operation

#### opacity `System.Double`

The level of opacity. Should be in the range [0-1].

#### Returns

`System.Drawing.Image` The resultant image of the applied graphics method

###  Resize

Resizes the original image by shrinking or expanding it by the provided dimensions

#### Parameters

#### original `System.Drawing.Image`

The original image being the base for the operation

#### size `System.Drawing.Size`

The new dimensions of the image

#### Returns

`System.Drawing.Image` The resultant image of the applied graphics method

###  Resize

Resize the image using a specific interpolation mode.

#### Parameters

#### originalImg `System.Drawing.Image`

The original image to resize.

#### newSize `System.Drawing.Size`

The new image size.

#### intMode `System.Drawing.Drawing2D.InterpolationMode`

The interpolation mode to use. All modes except NearestNeighbor will cause a small loss (1-2 px) of image data around the edges of the original image.

#### Returns

`System.Drawing.Image` The resized image. If the new size is identical to the original size, then the original image is returned.

###  Flip

Flips the image content in the specified direction

#### Parameters

#### original `System.Drawing.Image`

The original image being the base for the operation

#### direction `Telerik.Web.UI.ImageEditor.FlipDirection`

The direction of the flip change.

#### Returns

`System.Drawing.Image` The resultant image of the applied graphics method

###  Rotate

Rotates the image using the enumerated rotation. Currently only rectangular angles' are supported - 90°, 180°, 270°

#### Parameters

#### original `System.Drawing.Image`

The original image being the base for the operation

#### rotate `Telerik.Web.UI.ImageEditor.Rotation`

The rotation direction for the rotation method

#### Returns

`System.Drawing.Image` The resultant image of the applied graphics method

###  Crop

Crops the provided image using the specified rectangular box

#### Parameters

#### original `System.Drawing.Image`

The original image being the base for the operation

#### rectangle `System.Drawing.Rectangle`

The bounding box specifying the cropping area

#### Returns

`System.Drawing.Image` The resultant image of the applied graphics method

###  AddText

Adds text to the image on the provided position.

#### Parameters

#### original `System.Drawing.Image`

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

#### original `System.Drawing.Image`

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

