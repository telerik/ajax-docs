---
title: Telerik.Web.UI.TreeListPdfExportSettings
page_title: Telerik.Web.UI.TreeListPdfExportSettings
description: Telerik.Web.UI.TreeListPdfExportSettings
---

# Telerik.Web.UI.TreeListPdfExportSettings

PDF export settings

## Inheritance Hierarchy

* System.Object
* Telerik.Web.StateManager : IMarkableStateManager, IStateManager
* Telerik.Web.UI.TreeListPdfExportSettings : IDisposable

## Properties

###  ItemStyle `TreeListPdfStyle`

PDF export item style

###  AlternatingItemStyle `TreeListPdfStyle`

PDF export alternating item style

###  HeaderStyle `TreeListPdfStyle`

PDF export header style

###  ExpandCollapseCellStyle `TreeListPdfExpandCollapseCellStyle`

PDF export expand/collapse cell style

###  RotatePaper `Boolean`

This will swap the values of the PageWidth and PageHeight properties.

###  PaperSize `PaperKind`

PDF paper size. Can be overriden by setting PageWidth and PageHeight explicitly.

###  DefaultFontFamily `String`

Determines the default font

###  PageTopMargin `Unit`

Top page margin size

###  PageBottomMargin `Unit`

Bottom page margin size

###  PageLeftMargin `Unit`

Left page margin size

###  PageRightMargin `Unit`

Right page margin size

###  PageHeaderMargin `Unit`

Page header margin size

###  PageFooterMargin `Unit`

Page footer margin size

###  PageTitle `String`

Page title contents will be displayed in the page header

###  UserPassword `String`

Setting a value for this property will enable password protection

###  FontType `FontType`

Determines whether to embed, link or subset the fonts, used in the PDF document

###  PageWidth `Unit`

Determines the page width of the exported PDF file. Will override the PaperSize property, if used

###  PageHeight `Unit`

Determines the page height of the exported PDF file. Will override the PaperSize property, if used

###  AllowAdd `Boolean`

Allow adding new content to the PDF file

###  AllowCopy `Boolean`

Allow copying PDF content to the clipboard

###  AllowPrinting `Boolean`

Allow printing the contents of the PDF document

###  AllowModify `Boolean`

Allow modifying the PDF contents

###  Creator `String`

Document creator

###  Producer `String`

Document producer

###  Author `String`

Document author

###  Title `String`

Document title

###  Subject `String`

Document subject

###  Keywords `String[]`

PDF document keywords

## Methods

###  TrackViewState

#### Returns

`System.Void` 

###  LoadViewState

#### Returns

`System.Void` 

###  SaveViewState

#### Returns

`System.Object` 

###  GetPaperKindDimensions

Returns the paper dimensions by given PaperKind value

#### Remarks
PaperFormat.xml resource is based on the PaperKind enumeration.

#### Parameters

#### paperKind `System.Drawing.Printing.PaperKind`

PaperKind value

#### Returns

`System.Web.UI.Pair` 

###  GetPaperWidth

Returns Unit object representing the page width

#### Parameters

#### paperKind `System.Drawing.Printing.PaperKind`

PdfPagerSize value

#### Returns

`System.Web.UI.WebControls.Unit` Page width.

###  GetPaperHeight

Returns Unit object representing the page height

#### Parameters

#### paperKind `System.Drawing.Printing.PaperKind`

PdfPagerSize value

#### Returns

`System.Web.UI.WebControls.Unit` Page height.

###  Dispose

Performs application-defined tasks associated with freeing, releasing,
            or resetting unmanaged resources.

#### Returns

`System.Void` 

