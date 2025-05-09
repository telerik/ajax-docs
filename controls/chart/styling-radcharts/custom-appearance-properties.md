---
title: Custom Appearance Properties
page_title: Custom Appearance Properties - RadChart
description: Check our Web Forms article about Custom Appearance Properties.
slug: chart/styling-radcharts/custom-appearance-properties
tags: custom,appearance,properties
published: True
position: 2
---

# Custom Appearance Properties

>caution **RadChart** has been deprecated since Q3 2014 and is no longer recommended for use, as it does not support modern browsers. We strongly recommend using [RadHtmlChart](https://www.telerik.com/products/aspnet-ajax/html-chart.aspx), Telerik's modern client-side charting component. 
>To transition from RadChart to RadHtmlChart, refer to the following migration articles:
> - [Migrating Series]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-series-configuration%})
> - [Migrating Axes]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-axes-configuration%})
> - [Migrating Date Axes]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-date-axis-configuration%})
> - [Migrating Databinding]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-data-binding-configuration%})
> - [Features parity]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-functionalities---features-and-series-types-parity%})
>Explore the [RadHtmlChart documentation]({%slug htmlchart/overview%}) and online demos to determine how it fits your development needs.

Apart from the common properties, every chart element may have unique appearance properties, e.g. “Figure”, “Rotation Angle”, “Text Properties”, etc. Here is a quick reference of the unique appearance properties of the chart and its elements.

## Chart

||
| ------ |
|  **Set dimensions**  |
|Layout -> WidthLayout -> Height|
| **Set the chart type** |
| Appearance -> DefaultType|
| **Set series orientation** |
| Appearance -> Series Orientation|
| **Set a series palette** |
| Appearance -> SeriesPalette; Appearance -> CustomPalettes|
| **Set a predefined chart skin** |
| Appearance -> Skin|
| **Set a bar overlap ratio** How much two adjacent bars overlap each other|
| Appearance -> Appearance -> BarOverlapPercent|
| **Set bar width** Define how much space will occupy all bars located on the same spot on the X Axis. The value represents percent of the total available space for that X Axis value.|
| Appearance -> Appearance -> BarWidthPercent|
| **Set text quality** |
| Appearance -> Appearance -> TextQuality|
| **Set alternative text (accessibility feature)** |
| Appearance -> AlternativeText|
| **Set the image MIME type (file type)** |
| Settings -> ChartImageFormat|

## Chart title

||
| ------ |
|  **Set the form**  |
| Elements -> ChartTitle -> Appearance -> Figure|
| **Set a rotation angle** |
| Elements -> ChartTitle -> Appearance -> RotationAngle|
| **Style the chart title marker** |
| Elements -> ChartTitle -> Marker -> Appearance|

## Legend

||
| ------ |
|  **Style the legend title**  |
| Elements -> Legend -> TextBlock|
| **Style the legend marker** |
| Elements -> Legend -> Marker -> Appearance|
| **Style the legend items’ appearance** |
| Elements -> Legend -> Appearance -> ItemAppearance; Elements -> Legend -> Appearance -> ItemMarkerAppearance; Elements -> Legend -> Appearance -> ItemTextAppearance|
| **Set legend items’ orientation** |
| Elements -> Legend -> Appearance -> Overflow|
| **Set a rotation angle** |
| Elements -> Legend -> Appearance -> RotationAngle|

## PlotArea and Axes

||
| ------ |
|  **Style the empty series (no data) message**  |
| Elements -> PlotArea -> EmptySeriesMessage|
| **Set intelligent series’ label positioning** |
| Elements -> PlotArea -> IntelligentLabelsEnabled|
| **Set the axis’ layout mode** Determine whether the axis values’ positions match the gridlines or the values are places between the gridlines|
| Elements -> PlotArea -> [axis] -> LayoutMode|
| **Style the axis’ maximum value end** |
| Elements -> PlotArea -> axis [axis] -> Appearance -> Cap|
