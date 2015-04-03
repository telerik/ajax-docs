---
title: Behavior
page_title: Behavior | UI for ASP.NET AJAX Documentation
description: Behavior
slug: slider/getting-started/behavior
tags: behavior
published: True
position: 2
---

# Behavior



## 

To control slider behavior, set the __MinimumValue,____MaximumValue__ and __Value__ properties. __MinimumValue__and__MaximumValue__ limit the lower and upper bounds that __Value__ may be set at.

>caution MaximumValue must be greater than MinimumValue to avoid generating an error.
>


In the example below, __Value__ can not be less than one or more than twelve.

The __LargeChange__ property controls the increment of the __Value__. For example, if __Value__ is 50,__LargeChange__ is 10 and the user clicks to the right of the drag handle, the new __Value__ will be 60.

The __SelectedRegionStartValue__ property determines from which value will start the selected region of the slider. By default it is set to the minimum value of the slider.

````ASPNET
	     
	<telerik:RadSlider
	   ID="RadSlider1"
	   runat="server"
	   MaximumValue="12"
	   MinimumValue="-12"
	   Value="2"
	   LargeChange ="10"
	   SelectedRegionStartValue="0"
	/> 
				
````



>tabbedCode

````C#
	
	        RadSlider1.MinimumValue = -12;
	        RadSlider1.MaximumValue = 12;
	        RadSlider1.Value = 2;
	        RadSlider1.LargeChange = 10;
	        RadSlider1.SelectedRegionStartValue = 0;
````



````VB
	
	        RadSlider1.MinimumValue = -12
	        RadSlider1.MaximumValue = 12
	        RadSlider1.Value = 2
	        RadSlider1.LargeChange = 10
	        RadSlider1.SelectedRegionStartValue = 0
````


>end

# See Also

 * [Live demo "Setting Value and Range"](http://demos.telerik.com/aspnet-ajax/Slider/Examples/ValueAndRange/DefaultCS.aspx)

 * [Live Demo "Slider Steps"](http://demos.telerik.com/aspnet-ajax/slider/examples/slidersteps/defaultcs.aspx)
