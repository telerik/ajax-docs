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



>caution  **RadChart** has been replaced by[RadHtmlChart](http://www.telerik.com/products/aspnet-ajax/html-chart.aspx), Telerik's client-side charting component.	If you are considering **RadChart** for new development, examine the[RadHtmlChart documentation](ffd58685-7423-4c50-9554-f92c70a75138)and[online demos](http://demos.telerik.com/aspnet-ajax/htmlchart/examples/overview/defaultcs.aspx)first to see if it will fit your development needs.	If you are already using **RadChart** in your projects, you can migrate to **RadHtmlChart** by following these articles:[Migrating Series](2f393f28-bc31-459c-92aa-c3599785f6cc),[Migrating Axes](3f1bea81-87b9-4324-b0d2-d13131031048),[Migrating Date Axes](93226130-bc3c-4c53-862a-f9e17b2eb7dd),[Migrating Databinding](d6c5e2f1-280c-4fb0-b5b0-2f507697511d),[Feature parity](010dc716-ce38-480b-9157-572e0f140169).	Support for **RadChart** is discontinued as of **Q3 2014** , but the control will remain in the assembly so it can still be used.	We encourage you to use **RadHtmlChart** for new development.
>


Apart from the common properties, every chart element may have unique appearance properties, e.g. “Figure”, “Rotation Angle”, “Text Properties”, etc. Here is a quick reference of the unique appearance properties of the chart and its elements.

## Chart


>caption  

|  **Set dimensions**  |
| ------ |
|Layout -> WidthLayout -> Height|
| **Set the chart type** |
|

* Appearance -> DefaultType|
| **Set series orientation** |
|

* Appearance -> Series Orientation|
| **Set a series palette** |
|

* Appearance -> SeriesPalette

* Appearance -> CustomPalettes|
| **Set a predefined chart skin** |
|

* Appearance -> Skin|
| **Set a bar overlap ratio** How much two adjacent bars overlap each other|
|

* Appearance -> Appearance -> BarOverlapPercent|
| **Set bar width** Define how much space will occupy all bars located on the same spot on the X Axis. The value represents percent of the total available space for that X Axis value.|
|

* Appearance -> Appearance -> BarWidthPercent|
| **Set text quality** |
|

* Appearance -> Appearance -> TextQuality|
| **Set alternative text (accessibility feature)** |
|

* Appearance -> AlternativeText|
| **Set the image MIME type (file type)** |
|

* Settings -> ChartImageFormat|

## Chart title






>caption  

|  **Set the form**  |
| ------ |
|

* Elements -> ChartTitle -> Appearance -> Figure|
| **Set a rotation angle** |
|

* Elements -> ChartTitle -> Appearance -> RotationAngle|
| **Style the chart title marker** |
|

* Elements -> ChartTitle -> Marker -> Appearance|



## Legend






>caption  

|  **Style the legend title**  |
| ------ |
|

* Elements -> Legend -> TextBlock|
| **Style the legend marker** |
|

* Elements -> Legend -> Marker -> Appearance|
| **Style the legend items’ appearance** |
|

* Elements -> Legend -> Appearance -> ItemAppearance

* Elements -> Legend -> Appearance -> ItemMarkerAppearance

* Elements -> Legend -> Appearance -> ItemTextAppearance|
| **Set legend items’ orientation** |
|

* Elements -> Legend -> Appearance -> Overflow|
| **Set a rotation angle** |
|

* Elements -> Legend -> Appearance -> RotationAngle|

## PlotArea and Axes






>caption  

|  **Style the empty series (no data) message**  |
| ------ |
|

* Elements -> PlotArea -> EmptySeriesMessage|
| **Set intelligent series’ label positioning** |
|

* Elements -> PlotArea -> IntelligentLabelsEnabled|
| **Set the axis’ layout mode** Determine whether the axis values’ positions match the gridlines or the values are places between the gridlines|
|

* Elements -> PlotArea -> [axis] -> LayoutMode|
| **Style the axis’ maximum value end** |
|

* Elements -> PlotArea -> axis [axis] -> Appearance -> Cap|
