---
title: Import and Export between Excel files and DataTable
description: Use Document Processing Libraries (DPL) to Import and Excel file to a DataTable and viceversa to bind Grid to xlsx file or export DataTable to txt, xls or xslx file.
type: how-to
page_title: Import and Export between Excel files and DataTable
slug: common-datatable-import-export-to-excel
position: 
tags: 
ticketid: 1476122
res_type: kb
---


The [Document Processing Library(DPL)](https://docs.telerik.com/devtools/document-processing/introduction) allows you to **create**, **import**, **modify** and **export** documents *without relying on external dependencies* like Adobe Acrobat or Microsoft Office.

With the R2 2021 release, the [RadSpreadProcessing library](https://docs.telerik.com/devtools/document-processing/libraries/radspreadprocessing/overview) introduced the [DataTableFormatProvider](https://docs.telerik.com/devtools/document-processing/libraries/radspreadprocessing/formats-and-conversion/data-table/using-data-table-format-provider) which allows an easy conversion between a DPL's [Workbook](https://docs.telerik.com/devtools/document-processing/libraries/radspreadprocessing/working-with-workbooks/working-with-workbooks-what-is-workbook) and a `DataTable`. A full list of the *supported Excel file formats* can be found in the [RadSpreadProcessing Overview - **Supported formats**]({%slug radspreadprocessing-overview%}#supported-formats). 



As the `Workbook` can be imported from and exported to an *Excel file*, the import/export between *Excel files* and `DataTable` becomes super easy. With a few lines of code, you can bind a databound control such as the Grid to an Excel file or export a `DataTable` to a physical Excel file. 

This article will cover two scenarios:

1. [Import DataTable From Excel](#import-datatable-from-excel)
2. [Export DataTable To Excel](#export-datatable-to-excel)  

>note The examples in this article use the `XlsxFormatProvider` for demo purposes but any other format provider could be used instead. A list of the available *format providers* that allow the easy import/export of a Workbook can be found  in [RadSpreadProcessing **Formats and Conversion - General Information**](https://docs.telerik.com/devtools/document-processing/libraries/radspreadprocessing/formats-and-conversion/general-information) article.

## Import DataTable From Excel

To get a DataTable from text(`.txt`) or Excel file(`.csv`, `.xlsx`), we have 2 steps:

1. Import Excel file to a Workbook
   - [RadSpreadProcessing - Open Workbook](https://docs.telerik.com/devtools/document-processing/libraries/radspreadprocessing/working-with-workbooks/create-open-and-save-workbooks#open-a-workbook)
   - [RadSpreadProcessing - Formats and conversion](https://docs.telerik.com/devtools/document-processing/libraries/radspreadprocessing/formats-and-conversion/general-information)

2. Export Workbook To a DataTable
   - [Using DataTableFormatProvider - Import](https://docs.telerik.com/devtools/document-processing/libraries/radspreadprocessing/formats-and-conversion/data-table/using-data-table-format-provider#import)


````C#
// Step 1: Load Excel file to DPL Workbook
Telerik.Windows.Documents.Spreadsheet.Model.Workbook workbook;
IWorkbookFormatProvider formatProvider = new XlsxFormatProvider();

if (!File.Exists(path))
{
    throw new FileNotFoundException(String.Format("File {0} was not found!", path));
}

using (Stream input = new FileStream(path, FileMode.Open))
{
    workbook = formatProvider.Import(input);
}

// Step 2: Create DataTable from Workbook
DataTableFormatProvider provider = new DataTableFormatProvider();
DataTable dataTable = provider.Export(workbook.ActiveWorksheet);
````


## Export DataTable To Excel

To Export a DataTable to a text(`.txt`) or Excel file(`.csv`, `.xlsx`), we have 2 steps:

1. Import DataTable to a Workbook
   - [Using DataTableFormatProvider - Export](https://docs.telerik.com/devtools/document-processing/libraries/radspreadprocessing/formats-and-conversion/data-table/using-data-table-format-provider#export)
2. Export Workbook to an Excel file
   - [RadSpreadProcessing - Save Workbook](https://docs.telerik.com/devtools/document-processing/libraries/radspreadprocessing/working-with-workbooks/create-open-and-save-workbooks#save-a-workbook)
   - [RadSpreadProcessing - Formats and conversion](https://docs.telerik.com/devtools/document-processing/libraries/radspreadprocessing/formats-and-conversion/general-information)



````C#
// Step 1: Convert a DataTable to Workbook
DataTableFormatProvider provider = new DataTableFormatProvider();

Workbook workbook = new Workbook();
Worksheet worksheet = workbook.Worksheets.Add();

provider.Import(dataTable, worksheet);

// Step 2: Save Workbook as Excel file
IWorkbookFormatProvider formatProvider = new Telerik.Windows.Documents.Spreadsheet.FormatProviders.OpenXml.Xlsx.XlsxFormatProvider();

using (Stream output = new FileStream(path, FileMode.Create))
{
    formatProvider.Export(workbook, output);
}
````



## See Also

- [Document Processing Library(DPL)](https://docs.telerik.com/devtools/document-processing/introduction)
- [RadSpreadProcessing Library](https://docs.telerik.com/devtools/document-processing/libraries/radspreadprocessing/overview)
- [DPL's Workbook](https://docs.telerik.com/devtools/document-processing/libraries/radspreadprocessing/working-with-workbooks/working-with-workbooks-what-is-workbook)

