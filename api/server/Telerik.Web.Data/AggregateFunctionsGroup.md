---
title: Telerik.Web.Data.AggregateFunctionsGroup
page_title: Telerik.Web.Data.AggregateFunctionsGroup
description: Telerik.Web.Data.AggregateFunctionsGroup
---

# Telerik.Web.Data.AggregateFunctionsGroup

Represents group with aggregate functions.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.Data.Group
* Telerik.Web.Data.AggregateFunctionsGroup

## Properties

###  AggregateFunctionsProjection `Object`

Gets or sets the aggregate functions projection for this group. 
            This projection is used to generate aggregate functions results for this group.

###  HasSubgroups `Boolean`

Gets a value indicating whether this instance has any sub groups.

###  ItemCount `Int32`

Gets the number of items in this group.

###  Subgroups `ReadOnlyCollection`1`

Gets the subgroups, if  is true, otherwise empty collection.

###  Items `IEnumerable`

Gets the items in this groups.

###  Key `Object`

Gets the key for this group.

## Methods

###  GetAggregateResults

Gets the aggregate results generated for the given aggregate functions.

#### Returns

`Telerik.Web.Data.AggregateResultCollection` 

###  ToString

Returns a  that represents this instance.

#### Returns

`System.String` A  that represents this instance.

