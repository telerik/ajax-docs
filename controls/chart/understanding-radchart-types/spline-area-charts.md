---
title: Spline Area Charts
page_title: Spline Area Charts | RadChart for ASP.NET AJAX Documentation
description: Spline Area Charts
slug: chart/understanding-radchart-types/spline-area-charts
tags: spline,area,charts
published: True
position: 10
---

# Spline Area Charts

>caution  **RadChart** has been replaced by [RadHtmlChart](https://www.telerik.com/products/aspnet-ajax/html-chart.aspx), Telerik's client-side charting component. If you are considering **RadChart** for new development, examine the [RadHtmlChart documentation]({%slug htmlchart/overview%}) and [online demos](https://demos.telerik.com/aspnet-ajax/htmlchart/examples/overview/defaultcs.aspx) first to see if it will fit your development needs. If you are already using **RadChart** in your projects, you can migrate to **RadHtmlChart** by following these articles: [Migrating Series]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-series-configuration%}), [Migrating Axes]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-axes-configuration%}), [Migrating Date Axes]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-date-axis-configuration%}), [Migrating Databinding]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-data-binding-configuration%}), [Features parity]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-functionalities---features-and-series-types-parity%}). Support for **RadChart** is discontinued as of **Q3 2014**, but the control will remain in the assembly so it can still be used. We encourage you to use **RadHtmlChart** for new development.

Spline charts allow you to take a limited set of known data points and approximate intervening values. In the Spline Area Chart the area defined by the spline curve is filled. In practice you define a series of chart items and RadChart does the rest. Each series overlays the preceding, from back to front.

To create a simple vertical Spline Area Chart set the SeriesOrientation property to **Vertical**. Set the RadChart DefaultType property or ChartSeries.Type to **SplineArea**. Create one or more series and add chart items with Y or X and Y values.

![Veritical Spline Area Chart](images/radchartelements26.png)

To create a simple horizontal Spline Area Chart set the SeriesOrientation property to **Horizontal**. Set the RadChart DefaultType property or ChartSeries.Type to **SplineArea**. Create a series and add chart items with Y or X and Y values.

![Horizontal Spline Area Chart](images/radchartelements27.png)
