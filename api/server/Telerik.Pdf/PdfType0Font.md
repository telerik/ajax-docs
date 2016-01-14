---
title: Telerik.Pdf.PdfType0Font
page_title: Telerik.Pdf.PdfType0Font
description: Telerik.Pdf.PdfType0Font
---

# Telerik.Pdf.PdfType0Font

A Type 0 font is a composite font whose glyphs are obtained from a
                font like object called a CIDFont (a descendant font).

#### Remarks
All versions of the PDF specification up to and including version 1.4
                only support a single descendant font.

## Inheritance Hierarchy

* System.Object
* Telerik.Pdf.PdfObject
* Telerik.Pdf.PdfDictionary : IEnumerable
* Telerik.Pdf.PdfFont
* Telerik.Pdf.PdfType0Font

## Properties

###  Descendant `PdfCIDFont`

Sets the descendant font.

###  Encoding `PdfName`

Sets a value representing the character encoding.

###  Name `PdfName`

Returns the internal name used for this font.

###  ToUnicode `PdfCMap`

Sets the stream containing a CMap that maps character codes to 
                unicode values.

