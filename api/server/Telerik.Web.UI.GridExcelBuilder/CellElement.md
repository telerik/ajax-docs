---
title: Telerik.Web.UI.GridExcelBuilder.CellElement
page_title: Telerik.Web.UI.GridExcelBuilder.CellElement
description: Telerik.Web.UI.GridExcelBuilder.CellElement
---

# Telerik.Web.UI.GridExcelBuilder.CellElement

ExcelML Cell element

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.GridExcelBuilder.Abstract.ElementBase : IElement
* Telerik.Web.UI.GridExcelBuilder.CellElement

## Properties

###  Attributes `IAttributesCollection`

Collection of the attributes of the current element

###  ColumnName `String`

The name of the Column element that corresponds to the current cell

###  Data `DataElement`

Data element; specifies the value of this cell.

###  HRef `String`

Specifies the URL to which to link this cell.

###  InnerElements `IElementsCollection`

Collection of inner elements

###  MergeAcross `Int32`

Specifies the number of adjacent cells across (right unless in right-to-left mode) from the current cell to merge.

###  MergeDown `Int32`

Specifies the number of adjacent cells below the current cell to merge.

###  StyleValue `String`

The ID of the style that has to be applied to the current cell.

## Methods

###  AppendAttributes

Appends the attirbutes to the output

#### Parameters

#### sb `System.Text.StringBuilder`

StringBuilder object that holds the rendered output

#### Returns

`System.Void` 

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

