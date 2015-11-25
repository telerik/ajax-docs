---
title: Telerik.Web.UI.GridExcelBuilder.RowElement
page_title: Telerik.Web.UI.GridExcelBuilder.RowElement
description: Telerik.Web.UI.GridExcelBuilder.RowElement
---

# Telerik.Web.UI.GridExcelBuilder.RowElement

ExcelML row element

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.GridExcelBuilder.Abstract.ElementBase : IElement
* Telerik.Web.UI.GridExcelBuilder.RowElement

## Properties

###  Height `Unit`

Specifies the height of a row. This value must be greater than or equal to 0.

###  Cells `CellsCollection`

Cells corresponding to the current row

###  InnerElements `IElementsCollection`

The row element cannot have inner elements.

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

