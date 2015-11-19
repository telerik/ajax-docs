---
title: Telerik.Web.UI.TreeListExcelExportSettings
page_title: Telerik.Web.UI.TreeListExcelExportSettings
description: Telerik.Web.UI.TreeListExcelExportSettings
---

# Telerik.Web.UI.TreeListExcelExportSettings

RadTreeList Excel export settings

## Inheritance Hierarchy

* System.Object
* Telerik.Web.StateManager : IMarkableStateManager, IStateManager
* Telerik.Web.UI.TreeListExcelExportSettings : IDisposable

## Properties

###  Format `TreeListExcelFormat`

Determines the Excel format used

###  PageFooter `String`

Used to set the page footer of the exported worksheet

###  PageHeader `String`

Used to set the page header of the exported worksheet

###  WorksheetName `String`

Set the name of the worksheet

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

Excel paper size

###  ItemStyle `TreeListExcelStyle`

Excel export item style

###  AlternatingItemStyle `TreeListExcelStyle`

Excel export alternating item style

###  HeaderStyle `TreeListExcelStyle`

Excel export header style

###  FooterItemStyle `TreeListExcelStyle`

Excel export footer item style

###  ExpandCollapseCellStyle `TreeListExcelExpandCollapseCellStyle`

Excel export expand/collapse cell style

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

