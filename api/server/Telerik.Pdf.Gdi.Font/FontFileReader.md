---
title: Telerik.Pdf.Gdi.Font.FontFileReader
page_title: Telerik.Pdf.Gdi.Font.FontFileReader
description: Telerik.Pdf.Gdi.Font.FontFileReader
---

# Telerik.Pdf.Gdi.Font.FontFileReader

Class designed to parse a TrueType font file.

## Inheritance Hierarchy

* System.Object
* Telerik.Pdf.Gdi.Font.FontFileReader : IDisposable

## Properties

###  IndexMappings `IndexMappings`

Gets or sets a dictionary containing glyph index to subset 
                index mappings.

###  Stream `FontFileStream`

Gets the underlying .

###  TableCount `Int32`

Gets the number tables.

## Methods

###  ContainsTable

Gets a value indicating whether or not this font contains the 
                supplied table.

#### Parameters

#### tableName `System.String`

A table name.

#### Returns

`System.Boolean` 

###  GetDictionaryEntry

Gets a  object for the supplied table.

#### Parameters

#### tableName `System.String`

A 4-character code identifying a table.

#### Returns

`Telerik.Pdf.Gdi.Font.DirectoryEntry` A  object or null if the table cannot 
                be located.

###  GetTable

Gets a reference to the table structure identified by tableName

#### Remarks
Only the following tables are supported: 
                 - Font header,
                 - Horizontal header,
                 - Horizontal metrics,
                 - Maximum profile,
                 - Index to location, 
                 - Glyf data,
                 - Control value,
                 - Control value program,
                 - Font program

#### Parameters

#### tableName `System.String`

A 4-character code identifying a table.

#### Returns

`Telerik.Pdf.Gdi.Font.FontTable` 

###  OffsetStream

Sets the stream position to the offset in the supplied directory
                entry. Also ensures that the FontFileStream has enough bytes 
                available to read a font table.  Throws an exception if this 
                condition is not met.

#### Parameters

#### entry `Telerik.Pdf.Gdi.Font.DirectoryEntry`

#### Returns

`System.Void` 

###  ReadRequiredTables

Caches the following tables: 'head', 'hhea', 'maxp', 'loca'

#### Returns

`System.Void` 

###  ReadTableHeaders

Reads the Offset and Directory tables.  If the FontFileStream represents 
                a TrueType collection, this method will look for the aforementioned 
                tables belonging to fontName.

#### Remarks
This method can handle a TrueType collection.

#### Returns

`System.Void` 

