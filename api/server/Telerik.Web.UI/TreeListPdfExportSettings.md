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

###  AllowAdd `Boolean`

Allow adding new content to the PDF file

###  AllowCopy `Boolean`

Allow copying PDF content to the clipboard

###  AllowModify `Boolean`

Allow modifying the PDF contents

###  AllowPrinting `Boolean`

Allow printing the contents of the PDF document

###  AlternatingItemStyle `TreeListPdfStyle`

PDF export alternating item style

###  Author `String`

Document author

###  Creator `String`

Document creator

###  DefaultFontFamily `String`

Determines the default font

###  ExpandCollapseCellStyle `TreeListPdfExpandCollapseCellStyle`

PDF export expand/collapse cell style

###  FontType `FontType`

Determines whether to embed, link or subset the fonts, used in the PDF document

###  HeaderStyle `TreeListPdfStyle`

PDF export header style

###  ItemStyle `TreeListPdfStyle`

PDF export item style

###  Keywords `String[]`

PDF document keywords

###  PageBottomMargin `Unit`

Bottom page margin size

###  PageFooterMargin `Unit`

Page footer margin size

###  PageHeaderMargin `Unit`

Page header margin size

###  PageHeight `Unit`

Determines the page height of the exported PDF file. Will override the PaperSize property, if used

###  PageLeftMargin `Unit`

Left page margin size

###  PageRightMargin `Unit`

Right page margin size

###  PageTitle `String`

Page title contents will be displayed in the page header

###  PageTopMargin `Unit`

Top page margin size

###  PageWidth `Unit`

Determines the page width of the exported PDF file. Will override the PaperSize property, if used

###  PaperSize `PaperKind`

PDF paper size. Can be overriden by setting PageWidth and PageHeight explicitly.

###  Producer `String`

Document producer

###  RotatePaper `Boolean`

This will swap the values of the PageWidth and PageHeight properties.

###  Subject `String`

Document subject

###  Title `String`

Document title

###  UserPassword `String`

Setting a value for this property will enable password protection

## Methods

###  Dispose

Performs application-defined tasks associated with freeing, releasing,
            or resetting unmanaged resources.

#### Returns

`System.Void` 

###  GetPaperHeight

Returns Unit object representing the page height

#### Parameters

#### paperKind `System.Drawing.Printing.PaperKind`

PdfPagerSize value

#### Returns

`System.Web.UI.WebControls.Unit` Page height.

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

