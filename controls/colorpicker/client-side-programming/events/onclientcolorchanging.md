---
title: OnClientColorChanging
page_title: OnClientColorChanging | RadColorPicker for ASP.NET AJAX Documentation
description: OnClientColorChanging
slug: colorpicker/client-side-programming/events/onclientcolorchanging
tags: onclientcolorchanging
published: True
position: 3
---

# OnClientColorChanging





The **OnClientColorChanging** client-side event occurs just before the user selects a color from the palette. It can also be cancelled via code.

The event handler receives parameters:

1. The color picker instance that fired the event.

1. Event arguments with the following properties:

	* **get_oldColor**: returns the selected color from just prior to the change.
	
	* **get_newColor**: returns the selected color from after the change.
	
	* **set_cancel(shouldCancel)**: determines whether the event will be cancelled according to the boolean value passed as a parameter.

The example below shows how to ask the user for confirmation when selecting a new color:

````ASP.NET
<telerik:RadColorPicker
   ID="RadColorPicker1"
   runat="server"
   SelectedColor="Red"
   OnClientColorChanging="OnClientColorChanging">
</telerik:RadColorPicker>
````



````JavaScript
function OnClientColorChanging(sender, eventArgs)
{
    alert("old color was: " + eventArgs.get_oldColor());
    alert("new color is: " + eventArgs.get_newColor());
    var shouldContinue = confirm("do you want to change the color to the new one?");
    eventArgs.set_cancel(!shouldContinue);
}
````


