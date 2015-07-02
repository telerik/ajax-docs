---
title: Telerik.Web.UI.GridExcelBuilder.WorksheetElement
page_title: Telerik.Web.UI.GridExcelBuilder.WorksheetElement
description: Telerik.Web.UI.GridExcelBuilder.WorksheetElement
---

# Telerik.Web.UI.GridExcelBuilder.WorksheetElement

ExcelML Worksheet element

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.GridExcelBuilder.Abstract.ElementBase
* Telerik.Web.UI.GridExcelBuilder.WorksheetElement

## Properties

###  IsProtected `Boolean`

Determines whether the worksheet is protected

###  AutoFilter `AutoFilterElement`

Returns the AutoFilterElement object

###  Name `String`

Worksheet name

###  WorksheetOptions `WorksheetOptionsElement`

Provides the possibility to change various options for the current Worksheet.

###  Table `TableElement`

Table element belonging to the current worksheet

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

