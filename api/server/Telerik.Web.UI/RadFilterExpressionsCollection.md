---
title: Telerik.Web.UI.RadFilterExpressionsCollection
page_title: Telerik.Web.UI.RadFilterExpressionsCollection
description: Telerik.Web.UI.RadFilterExpressionsCollection
---

# Telerik.Web.UI.RadFilterExpressionsCollection

Represents a collection filter expressions in Telerik.Web.UI.RadFilter .

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.RadFilterExpressionsCollection

## Properties

###  Count `Int32`

Gets the number of elements actually contained in the collection.

###  IsReadOnly `Boolean`

Gets a value indicating whether the collection is read-only.

## Methods

###  IndexOf

Determines the index of a specific expression in the list.

#### Parameters

#### item `Telerik.Web.UI.RadFilterExpression`

The RadFilterExpression to locate in the list.

#### Returns

`System.Int32` The index of the expression if found in the list; otherwise, -1.

###  Insert

Inserts an expression into the list at the specified index.

#### Parameters

#### index `System.Int32`

The zero-based index at which the expression should be inserted.

#### item `Telerik.Web.UI.RadFilterExpression`

The RadFilterExpression to insert into the list.

#### Returns

`System.Void` 

###  RemoveAt

Removes the element at the specified index of the collection.

#### Parameters

#### index `System.Int32`

The zero-based index of the expression to remove.

#### Returns

`System.Void` 

###  Add

Adds an object to the end of the collection.

#### Parameters

#### item `Telerik.Web.UI.RadFilterExpression`

The RadFilterExpression to be added to the end of the collection. 
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

#### item `Telerik.Web.UI.RadFilterExpression`

The RadFilterExpression to locate in the collection. 
            The value can be a null reference (Nothing in Visual Basic) for reference types.

#### Returns

`System.Boolean` True if item is found in the collection; otherwise, false.

###  CopyTo

Copies the entire collection to a compatible one-dimensional Array, 
            starting at the specified index of the target array.

#### Parameters

#### array `Telerik.Web.UI.RadFilterExpression`

The one-dimensional Array that is the destination of the elements copied from 
            collection. The Array must have zero-based indexing.

#### arrayIndex `System.Int32`

The zero-based index in array at which copying begins.

#### Returns

`System.Void` 

###  Remove

Removes the first occurrence of a specific object from the collection.

#### Parameters

#### item `Telerik.Web.UI.RadFilterExpression`

The RadFilterExpression to remove from the collection. 
            The value can be a null reference (Nothing in Visual Basic) for reference types.

#### Returns

`System.Boolean` true if the expression is successfully removed; otherwise, false. 
            This method also returns false if expression was not found in the original collection.

###  GetEnumerator

Returns an enumerator that iterates through the collection.

#### Returns

`System.Collections.Generic.IEnumerator`1` An IEnumerator(RadFilterExpression) for the collection.

