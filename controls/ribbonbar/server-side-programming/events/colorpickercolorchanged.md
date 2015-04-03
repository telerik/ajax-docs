---
title: ColorPickerColorChanged
page_title: ColorPickerColorChanged | UI for ASP.NET AJAX Documentation
description: ColorPickerColorChanged
slug: ribbonbar/server-side-programming/events/colorpickercolorchanged
tags: colorpickercolorchanged
published: True
position: 14
---

# ColorPickerColorChanged



## 

The server-side __OnColorPickerColorChanged__ event occurs when the user changes the color in the ColorPicker, causing a postback.

The event handler function receives two arguments:

1. The __RadRibbonBar__ which has fired the event. This argument is of type object, but can be cast to the __RadRibbonBar__ type.

1. An __EventArgs__ object.This object has a number of properties for handling the request for new items

* __ColorPicker__ – the ColorPicker which fired the event.

* __Group__ – the group in which the DropDown is placed.

* __Color__ – the new selected color of the ColorPicker.
