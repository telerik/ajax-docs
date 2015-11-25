---
title: Telerik.Web.UI.AreaSeries
page_title: Telerik.Web.UI.AreaSeries
description: Telerik.Web.UI.AreaSeries
---

# Telerik.Web.UI.AreaSeries

The area series class will produce an area chart type.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.StateManager : IMarkableStateManager, IStateManager
* Telerik.Web.UI.SeriesBase
* Telerik.Web.UI.MarkersSeriesBase
* Telerik.Web.UI.HtmlChart.PlotArea.Series.MarkerSeriesBaseWithLine
* Telerik.Web.UI.AreaSeries : IStackedSeries

## Properties

###  SeriesItems `CategorySeriesItemCollection`

Creates a collection with specific series items for the current series type

###  MissingValues `MissingValuesBehavior`

Get/Set missing values behavior

###  Stacked `Nullable`1`

Get/Set whether the series is stacked

###  StackType `HtmlChartStackType`

Specifies the stack type of the series.

###  LineAppearance `ExtendedLineAppearance`

Defines the appearance settings of the line.

###  MissingValues `MissingValuesBehavior`

Get/Set missing values behavior

###  MarkersAppearance `MarkersAppearance`

Defines the appearance settings of the markers

###  LabelsAppearance `LineAndScatterLabelsAppearance`

Defines the appearance settings of the series labels

###  Type `SeriesType`

Gets the type of the series

###  Data `String`

Get/Set the serialized data entities in a list format. This property is usually set if the series is data bound

###  Name `String`

Get/Set the name of the series

###  Visible `Boolean`

Get/Set the visibility of the series

###  AxisName `String`

Get/set the name of the axis, to which the values will be associated

###  DataField `String`

The data field with the values of the series

###  DataFieldX `String`

The data field with the values of the series along the X axis

###  DataFieldY `String`

The data field with the values of the series along the Y axis

###  DataFieldSize `String`

Specifies the size value of the bubble item in bubble series when the chart is databound.

###  DataFieldTooltip `String`

Specifies the tooltip value of the bubble item in bubble series when the chart is databound.

###  Items `SeriesItemCollection`

The Items collection is Obsolete. Use the SeriesItems collection to specify the series items.

#### Remarks
The Items collection is Obsolete. Use the SeriesItems collection to programmatically set the series items.

###  Appearance `SeriesAppearance`

Defines the appearance settings of the series

###  TooltipsAppearance `SeriesAppearance`

Defines the appearance settings of the series

###  ColorField `String`

Specifies the color of the series when the chart is databound.

###  ZIndex `Nullable`1`

Specifies the color of the series when the chart is databound.

