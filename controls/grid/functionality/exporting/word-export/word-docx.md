---
title: Docx (DOCX)
page_title: Word-Docx (OOXML) Export - RadGrid
description: Word-Docx (OOXML) Export
slug: grid/functionality/exporting/word-export/word-docx
tags: html-based,export
published: True
position: 1
---

# Word-Docx (OOXML) Export
 
DOCX is a well-known format for Microsoft Word documents introduced with the release of Microsoft Office 2007, the structure of this new Document format was changed from plain binary to a combination of XML and binary files. Docx files can be opened with Word 2007 and lateral versions but not with the earlier versions of MS Word which support DOC file extensions.

This format accommodates the Office Open XML (OOXML). Documents under this Standard were given .docx extension, the “X” being for XML.

Telerik ASP.NET AJAX Controls support this format since Q3 2014 by utilizing the [Telerik Document Processing Libraries (DPL)](https://docs.telerik.com/devtools/document-processing/introduction).

The **DPL** is included in the **Telerik UI for ASP.NET AJAX** suite, see [Included Assemblies
]({%slug introduction/installation/included-assemblies%}).

In order to use this export format, be sure to reference the DPL assemblies and change the `<ExportSettings-Excel-Format>` property to `Docx`.

>caption Example

````ASP.NET
<telerik:RadGrid ID="RadGrid1" runat="server">
    <ExportSettings>
        <Excel Format="Docx" />
    </ExportSettings>
</telerik:RadGrid>
````

## Requires Assemblies

The assemblies that must be referenced in order to export RadGrid to Word are:

- `Telerik.Windows.Documents.Core.dll`
- `Telerik.Windows.Documents.Flow.dll`
- `Telerik.Windows.Zip.dll`

## Export Events


## Customizing the Export Output

- [Hiding Columns / Rows](#hiding-columns--rows)
- [Styling Columns / Rows / Cell](#styling-columns--rows--cell)
- [Default Cell Alignment](#default-cell-alignment)
- [Image Support](#image-support)

## Data Formatting

When you set **DataFormatString** of **RadGrid** columns, the format will be applied to the exported file. Note that only the [custom numeric format strings](https://msdn.microsoft.com/en-us/library/0c899ak8%28v=vs.71%29.aspx) (Example 1)will work because in most scenarios they match the [Microsoft Excel's custom numeric format](http://office.microsoft.com/en-gb/excel-help/create-a-custom-number-format-HP010342372.aspx). The built-in .NET [standard numeric format strings](https://msdn.microsoft.com/en-us/library/dwhawy9k%28v=vs.71%29.aspx) (Example 2) can still be used, but the output will not be as expected. It is important to note, that the exported file is based on the actual RadGrid cells values. When DataFormatString is applied, these values will already be formatted which could be prevented by setting the **SuppressColumnDataFormatStrings** property to true.

>caption Example 1

````ASP.NET
<telerik:GridBoundColumn DataType="System.DateTime" DataField="DateField" DataFormatString="{0:tt dd-MM(yyyy) }" />
````

>caption Example 2

````ASP.NET
<telerik:GridBoundColumn DataType="System.Double" DataField="DoubleField" DataFormatString="{0:C2}" />
````

### Hiding Columns / Rows

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

### Styling Columns / Rows / Cell

In order to style the elements of the **RadGrid** you could use the standard ASP.NET style properties such as ItemStyle,AlternatingItemStyle, HeaderStyle and FooterStyle to provide a custom style for the items of **RadGrid** control.

````ASP.NET
<AlternatingItemStyle BorderColor="Red" BorderStyle="Solid" BorderWidth="1px" />
<ItemStyle ForeColor="Green" />
<HeaderStyle BackColor="Yellow" />
````

Another approach is to hook **OnInfrastructureExporting** event handler and apply the styles in code behind. Note that styling via CSS classes is not possible.

>caption Styling Columns

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

>caption Styling Rows

````C#
xls.Row row = e.ExportStructure.Tables[0].Rows[2];
row.Style.BackColor = Color.Blue;
````
````VB
Dim row As xls.Row = e.ExportStructure.Tables(0).Rows(2)
row.Style.BackColor = Color.Blue
````

>caption Styling Cells 1

````C#
xls.Cell cell1 = e.ExportStructure.Tables[0].Cells["B2"];
cell1.Style.BackColor = Color.Yellow;
````
````VB
Dim cell1 As xls.Cell = e.ExportStructure.Tables(0).Cells("B2")
cell1.Style.BackColor = Color.Yellow
````

>caption Styling Cells 2


````C#
xls.Cell cell2 = e.ExportStructure.Tables[0].Cells[3, 3];
cell2.Style.ForeColor = Color.Tomato;
````
````VB
Dim cell2 As xls.Cell = e.ExportStructure.Tables(0).Cells(3, 3)
cell2.Style.ForeColor = Color.Tomato
````

### Default Cell Alignment

You can specify a default alignment to all cells by using **DefaultCellAlignment**. This property is supported since **Q2 2015** and its default value is NotSet. Typical values include **Left**, **Right** and **Center**.

````ASP.NET    
<ExportSettings>
    <Excel DefaultCellAlignment="Center" />
</ExportSettings>
````

Additionally you can change the default alignment on **OnInfrastructureExporting** event.

### Image Support

This format supports exporting of images. The images are included automatically in the exported document and you do not have to set any specific property. Keep in mind images with an **absolute** or **relative** path are supported, but binary images are not.

## Limitations

Exporting the following features are not supported

- Hierarchy
- Binary Images
* Automatic column/row resizing
* [Custom skins]({%slug grid/appearance-and-styling/skins%}) whose images are set via the `ImagesPath` property instead of referenced in the stylesheet.

 