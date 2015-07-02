---
title: Telerik.Web.UI.HtmlChart.PlotArea.Axes.AxisCrossingPointsCollection
page_title: Telerik.Web.UI.HtmlChart.PlotArea.Axes.AxisCrossingPointsCollection
description: Telerik.Web.UI.HtmlChart.PlotArea.Axes.AxisCrossingPointsCollection
---

# Telerik.Web.UI.HtmlChart.PlotArea.Axes.AxisCrossingPointsCollection

A collection, which consists of the points at which the Y axes cross with the X axis.

## Inheritance Hierarchy

* System.Object
* System.Web.UI.StateManagedCollection
* Telerik.Web.StronglyTypedStateManagedCollection`1
* Telerik.Web.UI.HtmlChart.PlotArea.Axes.AxisCrossingPointsCollection

## Methods

###  Add

Adds an axis crossing point.

#### Parameters

#### item `Telerik.Web.UI.AxisCrossingPoint`

#### Returns

`System.Void` 

###  Add

Adds an axis crossing point, specified by a decimal value. This option is used for numeric series.

#### Parameters

#### value `System.Nullable{System.Decimal}`

#### Returns

`System.Void` 

###  Add

Adds an axis crossing point, specified by an integer value. This option is used for categorical series.

#### Parameters

#### value `System.Nullable{System.Int32}`

#### Returns

`System.Void` 

###  AddRange

Adds an array of decimal crossing points.

#### Parameters

#### values `System.Collections.Generic.IEnumerable{System.Decimal}`

#### Returns

`System.Void` 

###  AddRange

Adds an array of decimal crossing points.

#### Parameters

#### values `System.Collections.Generic.IEnumerable{System.Nullable{System.Decimal}}`

#### Returns

`System.Void` 

###  AddRange

Adds an array of integer crossing points, which is suitable for categorical series.

#### Parameters

#### values `System.Collections.Generic.IEnumerable{System.Int32}`

#### Returns

`System.Void` 

###  AddRange

Adds an array of integer crossing points, which is suitable for categorical series.

#### Parameters

#### values `System.Collections.Generic.IEnumerable{System.Nullable{System.Int32}}`

#### Returns

`System.Void` 

