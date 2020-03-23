---
title: Telerik.Web.UI.RadListViewSortExpressions
title_prefix: Client-side API Reference
description: Telerik.Web.UI.RadListViewSortExpressions
slug: Telerik.Web.UI.RadListViewSortExpressions
---

# Telerik.Web.UI.RadListViewSortExpressions  

## Inheritance Hierarchy

* *[Telerik.Web.UI.RadListViewSortExpressions]({%slug Telerik.Web.UI.RadListViewSortExpressions%})*


## Methods

###  add

Adds a sort expression to the collection

#### Parameters

##### field `String`

The field name that is sorted

##### order `String`

Optional

#### Returns

`None` 

### build

Retrieves a Telerik.Web.UI.RadListViewSortExpressionBuilder instance that can be used for fluent expression building.

#### Parameters

#### Returns

`None` 

### clear

Clears the sort expressions collection

#### Parameters

#### Returns

`None` 

### get_count

Retrieves the number of expressions in the collection

#### Parameters

#### Returns

`Number` 

### getItem

Retrieves a sort expression by specified index or field name.

#### Parameters

##### fieldOrIndex `String`

The field or index to find the expression by

#### Returns

`None` 

### getSortOrder

Retrieves the sort order for the specified sort expression

#### Parameters

##### field `String`

The field name whose sort order to retrieve

#### Returns

`None` 

### indexOf

Retrieves the index of the sort expression with the specified field name

#### Parameters

##### field `String`

The field of the expression whose index to find

#### Returns

`None` 

### remove

Removes a field from the sort expressions

#### Parameters

##### field `String`

The field name to remove

#### Returns

`None` 

### toggle

Toggles the sort order of the specified field

#### Parameters

##### field `String`

The field whose sort order to toggle

#### Returns

`None` 


### toLinq

Returns a Dynamic LINQ representation of the current sort expression collection.

#### Parameters

#### Returns

`None` 

### toList

Returns a list representation of the current sort expression collection.

#### Parameters

#### Returns

`None` 

### toOData

Returns an OData formatted representation of the current sort expression collection.

#### Parameters

#### Returns

`None` 

### toSql

Returns an SQL representation of the current sort expression collection.

#### Parameters

#### Returns

`None` 


