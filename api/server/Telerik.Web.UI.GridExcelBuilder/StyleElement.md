---
title: Telerik.Web.UI.GridExcelBuilder.StyleElement
page_title: Telerik.Web.UI.GridExcelBuilder.StyleElement
description: Telerik.Web.UI.GridExcelBuilder.StyleElement
---

# Telerik.Web.UI.GridExcelBuilder.StyleElement

Style element

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.GridExcelBuilder.Abstract.ElementBase
* Telerik.Web.UI.GridExcelBuilder.StyleElement

## Properties

###  AlignmentElement `AlignmentStyleElement`

Alignment style object. Speicifies both horizontal and vertical alignment.

###  Borders `IBorderStylesCollection`

Borders set for the current style

###  NumberFormat `NumberFormatStyleElement`

Number format

###  InteriorStyle `InteriorStyleElement`

Interior style

###  FontStyle `FontStyleElement`

Font style

###  CellProtection `CellProtectionElement`

Cell protection settings

###  Id `String`

Style ID string

###  InnerElements `IElementsCollection`

Collection of inner elements

###  Attributes `IAttributesCollection`

Collection of the attributes of the current element

## Methods

###  AppendAttributes

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

###  AppendAttributes

Appends the attirbutes to the output

#### Parameters

#### sb `System.Text.StringBuilder`

StringBuilder object that holds the rendered output

#### Returns

`System.Void` 

