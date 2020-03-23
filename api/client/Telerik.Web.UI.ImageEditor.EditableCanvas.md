---
title: Telerik.Web.UI.ImageEditor.EditableCanvas
title_prefix: Client-side API Reference
description: Telerik.Web.UI.ImageEditor.EditableCanvas
slug: Telerik.Web.UI.ImageEditor.EditableCanvas
---

# Telerik.Web.UI.ImageEditor.EditableCanvas : Telerik.Web.UI.ImageEditor.EditableImageBase 

## Inheritance Hierarchy

* [Telerik.Web.UI.ImageEditor.EditableImageBase]({%slug Telerik.Web.UI.ImageEditor.EditableImageBase%})
* *[Telerik.Web.UI.ImageEditor.EditableCanvas]({%slug Telerik.Web.UI.ImageEditor.EditableCanvas%})*


## Methods

### addText

Adds text to the image in the specified position

#### Parameters

##### x `Number`

The X coordinate of the text

##### y `Number`

The Y coordinate of the text

##### text `Telerik.Web.UI.ImageEditor.ImageText`

The text to add to the image.

#### Returns

`None` 

### applyChangesOnServer

Initiates a callback to the server and performs operations (saving image, cropping and etc.) to the image on the server.

#### Parameters

##### saveImageServer `Boolean`

True 

##### fileName `Object`

The filename of the image. If null then the original filename is used. If file name is not a string

##### call_saveOnClient `Boolean`

True 

##### overwrite `Boolean`

True 

#### Returns

`None` 

### applyFilter

Creates an image operation which is applied against the current editable image and adds the operation to the undo stack.

#### Parameters

##### filter `Telerik.Web.UI.ImageEditor.Filters.IPixelFilter`

The filter to be applied.

##### imgOperation `Object`

The image operation object handling the actual editing of the image.

#### Returns

`None` 

### changeOpacity

Changes the opacity of the image.

#### Parameters

##### opacity `Number`

The new value of the opacity. 

##### imgOperation `Object`

The image operation object handling the actual editing of the image.

#### Returns

`None` 

### crop

Crops the image to the given rectangle.

#### Parameters

##### rectangle `Object`

The rectangle defined by coordinates and dimensions to crop.

#### Returns

`None` 

### doServerOperation

Initiates an ASP.NET client callback to the server and raises the ImageEditing server side event. The EditableImage can be retrieved from the event arguments, and edited accordingly.

#### Parameters

##### commandName `String`

The command name that will be passed to the server and respective client events. It should be unique.

##### commandText `String`

The command text that will be used to record the operation in the Undo

##### commandArgument `String`

The additional command argument that will be passed to the server. By default empty string is passed.

##### callbackFunction `Function`

The function that will be called after response is received from the server. Two parameters are sent to this function

#### Returns

`None` 

### executeFilter

Executes the provided filter against the current editable image.

#### Parameters

##### filter `Telerik.Web.UI.ImageEditor.Filters.IPixelFilter`

The filter to be executed.

#### Returns

`None` 

### flip

Flips the image in the specified direction.

#### Parameters

##### flipDirection `Telerik.Web.UI.ImageEditor.FlipDirection`

The direction of flipping.

##### clearPrevFlipDirection `Boolean`

True 

##### imgOperation `Object`

The image operation object handling the actual editing of the image.

#### Returns

`None` 

### forceCurrentZoom

Ensures that the Zoom level is applied to the image

#### Parameters

#### Returns

`None` 

### get_flipDirection

Gets the flip direction of the editable canvas.

#### Parameters

#### Returns

`Telerik.Web.UI.ImageEditor.FlipDirection` Enum value of the flip direction

### get_height

Gets the current height of the canvas. Note that value may be different that the height of the image DOM element, for example, when zoomed.

#### Parameters

#### Returns

`Number` The height of the editable image

### get_opacity

Gets the current opacity of the editable canvas.

#### Parameters

#### Returns

`Number` The opacity value of the editable canvas. Range 

### get_rotation

Gets the rotation enum value of the editable canvas.

#### Parameters

#### Returns

`Telerik.Web.UI.ImageEditor.Rotation` Enum value of the rotation.

### get_rotationAngle

Gets the rotation angle of the editable canvas.

#### Parameters

#### Returns

`Number` The value in degrees of the image rotation.

### get_width

Gets the current width of the canvas. Note that value may be different that the width of the image DOM element, for example, when zoomed.

#### Parameters

#### Returns

`Number` The width of the editable image

### getBase64

Returns the Base64 representation of the loaded image.

#### Parameters

##### mimeType `String`

The currently supported types are Image

#### Returns

`String` The string that represents the encoded graphical data.

### getCanvas

Gets the element, onto which the editing will be done.

#### Parameters

#### Returns

`Object` The respective DOM element. Could be an image or a canvas tag

### getCanvasContext

Returns the 2d Context of the canvas element.

#### Parameters

#### Returns

`Object` The 2d canvas context.

### getDataUrl

Returns a URL which could be used to visualize the image directly. The image is represented in Base64 format.

#### Parameters

##### mimeType `String`

The currently supported types are Image

#### Returns

`String` The string that represents an encoded URL containing the graphical data.

### getImageDataAll

Returns an ImageData object containing the image data for the given rectangle of the bitmap.

#### Parameters

#### Returns

`Object` The ImageData object.

### insertImage

Inserts image (clip art) into the editable image at the specified position

#### Parameters

##### x `Number`

The X coordinate of the image

##### y `Number`

The Y coordinate of the image

##### value `String`

The client URL of the image to insert.

##### operationsToApply `Array`

Array of operations to apply to the clip art image

#### Returns

`None` 

### isImageLoaded

Gets a flag whether the image is loaded.

#### Parameters

#### Returns

`Boolean` Is the image loaded flag.

### isImageLoading

Gets a flag whether the image is loading

#### Parameters

##### image `Object`

The image to be edited.

#### Returns

`Boolean` Is the image loading flag

### reset

Resets the changes to the current image and reverts it to the original one

#### Parameters

##### imageUrl `Array`

The original image url. 

#### Returns

`None` 

### resize

Resizes the image.

#### Parameters

##### width `Number`

The new width of the image.

##### height `Number`

The new height of the image.

##### imgOperation `Object`

The image operation object handling the actual editing of the image.

#### Returns

`None` 

### rotate

Rotates the image in the specified direction.

#### Parameters

##### rotationDirection `Telerik.Web.UI.ImageEditor.Rotation`

Enum to determine the angle value. Only orthogonal values

##### angle `Number`

The rotation angle.

##### imgOperation `Object`

The image operation object handling the actual editing of the image.

#### Returns

`None` 

### saveOnClient

Saves the image on the client machine.

#### Parameters

##### fileName `Object`

The filename of the image. If file name is not a string

#### Returns

`None` 

### set_flipDirection

Sets the flip direction to the editable canvas.

#### Parameters

##### flipDirection `Telerik.Web.UI.ImageEditor.FlipDirection`

The direction of flipping.

#### Returns

`None` 

### zoom

Zooms(scales) the image by the specified level in percents. This operation does not change the image

#### Parameters

##### zoomLevel `Number`

The level

##### forceZoom `Boolean`

Bool value indicating whether the zoom should be performed even if the current zoom level is the same.

#### Returns

`None` 


