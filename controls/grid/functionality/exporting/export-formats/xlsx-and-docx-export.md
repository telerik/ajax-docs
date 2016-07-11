---
title: XLSX and DOCX Export
page_title: XLSX and DOCX Export | RadGrid for ASP.NET AJAX Documentation
description: XLSX and DOCX Export
slug: grid/functionality/exporting/export-formats/xlsx-and-docx-export
tags: xlsx,and,docx,export
published: True
position: 5
---

# XLSX and DOCX Export



This help article describes the specifics of exporting a **RadGrid** control to **XLSX** and**DOCX** format, introduced by Microsoft in Office 2007. Both formats are supported since Q3 2014 and are based on the [Telerik document processing libraries]({%slug introduction/installation/included-assemblies%}). In order to use this export formats, you have to set the **ExportSettings-Excel-Format** property to**Xlsx** and **ExportSettings-Word-Format** property to **Docx**.

````ASP.NET
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

More information about the assemblies and how to include them in your project can be found in the [Included assemblies](http://www.telerik.com/help/aspnet-ajax/introduction-included-assemblies.html) help article.

## Formatting

When you set **DataFormatString** of **RadGrid** columns, the format will be applied to the exported file. Note that only the [custom numeric format strings](http://msdn.microsoft.com/en-us/library/0c899ak8%28v=vs.71%29.aspx) (Example 1)will work because in most scenarios they match the [Microsoft Excel's custom numeric format](http://office.microsoft.com/en-gb/excel-help/create-a-custom-number-format-HP010342372.aspx). The built-in .NET [standard numeric format strings](http://msdn.microsoft.com/en-us/library/dwhawy9k%28v=vs.71%29.aspx) (Example 2) can still be used, but the output will not be as expected. It is important to note, that the exported file is based on the actual RadGrid cells values. When DataFormatString is applied, these values will already be formatted which could be prevented by setting the**SuppressColumnDataFormatStrings** property to true.

Example 1:

````ASP.NET
<telerik:GridBoundColumn DataType="System.DateTime" DataField="DateField" DataFormatString="{0:tt dd-MM(yyyy) }" />
````



Example 2:

````ASP.NET
<telerik:GridBoundColumn DataType="System.Double" DataField="DoubleField" DataFormatString="{0:C2}" />
````



## Hiding Columns / Rows

Hiding rows and columns is pretty straightforward. Actually you can hide these elements in the same way you hide them in a normal server-side scenario.



````C#
RadGrid1.MasterTableView.GetColumn("Col1").Visible = false;
RadGrid1.MasterTableView.Items[1].Visible = false; //when IgnorePaging is false
````
````VB
RadGrid1.MasterTableView.GetColumn("Col1").Visible = False
RadGrid1.MasterTableView.Items(1).Visible = False 'when IgnorePaging is false
````


Additionally you could use the **Exportable** property that allows you to choose whether a certain column should be included in the exported file or not. By setting this property to **false** the related column will be excluded from the exported file.Its default value is **true**.

## Styling Columns / Rows / Cell

In order to style the elements of the **RadGrid** you could use the standard ASP.NET style properties such as ItemStyle,AlternatingItemStyle, HeaderStyle and FooterStyle to provide a custom style for the items of **RadGrid** control.

````ASP.NET
<AlternatingItemStyle BorderColor="Red" BorderStyle="Solid" BorderWidth="1px" />
<ItemStyle ForeColor="Green" />
<HeaderStyle BackColor="Yellow" />
````



Another approach is to hook **OnInfrastructureExporting** event handler and apply the styles in code behind. Note that styling via CSS classes is not possible.



````C#
xls.Column col = e.ExportStructure.Tables[0].Columns[2];
col.Style.BackColor = Color.Gray;
col.Style.ForeColor = Color.Yellow;
````
````VB
Dim col As xls.Column = e.ExportStructure.Tables(0).Columns(2)
col.Style.BackColor = Color.Gray
col.Style.ForeColor = Color.Yellow
````




````C#
xls.Row row = e.ExportStructure.Tables[0].Rows[2];
row.Style.BackColor = Color.Blue;
````
````VB
Dim row As xls.Row = e.ExportStructure.Tables(0).Rows(2)
row.Style.BackColor = Color.Blue
````




````C#
xls.Cell cell1 = e.ExportStructure.Tables[0].Cells["B2"];
cell1.Style.BackColor = Color.Yellow;
````
````VB
Dim cell1 As xls.Cell = e.ExportStructure.Tables(0).Cells("B2")
cell1.Style.BackColor = Color.Yellow
````




````C#
xls.Cell cell2 = e.ExportStructure.Tables[0].Cells[3, 3];
cell2.Style.ForeColor = Color.Tomato;
````
````VB
Dim cell2 As xls.Cell = e.ExportStructure.Tables(0).Cells(3, 3)
cell2.Style.ForeColor = Color.Tomato
````

## Default Cell Alignment

You can specify a default alignment to all cells by using **DefaultCellAlignment**. This property is supported since **Q2 2015** and its default value is NotSet. Typical values include **Left**, **Right** and **Center**.

````ASP.NET    
<ExportSettings>
    <Excel DefaultCellAlignment="Center" />
</ExportSettings>
````

Additionally you can change the default alignment on **OnInfrastructureExporting** event.

## Image Support

Both **xlsx** and **docx** support exporting of images. The images are included automatically in the exported document and you do not have to set any specific property. Keep in mind images with an **absolute** or**relative** path are supported, but binary images are not.

## Limitations

* No hierarchy support

* No automatic column/row resizing
