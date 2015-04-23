---
title: OnClientColorChange
page_title: OnClientColorChange | RadColorPicker for ASP.NET AJAX Documentation
description: OnClientColorChange
slug: colorpicker/client-side-programming/events/onclientcolorchange
tags: onclientcolorchange
published: True
position: 4
---

# OnClientColorChange





The **OnClientColorChange** client-side event occurs when the user selects a color from the palette.

The event handler receives parameters:

1. The color picker instance that fired the event.

1. Event arguments with the following properties:

	* **get_oldValue**: returns the selected color from just prior to the change.

The example below displays the new and old values.

````ASP.NET
function colorChange(sender, eventArgs)
{
   var myDiv = document.getElementById("myDiv");
   myDiv.innerHTML = 'Color changed from ' + eventArgs.get_oldColor()
       + " to " + sender.get_selectedColor();
}
...
<telerik:RadColorPicker
   ID="RadColorPicker1"
   runat="server"
   Preset="Standard"
   OnClientColorChange="colorChange">
</telerik:RadColorPicker>
````




