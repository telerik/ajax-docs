---
title: Iterate Through Worksheets
page_title: Iterate Through Worksheets | UI for ASP.NET AJAX Documentation
description: Iterate Through Worksheets
slug: spreadprocessing/working-with-worksheets/iterate-through-worksheets
tags: iterate,through,worksheets
published: True
position: 4
---

# Iterate Through Worksheets



In a number of scenarios you may need to iterate through all worksheets in a given workbook. The API of the __Workbook__ class exposes a __Worksheets__ collection that allows you to retrieve worksheets both by name and index. Also, the collection allows you to iterate all worksheets effortlessly.

## 

__Example 1__ illustrates how to retrieve worksheets that have already been added to the workbook:

````C#
	            Workbook workbook = new Workbook();
	
	            WorksheetCollection worksheets = workbook.Worksheets;
	            worksheets.Add();
	            worksheets.Add();
	
	            Worksheet firstWorksheet = worksheets[0];
	            Worksheet secondWorksheet = worksheets["Sheet2"];
````



__Example 2__ creates a new workbook with three worksheets. The code further iterates through all worksheets and sets the value of cell *A1* to the name of the corresponding worksheet. The example also sets the ForeColor and BackgrounFill of the cell:

````C#
	            Workbook workbook = new Workbook();
	
	            workbook.Worksheets.Add();
	            workbook.Worksheets.Add();
	            workbook.Worksheets.Add();
	
	            ThemableColor foregroundColor = new ThemableColor(Colors.Red);
	            Color backgroundColor = Colors.Green;
	            IFill backgroundFill = new PatternFill(PatternType.Solid, backgroundColor, backgroundColor);
	
	            foreach (Worksheet worksheet in workbook.Worksheets)
	            {
	                CellSelection cell = worksheet.Cells[0, 0];
	                cell.SetValue("The name of this worksheet is: " + worksheet.Name);
	                cell.SetForeColor(foregroundColor);
	                cell.SetFill(backgroundFill);
	            }
````


