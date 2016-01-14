---
title: Telerik.Web.UI.RadFilterDataFieldEditorCollection
page_title: Telerik.Web.UI.RadFilterDataFieldEditorCollection
description: Telerik.Web.UI.RadFilterDataFieldEditorCollection
---

# Telerik.Web.UI.RadFilterDataFieldEditorCollection

Represents a collection of field editors in Telerik.Web.UI.RadFilter .

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.RadFilterDataFieldEditorCollection : ICollection, ICollection`1, IEnumerable, IEnumerable`1, IList, IList`1, IStateManager

## Properties

###  Count `Int32`

Gets the number of elements actually contained in the collection.

###  IsReadOnly `Boolean`

Gets a value indicating whether the collection is read-only.

## Methods

###  Add

Adds an object to the end of the collection.

#### Parameters

#### item `Telerik.Web.UI.RadFilterDataFieldEditor`

The object to be added to the end of the collection. 
            The value can be a null reference (Nothing in Visual Basic) for reference types.

#### Returns

`System.Void` 

###  Clear

Removes all elements from the collection.

#### Returns

`System.Void` 

###  Contains

Determines whether an element is in the collection.

#### Parameters

#### item `Telerik.Web.UI.RadFilterDataFieldEditor`

The object to locate in the collection. 
            The value can be a null reference (Nothing in Visual Basic) for reference types.

#### Returns

`System.Boolean` True if item is found in the collection; otherwise, false.

###  CopyTo

Copies the entire collection to a compatible one-dimensional Array, 
            starting at the specified index of the target array.

#### Parameters

#### array `Telerik.Web.UI.RadFilterDataFieldEditor`

The one-dimensional Array that is the destination of the elements copied from 
            collection. The Array must have zero-based indexing.

#### arrayIndex `System.Int32`

The zero-based index in array at which copying begins.

#### Returns

`System.Void` 

###  GetEnumerator

Returns an enumerator that iterates through the collection.

#### Returns

`System.Collections.Generic.IEnumerator`1` An IEnumerator(T) for the collection.

###  IndexOf

Determines the index of a specific item in the list.

#### Parameters

#### item `Telerik.Web.UI.RadFilterDataFieldEditor`

The RadFilterDataFieldEditor to locate in the list.

#### Returns

`System.Int32` The index of the item if found in the list; otherwise, -1.

###  Insert

Inserts an item into the list at the specified index.

#### Parameters

#### index `System.Int32`

The zero-based index at which the item should be inserted.

#### item `Telerik.Web.UI.RadFilterDataFieldEditor`

The RadFilterDataFieldEditor to insert into the list.

#### Returns

`System.Void` 

###  Remove

Removes the first occurrence of a specific object from the collection.

#### Parameters

#### item `Telerik.Web.UI.RadFilterDataFieldEditor`

The RadFilterDataFieldEditor to remove from the collection. 
            The value can be a null reference (Nothing in Visual Basic) for reference types.

#### Returns

`System.Boolean` true if item is successfully removed; otherwise, false. 
            This method also returns false if item was not found in the original collection.

###  RemoveAt

Removes the element at the specified index of the collection.

#### Parameters

#### index `System.Int32`

The zero-based index of the item to remove.

#### Returns

`System.Void` 

