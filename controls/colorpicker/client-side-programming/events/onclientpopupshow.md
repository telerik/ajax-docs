---
title: OnClientPopUpShow
page_title: OnClientPopUpShow | UI for ASP.NET AJAX Documentation
description: OnClientPopUpShow
slug: colorpicker/client-side-programming/events/onclientpopupshow
tags: onclientpopupshow
published: True
position: 5
---

# OnClientPopUpShow



## 

The __OnClientPopUpShow__client-side event occurs after the pop-up palette of a color picker with __ShowIcon__set to "__true__" shows.

The event handler receives parameters:

1. The color picker instance that fired the event.

1. Event arguments. The parameter has no methods for this event.

The example below sets the color value to Red.

````XML
	function OnClientPopUpShow (sender, eventArgs)
	{
	  sender.set_selectedColor("#FF0000");
	}
	...
	<telerik:RadColorPicker
	  ID="RadColorPicker1"
	  runat="server"
	  ShowIcon="true"
	  OnClientPopUpShow="OnClientPopUpShow">
	</telerik:RadColorPicker>
````




