---
title: Telerik.Web.UI.SpreadsheetSheet
description: Telerik.Web.UI.SpreadsheetSheet
slug: Telerik.Web.UI.SpreadsheetSheet
---

# Telerik.Web.UI.SpreadsheetSheet

## Inheritance Hierarchy

* *[Telerik.Web.UI.SpreadsheetSheet]({%slug Telerik.Web.UI.SpreadsheetSheet%})*


## Methods

### deleteColumn

Deletes the contents of the column at the provided index and shifts the remaining contents of the sheet to the left.

#### Parameters

##### index `Number`

 The zero-based index of the column

#### Returns

`None`

### deleteRow

Deletes the contents of the row at the provided index and shifts the remaining contents of the sheet up.

#### Parameters

##### index `Number` 

The zero-based index of the row

#### Returns

`None`

### get_columnWidth

Gets the width of the column at the given index.

#### Parameters 

#### Returns

`Number`

### get_frozenColumns

Gets the amount of frozen columns displayed by the sheet.

#### Parameters

#### Returns

`Number` The current frozen columns. By default, returns 0.

### get_frozenRows

Gets the amount of frozen rows displayed by the sheet.

#### Parameters

#### Returns

`Number`

### get_range

Returns a Range for the given range specification.

#### Parameters

##### rangeString `String`

A1 or RC notation reference of the cells. ex. "A1:B2"

#### Returns

`Telerik.Web.UI.SpreadsheetRange`

### get_rowHeight

Gets the default row height in pixels.

#### Parameters

#### Returns

`Number`

### get_selection

Returns a range with the current active selection.

#### Parameters

#### Returns

`Telerik.Web.UI.SpreadsheetRange`

### hideColumn

Hides the column at the provided index.

#### Parameters

##### index `Number` 

The zero-based index of the column.

#### Returns

`None`

### hideRow

Hides the row at the provided index.

#### Parameters

##### index `Number` 

The zero-based index of the row

#### Returns

`None`

### insertColumn

Inserts a new, empty column at the provided index. The contents of the spreadsheet (including the ones in the current column index) are shifted to the right.

#### Parameters

##### index `Number` 

The zero-based index of the column

#### Returns

`None`

### insertRow

Inserts a new, empty row at the provided index. The contents of the spreadsheet (including the ones in the current row index) are shifted down.

#### Parameters

##### index `Number` 

The zero-based index of the row

#### Returns

`None`

### set_columnWidth

Sets or sets the width of the column at the given index.

#### Parameters

##### colIndex `Number` 

The zero-based index of the column

##### width `Number`

If passed, the method will set the width of the column at the passed index. 

#### Returns

`None`

### set_frozenColumns

Sets the amount of frozen columns displayed by the sheet.

#### Parameters

##### count `Number` 

The amount of columns to be frozen. Pass 0 to remove the frozen pane. 

#### Returns

`Number`

### set_frozenRows

Sets the amount of frozen rows displayed by the sheet.

#### Parameters

##### count `Number` 

The amount of columns to be frozen. Pass 0 to remove the frozen pane.

#### Returns

`None`

### set_rowHeight

Sets the default row height in pixels.

#### Parameters

##### index `Number` 

The zero-based index of the row

##### width? `Number` 

If passed, the method will set the height of the row at the passed index.

#### Returns

`None`

