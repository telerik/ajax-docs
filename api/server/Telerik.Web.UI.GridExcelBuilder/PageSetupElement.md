---
title: Telerik.Web.UI.GridExcelBuilder.PageSetupElement
page_title: Telerik.Web.UI.GridExcelBuilder.PageSetupElement
description: Telerik.Web.UI.GridExcelBuilder.PageSetupElement
---

# Telerik.Web.UI.GridExcelBuilder.PageSetupElement

Used to change various aspects of the exported page - header/footer, layout, margins, etc.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.GridExcelBuilder.Abstract.ElementBase : IElement
* Telerik.Web.UI.GridExcelBuilder.PageSetupElement

## Properties

###  Attributes `IAttributesCollection`

Collection of the attributes of the current element

###  InnerElements `IElementsCollection`

Collection of inner elements

###  PageFooterElement `PageFooterElement`

Used to setup a page footer's margins and content

###  PageHeaderElement `PageHeaderElement`

Used to setup a page header's margins and content

###  PageLayoutElement `PageLayoutElement`

Determines the page orientation

###  PageMarginsElement `PageMarginsElement`

Determines the page margins

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

