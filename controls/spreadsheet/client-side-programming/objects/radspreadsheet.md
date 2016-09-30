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
| **get_activeSheet** |none|SpreadsheetSheet|Returns a reference to the active sheet. (see **Example 1**)|
| **get_sheets** |none|Array|Returns an array of sheets contained in the Spreadsheet.|
| **findSheetByName** |string|SpreadsheetSheet|Returns a reference to the sheet matching the specified name.(see **Example 2**)|
| **findSheetByIndex** |int|SpreadsheetSheet|Returns a reference to the sheet by its index in the workbook. (see **Example 3**)|
| **insertSheet** |none|none|Inserts an empty sheet in the Spreadsheet after the last one in the workbook.|
| **removeSheet** |SpreadsheetSheet|none|Removes the specified sheet from the workbook. (see **Example 4**)|
| **renameSheet** |SpreadsheetSheet, string|none|Renames the specified sheet with the specified text. (see **Example 5**)|


>caption Example 1: Demonstrates the usage of the get_activeSheet method
````JavaScript

function getActiveSheet() {
    var spreadsheet = $find("<%= RadSpreadsheet1.ClientID %>");
    var activeSheet = spreadsheet.get_activeSheet();
}

````

>caption Example 2: Demonstrates the usage of the findSheetByName method
````JavaScript
function getSheetByName() {

    var spreadsheet = $find("<%= RadSpreadsheet1.ClientID %>");
	var sheet = spreadsheet.findSheetByName("Sheet1");    
}

````

>caption Example 3: Demonstrates the usage of the findSheetByIndex method
````JavaScript
function getSheetByIndex() {
    var spreadsheet = $find("<%= RadSpreadsheet1.ClientID %>");
    var sheet = spreadsheet.findSheetByIndex(0);
}

````

>caption Example 4: Demonstrates the usage of the removeSheet method
````JavaScript

function spreadsheetRemoveSheet() {
    var spreadsheet = $find("<%= RadSpreadsheet1.ClientID %>");
    var sheet = spreadsheet.findSheetByIndex(1);
    spreadsheet.removeSheet(sheet);
}
````

>caption Example 5: Demonstrates the usage of the renameSheet method
````JavaScript
function spreadsheetRenameSheet() {
    var spreadsheet = $find("<%= RadSpreadsheet1.ClientID %>");
    var sheet = spreadsheet.findSheetByIndex(1);
    spreadsheet.renameSheet(sheet, "MySheet");
}
````


