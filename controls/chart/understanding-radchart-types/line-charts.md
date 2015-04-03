---
title: Line Charts
page_title: Line Charts | UI for ASP.NET AJAX Documentation
description: Line Charts
slug: chart/understanding-radchart-types/line-charts
tags: line,charts
published: True
position: 13
---

# Line Charts



>caution  __RadChart__ has been replaced by[RadHtmlChart](http://www.telerik.com/products/aspnet-ajax/html-chart.aspx), Telerik's client-side charting component.	If you are considering __RadChart__ for new development, examine the[RadHtmlChart documentation](ffd58685-7423-4c50-9554-f92c70a75138)and[online demos](http://demos.telerik.com/aspnet-ajax/htmlchart/examples/overview/defaultcs.aspx)first to see if it will fit your development needs.	If you are already using __RadChart__ in your projects, you can migrate to __RadHtmlChart__ by following these articles:[Migrating Series](2f393f28-bc31-459c-92aa-c3599785f6cc),[Migrating Axes](3f1bea81-87b9-4324-b0d2-d13131031048),[Migrating Date Axes](93226130-bc3c-4c53-862a-f9e17b2eb7dd),[Migrating Databinding](d6c5e2f1-280c-4fb0-b5b0-2f507697511d),[Feature parity](010dc716-ce38-480b-9157-572e0f140169).	Support for __RadChart__ is discontinued as of __Q3 2014__ , but the control will remain in the assembly so it can still be used.	We encourage you to use __RadHtmlChart__ for new development.
>


## 

Line charts are used to display a series of data points, typically to show trends over a period of time. One or more series of data can be used and the appearance for each series can be tailored to emphasize the data using unique colors, line thicknesses, shadow, pen style, and point marks.

To create a Vertical Line Chart set the SeriesOrientation property to __Vertical__. Set the RadChart DefaultType property or ChartSeries.Type to __Line__.


>caption 

![Vertical Line Chart](images/radchartelements7.png)



To create a Horizontal Line Chart set the SeriesOrientation property to __Horizontal__. Set the RadChart DefaultType property or ChartSeries.Type to __Line__.


>caption 

![Horizontal Line Chart](images/radchartelements8.png)




