---
title: Telerik.Web.UI.GridGroupByFieldList
page_title: Telerik.Web.UI.GridGroupByFieldList
description: Telerik.Web.UI.GridGroupByFieldList
---

# Telerik.Web.UI.GridGroupByFieldList

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.GridGroupByFieldList

## Properties

###  IsReadOnly `Boolean`

Gets a value indicating whether the collection
            is read-only.

###  IsFixedSize `Boolean`

Gets a value indicating whether the collection
            has a fixed size.

###  Count `Int32`

Gets the number of group by fields contained in the collection.

###  SyncRoot `Object`

Gets an object that can be used to synchronize access to the collection.

###  IsSynchronized `Boolean`

Gets a value indicating whether access to the collection
            is synchronized (thread safe).

## Methods

###  FindByName

Finds a  item in the collection by specified FieldName.

#### Parameters

#### FieldName `System.String`

The specified FieldName.

#### Returns

`Telerik.Web.UI.GridGroupByField` 

###  Add

Adds the specified  item.

#### Parameters

#### value `Telerik.Web.UI.GridGroupByField`

The .

#### Returns

`System.Int32` 

###  Insert

Inserts a  at the specified index.

#### Parameters

#### index `System.Int32`

The index where the field will be inserted.

#### value `Telerik.Web.UI.GridGroupByField`

The field to be inserted.

#### Returns

`System.Void` 

###  AddRange

Adds a collection of fields in the current collection.

#### Parameters

#### c `Telerik.Web.UI.GridGroupByFieldList`

The c.

#### Returns

`System.Void` 

###  InsertRange

Inserts a collection of  items at the specified index.

#### Parameters

#### index `System.Int32`

The index where the items will be inserted.

#### c `Telerik.Web.UI.GridGroupByFieldList`

The items to be inserted.

#### Returns

`System.Void` 

###  Contains

Determines whether the collection contains
            a specific value.

#### Parameters

#### value `System.Object`

The item to locate in the collection.

#### Returns

`System.Boolean` true if the  is found in the ;
            otherwise, false.

###  Clear

Removes all items from the collection.

#### Returns

`System.Void` 

###  IndexOf

Determines the index of a specific item in the collection

#### Parameters

#### value `System.Object`

The  to locate in the collection.

#### Returns

`System.Int32` The index of  if found in the list; otherwise,
            -1.

###  RemoveAt

Removes the  at the specified
            index.

#### Parameters

#### index `System.Int32`

The zero-based index of the item to remove.

#### Returns

`System.Void` 

###  CopyTo

Copies the elements of the collection
            to an , starting at a particular 
            index.

#### Parameters

#### array `System.Array`

The one-dimensional  that is
            the destination of the elements copied from collection
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

