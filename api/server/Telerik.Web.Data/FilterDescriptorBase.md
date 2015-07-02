---
title: Telerik.Web.Data.FilterDescriptorBase
page_title: Telerik.Web.Data.FilterDescriptorBase
description: Telerik.Web.Data.FilterDescriptorBase
---

# Telerik.Web.Data.FilterDescriptorBase

Base class for all Telerik.Web.Data.IFilterDescriptor used for 
            handling the logic for property changed notifications.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.Data.DescriptorBase
* Telerik.Web.Data.FilterDescriptorBase

## Methods

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

