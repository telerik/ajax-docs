---
title: How to iterate all cells and rows in Spreadsheet properly on the server-side
description: How to iterate all cells and rows in Spreadsheet properly on the server-side. Check it now!
type: how-to
page_title: How to iterate all cells and rows in Spreadsheet properly on the server-side
slug: spreadsheet-how-to-iterate-all-cells-and-rows-in-spreadsheet-properly
res_type: kb
---


### HOW TO
 Iterate cells of a Sheet properly in the code behind. 
 
### DESCRIPTION

For performance optimization, the cells and rows might not be the in the same order as they work in the displayed spreadsheet. Also, the empty cells are not included in the Cells and Rows collections of a sheet. With that said, the conventional iteration might not work properly.

### SOLUTION

The [Cell](https://docs.telerik.com/devtools/aspnet-ajax/controls/spreadsheet/server-side-programming/overview#telerikwebspreadsheetrow-properties-and-methods) and [Row](https://docs.telerik.com/devtools/aspnet-ajax/controls/spreadsheet/server-side-programming/overview#telerikwebspreadsheetcell-properties) have a `.Index` property that allows you to determine the real location in the Sheet. For convenience, we can use LINQ Methods to find the cell by index:


```C#
var sheet = workbook.Sheets[0];
var rowIndex = 3;
var row = sheet.Rows.FirstOrDefault(r => r.Index == rowIndex);

if (row != null)
{
    var cellIndex = 3;
    var cell = row.Cells.FirstOrDefault(c => c.Index == cellIndex);
    if (cell != null)
    {
        var value = cell.Value;
    }
}
```
```VB
Dim sheet = workbook.Sheets(0)
Dim rowIndex = 3
Dim row = sheet.Rows.FirstOrDefault(Function(r) r.Index = rowIndex)

If row IsNot Nothing Then
    Dim cellIndex = 3
    Dim cell = row.Cells.FirstOrDefault(Function(c) c.Index = cellIndex)

    If cell IsNot Nothing Then
        Dim value = cell.Value
    End If
End If
```




  


