---
title: Telerik.Charting.ChartLabelsCollection
page_title: Telerik.Charting.ChartLabelsCollection
description: Telerik.Charting.ChartLabelsCollection
---

# Telerik.Charting.ChartLabelsCollection

Collection of labels

## Inheritance Hierarchy

* System.Object
* Telerik.Charting.ChartingStateManagedCollection`1 : IChartingStateManager, ICollection, ICollection`1, IEnumerable, IEnumerable`1, IList, IList`1
* Telerik.Charting.ChartLabelsCollection

## Properties

###  Count `Int32`

Gets items count in collection

###  First `T`

Link to first item in collection

###  IsReadOnly `Boolean`

Gets true if collection is read-only

###  Item `LabelItem`

Gets or sets a LabelItem at the specific position in Labels collection.

###  Item `T`

Gets the collection item at given index

###  Last `T`

Link to last item in collection

###  List `IList`1`

Items list

###  Parent `Object`

Parent element

## Methods

###  Add

Add LabelItem at the collection

#### Parameters

#### item `Telerik.Charting.LabelItem`

LabelItem for adding

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

Clear collection

#### Returns

`System.Void` 

###  Clear

Clears collection

#### Returns

`System.Void` 

###  ClearBindableItems

Clear bindable items from collection

#### Returns

`System.Void` 

###  Contains

Checks does collection contain the given item

#### Parameters

#### item ``0`

Item to check

#### Returns

`System.Boolean` True if item is a collection member

###  CopyBindableItemsTo

Copy bindable items to collection

#### Parameters

#### items `Telerik.Charting.ChartLabelsCollection`

Collection of items copy to

#### Returns

`System.Void` 

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

###  IndexOf

Item index in collection

#### Parameters

#### item ``0`

Item to get index of

#### Returns

`System.Int32` Index

###  Insert

Insert LabelItem in collection at the specific position

#### Parameters

#### index `System.Int32`

Position

#### item `Telerik.Charting.LabelItem`

LabelItem

#### Returns

`System.Void` 

###  Insert

Inserts item at the given index

#### Parameters

#### index `System.Int32`

Index

#### item ``0`

Item to insert

#### Returns

`System.Void` 

###  IsVisible

Visibility of items collection

#### Returns

`System.Boolean` Whether any item is visible

###  LoadViewState

Load data from ViewState

#### Parameters

#### state `System.Object`

ViewState with data

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

Clear items

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

Insert item in collection

#### Parameters

#### index `System.Int32`

Index to insert in

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

Remove item at specified index

#### Parameters

#### index `System.Int32`

#### value `System.Object`

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

Remove LabelItem from collection

#### Parameters

#### item `Telerik.Charting.LabelItem`

LabelItem

#### Returns

`System.Boolean` 

###  Remove

Removes item from collection

#### Parameters

#### item ``0`

Item to remove

#### Returns

`System.Boolean` True in case of success

###  RemoveAt

Remove LabelItem in the specific position from collection

#### Parameters

#### index `System.Int32`

Position

#### Returns

`System.Void` 

###  RemoveAt

Removes item from collection at given index

#### Parameters

#### index `System.Int32`

Index to remove at

#### Returns

`System.Void` 

###  SaveViewState

Save data to ViewState

#### Returns

`System.Object` Saved data

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

