---
title: Server-side export to Excel from RadSpreadsheet
description: Server-side export to Excel from RadSpreadsheet. Check it now!
type: how-to
page_title: Server-side export to Excel from RadSpreadsheet
slug: spreadsheet-server-side-export-to-excel-from-radspreadsheet
res_type: kb
---

## How to 

Server-side export Spreadsheet to Excel using Document Processing.

## Solution

In order to use the exporting capabilities of the DocumentProcessing library, we need to create a Telerik Ajax Workbook, populate it with the Telerik Ajax sheets and then convert the Telerik Workbook to DocumentProcessingLibrary workbook by using the .ToDocument() method of the Telerik Ajax Workbook.

````ASPX
<telerik:RadButton runat="server" ID="RadButton1" Text="Save Excel server-side" OnClick="RadButton1_Click" AutoPostBack="true" />
<telerik:RadSpreadsheet ID="RadSpreadsheet1" runat="server"></telerik:RadSpreadsheet>
````

Using statements:

````C#
using System;
using System.Data;
using System.Collections.Generic;
using System.IO;
 
// using alias directive https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/using-directive
using Ajax = Telerik.Web.Spreadsheet;
using DplSpreadsheet = Telerik.Windows.Documents.Spreadsheet;
````

Exporting logic:

````C#
protected void RadButton1_Click(object sender, EventArgs e)
{
    Ajax.Workbook ajaxWorkbook = new Ajax.Workbook();
 
    // populate the ajax workbook with dummy data
    ajaxWorkbook.Sheets = GetSheets();
 
    // alternatively, the ajax workbook sheets can be populated from the Sheets of the Spreadsheet
    #region Populate sheets from RadSpreadsheet
    // if the Spreadsheet is using a provider, you can call the .DataBind method before accessing the Spreadsheet sheets
    // RadSpreadsheet1.DataBind();
    // ajaxWorkbook.Sheets = RadSpreadsheet1.Sheets;
 
    // Also, you can just call the GetSheets() method of the Spreadsheet provider directly
    // ajaxWorkbook.Sheets = RadSpreadsheet1.Provider.GetSheets();
    #endregion
 
    // convert ajax workbook to DPL workbook
    DplSpreadsheet.Model.Workbook dplWorkbook = ajaxWorkbook.ToDocument();
 
    DplSpreadsheet.FormatProviders.IWorkbookFormatProvider formatProvider = new DplSpreadsheet.FormatProviders.OpenXml.Xlsx.XlsxFormatProvider();
    using (MemoryStream output = new MemoryStream())
    {
        // export DPL workbook to MemoryStream
        formatProvider.Export(dplWorkbook, output);
 
        #region Send a file to the client
        Response.Clear();
        // Add a MemoryStream to the Response
        // https://stackoverflow.com/questions/13779139/writing-memorystream-to-response-object
        Response.BinaryWrite(output.ToArray());
 
        // Set correct Content type for Excel files
        // https://www.codeproject.com/Questions/481262/contentplustypeplusforplusxlsxplusfile
        Response.ContentType = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
 
        Response.AppendHeader("content-disposition", "attachment; filename=myfile.xlsx");
        Response.End();
        #endregion
    }
}
````

Creating a Telerik Ajax Workbook with Telerik Ajax sheets:

````C#
public List<Ajax.Worksheet> GetSheets()
{
    var result = new List<Ajax.Worksheet>();
 
    // populate a DataTable with dummy data instead of from DataSource
    DataTable data = GetDataSource();
 
    var sheet = new Ajax.Worksheet();
    sheet.ShowGridLines = true;
 
    int rowIndex = 0;
    foreach (DataRow dataRow in data.Rows)
    {
        var row = new Ajax.Row() { Index = rowIndex++ };
 
        int columnIndex = 0;
        foreach (DataColumn dataColumn in data.Columns)
        {
            if (dataColumn.ColumnName == "ID") continue; // Skip the ID column
            var cellValue = dataRow[dataColumn.ColumnName];
            var cell = new Ajax.Cell() { Index = columnIndex++, Value = cellValue };
            row.AddCell(cell);
        }
 
        sheet.AddRow(row);
    }
 
    result.Add(sheet);
 
    return result;
}
````

Generating dummy data:

````C#
private DataTable GetDataSource()
{
    DataTable dataTable = new DataTable();
 
    dataTable.Columns.Add(new DataColumn("OrderID", typeof(int)));
    dataTable.Columns.Add(new DataColumn("Freight", typeof(decimal)));
    dataTable.Columns.Add(new DataColumn("ShipName", typeof(string)));
    dataTable.Columns.Add(new DataColumn("ShipCountry", typeof(string)));
 
    dataTable.PrimaryKey = new DataColumn[] { dataTable.Columns["OrderID"] };
 
    for (int i = 0; i < 10; i++)
    {
        DataRow row = dataTable.NewRow();
        row["OrderID"] = i + 1;
        row["Freight"] = (i + 1) + (i + 1) * 0.1 + (i + 1) * 0.01;
        row["ShipName"] = "Name " + (i + 1);
        row["ShipCountry"] = "Country " + (i + 1);
 
        dataTable.Rows.Add(row);
    }
 
    return dataTable;
}
````

 