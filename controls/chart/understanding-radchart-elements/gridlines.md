---
title: Gridlines
page_title: Gridlines - RadChart
description: Check our Web Forms article about Gridlines.
slug: chart/understanding-radchart-elements/gridlines
tags: gridlines
published: True
position: 4
---

# Gridlines

>caution **RadChart** has been deprecated since Q3 2014 and is no longer recommended for use, as it does not support modern browsers. We strongly recommend using [RadHtmlChart](https://www.telerik.com/products/aspnet-ajax/html-chart.aspx), Telerik's modern client-side charting component. 
>To transition from RadChart to RadHtmlChart, refer to the following migration articles:
> - [Migrating Series]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-series-configuration%})
> - [Migrating Axes]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-axes-configuration%})
> - [Migrating Date Axes]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-date-axis-configuration%})
> - [Migrating Databinding]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-data-binding-configuration%})
> - [Features parity]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-functionalities---features-and-series-types-parity%})
>Explore the [RadHtmlChart documentation]({%slug htmlchart/overview%}) and online demos to determine how it fits your development needs.

Gridlines are auxiliary lines that form a grid for easier reading of the chart. Gridlines can be vertical or horizontal. Vertical gridlines are controlled by the XAxis and horizontal gridlines are controlled by YAxis and YAxis2. Gridlines can be "major", e.g. falling on the labeled axis Step values."Minor" gridlines appear for YAxisand YAxis2 that fall between Step values. See the figure below where major gridlines fall on 20 and 40 of the YAxis and minor gridlines fall between the major gridlines.

To control the visibility and general appearance of gridlines use the the `PlotArea.<axis>.Appearance` property to reach MajorGridLines and MinorGridlines properties.XAxis has only MajorGridLines while YAxis have both MajorGridLines and MinorGridlines properties.Both major and minor gridline objects include the following properties:

* **Visible**

* **Color**

* **PenStyle** (Solid, Dash, Dot, DashDot, DashDotDot and Custom)

* **Width**

In the example below both X axis and Y axis are visible.XAxis MajorGridLines are red solid lines 3 pixels wide. YAxisMinorGridlines are shown as blue dotted lines 2 pixels wide and YAxisMajorGridLines are shown as blue solid lines 3 pixels wide.

![](images/radchart-understandingelements008.png)
