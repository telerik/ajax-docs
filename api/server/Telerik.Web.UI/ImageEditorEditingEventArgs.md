---
title: Telerik.Web.UI.ImageEditorEditingEventArgs
page_title: Telerik.Web.UI.ImageEditorEditingEventArgs
description: Telerik.Web.UI.ImageEditorEditingEventArgs
---

# Telerik.Web.UI.ImageEditorEditingEventArgs

Provides the event data for the RadImageEditor's ImageEditing event.

## Inheritance Hierarchy

* System.Object
* System.EventArgs
* Telerik.Web.UI.ImageEditorEventArgs
* Telerik.Web.UI.ImageEditorEditingEventArgs

## Properties

###  Cancel `Boolean`

Gets or sets a bool value indicating whether the saving on the image should be canceled.

###  Argument `String`

Gets or sets additional argument that will be passed back to the client callback function.

###  CommandName `String`

Gets the current command applied to the Editable Image.

###  ClientObjectsDictionary `Dictionary`2`

Gets a dictionary containing all the objects sent from the client. Depending on the operation different set of Key-Value pair is sent.
            
            During AddText operation the following keys are sent: name, key, clientOps, x, y, color, font, size, text.
            
            During Crop operation the following keys are sent: name, key, clientOps, x, y, width, height.
            
            During InsertImage operation the following keys are sent: name, key, clientOps, x, y, value, arrayOps.

###  Image `EditableImage`

Gets the current Editable Image of the RadImageEditor control.

