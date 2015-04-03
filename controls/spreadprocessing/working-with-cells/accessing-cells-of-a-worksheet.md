---
title: Accessing Cells of a Worksheet
page_title: Accessing Cells of a Worksheet | UI for ASP.NET AJAX Documentation
description: Accessing Cells of a Worksheet
slug: spreadprocessing/working-with-cells/accessing-cells-of-a-worksheet
tags: accessing,cells,of,a,worksheet
published: True
position: 2
---

# Accessing Cells of a Worksheet



Each worksheet consists of cells organized in rows and columns. In order to manipulate the data and properties of the cells, you need to create and use an instance of the __CellSelection__ class.

## 

As a worksheet contains a considerable number of rows and columns, it is unusual to perform an operation to the whole range of cells. Typically, you would like to set the value of a single cell or, for example, apply formatting to a range of cells. In order to perform an operation on a specified range of cells you need to create a __CellSelection__ object that holds the desired cell region and then invoke the appropriate action for this __CellSelection__ instance. This class exposes a rich API that allows you to get, set and clear cell's value, colors, borders and style.

The document model offers multiple ways to create a __CellSelection__ object. The following list contains all approaches you can use to retrieve a __CellSelection__ instance. Note that each example creates a new workbook, adds one worksheet and creates a selection for its cells.

* __Example 1__ Create CellSelection using CellIndex

````C#
	            Workbook workbook = new Workbook();
	            Worksheet worksheet = workbook.Worksheets.Add();
	
	            CellIndex cellIndex = new CellIndex(0, 5);
	            CellSelection selection1 = worksheet.Cells[cellIndex];
````



* __Example 2__ Create CellSelection using CellRange

````C#
	            Workbook workbook = new Workbook();
	            Worksheet worksheet = workbook.Worksheets.Add();
	
	            CellRange cellRange = new CellRange(0, 0, 5, 5);
	            CellSelection selection2 = worksheet.Cells[cellRange];
````



* __Example 3__ Create CellSelection using multiple CellRange objects

````C#
	            Workbook workbook = new Workbook();
	            Worksheet worksheet = workbook.Worksheets.Add();
	
	            List<CellRange> ranges = new List<CellRange>();
	            ranges.Add(new CellRange(0, 0, 5, 5));
	            ranges.Add(new CellRange(0, 10, 5, 15));
	            CellSelection selection3 = worksheet.Cells[ranges];
````



* __Example 4__ Create CellSelection using two CellIndex instances that specify a CellRange

````C#
	            Workbook workbook = new Workbook();
	            Worksheet worksheet = workbook.Worksheets.Add();
	
	            CellIndex fromIndex = new CellIndex(0, 0);
	            CellIndex toIndex = new CellIndex(5, 5);
	            CellSelection selection4 = worksheet.Cells[fromIndex, toIndex];
````



* __Example 5__ Create CellSelection using two integers that indicate the CellIndex

````C#
	            Workbook workbook = new Workbook();
	            Worksheet worksheet = workbook.Worksheets.Add();
	
	            CellSelection selection5 = worksheet.Cells[0, 5];
````



* __Example 6__ Create CellSelection using four integers that specify the CellRange

````C#
	            Workbook workbook = new Workbook();
	            Worksheet worksheet = workbook.Worksheets.Add();
	
	            CellSelection selection6 = worksheet.Cells[0, 0, 5, 5];
````



Once you have a __CellSelection__ object you can get, set and clear the properties of the selected cells. More information about cell properties is available in the [Get, Set and Clear Cell Properties]({%slug spreadprocessing/working-with-cells/get,-set-and-clear-cell-properties%}) article.
