---
title: Programmatic Binding
page_title: Programmatic Binding | RadSpreadsheet for ASP.NET AJAX Documentation
description: Programmatic Binding
slug: spreadsheet/data-binding/programmatic-binding
tags: programmatic, binding
published: True
position: 1
---

# Programmatic Binding


**RadSpreadsheet** can be bound programmaticaly. This example shows binding to a **DataTable** object.

The declaration of the **RadSpreadsheet** object:

````ASP.NET
<telerik:RadSpreadsheet runat="server" ID="RadSpreadsheet1"></telerik:RadSpreadsheet>
````

In the **Page_Load** event handler, create and fill the **DataTable** object, use it to fill the created Worksheet with data and add the Worksheet to the **RadSpreadsheet**'s Sheets collection.


````C#
using System.Data;
using Telerik.Web.Spreadsheet;

protected void Page_Load(object sender, EventArgs e)
{
    DataTable data = GetData();
    var sheet1 = FillWorksheet(data);
    RadSpreadsheet1.Sheets.Add(sheet1);
}

public DataTable GetData()
{
    DataTable table = new DataTable();

    table.Columns.Add("Product", typeof(string));
    table.Columns.Add("Price", typeof(int));
    table.Columns.Add("Quantity", typeof(int));

    table.Rows.Add("Product1", 100, 2);
    table.Rows.Add("Product2", 150, 10);
    table.Rows.Add("Product3", 120, 5);
    table.Rows.Add("Product4", 300, 10);

    return table;
}	

private static Worksheet FillWorksheet(DataTable data)
{
    var workbook = new Workbook();
    var sheet = workbook.AddSheet();
    
    sheet.Columns = new List<Column>();
    
    var row = new Row() { Index = 0 };
    int columnIndex = 0;

    foreach (DataColumn dataColumn in data.Columns)
    {
        sheet.Columns.Add(new Column());

        string cellValue = dataColumn.ColumnName;

        var cell = new Cell() { Index = columnIndex++, Value = cellValue, Bold = true };

        row.AddCell(cell);
    }

    sheet.AddRow(row);

    int rowIndex = 1;
    foreach (DataRow dataRow in data.Rows)
    {
        row = new Row() { Index = rowIndex++ };

        columnIndex = 0;
        foreach (DataColumn dataColumn in data.Columns)
        {
            string cellValue = dataRow[dataColumn.ColumnName].ToString();

            var cell = new Cell() { Index = columnIndex++, Value = cellValue };

            row.AddCell(cell);
        }

        sheet.AddRow(row);
    }

    return sheet;
}
````
````VB
Imports System.Data
Imports Telerik.Web.Spreadsheet

Protected Sub Page_Load(sender As Object, e As EventArgs) Handles Me.Load
    Dim data As DataTable = GetData()
    Dim sheet1 = FillWorksheet(data)
    RadSpreadsheet1.Sheets.Add(sheet1)
End Sub

Public Function GetData() As DataTable
    Dim table As New DataTable()

    table.Columns.Add("Product", GetType(String))
    table.Columns.Add("Price", GetType(Integer))
    table.Columns.Add("Quantity", GetType(Integer))

    table.Rows.Add("Product1", 100, 2)
    table.Rows.Add("Product2", 150, 10)
    table.Rows.Add("Product3", 120, 5)
    table.Rows.Add("Product4", 300, 10)

    Return table
End Function

Private Shared Function FillWorksheet(data As DataTable) As Worksheet
    Dim workbook = New Workbook()
    Dim sheet = workbook.AddSheet()
    Dim row = New Row() With {.Index = 0}
    Dim columnIndex As Integer = 0

    For Each dataColumn As DataColumn In data.Columns
        Dim cellValue As String = dataColumn.ColumnName

        Dim cell = New Cell() With {
            .Index = System.Math.Max(System.Threading.Interlocked.Increment(columnIndex), columnIndex - 1),
            .Value = cellValue,
            .Bold = True
        }
        row.AddCell(cell)
    Next

    sheet.AddRow(row)

    Dim rowIndex As Integer = 1
    For Each dataRow As DataRow In data.Rows
        row = New Row() With {
            .Index = System.Math.Max(System.Threading.Interlocked.Increment(rowIndex), rowIndex - 1)
        }

        columnIndex = 0
        For Each dataColumn As DataColumn In data.Columns
            Dim cellValue As String = dataRow(dataColumn.ColumnName).ToString()

            Dim cell = New Cell() With {
                .Index = System.Math.Max(System.Threading.Interlocked.Increment(columnIndex), columnIndex - 1),
                .Value = cellValue
            }

            row.AddCell(cell)
        Next

        sheet.AddRow(row)
    Next

    Return sheet
End Function
````

# See Also

 * [Using a Data Provider]({%slug spreadsheet/data-binding/providers/using-a-data-provider%})
 * [Custom Custom Provider]({%slug spreadsheet/data-binding/providers/custom-database-provider%})
 
