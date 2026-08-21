---
title: Extend the Displayable Area for YAxis Data
page_title: How to Extend the Displayable Area for YAxis Data
description: Check our Web Forms article about How to Extend the Displayable Area for YAxis Data.
slug: chart/how-to/extend-displayable-area-yaxis-data
components: ["chart"]
tags: how to, extend, area, yaxis, data
published: True
position: 0
---

# How to Extend the Displayable Area for YAxis Data

>caution **RadChart** has been deprecated since Q3 2014 and is marked as obsolete as of the 2026 Q2 SP1 (v2026.2.708) release. This is the last release that includes the RadChart component — its source code will be removed from the assembly in the next release. We strongly recommend using [RadHtmlChart](https://www.telerik.com/products/aspnet-ajax/html-chart.aspx), Telerik's modern client-side charting component. 
>To transition from RadChart to RadHtmlChart, refer to the following migration articles:
> - [Migrating Series]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-series-configuration%})
> - [Migrating Axes]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-axes-configuration%})
> - [Migrating Date Axes]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-date-axis-configuration%})
> - [Migrating Databinding]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-data-binding-configuration%})
> - [Features parity]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-functionalities---features-and-series-types-parity%})
>Explore the [RadHtmlChart documentation]({%slug htmlchart/overview%}) and online demos to determine how it fits your development needs.

"My data touches the upper boundary of the plot area but that makes the data harder to see. How do I extend the viewable area along the YAxis?"

Assign the YAxis AxisMode property. By default the ChartYAxisMode property value is **Normal** and the YAxis data fills the available space.

`myChart.PlotArea.YAxis.AxisMode = ChartYAxisMode.Normal;`

![normal axis](images/radchart-howto003.png)

If you set the ChartYAxisMode to **Extended**, additional area is placed above the highest data point to make the chart easier to read.

`myChart.PlotArea.YAxis.AxisMode = ChartYAxisMode.Extended;`

![extended axis](images/radchart-howto002.png)
