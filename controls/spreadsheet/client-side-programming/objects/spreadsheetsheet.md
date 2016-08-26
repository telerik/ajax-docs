---
title: SpreadsheetSheet Object
page_title: SpreadsheetSheet Object| UI for ASP.NET AJAX Documentation
description: SpreadsheetSheet Object
slug: spreadsheet/client-side-programming/objects/spreadsheetsheet
tags: spreadsheetsheet
published: True
position: 0
---

# SpreadsheetSheet Object

This article explains the methods of the **SpreadsheetSheet** client-side object and provides examples on its usage.


>caption The following example demonstrates how to get a reference to the active Sheet.
````JavaScript	

function getActiveSheet() {
	var spreadsheet = $find("<%= RadSpreadSheet1.ClientID %>");
	var activeSheet = spreadsheet.get_activeSheet();
}

````

more methods demonstrating how to acquire a reference to the SpreadsheetSheet, could be observed in the [RadSpreadsheet Object article]({%slug spreadsheet/client-side-programming/objects/radspreadsheet%})


>caption The following table lists the methods of the client-side **Spreadsheetsheet** object:
 
| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| **get_range** |string|SpreadsheetRange|Returns a reference to a SpreadsheetRange for the given range specification. **Note:** accepts A1 or [RC notation](http://excelribbon.tips.net/T008803_Understanding_R1C1_References.html) reference of the SpreadsheetRange object.|

````JavaScript	

function getSheetRange() {
	var spreadsheet = $find("<%= RadSpreadsheet1.ClientID %>");
    var activeSheet = spreadsheet.get_activeSheet();
    var range = activeSheet.get_range("A1:B3");
}

````

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| **get_selection** |none|SpreadsheetRange|Returns a reference to a SpreadsheetRange representing the current active selection.|

````JavaScript	

function getSelectedRangeValue() {
    var spreadsheet = $find("<%= RadSpreadsheet1.ClientID %>");
    var activeSheet = spreadsheet.get_activeSheet();
    var selection = activeSheet.get_selection();
    alert(selection.get_value());
}

````

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| **get_columnWidth** |int, int|int|Returns the width of the column at the given index.|
| **set_columnWidth** |int|none|Sets the width of the column at the given index.|
| **get_rowHeight** |int|int|Returns the height of the row at the given index.|
| **set_rowHeight** |int, int|int|Sets the height of the row at the given index.|

````JavaScript	

function setSheetRowHeight() {
    var spreadsheet = $find("<%= RadSpreadsheet1.ClientID %>");
    var activeSheet = spreadsheet.get_activeSheet();
    activeSheet.set_rowHeight(0, 30);
}

````

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| **clearFilter** |int/Array|none|Clears the filters for the passed column index. If an array is passed, clearFilter will clear the filter for each column index from the array.|
| **deleteColumn** |int|none|Deletes the contents of the column at the provided index and shifts the remaining contents of the sheet to the left.|
| **deleteRow** |int|none|Deletes the contents of the row at the provided index and shifts the remaining contents of the sheet up.|
| **hideColumn** |int|none|Hides the column at the specified index.|
| **hideRow** |int|none|Hides the row at the specified index.|
| **unhideColumn** |int|none|Shows the hidden column at the specified index. Does not have any effect if the column is already visible.|
| **unhideRow** |int|none|Shows the hidden row at the specified index. Does not have any effect if the row is already visible.|
| **insertColumn** |int|none|Inserts a new, empty column at the specified index. The contents of the spreadsheet (including the ones in the current column index) are shifted to the right.|
| **insertRow** |int|none|Inserts a new, empty row at the specified index. The contents of the spreadsheet (including the ones in the current row index) are shifted down.|

````JavaScript	

function insertSheetRow() {
    var spreadsheet = $find("<%= RadSpreadsheet1.ClientID %>");
    var activeSheet = spreadsheet.get_activeSheet();
    activeSheet.insertRow(1);
}

````

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| **get_frozenColumns** |none|int|Gets the amount of frozen columns displayed by the sheet.|
| **set_frozenColumns** |int|none|Sets the amount of frozen columns displayed by the sheet.|
| **get_frozenRows** |none|int|Gets the amount of frozen rows displayed by the sheet.|
| **set_frozenRows** |int|none|Set the amount of frozen rows displayed by the sheet.|
| **set_showGridLines** |bool|none|Togles the visibility state of the GrigLines in the sheet.|

````JavaScript	

function insertSheetRow() {
    var spreadsheet = $find("<%= RadSpreadsheet1.ClientID %>");
    var activeSheet = spreadsheet.get_activeSheet();
    activeSheet.set_showGridLines(false); //hides the grid lines in the active sheet
}

````

