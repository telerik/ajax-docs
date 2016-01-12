---
title: SpreadsheetRange Object
page_title: SpreadsheetRange Object | UI for ASP.NET AJAX Documentation
description: SpreadsheetRange Object
slug: spreadsheet/client-side-programming/objects/spreadsheetrange
tags: spreadsheetrange
published: True
position: 0
---

# SpreadsheetRange Object

This article explains the methods of the **SpreadsheetRange** client-side object and provides examples on its usage.


>caption The following example demonstrates two approaches for acquisition of a SpreadsheetRange reference, which can be used to manipulate the cell(s) state further.
````JavaScript	

function getActiveSheet() {
	var spreadsheet = $find("<%= RadSpreadSheet1.ClientID %>");
	var activeSheet = spreadsheet.get_activeSheet();
	var singleCellRange = sheet.get_range("A1")  
	var mutliCellRange = sheet.get_range("A1:B3"); // usign RC Notation
}

````

>caption The following table lists the methods of the client-side **SpreadsheetRange** object:
 
| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| **get_enabled** |none|bool|Gets the disabled state of the cells in the range.|
| **set_enabled** |bool|none|Sets the disabled state of the cells in the range.|
| **set_filter** |bool/Object/Array|none|Enables/disables or sets the filter for a given range.|
| **hasFilter** |none|bool|Returns true if the sheet of the range has filter enabled.|
| **get_isSortable** |none|bool|Returns true if a range can be sorted.|
| **get_isFilterable** |none|bool|Returns true if a range can be filtered.|
| **merge** |none|none|Merges the range cells into a single merged cell. If the range already includes a merged cell, they are merged, too.|
| **unmerge** |none|none|Un-merges any merged cells which are included in the range.|
| **select** |none|none|Sets the sheet selection to the range cells.|
| **fillFrom** |SpreadsheetRange/string|none|Fills a range with values inferred from a source range. This method employs some heuristics similar to what Excel's auto-filling algorithm does when you select a range of cells and drag the bottom-right handle. The range to be filled is the current object, and you must pass a source range containing data as first argument.|
| **clear** |none/object|none|Clears the contents of the range cells.|
| **clearFilter** |Array/int|none|Clears the set filters for the given column(s). The indices is relative to the beginning of the range.|
| **get_borderBottomColor** |none|string|Gets the color of the bottom border of the cells.|
| **set_borderBottomColor** |string|none|Sets the color of the bottom border of the cells. If the range includes more than a single cell, the setting is applied to all cells. The color may be set to any valid [CSS color](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value).|
| **get_borderBottomSize** |none|int|Gets the size of the bottom border of the cells.|
| **set_borderBottomSize** |int|none|Sets the size of the bottom border of the cells. If the range includes more than a single cell, the setting is applied to all cells. The method accepts any valid [Length value](https://developer.mozilla.org/en-US/docs/Web/CSS/length).|
| **get_borderLeftColor** |none|string|Gets the color of the left border of the cells.|
| **set_borderLeftColor** |string|none|Sets the color of the left border of the cells. If the range includes more than a single cell, the setting is applied to all cells. The color may be set to any valid [CSS color](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value).|
| **get_borderLeftSize** |none|int|Gets the size of the left border of the cells.|
| **set_borderLeftSize** |int|none|Sets the size of the left border of the cells. If the range includes more than a single cell, the setting is applied to all cells. The method accepts any valid [Length value](https://developer.mozilla.org/en-US/docs/Web/CSS/length).|
| **get_borderRightColor** |none|string|Gets the color of the right border of the cells.|
| **set_borderRightColor** |string|none|Sets the color of the right border of the cells. If the range includes more than a single cell, the setting is applied to all cells. The color may be set to any valid [CSS color](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value).|
| **get_borderRightSize** |none|int|Gets the size of the right border of the cells.|
| **set_borderRightSize** |int|none|Sets the size of the right border of the cells. If the range includes more than a single cell, the setting is applied to all cells. The method accepts any valid [Length value](https://developer.mozilla.org/en-US/docs/Web/CSS/length).|
| **get_get_borderTopColor** |none|string|Gets the color of the top border of the cells.|
| **set_set_borderTopColor** |string|none|Sets the color of the top border of the cells. If the range includes more than a single cell, the setting is applied to all cells. The color may be set to any valid [CSS color](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value).|
| **get_get_borderTopSize** |none|int|Gets the size of the top border of the cells.|
| **set_set_borderTopSize** |int|none|Sets the size of the top border of the cells. If the range includes more than a single cell, the setting is applied to all cells. The method accepts any valid [Length value](https://developer.mozilla.org/en-US/docs/Web/CSS/length).|


