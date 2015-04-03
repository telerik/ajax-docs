---
title: Client-side Progamming Overview
page_title: Overview | UI for ASP.NET AJAX Documentation
description: Overview
slug: gauge/client-side-progamming/overview
tags: overview
published: True
position: 0
---

# Client-side Progamming Overview



This help article lists the __RadGauge__'s public client-side methods that let you access and modify the control's height, width, value, etc. and shows how to reference and use the __RadGauge__ client-side object (__Examples 1-2__).

__RadGauge__ for ASP.NET AJAX is built on top of the __Kendo UI Data Visualization____Radial Gauge Widgethttp://demos.telerik.com/kendo-ui/radial-gauge/index__ and __Linear Gauge Widgethttp://demos.telerik.com/kendo-ui/linear-gauge/index__. Thus, it exposes the client-side API and methods offered by the [Radial Gauge widget](http://docs.telerik.com/kendo-ui/api/dataviz/radialgauge) and [Linear Gauge widget](http://docs.telerik.com/kendo-ui/api/dataviz/lineargauge) and mainly provides a wrapper and API for working with the gauge on the server (programmatic creation, declaring in the markup).

## Public Methods


>caption Common API for RadLiearnGauge and RadRadialGauge

|  __Name__  |  __Description__  |
| ------ | ------ |
| __get_height__ |Gets the height of the control.|
| __get_value__ |Gets the value of the control.|
| __get_width__ |Gets the width of the control.|
| __repaint__ |Causes the control to repaint (re-render).|
| __set_height__ |Sets the height of the control.|
| __set_value__ |Sets the value of the control. Does nothing if an invalid argument is supplied. If the passed value is outside of the range of the gauge the value is set to the min/max.|
| __set_width__ |Sets the width of the control.|
| __get_kendoWidget__ |Gets a reference to the Kendo Gauge widget.|

__RadGauge__ for ASP.NET AJAX, through the Kendo widgets, exposes the [Kendo Linear Gauge client-side methods](http://docs.telerik.com/kendo-ui/api/dataviz/lineargauge#methods) and [Kendo Radial Gauge client-side methods](http://docs.telerik.com/kendo-ui/api/dataviz/radialgauge#methods).

## Get Client-side Object Reference

There are two ways to get a reference to the Kendo Gauge widgets in order to use their API:

* Use the __get_kendoWidget__ method the __RadGauge__ client-side object exposes. You can get the __RadGauge__ object through the __$find()__ MS AJAX method.__Example 1:__ Get the Kendo Linear and Radial objects through the get_kendoWidget method.

````JavaScript
				//Reference Kendo Radial Gauge widget:
				var radRadialGaugeObject = $find("<%=RadRadialGauge1.ClientID %>"); //the standard script control object
				var kendoRadialGauge = radRadialGaugeObject.get_kendoWidget(); //the Kendo widget
	
				//Reference Kendo Linear Gauge widget:
				var radLinearGaugeObject = $find("<%=RadLinearGauge1.ClientID %>"); //the standard script control object
				var kendoLinearGauge = radLinearGaugeObject.get_kendoWidget(); //the Kendo widget
````



* Use the standard Kendo approach for getting the widget through the data-attributes of the DOM element:__Example 2:__ Get the Kendo Linear and Radial objects through the data attribute of the DOM object.

````JavaScript
				//Reference Kendo Radial Gauge widget:
				var kendoRadialGauge = $telerik.$("#<%=RadRadialGauge1.ClientID %>").data("kendoRadialGauge");//the jQuery selector must get the Gauge wrapping div element
	
				//Reference Kendo Linear Gauge widget:
				var kendoLinearGauge = $telerik.$("#<%=RadLinearGauge1.ClientID %>").data("kendoLinearGauge");//the jQuery selector must get the Gauge wrapping div element
````



>note  __RadGauge__ is an IScriptControl based on MS AJAX and so it instantiates its client-side object (i.e., the Kendo Gauge) during the`Sys.Application.Init`event. This means that the earliest event in which you can reference the gauge widgets is __Sys.Application.Load__ .
>


# See Also

 * [Kendo Linear Gauge Widget First Look](http://demos.telerik.com/kendo-ui/linear-gauge/index)

 * [Kendo Linear Gauge Client-side API Reference](http://docs.telerik.com/kendo-ui/api/dataviz/lineargauge)

 * [Kendo Linear Gauge Client-side Methods](http://docs.telerik.com/kendo-ui/api/dataviz/lineargauge#methods)

 * [Kendo Radial Gauge Widget First Look](http://demos.telerik.com/kendo-ui/radial-gauge/index)

 * [Kendo Radial Gauge Client-side API Reference](http://docs.telerik.com/kendo-ui/api/dataviz/radialgauge)

 * [Kendo Radial Gauge Client-side Methods](http://docs.telerik.com/kendo-ui/api/dataviz/radialgauge#methods)
