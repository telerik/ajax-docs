---
title: Telerik.Web.UI.WaterfallSeries
page_title: Telerik.Web.UI.WaterfallSeries
description: Telerik.Web.UI.WaterfallSeries
---

# Telerik.Web.UI.WaterfallSeries

The bar/column series class will produce a bar/column chart type.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.StateManager
* Telerik.Web.UI.SeriesBase
* Telerik.Web.UI.WaterfallSeries

## Properties

###  DataSummaryField `String`

The data field with the values of the SummaryType value.
            There the possible values are "runningTotal" and "total".

###  LabelsAppearance `BarColumnSeriesLabelsAppearance`

Defines the appearance settings of the series labels

###  SeriesItems `WaterfallSeriesItemCollection`

Creates a collection of waterfall series items.

###  Gap `Nullable`1`

Gets or Sets the distance between the category clusters.

#### Remarks
The value of the property cannot be negative.

###  Spacing `Nullable`1`

Gets or Sets the space between the chart series as proportion of the series width.

#### Remarks
The value of the property cannot be negative.

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

