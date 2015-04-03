---
title: OnClientLoad
page_title: OnClientLoad | UI for ASP.NET AJAX Documentation
description: OnClientLoad
slug: colorpicker/client-side-programming/events/onclientload
tags: onclientload
published: True
position: 1
---

# OnClientLoad



## 

The __OnClientLoad__client-side event occurs after the color picker loads on the page.

The event handler receives parameters:

1. The color picker instance that fired the event.

1. Event arguments. The parameter has no methods for this event.

The example below sets the color value to Red.

````ASPNET
	function clientLoad(sender, eventArgs)
	{
	   sender.set_selectedColor("#FF0000");
	}
	...
	<telerik:RadColorPicker
	   ID="RadColorPicker1"
	   runat="server"
	   Preset="Standard"
	   OnClientLoad="clientLoad">
	</telerik:RadColorPicker>
````


