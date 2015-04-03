---
title: Styling Chart Elements
page_title: Styling Chart Elements | UI for ASP.NET AJAX Documentation
description: Styling Chart Elements
slug: chart/styling-radcharts/styling-chart-elements
tags: styling,chart,elements
published: True
position: 0
---

# Styling Chart Elements



>caution  __RadChart__ has been replaced by[RadHtmlChart](http://www.telerik.com/products/aspnet-ajax/html-chart.aspx), Telerik's client-side charting component.	If you are considering __RadChart__ for new development, examine the[RadHtmlChart documentation](ffd58685-7423-4c50-9554-f92c70a75138)and[online demos](http://demos.telerik.com/aspnet-ajax/htmlchart/examples/overview/defaultcs.aspx)first to see if it will fit your development needs.	If you are already using __RadChart__ in your projects, you can migrate to __RadHtmlChart__ by following these articles:[Migrating Series](2f393f28-bc31-459c-92aa-c3599785f6cc),[Migrating Axes](3f1bea81-87b9-4324-b0d2-d13131031048),[Migrating Date Axes](93226130-bc3c-4c53-862a-f9e17b2eb7dd),[Migrating Databinding](d6c5e2f1-280c-4fb0-b5b0-2f507697511d),[Feature parity](010dc716-ce38-480b-9157-572e0f140169).	Support for __RadChart__ is discontinued as of __Q3 2014__ , but the control will remain in the assembly so it can still be used.	We encourage you to use __RadHtmlChart__ for new development.
>


RadChart offers a set of properties to modify the look and feel of its elements. See those elements marked on the image below consider the table showing where their customization properties are located in the chart properties grid.
>caption 

![Rad Chart Elements](images/radchart-stylingcharts001.png)






| Element | Properties |
| ------ | ------ |
|a. Chart Title|

* Elements -> ChartTitle -> Appearance

* Elements -> ChartTitle -> TextBlock|
|b. Legend|Elements -> Legend -> Appearance|
|c. Legend TextBlock (Legend Title)|Elements -> Legend -> TextBlock|
|d. Y Axis|

* PlotArea -> YAxis -> Appearance|
|e. Y Axis Label (Axis Title)|PlotArea -> YAxis -> AxisLabel|
|f. Y Axis Major Tick|PlotArea -> YAxis -> Appearance -> MajorTick|
|g. Y Axis Major GridLine|PlotArea -> YAxis -> Appearance -> MajorGridLines|
|h. Y Axis Minor Tick|

* PlotArea -> YAxis -> Appearance -> MinorTicк|
|i. Y Axis Minor GridLine|

* PlotArea -> YAxis -> Appearance -> MinorGridLines|
|j. Y Axis Label (Digit)|PlotArea -> YAxis -> Appearance -> LabelAppearance|
|k. X Axis|

* PlotArea -> XAxis -> Appearance|
|l. X Axis Label (Axis Title)|PlotArea -> XAxis -> AxisLabel|
|m. X Axis Major Tick|

* PlotArea -> XAxis -> Appearance -> MajorTick|
|n. X Axis Major GridLine|

* PlotArea -> XAxis -> Appearance -> MajorGridLines|
|o. X Axis Label (Digit)|PlotArea -> XAxis -> Appearance -> LabelAppearance|
|p. Series 1|

* Data -> Series -> [series name] -> Appearance -> Appearance|
|q. Series 2|Data -> Series -> [series name] -> Appearance -> Appearance|
|r. Series Item Label|

* Data -> Series -> [series name] -> Appearance -> Appearance -> TextAppearance|
|s. PlotArea|Elements -> PlotArea -> Appearance|

## Common Appearance Properties



All chart elements have common appearance settings, which are:

* __Border__ – border width, color and style

* __Corners__ – corner style and size

* __Dimensions__ – width, height, margin, padding

* __FillStyle__ – background color, image and gradients

* __Position__

* __Shadow__ – color, distance and position

* __Visible__ – true or false


