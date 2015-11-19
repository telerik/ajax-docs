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

###  PageFooter `String`

Used to set the page footer of the exported worksheet

###  PageHeader `String`

Used to set the page header of the exported worksheet

###  ShowGridlines `Boolean`

Determines whether the gridlines will be enabled in the worksheet

###  PageTopMargin `Unit`

Determines the margin between the top of the page and the beginning of the page content

###  PageBottomMargin `Unit`

Determines the margin between the bottom of the page and the beginning of the page content

###  PageLeftMargin `Unit`

Determines the margin between the left side of the page and the beginning of the page content

###  PageRightMargin `Unit`

Determines the margin between the right side of the page and the beginning of the page content

###  RotatePaper `Boolean`

This will swap the values of the PageWidth and PageHeight properties.

###  PaperSize `PaperKind`

Word paper size

###  ItemStyle `TreeListWordStyle`

Word export item style

###  AlternatingItemStyle `TreeListWordStyle`

Word export alternating item style

###  HeaderStyle `TreeListWordStyle`

Word export header style

###  FooterItemStyle `TreeListWordStyle`

Word export footer item style

###  ExpandCollapseCellStyle `TreeListWordExpandCollapseCellStyle`

Word export expand/collapse cell style

## Methods

###  GetPaperKindDimensions

Returns the paper dimensions in SizeF object

#### Remarks
PaperFormat.xml resource is based on the PaperKind enumeration.

#### Parameters

#### paperKind `System.Drawing.Printing.PaperKind`

PaperKind value to be converted to SizeF object

#### Returns

`System.Drawing.SizeF` 

###  TrackViewState

#### Returns

`System.Void` 

###  LoadViewState

#### Returns

`System.Void` 

###  SaveViewState

#### Returns

`System.Object` 

###  Dispose

Performs application-defined tasks associated with freeing, releasing,
            or resetting unmanaged resources.

#### Returns

`System.Void` 

