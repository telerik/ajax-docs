---
title: Telerik.Pdf.Gdi.GdiUnicodeRanges
page_title: Telerik.Pdf.Gdi.GdiUnicodeRanges
description: Telerik.Pdf.Gdi.GdiUnicodeRanges
---

# Telerik.Pdf.Gdi.GdiUnicodeRanges

Custom collection that maintains a list of Unicode ranges 
                a font supports and the glyph indices of each character.
                The list of ranges is obtained by invoking GetFontUnicodeRanges,
                however the associated glyph indices are lazily instantiated as 
                required to save memory.

## Inheritance Hierarchy

* System.Object
* Telerik.Pdf.Gdi.GdiUnicodeRanges

## Properties

###  Count `Int32`

Gets the number of unicode ranges.

## Methods

###  GetRange

Locates the  for the supplied character.

#### Parameters

#### c `System.Char`

#### Returns

`Telerik.Pdf.Gdi.UnicodeRange` The  object housing c or null 
                if a range does not exist for c.

###  LoadRanges

Loads all the unicode ranges.

#### Returns

`System.Void` 

###  MapCharacter

Translates the supplied character to a glyph index.

#### Parameters

#### c `System.Char`

Any unicode character.

#### Returns

`System.Int32` A glyph index for c or 0 the supplied character does 
                not exist in the font selected into the device context.

