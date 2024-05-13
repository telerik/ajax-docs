---
title: DataBase provider
description: How to create a DataBase provider for the RadSpreadSheet?
type: how-to
page_title: DataBase provider. | RadSpreadSheet
slug: spreadsheet-database-provider
res_type: kb
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>Telerik WebForms SpreadSheet for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>

## Description

Тhe article aims to demonstrate how a custom DataBase Provider can be used to connect the Spreadsheet to SqlDataSource.
The example is build to use Northwind database.

## Solution

Spreadsheet setup

````ASP.NET
<telerik:RadSpreadsheet runat="server" ID="RadSpreadsheet1" />
````

````C#
protected void Page_Load(object sender, EventArgs e)
{
	if (!IsPostBack)
	{
        SpreadsheetDataBaseProvider provider = new SpreadsheetDataBaseProvider();
        RadSpreadsheet1.Provider = provider;
	}
}
````

Custom provider

````C#
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using Telerik.Web.Spreadsheet;
using Telerik.Web.UI;

public class SpreadsheetDataBaseProvider : SpreadsheetProviderBase
{
    public SpreadsheetDataBaseProvider()
        : base()
    {
    }

    public override void SaveWorkbook(Workbook workbook)
    {
        using (SqlConnection conn = new SqlConnection(System.Configuration.ConfigurationManager.ConnectionStrings["NorthwindConnectionString"].ConnectionString))
        {
            conn.Open();
            string query = "DELETE FROM [Products]";
            SqlCommand clearCmd = new SqlCommand(query, conn);
            clearCmd.ExecuteNonQuery();

            string insertQuery = "INSERT INTO Products(ProductName,Description) VALUES(@param1,@param2)";
            foreach (var row in workbook.Sheets[0].Rows)
            {
                SqlCommand insertCmd = new SqlCommand(insertQuery, conn);

                insertCmd.Parameters.Add("@param1", SqlDbType.NVarChar, 50).Value = row.Cells[0].Value;
                insertCmd.Parameters.Add("@param2", SqlDbType.NVarChar, 50).Value = row.Cells[1].Value;

                insertCmd.CommandType = CommandType.Text;
                insertCmd.ExecuteNonQuery();
            }
        }
    }

    public override List<Worksheet> GetSheets()
    {
        var result = new List<Worksheet>();

        DataTable data = GetData();

        var sheet = new Worksheet();

        int rowIndex = 0;
        foreach (DataRow dataRow in data.Rows)
        {
            var row = new Row() { Index = rowIndex++ };

            int columnIndex = 0;
            foreach (DataColumn dataColumn in data.Columns)
            {
                if (dataColumn.ColumnName == "ID") continue; // Skip the ID column

                var cellValue = dataRow[dataColumn.ColumnName];

                var cell = new Cell() { Index = columnIndex++, Value = cellValue };

                row.AddCell(cell);
            }

            sheet.AddRow(row);
        }

        result.Add(sheet);

        return result;
    }

    public DataTable GetData()
    {
        using (SqlConnection conn = new SqlConnection(System.Configuration.ConfigurationManager.ConnectionStrings["NorthwindConnectionString"].ConnectionString))
        {
            conn.Open();
            string query = "SELECT * FROM [Products]";
            SqlCommand cmd = new SqlCommand(query, conn);

            DataTable dt = new DataTable();
            dt.Load(cmd.ExecuteReader());
            return dt;
        }
    }
}
````
````VB

Imports System.Data
Imports Telerik.Web.UI
Imports Telerik.Windows.Documents.Flow.FormatProviders.Docx
Imports Telerik.Windows.Documents.Flow.FormatProviders.Html
Imports Telerik.Windows.Documents.Flow.Model
Imports System.IO
Imports Telerik.Windows.Documents.Common.FormatProviders
Imports Telerik.Windows.Documents.Primitives
Imports Telerik.Windows.Documents.Model

