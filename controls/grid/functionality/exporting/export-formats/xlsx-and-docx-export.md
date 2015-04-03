---
title: XLSX and DOCX Export
page_title: XLSX and DOCX Export | UI for ASP.NET AJAX Documentation
description: XLSX and DOCX Export
slug: grid/functionality/exporting/export-formats/xlsx-and-docx-export
tags: xlsx,and,docx,export
published: True
position: 5
---

# XLSX and DOCX Export



This help article describes the specifics of exporting a __RadGrid__ control to __XLSX__ and__DOCX__ format, introduced by Microsoft in Office 2007. Both formats are supported since Q3 2014 and are based on the [Telerik document processing libraries](65112864-d4c8-4ad6-8e5a-26f28c32ea8f). In order to use this export formats, you have to set the __ExportSettings-Excel-Format__ property to__Xlsx__ and __ExportSettings-Word-Format__ property to __Docx__.

````ASPNET
	            <ExportSettings>
	                <Excel Format="Xlsx" />
	                <Word Format="Docx" />
	            </ExportSettings>
````



## Required Assemblies

The assemblies that must be referenced in order to export RadGrid to Excel are:

* Telerik.Windows.Documents.Core.dll

* Telerik.Windows.Documents.Spreadsheet.dll

* Telerik.Windows.Zip.dll

* Telerik.Windows.Documents.Spreadsheet.FormatProviders.OpenXml.dll

The assemblies that must be referenced in order to export RadGrid to Word are:

* Telerik.Windows.Documents.Core.dll

* Telerik.Windows.Documents.Flow.dll

* Telerik.Windows.Zip.dll

More information about the assemblies and how toinclude them in your project can be found in the [Included assemblies](http://www.telerik.com/help/aspnet-ajax/introduction-included-assemblies.html) help article.

## Formatting

When you set __DataFormatString__ of __RadGrid__ columns, the format will be applied to the exported file.Note that only the [custom numeric format strings](http://msdn.microsoft.com/en-us/library/0c899ak8%28v=vs.71%29.aspx) (Example 1)will work because in most scenarios they match the [Microsoft Excel's custom numeric format](http://office.microsoft.com/en-gb/excel-help/create-a-custom-number-format-HP010342372.aspx). The built-in .NET [standard numeric format strings](http://msdn.microsoft.com/en-us/library/dwhawy9k%28v=vs.71%29.aspx) (Example 2) can still beused, but the output will not be as expected. It is important to note, that the exported file is based on the actual RadGridcells values. When DataFormatString is applied, these values will already be formatted which could be prevented by setting the__SuppressColumnDataFormatStrings__ property to true.

Example 1:

````ASPNET
	            <telerik:GridBoundColumn DataType="System.DateTime" DataField="DateField" DataFormatString="{0:tt dd-MM(yyyy) }" />
````



Example 2:

````ASPNET
	            <telerik:GridBoundColumn DataType="System.Double" DataField="DoubleField" DataFormatString="{0:C2}" />
````



## Hiding Columns / Rows

Hiding rows and columns is pretty straightforward. Actually you can hide these elements in the same way you hide them in a normal server-side scenario.

>tabbedCode

````C#
	  RadGrid1.MasterTableView.GetColumn("Col1").Visible = false;
	  RadGrid1.MasterTableView.Items[1].Visible = false; //when IgnorePaging is false
````



````VB.NET
	  RadGrid1.MasterTableView.GetColumn("Col1").Visible = False
	  RadGrid1.MasterTableView.Items(1).Visible = False 'when IgnorePaging is false
````


>end

Additionally you could use the __Exportable__ property that allows you to choose whether a certain column should be included inthe exported file or not. By setting this property to __false__ the related column will be excluded from the exported file.Its default value is __true__.

## Styling Columns / Rows / Cell

In order to style the elements of the __RadGrid__ you could use the standard ASP.NET style properties such as ItemStyle,AlternatingItemStyle, HeaderStyle and FooterStyle to provide a custom style for the items of __RadGrid__ control.

````ASPNET
	            <AlternatingItemStyle BorderColor="Red" BorderStyle="Solid" BorderWidth="1px" />
	            <ItemStyle ForeColor="Green" />
	            <HeaderStyle BackColor="Yellow" />
````



Another approach is to hook __OnInfrastructureExporting__ event handler and apply the styles in code behind.Note that styling via CSS classes is not possible.

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

Both __xlsx__ and __docx__ support exporting of images. The images are included automatically in theexported document and you do not have to set any specific property. Keep in mind images with an __absolute__ or__relative__ path are supported, but binary images are not.

## Limitations

* No hierarchy support

* No grouping support

* No automatic column/row resizing
