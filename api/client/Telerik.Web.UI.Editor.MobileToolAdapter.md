---
title: Telerik.Web.UI.Editor.MobileToolAdapter
page_title: Client-side API Reference
description: Client-side API Reference
slug: Telerik.Web.UI.Editor.MobileToolAdapter
---

# Telerik.Web.UI.Editor.MobileToolAdapter : Telerik.Web.UI.Editor.BaseToolAdapter

## Inheritance Hierarchy

* Sys.UI.Control
* *[Telerik.Web.UI.Editor.BaseToolAdapter]({%slug Telerik.Web.UI.Editor.BaseToolAdapter%})*
* *[Telerik.Web.UI.Editor.MobileToolAdapter]({%slug Telerik.Web.UI.Editor.MobileToolAdapter%})*

## Methods

### toggleEdit

Toggles the editing and selecting modes and respectfully shows or hides the tools zone

#### Parameters

#### Returns

`None`

### isEditEnabled

Returns true if the user in editing mode (the tools zone is visible)

#### Parameters

#### Returns

`Boolean`

### get_mobileKeyboardAdapter

Get the mobile keyboard adapter object

#### Parameters

#### Returns

`Telerik.Web.UI.Editor.MobileKeyboardAdapter`

### showKeyboard

Shows the virtual keyboard and removes the selection highlighting

#### Parameters

#### Returns

`None`

### hideKeyboard

Hides the virtual keyboard, shows the tools zone and highlights the selection

#### Parameters

#### Returns

`None`

### hideKeyboardPermanent

Hides the virtual keyboard and disposes the mobile keyboard adapter 

#### Parameters

#### Returns

`None`

### getOrientation

Gets the orientation of the device

#### Parameters

#### Returns

`Telerik.Web.UI.Editor.Orientation`

### get_toolNavigator

Gets the current ToolNavigator control instance

#### Parameters

#### Returns

`Telerik.Web.UI.Editor.ToolNavigator`

### get_tabChooser

Gets the current TabChooser control instance

#### Parameters

#### Returns

`Telerik.Web.UI.Editor.TabChooser`
