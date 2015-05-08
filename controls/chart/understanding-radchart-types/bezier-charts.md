---
title: Bezier Charts
page_title: Bezier Charts | RadChart for ASP.NET AJAX Documentation
description: Bezier Charts
slug: chart/understanding-radchart-types/bezier-charts
tags: bezier,charts
published: True
position: 6
---

# Bezier Charts

>caution  **RadChart** has been replaced by[RadHtmlChart](http://www.telerik.com/products/aspnet-ajax/html-chart.aspx), Telerik's client-side charting component.	If you are considering **RadChart** for new development, examine the[RadHtmlChart documentation](ffd58685-7423-4c50-9554-f92c70a75138)and[online demos](http://demos.telerik.com/aspnet-ajax/htmlchart/examples/overview/defaultcs.aspx)first to see if it will fit your development needs.	If you are already using **RadChart** in your projects, you can migrate to **RadHtmlChart** by following these articles:[Migrating Series](2f393f28-bc31-459c-92aa-c3599785f6cc),[Migrating Axes](3f1bea81-87b9-4324-b0d2-d13131031048),[Migrating Date Axes](93226130-bc3c-4c53-862a-f9e17b2eb7dd),[Migrating Databinding](d6c5e2f1-280c-4fb0-b5b0-2f507697511d),[Feature parity](010dc716-ce38-480b-9157-572e0f140169).	Support for **RadChart** is discontinued as of **Q3 2014** , but the control will remain in the assembly so it can still be used.	We encourage you to use **RadHtmlChart** for new development.

The Bezier chart is often used for modelling data by interpolating data points, through which curved lines pass.

To draw a Bezier chart series you add (1 + 3 x N) items to a series. So you can have 4 data points or 7, 10, 13, etc. The simplest set of data would be 4 data points: two end points and two "control points" that control the position and amount of curvature in the line between the two end points. See the figures below for examples. Each of the data points must have a X and Y value.

To create a simple vertical Bezier Chart set the SeriesOrientation property to **Vertical**. Set the RadChart DefaultType property or ChartSeries.Type to **Bezier**. Create a series and add four chart items with X and Y values.

>note The second chart series labeled "Data Points" is included to emphasize the location of the end and control points in the Bezier series.

![Horizontal Bezier Chart](images/radchartelements19.png)

To create a simple horizontal Bezier Chart set the SeriesOrientation property to **Horizontal**. Set the RadChart DefaultType property or ChartSeries.Type to **Bezier**. Create a series and add four chart items with X and Y values.

|  **YValue**  |  **XValue**  |
| ------ | ------ |
|20|50|
|20|100|
|80|100|
|80|50|

![Another Bezier chart with control points placed evenly](images/radchartelements20.png)

|  **YValue**  |  **XValue**  |
| ------ | ------ |
|20|50|
|50|100|
|80|100|
|80|50|

![Bezier chart with control points placed asymetrically](images/radchartelements21.png)
