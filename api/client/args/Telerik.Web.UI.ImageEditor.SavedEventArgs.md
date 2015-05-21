---
title: Telerik.Web.UI.ImageEditor.SavedEventArgs
page_title: Client-side API Reference
description: Client-side API Reference
slug: Telerik.Web.UI.ImageEditor.SavedEventArgs
---

# Telerik.Web.UI.ImageEditor.SavedEventArgs : Sys.EventArgs 

## Inheritance Hierarchy

* Sys.EventArgs
* *[Telerik.Web.UI.ImageEditor.SavedEventArgs]({%slug Telerik.Web.UI.ImageEditor.SavedEventArgs%})*

## Methods

###  get_fileName

Returns the current ImageOperation client object.

#### Parameters

#### Returns

`Telerik.Web.UI.ImageEditor.ImageOperation`

###  get_isSaved

Returns the image saving result.

#### Parameters

#### Returns

`Boolean`

###  get_argument

Returns the argument passed through the server-side ImageSaving event.

#### Parameters

#### Returns

`String`

###  get_message

Returns the save action applied on the image.

#### Parameters

#### Returns

`String` The possible values for the save action are "SaveClient", "SaveServer" and "ApplyChanges".

