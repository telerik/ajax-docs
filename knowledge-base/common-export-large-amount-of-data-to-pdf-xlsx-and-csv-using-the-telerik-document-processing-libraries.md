---
title: Export large amount of data to PDF, XLSX and CSV using the Telerik Document Processing libraries
description: Export large amount of data to PDF, XLSX and CSV using the Telerik Document Processing libraries. Check it now!
type: how-to
page_title: Export large amount of data to PDF, XLSX and CSV using the Telerik Document Processing libraries
slug: common-export-large-amount-of-data-to-pdf-xlsx-and-csv-using-the-telerik-document-processing-libraries
res_type: kb
---

## Problem

How To Export large amount of data to PDF, XLSX and CSV using the [Telerik Document Processing](https://docs.telerik.com/devtools/document-processing/introduction "Telerik Document Processing") libraries

## Description

It is a resource dependent and sensitive topic to export large amount of data, even decent computers with enough resource would struggle or applications themselves are failing. Most common problem everyone is running into, is the Out of Memory Exception.

How to export that amount of data then? The answer is, by using the [Telerik Document Processing](https://docs.telerik.com/devtools/document-processing/introduction "Telerik Document Processing") libraries.

## Solution

Two of the Libraries will be used to export data, one of which is the [RadSpreadProcessing](https://docs.telerik.com/devtools/document-processing/libraries/radspreadprocessing/overview) for generating PDF, while the other is [RadSpreadStreamProcessing](https://docs.telerik.com/devtools/document-processing/libraries/radspreadstreamprocessing/overview) to generate XLSX and CSV documents.

Requirements:

 - [Assembly Reference - RadSpreadProcessing](http://https://docs.telerik.com/devtools/document-processing/libraries/radspreadprocessing/getting-started#assembly-references) used for generating PDF files

 - [Assembly Reference - RadSpreadStreamProcessing](https://docs.telerik.com/devtools/document-processing/libraries/radspreadstreamprocessing/getting-started#assembly-references) used for generating XLSX and CSV


Please note, in this example, RadGrid is only used to visualize the Data that will be exported into a document, the export methods are actually looping through the DataSource and building the output accordingly.

````ASPX
<telerik:RadButton ID="btnXLSX" runat="server" Text="XLSX" OnClick="btnXLSX_Click"></telerik:RadButton>
<telerik:RadButton ID="btnCSV" runat="server" Text="CSV" OnClick="btnCSV_Click"></telerik:RadButton>
<telerik:RadButton ID="btnPDF" runat="server" Text="PDF" OnClick="btnPDF_Click"></telerik:RadButton>
<br />
<br />
<telerik:RadGrid ID="RadGrid1" runat="server" AllowPaging="True" Width="800px" OnNeedDataSource="RadGrid1_NeedDataSource">
    <MasterTableView AutoGenerateColumns="true">
    </MasterTableView>
</telerik:RadGrid>
````


````C#
using System;
using System.Data;
using System.IO;
using Telerik.Web.UI;
using Telerik.Documents.SpreadsheetStreaming;
using Telerik.Windows.Documents.Spreadsheet.FormatProviders.Pdf;
using Telerik.Windows.Documents.Spreadsheet.Model;
 
public partial class DefaultCS : System.Web.UI.Page
{
    #region Private Properties
    private string SessionKey { get; set; }
    private int colNum { get; set; }
    private int rowNum { get; set; }
    private string FileExtension { get; set; }
    private string FileName { get; set; }
    private string ContentType { get; set; }
    private DataTable SessionDataSource
    {
        get
        {
            if (!IsPostBack || Session[SessionKey] == null)
            {
                Session[SessionKey] = OrdersTable();
            }
            return (DataTable)Session[SessionKey];
 
        }
        set { Session[SessionKey] = value; }
    }
    #endregion
 
    #region Events
    protected void Page_Load(object sender, EventArgs e)
    {
        SessionKey = "MySessionkey";
        colNum = 10;
        rowNum = 100000;
    }
 
    protected void RadGrid1_NeedDataSource(object sender, GridNeedDataSourceEventArgs e)
    {
        RadGrid1.DataSource = SessionDataSource;
    }
 
    protected void btnXLSX_Click(object sender, EventArgs e)
    {
        SpreadStreamProcessingForXLSXAndCSV(SessionDataSource);
    }
 
    protected void btnCSV_Click(object sender, EventArgs e)
    {
        SpreadStreamProcessingForXLSXAndCSV(SessionDataSource, SpreadDocumentFormat.Csv);
    }
 
    protected void btnPDF_Click(object sender, EventArgs e)
    {
        SpreadProcessingForPDF(SessionDataSource); // 1 minute 14 seconds to build PDF of 100K rows and 10 columns
    }
    #endregion
 
    #region Private Methods
 
    #region Dummy datasource (DataTable)
    private DataTable OrdersTable()
    {
        DataTable dt = new DataTable();
 
        for (int i = 0; i < colNum; i++)
        {
            dt.Columns.Add(new DataColumn("Col " + (i + 1), typeof(string)));
        }
 
        for (int rowIndex = 0; rowIndex < rowNum; rowIndex++)
        {
            DataRow row = dt.NewRow();
 
            for (int colIndex = 0; colIndex < dt.Columns.Count; colIndex++)
            {
                row[colIndex] = string.Format("C{0}R{1}", colIndex + 1, rowIndex + 1);
            }
 
            dt.Rows.Add(row);
        }
 
        return dt;
    }
    #endregion
 
    #region Export Methods using Telerik Document Processing Libraries
    private void SpreadProcessingForPDF(DataTable dt)
    {
        int colCount = dt.Columns.Count;
        int rowCount = dt.Rows.Count;
 
        Workbook spWorkbook = new Workbook(); // create workbook
        spWorkbook.History.IsEnabled = false; // disable history to improve performance
        Worksheet spWorksheet = spWorkbook.Worksheets.Add(); // create a new worksheet
 
        // Generate document by looping through the DataTable cells
 
        for (int rowIndex = 0; rowIndex < rowCount; rowIndex++)
        {
            DataRow dr = dt.Rows[rowIndex];
            for (int colIndex = 0; colIndex < colCount; colIndex++)
            {
                if (rowIndex == 0) // Use the first row for header
                {
                    string colName = dt.Columns[colIndex].ColumnName;
                    spWorksheet.Cells[rowIndex, colIndex].SetValue(colName);
                }
                else
                {
                    var dbValue = dr[colIndex].ToString();
                    spWorksheet.Cells[rowIndex, colIndex].SetValue(dbValue);
                    string cellValue = spWorksheet.Cells[1, 1].GetValue().Value.RawValue;
                }
            }
        }
 
        // Create a pdf provider to convert a Workbook to PDF format
        PdfFormatProvider pdfProvider = new PdfFormatProvider();
 
        // Convert workbookt to PDF format and return byte[] array
        byte[] output = pdfProvider.Export(spWorkbook);
 
        // Some settings for the Response
        FileExtension = "pdf";
        FileName = RadGrid1.ExportSettings.FileName;
        ContentType = "application/pdf";
 
        // pass the PDF output to be returned as a Response (offer PDF for downloading)
        WriteFileToResponse(output);
    }
    private void SpreadStreamProcessingForXLSXAndCSV(DataTable dt, SpreadDocumentFormat docFormat = SpreadDocumentFormat.Xlsx, string sheetName = "Sheet1")
    {
        using (MemoryStream stream = new MemoryStream())
        {
            using (IWorkbookExporter workbook = SpreadExporter.CreateWorkbookExporter(docFormat, stream))
            {
                using (IWorksheetExporter worksheetExporter = workbook.CreateWorksheetExporter(sheetName))
                {
                    for (int i = 0; i < dt.Columns.Count; i++)
                    {
                        using (IColumnExporter columnExporter = worksheetExporter.CreateColumnExporter())
                        {
                            //make sure the width of the columns is not excessively large
                            //I reduced it to 100 in this iteration
                            columnExporter.SetWidthInPixels(100);
                        }
                    }
 
                    ExportHeaderRows(worksheetExporter, dt);
 
                    foreach (DataRow row in dt.Rows)
                    {
                        using (IRowExporter rowExporter = worksheetExporter.CreateRowExporter())
                        {
                            foreach (var item in row.ItemArray)
                            {
                                SpreadCellFormat normalFormat = new SpreadCellFormat();
                                normalFormat.FontSize = 10;
                                normalFormat.VerticalAlignment = SpreadVerticalAlignment.Center;
                                normalFormat.HorizontalAlignment = SpreadHorizontalAlignment.Center;
                                using (ICellExporter cellExporter = rowExporter.CreateCellExporter())
                                {
                                    cellExporter.SetValue(item.ToString());
                                    cellExporter.SetFormat(normalFormat);
                                }
                            }
 
                        }
                    }
 
                }
            }
 
            byte[] output = stream.ToArray();
 
            if (docFormat == SpreadDocumentFormat.Csv)
            {
                FileExtension = "csv";
                FileName = RadGrid1.ExportSettings.FileName;
                ContentType = "text/csv";
            }
            else if (docFormat == SpreadDocumentFormat.Xlsx)
            {
                FileExtension = "xlsx";
                FileName = RadGrid1.ExportSettings.FileName;
                ContentType = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
            }
 
            WriteFileToResponse(output);
        }
    }
    private void ExportHeaderRows(IWorksheetExporter worksheetExporter, DataTable dt)
    {
        using (IRowExporter rowExporter = worksheetExporter.CreateRowExporter())
        {
            double HeaderRowHeight = 50;
            rowExporter.SetHeightInPoints(HeaderRowHeight);
 
            SpreadCellFormat format = new SpreadCellFormat();
            format.IsBold = true;
            format.Fill = SpreadPatternFill.CreateSolidFill(new SpreadColor(142, 196, 65));
            format.ForeColor = new SpreadThemableColor(new SpreadColor(255, 255, 255));
            format.HorizontalAlignment = SpreadHorizontalAlignment.Center;
            format.VerticalAlignment = SpreadVerticalAlignment.Center;
 
            for (int i = 0; i < dt.Columns.Count; i++)
            {
                using (ICellExporter cellExporter = rowExporter.CreateCellExporter())
                {
                    cellExporter.SetFormat(format);
                    cellExporter.SetValue(dt.Columns[i].ColumnName);
                }
            }
        }
    }
    private void WriteFileToResponse(byte[] content)
    {
        Response.ContentType = ContentType;
        Response.Headers.Remove("Content-Disposition");
        Response.AppendHeader("Content-Disposition", string.Format("attachment; filename={0}.{1}", FileName, FileExtension));
        Response.BinaryWrite(content);
        Response.End();
    }
    #endregion
 
    #endregion
}
````
````VB
Imports System.Data
Imports System.IO
Imports Telerik.Documents.SpreadsheetStreaming
Imports Telerik.Web.UI
Imports Telerik.Windows.Documents.Spreadsheet.FormatProviders.Pdf
Imports Telerik.Windows.Documents.Spreadsheet.Model
 
Partial Class DefaultVB
    Inherits System.Web.UI.Page
 
    Private Property SessionKey As String
    Private Property colNum As Integer
    Private Property rowNum As Integer
    Private Property FileExtension As String
    Private Property FileName As String
    Private Property ResponseContentType As String
 
    Private Property SessionDataSource As DataTable
        Get
 
            If Not IsPostBack OrElse Session(SessionKey) Is Nothing Then
                Session(SessionKey) = OrdersTable()
            End If
 
            Return CType(Session(SessionKey), DataTable)
        End Get
        Set(ByVal value As DataTable)
            Session(SessionKey) = value
        End Set
    End Property
 
    Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs)
        SessionKey = "MySessionkey"
        colNum = 10
        rowNum = 100000
    End Sub
 
    Protected Sub RadGrid1_NeedDataSource(ByVal sender As Object, ByVal e As GridNeedDataSourceEventArgs)
        RadGrid1.DataSource = SessionDataSource
    End Sub
 
    Protected Sub btnXLSX_Click(ByVal sender As Object, ByVal e As EventArgs)
        SpreadStreamProcessingForXLSXAndCSV(SessionDataSource)
    End Sub
 
    Protected Sub btnCSV_Click(ByVal sender As Object, ByVal e As EventArgs)
        SpreadStreamProcessingForXLSXAndCSV(SessionDataSource, SpreadDocumentFormat.Csv)
    End Sub
 
    Protected Sub btnPDF_Click(ByVal sender As Object, ByVal e As EventArgs)
        SpreadProcessingForPDF(SessionDataSource)
    End Sub
 
    Private Function OrdersTable() As DataTable
        Dim dt As DataTable = New DataTable()
 
        For i As Integer = 0 To colNum - 1
            dt.Columns.Add(New DataColumn("C" & i, GetType(String)))
        Next
 
        For rowIndex As Integer = 0 To rowNum - 1
            Dim row As DataRow = dt.NewRow()
 
            For colIndex As Integer = 0 To dt.Columns.Count - 1
                row(colIndex) = String.Format("C{0}R{1}", colIndex, rowIndex)
            Next
 
            dt.Rows.Add(row)
        Next
 
        Return dt
    End Function
 
    Private Sub SpreadProcessingForPDF(ByVal dt As DataTable)
        Dim colCount As Integer = dt.Columns.Count
        Dim rowCount As Integer = dt.Rows.Count
        Dim spWorkbook As Workbook = New Workbook()
        spWorkbook.History.IsEnabled = False
        Dim spWorksheet As Worksheet = spWorkbook.Worksheets.Add()
 
        For rowIndex As Integer = 0 To rowCount - 1
            Dim dr As DataRow = dt.Rows(rowIndex)
 
            For colIndex As Integer = 0 To colCount - 1
 
                If rowIndex = 0 Then
                    Dim colName As String = dt.Columns(colIndex).ColumnName
                    spWorksheet.Cells(rowIndex, colIndex).SetValue(colName)
                Else
                    Dim dbValue = dr(colIndex).ToString()
                    spWorksheet.Cells(rowIndex, colIndex).SetValue(dbValue)
                    Dim cellValue As String = spWorksheet.Cells(1, 1).GetValue().Value.RawValue
                End If
            Next
        Next
 
        Dim pdfProvider As PdfFormatProvider = New PdfFormatProvider()
        Dim output As Byte() = pdfProvider.Export(spWorkbook)
        FileExtension = "pdf"
        FileName = RadGrid1.ExportSettings.FileName
        ContentType = "application/pdf"
        WriteFileToResponse(output)
    End Sub
 
    Private Sub SpreadStreamProcessingForXLSXAndCSV(ByVal dt As DataTable, ByVal Optional docFormat As SpreadDocumentFormat = SpreadDocumentFormat.Xlsx, ByVal Optional sheetName As String = "Sheet1")
        Using stream As MemoryStream = New MemoryStream()
 
            Using workbook As IWorkbookExporter = SpreadExporter.CreateWorkbookExporter(docFormat, stream)
 
                Using worksheetExporter As IWorksheetExporter = workbook.CreateWorksheetExporter(sheetName)
 
                    For i As Integer = 0 To dt.Columns.Count - 1
 
                        Using columnExporter As IColumnExporter = worksheetExporter.CreateColumnExporter()
                            columnExporter.SetWidthInPixels(100)
                        End Using
                    Next
 
                    ExportHeaderRows(worksheetExporter, dt)
 
                    For Each row As DataRow In dt.Rows
 
                        Using rowExporter As IRowExporter = worksheetExporter.CreateRowExporter()
 
                            For Each item In row.ItemArray
                                Dim normalFormat As SpreadCellFormat = New SpreadCellFormat()
                                normalFormat.FontSize = 10
                                normalFormat.VerticalAlignment = SpreadVerticalAlignment.Center
                                normalFormat.HorizontalAlignment = SpreadHorizontalAlignment.Center
 
                                Using cellExporter As ICellExporter = rowExporter.CreateCellExporter()
                                    cellExporter.SetValue(item.ToString())
                                    cellExporter.SetFormat(normalFormat)
                                End Using
                            Next
                        End Using
                    Next
                End Using
            End Using
 
            Dim output As Byte() = stream.ToArray()
 
            If docFormat = SpreadDocumentFormat.Csv Then
                FileExtension = "csv"
                FileName = RadGrid1.ExportSettings.FileName
                ContentType = "text/csv"
            ElseIf docFormat = SpreadDocumentFormat.Xlsx Then
                FileExtension = "xlsx"
                FileName = RadGrid1.ExportSettings.FileName
                ContentType = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
            End If
 
            WriteFileToResponse(output)
        End Using
    End Sub
 
    Private Sub ExportHeaderRows(ByVal worksheetExporter As IWorksheetExporter, ByVal dt As DataTable)
        Using rowExporter As IRowExporter = worksheetExporter.CreateRowExporter()
            Dim HeaderRowHeight As Double = 50
            rowExporter.SetHeightInPoints(HeaderRowHeight)
            Dim format As SpreadCellFormat = New SpreadCellFormat()
            format.IsBold = True
            format.Fill = SpreadPatternFill.CreateSolidFill(New SpreadColor(142, 196, 65))
            format.ForeColor = New SpreadThemableColor(New SpreadColor(255, 255, 255))
            format.HorizontalAlignment = SpreadHorizontalAlignment.Center
            format.VerticalAlignment = SpreadVerticalAlignment.Center
 
            For i As Integer = 0 To dt.Columns.Count - 1
 
                Using cellExporter As ICellExporter = rowExporter.CreateCellExporter()
                    cellExporter.SetFormat(format)
                    cellExporter.SetValue(dt.Columns(i).ColumnName)
                End Using
            Next
        End Using
    End Sub
 
    Private Sub WriteFileToResponse(ByVal content As Byte())
        Response.ContentType = ContentType
        Response.Headers.Remove("Content-Disposition")
        Response.AppendHeader("Content-Disposition", String.Format("attachment; filename={0}.{1}", FileName, FileExtension))
        Response.BinaryWrite(content)
        Response.[End]()
    End Sub
End Class
````

 
