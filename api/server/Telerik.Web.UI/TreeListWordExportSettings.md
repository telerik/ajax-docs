---
title: Telerik.Web.UI.TreeListWordExportSettings
page_title: Telerik.Web.UI.TreeListWordExportSettings
description: Telerik.Web.UI.TreeListWordExportSettings
---

# Telerik.Web.UI.TreeListWordExportSettings

RadTreeList Excel export settings

## Inheritance Hierarchy

* System.Object
* Telerik.Web.StateManager : IMarkableStateManager, IStateManager
* Telerik.Web.UI.TreeListWordExportSettings : IDisposable

## Properties

###  AlternatingItemStyle `TreeListWordStyle`

Word export alternating item style

###  ExpandCollapseCellStyle `TreeListWordExpandCollapseCellStyle`

Word export expand/collapse cell style

###  FooterItemStyle `TreeListWordStyle`

Word export footer item style

###  HeaderStyle `TreeListWordStyle`

Word export header style

###  ItemStyle `TreeListWordStyle`

Word export item style

###  PageBottomMargin `Unit`

Determines the margin between the bottom of the page and the beginning of the page content

###  PageFooter `String`

Used to set the page footer of the exported worksheet

###  PageHeader `String`

Used to set the page header of the exported worksheet

###  PageLeftMargin `Unit`

Determines the margin between the left side of the page and the beginning of the page content

###  PageRightMargin `Unit`

Determines the margin between the right side of the page and the beginning of the page content

###  PageTopMargin `Unit`

Determines the margin between the top of the page and the beginning of the page content

###  PaperSize `PaperKind`

Word paper size

###  RotatePaper `Boolean`

This will swap the values of the PageWidth and PageHeight properties.

###  ShowGridlines `Boolean`

Determines whether the gridlines will be enabled in the worksheet

## Methods

###  Dispose

Performs application-defined tasks associated with freeing, releasing,
            or resetting unmanaged resources.

#### Returns

`System.Void` 

###  GetPaperKindDimensions

Returns the paper dimensions in SizeF object

#### Remarks
PaperFormat.xml resource is based on the PaperKind enumeration.

#### Parameters

#### paperKind `System.Drawing.Printing.PaperKind`

PaperKind value to be converted to SizeF object

#### Returns

`System.Drawing.SizeF` 

