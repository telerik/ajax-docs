---
title: Improve performance of slowly loading Spreadsheet
description: Improve performance of slowly loading Spreadsheet. Check it now!
type: how-to
page_title: Improve performance of slowly loading Spreadsheet
slug: improve-performance-of-slowly-loading-spreadsheet
res_type: kb
---


## PROBLEM

Loading a large amount of data in the Spreadsheet might result in a slow page loading.

## DESCRIPTION

The issue is caused by the rendering of the control itself and not the data. This can be confirmed by adding a breakpoint in the `PageInit`, `PagePreRenderComplete` and `PageUnload` events and the most of the processing time would be between `PagePreRenderComplete` and `PageUnload`.

## SOLUTION

The solution is to save the data in JSON, pass it to the client and use the [fromJSON()](https://docs.telerik.com/kendo-ui/api/javascript/ui/spreadsheet/methods/fromjson) method of the underlying Kendo UI Spreadsheet. The following example with around 800,000 cells would be loaded for a few seconds while if the same amount of cells were loaded via a Provider or added directly to the Spreadsheet, the time would be a few minutes.

````ASP.NET
<asp:HiddenField runat="server" ID="HiddenField1" />
<telerik:RadSpreadsheet runat="server" ID="RadSpreadsheet1"></telerik:RadSpreadsheet>
<script>
    function pageLoadHandler() {
        var spreadsheet = $find("<%= RadSpreadsheet1.ClientID %>");
        var value = $get("<%= HiddenField1.ClientID %>").value;
        var valueAsJSON = JSON.parse(value);
 
        spreadsheet.get_kendoWidget().fromJSON(valueAsJSON);
    }
 
    Sys.Application.add_load(pageLoadHandler);
</script>
````

````C#
protected void Page_Init(object sender, EventArgs e)
{
    var workbook = new Telerik.Web.Spreadsheet.Workbook();
 
    PopulateSheet(workbook.AddSheet(), "Workbook 1", 1598, 94);
    PopulateSheet(workbook.AddSheet(), "Workbook 2", 19627, 28);
    PopulateSheet(workbook.AddSheet(), "Workbook 3", 13325, 10);
    PopulateSheet(workbook.AddSheet(), "Workbook 4", 170, 26);
    PopulateSheet(workbook.AddSheet(), "Workbook 5", 44, 40);
    PopulateSheet(workbook.AddSheet(), "Workbook 6", 312, 23);
    PopulateSheet(workbook.AddSheet(), "Workbook 7", 297, 9);
 
    var json = workbook.ToJson();
    HiddenField1.Value = json;
}
 
private static void PopulateSheet(Worksheet sheet, string sheetName, int rowsCount, int columnsCount)
{
    sheet.Name = sheetName;
    sheet.Columns = new List<Column>();
 
    var row = new Row() { Index = 0 };
 
    // columns
    int columnIndex = 0;
    for (int i = 0; i < columnsCount; i++)
    {
        sheet.Columns.Add(new Column());
        string cellValue = "header" + i;
        var cell = new Cell() { Index = columnIndex++, Value = cellValue, Background = "#bfbfbf", Bold = true };
        row.AddCell(cell);
    }
    sheet.AddRow(row);
 
    // rows
    int rowIndex = 1;
    for (int r = 0; r < rowsCount; r++)
    {
        row = new Row() { Index = rowIndex++ };
        columnIndex = 0;
        for (int c = 0; c < columnsCount; c++)
        {
            string cellValue = "Row" + r + "; Col:" + c;
            var cell = new Cell() { Index = columnIndex++, Value = cellValue };
 
            row.AddCell(cell);
        }
 
        sheet.AddRow(row);
    }
}
````
````VB
Protected Sub Page_Init(ByVal sender As Object, ByVal e As EventArgs)
    Dim workbook = New Telerik.Web.Spreadsheet.Workbook()
    PopulateSheet(workbook.AddSheet(), "Workbook 1", 1598, 94)
    PopulateSheet(workbook.AddSheet(), "Workbook 2", 19627, 28)
    PopulateSheet(workbook.AddSheet(), "Workbook 3", 13325, 10)
    PopulateSheet(workbook.AddSheet(), "Workbook 4", 170, 26)
    PopulateSheet(workbook.AddSheet(), "Workbook 5", 44, 40)
    PopulateSheet(workbook.AddSheet(), "Workbook 6", 312, 23)
    PopulateSheet(workbook.AddSheet(), "Workbook 7", 297, 9)
    Dim json = workbook.ToJson()
    HiddenField1.Value = json
End Sub

Private Shared Sub PopulateSheet(ByVal sheet As Worksheet, ByVal sheetName As String, ByVal rowsCount As Integer, ByVal columnsCount As Integer)
    sheet.Name = sheetName
    sheet.Columns = New List(Of Column)()
    Dim row = New Row() With {
        .Index = 0
    }
    Dim columnIndex As Integer = 0

    For i As Integer = 0 To columnsCount - 1
        sheet.Columns.Add(New Column())
        Dim cellValue As String = "header" & i
        Dim cell = New Cell() With {
            .Index = Math.Min(System.Threading.Interlocked.Increment(columnIndex), columnIndex - 1),
            .Value = cellValue,
            .Background = "#bfbfbf",
            .Bold = True
        }
        row.AddCell(cell)
    Next

    sheet.AddRow(row)
    Dim rowIndex As Integer = 1

    For r As Integer = 0 To rowsCount - 1
        row = New Row() With {
            .Index = Math.Min(System.Threading.Interlocked.Increment(rowIndex), rowIndex - 1)
        }
        columnIndex = 0

        For c As Integer = 0 To columnsCount - 1
            Dim cellValue As String = "Row" & r & "; Col:" & c
            Dim cell = New Cell() With {
                .Index = Math.Min(System.Threading.Interlocked.Increment(columnIndex), columnIndex - 1),
                .Value = cellValue
            }
            row.AddCell(cell)
        Next

        sheet.AddRow(row)
    Next
End Sub
````




