---
title: Telerik.Charting.CustomPalettesCollection
page_title: Telerik.Charting.CustomPalettesCollection
description: Telerik.Charting.CustomPalettesCollection
---

# Telerik.Charting.CustomPalettesCollection

User-defined palettes collection

## Inheritance Hierarchy

* System.Object
* Telerik.Charting.ChartingStateManagedCollection`1 : IChartingStateManager, ICollection, ICollection`1, IEnumerable, IEnumerable`1, IList, IList`1
* Telerik.Charting.CustomPalettesCollection

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

Indicates whether the specified palette item exists in the collection.

#### Parameters

#### paletteName `System.String`

Name of palette

#### Returns

`System.Boolean` Whether the specified palette item exists in the collection

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

###  GetEnumerator

Returns an enumerator that iterates through the System.Collections.Generic.List>T<.

#### Returns

`System.Collections.Generic.IEnumerator`1` A System.Collections.Generic.List>T<.Enumerator for the System.Collections.Generic.List>T<.

###  GetPalette

Returns a reference to the Palette object at the specified index.

#### Parameters

#### index `System.Int32`

Index to get palette

#### Returns

`Telerik.Charting.Palette` Palette at specified index

###  GetPalette

Returns a reference to the Palette object by the specified name.

#### Parameters

#### name `System.String`

Name of palette

#### Returns

`Telerik.Charting.Palette` Palette object with specified name

###  IndexOf

Returns the index of the specified palette item.

#### Parameters

#### paletteName `System.String`

Name of palette

#### Returns

`System.Int32` Index of the specified palette item

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

Removes palette with specified name from collection

#### Parameters

#### paletteName `System.String`

Name of palette

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

