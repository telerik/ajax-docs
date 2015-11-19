---
title: Telerik.Web.Data.FilterDescription
page_title: Telerik.Web.Data.FilterDescription
description: Telerik.Web.Data.FilterDescription
---

# Telerik.Web.Data.FilterDescription

The class enables implementation of custom filtering logic.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.Data.DescriptorBase : INotifyPropertyChanged
* Telerik.Web.Data.FilterDescriptorBase : IFilterDescriptor
* Telerik.Web.Data.FilterDescription

## Properties

###  IsActive `Boolean`

If false  will not execute.

## Methods

###  SatisfiesFilter

The method checks whether the passed parameter satisfies filter criteria.

#### Returns

`System.Boolean` 

###  CreateFilterExpression

Creates a predicate filter expression that calls .

#### Parameters

#### parameterExpression `System.Linq.Expressions.ParameterExpression`

The parameter expression, which parameter 
            will be passed to  method.

#### Returns

`System.Linq.Expressions.Expression` 

###  CreateFilterExpression

Creates a filter expression by delegating its creation to 
            , if 
             is , otherwise throws

#### Parameters

#### instance `System.Linq.Expressions.Expression`

The instance expression, which will be used for filtering.

#### Returns

`System.Linq.Expressions.Expression` A predicate filter expression.

###  CreateFilterExpression

Creates a predicate filter expression used for collection filtering.

#### Parameters

#### parameterExpression `System.Linq.Expressions.ParameterExpression`

The parameter expression, which will be used for filtering.

#### Returns

`System.Linq.Expressions.Expression` A predicate filter expression.

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

