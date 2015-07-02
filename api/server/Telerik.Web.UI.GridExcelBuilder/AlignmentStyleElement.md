---
title: Telerik.Web.UI.GridExcelBuilder.AlignmentStyleElement
page_title: Telerik.Web.UI.GridExcelBuilder.AlignmentStyleElement
description: Telerik.Web.UI.GridExcelBuilder.AlignmentStyleElement
---

# Telerik.Web.UI.GridExcelBuilder.AlignmentStyleElement

AlignmentStyle object. Unifies the vertical and the horizontal alignment settings for a given element.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.GridExcelBuilder.Abstract.ElementBase
* Telerik.Web.UI.GridExcelBuilder.AlignmentStyleElement

## Properties

###  VerticalAlignment `VerticalAlignmentType`

Vertical alignment setting for the current element

###  HorizontalAlignment `HorizontalAlignmentType`

Horizontal alignment setting for the current element

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

