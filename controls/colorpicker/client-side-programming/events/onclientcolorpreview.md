---
title: OnClientColorPreview
page_title: OnClientColorPreview | UI for ASP.NET AJAX Documentation
description: OnClientColorPreview
slug: colorpicker/client-side-programming/events/onclientcolorpreview
tags: onclientcolorpreview
published: True
position: 2
---

# OnClientColorPreview



## 

The __OnClientColorPreview__ client-side event occurs as the mouse hovers over a color box within the palette.

The event handler receives parameters:

1. The color picker instance that fired the event.

1. Event arguments with the following properties:

1. __get_color__: returns the color of the color box where the mouse is hovering.

The example below displays the value of the color picker as the mouse passes over each color box.

````ASPNET
	function colorPreview(sender, eventArgs)
	{
	   var myDiv = document.getElementById("myDiv");
	   myDiv.innerHTML = 'Color selecting: ' + eventArgs.get_color();
	}
	...
	<telerik:RadColorPicker
	   ID="RadColorPicker1"
	   runat="server"
	   Preset="Standard"
	   OnClientColorPreview="colorPreview">
	</telerik:RadColorPicker>
````


