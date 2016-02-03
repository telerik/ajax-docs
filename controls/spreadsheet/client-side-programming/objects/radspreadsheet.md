---
title: Spreadsheet Object
page_title: RadSpreadsheet Object | UI for ASP.NET AJAX Documentation
description: RadSpreadsheet Object
slug: spreadsheet/client-side-programming/objects/radspreadsheet
tags: spreadsheetobject
published: True
position: 0
---

# RadSpreadsheet Object
This article explains the methods of the **Radspreadsheet** client-side object. The **Radspreadsheet** client API allows a complete control over the client object, giving the developer the opportunity to implement a preferable behavior depending on the custom scenario.


>caption The following table lists the methods of the client-side **RadSpreadsheet** object:
 
| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| **save** |none|none|Saves the current data and layot of the Spreadsheet in the source Excel file.|
| **saveAsExcel** |none|none| Exports the current data and layot of the Spreadsheet into an Excel file and promps you to download it in your browser.|
| **get_activeSheet** |none|SpreadsheetSheet|Returns a reference to the active sheet.|

````JavaScript

function getActiveSheet() {
    var spreadsheet = $find("<%= RadSpreadsheet1.ClientID %>");
    var activeSheet = spreadsheet.get_activeSheet();
}

````

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| **get_sheets** |none|Array|Returns an array of sheets contained in the Spreadsheet.|
| **findSheetByName** |string|SpreadsheetSheet|Returns a reference to the sheet matching the specified name.|
| **findSheetByIndex** |int|SpreadsheetSheet|Returns a reference to the sheet by its index in the workbook.|

````JavaScript

function getSheetByName() {
    var spreadsheet = $find("<%= RadSpreadsheet1.ClientID %>");
	var sheet = spreadsheet.findSheetByName("Sheet1");    
}

function getSheetByIndex() {
    var spreadsheet = $find("<%= RadSpreadsheet1.ClientID %>");
    var sheet = spreadsheet.findSheetByIndex(0);
}

````

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| **insertSheet** |none|none|Inserts an empty sheet in the Spreadsheet after the last one in the workbook.|
| **removeSheet** |SpreadsheetSheet|none|Removes the specified sheet from the workbook.|
| **renameSheet** |SpreadsheetSheet, string|none|Renames the specified sheet with the specified text.|

````JavaScript

function spreadsheetRemoveSheet() {
    var spreadsheet = $find("<%= RadSpreadsheet1.ClientID %>");
    var sheet = spreadsheet.findSheetByIndex(1);
    spreadsheet.removeSheet(sheet);
}

function spreadsheetRenameSheet() {
    var spreadsheet = $find("<%= RadSpreadsheet1.ClientID %>");
    var sheet = spreadsheet.findSheetByIndex(1);
    spreadsheet.renameSheet(sheet, "MySheet");
}

````

