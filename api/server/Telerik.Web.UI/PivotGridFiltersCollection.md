---
title: Telerik.Web.UI.PivotGridFiltersCollection
page_title: Telerik.Web.UI.PivotGridFiltersCollection
description: Telerik.Web.UI.PivotGridFiltersCollection
---

# Telerik.Web.UI.PivotGridFiltersCollection

RadPivotGrid Filters collection. See the https://docs.telerik.com/devtools/aspnet-ajax/controls/pivotgrid/functionality/filtering Filteringtopic for more information.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.PivotGridFiltersCollection : ICollection, ICollection`1, IEnumerable, IEnumerable`1, IList, IList`1, IStateManager

## Properties

###  Count `Int32`

Filter count

###  Item `PivotGridFilter`

Get filter using the collection indexer

## Methods

###  Add

Add filter to the collection

#### Parameters

#### value `System.Object`

Filter to add

#### Returns

`System.Int32` Filter count

###  Add

Add filter to the collection

#### Parameters

#### item `Telerik.Web.UI.PivotGridFilter`

Filter to add

#### Returns

`System.Int32` Filter count

###  Clear

Clears the collection

#### Returns

`System.Void` 

###  Contains

Determines whether the collection contains the given filter

#### Parameters

#### value `System.Object`

Filter to find

#### Returns

`System.Boolean` true is successfull; otherwise false

###  Contains

Determines whether the collection contains the given filter

#### Parameters

#### item `Telerik.Web.UI.PivotGridFilter`

Filter to find

#### Returns

`System.Boolean` true is successfull; otherwise false

###  IndexOf

Returns the index of the given filter

#### Parameters

#### value `System.Object`

Filter to find

#### Returns

`System.Int32` Filter index

###  IndexOf

Returns the index of the given filter

#### Parameters

#### item `Telerik.Web.UI.PivotGridFilter`

Filter to find

#### Returns

`System.Int32` Filter index

###  Insert

Inserts filter in the collection

#### Parameters

#### index `System.Int32`

Index in the collection where to insert the field

#### value `System.Object`

Filter object

#### Returns

`System.Void` 

###  Insert

Inserts filter in the collection

#### Parameters

#### index `System.Int32`

Index in the collection where to insert the field

#### item `Telerik.Web.UI.PivotGridFilter`

Filter object

#### Returns

`System.Void` 

###  Remove

Removes a filter from the collection

#### Parameters

#### value `System.Object`

Filter to remove

#### Returns

`System.Void` 

###  RemoveAll

Removes all filters from the collection, matching the given expression

#### Parameters

#### match `System.Predicate{Telerik.Web.UI.PivotGridFilter}`

Filters to remove

#### Returns

`System.Int32` Number of removed filters

###  RemoveAt

Removes a filter at the given position

#### Parameters

#### index `System.Int32`

Index of filter to remove

#### Returns

`System.Void` 

