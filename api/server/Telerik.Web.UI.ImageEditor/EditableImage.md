---
title: Telerik.Web.UI.ImageEditor.EditableImage
page_title: Telerik.Web.UI.ImageEditor.EditableImage
description: Telerik.Web.UI.ImageEditor.EditableImage
---

# Telerik.Web.UI.ImageEditor.EditableImage

Represents an Image that can be edited.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.ImageEditor.EditableImage : IDisposable

## Properties

###  Format `String`

Gets the format of the image being edited.

###  Height `Int32`

Gets the height of the image.

###  Image `Image`

Gets the actual Bitmap that is being edited.

###  IsDisposed `Boolean`

Gets a bool value that indicates whether the dispose method of the EditableImage has been called.

###  RawFormat `String`

Gets the ImageFormat of the image being edited.

###  Size `Size`

Gets the size of the image. (Pair of width and height of the image.)

###  Width `Int32`

Gets the width of the image.

## Methods

###  AddText

Adds text to the image.

#### Parameters

#### position `System.Drawing.Point`

The position of the text.

#### text `Telerik.Web.UI.ImageEditor.ImageText`

The Image text to add.

#### Returns

`System.Void` 

###  ApplyImageOperations

Applies the IImageOperation(s) to the current image in the order they appear in the operations collection.

#### Parameters

#### operations `System.Collections.Generic.IEnumerable{Telerik.Web.UI.ImageEditor.IImageOperation}`

Collection of IImageOperation(s) to apply.

#### Returns

`System.Void` 

###  ChangeOpacity

Changes the transparency of the current image.

#### Parameters

#### opacity `System.Double`

A double value between 0.00 - 1.00, representing the opacity. Passing 1 means no opacity.

#### Returns

`System.Void` 

###  CheckPixelFormat

Checks whether the PixelFormat of an image is indexed or not and returns FALSE if it is indexed, and TRUE if it is NOT indexed.
            
            This method is used to determine which method will be used when creating new bitmaps, because the Graphics.FromImage method throws exceptions
            in some scenarios. http://msdn.microsoft.com/en-us/library/system.drawing.graphics.fromimage.aspx

#### Parameters

#### original `System.Drawing.Image`

The image whose pixel format is checked.

#### Returns

`System.Boolean` False if the PixelFormat is indexed, and True if it is NOT indexed.

###  Clone

Creates an identical object of the editable image.

#### Returns

`Telerik.Web.UI.ImageEditor.EditableImage` The cloned editable image.

###  ConvertTo

Changes the format of the editable image.

#### Parameters

#### format `Telerik.Web.UI.ImageEditor.EditableFormat`

The new image format of the editable image.

#### Returns

`System.Void` 

###  CopyToStream

Copy the containing Image information to a

#### Parameters

#### stream `System.IO.Stream`

The stream, to which Image data will be saved

#### Returns

`System.Void` 

###  Crop

Crop the image into the given rectangle.

#### Parameters

#### rectange `System.Drawing.Rectangle`

The rectangle to crop the image into.

#### Returns

`System.Void` 

###  Dispose

Disposes the EditableImage object.

#### Returns

`System.Void` 

###  FixGifColors

Fixes a problem with the Gif file format support in the .NET framework.

#### Returns

`System.Void` 

###  Flip

Flips the image in the specified direction.

#### Parameters

#### direction `Telerik.Web.UI.ImageEditor.FlipDirection`

The flipping direction. (Possible values: Vertical, Horizontal and Both)

#### Returns

`System.Void` 

###  GetFile

Gets a file from the FileSystem.

#### Parameters

#### physicalPath `System.String`

The physicalPath of the file.

#### Returns

`System.IO.Stream` The file stream.

###  InsertImage

Inserts additional image into the editable image.

#### Parameters

#### position `System.Drawing.Point`

The position of the inserted image.

#### imgToInsert `System.Drawing.Image`

The image that will be inserted.

#### Returns

`System.Void` 

###  ReplaceImage

Replaces the current  object of the EditableImage.

#### Parameters

#### image `System.Drawing.Image`

The  object to replace the existing Image with.

#### Returns

`System.Void` 

###  Resize

Resizes the image to the size specified.

#### Parameters

#### size `System.Drawing.Size`

The new dimensions (size) of the image.

#### Returns

`System.Void` 

###  Resize

Resizes the image to the width and height specified.

#### Parameters

#### width `System.Int32`

The new width to apply.

#### height `System.Int32`

The new height to apply.

#### Returns

`System.Void` 

###  Rotate

Rotates the image clockwise, in the specified rotation direction.

#### Parameters

#### rotate `Telerik.Web.UI.ImageEditor.Rotation`

The rotation direction.(Possible values of clockwise rotation: Rotate90, Rotate180 and Rotate270).

#### Returns

`System.Void` 

