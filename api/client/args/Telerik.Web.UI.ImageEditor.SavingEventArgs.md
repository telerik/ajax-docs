---
title: Telerik.Web.UI.ImageEditor.SavingEventArgs
page_title: Client-side API Reference
description: Telerik.Web.UI.ImageEditor.SavingEventArgs
slug: Telerik.Web.UI.ImageEditor.SavingEventArgs
---

# Telerik.Web.UI.ImageEditor.SavingEventArgs : Sys.CancelEventArgs 

## Inheritance Hierarchy

* Sys.CancelEventArgs
* *[Telerik.Web.UI.ImageEditor.SavingEventArgs]({%slug Telerik.Web.UI.ImageEditor.SavingEventArgs%})*


## Methods

###  get_saveAction

Returns the save action applied on the image.

#### Parameters

#### Returns

`String` The possible values for the save action are "SaveClient", "SaveServer" and "ApplyChanges".

### get_fileName

Returns the name under which the image will be saved.

#### Parameters

#### Returns

`String`

### get_overwrite

Returns whether the file will be overwritten if it exists.

#### Parameters

#### Returns

`Boolean` 
### set_fileName

Sets the name under which the image will be saved.

#### Parameters

##### value `String`

#### Returns

`None`


