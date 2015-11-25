---
title: Telerik.Web.UI.GridColumnGroupCollection
page_title: Telerik.Web.UI.GridColumnGroupCollection
description: Telerik.Web.UI.GridColumnGroupCollection
---

# Telerik.Web.UI.GridColumnGroupCollection

Represents a collection of Telerik.Web.UI.GridColumnGroup . Used to define MultiColumn Headers.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.GridColumnGroupCollection : ICollection, ICollection`1, IEnumerable, IEnumerable`1, IList, IList`1, IStateManager

## Properties

###  Item `GridColumnGroup`

Gets the  at the specified index.

###  Count `Int32`

Gets the number of elements contained in the .

###  IsReadOnly `Boolean`

Gets a value indicating whether the 
            is read-only.

###  IsTrackingViewState `Boolean`

Gets a value indicating whether a the 
            is tracking its view state changes.

## Methods

###  IndexOf

Gets the index of the  item in the collection.

#### Parameters

#### item `Telerik.Web.UI.GridColumnGroup`

The item.

#### Returns

`System.Int32` index of the item

###  Insert

Inserts  group at the specified index.

#### Parameters

#### index `System.Int32`

The index.

#### item `Telerik.Web.UI.GridColumnGroup`

The item.

#### Returns

`System.Void` 

###  RemoveAt

Removes the  item at the specified
            index.

#### Parameters

#### index `System.Int32`

The zero-based index of the item to remove.

#### Returns

`System.Void` 

###  Add

Adds the specified item.

#### Parameters

#### item `Telerik.Web.UI.GridColumnGroup`

The item.

#### Returns

`System.Void` 

###  Clear

Removes all items from the .

#### Returns

`System.Void` 

###  Contains

Determines whether [contains] [the specified item].

#### Parameters

#### item `Telerik.Web.UI.GridColumnGroup`

The item.

#### Returns

`System.Boolean` true if the items is contained, otherwise false

###  CopyTo

Copies the current collection to the specified array.

#### Parameters

#### array `Telerik.Web.UI.GridColumnGroup`

The array.

#### arrayIndex `System.Int32`

the index to start copying from.

#### Returns

`System.Void` 

###  Remove

Removes the specified item.

#### Parameters

#### item `Telerik.Web.UI.GridColumnGroup`

The item.

#### Returns

`System.Boolean` 

###  GetEnumerator

Returns an enumerator that iterates through the collection.

#### Returns

`System.Collections.Generic.IEnumerator`1` An enumerator that can be used to
            iterate through the collection.

###  System.Collections.IEnumerable.GetEnumerator

Returns an enumerator that iterates through a collection.

#### Returns

`System.Collections.IEnumerator` An  object that can be used to
            iterate through the collection.

###  System.Collections.IList.Add

Adds an item to the .

#### Parameters

#### value `System.Object`

The  to add to the .

#### Returns

`System.Int32` The position into which the new element was inserted.

###  System.Collections.IList.Clear

Removes all items from the .

#### Returns

`System.Void` 

###  System.Collections.IList.Contains

Determines whether the  contains a specific
            value.

#### Parameters

#### value `System.Object`

The  to locate in the .

#### Returns

`System.Boolean` true if the  is found in the ;
            otherwise, false.

###  System.Collections.IList.IndexOf

Determines the index of a specific item in the .

#### Parameters

#### value `System.Object`

The  to locate in the .

#### Returns

`System.Int32` The index of  if found in the list; otherwise, -1.

###  System.Collections.IList.Insert

Inserts an item to the  at the specified
            index.

#### Parameters

#### index `System.Int32`

The zero-based index at which  should be inserted.

#### value `System.Object`

The  to insert into the .

#### Returns

`System.Void` 

###  System.Collections.IList.Remove

Removes the first occurrence of a specific object from the .

#### Parameters

#### value `System.Object`

The  to remove from the .

#### Returns

`System.Void` 

###  System.Collections.IList.RemoveAt

Removes the  item at the specified index.

#### Parameters

#### index `System.Int32`

The zero-based index of the item to remove.

#### Returns

`System.Void` 

###  System.Collections.ICollection.CopyTo

Copies the elements of the  to
            an , starting at a particular 
            index.

#### Parameters

#### array `System.Array`

The one-dimensional  that is the destination of the
            elements copied from . The 
            must have zero-based indexing.

#### index `System.Int32`

The zero-based index in  at which copying begins.

#### Returns

`System.Void` 

###  FindGroupByName

Finds the  in the collection by specifying its group name.

#### Parameters

#### groupName `System.String`

The name of the group.

#### Returns

`Telerik.Web.UI.GridColumnGroup` Returns the  which was found. Otherwise 'null'.

###  LoadViewState

Loads the  previously saved view
            state to the collection.

#### Parameters

#### state `System.Object`

An  that contains the saved view state values for
            the collection.

#### Returns

`System.Void` 

###  SaveViewState

When implemented by a class, saves the changes to a server control's view state
            to an .

#### Returns

`System.Object` The  that contains the view state changes.

###  TrackViewState

Instructs the collection to track changes to
            its view state.

#### Returns

`System.Void` 

