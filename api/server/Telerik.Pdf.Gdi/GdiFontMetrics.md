---
title: Telerik.Pdf.Gdi.GdiFontMetrics
page_title: Telerik.Pdf.Gdi.GdiFontMetrics
description: Telerik.Pdf.Gdi.GdiFontMetrics
---

# Telerik.Pdf.Gdi.GdiFontMetrics

Class that obtains OutlineTextMetrics for a TrueType font

## Inheritance Hierarchy

* System.Object
* Telerik.Pdf.Gdi.GdiFontMetrics : IDisposable

## Properties

###  FaceName `String`

Retrieves the typeface name of the font that is selected into the 
                device context supplied to the GdiFontMetrics constructor.

###  EmSquare `Int32`

Specifies the number of logical units defining the x- or y-dimension 
                of the em square for this font.  The common value for EmSquare is 2048.

#### Remarks
The number of units in the x- and y-directions are always the same 
                for an em square.)

###  ItalicAngle `Int32`

Gets the main italic angle of the font expressed in tenths of 
                a degree counterclockwise from the vertical.

#### Remarks
Regular (roman) fonts have a value of zero. Italic fonts typically 
                have a negative italic angle (that is, they lean to the right).

###  Ascent `Int32`

Specifies the maximum distance characters in this font extend 
                above the base line. This is the typographic ascent for the font.

###  Descent `Int32`

Specifies the maximum distance characters in this font extend 
                below the base line. This is the typographic descent for the font.

###  CapHeight `Int32`

Gets the distance between the baseline and the approximate 
                height of uppercase letters.

###  XHeight `Int32`

Gets the distance between the baseline and the approximate 
                height of non-ascending lowercase letters.

###  StemV `Int32`

TODO: The thickness, measured horizontally, of the dominant vertical 
                stems of the glyphs in the font.

###  FirstChar `Int32`

Gets the value of the first character defined in the font

###  LastChar `Int32`

Gets the value of the last character defined in the font

###  AverageWidth `Int32`

Gets the average width of glyphs in a font.

###  MaxWidth `Int32`

Gets the maximum width of glyphs in a font.

###  IsEmbeddable `Boolean`

Gets a value indicating whether the font can be legally embedded 
                within a document.

###  IsSubsettable `Boolean`

Gets a value indicating whether the font can be legally subsetted.

###  BoundingBox `Int32[]`

Gets the font's bounding box.

#### Remarks
This is the smallest rectangle enclosing the shape that would 
                result if all the glyphs of the font were placed with their 
                origins cooincident and then filled.

###  Flags `Int32`

Gets a collection of flags defining various characteristics of 
                a font (e.g. serif or sans-serif, symbolic, etc).

###  KerningPairs `GdiKerningPairs`

Gets a collection of kerning pairs.

###  AnsiKerningPairs `GdiKerningPairs`

Gets a collection of kerning pairs for characters defined in 
                the WinAnsiEncoding scheme only.

## Methods

###  GetFontData

Gets font metric data for a TrueType font or TrueType collection.

#### Returns

`System.Byte[]` 

###  GetWidths

Retrieves the widths, in PDF units, of consecutive glyphs.

#### Returns

`System.Int32[]` An array of integers whose size is equal to the number of glyphs 
                specified in the 'maxp' table.
                The width at location 0 is the width of glyph with index 0, 
                The width at location 1 is the width of glyph with index 1, 
                etc...

###  GetAnsiWidths

Returns the width, in PDF units, of consecutive glyphs for the 
                WinAnsiEncoding only.

#### Returns

`System.Int32[]` An array consisting of 256 elements.

###  MapCharacter

Translates the supplied character to a glyph index using the 
                currently selected font.

#### Parameters

#### c `System.Char`

A unicode character.

#### Returns

`System.Int32` 

###  Dispose

#### Returns

`System.Void` 

###  Dispose

#### Returns

`System.Void` 

