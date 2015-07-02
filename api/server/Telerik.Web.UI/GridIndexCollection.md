---
title: Telerik.Web.UI.GridIndexCollection
page_title: Telerik.Web.UI.GridIndexCollection
description: Telerik.Web.UI.GridIndexCollection
---

# Telerik.Web.UI.GridIndexCollection

This is a collection of item indexes - each item index is unique within the
            collection

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.GridIndexCollection

## Properties

###  Count `Int32`

Gets the number of elements contained in the collection.

###  IsReadOnly `Boolean`

Gets a boolean value indicationg whether the collection is read only and can me modified.

###  IsSynchronized `Boolean`

Gets a value indicating whether access to the collection
            is synchronized (thread safe).

###  SyncRoot `Object`

Gets an object that can be used to synchronize access to the collection.

## Methods

###  CopyTo

Copies the elements of the collection
            to an , starting at a particular 
            index.

#### Parameters

#### array `System.Array`

The one-dimensional  that is
            the destination of the elements copied from .
            The  must have zero-based indexing.

#### index `System.Int32`

The zero-based index in  at which
            copying begins.

#### Returns

`System.Void` 

###  GetEnumerator

Returns an enumerator that iterates through a collection.

#### Returns

`System.Collections.IEnumerator` An  object that can be
            used to iterate through the collection.

###  Add

This method is for internal use only!

#### Parameters

#### hierarchicalIndex `System.String`

#### Returns

`System.Void` 

###  Contains

Determines whether the collection contains the specified item by providing its hierarchical index.

#### Parameters

#### hierarchicalIndex `System.String`

The hierarchical index of the item.

#### Returns

`System.Boolean` Returns whethever the item is present in the collection

###  Clear

Clears all items from the collection.

#### Returns

`System.Void` 

###  Add

Constructs and add item hierarchical index to the collection
            of indexes.

#### Remarks
The hierarchical-index is based on sequential numbers of
            indxes of items and detail tables. For example
            index Add(1) will construct the hierarchicalindex for Item 1 in MasterTableView.
            Add(1, 0, 2) references to the item with index 2 that belongs to a child table 0 of
            the item 1 in MastertableView.

#### Parameters

#### indexes `System.Int32`

#### Returns

`System.Void` 

###  ContainsChildIndex

Determines whether the collection contains the child index by providing a parent index.

#### Parameters

#### parentIndex `System.String`

The parent index.

#### Returns

`System.Boolean` Returns a boolean property whether the index exists.

###  ChildIndexes

Gets a collection of child indexes based on a provided parent index.

#### Parameters

#### parentIndex `System.String`

The parent index.

#### Returns

`Telerik.Web.UI.GridIndexCollection` The child indexes collection.

###  ChildIndexes

Gets a collection of child indexes based on a provided parent index and detail table index.

#### Parameters

#### parentIndex `System.String`

The parent index.

#### detailTableIndex `System.Int32`

The index of the DetailTable.

#### Returns

`Telerik.Web.UI.GridIndexCollection` The child indexes collection.

###  RemoveChildIndexes

Removes indexes from the collection of child indexes based on a provided parent index and detail table index.

#### Parameters

#### parentIndex `System.String`

The parent index.

#### detailTableIndex `System.Int32`

The index of the DetailTable.

#### Returns

`System.Void` 

###  GetArrayList

Persistence Framework need this method to get the internal list when restoring the state of the collection

#### Returns

`System.Collections.ArrayList` The internal ArrayList the GridIndexCollection is based on

