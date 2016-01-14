---
title: Telerik.Web.UI.GridExcelBuilder.CellsCollection
page_title: Telerik.Web.UI.GridExcelBuilder.CellsCollection
description: Telerik.Web.UI.GridExcelBuilder.CellsCollection
---

# Telerik.Web.UI.GridExcelBuilder.CellsCollection

Cells collection

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.GridExcelBuilder.CellsCollection : ICollection, IEnumerable, IList

## Properties

###  Count `Int32`

Gets the number of elements contained in the ICollection. (Inherited from ICollection.)

###  IsFixedSize `Boolean`

Gets a value indicating whether the IList has a fixed size.

###  IsReadOnly `Boolean`

Gets a value indicating whether the IList is read-only.

###  IsSynchronized `Boolean`

Gets a value indicating whether access to the ICollection is synchronized (thread safe). (Inherited from ICollection.)

###  Item `CellElement`

Gets/sets the CellElement object at a given index

###  SyncRoot `Object`

Gets an object that can be used to synchronize access to the ICollection. (Inherited from ICollection.)

## Methods

###  Add

Adds a Cell element to the collection

#### Parameters

#### value `Telerik.Web.UI.GridExcelBuilder.CellElement`

CellElement value

#### Returns

`System.Int32` The position into which the new element was inserted, or -1 to indicate that the item was not inserted into the collection.

###  Clear

Removes all items from the collection.

#### Returns

`System.Void` 

###  Contains

Determines whether the collection contains a specific value.

#### Parameters

#### value `Telerik.Web.UI.GridExcelBuilder.CellElement`

The object to locate in the collection.

#### Returns

`System.Boolean` true if the object is found in the collection; otherwise, false.

###  CopyTo

Copies the elements of the ICollection to an Array, starting at a particular Array index. (Inherited from ICollection.)

#### Parameters

#### array `Telerik.Web.UI.GridExcelBuilder.CellElement`

The one-dimensional Array that is the destination of the elements copied from ICollection. The Array must have zero-based indexing.

#### index `System.Int32`

The zero-based index in array at which copying begins.

#### Returns

`System.Void` 

###  GetCellByName

Gets a CellElement by given unique column name

#### Parameters

#### uniqueName `System.String`

Column name

#### Returns

`Telerik.Web.UI.GridExcelBuilder.CellElement` CellElement object

###  GetEnumerator

Returns an enumerator that iterates through a collection. (Inherited from IEnumerable.)

#### Returns

`System.Collections.IEnumerator` An IEnumerator object that can be used to iterate through the collection.

###  IndexOf

Determines the index of a specific item in the collection.

#### Parameters

#### value `Telerik.Web.UI.GridExcelBuilder.CellElement`

The object to locate in the collection.

#### Returns

`System.Int32` The index of value if found in the collection; otherwise, -1.

###  Insert

Inserts an item to the collection at the specified index.

#### Parameters

#### index `System.Int32`

The zero-based index at which value should be inserted.

#### value `Telerik.Web.UI.GridExcelBuilder.CellElement`

The object to insert into the collection.

#### Returns

`System.Void` 

###  Remove

Removes the first occurrence of a specific object from the collection.

#### Parameters

#### value `Telerik.Web.UI.GridExcelBuilder.CellElement`

The object to remove from the collection.

#### Returns

`System.Void` 

###  RemoveAt

Removes the collection item at the specified index.

#### Parameters

#### index `System.Int32`

The zero-based index of the item to remove.

#### Returns

`System.Void` 

