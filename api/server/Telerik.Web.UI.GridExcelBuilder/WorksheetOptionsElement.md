---
title: Telerik.Web.UI.GridExcelBuilder.WorksheetOptionsElement
page_title: Telerik.Web.UI.GridExcelBuilder.WorksheetOptionsElement
description: Telerik.Web.UI.GridExcelBuilder.WorksheetOptionsElement
---

# Telerik.Web.UI.GridExcelBuilder.WorksheetOptionsElement

Provides the possibility to change various options for the current Worksheet.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.GridExcelBuilder.Abstract.ElementBase : IElement
* Telerik.Web.UI.GridExcelBuilder.WorksheetOptionsElement

## Properties

###  AllowFreezePanes `Boolean`

Specifies whether the panes of a worksheet window are frozen.

###  FitToPage `Boolean`

Fits the whole content in a single page when enabled.

###  Print `PrintElement`

Used to set the Printer-related settings.

###  PageSetup `PageSetupElement`

Used to set the Page-related settings.

###  Zoom `Int32`

Determines the zoom level in Print Preview mode (in percentages)

###  ActivePane `Int32`

Determines the active pane.

###  SplitVerticalOffest `Int32`

Contains the number of points from the left of the window that a worksheet is split vertically.

###  SplitHorizontalOffset `Int32`

Contains the number of points from the top of the window that a worksheet is split horizontally.

###  LeftColumnRightPaneNumber `Int32`

Contains the column number of the leftmost visible column in the right pane of a worksheet window.

###  TopRowBottomPaneNumber `Int32`

Contains the row number of the topmost visible row in the bottom pane of a worksheet window.

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

