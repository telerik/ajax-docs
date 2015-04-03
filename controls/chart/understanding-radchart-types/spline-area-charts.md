---
title: Spline Area Charts
page_title: Spline Area Charts | UI for ASP.NET AJAX Documentation
description: Spline Area Charts
slug: chart/understanding-radchart-types/spline-area-charts
tags: spline,area,charts
published: True
position: 10
---

# Spline Area Charts



>caution  __RadChart__ has been replaced by[RadHtmlChart](http://www.telerik.com/products/aspnet-ajax/html-chart.aspx), Telerik's client-side charting component.	If you are considering __RadChart__ for new development, examine the[RadHtmlChart documentation](ffd58685-7423-4c50-9554-f92c70a75138)and[online demos](http://demos.telerik.com/aspnet-ajax/htmlchart/examples/overview/defaultcs.aspx)first to see if it will fit your development needs.	If you are already using __RadChart__ in your projects, you can migrate to __RadHtmlChart__ by following these articles:[Migrating Series](2f393f28-bc31-459c-92aa-c3599785f6cc),[Migrating Axes](3f1bea81-87b9-4324-b0d2-d13131031048),[Migrating Date Axes](93226130-bc3c-4c53-862a-f9e17b2eb7dd),[Migrating Databinding](d6c5e2f1-280c-4fb0-b5b0-2f507697511d),[Feature parity](010dc716-ce38-480b-9157-572e0f140169).	Support for __RadChart__ is discontinued as of __Q3 2014__ , but the control will remain in the assembly so it can still be used.	We encourage you to use __RadHtmlChart__ for new development.
>


## 

Spline charts allow you to take a limited set of known data points and approximate intervening values. In the Spline Area Chart the area defined by the spline curve is filled. In practice you define a series of chart items and RadChart does the rest. Each series overlays the preceding, from back to front.

To create a simple vertical Spline Area Chart set the SeriesOrientation property to __Vertical__. Set the RadChart DefaultType property or ChartSeries.Type to __SplineArea__. Create one or more series and add chart items with Y or X and Y values.
>caption 

![Veritical Spline Area Chart](images/radchartelements26.png)



To create a simple horizontal Spline Area Chart set the SeriesOrientation property to __Horizontal__. Set the RadChart DefaultType property or ChartSeries.Type to __SplineArea__. Create a series and add chart items with Y or X and Y values.


>caption 

![Horizontal Spline Area Chart](images/radchartelements27.png)