Partial Class Cases_Grid_Exporting_1145130_Formatting_Word_Docx
    Inherits System.Web.UI.Page

    Protected Sub RadGrid1_NeedDataSource(sender As Object, e As GridNeedDataSourceEventArgs)
        RadGrid1.DataSource = GetGridSource()
    End Sub
    Private Function GetGridSource() As DataTable
        Dim dataTable As New DataTable()

        Dim column As New DataColumn()
        column.DataType = Type.[GetType]("System.Int32")
        column.ColumnName = "OrderID"
        dataTable.Columns.Add(column)

        column = New DataColumn()
        column.DataType = Type.[GetType]("System.DateTime")
        column.ColumnName = "OrderDate"
        dataTable.Columns.Add(column)

        column = New DataColumn()
        column.DataType = Type.[GetType]("System.Decimal")
        column.ColumnName = "Freight"
        dataTable.Columns.Add(column)

        column = New DataColumn()
        column.DataType = Type.[GetType]("System.String")
        column.ColumnName = "ShipName"
        dataTable.Columns.Add(column)

        column = New DataColumn()
        column.DataType = Type.[GetType]("System.String")
        column.ColumnName = "ShipCountry"
        dataTable.Columns.Add(column)

        Dim PrimaryKeyColumns As DataColumn() = New DataColumn(0) {}
        PrimaryKeyColumns(0) = dataTable.Columns("OrderID")
        dataTable.PrimaryKey = PrimaryKeyColumns

        For i As Integer = 0 To 4
            Dim row As DataRow = dataTable.NewRow()
            row("OrderID") = i + 1
            row("OrderDate") = DateTime.Now
            row("Freight") = (i + 1) + (i + 1) * 0.1 + (i + 1) * 0.01
            row("ShipName") = "<i>ShipName</i>"
            row("ShipCountry") = "<a href=""javascript:void(0)"">ShipCountry</a>"

            dataTable.Rows.Add(row)
        Next

        Return dataTable
    End Function

    Protected Sub RadGrid1_GridExporting(sender As Object, e As GridExportingArgs)
        If (e.ExportType = ExportType.Word) Then
            '' Create a RadFlowDocument object
            Dim document As RadFlowDocument = New RadFlowDocument()

            '' Importing the HTML output from the grid into the htmlProvider
            Dim htmlProvider As HtmlFormatProvider = New HtmlFormatProvider()
            document = htmlProvider.Import(e.ExportOutput)

            Dim data As Byte() = Nothing

            '' Changing the page orientation of all sections in a document
            For Each section As Section In document.EnumerateChildrenOfType(Of Section)()
                section.Rotate(PageOrientation.Landscape)
            Next

            'Dim iProvider As IFormatProvider(Of RadFlowDocument) = docxProvider

            '' export the final document (docx) into the MemoryStream
            Using ms As New MemoryStream()
                Dim docxProvider As DocxFormatProvider = New DocxFormatProvider()
                docxProvider.Export(document, ms)
                data = ms.ToArray() '' get the byte data of the document
            End Using

            '' send the data in the response for download
            Response.ContentType = "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            Response.Headers.Remove("Content-Disposition")
            Response.AppendHeader("Content-Disposition", "attachment; filename=" & RadGrid1.ExportSettings.FileName & ".docx")
            Response.BinaryWrite(data)
            Response.End()
        End If
    End Sub
    Protected Sub rbExportClearanceRptAsPDF_Click(sender As Object, e As EventArgs)
        RadGrid1.ExportToPdf()
    End Sub

    Protected Sub rbExportClearanceRptAsWord_Click(sender As Object, e As EventArgs)
        RadGrid1.ExportToWord()
    End Sub

    Protected Sub RadGrid1_PreRender(sender As Object, e As EventArgs)
        If RadGrid1.IsExporting Then
            '' Setting borders for the Header Cells
            For Each headerCell As TableHeaderCell In RadGrid1.MasterTableView.GetItems(GridItemType.Header)(0).Cells
                headerCell.Style("border") = "1px solid"
            Next
            '' Setting borders for the data cells
            For Each dataItem As GridDataItem In RadGrid1.Items
                For Each cell As GridTableCell In dataItem.Cells
                    cell.Style("border") = "1px solid"
                Next
            Next
        End If
    End Sub
End Class
````
  
   
   