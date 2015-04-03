---
title: Excel BIFF Export
page_title: Excel BIFF Export | UI for ASP.NET AJAX Documentation
description: Excel BIFF Export
slug: grid/functionality/exporting/export-formats/excel-biff-export
tags: excel,biff,export
published: True
position: 3
---

# Excel BIFF Export



## Binary Export Basics

From Q3 2012 we provide a new export format which is based on the binary Excel format BIFF. Our implementation supports all versions of Microsoft Excel, starting from 2003. Opening a file exported in this format won't trigger a warning message as with the other two supported formats. Although there are some limitations in the initial implementation (no grouping or hierarchy support, for example) we introduced something different that would help you export virtually any table-based structures whether they are part of RadGrid or not. This is what we call an "export infrastructure". It is a middle layer positioned between a server control (or user controlled) and a given export library. In this case, we have used it internally in RadGrid but every developer can take advantage of it as demonstrated in our online demo. In order to use this export format, you have to set the ExportSettings-Excel-Format property to Biff.

>note From Q1 2013 __MasterTableView's__ caption could be exported by using BIFF export format.
>From Q1 2014 __Biff export__ format allows you to export a multi-column headers.
>


>note Cell, Column, and Row indices start from 1.
>


````ASPNET
	        <ExportSettings ExportOnlyData="true" OpenInNewWindow="true" HideStructureColumns="true">
	            <Excel Format="Biff" />
	        </ExportSettings>
````



>note From Q1 2013 SP1 the __DataFormatString__ of the RadGrid columns is applied to the exported file when using BIFF format. Note that only the[custom numeric format strings](http://msdn.microsoft.com/en-us/library/0c899ak8%28v=vs.71%29.aspx)(Example 1)will work because in most scenarios they match the[Microsoft Excel’s custom numeric format](http://office.microsoft.com/en-gb/excel-help/create-a-custom-number-format-HP010342372.aspx). The built-in .NET[standard numeric format strings](http://msdn.microsoft.com/en-us/library/dwhawy9k%28v=vs.71%29.aspx)(Example 2) can still beused, but the output will not be as expected. It is important to note, that the exported file is based on the actual RadGridcells values. When DataFormatString is applied, these values will already be formatted which could be prevented by setting the __SuppressColumnDataFormatStrings__ property to true.
>


Example 1:

````ASPNET
	                <telerik:GridBoundColumn DataType="System.DateTime" DataField="DateField" DataFormatString="{0:tt dd-MM(yyyy) }" />
````



Example 2:

````ASPNET
	                <telerik:GridBoundColumn DataType="System.Double" DataField="DoubleField" DataFormatString="{0:C2}" />
````



## Hiding Columns / Rows

Hiding rows and columns is pretty straightforward. Actually you can hide these elements in the same way you hide them in a normal server-side scenario.The expand/collapse column could also be removed by setting the HideStructureColumns property to false.

>tabbedCode

````C#
	            RadGrid1.MasterTableView.Items[1].Visible = false; //when IgnorePaging is false
````



````VB.NET
	            RadGrid1.MasterTableView.Items(1).Visible = False 'when IgnorePaging is false
````


>end

>tabbedCode

````C#
	            RadGrid1.MasterTableView.GetColumn("Col1").Visible = false;
````



````VB.NET
	            RadGrid1.MasterTableView.GetColumn("Col1").Visible = False
````


>end

>note From Q2 2013 we introduced a new propery named __Exportable__ . This property allows you tochoose whether a certain column should be included in the exported file or not. By setting this property to __false__ the related column will be excluded from the exported file. Its default value is true.
>


## Styling Columns / Rows / Cells

There are two different ways to style these elements. The standard ASP.NET and the Export Infrastructure approach. In order to use the latter way, you have to handle the BiffExporting event in the code-behind. Note that styling via CSS classes is not possible.

>tabbedCode

````C#
	        xls.Column col = e.ExportStructure.Tables[0].Columns[2];
	        col.Style.BackColor = Color.Gray;
	        col.Style.ForeColor = Color.Yellow;
````



````VB.NET
	        Dim col As xls.Column = e.ExportStructure.Tables(0).Columns(2)
	        col.Style.BackColor = Color.Gray
	        col.Style.ForeColor = Color.Yellow
````


>end

>tabbedCode

````C#
	        xls.Row row = e.ExportStructure.Tables[0].Rows[2];
	        row.Style.BackColor = Color.Blue;
````



````VB.NET
	        Dim row As xls.Row = e.ExportStructure.Tables(0).Rows(2)
	        row.Style.BackColor = Color.Blue
````


>end

>tabbedCode

````C#
	        xls.Cell cell1 = e.ExportStructure.Tables[0].Cells["B2"];
	        cell1.Style.BackColor = Color.Yellow;
````



````VB.NET
	        Dim cell1 As xls.Cell = e.ExportStructure.Tables(0).Cells("B2")
	        cell1.Style.BackColor = Color.Yellow
````


>end

>tabbedCode

````C#
	        xls.Cell cell2 = e.ExportStructure.Tables[0].Cells[3, 3];
	        cell2.Style.ForeColor = Color.Tomato;
````



````VB.NET
	        Dim cell2 As xls.Cell = e.ExportStructure.Tables(0).Cells(3, 3)
	        cell2.Style.ForeColor = Color.Tomato
````


>end

## Image Support

From Q3 2012 we provide image support when using BIFF Export. For this purpose there is a property called __AutoFitImages__.As the name says, when __AutoFitImages__ property is enabled all the images in the grid will occupy the entire area of thecells at the exported excel file. In other words, any images that are bigger than the cell will be decreased and similarly thesmaller ones size will be increased. Please have in mind that the width/height proportions will not be kept.

## Modifying the Output

This is the most interesting and flexible functionality the new export brings to the table. Simply put, you have to handle the BiffExporting event and then make the desired modification to the structure (accessible via the e.ExportStructure property of the event arguments), generated by RadGrid.

>tabbedCode

````C#
	        //Adding new worksheet
	        xls.Table newSheet = new xls.Table("NEW SHEET");
	        e.ExportStructure.Tables.Add(newSheet);
	        newSheet.Cells[1, 1].Value = "NEW CELL";
````



````VB.NET
	        'Adding new worksheet
	        Dim newSheet As New xls.Table("NEW SHEET")
	        e.ExportStructure.Tables.Add(newSheet)
	        newSheet.Cells(1, 1).Value = "NEW CELL"
````


>end

## Limitations

* No hierarchy support

* No grouping support

* No automatic column/row resizing
