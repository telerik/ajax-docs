---
title: Bar Charts
page_title: Bar Charts - RadChart
description: Check our Web Forms article about Bar Charts.
slug: chart/understanding-radchart-types/bar-charts
tags: bar,charts
published: True
position: 1
---

# Bar Charts

>caution **RadChart** has been deprecated since Q3 2014 and is no longer recommended for use, as it does not support modern browsers. We strongly recommend using [RadHtmlChart](https://www.telerik.com/products/aspnet-ajax/html-chart.aspx), Telerik's modern client-side charting component. 
>To transition from RadChart to RadHtmlChart, refer to the following migration articles:
> - [Migrating Series]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-series-configuration%})
> - [Migrating Axes]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-axes-configuration%})
> - [Migrating Date Axes]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-date-axis-configuration%})
> - [Migrating Databinding]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-data-binding-configuration%})
> - [Features parity]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-functionalities---features-and-series-types-parity%})
>Explore the [RadHtmlChart documentation]({%slug htmlchart/overview%}) and online demos to determine how it fits your development needs.

Bar charts graphically summarize and display categories of data and let the user easily compare amounts or values between different categories. Bar charts are useful for comparing multiple series of data (i.e. providing snapshots of data at particular points in time).In the examples below the categories are various sources for sales (Internet, Wholesale, Retail) that combine to make the total sales for each quarter. RadChart automatically displays each series in a different color to make them easier to distinguish.

To create a Vertical Bar Chart set the SeriesOrientation property to **Vertical**. Set the RadChart DefaultType property or ChartSeries.Type to **Bar**.

![Vertical Bar Chart](images/radchartelements1.png)

To create a Horizontal Bar Chart set the SeriesOrientation property to **Horizontal**. Set the RadChart DefaultType property or ChartSeries.Type to **Bar**.

![Horizontal Bar Chart](images/radchartelements2.png)
