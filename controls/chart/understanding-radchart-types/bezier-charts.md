---
title: Bezier Charts
page_title: Bezier Charts - RadChart
description: Check our Web Forms article about Bezier Charts.
slug: chart/understanding-radchart-types/bezier-charts
tags: bezier,charts
published: True
position: 6
---

# Bezier Charts

>caution **RadChart** has been deprecated since Q3 2014 and is no longer recommended for use, as it does not support modern browsers. We strongly recommend using [RadHtmlChart](https://www.telerik.com/products/aspnet-ajax/html-chart.aspx), Telerik's modern client-side charting component. 
>To transition from RadChart to RadHtmlChart, refer to the following migration articles:
> - [Migrating Series]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-series-configuration%})
> - [Migrating Axes]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-axes-configuration%})
> - [Migrating Date Axes]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-date-axis-configuration%})
> - [Migrating Databinding]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-data-binding-configuration%})
> - [Features parity]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-functionalities---features-and-series-types-parity%})
>Explore the [RadHtmlChart documentation]({%slug htmlchart/overview%}) and online demos to determine how it fits your development needs.

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
