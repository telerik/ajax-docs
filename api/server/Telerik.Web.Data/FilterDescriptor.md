---
title: Telerik.Web.Data.FilterDescriptor
page_title: Telerik.Web.Data.FilterDescriptor
description: Telerik.Web.Data.FilterDescriptor
---

# Telerik.Web.Data.FilterDescriptor

Represents declarative filtering.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.Data.DescriptorBase
* Telerik.Web.Data.FilterDescriptorBase
* Telerik.Web.Data.FilterDescriptor

## Properties

###  Member `String`

Gets or sets the member name which will be used for filtering.

###  MemberType `String`

Gets or sets the type of the member that is used for filtering.
            Set this property if the member type cannot be resolved automatically.
            Such cases are: items with ICustomTypeDescriptor, XmlNode or DataRow.
            Changing this property does not raise 
             event.

###  Operator `FilterOperator`

Gets or sets the filter operator.

###  Value `Object`

Gets or sets the target filter value.

###  IsCaseSensitive `Boolean`

Gets or sets a value indicating whether this filter descriptor is case sensitvive.

## Methods

###  CreateFilterExpression

Creates a predicate filter expression.

#### Parameters

#### parameterExpression `System.Linq.Expressions.ParameterExpression`

The parameter expression, which will be used for filtering.

#### Returns

`System.Linq.Expressions.Expression` A predicate filter expression.

###  Equals

Determines whether the specified  descriptor 
            is equal to the current one.

#### Parameters

#### other `Telerik.Web.Data.FilterDescriptor`

The other filter descriptor.

#### Returns

`System.Boolean` True if all members of the current descriptor are 
            equal to the ones of , otherwise false.

###  Equals

Determines whether the specified 
            is equal to the current descriptor.

#### Returns

`System.Boolean` Calls  
            if  is , otherwise
            returns false.

###  GetHashCode

Serves as a hash function for a particular type.

#### Returns

`System.Int32` A hash code for the current filter descriptor.

###  ToString

Returns a  that represents the current .

#### Returns

`System.String` A  that represents the current .

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

