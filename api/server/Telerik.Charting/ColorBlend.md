---
title: Telerik.Charting.ColorBlend
page_title: Telerik.Charting.ColorBlend
description: Telerik.Charting.ColorBlend
---

# Telerik.Charting.ColorBlend

Defines arrays of elements and positions used for interpolating GradientElement blending in a multicolor gradient.

## Inheritance Hierarchy

* System.Object
* Telerik.Charting.ChartingStateManagedCollection`1 : IChartingStateManager, ICollection, ICollection`1, IEnumerable, IEnumerable`1, IList, IList`1
* Telerik.Charting.ColorBlend : ICloneable

## Properties

###  Count `Int32`

Gets items count in collection

###  First `T`

Link to first item in collection

###  IsReadOnly `Boolean`

Gets true if collection is read-only

###  Item `T`

Gets the collection item at given index

###  Last `T`

Link to last item in collection

###  List `IList`1`

Items list

## Methods

###  Add

Adds new item in collection

#### Parameters

#### item ``0`

Item to add

#### Returns

`System.Void` 

###  AddRange

Adds a range of elements to the collection.

#### Parameters

#### blend `Telerik.Charting.ColorBlend`

Object that contains element to add

#### Returns

`System.Void` 

###  AddRange

Adds items range in collection

#### Parameters

#### itemsToAdd ``0`

Items array to add

#### Returns

`System.Void` 

###  Clear

Clears collection

#### Returns

`System.Void` 

###  Clone

Clone this object.

#### Returns

`System.Object` New instance of ColorBlend class with the same fields as this one.

###  Compare

Color blends comparer

#### Parameters

#### a `Telerik.Charting.ColorBlend`

First object for comparing

#### b `Telerik.Charting.ColorBlend`

Second object for comparing

#### Returns

`System.Boolean` Whether objects equal or not

###  Contains

Checks does collection contain the given item

#### Parameters

#### item ``0`

Item to check

#### Returns

`System.Boolean` True if item is a collection member

###  CopyTo

Copies the entire System.Collections.Generic.List<T> to a compatible one-dimensional
                array, starting at the specified index of the target array.

#### Parameters

#### array ``0`

The one-dimensional System.Array that is the destination of the elements

#### arrayIndex `System.Int32`

The zero-based index in array at which copying begins

#### Returns

`System.Void` 

###  Equals

Comparing two objects.

#### Parameters

#### obj `System.Object`

Object to compare.

#### Returns

`System.Boolean` Whether objects equal or not

###  GetBrush

Returns gradient brush

#### Parameters

#### rectangle `System.Drawing.RectangleF`

Rectangle of brush

#### angle `System.Single`

Angle of brush.

#### Returns

`System.Drawing.Drawing2D.LinearGradientBrush` Gradient brush

###  GetColor

Gets color at specified position.

#### Parameters

#### pos `System.Single`

Position to get color.

#### Returns

`System.Drawing.Color` Color at specified position.

###  GetColors

Gets ColorBlend's colors.

#### Returns

`System.Drawing.Color[]` ColorBlend's colors.

###  GetEnumerator

Returns an enumerator that iterates through the System.Collections.Generic.List>T<.

#### Returns

`System.Collections.Generic.IEnumerator`1` A System.Collections.Generic.List>T<.Enumerator for the System.Collections.Generic.List>T<.

###  GetPositions

Gets ColorBlend's positions.

#### Returns

`System.Single[]` ColorBlend's positions.

###  IndexOf

Item index in collection

#### Parameters

#### item ``0`

Item to get index of

#### Returns

`System.Int32` Index

###  Insert

Inserts item at the given index

#### Parameters

#### index `System.Int32`

Index

#### item ``0`

Item to insert

#### Returns

`System.Void` 

###  LoadFrom

Load pairs colors\positions from specified object.

#### Parameters

#### blend `Telerik.Charting.ColorBlend`

Object to load from.

#### Returns

`System.Void` 

###  LoadViewState

Loads collection from view state

#### Parameters

#### state `System.Object`

View state to load from

#### Returns

`System.Void` 

###  OnClear

Before collection clearing event

#### Returns

`System.Void` 

###  OnClearComplete

Collection after clean event

#### Returns

`System.Void` 

###  OnInsert

Item before insert event

#### Parameters

#### index `System.Int32`

Index to insert at

#### value `System.Object`

Value to insert

#### Returns

`System.Void` 

###  OnInsertComplete

Item after insert event

#### Parameters

#### index `System.Int32`

Index to insert at

#### value `System.Object`

Value to insert

#### Returns

`System.Void` 

###  OnRemove

Item before remove event

#### Parameters

#### index `System.Int32`

Index to insert at

#### value `System.Object`

Value to insert

#### Returns

`System.Void` 

###  OnRemoveComplete

Item after remove event

#### Parameters

#### index `System.Int32`

Index to insert at

#### value `System.Object`

Value to insert

#### Returns

`System.Void` 

###  PopulateFromXml

Populates collection from XML element

#### Parameters

#### rootElement `System.Xml.XmlElement`

XmlElement to import from

#### Returns

`System.Void` 

###  Remove

Removes item from collection

#### Parameters

#### item ``0`

Item to remove

#### Returns

`System.Boolean` True in case of success

###  RemoveAt

Removes item from collection at given index

#### Parameters

#### index `System.Int32`

Index to remove at

#### Returns

`System.Void` 

###  SaveViewState

Saves collection to a view state

#### Returns

`System.Object` Saved state bag object

###  SetDirty

Sets is item in the dirty state

#### Returns

`System.Void` 

###  SetItemDirty

Marks collection item dirty

#### Parameters

#### item ``0`

Item to mark

#### Returns

`System.Void` 

