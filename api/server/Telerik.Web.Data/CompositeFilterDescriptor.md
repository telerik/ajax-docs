---
title: Telerik.Web.Data.CompositeFilterDescriptor
page_title: Telerik.Web.Data.CompositeFilterDescriptor
description: Telerik.Web.Data.CompositeFilterDescriptor
---

# Telerik.Web.Data.CompositeFilterDescriptor

Represents a filtering descriptor which serves as a container for one or more child filtering descriptors.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.Data.DescriptorBase : INotifyPropertyChanged
* Telerik.Web.Data.FilterDescriptorBase : IFilterDescriptor
* Telerik.Web.Data.CompositeFilterDescriptor

## Properties

###  FilterDescriptors `FilterDescriptorCollection`

Gets or sets the filter descriptors that will be used for composition.

###  LogicalOperator `FilterCompositionLogicalOperator`

Gets or sets the logical operator used for composing of .

## Methods

###  CreateFilterExpression

Creates a predicate filter expression combining  
            expressions with .

#### Parameters

#### parameterExpression `System.Linq.Expressions.ParameterExpression`

The parameter expression, which will be used for filtering.

#### Returns

`System.Linq.Expressions.Expression` A predicate filter expression.

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

