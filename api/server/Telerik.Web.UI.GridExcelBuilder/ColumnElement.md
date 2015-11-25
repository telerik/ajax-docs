---
title: Telerik.Web.UI.GridExcelBuilder.ColumnElement
page_title: Telerik.Web.UI.GridExcelBuilder.ColumnElement
description: Telerik.Web.UI.GridExcelBuilder.ColumnElement
---

# Telerik.Web.UI.GridExcelBuilder.ColumnElement

Represents a column in the XMLSS structure

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.GridExcelBuilder.Abstract.ElementBase : IElement
* Telerik.Web.UI.GridExcelBuilder.ColumnElement

## Properties

###  Hidden `Boolean`

True specifies that this column is hidden. False (or omitted) specifies that this column is shown.

###  Width `Unit`

Specifies the width of a column. This value must be greater than or equal to 0.

###  InnerElements `IElementsCollection`

Collection of inner elements

###  Attributes `IAttributesCollection`

Collection of the attributes of the current element

## Methods

###  Render

Renders the element

#### Parameters

#### sb `System.Text.StringBuilder`

StringBuilder object that holds the rendered output

#### Returns

`System.Void` 

###  RenderChildElements

Renders the child elements

#### Parameters

#### sb `System.Text.StringBuilder`

StringBuilder object that holds the rendered output

#### Returns

`System.Void` 

###  AppendAttributes

Appends the attirbutes to the output

#### Parameters

#### sb `System.Text.StringBuilder`

StringBuilder object that holds the rendered output

#### Returns

`System.Void` 

