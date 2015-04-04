---
title: Handles
page_title: Handles | UI for ASP.NET AJAX Documentation
description: Handles
slug: slider/getting-started/handles
tags: handles
published: True
position: 5
---

# Handles



## Handles Visibility

Using the __ShowDragHandle__, __ShowDecreaseHandle__, __ShowIncreaseHandle__ properties you can control which of the handles will be displayed. By default all the handles are displayed.
>caption 

![](images/slider002.png)

Using the __IsSelectionRangeEnabled__, __SelectionStart__, __SelectionEnd__ properties you can configure the slider to display two drag handles instead of one.

````ASPNET
	    <telerik:radslider id="RadSlider1" runat="server" orientation="horizontal" showdecreasehandle="true"
	        showincreasehandle="true" showdraghandle="false" skin="Office2007" />
	    <br />
	    <telerik:radslider id="RadSlider2" runat="server" orientation="horizontal" showdecreasehandle="false"
	        showincreasehandle="false" showdraghandle="true" skin="Office2007" />
````



>tabbedCode

````C#
	
	        RadSlider1.ShowDecreaseHandle = true;
	        RadSlider1.ShowIncreaseHandle = true;
	        RadSlider1.ShowDragHandle = false;
	        RadSlider2.ShowDecreaseHandle = false;
	        RadSlider2.ShowIncreaseHandle = false;
	        RadSlider2.ShowDragHandle = true;
	
````
````VB
	
	        RadSlider1.ShowDecreaseHandle = True
	        RadSlider1.ShowIncreaseHandle = True
	        RadSlider1.ShowDragHandle = False
	        RadSlider2.ShowDecreaseHandle = False
	        RadSlider2.ShowIncreaseHandle = False
	        RadSlider2.ShowDragHandle = True
	
````
>end

## Handles Tooltips

Tooltips are automatically supplied to all three handles and are controlled by the __DecreaseText__, __IncreaseText__ and __DragText__ properties and have the default values "Decrease", "Increase" and "Drag", respectively.
>caption 

![](images/slider003.png)

````ASPNET
	    <telerik:radslider id="RadSlider1" runat="server" decreasetext="Lower" increasetext="Raise"
	        dragtext="Change" />
````



>tabbedCode

````C#
	
	        RadSlider1.DecreaseText = "Lower";
	        RadSlider1.IncreaseText = "Raise";
	        RadSlider1.DragText = "Change";
	
````
````VB
	
	        RadSlider1.DecreaseText = "Lower"
	        RadSlider1.IncreaseText = "Raise"
	        RadSlider1.DragText = "Change"
	
````
>end

# See Also

 * [Live Demo "Handle Customizations"](http://demos.telerik.com/aspnet-ajax/Slider/Examples/HandlesCustomization/DefaultCS.aspx)

 * [Live demo "Range Slider"](http://demos.telerik.com/aspnet-ajax/Slider/Examples/RangeSlider/DefaultCS.aspx)
