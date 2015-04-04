---
title: Mouse Wheel Support
page_title: Mouse Wheel Support | UI for ASP.NET AJAX Documentation
description: Mouse Wheel Support
slug: slider/getting-started/mouse-wheel-support
tags: mouse,wheel,support
published: True
position: 6
---

# Mouse Wheel Support



## 

Mouse wheel support is enabled by the __TrackMouseWheel__ property when __True__ (the default) and by the __SmallChange__ property that controls the increments the slider moves in response to the mouse wheel. Populate the __SmallChange__ property when you want the slider to respond in defined steps. For example, for a slider with [MinimumValue and MaximumValue]({%slug slider/getting-started/behavior%}) between 0-100 and __SmallChange__ set to 5, the the slider can display values 0, 5, 10, 15, ... 95, 100. __SmallChange__ defaults to 1.

````ASPNET
	    <telerik:radslider id="RadSlider1" runat="server" trackmousewheel="true" smallchange="5" />
````





````C#
	
	        RadSlider1.TrackMouseWheel = true; 
	        RadSlider1.SmallChange = 5;
	
````
````VB
	
	        RadSlider1.TrackMouseWheel = True
	        RadSlider1.SmallChange = 5
	
````

