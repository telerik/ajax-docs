---
title: Telerik.Web.UI.GridExcelBuilder.PageLayoutElement
page_title: Telerik.Web.UI.GridExcelBuilder.PageLayoutElement
description: Telerik.Web.UI.GridExcelBuilder.PageLayoutElement
---

# Telerik.Web.UI.GridExcelBuilder.PageLayoutElement

Used to change the page orientation and alignment. The effect of these settings is visible in Print mode only.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.GridExcelBuilder.Abstract.ElementBase : IElement
* Telerik.Web.UI.GridExcelBuilder.PageLayoutElement

## Properties

###  IsCenteredVertical `Boolean`

Determines whether the page will be centered vertically

###  IsCenteredHorizontal `Boolean`

Determines whether the page will be centered horizontally

###  PageOrientation `PageOrientationType`

Sets the page orientation to portrait (default) or landscape

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

