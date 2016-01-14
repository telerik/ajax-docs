---
title: Telerik.Web.UI.RadFilterSingleExpressionItem
page_title: Telerik.Web.UI.RadFilterSingleExpressionItem
description: Telerik.Web.UI.RadFilterSingleExpressionItem
---

# Telerik.Web.UI.RadFilterSingleExpressionItem

Represents the UI component rendered by Telerik.Web.UI.RadFilter to to represent 
            a filter expression having a single value.

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Control
* Telerik.Web.UI.RadFilterExpressionItem : INamingContainer
* Telerik.Web.UI.RadFilterSingleExpressionItem

## Properties

###  BetweenDelimeter `Control`

Gets the  which is placed between the two input controls
            when the filter function is "Between" or "NotBetween".

###  ClientID `String`

Gets a string value representing the client id of the filter expression item control.

###  Expression `RadFilterNonGroupExpression`

Gets a reference to the RadFilterNonGroupExpression which the expression item represents.

###  FieldName `String`

Gets the associated  value.

###  FieldNameChooserLink `String`

Gets the  control which is used for choosing the FieldName.

###  FilterFunctionChooserLink `HyperLink`

Gets the  control which is used for choosing the FilterFunction.

###  FunctionalInterfaceContainer `Panel`

Gets the container holding the menu links - the GroupOperation(for ),
            FilterFunction and the editor FieldName.

###  HierarchicalIndex `String`

Gets the string representation of the hierarchical position of the item in the RadFilter visual structure.

###  InputControl `WebControl`

The input control which determines an expression value. The property could return null
            if the Expression is not of type .

###  IsDoubleValue `Boolean`

Gets a value indicating if the expression item have two values (between filtering is performed).
            If the property returns true the SecondInputControl value will not be null.

###  IsSingleValue `Boolean`

Gets a value indicating if the expression item have only one value.
            If the property returns true the InputControl value will not be null.

###  ItemIndex `Int32`

Gets the integer index of the filter expression item.

###  OwnerFilter `RadFilter`

Returns a reference to the owner  object.

###  OwnerGroup `RadFilterGroupExpressionItem`

Gets the owner .

###  RemoveButton `LinkButton`

Gets the  remove button which removes an expression from the  expression tree.

###  SecondInputControl `WebControl`

The second input control which determines the second expression value when performing between filtering.
            The property will not return null only when performing between filtering.

###  ToolsInterfaceContainer `Panel`

Gets the container holding item specific controls. An input control for the 
            and AddGroupExpression, AddItemExpression for the .

## Methods

###  InitializeItem

Initializes the filter expression item.

#### Returns

`System.Void` 

