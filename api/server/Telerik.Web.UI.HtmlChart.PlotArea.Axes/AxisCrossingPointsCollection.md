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

## Properties

###  Item `ItemType`

ItemType collection indexer.

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

###  Add

Add an item to the collection

#### Parameters

#### item ``0`

Item to be added to the collection

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

###  AddRange

Adds the items to the end of the collection

#### Parameters

#### items `System.Collections.Generic.IEnumerable{`0}`

Items to be added

#### Returns

`System.Void` 

###  Contains

Determines whether an element is in the collection

#### Parameters

#### item ``0`

The item to locate in the collection

#### Returns

`System.Boolean` true if item is found in the collection; otherwise, false.

###  CopyTo

Copies the array or portion of it to the collection

#### Parameters

#### array ``0`

One-dimensional array that serves as a destination

#### index `System.Int32`

Zero-based index

#### Returns

`System.Void` 

###  IndexOf

Returns the zero-based index of the first occurrence of a value in the collection or in a portion of it.

#### Parameters

#### item ``0`

Target item

#### Returns

`System.Int32` The zero-based index of the first occurrence of item within the entire collection

###  Insert

Inserts an element into the collection at the specified index.

#### Parameters

#### index `System.Int32`

The zero-based index at which item should be inserted.

#### item ``0`

The object to insert.

#### Returns

`System.Void` 

###  Remove

Removes the first occurrence of a specific object from the collection.

#### Parameters

#### item ``0`

The object to remove from the collection

#### Returns

`System.Void` 

###  RemoveAt

Removes the element at the specified index of the collection.

#### Parameters

#### index `System.Int32`

The zero-based index of the element to remove.

#### Returns

`System.Void` 

