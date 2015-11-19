---
title: Telerik.Web.UI.GridExcelBuilder.WorksheetCollection
page_title: Telerik.Web.UI.GridExcelBuilder.WorksheetCollection
description: Telerik.Web.UI.GridExcelBuilder.WorksheetCollection
---

# Telerik.Web.UI.GridExcelBuilder.WorksheetCollection

Worksheet collection

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.GridExcelBuilder.WorksheetCollection : ICollection, IEnumerable, IList, IWorksheetCollection

## Properties

###  IsFixedSize `Boolean`

Gets a value indicating whether the collection has a fixed size.

###  IsReadOnly `Boolean`

Gets a value indicating whether the collection is read-only.

###  Item `WorksheetElement`

Gets/sets the Worksheet element residing at the specified position

###  Count `Int32`

Gets the number of elements contained in the ICollection. (Inherited from ICollection.)

###  IsSynchronized `Boolean`

Gets a value indicating whether access to the ICollection is synchronized (thread safe). (Inherited from ICollection.)

###  SyncRoot `Object`

Gets an object that can be used to synchronize access to the ICollection. (Inherited from ICollection.)

## Methods

###  Add

Adds an item to the collection.

#### Parameters

#### value `Telerik.Web.UI.GridExcelBuilder.WorksheetElement`

The object to add to the collection.

#### Returns

`System.Int32` The position into which the new element was inserted, or -1 to indicate that the item was not inserted into the collection.

###  Clear

Removes all items from the collection.

#### Returns

`System.Void` 

###  Contains

Determines whether the collection contains a specific value.

#### Parameters

#### value `Telerik.Web.UI.GridExcelBuilder.WorksheetElement`

The object to locate in the collection.

#### Returns

`System.Boolean` true if the object is found in the collection; otherwise, false.

###  IndexOf

Determines the index of a specific item in the collection.

#### Parameters

#### value `Telerik.Web.UI.GridExcelBuilder.WorksheetElement`

The object to locate in the collection.

#### Returns

`System.Int32` The index of value if found in the collection; otherwise, -1.

###  Insert

Inserts an item to the collection at the specified index.

#### Parameters

#### index `System.Int32`

The zero-based index at which value should be inserted.

#### value `Telerik.Web.UI.GridExcelBuilder.WorksheetElement`

The object to insert into the collection.

#### Returns

`System.Void` 

###  Remove

Removes the first occurrence of a specific object from the collection.

#### Parameters

#### value `Telerik.Web.UI.GridExcelBuilder.WorksheetElement`

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

###  CopyTo

Copies the elements of the ICollection to an Array, starting at a particular Array index. (Inherited from ICollection.)

#### Parameters

#### array `Telerik.Web.UI.GridExcelBuilder.WorksheetElement`

The one-dimensional Array that is the destination of the elements copied from ICollection. The Array must have zero-based indexing.

#### index `System.Int32`

The zero-based index in array at which copying begins.

#### Returns

`System.Void` 

###  GetEnumerator

Returns an enumerator that iterates through a collection. (Inherited from IEnumerable.)

#### Returns

`System.Collections.IEnumerator` An IEnumerator object that can be used to iterate through the collection.

