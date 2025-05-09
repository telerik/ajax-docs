---
title: Series Items
page_title: Series Items - RadChart
description: Check our Web Forms article about Series Items.
slug: chart/understanding-radchart-elements/series-items
tags: series,items
published: True
position: 9
---

# Series Items

>caution **RadChart** has been deprecated since Q3 2014 and is no longer recommended for use, as it does not support modern browsers. We strongly recommend using [RadHtmlChart](https://www.telerik.com/products/aspnet-ajax/html-chart.aspx), Telerik's modern client-side charting component. 
>To transition from RadChart to RadHtmlChart, refer to the following migration articles:
> - [Migrating Series]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-series-configuration%})
> - [Migrating Axes]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-axes-configuration%})
> - [Migrating Date Axes]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-date-axis-configuration%})
> - [Migrating Databinding]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-data-binding-configuration%})
> - [Features parity]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-functionalities---features-and-series-types-parity%})
>Explore the [RadHtmlChart documentation]({%slug htmlchart/overview%}) and online demos to determine how it fits your development needs.

Each chart series *item* encapsulates a single data point.

The key properties are shown in the figure below in the property category "Basic value set". For simple charts along a single axis populate the YValue property.Use the XValue property to add a second data dimension. For example, the Y values might be "Sales Volume" and the X values might be time periods or geographic regions.XValue2 and YValue2 are used by [Gantt]({%slug chart/understanding-radchart-types/gantt-charts%}) type to indicate a period of time and the [Bubble]({%slug chart/understanding-radchart-types/bubble-charts%}) chart type to show amplitude of data.

Set the Empty property to true to have RadChart approximate the value. The example below has a third item with the Empty property set to True, causing the item to display by default as a unfilled dotted line with a label of 30.5 (the average of the values that come before and after, 5 and 56, respectively). The look of the empty value is controlled by the EmptyValue property for the series Appearance.

![Empty Property](images/radchart-understandingelements031.png)

Other significant properties for the ChartSeriesItemare:

* ActiveRegion: Contains HTML Attributes, ToolTip and URL. These properties support making image maps.

* Appearance: This contains common visual properties **Border**, **Corners**, **FillStyle** and **Visible**. In addition the property Exploded is specific to the [Pie]({%slug chart/understanding-radchart-types/pie-charts%}) chart property type. When true, Exploded displays a chart series item (a pie slice in this context) as slightly separated from the rest of the pie.

* Label: Use this property to override the default item label. By default the numeric values of each data point are displayed on the chart. Here you can use the Label.TextBlock.Text to add a more specific description of the data point. You have full control over each label HTML characteristics with the **Label.ActiveRegion**.Control visual display and layout using the Label.Appearance property.

![ChartSeriesItem Collection](images/radchart-understandingelements018.png)
