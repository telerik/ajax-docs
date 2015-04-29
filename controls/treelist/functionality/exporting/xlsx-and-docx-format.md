---
title: XLSX and DOCX Format
page_title: XLSX and DOCX Format | RadTreeList for ASP.NET AJAX Documentation
description: XLSX and DOCX Format
slug: treelist/functionality/exporting/xlsx-and-docx-format
tags: xlsx,and,docx,format
published: True
position: 5
---

# XLSX and DOCX Format



This help article describes the specifics of exporting a **RadTreeList** control to **XLSX** and **DOCX** format, introduced by Microsoft in Office 2007. Both formats are supported since Q3 2014 and are based on the [Telerik document processing libraries]({%slug introduction/installation/included-assemblies%}). In order to use **xlsx** export formats, you have to set the **ExportSettings-Excel-Format** property to **Xlsx**, while **docx** format does notrequire applying a property.

````ASPNET
<ExportSettings>
	<Excel Format="Xlsx" />
</ExportSettings>
````



## Formatting

When you set **DataFormatString** of **RadTreeList** columns, the format will be applied to the exported file.Note that only the [custom numeric format strings](http://msdn.microsoft.com/en-us/library/0c899ak8%28v=vs.71%29.aspx) (Example 1)will work because in most scenarios they match the [Microsoft Excel’s custom numeric format](http://office.microsoft.com/en-gb/excel-help/create-a-custom-number-format-HP010342372.aspx). The built-in .NET [standard numeric format strings](http://msdn.microsoft.com/en-us/library/dwhawy9k%28v=vs.71%29.aspx) (Example 2) can still beused, but the output will not be as expected. It is important to note, that the exported file is based on the actual **RadTreeList** cells values. When **DataFormatString** is applied, these values will already be formatted which could be prevented by setting the **SuppressColumnDataFormatStrings** property to true.

Example 1:

````ASPNET
<telerik:TreeListBoundColumn DataType="System.DateTime" DataField="DateField" DataFormatString="{0:tt dd-MM(yyyy) }" />
````



Example 2:

````ASPNET
<telerik:TreeListBoundColumn DataType="System.Double" DataField="DoubleField" DataFormatString="{0:C2}" />
````



## Hiding Columns / Rows

Hiding rows and columns is pretty straightforward. Actually you can hide these elements in the same way you hide them in a normal server-side scenario.



````C#
RadTreeList1.GetColumn("ID").Visible = false;
RadTreeList1.Items[0].Visible = false;
````
````VB.NET
RadTreeList1.GetColumn("ID").Visible = false
RadTreeList1.Items(0).Visible = false
````


## Styling Columns / Rows / Cells

In order to style the elements of the **RadTreeList** you could use the standard ASP.NET style properties such as ItemStyle,AlternatingItemStyle, HeaderStyle and FooterStyle to provide a custom style for the items of **RadTreeList** control.

````ASPNET
<AlternatingItemStyle BorderColor="Red" BorderStyle="Solid" BorderWidth="1px" />
<ItemStyle ForeColor="Green" />
<HeaderStyle BackColor="Yellow" />
````



Another approach is to hook OnInfrastructureExporting event handler and apply the styles in code behind. Note that styling via CSS classes is not possible.



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




````C#
xls.Row row = e.ExportStructure.Tables[0].Rows[2];
row.Style.BackColor = Color.Blue;
````
````VB.NET
Dim row As xls.Row = e.ExportStructure.Tables(0).Rows(2)
row.Style.BackColor = Color.Blue
````




````C#
xls.Cell cell1 = e.ExportStructure.Tables[0].Cells["B2"];
cell1.Style.BackColor = Color.Yellow;
````
````VB.NET
Dim cell1 As xls.Cell = e.ExportStructure.Tables(0).Cells("B2")
cell1.Style.BackColor = Color.Yellow
````




````C#
xls.Cell cell2 = e.ExportStructure.Tables[0].Cells[3, 3];
cell2.Style.ForeColor = Color.Tomato;
````
````VB.NET
Dim cell2 As xls.Cell = e.ExportStructure.Tables(0).Cells(3, 3)
cell2.Style.ForeColor = Color.Tomato
````


## Image Support

Both **xlsx** and **docx** support exporting of images. The images are included automatically in theexported document and you do not have to set any specific property. Keep in mind images with an absolute or relative path are supported, but binary images are not.

## Limitations

* No grouping support

* No automatic column/row resizing
