---
title: Telerik.Web.UI.ImageEditor.Zoom
page_title: Telerik.Web.UI.ImageEditor.Zoom
description: Telerik.Web.UI.ImageEditor.Zoom
---

# Telerik.Web.UI.ImageEditor.Zoom

Represents an ImageEditor dialog used for controlling the Zoom functionality of the Telerik.Web.UI.RadImageEditor control.

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Control
* System.Web.UI.WebControls.WebControl
* Telerik.Web.UI.ImageEditor.ImageEditorDialog
* Telerik.Web.UI.ImageEditor.Zoom

## Properties

###  DialogName `String`

Gets the name of the Dialog.

###  ScriptUrl `String`

Gets the script file associated with the dialog.

###  Title `String`

Gets the Title of the Dialog.

###  ExternalDialogsPath `String`

Gets or sets a value indicating where the image editor will look for its dialogs.

#### Remarks
If specified, the ExternalDialogsPath
            		property will allow you to customize and load the image editor dialogs from normal ASCX files.

###  Skin `String`

Gets or sets the Skin of the ParentImageEditor control.

###  ParentImageEditor `RadImageEditor`

Gets or sets the ParentImagEditor control which loads the DialogControl.

## Methods

###  RenderTitle

Renders the localized title of the dialog.

#### Parameters

#### writer `System.Web.UI.HtmlTextWriter`

The writer that will write out the text.

#### Returns

`System.Void` 

###  RenderScript

Renders the script HTML tag with the script of the control.

#### Parameters

#### writer `System.Web.UI.HtmlTextWriter`

The writer that writes the HTML tag.

#### Returns

`System.Void` 

###  ApplySkin

Searches the current dialog for child RadControls and sets their Skin properties to the same value as that of the ParentImageEditor.

#### Parameters

#### target `System.Web.UI.Control`

The parent control where to search for child RadControls. In our case this is the dialog.

#### skin `System.String`

The skin to apply to the child RadControls.

#### Returns

`System.Void` 

###  IsTouchSkin

Reports back if the dialog should be rendered using a Touch skin

#### Returns

`System.Boolean` True if Touch skin is used

###  SetChildrensProperties

Sets child controls properties. 
            Override this method if you want to configure the child controls, such as setting the localized strings.

#### Returns

`System.Void` 

###  GetResourceContent

Gets the HTML content to load within the dialog. It is loaded from .ASCX file.

#### Parameters

#### name `System.String`

The name of the ASCX file.

#### Returns

`System.String` The HTML content that will be loaded within the dialog.

###  FindControlRecursive

Searches for a child control within the dialog's Controls collection.

#### Parameters

#### id `System.String`

The ID of the control to find.

#### Returns

`System.Web.UI.Control` Instance to the control found. If the control is not found null is returned.

