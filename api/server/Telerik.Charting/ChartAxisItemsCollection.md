---
title: Telerik.Charting.ChartAxisItemsCollection
page_title: Telerik.Charting.ChartAxisItemsCollection
description: Telerik.Charting.ChartAxisItemsCollection
---

# Telerik.Charting.ChartAxisItemsCollection

A collection to store axis items.

## Inheritance Hierarchy

* System.Object
* Telerik.Charting.ChartingStateManagedCollection`1
* Telerik.Charting.ChartAxisItemsCollection

## Properties

###  Parent `ChartAxis`

Parent element

###  Item `ChartAxisItem`

Gets or sets a ChartAxisItem element at the specified position.

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

###  DeleteItem

Removes axis item from collection

#### Parameters

#### itemIndex `System.Int32`

Item index to delete at

#### Returns

`System.Void` 

###  GetItemRotationAngle

Gets axis item's rotation angle

#### Parameters

#### item `Telerik.Charting.ChartAxisItem`

Axis item

#### Returns

`System.Single` Rotation angle value

###  GetWidth

Gets widest axis item's width

#### Returns

`System.Single` Width value

###  GetHeight

Gets highest axis item's height

#### Returns

`System.Single` Height value

###  Add

Adds a chart axis item to the collection.

#### Parameters

#### chartAxisItem `Telerik.Charting.ChartAxisItem`

Axis item to add

#### Returns

`System.Void` 

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

