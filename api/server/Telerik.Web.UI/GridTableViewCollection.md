---
title: Telerik.Web.UI.GridTableViewCollection
page_title: Telerik.Web.UI.GridTableViewCollection
description: Telerik.Web.UI.GridTableViewCollection
---

# Telerik.Web.UI.GridTableViewCollection

A collection that stores Telerik.Web.UI.GridTableView objects. You can access
            this collection through P:Telerik.Web.UI.GridTableView.DetailTables property of a
            parent Telerik.Web.UI.GridTableView .

## Inheritance Hierarchy

* System.Object
* System.Collections.CollectionBase
* Telerik.Web.UI.GridTableViewCollection

## Properties

###  Item `GridTableView`

Represents the entry at the specified index of the .

###  OwnerGrid `RadGrid`

Get the instance of  that owns this instance

## Methods

###  Add

Adds a  with the specified value to the 
                .

#### Parameters

#### value `Telerik.Web.UI.GridTableView`

The  to add.

#### Returns

`System.Int32` The index at which the new element was inserted.

###  AddRange

Copies the elements of an array to the end of the .

#### Parameters

#### value `Telerik.Web.UI.GridTableView`

An array of type  containing the objects to add to the collection.

#### Returns

`System.Void` None.

###  AddRange

Adds the contents of another  to the end of the collection.

#### Parameters

#### value `Telerik.Web.UI.GridTableViewCollection`

A  containing the objects to add to the collection.

#### Returns

`System.Void` None.

###  Contains

Gets a value indicating whether the 
                contains the specified .

#### Parameters

#### value `Telerik.Web.UI.GridTableView`

The  to locate.

#### Returns

`System.Boolean` if the  is contained in the collection; 
              otherwise, .

###  CopyTo

Copies the  values to a one-dimensional  instance at the 
               specified index.

#### Parameters

#### array `Telerik.Web.UI.GridTableView`

The one-dimensional  that is the destination of the values copied from  .

#### index `System.Int32`

The index in  where copying begins.

#### Returns

`System.Void` None.

###  GetEnumerator

Returns an enumerator that can iterate through 
                  the  .

#### Returns

`Telerik.Web.UI.GridDataTableEnumerator` None.

###  IndexOf

Returns the index of a  in 
                  the  .

#### Parameters

#### value `Telerik.Web.UI.GridTableView`

The  to locate.

#### Returns

`System.Int32` The index of the  of  in the 
            , if found; otherwise, -1.

###  Insert

Inserts a  into the  at the specified index.

#### Parameters

#### index `System.Int32`

The zero-based index where  should be inserted.

####  value `Telerik.Web.UI.GridTableView`

The  to insert.

#### Returns

`System.Void` None.

###  Remove

Removes a specific  from the 
                .

#### Parameters

#### value `Telerik.Web.UI.GridTableView`

The  to remove from the  .

#### Returns

`System.Void` None.

