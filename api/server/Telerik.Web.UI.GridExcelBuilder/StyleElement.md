---
title: Telerik.Web.UI.GridExcelBuilder.StyleElement
page_title: Telerik.Web.UI.GridExcelBuilder.StyleElement
description: Telerik.Web.UI.GridExcelBuilder.StyleElement
---

# Telerik.Web.UI.GridExcelBuilder.StyleElement

Style element

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.GridExcelBuilder.Abstract.ElementBase : IElement
* Telerik.Web.UI.GridExcelBuilder.StyleElement

## Properties

###  AlignmentElement `AlignmentStyleElement`

Alignment style object. Speicifies both horizontal and vertical alignment.

###  Attributes `IAttributesCollection`

Collection of the attributes of the current element

###  Borders `IBorderStylesCollection`

Borders set for the current style

###  CellProtection `CellProtectionElement`

Cell protection settings

###  FontStyle `FontStyleElement`

Font style

###  Id `String`

Style ID string

###  InnerElements `IElementsCollection`

Collection of inner elements

###  InteriorStyle `InteriorStyleElement`

Interior style

###  NumberFormat `NumberFormatStyleElement`

Number format

## Methods

###  AppendAttributes

#### Returns

`System.Void` 

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

