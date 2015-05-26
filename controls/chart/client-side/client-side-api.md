---
title: Client-Side API
page_title: Client-Side API | RadChart for ASP.NET AJAX Documentation
description: Client-Side API
slug: chart/client-side/client-side-api
tags: client-side,api
published: True
position: 0
---

# Client-Side API

>caution  **RadChart** has been replaced by [RadHtmlChart](http://www.telerik.com/products/aspnet-ajax/html-chart.aspx), Telerik's client-side charting component. If you are considering **RadChart** for new development, examine the [RadHtmlChart documentation]({%slug htmlchart/overview%}) and [online demos](http://demos.telerik.com/aspnet-ajax/htmlchart/examples/overview/defaultcs.aspx) first to see if it will fit your development needs. If you are already using **RadChart** in your projects, you can migrate to **RadHtmlChart** by following these articles: [Migrating Series]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-series-configuration%}), [Migrating Axes]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-axes-configuration%}), [Migrating Date Axes]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-date-axis-configuration%}), [Migrating Databinding]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-data-binding-configuration%}), [Features parity]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-functionalities---features-and-series-types-parity%}). Support for **RadChart** is discontinued as of **Q3 2014**, but the control will remain in the assembly so it can still be used. We encourage you to use **RadHtmlChart** for new development.

>caution The client-side object and API of the control provide programmatic support for the [zooming and scrolling feature]({%slug chart/features/zooming-and-scrolling%}) and are only available if you have enabled scrolling and / or zooming.

Methods:

**Telerik.Web.UI.RadChart.scroll method**

*Telerik.Web.UI.RadChart.scroll(xScrollOffset, yScrollOffset)*

Scrolls the chart view to a specified position along the XAxis, YAxis, or both based on the specified offset parameters.

**Syntax**

````XML
var chart = $find("<%=RadChart1.ClientID%>");
chart.scroll(0.2, 0.3);
// scroll to top-left corner
chart.scroll(0, 0); 
// scroll to bottom-right corner 
chart.scroll(1,1); 
// scroll only by XAxis 
chart.scroll(0.4); 
// scroll only by YAxis 
chart.scroll(chart.get_xScrollOffset(),0.4);
````

**Remarks**

The offset uses the top-left corner of the plotArea as a starting point i.e. (xAxisOffset=0, yAxisOffset=0) pair represents the top-left corner of the plotArea while (xAxisOffset=1, yAxisOffset=1) - the bottom-right corner of the plotArea. Offset is a float value between 0 and 1.

**Telerik.Web.UI.RadChart.zoom method**

*Telerik.Web.UI.RadChart.zoom(xScale, yScale, xScrollOffset, yScrollOffset)*

Zooms the chart view according to a specified scaling factor by the XAxis, the YAxis, or both. You can optionally pass XScrollOffset / YScrollOffset arguments so the scaled view scrolls to a specified position as well.

**Syntax**

````XML
//scale XAxis by factor 3 
var chart = $find("<%=RadChart1.ClientID%>"); 
chart.zoom(3);
//scale XAxis by factor 3 and YAXis by factor 2 
chart.zoom(3, 2); 
//scale only YAxis by factor 2 
chart.zoom(chart.get_xScale(), 2); 
//scale XAxis by factor 3 and YAXis by factor 2 
//scroll to bottom-right corner of the plotArea 
chart.zoom(3, 2, 1, 1);
````

**Remarks**

The offset uses the top-left corner of the plotArea as a starting point i.e. (xAxisOffset=0, yAxisOffset=0) pair represents the top-left corner of the plotArea while (xAxisOffset=1, yAxisOffset=1) - the bottom-right corner of the plotArea. Offset is a float value between 0 and 1.

**Telerik.Web.UI.RadChart.zoomOut method**

*Telerik.Web.UI.RadChart.zoomOut()*

RadChart provides integrated history support for the zooming actions and this method zooms out the current chart view to the previous scaling step and also restores the scrolled position.

**Syntax**

````XML
var chart = $find("<%=RadChart1.ClientID%>");
chart.zoomOut();
````

**Telerik.Web.UI.RadChart.resetZoom method**

*Telerik.Web.UI.RadChart.resetZoom()*

Resets the scaling factors by XAxis and YAxis to 1 (no scaling applied).

**Syntax**

````XML
var chart = $find("<%=RadChart1.ClientID%>");
chart.resetZoom();
````

Properties:

>caution To get or set property values for client API properties, you must call property accessor methods that are named with the get_ and set_ prefixes. For example, to get or set a value for a property such as cancel, you call the get_cancel or set_cancel methods.

**Telerik.Web.UI.RadChart xScrollOffset Property**

Gets a value indicating the XAxis scroll offset ratio.

**Syntax**

````XML
var chart = $find("<%=RadChart1.ClientID%>");
var offset = chart.get_xScrollOffset();
````

**Return Value**

The XAxis scroll offset ratio as a float value between 0 and 1.

The offset uses the top-left corner of the plotArea as a starting point i.e. (xAxisOffset=0, yAxisOffset=0) pair represents the top-left corner of the plotArea while (xAxisOffset=1, yAxisOffset=1) - the bottom-right corner of the plotArea.

**Telerik.Web.UI.RadChart yScrollOffset Property**

Gets a value indicating the YAxis scroll offset ratio.

**Syntax**

````XML
var chart = $find("<%=RadChart1.ClientID%>"); 
var offset = chart.get_yScrollOffset();
````

**Return Value**

The YAxis scroll offset ratio as a float value between 0 and 1.

The offset uses the top-left corner of the plotArea as a starting point i.e. (xAxisOffset=0, yAxisOffset=0) pair represents the top-left corner of the plotArea while (xAxisOffset=1, yAxisOffset=1) - the bottom-right corner of the plotArea.

**Telerik.Web.UI.RadChart xScale Property**

Gets a value indicating the plotarea scale factor by XAxis.

**Syntax**

````XML
var chart = $find("<%=RadChart1.ClientID%>"); 
var scale = chart.get_xScale();
````

**Return Value**

The XAxis scale factor as a float value greater or equal to 1.

**Telerik.Web.UI.RadChart yScale Property**

Gets a value indicating the plotarea scale factor by YAxis.

**Syntax**

````XML
var chart = $find("<%=RadChart1.ClientID%>"); 
var scale = chart.get_yScale();
````

**Return Value**

The YAxis scale factor as a float value greater or equal to 1.
