---
title: ColorPickerColorChanged
page_title: ColorPickerColorChanged | RadRibbonBar for ASP.NET AJAX Documentation
description: ColorPickerColorChanged
slug: ribbonbar/server-side-programming/events/colorpickercolorchanged
tags: colorpickercolorchanged
published: True
position: 14
---

# ColorPickerColorChanged



## 

The server-side **OnColorPickerColorChanged** event occurs when the user changes the color in the ColorPicker, causing a postback.

The event handler function receives two arguments:

1. The **RadRibbonBar** which has fired the event. This argument is of type object, but can be cast to the **RadRibbonBar** type.

1. An **EventArgs** object.This object has a number of properties for handling the request for new items

* **ColorPicker** – the ColorPicker which fired the event.

* **Group** – the group in which the DropDown is placed.

* **Color** – the new selected color of the ColorPicker.
