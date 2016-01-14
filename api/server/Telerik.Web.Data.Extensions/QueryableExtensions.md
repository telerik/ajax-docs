---
title: Telerik.Web.Data.Extensions.QueryableExtensions
page_title: Telerik.Web.Data.Extensions.QueryableExtensions
description: Telerik.Web.Data.Extensions.QueryableExtensions
---

# Telerik.Web.Data.Extensions.QueryableExtensions

Holds extension methods for System.Linq.IQueryable .

## Inheritance Hierarchy

* System.Object
* Telerik.Web.Data.Extensions.QueryableExtensions

## Methods

###  Aggregate

Calculates the results of given aggregates functions on a sequence of elements.

#### Parameters

#### source `System.Linq.IQueryable`

An  whose elements will 
            be used for aggregate calculation.

#### aggregateFunctions `System.Collections.Generic.IEnumerable{Telerik.Web.Data.AggregateFunction}`

The aggregate functions.

#### Returns

`Telerik.Web.Data.AggregateResultCollection` Collection of s calculated for each function.

###  Aggregate

Calculates the results of a given aggregate function on a sequence of elements.

#### Parameters

#### source `System.Linq.IQueryable`

An  whose elements will 
            be used for aggregate calculation.

#### aggregateFunction `Telerik.Web.Data.AggregateFunction`

The aggregate function.

#### Returns

`Telerik.Web.Data.AggregateResultCollection` Collection of s calculated for the function.

###  Count

Returns the number of elements in a sequence.

#### Parameters

#### source `System.Linq.IQueryable`

The  that contains the elements to be counted.

#### Returns

`System.Int32` The number of elements in the input sequence.

###  ElementAt

Returns the element at a specified index in a sequence.

#### Parameters

#### source `System.Linq.IQueryable`

An  to return an element from.

#### index `System.Int32`

The zero-based index of the element to retrieve.

#### Returns

`System.Object` The element at the specified position in .

###  GroupBy

Groups the elements of a sequence according to a specified key selector function.

#### Parameters

#### source `System.Linq.IQueryable`

An  whose elements to group.

#### keySelector `System.Linq.Expressions.LambdaExpression`

A function to extract the key for each element.

#### Returns

`System.Linq.IQueryable` An  with  items, 
            whose elements contains a sequence of objects and a key.

###  GroupBy

Groups the elements of a sequence according to a specified .

#### Parameters

#### source `System.Linq.IQueryable`

An  whose elements to group.

#### groupDescriptors `System.Collections.Generic.IEnumerable{Telerik.Web.Data.IGroupDescriptor}`

The group descriptors used for grouping.

#### Returns

`System.Linq.IQueryable` An  with  items, 
            whose elements contains a sequence of objects and a key.

###  OrderBy

Sorts the elements of a sequence in ascending order according to a key.

#### Parameters

#### source `System.Linq.IQueryable`

A sequence of values to order.

#### keySelector `System.Linq.Expressions.LambdaExpression`

A function to extract a key from an element.

#### Returns

`System.Linq.IQueryable` An  whose elements are sorted according to a key.

###  OrderBy

Calls  
            or  depending on the .

#### Parameters

#### source `System.Linq.IQueryable`

The source.

#### keySelector `System.Linq.Expressions.LambdaExpression`

The key selector.

#### sortDirection `System.Nullable{System.ComponentModel.ListSortDirection}`

The sort direction.

#### Returns

`System.Linq.IQueryable` An  whose elements are sorted according to a key.

###  OrderByDescending

Sorts the elements of a sequence in descending order according to a key.

#### Parameters

#### source `System.Linq.IQueryable`

A sequence of values to order.

#### keySelector `System.Linq.Expressions.LambdaExpression`

A function to extract a key from an element.

#### Returns

`System.Linq.IQueryable` An  whose elements are sorted in descending order according to a key.

###  Select

Projects each element of a sequence into a new form.

#### Parameters

#### source `System.Linq.IQueryable`

A sequence of values to project.

#### selector `System.Linq.Expressions.LambdaExpression`

A projection function to apply to each element.

#### Returns

`System.Linq.IQueryable` An  whose elements are the result of invoking a 
            projection selector on each element of .

###  Skip

Bypasses a specified number of elements in a sequence 
            and then returns the remaining elements.

#### Parameters

#### source `System.Linq.IQueryable`

An  to return elements from.

#### count `System.Int32`

The number of elements to skip before returning the remaining elements.

#### Returns

`System.Linq.IQueryable` An  that contains elements that occur 
            after the specified index in the input sequence.

###  Sort

Sorts the elements of a sequence using the specified sort descriptors.

#### Parameters

#### source `System.Linq.IQueryable`

A sequence of values to sort.

#### sortDescriptors `System.Collections.Generic.IEnumerable{Telerik.Web.Data.SortDescriptor}`

The sort descriptors used for sorting.

#### Returns

`System.Linq.IQueryable` An  whose elements are sorted according to a .

###  Take

Returns a specified number of contiguous elements from the start of a sequence.

#### Parameters

#### source `System.Linq.IQueryable`

The sequence to return elements from.

#### count `System.Int32`

The number of elements to return.

#### Returns

`System.Linq.IQueryable` An  that contains the specified number 
            of elements from the start of .

###  ToIList

Creates a  from an  where T is .

#### Parameters

#### source `System.Linq.IQueryable`

The  to create a  from.

#### Returns

`System.Collections.IList` A  that contains elements from the input sequence.

###  Where

Filters a sequence of values based on a predicate.

#### Parameters

#### source `System.Linq.IQueryable`

An  to filter.

#### predicate `System.Linq.Expressions.Expression`

A function to test each element for a condition.

#### Returns

`System.Linq.IQueryable` An  that contains elements from the input sequence 
            that satisfy the condition specified by .

###  Where

Filters a sequence of values based on a collection of .

#### Parameters

#### source `System.Linq.IQueryable`

The source.

#### filterDescriptors `System.Collections.Generic.IEnumerable{Telerik.Web.Data.IFilterDescriptor}`

The filter descriptors.

#### Returns

`System.Linq.IQueryable` An  that contains elements from the input sequence 
            that satisfy the conditions specified by each filter descriptor in .

