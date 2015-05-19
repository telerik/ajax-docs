---
title: Getting Started
page_title: Getting Started | UI for ASP.NET AJAX Documentation
description: Getting Started
slug: spreadprocessing/getting-started
tags: getting,started
published: True
position: 1
---

# Getting Started



This article will get you started in using the __RadSpreadProcessing__ library. It contains the following sections:

* [Assembly References](#assembly-references)

* [Creating a Workbook](#creating-a-workbook)

* [Exporting](#exporting)

* [Using RadSpreadsheet](#using-radspreadsheet)

## Assembly References

In order to use the model of the __RadSpreadProcessing__ library in your project you need to add references to the following assemblies:

* Telerik.Windows.Documents.Core.dll

* Telerik.Windows.Documents.Spreadsheet.dll

* Telerik.Windows.Maths.dll

The following assemblies are requiredin order to be able to exporto to Xlsx and PDF formats:

* Telerik.Windows.Documents.Spreadsheet.FormatProviders.OpenXml.dll

* Telerik.Windows.Documents.Spreadsheet.FormatProviders.Pdf.dll

* Telerik.Windows.Zip.dll

Additionally you might need to add references to the following __.NET__ assemblies:

* WindowsBase

* PresentationCore

## Creating a Workbook

The document model allows you to instantiate a new [workbook]({%slug spreadprocessing/working-with-workbooks/what-is-workbook%}) and populate it with any data you want.

__Example 1__ shows how you can create a workbook and add a new worksheet to it.

````C#
	            Workbook workbook = new Workbook();
	            Worksheet worksheet = workbook.Worksheets.Add();
````



You can then create a [CellSelection]({%slug spreadprocessing/working-with-cells/get,-set-and-clear-cell-properties%}) and set any value to the selected cells. __Example 2__ shows how you can create a cell and set a string value to it.

````C#
	            CellSelection selection = worksheet.Cells[1, 1]; //B2 cell
	            selection.SetValue("Hello RadSpreadProcessing");
````



## Exporting

The __RadSpreadProcessing__ library supports a variety of formats to which you can export the contents of a workbook. __Example 3__ shows how you can export the previously created workbook to Xlsx format.

````C#
	            string fileName = "Hello.xlsx";
	            IWorkbookFormatProvider formatProvider = new XlsxFormatProvider();
	
	            using (FileStream input = new FileStream(fileName, FileMode.Open))
	            {
	                workbook = formatProvider.Import(input);
	            }
````



## Using RadSpreadsheet

__RadSpreadsheet__ is a UI control part of the Telerik UI for WPF/Silverlight suites. The document model explained in this section of the documentation and all its features are shared between the __RadSpreadProcessing__ library and __RadSpreadsheet__. [This help section](f6f16771-f529-4c91-8b02-419beb6f1731) contains information about all UI-specific features of __RadSpreadsheet__.

# See Also

 * [Whats is a Workbook?]({%slug spreadprocessing/working-with-workbooks/what-is-workbook%})

 * [What is a Worksheet?]({%slug spreadprocessing/working-with-worksheets/what-is-a-worksheet?%})

 * [Get, Set and Clear Cell Properties]({%slug spreadprocessing/working-with-cells/get,-set-and-clear-cell-properties%})[](87deca9a-e006-4210-b5f4-173afd5756ee)
