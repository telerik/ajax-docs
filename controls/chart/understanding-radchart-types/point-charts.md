---
title: Point Charts
page_title: Point Charts | RadChart for ASP.NET AJAX Documentation
description: Point Charts
slug: chart/understanding-radchart-types/point-charts
tags: point,charts
published: True
position: 9
---

# Point Charts

>caution  **RadChart** has been replaced by [RadHtmlChart](http://www.telerik.com/products/aspnet-ajax/html-chart.aspx), Telerik's client-side charting component. If you are considering **RadChart** for new development, examine the [RadHtmlChart documentation]({%slug htmlchart/overview%}) and [online demos](http://demos.telerik.com/aspnet-ajax/htmlchart/examples/overview/defaultcs.aspx) first to see if it will fit your development needs. If you are already using **RadChart** in your projects, you can migrate to **RadHtmlChart** by following these articles: [Migrating Series]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-series-configuration%}), [Migrating Axes]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-axes-configuration%}), [Migrating Date Axes]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-date-axis-configuration%}), [Migrating Databinding]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-data-binding-configuration%}), [Features parity]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-functionalities---features-and-series-types-parity%}). Support for **RadChart** is discontinued as of **Q3 2014**, but the control will remain in the assembly so it can still be used. We encourage you to use **RadHtmlChart** for new development.

Point or "Scatter" charts are used to show correlations between two sets of values.The point chart lets you observe the dependence of one value to another and is often used for scientific data modeling. The Point chart is typically not used used with time dependent data where a Line chart is more suited.

To change the display of any given point use the chart item's PointAppearance property. Here you can change the Dimensions property to control Height, Width, Margins Paddings. The **Figure** property lets you choose from a set of predefined shapes other than the default Ellipse shape (e.g. Cross, Diamond, Circle, Rectangle, Triangle and several different Star marker shapes).

To create a Vertical Point Chart set the SeriesOrientation property to **Vertical**. Set the RadChart DefaultType property or ChartSeries.Type to **Point**. Add one or more chart series to the Series collection. Add one or more chart items to the seriesItems collection. Populate numeric values forXValue and YValue properties of each chart series item.

![Vertical Point Chart](images/radchartelements31.png)

To create a Horizontal Point Chart set the SeriesOrientation property to **Horizontal**. Set the RadChart DefaultType property or ChartSeries.Type to **Point**. Add one or more chart series to the Series collection. Add one or more chart items to the seriesItems collection. Populate numeric values for XValue and YValue properties of each chart series item.

![Horizontal Point Chart](images/radchartelements32.png)
