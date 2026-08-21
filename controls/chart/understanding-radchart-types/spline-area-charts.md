---
title: Spline Area Charts
page_title: Spline Area Charts - RadChart
description: Check our Web Forms article about Spline Area Charts.
slug: chart/understanding-radchart-types/spline-area-charts
components: ["chart"]
tags: spline,area,charts
published: True
position: 10
---

# Spline Area Charts

>caution **RadChart** has been deprecated since Q3 2014 and is marked as obsolete as of the 2026 Q2 SP1 (v2026.2.708) release. This is the last release that includes the RadChart component — its source code will be removed from the assembly in the next release. We strongly recommend using [RadHtmlChart](https://www.telerik.com/products/aspnet-ajax/html-chart.aspx), Telerik's modern client-side charting component. 
>To transition from RadChart to RadHtmlChart, refer to the following migration articles:
> - [Migrating Series]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-series-configuration%})
> - [Migrating Axes]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-axes-configuration%})
> - [Migrating Date Axes]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-date-axis-configuration%})
> - [Migrating Databinding]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-data-binding-configuration%})
> - [Features parity]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-functionalities---features-and-series-types-parity%})
>Explore the [RadHtmlChart documentation]({%slug htmlchart/overview%}) and online demos to determine how it fits your development needs.

Spline charts allow you to take a limited set of known data points and approximate intervening values. In the Spline Area Chart the area defined by the spline curve is filled. In practice you define a series of chart items and RadChart does the rest. Each series overlays the preceding, from back to front.

To create a simple vertical Spline Area Chart set the SeriesOrientation property to **Vertical**. Set the RadChart DefaultType property or ChartSeries.Type to **SplineArea**. Create one or more series and add chart items with Y or X and Y values.

![Veritical Spline Area Chart](images/radchartelements26.png)

To create a simple horizontal Spline Area Chart set the SeriesOrientation property to **Horizontal**. Set the RadChart DefaultType property or ChartSeries.Type to **SplineArea**. Create a series and add chart items with Y or X and Y values.

![Horizontal Spline Area Chart](images/radchartelements27.png)
