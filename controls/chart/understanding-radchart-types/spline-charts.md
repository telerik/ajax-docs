---
title: Spline Charts
page_title: Spline Charts - RadChart
description: Check our Web Forms article about Spline Charts.
slug: chart/understanding-radchart-types/spline-charts
tags: spline,charts
published: True
position: 7
---

# Spline Charts

>caution **RadChart** has been deprecated since Q3 2014 and is no longer recommended for use, as it does not support modern browsers. We strongly recommend using [RadHtmlChart](https://www.telerik.com/products/aspnet-ajax/html-chart.aspx), Telerik's modern client-side charting component. 
>To transition from RadChart to RadHtmlChart, refer to the following migration articles:
> - [Migrating Series]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-series-configuration%})
> - [Migrating Axes]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-axes-configuration%})
> - [Migrating Date Axes]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-date-axis-configuration%})
> - [Migrating Databinding]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-data-binding-configuration%})
> - [Features parity]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-functionalities---features-and-series-types-parity%})
>Explore the [RadHtmlChart documentation]({%slug htmlchart/overview%}) and online demos to determine how it fits your development needs.

Spline charts allow you to take a limited set of known data points and approximate intervening values. In practice you define a series of chart items with X/Y values and RadChart does the rest.

To create a simple vertical Spline Chart set the SeriesOrientation property to **Vertical**. Set the RadChart DefaultType property or ChartSeries.Type to **Spline**. Create a series and add chart items with Y or X and Y values.

![Vertical Spline Chart](images/radchartelements22.png)

To create a simple horizontal Spline Chart set the SeriesOrientation property to **Horizontal**. Set the RadChart DefaultType property or ChartSeries.Type to **Spline**. Create a series and add 3 or more chart items with X and Y values.

|  **YValue**  |  **XValue**  |
| ------ | ------ |
|20|50|
|50|-10|
|70|100|
|80|50|

![Horizontal Spline Chart](images/radchartelements23.png)

Another example showing the same Y data points as above, but with no X values defined displays an automatic even progression over the X axis.

|  **YValue**  |
| ------ |
|20|
|50|
|70|
|80|

![Spline chart with only Y values defined](images/radchartelements28.png)
