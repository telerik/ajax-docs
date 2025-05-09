---
title: Stacked Bar 100% Charts
page_title: Stacked Bar 100% Charts - RadChart
description: Check our Web Forms article about Stacked Bar 100% Charts.
slug: chart/understanding-radchart-types/stacked-bar-100%-charts
previous_url: controls/chart/understanding-radchart-types/stacked-bar-100%-charts
tags: stacked,bar,100%,charts
published: True
position: 3
---

# Stacked Bar 100% Charts

>caution **RadChart** has been deprecated since Q3 2014 and is no longer recommended for use, as it does not support modern browsers. We strongly recommend using [RadHtmlChart](https://www.telerik.com/products/aspnet-ajax/html-chart.aspx), Telerik's modern client-side charting component. 
>To transition from RadChart to RadHtmlChart, refer to the following migration articles:
> - [Migrating Series]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-series-configuration%})
> - [Migrating Axes]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-axes-configuration%})
> - [Migrating Date Axes]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-date-axis-configuration%})
> - [Migrating Databinding]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-data-binding-configuration%})
> - [Features parity]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-functionalities---features-and-series-types-parity%})
>Explore the [RadHtmlChart documentation]({%slug htmlchart/overview%}) and online demos to determine how it fits your development needs.

Stacked Bar 100 charts are used when you have three or more data series and want to compare distributions within categories, and at the same time display the differences between categories. Each bar represents 100% of the amounts for that category.

To create a Vertical Stacked Bar 100 Chart set the SeriesOrientation property to **Vertical**. Set the RadChart DefaultType property or ChartSeries.Type to **StackedBar100**.

![Vertical Stacked Bar 100 Chart](images/radchartelements5.png)

To create a Horizontal Stacked Bar Chart set the SeriesOrientation property to **Horizontal**. Set the RadChart DefaultType property or ChartSeries.Type to **StackedBar100**.

![Horizontal Stacked 100 Chart](images/radchartelements6.png)

>tip To display the label values as percentages, change the DefaultLabelValue for each chart series from "#Y" (the numeric value for each data point) to "#%" (the percentage of each data point to the category).

