---
title: Telerik.Web.UI.BarSeries
page_title: Telerik.Web.UI.BarSeries
description: Telerik.Web.UI.BarSeries
---

# Telerik.Web.UI.BarSeries

The bar/column series class will produce a bar/column chart type.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.StateManager
* Telerik.Web.UI.SeriesBase
* Telerik.Web.UI.BarSeries

## Properties

###  Stacked `Nullable`1`

Get/Set whether the series is stacked

###  StackType `HtmlChartStackType`

Specifies the stack type of the series.

###  GroupName `String`

Defines a group name for the series and applies stacking automatically

###  LabelsAppearance `BarColumnSeriesLabelsAppearance`

Defines the appearance settings of the series labels

###  SeriesItems `CategorySeriesItemCollection`

Creates a collection of category series items.

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

