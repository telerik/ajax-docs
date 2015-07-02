---
title: Telerik.Pdf.Gdi.GdiFont
page_title: Telerik.Pdf.Gdi.GdiFont
description: Telerik.Pdf.Gdi.GdiFont
---

# Telerik.Pdf.Gdi.GdiFont

A thin wrapper around a handle to a font

## Inheritance Hierarchy

* System.Object
* Telerik.Pdf.Gdi.GdiFont

## Properties

###  FaceName `String`

###  Height `Int32`

###  Handle `IntPtr`

## Methods

###  Finalize

Class destructor

#### Returns

`System.Void` 

###  Dispose

#### Returns

`System.Void` 

###  Dispose

#### Returns

`System.Void` 

###  CreateFont

Creates a font based on the supplied typeface name and size.

#### Parameters

#### faceName `System.String`

The typeface name of a font.

#### height `System.Int32`

The height, in logical units, of the font's character 
                cell or character.

#### bold `System.Boolean`

#### italic `System.Boolean`

#### Returns

`Telerik.Pdf.Gdi.GdiFont` 

###  CreateDesignFont

Creates a font whose height is equal to the negative value 
                of the EM Square

#### Returns

`Telerik.Pdf.Gdi.GdiFont` 

###  GetMetrics

#### Returns

`Telerik.Pdf.Gdi.GdiFontMetrics` 

