---
title: Telerik.Web.UI.RadFilterGroupExpressionItem
page_title: Telerik.Web.UI.RadFilterGroupExpressionItem
description: Telerik.Web.UI.RadFilterGroupExpressionItem
---

# Telerik.Web.UI.RadFilterGroupExpressionItem

Represents the UI component rendered by Telerik.Web.UI.RadFilter to represent 
            a group of filter expressions..

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Control
* Telerik.Web.UI.RadFilterExpressionItem
* Telerik.Web.UI.RadFilterGroupExpressionItem

## Properties

###  Expression `RadFilterGroupExpression`

Gets the RadFilterGroupExpression that the current item represents.

###  IsRootGroup `Boolean`

Gets a boolean value indicating whether the current Control represents a root group expression.

###  GroupOperationChooserLink `HyperLink`

Gets the  control which chooses the item expression GroupOperation value.

###  AddExpressionButton `RadFilterGroupExpression`

Gets the  control which adds a new 
            to the  expression items tree.

###  AddGroupExpressionButton `RadFilterGroupExpression`

Gets the  control which adds a new 
            to the  expression items tree.

###  ExpressionContainer `RadFilterGroupExpression`

Gets a reference to the UI component that holds the filter expression items in the 
            rendered RadFilter..

###  ChildItems `RadFilterItemsCollection`

Gets a collection of the RadFilterExpressionItem objects belonging to the current group.

###  OwnerGroup `RadFilterGroupExpressionItem`

Gets the owner .

###  OwnerFilter `RadFilter`

Returns a reference to the owner  object.

###  FunctionalInterfaceContainer `Panel`

Gets the container holding the menu links - the GroupOperation(for ),
            FilterFunction and the editor FieldName.

###  ToolsInterfaceContainer `Panel`

Gets the container holding item specific controls. An input control for the 
            and AddGroupExpression, AddItemExpression for the .

###  RemoveButton `LinkButton`

Gets the  remove button which removes an expression from the  expression tree.

###  HierarchicalIndex `String`

Gets the string representation of the hierarchical position of the item in the RadFilter visual structure.

###  ClientID `String`

Gets a string value representing the client id of the filter expression item control.

###  ItemIndex `Int32`

Gets the integer index of the filter expression item.

## Methods

###  AddChildItem

Adds a RadFilterExpressionItem to the ChildItems collection of the current group expression.

#### Parameters

#### item `Telerik.Web.UI.RadFilterExpressionItem`

A RadFilterExpressionItem to add to the ChildItems collection.

#### Returns

`System.Void` 

###  InitializeItem

Initializes the filter expression item.

#### Returns

`System.Void` 

