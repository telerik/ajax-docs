---
title: Telerik.Web.UI.PivotGridSortExpressionCollection
page_title: Telerik.Web.UI.PivotGridSortExpressionCollection
description: Telerik.Web.UI.PivotGridSortExpressionCollection
---

# Telerik.Web.UI.PivotGridSortExpressionCollection

A collection of Telerik.Web.UI.PivotGridSortExpression objects.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.PivotGridSortExpressionCollection

## Properties

###  Item `PivotGridSortExpression`

This is the default indexer of the collection - takes an integer value.

###  Count `Int32`

Returns the number of items in the RadPivotGridSortExpressionCollection.

###  IsSynchronized `Boolean`

Gets a value indicating whether access to the RadPivotGridSortExpressionCollection is
            synchronized (thread safe).

###  SyncRoot `Object`

Gets an object that can be used to synchronize access to the
                        RadPivotGridSortExpressionCollection.

## Methods

###  CopyTo

#### Returns

`System.Void` 

###  GetEnumerator

Returns an enumerator that iterates through the
            RadPivotGridSortExpressionCollection.

#### Returns

`System.Collections.IEnumerator` 

###  Add

Adds a  to the collection.

#### Returns

`System.Int32` 

###  Clear

Clears the RadPivotGridSortExpressionCollection of all items.

#### Returns

`System.Void` 

###  CopyTo

#### Returns

`System.Void` 

###  GetExpression

Find a SortExpression in the collection if it contains any with sort field = expression

#### Parameters

#### expression `System.String`

sort field

#### Returns

`Telerik.Web.UI.PivotGridSortExpression` 

###  AddSortExpression

Adds the sortExpression in the collection.

#### Parameters

#### sortExpression `Telerik.Web.UI.PivotGridSortExpression`

#### Returns

`System.Void` 

###  AddSortExpression

Adds the sortExpression in the collection.

#### Parameters

#### expression `System.String`

String containing sort field and optionaly sort order (ASC or DESC)

#### Returns

`System.Void` 

###  AddAt

Adds a  to the collection at the specified
                index.

#### Returns

`System.Void` 

###  RemoveSortExpression

Removes the specified  from the collection.

#### Returns

`System.Void` 

###  ContainsSortExpression

Returns true or false depending on whether the specified sorting expression exists
                in the collection. Takes a  parameter.

#### Returns

`System.Boolean` 

###  ContainsExpression

Returns true or false depending on whether the specified sorting expression
            exists in the collection. Takes a string parameter.

#### Returns

`System.Boolean` 

###  ChangeSortOrder

Adds the sort field (expression parameter) if the collection does not alreqady contain the field. Else the sort order of the field will be inverted. The default change order is
            Asc -> Desc.

#### Parameters

#### expression `System.String`

#### AllowNaturalSort `System.Boolean`

Parameter that indicates whether natural sorting is enabled.

#### Returns

`System.Void` 

###  GetSortString

Get a comma separated list of sort fields and sort-order, in the same format used by
            DataView.Sort string expression. Returns null (Nothing) if there are no sort expressions in the collection

#### Returns

`System.String` Comma separated list of sort fields and optionaly sort-order, null if there are no sort expressions in the collection

###  IndexOf

Searches for the specified
             and
            returns the zero-based index of the first occurrence within the entire
            .

#### Returns

`System.Int32` 

