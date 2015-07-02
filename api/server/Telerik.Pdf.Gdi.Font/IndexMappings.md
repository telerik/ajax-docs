---
title: Telerik.Pdf.Gdi.Font.IndexMappings
page_title: Telerik.Pdf.Gdi.Font.IndexMappings
description: Telerik.Pdf.Gdi.Font.IndexMappings
---

# Telerik.Pdf.Gdi.Font.IndexMappings

Utility class that stores a list of glyph indices and their 
                asociated subset indices.

## Inheritance Hierarchy

* System.Object
* Telerik.Pdf.Gdi.Font.IndexMappings

## Properties

###  Count `Int32`

Gets the number of glyph to subset index mappings.

###  GlyphIndices `IList`

Gets a list of glyph indices sorted in ascending order.

###  SubsetIndices `IList`

Gets a list of subset indices sorted in ascending order.

## Methods

###  HasMapping

Determines whether a mapping exists for the supplied glyph index.

#### Parameters

#### glyphIndex `System.Int32`

#### Returns

`System.Boolean` 

###  Map

Returns the subset index for glyphIndex.  If a subset 
                index does not exist for glyphIndex one is generated.

#### Parameters

#### glyphIndex `System.Int32`

#### Returns

`System.Int32` A subset index.

###  Add

Adds the list of supplied glyph indices to the index mappings using 
                the next available subset index for each glyph index.

#### Parameters

#### glyphIndices `System.Int32`

#### Returns

`System.Void` 

###  GetSubsetIndex

Gets the subset index of glyphIndex.

#### Parameters

#### glyphIndex `System.Int32`

#### Returns

`System.Int32` A glyph index or -1 if a glyph to subset mapping does not exist.

###  GetGlyphIndex

Gets the glyph index of subsetIndex.

#### Parameters

#### subsetIndex `System.Int32`

#### Returns

`System.Int32` A subset index or -1 if a subset to glyph mapping does not exist.

