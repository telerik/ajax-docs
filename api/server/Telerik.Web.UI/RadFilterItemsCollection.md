---
title: Telerik.Web.UI.RadFilterItemsCollection
page_title: Telerik.Web.UI.RadFilterItemsCollection
description: Telerik.Web.UI.RadFilterItemsCollection
---

# Telerik.Web.UI.RadFilterItemsCollection

Represents a collection of Telerik.Web.UI.RadFilterExpressionItem objects.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.RadFilterItemsCollection : ICollection`1, IEnumerable, IEnumerable`1

## Properties

###  Count `Int32`

Gets the number of elements actually contained in the collection.

###  IsReadOnly `Boolean`

Gets a value indicating whether the collection is read-only.

## Methods

###  Add

Adds a RadFilterExpressionItem to the end of the collection.

#### Parameters

#### item `Telerik.Web.UI.RadFilterExpressionItem`

The RadFilterExpressionItem to be added to the end of the collection. 
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

#### item `Telerik.Web.UI.RadFilterExpressionItem`

The RadFilterExpressionItem to locate in the collection. 
            The value can be a null reference (Nothing in Visual Basic) for reference types.

#### Returns

`System.Boolean` True if item is found in the collection; otherwise, false.

###  CopyTo

Copies the entire collection to a compatible one-dimensional Array, 
            starting at the specified index of the target array.

#### Parameters

#### array `Telerik.Web.UI.RadFilterExpressionItem`

The one-dimensional Array that is the destination of the elements copied from 
            collection. The Array must have zero-based indexing.

#### arrayIndex `System.Int32`

The zero-based index in array at which copying begins.

#### Returns

`System.Void` 

###  Remove

Removes the first occurrence of a specific item from the collection.

#### Parameters

#### item `Telerik.Web.UI.RadFilterExpressionItem`

The RadFilterExpressionItem to remove from the collection. 
            The value can be a null reference (Nothing in Visual Basic) for reference types.

#### Returns

`System.Boolean` true if the item is successfully removed; otherwise, false. 
            This method also returns false if item was not found in the original collection.

###  GetEnumerator

Returns an enumerator that iterates through the collection.

#### Returns

`System.Collections.Generic.IEnumerator`1` An IEnumerator(RadFilterExpressionItem) for the collection.

