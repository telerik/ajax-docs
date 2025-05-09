---
title: Legend Display Mode
page_title: Legend Display Mode - RadChart
description: Check our Web Forms article about Legend Display Mode.
slug: chart/understanding-radchart-elements/legend-display-mode
tags: legend,display,mode
published: True
position: 14
---

# Legend Display Mode

>caution **RadChart** has been deprecated since Q3 2014 and is no longer recommended for use, as it does not support modern browsers. We strongly recommend using [RadHtmlChart](https://www.telerik.com/products/aspnet-ajax/html-chart.aspx), Telerik's modern client-side charting component. 
>To transition from RadChart to RadHtmlChart, refer to the following migration articles:
> - [Migrating Series]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-series-configuration%})
> - [Migrating Axes]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-axes-configuration%})
> - [Migrating Date Axes]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-date-axis-configuration%})
> - [Migrating Databinding]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-data-binding-configuration%})
> - [Features parity]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-functionalities---features-and-series-types-parity%})
>Explore the [RadHtmlChart documentation]({%slug htmlchart/overview%}) and online demos to determine how it fits your development needs.

**LegendDisplayMode** - this series.Appearance property will define what will be shown in the legend for each chart series. The valid values are from the ChartSeriesLegendDisplayMode enumeration.

* Nothing - the legend will not display information for this series

* SeriesName - the legend will display a single item for each series, this item will show the series name

* ItemLabels - the legend will display an item for each series item (the preferred setting for pie charts). Note, that although it is ItemLabels, the legend will actually display the value of the item Name property, thus providing means to show a different information from what is shown in the item labels.

Here is a pie chart with a single series with **LegendDisplayMode** set to "ItemLabels":

![PieChart legend items](images/radchartelements37.png)


