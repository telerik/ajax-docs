---
title: Custom Appearance Properties
page_title: Custom Appearance Properties | RadChart for ASP.NET AJAX Documentation
description: Custom Appearance Properties
slug: chart/styling-radcharts/custom-appearance-properties
tags: custom,appearance,properties
published: True
position: 2
---

# Custom Appearance Properties

>caution  **RadChart** has been replaced by [RadHtmlChart](https://www.telerik.com/products/aspnet-ajax/html-chart.aspx), Telerik's client-side charting component. If you are considering **RadChart** for new development, examine the [RadHtmlChart documentation]({%slug htmlchart/overview%}) and [online demos](https://demos.telerik.com/aspnet-ajax/htmlchart/examples/overview/defaultcs.aspx) first to see if it will fit your development needs. If you are already using **RadChart** in your projects, you can migrate to **RadHtmlChart** by following these articles: [Migrating Series]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-series-configuration%}), [Migrating Axes]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-axes-configuration%}), [Migrating Date Axes]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-date-axis-configuration%}), [Migrating Databinding]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-data-binding-configuration%}), [Features parity]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-functionalities---features-and-series-types-parity%}). Support for **RadChart** is discontinued as of **Q3 2014**, but the control will remain in the assembly so it can still be used. We encourage you to use **RadHtmlChart** for new development.

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
