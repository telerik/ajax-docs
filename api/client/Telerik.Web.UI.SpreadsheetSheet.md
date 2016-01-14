---
title:Telerik.Web.UI.SpreadsheetSheet
page_title:
description:
---

# Telerik.Web.UI.SpreadsheetSheet

## Methods

### get_range

Returns a Range for the given range specification.

#### Parameters

##### `String` A1 or RC notation reference of the cells. ex. "A1:B2"

#### Returns

`Telerik.Web.UI.SpreadsheetRange`

### get_selection

Returns a range with the current active selection.

#### Parameters

#### Returns

`Telerik.Web.UI.SpreadsheetRange`

### get_columnWidth

Gets or sets the width of the column at the given index.

#### Parameters 

#### Returns

`None`

### set_columnWidth

Sets or sets the width of the column at the given index.

#### Parameters

##### The zero-based index of the column `Number` 

##### If passed, the method will set the width of the column at the passed index. `Number` 

#### Returns

`None`

### get_rowHeight

Gets the default row height in pixels.

#### Parameters

#### Returns

`Number`

### set_rowHeight

Sets the default row height in pixels.

#### Parameters

##### index `Number` The zero-based index of the row

##### width `Number` optional If passed, the method will set the height of the row at the passed index.

#### Returns

`None`

### deleteColumn

Deletes the contents of the column at the provided index and shifts the remaining contents of the sheet to the left.

#### Parameters

##### index `Number` The zero-based index of the column

#### Returns

`None`

### deleteRow

Deletes the contents of the row at the provided index and shifts the remaining contents of the sheet up.

#### Parameters

##### index `Number` The zero-based index of the row

#### Returns

`None`

### get_frozenColumns

Gets the amount of frozen columns displayed by the sheet.

#### Parameters

#### Returns

`Number` The current frozen columns. By default, returns 0.

### set_frozenColumns

Sets the amount of frozen columns displayed by the sheet.

#### Parameters

##### count `Number` The amount of columns to be frozen. Pass 0 to remove the frozen pane. 

#### Returns

`Number`

### get_frozenRows

Gets the amount of frozen rows displayed by the sheet.

#### Parameters

#### Returns

`Number`

### set_frozenRows

Sets the amount of frozen rows displayed by the sheet.

#### Parameters

##### count `Number` The amount of columns to be frozen. Pass 0 to remove the frozen pane.

#### Returns

`None`

### hideColumn

Hides the column at the provided index.

#### Parameters

##### index `Number` The zero-based index of the column.

#### Returns

`None`

### hideRow

Hides the row at the provided index.

#### Parameters

##### index `Number` The zero-based index of the row

#### Returns

`None`

### insertColumn

Inserts a new, empty column at the provided index. The contents of the spreadsheet (including the ones in the current column index) are shifted to the right.

#### Parameters

##### index `Number` The zero-based index of the column

#### Returns

`None`

### insertRow

Inserts a new, empty row at the provided index. The contents of the spreadsheet (including the ones in the current row index) are shifted down.

#### Parameters

##### index `Number` The zero-based index of the row

#### Returns

`None`

## Events