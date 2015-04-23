---
title: ColorPicker Object
page_title: ColorPicker Object | RadColorPicker for ASP.NET AJAX Documentation
description: ColorPicker Object
slug: colorpicker/client-side-programming/colorpicker-object
tags: colorpicker,object
published: True
position: 1
---

# ColorPicker Object



The following table lists significant members of the client-side **RadColorPicker** object:

## Public Properties


 

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
|get_selectedColor||String|Get the current selected color of the palette.|
|get_selectedColorTitle||String|Get the title of the current selected color.|
|set_selectedColor|string, bool||Set the current selected color of the palette. The boolean parameter indicates whether the method should refresh the UI of the control.|

## Public Methods




| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
|getIconContainer||DOM object|Get the DOM element representing the color icon.|
|getPaletteContainer||DOM object|Get the DOM element representing the color palette|
|hidePalette|||Hides the palette.|
|showPalette|||Show the palette below the color icon.|

## Adding and Removing Client-Side Events



| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
|add_colorChange|Function||Add a handler to the ColorChange event|
|add_colorSelecting|Function||Add a handler to the ColorSelecting event|
|add_loaded|Function||Add a handler to the loaded event|
|remove_colorChange|Function||Remove a handler from the ColorChange event|
|remove_colorSelecting|Function||Remove a handler from the ColorSelecting event|
|remove_loaded|Function||Remove a handler from the loaded event|
