---
title: Overview
page_title: Rad Chart Basics - RadChart
description: Check our Web Forms article about Rad Chart Basics.
slug: chart/understanding-radchart-elements/rad-chart-basics
tags: rad,chart,basics
published: True
position: 0
---

# Rad Chart Basics

>caution **RadChart** has been deprecated since Q3 2014 and is no longer recommended for use, as it does not support modern browsers. We strongly recommend using [RadHtmlChart](https://www.telerik.com/products/aspnet-ajax/html-chart.aspx), Telerik's modern client-side charting component. 
>To transition from RadChart to RadHtmlChart, refer to the following migration articles:
> - [Migrating Series]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-series-configuration%})
> - [Migrating Axes]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-axes-configuration%})
> - [Migrating Date Axes]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-date-axis-configuration%})
> - [Migrating Databinding]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-data-binding-configuration%})
> - [Features parity]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-functionalities---features-and-series-types-parity%})
>Explore the [RadHtmlChart documentation]({%slug htmlchart/overview%}) and online demos to determine how it fits your development needs.

Charts are composed of a hierarchy of elements. Most of the elements are common across all chart types (unless otherwise noted). The illustration below shows some of the significant chart elements.

![RadChart elements](images/radchart-basics003.png)

## Chart Element Descriptions
|Element|Description|Element|Description|
| ------ | ------ | ------ | ------ |
|  **Title**  | The heading for the chart as a whole. The position and appearance of the title is completely customizable. [Read More]({%slug chart/understanding-radchart-elements/titles%}) |  **Legend**  | The legend contains a symbol and name for each series in the chart.The legend may also display a series of items. The position and appearance of the legend can also be customized. [Read more]({%slug chart/understanding-radchart-elements/legends%}) |
| **Axis Item** |Axis Items are the individual points along each axis that help indicate the axis measurement and scale. [Read more]({%slug chart/understanding-radchart-elements/axes%})| **Grid Lines** |Vertical and horizontal lines parrallel to the X and Y axes.These grid lines form the grid, making the chart easier to read. [Read more]({%slug chart/understanding-radchart-elements/gridlines%})|
| **Point Mark** |The point mark is a visual cue to enhance visibility of data points on line and area charts. [Read more]({%slug chart/understanding-radchart-elements/series-specific-properties%})[Series Items]({%slug chart/understanding-radchart-elements/series-items%})| **Chart Series** |Series contains a set of data points to be drawn on the chart. This set of points contains related data. Each series can be represented by a chart type. Pie charts use only a single series. For other chart types there is no limitation to the number of series or items within each series.[Read more]({%slug chart/understanding-radchart-elements/series-overview%})|
| **Item Label** |The label next to each data point displaying a value or custom text. [Read more]({%slug chart/understanding-radchart-elements/series-items%})| **Margins** |The distance between the outer edge of an item to the outer edge of the item containing it.For example, the margin for the plot area is the distance from the plot area border to the outermost border of the chart. Plot area, legend and title all have margins. [Read More]({%slug chart/understanding-radchart-elements/margins%})|
| **Axis Label** |The label next to each axis identifying the nature of data points found along that axis. [Read More]({%slug chart/understanding-radchart-elements/axis-labels%})| **Plot Area** |The area enclosed between the X and Y axes. [Read more]({%slug chart/understanding-radchart-elements/background-and-plot-areas%})|
| **Ticks** |Axis ticks are small marks that identify the position of items on the axes and the starting points of gridlines. [Read more]({%slug chart/understanding-radchart-elements/ticks%})| **Plot Area Border** |The line that encloses the area between the X and Y axes. [Read more]({%slug chart/understanding-radchart-elements/background-and-plot-areas%})|
| **Axis (X and Y)** |These axes form the coordinates in which the data points are placed. Chart series items are displayed along the X and Y axes. **Note** : Pie charts do not use axes. [Read more]({%slug chart/understanding-radchart-elements/axes%})| **Background Border** |The outermost line that encloses the whole chart area. [Read more]({%slug chart/understanding-radchart-elements/background-and-plot-areas%})|
| **Exploded Pie** |A piece of the a Pie chart that is visually separated from the rest of the pie for easier distinction. [Read More]({%slug chart/understanding-radchart-types/pie-charts%})|||


