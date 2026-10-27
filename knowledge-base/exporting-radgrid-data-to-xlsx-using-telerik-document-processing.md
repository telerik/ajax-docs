---
title: Exporting RadGrid Data to XLSX Using Telerik Document Processing Libraries
description: Learn how to export Telerik RadGrid data to Excel (XLSX) using Telerik Document Processing Libraries. Includes styling, performance recommendations, and export solutions for large datasets.
type: how-to
page_title: How to Export RadGrid Data to Excel with Styling and Performance Optimization
meta_title: How to Export RadGrid Data to Excel with Styling and Performance Optimization
slug: exporting-radgrid-data-to-xlsx-using-telerik-document-processing
tags: radgrid, asp.net-ajax, excel-export, telerik-document-processing, xlsx, large-datasets, autofit, styling
res_type: kb
ticketid: 1719772
---

## Environment

<table>
<tbody>
<tr>
<td>Product</td>
<td>Grid for UI for ASP.NET AJAX</td>
</tr>
<tr>
<td>Version</td>
<td>2026.3.812</td>
</tr>
</tbody>
</table>

## Description

I want to export data from a Telerik RadGrid to an Excel (XLSX) file, applying specific styles like header background color and cell borders. The RadGrid contains approximately 10,000 rows, and I need an efficient solution to avoid performance issues. I also want column-level settings for auto-fitting content and text wrapping without looping through each row or cell individually.

This knowledge base article also answers the following questions:
- How to preserve RadGrid styles during Excel export?
- How to optimize performance for exporting large datasets?
- How to auto-fit columns and wrap text in the exported Excel file?

## Solution

### Exporting RadGrid Data to XLSX

To export RadGrid data to Excel with styling, use the built-in `GenerateXlsxOutput<Workbook>()` method and apply formatting directly to the generated workbook. 

1. Bind the RadGrid data.
2. Generate the workbook using `GenerateXlsxOutput<Workbook>()`.
3. Apply styles to cell ranges for headers and borders.
4. Export the workbook.

Example code:

```csharp
RadGrid1.DataBind();

Workbook workbook = (Workbook)RadGrid1.MasterTableView.GenerateXlsxOutput<Workbook>();
Worksheet worksheet = workbook.Worksheets[0];
CellRange usedRange = worksheet.UsedCellRange;

int firstRow = usedRange.FromIndex.RowIndex;
int firstColumn = usedRange.FromIndex.ColumnIndex;
int lastRow = usedRange.ToIndex.RowIndex;
int lastColumn = usedRange.ToIndex.ColumnIndex;

// Apply header background color.
worksheet.Cells[firstRow, firstColumn, firstRow, lastColumn].SetFill(
    PatternFill.CreateSolidFill(System.Windows.Media.Color.FromRgb(176, 196, 222)));

// Apply thin borders to the used cell range.
CellBorder thinBorder = new CellBorder(
    CellBorderStyle.Thin,
    new ThemableColor(System.Windows.Media.Color.FromRgb(0, 0, 0)));

CellBorders borders = new CellBorders(
    thinBorder, thinBorder, thinBorder, thinBorder, thinBorder, thinBorder,
    CellBorder.Default, CellBorder.Default);

worksheet.Cells[firstRow, firstColumn, lastRow, lastColumn].SetBorders(borders);

IWorkbookFormatProvider formatProvider = new XlsxFormatProvider();
formatProvider.Export(workbook, outputStream, null);
```

### Resolving Corrupted File Issues

To prevent corrupted files when exporting, ensure the HTTP response does not append extra content after the XLSX bytes.

```csharp
using System.Globalization;

IWorkbookFormatProvider formatProvider = new XlsxFormatProvider();
byte[] xlsxBytes;

using (var ms = new MemoryStream())
{
    formatProvider.Export(workbook, ms, null);
    xlsxBytes = ms.ToArray();
}

HttpContext context = HttpContext.Current;
HttpResponse response = context.Response;

response.Clear();
response.BufferOutput = true;
response.ContentType = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
response.AddHeader("Content-Disposition", "attachment; filename=\"QueryActivity.xlsx\"");
response.AddHeader("Content-Length", xlsxBytes.Length.ToString(CultureInfo.InvariantCulture));

response.BinaryWrite(xlsxBytes);
response.Flush();
response.SuppressContent = true;
context.ApplicationInstance.CompleteRequest();
```

Ensure the export button triggers a full postback instead of an AJAX or partial postback.

### Auto-Fitting Columns and Text Wrapping

Apply column-level settings for auto-fitting content and text wrapping:

```csharp
Worksheet worksheet = workbook.Worksheets[0];

// Short columns: fit width to content.
worksheet.Columns[0].AutoFitWidth();
worksheet.Columns[1].AutoFitWidth();

// Long text column: fixed width and wrapping.
worksheet.Columns[2].SetWidth(new ColumnWidth(300, true));
worksheet.Columns[2].SetIsWrapped(true);
```

For columns with long text, use a fixed width and wrapping instead of auto-fitting.

### Performance Recommendations

1. Use RadGrid's built-in export for small to medium-sized datasets.
2. Use RadSpreadStreamProcessing for large datasets. This approach writes rows sequentially and reduces memory usage.

Example code for streaming:

```csharp
using (IWorkbookExporter workbook =
    SpreadExporter.CreateWorkbookExporter(SpreadDocumentFormat.Xlsx, seekableStream))
using (IWorksheetExporter worksheet =
    workbook.CreateWorksheetExporter("Data"))
{
    using (IRowExporter row = worksheet.CreateRowExporter())
    using (ICellExporter cell = row.CreateCellExporter())
    {
        cell.SetValue("Example value");
    }
}
```

Streaming export is preferable for memory efficiency when exporting large datasets.

## See Also

- [RadGrid Export Overview](https://www.telerik.com/products/aspnet-ajax/documentation/controls/grid/functionality/exporting/overview)
- [SpreadProcessing: Resizing Rows and Columns](https://www.telerik.com/document-processing-libraries/documentation/libraries/radspreadprocessing/working-with-rows-and-columns/resizing)
- [ColumnSelection.AutoFitWidth()](https://www.telerik.com/document-processing-libraries/documentation/api/telerik.documents.spreadsheet.model.columnselection#telerik_documents_spreadsheet_model_columnselection_autofitwidth)
- [ColumnSelection.SetWidth(ColumnWidth)](https://www.telerik.com/document-processing-libraries/documentation/api/telerik.documents.spreadsheet.model.columnselection#telerik_documents_spreadsheet_model_columnselection_setwidth_telerik_documents_spreadsheet_model_columnwidth_)
- [SelectionBase.SetIsWrapped(bool)](https://www.telerik.com/document-processing-libraries/documentation/api/telerik.documents.spreadsheet.model.selectionbase#telerik_documents_spreadsheet_model_selectionbase_setiswrapped_system_boolean_) 

