---
title: Telerik.Web.UI.ImageEditor.EditableImage
description: Telerik.Web.UI.ImageEditor.EditableImage
static: true
slug: Telerik.Web.UI.ImageEditor.EditableImage
---

# Telerik.Web.UI.ImageEditor.EditableImage  

## Inheritance Hierarchy

* *[Telerik.Web.UI.ImageEditor.EditableImage]({%slug Telerik.Web.UI.ImageEditor.EditableImage%})*


## Methods

### static addText

Add text to the image

#### Parameters

##### x `Number`

The left

##### y `Number`

The top

##### text `Telerik.Web.UI.ImageEditor.ImageText`

The text to add to the image

#### Returns

`None` 

### static applyChangesOnServer

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

### static changeOpacity

Changes the opacity of the image

#### Parameters

##### opacity `Number`

The opacity value. It must be in the 

#### Returns

`None` 

### changeOpacity

Changes the opacity of the image

#### Parameters

##### opacity `Object`

#### Returns

`Object` 

### static crop

Crops the image by the specified rectangular bounds

#### Parameters

##### rectangle `Sys.UI.Bounds`

The rectangle

#### Returns

`None` 

### crop

Crops the image by the specified rectangular bounds

#### Parameters

##### rectangle `Object`

#### Returns

`Object` 

### static doServerOperation

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

### doServerOperation

Initiates an ASP.NET client callback to the server and raises the ImageEditing server side event

#### Parameters

##### commandName `Object`

##### commandText `Object`

##### commandArgument `Object`

##### callbackFunction `Object`

#### Returns

`Object` 

### static flip

Flips the image in specified direction

#### Parameters

##### flipDirection `Telerik.Web.UI.ImageEditor.FlipDirection`

The direction of flipping

##### clearPrevFlipDirection `Boolean`

Flag whether the previously set flip direction should be taken under consideration

#### Returns

`None` 

### flip

Flips the image in specified direction

#### Parameters

##### flipDirection `Object`

##### clearPrevFlipDirection `Object`

#### Returns

`Object` 

### static get_flipDirection

Gets the flip direction of the editable image.

#### Parameters

#### Returns

`Telerik.Web.UI.ImageEditor.FlipDirection` Enum value of the flip direction

### get_flipDirection

Gets the flip direction of the editable image

#### Parameters

#### Returns

`Object` 

### get_height

Gets the current height of the image. Note that value may be different that the height of the image DOM element (e.g. when zoomed)

#### Parameters

#### Returns

`Object` 

### static get_height

Gets the current height of the image. Note that value may be different that the height of the image DOM element, for example, when zoomed

#### Parameters

#### Returns

`Number` The height of the editable image

### get_opacity

Gets the current opacity of the editable image

#### Parameters

#### Returns

`Object` 

### static get_opacity

Gets the current opacity of the editable image

#### Parameters

#### Returns

`Number` The opacity value of the editable image. Range 

### static get_rotation

Gets the rotation enum value of the editable image.

#### Parameters

#### Returns

`Telerik.Web.UI.ImageEditor.Rotation` Enum value of the rotation

### get_rotation

Gets the rotation object value of the editable image

#### Parameters

#### Returns

`Object` 

### static get_rotationAngle

Gets the rotation angel of the editable image.

#### Parameters

#### Returns

`Number` The value in degrees of the image rotation

### get_rotationAngle

Gets the rotation angel of the editable image

#### Parameters

#### Returns

`Object` 

### static get_serverUrl

Gets the src of the original image, i.e. before the server operations

#### Parameters

#### Returns

`String` The Url of the original image

### get_serverUrl

Gets the src of the original image, i.e. before the server operations

#### Parameters

#### Returns

`Object` 

### get_url

Gets the src of the edited image

#### Parameters

#### Returns

`Object` 

### static get_url

Gets the src of the edited image

#### Parameters

#### Returns

`String` The Url value of the image

### static get_width

