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

## Properties

###  SystemInfo `PdfCIDSystemInfo`

###  stream `MemoryStream`

###  streamData `MemoryStream`

###  data `Byte[]`

###  m_dictionary `PdfDictionary`

###  IsIndirect `Boolean`

###  ObjectId `PdfObjectId`

## Methods

###  AddBfRanges

Adds the supplied glyph -> unicode pairs.

#### Remarks
Both the key and value must be a int.

#### Parameters

#### map `System.Collections.IDictionary`

#### Returns

`System.Void` 

###  AddBfRange

Adds the supplied glyph index to unicode value mapping.

#### Parameters

#### glyphIndex `System.Int32`

#### unicodeValue `System.Int32`

#### Returns

`System.Void` 

###  Write

Overriden to create CMap content stream.

#### Parameters

#### writer `Telerik.Pdf.PdfWriter`

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

###  Write

#### Returns

`System.Void` 

###  WriteLine

#### Returns

`System.Void` 

###  Write

TODO: This method is temporary.  I'm assuming that all string should 
                be represented as a PdfString object?

#### Parameters

#### s `System.String`

#### Returns

`System.Void` 

###  WriteLine

#### Returns

`System.Void` 

###  Write

#### Returns

`System.Void` 

###  WriteLine

#### Returns

`System.Void` 

###  Write

#### Returns

`System.Void` 

###  WriteLine

#### Returns

`System.Void` 

###  WriteSpace

#### Returns

`System.Void` 

###  WriteLine

#### Returns

`System.Void` 

###  WriteByte

#### Returns

`System.Void` 

###  Write

#### Returns

`System.Void` 

###  WriteKeyword

#### Returns

`System.Void` 

###  WriteLine

#### Returns

`System.Void` 

###  Write

#### Returns

`System.Void` 

###  Dispose

#### Returns

`System.Void` 

###  Dispose

#### Returns

`System.Void` 

###  AddFilter

#### Returns

`System.Void` 

###  Write

#### Returns

`System.Void` 

###  Write

#### Returns

`System.Void` 

###  WriteIndirect

#### Returns

`System.Void` 

###  GetReference

#### Returns

`Telerik.Pdf.PdfObjectReference` 

