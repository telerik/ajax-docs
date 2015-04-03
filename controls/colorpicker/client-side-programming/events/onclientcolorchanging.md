---
title: OnClientColorChanging
page_title: OnClientColorChanging | UI for ASP.NET AJAX Documentation
description: OnClientColorChanging
slug: colorpicker/client-side-programming/events/onclientcolorchanging
tags: onclientcolorchanging
published: True
position: 3
---

# OnClientColorChanging



## 

The __OnClientColorChanging__client-side event occurs just before the user selects a color from the palette. It can also be cancelled via code.

The event handler receives parameters:

1. The color picker instance that fired the event.

1. Event arguments with the following properties:

1. __get_oldColor__: returns the selected color from just prior to the change.

1. __get_newColor__: returns the selected color from after the change.

1. __set_cancel(shouldCancel)__: determines whether the event will be cancelled according to the boolean value passed as a parameter.

The example below shows how to ask the user for confirmation when selecting a new color:

````ASPNET
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


