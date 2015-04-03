---
title: Custom Appearance Properties
page_title: Custom Appearance Properties | UI for ASP.NET AJAX Documentation
description: Custom Appearance Properties
slug: chart/styling-radcharts/custom-appearance-properties
tags: custom,appearance,properties
published: True
position: 2
---

# Custom Appearance Properties



>caution  __RadChart__ has been replaced by[RadHtmlChart](http://www.telerik.com/products/aspnet-ajax/html-chart.aspx), Telerik's client-side charting component.	If you are considering __RadChart__ for new development, examine the[RadHtmlChart documentation](ffd58685-7423-4c50-9554-f92c70a75138)and[online demos](http://demos.telerik.com/aspnet-ajax/htmlchart/examples/overview/defaultcs.aspx)first to see if it will fit your development needs.	If you are already using __RadChart__ in your projects, you can migrate to __RadHtmlChart__ by following these articles:[Migrating Series](2f393f28-bc31-459c-92aa-c3599785f6cc),[Migrating Axes](3f1bea81-87b9-4324-b0d2-d13131031048),[Migrating Date Axes](93226130-bc3c-4c53-862a-f9e17b2eb7dd),[Migrating Databinding](d6c5e2f1-280c-4fb0-b5b0-2f507697511d),[Feature parity](010dc716-ce38-480b-9157-572e0f140169).	Support for __RadChart__ is discontinued as of __Q3 2014__ , but the control will remain in the assembly so it can still be used.	We encourage you to use __RadHtmlChart__ for new development.
>


Apart from the common properties, every chart element may have unique appearance properties, e.g. “Figure”, “Rotation Angle”, “Text Properties”, etc. Here is a quick reference of the unique appearance properties of the chart and its elements.

## Chart


>caption  

|  __Set dimensions__  |
| ------ |
|Layout -> WidthLayout -> Height|
| __Set the chart type__ |
|

* Appearance -> DefaultType|
| __Set series orientation__ |
|

* Appearance -> Series Orientation|
| __Set a series palette__ |
|

* Appearance -> SeriesPalette

* Appearance -> CustomPalettes|
| __Set a predefined chart skin__ |
|

* Appearance -> Skin|
| __Set a bar overlap ratio__ How much two adjacent bars overlap each other|
|

* Appearance -> Appearance -> BarOverlapPercent|
| __Set bar width__ Define how much space will occupy all bars located on the same spot on the X Axis. The value represents percent of the total available space for that X Axis value.|
|

* Appearance -> Appearance -> BarWidthPercent|
| __Set text quality__ |
|

* Appearance -> Appearance -> TextQuality|
| __Set alternative text (accessibility feature)__ |
|

* Appearance -> AlternativeText|
| __Set the image MIME type (file type)__ |
|

* Settings -> ChartImageFormat|

## Chart title






>caption  

|  __Set the form__  |
| ------ |
|

* Elements -> ChartTitle -> Appearance -> Figure|
| __Set a rotation angle__ |
|

* Elements -> ChartTitle -> Appearance -> RotationAngle|
| __Style the chart title marker__ |
|

* Elements -> ChartTitle -> Marker -> Appearance|



## Legend






>caption  

|  __Style the legend title__  |
| ------ |
|

* Elements -> Legend -> TextBlock|
| __Style the legend marker__ |
|

* Elements -> Legend -> Marker -> Appearance|
| __Style the legend items’ appearance__ |
|

* Elements -> Legend -> Appearance -> ItemAppearance

* Elements -> Legend -> Appearance -> ItemMarkerAppearance

* Elements -> Legend -> Appearance -> ItemTextAppearance|
| __Set legend items’ orientation__ |
|

* Elements -> Legend -> Appearance -> Overflow|
| __Set a rotation angle__ |
|

* Elements -> Legend -> Appearance -> RotationAngle|

## PlotArea and Axes






>caption  

|  __Style the empty series (no data) message__  |
| ------ |
|

* Elements -> PlotArea -> EmptySeriesMessage|
| __Set intelligent series’ label positioning__ |
|

* Elements -> PlotArea -> IntelligentLabelsEnabled|
| __Set the axis’ layout mode__ Determine whether the axis values’ positions match the gridlines or the values are places between the gridlines|
|

* Elements -> PlotArea -> [axis] -> LayoutMode|
| __Style the axis’ maximum value end__ |
|

* Elements -> PlotArea -> axis [axis] -> Appearance -> Cap|
