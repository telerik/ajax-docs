---
title: Stacked Area 100% Charts
page_title: Stacked Area 100% Charts | RadChart for ASP.NET AJAX Documentation
description: Stacked Area 100% Charts
slug: chart/understanding-radchart-types/stacked-area-100%-charts
previous_url: controls/chart/understanding-radchart-types/stacked-area-100%-charts
tags: stacked,area,100%,charts
published: True
position: 16
---

# Stacked Area 100% Charts

>caution  **RadChart** has been replaced by [RadHtmlChart](http://www.telerik.com/products/aspnet-ajax/html-chart.aspx), Telerik's client-side charting component. If you are considering **RadChart** for new development, examine the [RadHtmlChart documentation]({%slug htmlchart/overview%}) and [online demos](http://demos.telerik.com/aspnet-ajax/htmlchart/examples/overview/defaultcs.aspx) first to see if it will fit your development needs. If you are already using **RadChart** in your projects, you can migrate to **RadHtmlChart** by following these articles: [Migrating Series]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-series-configuration%}), [Migrating Axes]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-axes-configuration%}), [Migrating Date Axes]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-date-axis-configuration%}), [Migrating Databinding]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-data-binding-configuration%}), [Features parity]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-functionalities---features-and-series-types-parity%}). Support for **RadChart** is discontinued as of **Q3 2014**, but the control will remain in the assembly so it can still be used. We encourage you to use **RadHtmlChart** for new development.

Stacked Areas 100% charts are a variation of Stacked Area charts that present values for trends as percentages, totaling to 100% for each category

To create a Vertical Stacked Area 100% Chart set the SeriesOrientationproperty to **Vertical**. Set the RadChart DefaultType property or ChartSeries.Type to **StackedArea100**.

![Vertical Stacked Area 100% Chart](images/radchartelements13.png)

To create a Horizontal Stacked Area 100% Chart set the SeriesOrientationproperty to **Horizontal**. Set the RadChart DefaultType property or ChartSeries.Type to **StackedArea100**.

![Horizontal Stacked Area 100% Chart](images/radchartelements14.png)

>tip To display the label values as percentages, change the DefaultLabelValue for each chart series from "#Y" (the numeric value for each data point) to "#%" (the percentage of each data point to the category).


