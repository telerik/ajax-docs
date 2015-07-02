---
title: Telerik.Web.UI.RadBinaryImage
page_title: Telerik.Web.UI.RadBinaryImage
description: Telerik.Web.UI.RadBinaryImage
---

# Telerik.Web.UI.RadBinaryImage

Represents a control which is capable of displaying images from a binary data

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Control
* System.Web.UI.WebControls.WebControl
* Telerik.Web.UI.RadBinaryImage

## Properties

###  TagKey `HtmlTextWriterTag`

Gets the  value that corresponds
            to this Web server control. This property is used primarily by control
            developers.

###  ImageAlign `ImageAlign`

Gets or sets the alignment of the  control in relation to other elements on
            the Web page.

###  AlternateText `String`

Gets or sets the alternate text displayed in the Image control when the image
            is unavailable. Browsers that support the ToolTips feature display this text as
            a ToolTip.

###  DescriptionUrl `String`

The URL for the file that contains a detailed description for the image. The
            default is an empty string ("").

###  GenerateEmptyAlternateText `String`

Gets or sets a value indicating whether the control generates an alternate text
            attribute for an empty string value. The default value is false

###  PersistDataIfNotVisible `Boolean`

Gets or sets a value indicating whether the image data will 
            be persisted if control is invisible

###  ImageUrl `String`

Gets or sets the location of an image to display in the 
             control.

#### Remarks
Applicable only when  property is not set.

###  HttpHandlerUrl `String`

Specifies the URL of the HTTPHandler from which the image will be served

###  ImagePersister `IRadImagePersister`

Gets the  instance which is responsible for
            saving and loading image's data

#### Remarks
This should be an instance of same type as 
             's ImagePersister

###  DataValue `Byte[]`

Gets or sets binary data to which control will be bound to

###  Filters `BinaryImageFilterCollection`

Contains collections of  which will be applied to image's data

###  ResizeMode `BinaryImageResizeMode`

Specifies the resize mode that  will use to resize the image.
            Default value is BinaryImageResizeMode.None, indicating no resizing will be performed.

###  CropPosition `BinaryImageCropPosition`

Specifies the crop position  will use when cropping the image.
            This property has a meaning only when the ResizeMode property is set to BinaryImageResizeMode.Crop.
            Default value is BinaryImageCropPosition.Center.

###  SavedImageName `String`

Get or set the name of the file which will appear inside of the SaveAs
            browser dialog

###  EnableAriaSupport `Boolean`

When set to true enables support for WAI-ARIA

###  VisibleWithoutSource `Boolean`

Set whenever to render <img> tag when the image src is empty string.
            Default value is true.

###  AutoAdjustImageControlSize `Boolean`

Specifies if the HTML image element's dimensions are inferred from image's binary data

## Methods

###  RenderContents

#### Returns

`System.Void` 

###  AddAttributesToRender

Adds HTML attributes and styles that need to be rendered to the specified 
            . This method is used primarily
            by control developers.

#### Parameters

#### writer `System.Web.UI.HtmlTextWriter`

A  that
            represents the output stream to render HTML content on the client.

#### Returns

`System.Void` 

###  DataBind

Binds a data source to the invoked server control and all its child
            controls.

#### Returns

`System.Void` 

###  SaveViewState

Saves any state that was modified after the 
             method was
            invoked.

#### Returns

`System.Object` An object that contains the current view state of the control; otherwise, if
            there is no view state associated with the control, null.