Gets the current width of the image. Note that value may be different that the width of the image DOM element, for example, when zoomed

#### Parameters

#### Returns

`Number` The width of the editable image

### get_width

Gets the current width of the image. Note that value may be different that the width of the image DOM element (e.g when zoomed)

#### Parameters

#### Returns

`Object` 

### get_zoomLevel

Gets the current zoom level of the image

#### Parameters

#### Returns

`Object` 

### static get_zoomLevel

Gets the current zoom level of the image

#### Parameters

#### Returns

`Number` The current zoom level

### getImage

Get the image being edited

#### Parameters

#### Returns

`Object` 

### static getImage

Get the image being edited

#### Parameters

#### Returns

`Object` A reference to the image DOM element

### insertImage

Inserts image (clip art) into the editable image at the specified position

#### Parameters

##### x `Object`

##### y `Object`

##### imgSrc `Object`

##### operations `Object`

#### Returns

`Object` 

### static insertImage

Inserts image (clip art) into the editable image at the specified position

#### Parameters

##### x `Number`

The X coordinate of the image

##### y `Number`

The Y coordinate of the image

##### imgSrc `String`

The client URL of the image to insert.

##### operations `Array`

Array of operations to apply to the clip art image

#### Returns

`None` 

### reset

Resets the image to the provided image src

#### Parameters

##### imageUrl `Object`

#### Returns

`Object` 

### static reset

Resets the image to the provided image src

#### Parameters

##### imageUrl `String`

The src of the image

#### Returns

`None` 

### static resize

Resizes the image according to the specified dimensions

#### Parameters

##### width `Number`

The width of the image in pixels

##### height `Number`

The height of the image in pixels

#### Returns

`None` 

### resize

Resizes the image according to the specified dimensions

#### Parameters

##### width `Object`

##### height `Object`

#### Returns

`Object` 

### static rotate

Rotates the image according to the rotation direction specified

#### Parameters

##### rotationDirection `Telerik.Web.UI.ImageEditor.Rotation`

Enum to determine the angle value. Only orthogonal values

#### Returns

`None` 

### rotate

Rotates the image according to the rotation direction specified

#### Parameters

##### rotationDirection `Object`

#### Returns

`Object` 

### saveOnClient

Invokes the download of the edited image to the client's machine

#### Parameters

##### fileName `Object`

#### Returns

`Object` 

### static saveOnClient

Invokes the download of the edited image to the client's machine

#### Parameters

##### fileName `Object`

The name of the file

#### Returns

`None` 

### static set_serverUrl

Sets the src of the original image

#### Parameters

##### value `String`

The Url to sustitude the src of the original image

#### Returns

`None` 

### set_serverUrl

Sets the src of the original image

#### Parameters

##### value `Object`

#### Returns

`Object` 

### static Telerik

The wrapper class for editing images.

#### Parameters

##### image `Object`

The image to be edited

##### xmlHttpPanel `Telerik.Web.UI.RadXmlHttpPanel`

The XmlHttpPanel to handle the server related editing operations

#### Returns

`None` 

### zoom

Zooms(scales) the image by the specified level in percentages. This operation does not change the image

#### Parameters

##### zoomLevel `Object`

##### forceZoom `Object`

#### Returns

`Object` 

### static zoom

#### Parameters

##### zoomLevel `Number`

##### forceZoom `Boolean`

#### Returns

`None` 

### static zoomBestFit

Zooms the image to best fit in the viewport

#### Parameters

##### width `Number`

A custom width limitation

##### height `Number`

A custom height limitation

#### Returns

`None` 

### zoomBestFit

Zooms the image to best fit in the viewport

#### Parameters

##### width `Object`

##### height `Object`

#### Returns

`Object` 


## Events

### imageReload

Occurs when the image is reloaded.

#### Event Data

##### sender `Telerik.Web.UI.ImageEditor.EditableImageBase`

The RadColorPicker instance raised the event.

##### args `Sys.EventArgs`

Empty event argument.


