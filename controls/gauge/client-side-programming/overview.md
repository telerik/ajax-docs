---
title: Overview
page_title: Client-side Progamming Overview | RadGauge for ASP.NET AJAX Documentation
description: Overview
slug: gauge/client-side-progamming/overview
tags: overview
published: True
position: 0
---

# Client-side Progamming Overview

This help article lists the **RadGauge**'s public client-side methods that let you access and modify the control's height, width, value, etc. and shows how to reference and use the **RadGauge** client-side object (**Examples 1-2**).

**RadGauge** for ASP.NET AJAX is built on top of the **Kendo UI Data Visualization** [Radial Gauge Widget](http://demos.telerik.com/kendo-ui/radial-gauge/index) and [Linear Gauge Widget](http://demos.telerik.com/kendo-ui/linear-gauge/index). Thus, it exposes the client-side API and methods offered by the [Radial Gauge widget](http://docs.telerik.com/kendo-ui/api/dataviz/radialgauge) and [Linear Gauge widget](http://docs.telerik.com/kendo-ui/api/dataviz/lineargauge) and mainly provides a wrapper and API for working with the gauge on the server (programmatic creation, declaring in the markup).

## Public Methods

>caption Table 1: Common API for RadLiearnGauge and RadRadialGauge

|  **Name**  |  **Description**  |
| ------ | ------ |
| **get_height** |Gets the height of the control.|
| **get_value** |Gets the value of the control.|
| **get_width** |Gets the width of the control.|
| **repaint** |Causes the control to repaint (re-render).|
| **set_height** |Sets the height of the control.|
| **set_value** |Sets the value of the control. Does nothing if an invalid argument is supplied. If the passed value is outside of the range of the gauge the value is set to the min/max.|
| **set_width** |Sets the width of the control.|
| **get_kendoWidget** |Gets a reference to the Kendo Gauge widget.|

**RadGauge** for ASP.NET AJAX, through the Kendo widgets, exposes the [Kendo Linear Gauge client-side methods](http://docs.telerik.com/kendo-ui/api/dataviz/lineargauge#methods) and [Kendo Radial Gauge client-side methods](http://docs.telerik.com/kendo-ui/api/dataviz/radialgauge#methods).

## Get Client-side Object Reference

There are two ways to get a reference to the Kendo Gauge widgets in order to use their API:

* Use the **get_kendoWidget** method the **RadGauge** client-side object exposes. You can get the **RadGauge** object through the **$find()** MS AJAX method.**Example 1:** Get the Kendo Linear and Radial objects through the get_kendoWidget method.

````JavaScript
//Reference Kendo Radial Gauge widget:
var radRadialGaugeObject = $find("<%=RadRadialGauge1.ClientID %>"); //the standard script control object
var kendoRadialGauge = radRadialGaugeObject.get_kendoWidget(); //the Kendo widget

//Reference Kendo Linear Gauge widget:
var radLinearGaugeObject = $find("<%=RadLinearGauge1.ClientID %>"); //the standard script control object
var kendoLinearGauge = radLinearGaugeObject.get_kendoWidget(); //the Kendo widget
````



* Use the standard Kendo approach for getting the widget through the data-attributes of the DOM element:**Example 2:** Get the Kendo Linear and Radial objects through the data attribute of the DOM object.

````JavaScript
//Reference Kendo Radial Gauge widget:
var kendoRadialGauge = $telerik.$("#<%=RadRadialGauge1.ClientID %>").data("kendoRadialGauge");//the jQuery selector must get the Gauge wrapping div element

//Reference Kendo Linear Gauge widget:
var kendoLinearGauge = $telerik.$("#<%=RadLinearGauge1.ClientID %>").data("kendoLinearGauge");//the jQuery selector must get the Gauge wrapping div element
````

>tip  **RadGauge** is an IScriptControl based on MS AJAX and so it instantiates its client-side object (i.e., the Kendo Gauge) during the`Sys.Application.Init`event. This means that the earliest event in which you can reference the gauge widgets is **Sys.Application.Load**.

## See Also

 * [Kendo Linear Gauge Widget First Look](http://demos.telerik.com/kendo-ui/linear-gauge/index)

 * [Kendo Linear Gauge Client-side API Reference](http://docs.telerik.com/kendo-ui/api/dataviz/lineargauge)

 * [Kendo Linear Gauge Client-side Methods](http://docs.telerik.com/kendo-ui/api/dataviz/lineargauge#methods)

 * [Kendo Radial Gauge Widget First Look](http://demos.telerik.com/kendo-ui/radial-gauge/index)

 * [Kendo Radial Gauge Client-side API Reference](http://docs.telerik.com/kendo-ui/api/dataviz/radialgauge)

 * [Kendo Radial Gauge Client-side Methods](http://docs.telerik.com/kendo-ui/api/dataviz/radialgauge#methods)
