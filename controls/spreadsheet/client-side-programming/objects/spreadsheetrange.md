---
title: SpreadsheetRange Object
page_title: SpreadsheetRange Object
description: Check our Web Forms article about SpreadsheetRange Object.
slug: spreadsheet/client-side-programming/objects/spreadsheetrange
tags: spreadsheetrange
published: True
position: 0
---

# SpreadsheetRange Object

This article explains the methods of the **SpreadsheetRange** client-side object and provides examples on its usage.


>caption The following example demonstrates two approaches for acquisition of a SpreadsheetRange reference, which can be used to manipulate the cell(s) state further.
````JavaScript	

function getRange() {
	var spreadsheet = $find("<%= RadSpreadSheet1.ClientID %>");
	var activeSheet = spreadsheet.get_activeSheet();
	var singleCellRange = activeSheet.get_range("A1")  
	var mutliCellRange = activeSheet.get_range("A1:B3"); // using A1 Notation
}

````

>caption The following table lists the methods of the client-side **SpreadsheetRange** object:
 
| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| **get_enabled** |none|bool|Gets the disabled state of the cells in the range.|
| **set_enabled** |bool|none|Sets the disabled state of the cells in the range. (see **Example 1**)|
| **set_filter** |bool/Object/Array|none|Enables/disables or sets the filter for a given range. (see **Example 2**)|
| **hasFilter** |none|bool|Returns true if the sheet of the range has filter enabled.|
| **get_isSortable** |none|bool|Returns true if a range can be sorted.|
| **get_isFilterable** |none|bool|Returns true if a range can be filtered.|
| **merge** |none|none|Merges the range cells into a single merged cell. If the range already includes a merged cell, they are merged, too. (see **Example 3**)|
| **unmerge** |none|none|Un-merges any merged cells which are included in the range.|
| **select** |none|none|Sets the sheet selection to the range cells.|
| **fillFrom** |SpreadsheetRange/string|none|Fills a range with values inferred from a source range. This method employs some heuristics similar to what Excel's auto-filling algorithm does when you select a range of cells and drag the bottom-right handle. The range to be filled is the current object, and you must pass a source range containing data as first argument.|
| **clear** |none/object|none|Clears the contents of the range cells.|
| **clearFilter** |Array/int|none|Clears the set filters for the given column(s). The indices is relative to the beginning of the range. (see **Example 4**)|
| **get_borderBottomColor** |none|string|Gets the color of the bottom border of the cells.|
| **set_borderBottomColor** |string|none|Sets the color of the bottom border of the cells. If the range includes more than a single cell, the setting is applied to all cells. The color may be set to any valid [CSS color](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value). (see **Example 5**)|
| **get_borderBottomSize** |none|int|Gets the size of the bottom border of the cells.|
| **set_borderBottomSize** |int|none|Sets the size of the bottom border of the cells. If the range includes more than a single cell, the setting is applied to all cells. The method accepts any valid [Length value](https://developer.mozilla.org/en-US/docs/Web/CSS/length). (see **Example 6**)|
| **get_borderLeftColor** |none|string|Gets the color of the left border of the cells.|
| **set_borderLeftColor** |string|none|Sets the color of the left border of the cells. If the range includes more than a single cell, the setting is applied to all cells. The color may be set to any valid [CSS color](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value).|
| **get_borderLeftSize** |none|int|Gets the size of the left border of the cells.|
| **set_borderLeftSize** |int|none|Sets the size of the left border of the cells. If the range includes more than a single cell, the setting is applied to all cells. The method accepts any valid [Length value](https://developer.mozilla.org/en-US/docs/Web/CSS/length).|
| **get_borderRightColor** |none|string|Gets the color of the right border of the cells.|
| **set_borderRightColor** |string|none|Sets the color of the right border of the cells. If the range includes more than a single cell, the setting is applied to all cells. The color may be set to any valid [CSS color](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value).|
| **get_borderRightSize** |none|int|Gets the size of the right border of the cells.|
| **set_borderRightSize** |int|none|Sets the size of the right border of the cells. If the range includes more than a single cell, the setting is applied to all cells. The method accepts any valid [Length value](https://developer.mozilla.org/en-US/docs/Web/CSS/length).|
| **get_borderTopColor** |none|string|Gets the color of the top border of the cells.|
| **set_borderTopColor** |string|none|Sets the color of the top border of the cells. If the range includes more than a single cell, the setting is applied to all cells. The color may be set to any valid [CSS color](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value).|
| **get_borderTopSize** |none|int|Gets the size of the top border of the cells.|
| **set_borderTopSize** |int|none|Sets the size of the top border of the cells. If the range includes more than a single cell, the setting is applied to all cells. The method accepts any valid [Length value](https://developer.mozilla.org/en-US/docs/Web/CSS/length).|
| **get_background** |none|string|Gets the background color of the cells in the range.|
| **set_background** |string|none|Sets the background color of the cells in the range. The background may be set to any valid [CSS color](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value). (see **Example 7**)|
| **get_bold** |none|bool|Gets the bold state of the cells in the range.|
| **set_bold** |bool|none|Sets the bold state of the cells in the range. (see **Example 8**)|
| **get_color** |none|string|Gets the current text color of the top-left cell of the range.|
| **set_color** |string|none|Sets the text color of the range. The color may be set to any valid [CSS color](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value).|
| **get_fontFamily** |none|string|Gets the font family of the top-left cell of the range.|
| **set_fontFamily** |string|none|Sets the font family of the cells in the range.|
| **get_fontSize** |none|int|Gets the font size of the top-left cell of the range.|
| **set_fontSize** |int|none|Sets the font size (in pixels) of the cells in the range.|
| **get_format** |none|string|Gets the format (string) of the top-left cell of the range|
| **set_format** |string|none|Sets the format of the cells in the range. (see **Example 9**)|
| **get_formula** |none|string|Gets the formula of the cells|
| **set_formula** |string|none|Sets the formula of the cells. The string that the method accepts may optionally start with =. (see **Example 10**)|
| **get_input** |none|string|Gets the value of the cells. If the Range includes more than one cell - returns the top-left cell input value of the range.|
| **set_input** |string|none|Sets the value of the cells. This is similar to value, but it parses the argument as if it was entered through the text box. Using the method you can set text, formula, number, boolean or Date. (see **Example 11**)|
| **get_italic** |none|bool|Gets the italic state of the cells in the range.|
| **set_italic** |bool|none|Sets the italic state of the cells in the range.|
| **get_selections** |none|array of objects|Gets the selections in the range. (see **Example 12**)|
| **get_textAlign** |none|string|Gets the text alignment of the cells in the range. Returns one of the following values: **left**, **center**, **right** and **justify**.|
| **set_textAlign** |string|none|Sets the text alignment of the cells in the range. Accepts one of the following values: **left**, **center**, **right** and **justify**.|
| **get_underline** |none|bool|Gets the underline state of the cells in the range.|
| **set_underline** |bool|none|Sets the underline state of the cells in the range.|
| **get_value** |none|string/int/Date|Gets the value of the cells.|
| **set_value** |string/int/Date|none|Sets the value of the cells.|
| **get_values** |none|array of arrays|Gets the values of the range cells.|
| **set_values** |array of arrays|none|Sets the values of the range cells. The argument should be an array of arrays which match the dimensions of the range. (see **Example 13**)|
| **get_validation** |none|object|Gets the current validation of the top-left cell of the range.|
| **set_validation** |object|none|Sets the validation of the cells. The object that is passed to the method may contain **type, comparerType, dataType, from, to, allowNulls, messageTemplate** and **titleTemplate** keys. (see **Example 14**)|
| **get_verticalAlign** |none|string|Gets current vertical text alignment of the top-left cell of the range. Returns one of the following values: **top**, **center** and **bottom**.|
| **set_verticalAlign** |string|none|Sets the vertical alignment of the cells in the range. Accepts one of the following values: **top**, **center** and **bottom**.|
| **get_wrap** |none|bool|Gets the wrap of the range cells.|
| **set_wrap** |bool|none|Sets the wrap of the range cells. (see **Example 15**)|



>caption Example 1: Demonstrates the usage of the set_enabled method
````JavaScript	
function enableDisableRange() {
    var spreadsheet = $find("<%= RadSpreadsheet1.ClientID %>");
    var activeSheet = spreadsheet.get_activeSheet();
    var range = activeSheet.get_range("A1:B3");
    if (range.get_enabled()) {
        range.set_enabled(false);
    }
    else {
        range.set_enabled(true);
    }
}
````

>caption Example 2: Demonstrates the usage of the set_filter method
````JavaScript	
function addFilter() {
    var spreadsheet = $find("<%= RadSpreadsheet1.ClientID %>");
    var activeSheet = spreadsheet.get_activeSheet();
    var range = activeSheet.get_range("A1:B3");
    var filter = new kendo.spreadsheet.DynamicFilter({ type: "today" });
    range.set_filter([{ column: 0, filter: filter }]);
}
````

>caption Example 3: Demonstrates the usage of the merge method
````JavaScript	
function mergeRange() {
    var spreadsheet = $find("<%= RadSpreadsheet1.ClientID %>");
    var activeSheet = spreadsheet.get_activeSheet();
    var range = activeSheet.get_range("A1:B3");
    range.merge();
}
````

>caption Example 4: Demonstrates the usage of the set_filter method
````JavaScript	
function addFilter() {
    var spreadsheet = $find("<%= RadSpreadsheet1.ClientID %>");
    var activeSheet = spreadsheet.get_activeSheet();
    var range = activeSheet.get_range("A1:B3");
    var filter = new kendo.spreadsheet.DynamicFilter({ type: "today" });
    range.set_filter([{ column: 0, filter: filter }]);
}
````

>caption Example 5: Demonstrates the usage of the set_borderBottomColor method
````JavaScript	
function colorRangeBottomBorder() {
    var spreadsheet = $find("<%= RadSpreadsheet1.ClientID %>");
    var activeSheet = spreadsheet.get_activeSheet();
    var range = activeSheet.get_range("A1:B3");
    range.set_borderBottomColor("#0000ff");
}
````

>caption Example 6: Demonstrates the usage of the set_borderBottomSize method
````JavaScript	
function setRangeBottomBorderSize() {
    var spreadsheet = $find("<%= RadSpreadsheet1.ClientID %>");
    var activeSheet = spreadsheet.get_activeSheet();
    var range = activeSheet.get_range("A1:B3");
    range.set_borderBottomSize(3);
}
````

>caption Example 7: Demonstrates the usage of the set_background method
````JavaScript	
function changeRangeBackground() {
    var spreadsheet = $find("<%= RadSpreadsheet1.ClientID %>");
    var activeSheet = spreadsheet.get_activeSheet();
    var range = activeSheet.get_range("A1:B3");
    range.set_background("#c0c0c0");
}
````

>caption Example 8: Demonstrates the usage of the set_bold method
````JavaScript	
function changeRangeFontWeight() {
    var spreadsheet = $find("<%= RadSpreadsheet1.ClientID %>");
    var activeSheet = spreadsheet.get_activeSheet();
    var range = activeSheet.get_range("A1:B3");
    range.set_bold(true);
}
````

>caption Example 9: Demonstrates the usage of the set_format method
````JavaScript	
function setRangeFormat() {
    var spreadsheet = $find("<%= RadSpreadsheet1.ClientID %>");
    var activeSheet = spreadsheet.get_activeSheet();
    var range = activeSheet.get_range("A1:B3");
    range.set_format("00.000");
}
````

>caption Example 10: Demonstrates the usage of the set_formula method
````JavaScript	
function setRangeFormula() {
    var spreadsheet = $find("<%= RadSpreadsheet1.ClientID %>");
    var activeSheet = spreadsheet.get_activeSheet();
	var rangeA1 = activeSheet.get_range("A1");
	rangeA1.set_input("100");
    var rangeA2 = activeSheet.get_range("A2");
    range2.set_formula("A1*2");
}
````

>caption Example 11: Demonstrates the usage of the set_input method
````JavaScript	
function setRangeInput() {
    var spreadsheet = $find("<%= RadSpreadsheet1.ClientID %>");
    var activeSheet = spreadsheet.get_activeSheet();
	var range = activeSheet.get_range("A1");
	range.set_input("100");
}
````

>caption Example 12: Demonstrates the usage of the get_selections method
````JavaScript	
function OnClientChange(sender, args) {
    var range = args.get_range();
    var selections = range.get_selections();

    var row = selections[0].bottomRightCell.row;
}
````

>caption Example 13: Demonstrates the usage of the set_values method
````JavaScript	
function setRangeValues() {
    var spreadsheet = $find("<%= RadSpreadsheet1.ClientID %>");
    var activeSheet = spreadsheet.get_activeSheet();
    var range = activeSheet.get_range("A1:B3");
    var newValues = [[1, 2], [12, 28], [33, 5]];
    range.set_values(newValues);
}
````

>caption Example 14: Demonstrates the usage of the set_validation method
````JavaScript	
function setRangeValidation() {
    var spreadsheet = $find("<%= RadSpreadsheet1.ClientID %>");
    var activeSheet = spreadsheet.get_activeSheet();
    var range = activeSheet.get_range("A1");
    range.set_value(4);
    var validation = {
        from: "1",
        to: "2",
        comparerType: "between",
        dataType: "number",
        messageTemplate: "Number should match the validation."
    };

    range.set_validation(validation);
}
````

>caption Example 15: Demonstrates the usage of the set_wrap method
````JavaScript	
function setRangeWrap() {
    var spreadsheet = $find("<%= RadSpreadsheet1.ClientID %>");
    var activeSheet = spreadsheet.get_activeSheet();
    var range = activeSheet.get_range("A1");
    range.set_wrap(true);
}
````

