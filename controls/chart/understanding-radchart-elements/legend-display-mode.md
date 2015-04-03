---
title: Legend Display Mode
page_title: Legend Display Mode | UI for ASP.NET AJAX Documentation
description: Legend Display Mode
slug: chart/understanding-radchart-elements/legend-display-mode
tags: legend,display,mode
published: True
position: 14
---

# Legend Display Mode



>caution  __RadChart__ has been replaced by[RadHtmlChart](http://www.telerik.com/products/aspnet-ajax/html-chart.aspx), Telerik's client-side charting component.	If you are considering __RadChart__ for new development, examine the[RadHtmlChart documentation](ffd58685-7423-4c50-9554-f92c70a75138)and[online demos](http://demos.telerik.com/aspnet-ajax/htmlchart/examples/overview/defaultcs.aspx)first to see if it will fit your development needs.	If you are already using __RadChart__ in your projects, you can migrate to __RadHtmlChart__ by following these articles:[Migrating Series](2f393f28-bc31-459c-92aa-c3599785f6cc),[Migrating Axes](3f1bea81-87b9-4324-b0d2-d13131031048),[Migrating Date Axes](93226130-bc3c-4c53-862a-f9e17b2eb7dd),[Migrating Databinding](d6c5e2f1-280c-4fb0-b5b0-2f507697511d),[Feature parity](010dc716-ce38-480b-9157-572e0f140169).	Support for __RadChart__ is discontinued as of __Q3 2014__ , but the control will remain in the assembly so it can still be used.	We encourage you to use __RadHtmlChart__ for new development.
>


## 

__LegendDisplayMode__ - this series.Appearance property will define what will be shown in the legend for each chart series. The valid values are from the ChartSeriesLegendDisplayMode enumeration.

* Nothing - the legend will not display information for this series

* SeriesName - the legend will display a single item for each series, this item will show the series name

* ItemLabels - the legend will display an item for each series item (the preferred setting for pie charts). Note, that although it is ItemLabels, the legend will actually display the value of the item Name property, thus providing means to show a different information from what is shown in the item labels.

Here is a pie chart with a single series with __LegendDisplayMode__ set to "ItemLabels":
>caption 

![PieChart legend items](images/radchartelements37.png)


