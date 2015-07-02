---
title: Telerik.Web.Data.GroupDescriptorBase
page_title: Telerik.Web.Data.GroupDescriptorBase
description: Telerik.Web.Data.GroupDescriptorBase
---

# Telerik.Web.Data.GroupDescriptorBase

Servers as a base class for group descriptors. Holds P:Telerik.Web.Data.GroupDescriptorBase.SortDirection that will be used to sort the groups created from the descriptor.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.Data.DescriptorBase
* Telerik.Web.Data.GroupDescriptorBase

## Properties

###  SortDirection `Nullable`1`

Gets or sets the sort direction for this descriptor. If the value is null
            no sorting will be applied.

## Methods

###  CreateGroupKeyExpression

Creates a group expression by delegating its creation to 
            , if 
             is , 
            otherwise throws

#### Parameters

#### itemExpression `System.Linq.Expressions.Expression`

The instance expression, which will be used for grouping.

#### Returns

`System.Linq.Expressions.Expression` Expression that creates group key for the given item.

###  CreateGroupKeyExpression

Creates a group expression that returns 
            the grouping key for each item in a collection.

#### Parameters

#### parameterExpression `System.Linq.Expressions.ParameterExpression`

The parameter expression, which will be used for grouping.

#### Returns

`System.Linq.Expressions.Expression` Expression that creates group key for the given item.

###  CreateGroupSortExpression

Creates sorting key expression that sorts the groups 
            created from this descriptor using the group's key.

#### Parameters

#### groupingExpression `System.Linq.Expressions.Expression`

The grouping expression, which represents the grouped items
            created from the .

#### Returns

`System.Linq.Expressions.Expression` Expression that represents the sort criteria for each group.

###  CycleSortDirection

Changes the  to the next logical value.

#### Returns

`System.Void` 

###  OnPropertyChanged

Raises the  event.

#### Parameters

#### args `System.ComponentModel.PropertyChangedEventArgs`

The  instance containing the event data.

#### Returns

`System.Void` 

###  OnPropertyChanged

Calls 
            creating a new instance of  with given .

#### Parameters

#### propertyName `System.String`

Name of the property that is changed.

#### Returns

`System.Void` 

