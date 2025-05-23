---
title: Image Maps
page_title: Image Maps - RadChart
description: Check our Web Forms article about Image Maps.
slug: chart/advanced-topics/image-maps
tags: image,maps
published: True
position: 0
---

# Image Maps

>caution **RadChart** has been deprecated since Q3 2014 and is no longer recommended for use, as it does not support modern browsers. We strongly recommend using [RadHtmlChart](https://www.telerik.com/products/aspnet-ajax/html-chart.aspx), Telerik's modern client-side charting component. 
>To transition from RadChart to RadHtmlChart, refer to the following migration articles:
> - [Migrating Series]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-series-configuration%})
> - [Migrating Axes]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-axes-configuration%})
> - [Migrating Date Axes]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-date-axis-configuration%})
> - [Migrating Databinding]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-data-binding-configuration%})
> - [Features parity]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-functionalities---features-and-series-types-parity%})
>Explore the [RadHtmlChart documentation]({%slug htmlchart/overview%}) and online demos to determine how it fits your development needs.

Image maps are visual areas within the chart that display tool tips and can be clicked on to navigate. Image map areas are represented by the ActiveRegion property.ActiveRegion appears for many of the UI elements in the chart including labels, chart series, chart series items, chart title, legend, axis items and the empty series message. Image maps can be used to implement [Drill-Down]({%slug chart/advanced-topics/drill-down%}) user interfaces.

The ActiveRegion property has three significant properties:

* Attributes: Enter HTML attributes here. The most common use of this property is to specify the Target attribute.Target may be specified as **_blank** (target URL will open in a new window), **_self** (target URL will open in the same frame), **_parent** (target URL will open in the parent frameset) and **_top** (target URL will open in the topmost frame).

* ToolTip: A text description of an area in the image map that displays when the mouse hovers over it.

* Url: The address of a web page in the project or an external web site. When an area in the image map is clicked, the page navigates to the address in the Url.

The ActiveRegion property has server side methods:

GotoURL: Navigates to the address specified in Url.

CheckPoint: Checks if a point lies inside a region.

The ActiveRegion property also responds to the Click event.

## Create an Image Map

To create an image map, locate an ActiveRegion property for the area of the chart you are interested in. In the Url property specify a page within your web project or an external web address. In the ToolTip enter descriptive text that lets the user know what will happen if they click that area of the chart. You may specify Attributes if you need the user to navigate to other than the current web page.

Below is the ActiveRegion for a [chart series item]({%slug chart/understanding-radchart-elements/series-items%}). If the mouse hovers over that area in the chart the tool tip "Sales" will display. If the area is clicked, the Telerik web site will display in the same frame (the default target behavior).

![ActiveRegion](images/radchart-advancedimagemap001.png)

>note The **ActiveRegion** resolves to a standard HTML "map" tag that defines the area within the chart image that will respond to the mouse.

````XML
<map id='imRadChart1' name='imRadChart1'><areashape="poly" href="[https://www.telerik.com](https://www.telerik.com)" coords="176,168,247,167,248,199,227,226,198,236" alt="Sales" title="Sales" /></map>
````

# See Also

 * [Drill-Down]({%slug chart/advanced-topics/drill-down%})

 
