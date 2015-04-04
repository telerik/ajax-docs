---
title: Layout
page_title: Layout | UI for ASP.NET AJAX Documentation
description: Layout
slug: slider/getting-started/layout
tags: layout
published: True
position: 3
---

# Layout



## 

Set the __Orientation__ property to display the slider __Vertical__ or __Horizontal__.
>caption 

![](images/slider001.png)

````ASPNET
	    <telerik:radslider id="RadSlider1" runat="server" orientation="Horizontal" />
	    <telerik:radslider id="RadSlider2" runat="server" orientation="Vertical" />
````





````C#
	
	        RadSlider1.Orientation = Telerik.Web.UI.Orientation.Horizontal;
	        RadSlider2.Orientation = Telerik.Web.UI.Orientation.Vertical;
	
````
````VB
	
	        RadSlider1.Orientation = Telerik.Web.UI.Orientation.Horizontal
	        RadSlider2.Orientation = Telerik.Web.UI.Orientation.Vertical
	
````


# See Also

 * [Live Demo: "Orientation"](http://demos.telerik.com/aspnet-ajax/Slider/Examples/Orientation/DefaultCS.aspx)
