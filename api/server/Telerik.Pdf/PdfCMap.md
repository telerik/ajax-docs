---
title: Telerik.Pdf.PdfCMap
page_title: Telerik.Pdf.PdfCMap
description: Telerik.Pdf.PdfCMap
---

# Telerik.Pdf.PdfCMap

Class that defines a mapping between character codes (CIDs) 
                to a character selector (Identity-H encoding)

## Inheritance Hierarchy

* System.Object
* Telerik.Pdf.PdfObject
* Telerik.Pdf.PdfStream
* Telerik.Pdf.PdfContentStream : IDisposable
* Telerik.Pdf.PdfCMap

## Methods

###  AddBfRange

Adds the supplied glyph index to unicode value mapping.

#### Parameters

#### glyphIndex `System.Int32`

#### unicodeValue `System.Int32`

#### Returns

`System.Void` 

###  AddBfRanges

Adds the supplied glyph -> unicode pairs.

#### Remarks
Both the key and value must be a int.

#### Parameters

#### map `System.Collections.IDictionary`

#### Returns

`System.Void` 

###  Write

Overriden to create CMap content stream.

#### Parameters

#### writer `Telerik.Pdf.PdfWriter`

#### Returns

`System.Void` 

###  Write

TODO: This method is temporary.  I'm assuming that all string should 
                be represented as a PdfString object?

#### Parameters

#### s `System.String`

#### Returns

`System.Void` 

###  WriteBfChars

Writes the bfchar entries to the content stream in groups of 100.

#### Parameters

#### entries `Telerik.Pdf.BfEntryList`

#### Returns

`System.Void` 

###  WriteBfRanges

Writes the bfrange entries to the content stream in groups of 100.

#### Parameters

#### entries `Telerik.Pdf.BfEntryList`

#### Returns

`System.Void` 

