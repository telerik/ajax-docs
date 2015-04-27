---
title: Behavior
page_title: Behavior | RadSlider for ASP.NET AJAX Documentation
description: Behavior
slug: slider/getting-started/behavior
tags: behavior
published: True
position: 2
---

# Behavior



## 

To control slider behavior, set the **MinimumValue, MaximumValue** and **Value** properties. **MinimumValue**and**MaximumValue** limit the lower and upper bounds that **Value** may be set at.

>caution MaximumValue must be greater than MinimumValue to avoid generating an error.
>


In the example below, **Value** can not be less than one or more than twelve.

The **LargeChange** property controls the increment of the **Value**. For example, if **Value** is 50,**LargeChange** is 10 and the user clicks to the right of the drag handle, the new **Value** will be 60.

The **SelectedRegionStartValue** property determines from which value will start the selected region of the slider. By default it is set to the minimum value of the slider.

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


# See Also

 * [Live demo "Setting Value and Range"](http://demos.telerik.com/aspnet-ajax/Slider/Examples/ValueAndRange/DefaultCS.aspx)

 * [Live Demo "Slider Steps"](http://demos.telerik.com/aspnet-ajax/slider/examples/slidersteps/defaultcs.aspx)
