---
title: Telerik.Charting.AxisSegmentCollection
page_title: Telerik.Charting.AxisSegmentCollection
description: Telerik.Charting.AxisSegmentCollection
---

# Telerik.Charting.AxisSegmentCollection

Segments collection

## Inheritance Hierarchy

* System.Object
* Telerik.Charting.ChartingStateManagedCollection`1 : IChartingStateManager, ICollection, ICollection`1, IEnumerable, IEnumerable`1, IList, IList`1
* Telerik.Charting.AxisSegmentCollection

## Properties

###  IsHaveNegative `Boolean`

Gets true if just one negative value presents in segment

###  IsHavePositive `Boolean`

Gets true if just one positive value presents in segment

###  IsHaveZero `Boolean`

Gets true if segment contains axis zero value

###  NearZeroValue `Double`

Gets the nearest to Zero axis value

###  List `IList`1`

Items list

###  First `T`

Link to first item in collection

###  Last `T`

Link to last item in collection

###  Item `T`

Gets the collection item at given index

###  Count `Int32`

Gets items count in collection

###  IsReadOnly `Boolean`

Gets true if collection is read-only

## Methods

###  CheckedAdd

Check segment and add it into collection

#### Parameters

#### segment `Telerik.Charting.AxisSegment`

Segment for adding

#### Returns

`System.Void` 

###  Search

Searches for a segment where value is located

#### Parameters

#### value `System.Double`

Value to check

#### Returns

`Telerik.Charting.AxisSegment` AxisSegment

###  Search

Searches for a segment where value is located

#### Parameters

#### value `System.Double`

Value to check

#### withoutNull `System.Boolean`

Null values exclusion reason

#### Returns

`Telerik.Charting.AxisSegment` AxisSegment

###  Sort

Sorts segments

#### Returns

`System.Void` 

###  Test

Checks if series item in current segment

#### Parameters

#### items `Telerik.Charting.ChartSeriesItemsCollection`

SeriesItemsCollectionv

#### Returns

`System.Boolean` True if value is in segment

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

###  RemoveAt

Removes item from collection at given index

#### Parameters

#### index `System.Int32`

Index to remove at

#### Returns

`System.Void` 

###  Add

Adds new item in collection

#### Parameters

#### item ``0`

Item to add

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

###  Remove

Removes item from collection

#### Parameters

#### item ``0`

Item to remove

#### Returns

`System.Boolean` True in case of success

###  GetEnumerator

Returns an enumerator that iterates through the System.Collections.Generic.List>T<.

#### Returns

`System.Collections.Generic.IEnumerator`1` A System.Collections.Generic.List>T<.Enumerator for the System.Collections.Generic.List>T<.

###  LoadViewState

Loads collection from view state

#### Parameters

#### state `System.Object`

View state to load from

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

###  OnClear

Before collection clearing event

#### Returns

`System.Void` 

###  OnClearComplete

Collection after clean event

#### Returns

`System.Void` 

###  PopulateFromXml

Populates collection from XML element

#### Parameters

#### rootElement `System.Xml.XmlElement`

XmlElement to import from

#### Returns

`System.Void` 

###  ToString

ToString() override. Used in the properties grid to avoid object type showing.

#### Returns

`System.String` Empty string

