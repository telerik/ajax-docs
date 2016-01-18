---
title: Telerik.Web.UI.RadSpreadsheet
page_title: Client-side API Reference
description: Telerik.Web.UI.RadSpreadsheet
slug: Telerik.Web.UI.RadSpreadsheet
---

# Telerik.Web.UI.RadSpreadsheet : Telerik.Web.UI.RadWebControl

## Inheritance Hierarchy

* [Telerik.Web.UI.RadWebControl]({%slug Telerik.Web.UI.RadWebControl%})
* *Telerik.Web.UI.RadSpreadsheet]({%slug Telerik.Web.UI.RadSpreadsheet%})*

## Methods

### get_activeSheet

Gets the active sheet.

#### Parameters

#### Returns

`Telerik.Web.UI.SpreadsheetSheet`

### set_activeSheet

Sets the active sheet.

#### Parameters 

##### sheet `Telerik.Web.UI.SpreadsheetSheet`

#### Returns

`None`

### get_sheets

Returns an array with the sheets in the workbook.

#### Parameters

#### Returns

`Telerik.Web.UI.SpreadsheetSheet` Array

### get_kendoWidget

Returns Kendo UI SpreadSheet Widget.

#### Parameters

#### Returns

`Object`

### saveAsExcel

Initiates the Excel export.

#### Parameters

#### Returns

`None`

### findSheetByName

Returns a sheet matching the specified name, if any.

#### Parameters

##### name `String` The name of the sheet to locate.

#### Returns

`Telerik.Web.UI.SpreadsheetSheet`

### findSheetByIndex

Returns the index of the specified sheet.

#### Parameters

##### index `Number` the sheet index.

#### Returns

`Telerik.Web.UI.SpreadsheetSheet`

### insertSheet

Inserts a sheet with the specified options.

#### Parameters

#### Returns

`Telerik.Web.UI.SpreadsheetSheet`

### removeSheet

Inserts a sheet with the specified options.

#### Parameters

#### Returns

`None`

### renameSheet

Renames the specified sheet.

#### Parameters

##### sheet `Telerik.Web.UI.SpreadsheetSheet` The sheet instance to rename.

`String` The new name of the sheet.

#### Returns

`Telerik.Web.UI.SpreadsheetSheet` the renamed sheet.

### save

Save changes.

#### Parameters

#### Returns

`None`

### get_columnHeaderHeight

Returns the Height of the Column Header.

#### Parameters

#### Returns

`Number`

### set_columnHeaderHeight

Sets the Height of the Column Header.

#### Parameters

##### height `Number`

#### Returns

`None`

### get_columnWidth

Gets the default column width in pixels. Default value is 64

#### Parameters

#### Returns

`Number`

### get_columnWidth

Sets the default column width in pixels. Default value is 64

#### Parameters

##### width `Number` column width in pixels.

#### Returns

`None`

### get_columnsCount

Gets the number of columns in the document.

#### Parameters

#### Returns

`Number`

### set_columnsCount

Sets the number of columns in the document.

#### Parameters

##### count `Number`

#### Returns

`None`

### get_rowHeight

Gets the default row height in pixels. The default value is 20.

#### Parameters

#### Returns

`Number`

### set_rowHeight

Sets the default row height in pixels. The default value is 20.

#### Parameters

##### height `Number`

#### Returns

`None`

### get_rowsCount

Gets the number of rows in the document. The default value is 200.

#### Parameters

#### Returns

`Number` rows count.

### set_rowsCount

Sets the number of rows in the document. The default value is 200.

#### Parameters

##### count `Number` rows .

#### Returns

`None`

### get_sheetsData

Gets the Data Sheets Object.

#### Parameters

#### Returns

`Object`

### set_sheetsData

Sets the Data Sheets Object.

#### Parameters

##### data `Object`

#### Returns

`None`

### get_rowHeaderWidth

Gets the default Row Header Width.

#### Parameters

#### Returns

`Number`

### set_rowHeaderWidth

Sets the default Row Header Width.

#### Parameters

##### headerWidth `Number`

#### Returns

`None`