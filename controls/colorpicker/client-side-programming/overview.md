---
title: Client-side Programming Overview
page_title: Overview | RadColorPicker for ASP.NET AJAX Documentation
description: Overview
slug: colorpicker/client-side-programming/overview
tags: overview
published: True
position: 0
---

# Client-side Programming Overview



RadColorPicker provides a flexible client-side API that allows you to interact with the color picker on the client.

## Getting the RadColorPicker client-side object



````JavaScript
var colorPicker = $find("<%= RadColorPicker1.ClientID %>");
````



## Client-Side Properties

All the public properties that are defined on the server are available on the client-side object. You can get/set a property value on the client using the following notation:

RadColorPicker1.get_[PROPERTY_NAME];RadColorPicker1.set_[PROPERTY_NAME];

For example to get/set the SelectedColor property using the client-side object:

````JavaScript
var colorPicker = $find('<%= RadColorPicker1.ClientID%>');
colorPicker.set_selectedColor("#FF0000");
var selectedColor = colorPicker.get_selectedColor();
````



# See Also

 * [ColorPicker Object]({%slug colorpicker/client-side-programming/colorpicker-object%})

 * [Overview]({%slug colorpicker/client-side-programming/events/overview%})

 * [OnClientColorChange]({%slug colorpicker/client-side-programming/events/onclientcolorchange%})

 * [OnClientColorPreview]({%slug colorpicker/client-side-programming/events/onclientcolorpreview%})

 * [OnClientLoad]({%slug colorpicker/client-side-programming/events/onclientload%})
