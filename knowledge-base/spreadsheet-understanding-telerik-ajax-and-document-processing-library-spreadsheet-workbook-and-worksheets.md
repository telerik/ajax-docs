---
title: Understanding Telerik AJAX and Document Processing Library Spreadsheet Workbook and Worksheets
description: Understanding Telerik AJAX and Document Processing Library Spreadsheet Workbook and Worksheets. Check it now!
type: how-to
page_title: Understanding Telerik AJAX and Document Processing Library Spreadsheet Workbook and Worksheets
slug: spreadsheet-understanding-telerik-ajax-and-document-processing-library-spreadsheet-workbook-and-worksheets
res_type: kb
---

## Differences

The assemblies from the Telerik UI for ASP.NET AJAX(later referred as **AJAX**) suite and Document Processing Library(later referred as **DPL**) both have Workbook and Worksheet classes which are different and with different capabilities.

- [AJAX Worksheet server-side API]({%slug spreadsheet/server-side-programming/overview%}#telerikwebspreadsheetworksheet-properties-and-methods);
- [AJAX Row server-side API]({%slug spreadsheet/server-side-programming/overview%}#telerikwebspreadsheetrow-properties-and-methods);
- [AJAX Cell server-side API]({%slug spreadsheet/server-side-programming/overview%}#telerikwebspreadsheetrow-properties-and-methods);
- [DPL Worksheet Documentation](https://docs.telerik.com/devtools/document-processing/libraries/radspreadprocessing/working-with-worksheets/what-is-worksheet);
- [DPL Cells Documentation](https://docs.telerik.com/devtools/document-processing/libraries/radspreadprocessing/working-with-cells/what-is-cell);
- [DPL Rows and Columns Documentation](https://docs.telerik.com/devtools/document-processing/libraries/radspreadprocessing/working-with-rows-and-columns/what-is-row-column);
- [DPL Workbook API](https://docs.telerik.com/devtools/document-processing/api/Telerik.Windows.Documents.Spreadsheet.Model.Workbook.html);
- [DPL Worksheet API](https://docs.telerik.com/devtools/document-processing/api/Telerik.Windows.Documents.Spreadsheet.Model.Worksheet.html);
- [DPL Sheet API](https://docs.telerik.com/devtools/document-processing/api/Telerik.Windows.Documents.Spreadsheet.Model.Sheet.html);
- [DPL Cells API](https://docs.telerik.com/devtools/document-processing/api/Telerik.Windows.Documents.Spreadsheet.Model.Cells.html);
- [DPL CellSelection API](https://docs.telerik.com/devtools/document-processing/api/Telerik.Windows.Documents.Spreadsheet.Model.CellSelection.html);


## Converting from One to Another

The Workbook and worksheets from the AJAX and DPL are not interchangeable. Nevertheless, the AJAX Workbook class has some methods that allow converting from one to another and vice-versa:

- An instance method .ToDocument() that all allows any AJAX Workbook instance to be converted to a DPL Workbook;
- A static method Workbook.FromDocument() that allows any DPL Workbook to be converted to an AJAX Workbook;

````C#
using System;
using System.Collections.Generic;
using DPL = Telerik.Windows.Documents.Spreadsheet.Model;
using AJAX = Telerik.Web.Spreadsheet;

// AJAX to Document Processing Library
AJAX.Workbook ajaxWorkbook = new AJAX.Workbook();
AJAX.Worksheet ajaxWorksheet = ajaxWorkbook.AddSheet();
 
AJAX.Row row = new AJAX.Row() { Index = 2, Cells = new List<AJAX.Cell> { } };
row.AddCell(new AJAX.Cell() { Index = 2, Value = "Test cell" });
ajaxWorksheet.AddRow(row);
 
DPL.Workbook dplWorkbook = ajaxWorkbook.ToDocument();
DPL.Sheet dplSheet = dplWorkbook.Sheets[0];
DPL.Worksheet dplWorksheet =  dplWorkbook.Worksheets[0];
 
// Document Processing Library to AJAX
AJAX.Workbook convertedAjaxWorkbook = AJAX.Workbook.FromDocument(dplWorkbook);
AJAX.Worksheet convertedAjaxWorksheet = convertedAjaxWorkbook.Sheets[0];

// value is "Test cell"
string value = convertedAjaxWorksheet
    .Rows.Find(r=> r.Index == 2)
    .Cells.Find(c=> c.Index == 2)
    .Value.ToString();
````
 