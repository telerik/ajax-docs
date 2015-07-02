---
title: Telerik.Web.UI.ClientExportManagerPdfSettings
page_title: Telerik.Web.UI.ClientExportManagerPdfSettings
description: Telerik.Web.UI.ClientExportManagerPdfSettings
---

# Telerik.Web.UI.ClientExportManagerPdfSettings

Represents the PDF settings needed to export SVG files with RadClientExportManager

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.ClientExportManagerPdfSettings

## Properties

###  FileName `String`

Gets or sets the name of the exported PDF file

###  ProxyURL `String`

Gets or sets the proxy URL use to export files under Internet Explorer 9

###  PaperSize `String`

Gets or sets the paper size of the PDF document. The default "auto" means paper size is determined by content.

###  Landscape `Boolean`

Gets or sets the whether to reverse the document dimensions

###  MarginTop `String`

Gets or set the top margin of the document

###  MarginBottom `String`

Gets or sets the bottom margin of the document

###  MarginLeft `String`

Gets or sets the left margin of the document

###  MarginRight `String`

Gets or set the right margin of the document

###  Title `String`

Gets or sets the title of the document

###  Author `String`

Gets or sets the author of the document

###  Subject `String`

Gets or sets the subject of the document

###  Keywords `String`

Gets or sets the keywords of the document

###  Creator `String`

Gets or sets the creator of the document

###  PageBreakSelector `String`

Gets or sets the CSS selector used for multi paging

###  Date `DateTime`

Gets or sets when the PDF document is created. Default value is DateTime.Now

###  Fonts `Dictionary`2`

Gets or sets the fonts needed to export text using custom fonts

#### Remarks
The key contains the name of the font and the value contains the URL of the font file. E.g. Fonts.Add("Verdana", "/fonts/Verdana.ttf")

