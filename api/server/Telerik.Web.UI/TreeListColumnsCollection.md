---
title: Telerik.Web.UI.TreeListColumnsCollection
page_title: Telerik.Web.UI.TreeListColumnsCollection
description: Telerik.Web.UI.TreeListColumnsCollection
---

# Telerik.Web.UI.TreeListColumnsCollection

A class representing a collection of RadTreeListColumn objects.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.TreeListColumnsCollection : ICollection, ICollection`1, IEnumerable, IEnumerable`1, IList, IList`1, IStateManager

## Properties

###  Owner `RadTreeList`

Gets a reference to the owner  object.

###  Count `Int32`

Gets the count of columns in the collection.

###  IsReadOnly `Boolean`

Gets a value indicating whether the collection is read only.

## Methods

###  IndexOf

Gets the index of the passed column in the column collection.

#### Parameters

#### item `Telerik.Web.UI.TreeListColumn`

The TreeListColumn object to find in the collection.

#### Returns

`System.Int32` An integer that indicates the index of the column in the collection.

###  Insert

Inserts the provided column at the given index in the collection.

#### Parameters

#### index `System.Int32`

An integer that indicates at which position the column should be inserted.

#### item `Telerik.Web.UI.TreeListColumn`

The TreeListColumn object that should be added.

#### Returns

`System.Void` 

###  RemoveAt

Removes the column at the provided index.

#### Parameters

#### index `System.Int32`

An integer specifying the position from which a column should be removed.

#### Returns

`System.Void` 

###  Add

Adds the passed column to the column collection.

#### Parameters

#### item `Telerik.Web.UI.TreeListColumn`

A TreeListColumn object that should be added to the collection.

#### Returns

`System.Void` 

###  Clear

Clears all column from the collection.

#### Returns

`System.Void` 

###  Contains

Checks whether a given column belongs to the collection.

#### Parameters

#### item `Telerik.Web.UI.TreeListColumn`

The TreeListColumn object to check for in the collection.

#### Returns

`System.Boolean` A boolean value indicating whether the column was found.

###  CopyTo

Copies the column collection to a given array.

#### Parameters

#### array `Telerik.Web.UI.TreeListColumn`

A reference to TreeListColumn[] object where the columns need to be copied to.

#### arrayIndex `System.Int32`

An integer indicating from which index on the columns should be added to the new collection.

#### Returns

`System.Void` 

###  Remove

Removes the passed column from the collection.

#### Parameters

#### item `Telerik.Web.UI.TreeListColumn`

The TreeListColumn to remove from the collection.

#### Returns

`System.Boolean` A boolean value indicating whether the column was removed successfully

###  GetEnumerator

Returns an enumerator that iterates through the collection.

#### Returns

`System.Collections.Generic.IEnumerator`1` An IEnumerator<TreeListColumn> used for iterating the collection.

