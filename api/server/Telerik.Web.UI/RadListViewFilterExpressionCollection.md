---
title: Telerik.Web.UI.RadListViewFilterExpressionCollection
page_title: Telerik.Web.UI.RadListViewFilterExpressionCollection
description: Telerik.Web.UI.RadListViewFilterExpressionCollection
---

# Telerik.Web.UI.RadListViewFilterExpressionCollection

A collection holding Telerik.Web.UI.RadListView Telerik.Web.UI.RadListViewFilterExpression items.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.RadListViewFilterExpressionCollection

## Properties

###  Count `Int32`

Gets the number of elements contained in the collection.

###  IsReadOnly `Boolean`

## Methods

###  BuildExpression

Returns a expression builder object, the root of the 
            fluent api helpers

#### Remarks
This entry point for the fluent filter expression API

#### Returns

`Telerik.Web.UI.RadListViewFilterExpressionFluentBuilder` expression builder object

###  BuildExpression

A helper method for building filter expressions hierarchy in an fluent like manner

#### Remarks
This entry point for the fluent filter expression API

#### Parameters

#### configuration `System.Action{Telerik.Web.UI.RadListViewFilterExpressionFluentBuilder}`

expression builder helper object

#### Returns

`Telerik.Web.UI.RadListViewFilterExpressionFluentBuilder` 

###  ToDynamicLinq

Returns a string representation of the filter expressions 
            in format suitable for LinqDataSource usage.

#### Remarks
Not intended  for external usage

#### Returns

`System.String` LinqDataSource string representation

###  ToEntitySQL

Returns a string representation of the filter expressions 
            in format suitable for EntityDataSource usage.

#### Remarks
Not intended  for external usage

#### Returns

`System.String` EntityDataSource string representation

###  ToOql

Returns a string representation of the filter expressions 
            in format suitable for Oql usage.

#### Remarks
Not intended  for external usage

#### Returns

`System.String` Oql string representation

###  FindByFieldName

Finds a expression bound to a given fieldName

#### Parameters

#### fieldName `System.String`

Field's name to search for

#### Returns

`Telerik.Web.UI.RadListViewFilterExpression` filterExpression

###  GetEnumerator

Returns an enumerator that iterates through the collection.

#### Returns

`System.Collections.Generic.IEnumerator`1` A  that can
            be used to iterate through the collection.

###  Add

Adds the specified item to the end of the collection.

#### Parameters

#### item `Telerik.Web.UI.RadListViewFilterExpression`

The item to be added.

#### Returns

`System.Void` 

###  Clear

Removes all items from the collection.

#### Returns

`System.Void` 

###  Contains

Determines whether the item exists in the collection.

#### Parameters

#### item `Telerik.Web.UI.RadListViewFilterExpression`

The item to search for.

#### Returns

`System.Boolean` 

###  CopyTo

Copies the collection to the target array from the specified array index.

#### Parameters

#### array `Telerik.Web.UI.RadListViewFilterExpression`

The target array.

#### arrayIndex `System.Int32`

The start index from where to copy the current collection.

#### Returns

`System.Void` 

###  Remove

Removes the specified item from the collection.

#### Parameters

#### item `Telerik.Web.UI.RadListViewFilterExpression`

The item to be removed.

#### Returns

`System.Boolean` 

###  IndexOf

Returns the index position in the collection of the searched item. Othwise returns -1.

#### Parameters

#### item `Telerik.Web.UI.RadListViewFilterExpression`

The searched element item.

#### Returns

`System.Int32` 

###  Insert

Inserts the item in the specified index.

#### Parameters

#### index `System.Int32`

The index the item will be placed.

#### item `Telerik.Web.UI.RadListViewFilterExpression`

The item which will be inserted.

#### Returns

`System.Void` 

###  RemoveAt

Removes the item at the specified index.

#### Parameters

#### index `System.Int32`

The zero-based index of the item to remove.

#### Returns

`System.Void` 

