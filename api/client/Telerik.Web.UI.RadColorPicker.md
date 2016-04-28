---
title: Telerik.Web.UI.RadColorPicker
page_title: Client-side API Reference
description: Telerik.Web.UI.RadColorPicker
slug: Telerik.Web.UI.RadColorPicker
---

# Telerik.Web.UI.RadColorPicker : Telerik.Web.UI.RadWebControl

## Inheritance Hierarchy

* [Telerik.Web.UI.RadWebControl]({%slug Telerik.Web.UI.RadWebControl%})
* *[Telerik.Web.UI.RadColorPicker]({%slug Telerik.Web.UI.RadColorPicker%})*


## Methods

### get_enabled

Returns a value, indicating whether the color picker control is enabled

#### Parameters

#### Returns

`Boolean` The current value of the Enabled property

### get_keepInScreenBounds

Gets a value indicating whether the ColorPicker popup will show in the visible viewport of the browser window

#### Parameters

#### Returns

`Boolean` The current keep

### get_overlay

Gets a value indicating whether the color picker control will create an overlay element for its palette, in case ShowIcon=true

#### Parameters

#### Returns

`Boolean` The current value of the Overlay property

### get_paletteModes

Gets the value of the PaletteModes property of the color picker control

#### Parameters

#### Returns

`Telerik.Web.UI.PaletteModes` The current value of the PaletteModes property

### get_selectedColor

Gets the selected color of the color picker control

#### Parameters

#### Returns

`String` The currently selected color

### get_selectedColorTitle

Gets the title, associated with the selected color of the color picker control

#### Parameters

#### Returns

`String` The title of the selected color

### getIconContainer

Returns the element that represents the button of the color picker, in case ShowIcon=true

#### Parameters

#### Returns

`Object` The element of the color picker

### getPaletteContainer

Returns the element of the color picker's palette

#### Parameters

#### Returns

`Object` The element of the color picker

### hidePalette

Hides the palette in case ShowIcon=true

#### Parameters

#### Returns

`None` 

### isModeEnabled

Returns a value indicating whether a palette mode is enabled for the color picker control

#### Parameters

##### paletteMode `Telerik.Web.UI.PaletteModes`

The palette mode to check

#### Returns

`Boolean` A value

### set_enabled

Enables or disables the color picker control. This property is not part of the client state of the control and the new value will not be persisted after postback.

#### Parameters

##### value `Boolean`

The new value for the Enabled property

#### Returns

`None` 

### set_keepInScreenBounds

Sets a value indicating whether the ColorPicker popup will show in the visible viewport of the browser window

#### Parameters

##### value `Boolean`

The new keep

#### Returns

`None` 

### set_overlay

Sets a value indicating whether the colorpicker will create an overlay element for its palette, in case ShowIcon=true

#### Parameters

##### value `Boolean`

The new value for the Overlay property

#### Returns

`None` 

### set_selectedColor

Sets the selected color of the color picker control

#### Parameters

##### value `String`

The new value for the SelectedColor property

##### skipRefreshView `Boolean`

A value

#### Returns

`None` 

### showPalette

Shows the palette in case ShowIcon=true

#### Parameters

#### Returns

`None` 


## Events

### popUpShow

Occurs after the popup palette of RadColorPicker with ShowIcon set to "true" shows.

#### Event Data

##### sender `Telerik.Web.UI.RadColorPicker`

The RadColorPicker instance raised the event.

##### args `Sys.EventArgs`

Empty event argument.

### load

Occurs after the RadColorPicker loads on the page. 

#### Event Data


##### sender `Telerik.Web.UI.RadColorPicker`

The RadColorPicker instance raised the event.

##### args `Sys.EventArgs`

Empty event argument.
### colorPreview

Occurs as the mouse hovers over a color box within the palette. 

#### Event Data

##### sender `Telerik.Web.UI.RadColorPicker`

The RadColorPicker instance raised the event.

##### args `Telerik.Web.UI.ColorPickerColorPreviewEventArgs`

The arguments of the ColorPreview event.



### colorChanging

Occurs just before the user selects a color from the palette. Can be cancelled. 

#### Event Data

##### sender `Telerik.Web.UI.RadColorPicker`

The RadColorPicker instance raised the event.

##### args `Telerik.Web.UI.ColorPickerColorChangingEventArgs`

The arguments of the ColorChanging event.

### colorChange

Occurs when the user selects a color from the RadColorPicker palette. 

#### Event Data

##### sender `Telerik.Web.UI.RadColorPicker`

The RadColorPicker instance raised the event.

##### args `Telerik.Web.UI.ColorPickerColorChangeEventArgs`

The arguments of the ColorChange event.


