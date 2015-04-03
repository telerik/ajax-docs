---
title: Client-Side API
page_title: Client-Side API | UI for ASP.NET AJAX Documentation
description: Client-Side API
slug: chart/client-side/client-side-api
tags: client-side,api
published: True
position: 0
---

# Client-Side API



>caution  __RadChart__ has been replaced by[RadHtmlChart](http://www.telerik.com/products/aspnet-ajax/html-chart.aspx), Telerik's client-side charting component.	If you are considering __RadChart__ for new development, examine the[RadHtmlChart documentation](ffd58685-7423-4c50-9554-f92c70a75138)and[online demos](http://demos.telerik.com/aspnet-ajax/htmlchart/examples/overview/defaultcs.aspx)first to see if it will fit your development needs.	If you are already using __RadChart__ in your projects, you can migrate to __RadHtmlChart__ by following these articles:[Migrating Series](2f393f28-bc31-459c-92aa-c3599785f6cc),[Migrating Axes](3f1bea81-87b9-4324-b0d2-d13131031048),[Migrating Date Axes](93226130-bc3c-4c53-862a-f9e17b2eb7dd),[Migrating Databinding](d6c5e2f1-280c-4fb0-b5b0-2f507697511d),[Feature parity](010dc716-ce38-480b-9157-572e0f140169).	Support for __RadChart__ is discontinued as of __Q3 2014__ , but the control will remain in the assembly so it can still be used.	We encourage you to use __RadHtmlChart__ for new development.
>


## 

>caution The client-side object and API of the control provide programmatic support for the[zooming and scrolling feature]({%slug chart/features/zooming-and-scrolling%})and are only available if you have enabled scrolling and / or zooming.
>


Methods:

__Telerik.Web.UI.RadChart.scroll method__

*Telerik.Web.UI.RadChart.scroll(xScrollOffset, yScrollOffset)*

Scrolls the chart view to a specified position along the XAxis, YAxis, or both based on the specified offset parameters.

__Syntax__

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



__Remarks__

The offset uses the top-left corner of the plotArea as a starting point i.e. (xAxisOffset=0, yAxisOffset=0) pair represents the top-left corner of the plotArea while (xAxisOffset=1, yAxisOffset=1) - the bottom-right corner of the plotArea. Offset is a float value between 0 and 1.



__Telerik.Web.UI.RadChart.zoom method__

*Telerik.Web.UI.RadChart.zoom(xScale, yScale, xScrollOffset, yScrollOffset)*

Zooms the chart view according to a specified scaling factor by the XAxis, the YAxis, or both. You can optionally pass XScrollOffset / YScrollOffset arguments so the scaled view scrolls to a specified position as well.

__Syntax__

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



__Remarks__

The offset uses the top-left corner of the plotArea as a starting point i.e. (xAxisOffset=0, yAxisOffset=0) pair represents the top-left corner of the plotArea while (xAxisOffset=1, yAxisOffset=1) - the bottom-right corner of the plotArea. Offset is a float value between 0 and 1.



__Telerik.Web.UI.RadChart.zoomOut method__

*Telerik.Web.UI.RadChart.zoomOut()*

RadChart provides integrated history support for the zooming actions and this method zooms out the current chart view to the previous scaling step and also restores the scrolled position.

__Syntax__

````XML
	    var chart = $find("<%=RadChart1.ClientID%>");
	    chart.zoomOut();
````





__Telerik.Web.UI.RadChart.resetZoom method__

*Telerik.Web.UI.RadChart.resetZoom()*

Resets the scaling factors by XAxis and YAxis to 1 (no scaling applied).

__Syntax__

````XML
	    var chart = $find("<%=RadChart1.ClientID%>");
	    chart.resetZoom();
````









Properties:

>caution To get or set property values for client API properties, you must call property accessor methods that are named with the get_ and set_ prefixes. For example, to get or set a value for a property such as cancel, you call the get_cancel or set_cancel methods.
>


__Telerik.Web.UI.RadChart xScrollOffset Property__

Gets a value indicating the XAxis scroll offset ratio.

__Syntax__

````XML
	    var chart = $find("<%=RadChart1.ClientID%>");
	    var offset = chart.get_xScrollOffset();
````



__Return Value__

The XAxis scroll offset ratio as a float value between 0 and 1.



The offset uses the top-left corner of the plotArea as a starting pointi.e. (xAxisOffset=0, yAxisOffset=0) pair represents the top-left corner of the plotArea while (xAxisOffset=1, yAxisOffset=1) - the bottom-right corner of the plotArea.



__Telerik.Web.UI.RadChart yScrollOffset Property__

Gets a value indicating the YAxis scroll offset ratio.

__Syntax__

````XML
	    var chart = $find("<%=RadChart1.ClientID%>"); 
	    var offset = chart.get_yScrollOffset();
````



__Return Value__

The YAxis scroll offset ratio as a float value between 0 and 1.

The offset uses the top-left corner of the plotArea as a starting pointi.e. (xAxisOffset=0, yAxisOffset=0) pair represents the top-left corner of the plotArea while (xAxisOffset=1, yAxisOffset=1) - the bottom-right corner of the plotArea.



__Telerik.Web.UI.RadChart xScale Property__

Gets a value indicating the plotarea scale factor by XAxis.

__Syntax__

````XML
	    var chart = $find("<%=RadChart1.ClientID%>"); 
	    var scale = chart.get_xScale();
````



__Return Value__

The XAxis scale factor as a float value greater or equal to 1.



__Telerik.Web.UI.RadChart yScale Property__

Gets a value indicating the plotarea scale factor by YAxis.

__Syntax__

````XML
	    var chart = $find("<%=RadChart1.ClientID%>"); 
	    var scale = chart.get_yScale();
````



__Return Value__

The YAxis scale factor as a float value greater or equal to 1.
