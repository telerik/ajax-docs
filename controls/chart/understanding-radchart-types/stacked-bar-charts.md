---
title: Stacked Bar Charts
page_title: Stacked Bar Charts - RadChart
description: Check our Web Forms article about Stacked Bar Charts.
slug: chart/understanding-radchart-types/stacked-bar-charts
tags: stacked,bar,charts
published: True
position: 2
---

# Stacked Bar Charts

>caution **RadChart** has been deprecated since Q3 2014 and is no longer recommended for use, as it does not support modern browsers. We strongly recommend using [RadHtmlChart](https://www.telerik.com/products/aspnet-ajax/html-chart.aspx), Telerik's modern client-side charting component. 
>To transition from RadChart to RadHtmlChart, refer to the following migration articles:
> - [Migrating Series]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-series-configuration%})
> - [Migrating Axes]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-axes-configuration%})
> - [Migrating Date Axes]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-date-axis-configuration%})
> - [Migrating Databinding]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-data-binding-configuration%})
> - [Features parity]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-functionalities---features-and-series-types-parity%})
>Explore the [RadHtmlChart documentation]({%slug htmlchart/overview%}) and online demos to determine how it fits your development needs.

Stacked bar charts are used to compare contributions of values to a total across categories. In the examples below the categories are various sources for sales (Internet, Wholesale, Retail) that combine to make the total sales for each quarter. Use the Stacked Bar chart when you need visibility to the combined values for each category.

To create a Vertical Stacked Bar Chart set the SeriesOrientation property to **Vertical**. Set the RadChartDefaultType property or ChartSeries.Type to **StackedBar**.

![Vertical Stacked Bar Chart](images/radchartelements3.png)

To create a Horizontal Stacked Bar Chart set the SeriesOrientation property to **Horizontal**. Set the RadChartDefaultType property or ChartSeries.Type to **StackedBar**.

![Horizontal Stacked Bar Chart](images/radchartelements4.png)

>tip To display custom labelling on the X-Axis "Qtr 1", "Qtr 2", etc., set the RadChart PlotArea.XAxis property and for each item set the TextBlock **Text** property to the desired label.

