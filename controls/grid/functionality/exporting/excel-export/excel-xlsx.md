---
title: Xlsx (XLSX)
page_title: Excel-Xlsx (OOXML) Export - RadGrid
description: Learn how to export Grid data to Excel in XLSX format for seamless data sharing and reporting.
slug: grid/functionality/exporting/excel-export/excel-xlsx
previous_url: controls/grid/functionality/exporting/export-formats/xlsx-and-docx-export
tags: xlsx,and,docx,export
published: True
position: 4
---

# Excel-Xlsx (OOXML) Export

XLSX is well-known format for Microsoft Excel documents that was introduced by Microsoft with the release of Microsoft Office 2007 and is based on the Office Open XML (OOXML) standard ECMA-376. the new format is a zip package that contains a number of XML files. The underlying structure and files can be examined by simply unzipping the .xlsx file.

Telerik ASP.NET AJAX Controls support this format since Q3 2014 by utilizing the [Telerik Document Processing Libraries (DPL)](https://docs.telerik.com/devtools/document-processing/introduction).

The **DPL** is included in the **Telerik UI for ASP.NET AJAX** suite, see [Included Assemblies
]({%slug introduction/installation/included-assemblies%}).


## Required Assemblies

The assemblies that must be referenced in order to export RadGrid to Excel are:

- Telerik.Windows.Documents.Core.dll
- Telerik.Windows.Documents.Spreadsheet.dll
- Telerik.Windows.Documents.Spreadsheet.FormatProviders.OpenXml.dll
- Telerik.Windows.Zip.dll

More information about the assemblies and how to reference them in your project can be found in the [Included assemblies]({%slug introduction/installation/included-assemblies%}) help article.

## Usage

In order to use this export format, be sure to reference the DPL assemblies and change the **Excel-Format** property to **Xlsx** within the `ExportSettings` element.

>caption Example

````ASP.NET
<telerik:RadGrid ID="RadGrid1" runat="server">
    <ExportSettings>
        <Excel Format="Xlsx" />
    </ExportSettings>
</telerik:RadGrid>
````

## Export events

Server-Side events triggered for the Biff format.

- **OnInfrastructureExporting**: This event is triggered when the Export Structure is ready. It can be used to change the Export Structure before exporting. The Export Structure can be accessed from the Event argument - (`Telerik.Web.UI.ExportInfrastructure.ExportStructure`)**e.ExportStructure**

- **OnGridExporting**: This event is triggered when the Grid is exporting regardless of the Export Format. It can also be used to access the output, however, unlike in the *OnInfrastructureExporting* event, the output returns a string - (`string`)**e.ExportOutput**. 

- **OnExcelExportCellFormatting**: This is event is triggered when the Grid export functionality formats the cell. It fires for every cell and can be used to apply additional styles to them.

For more details, check out the [Styling](#styling) section.


## Customizing the Export Output

- [Formatting Cell Values](#formatting-cell-values)
- [Hiding Columns / Rows](#hiding-columns--rows)
- [Styling Columns / Rows / Cell](#styling-columns--rows--cell)
- [Default Cell Alignment](#default-cell-alignment)
- [Image Support](#image-support)
- [Auto-fit columns width](#auto-fit-columns-width)
- [Generate Export Output](#generate-export-output)

### Formatting Cell Values

When you set **DataFormatString** of **RadGrid** columns, the format will be applied to the exported file. 

Note that only the [custom numeric format strings](https://msdn.microsoft.com/en-us/library/0c899ak8%28v=vs.71%29.aspx) (Example 1) will work because in most scenarios they match the [Microsoft Excel's custom numeric format](http://office.microsoft.com/en-gb/excel-help/create-a-custom-number-format-HP010342372.aspx). 

The built-in .NET [standard numeric format strings](https://msdn.microsoft.com/en-us/library/dwhawy9k%28v=vs.71%29.aspx) (Example 2) can still be used, but the output will not be as expected. 

It is important to note, that the exported file is based on the actual RadGrid cells values. When DataFormatString is applied, these values will already be formatted which could be prevented by setting the **SuppressColumnDataFormatStrings** property to true.

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

**Xlsx** supports exporting of images. The images are included automatically in the exported document and you do not have to set any specific property. Keep in mind images with an **absolute** or **relative** path are supported, but binary images are not.

### Auto-fit columns width

For the XLSX format only, the R1 2020 release introduces the option to set the AutoWidth setting for the exported columns. It is based on the AutoWidth settins of the RadSpreadProcessing Library explained in [RadSpreadProcessing - Auto Fit Columns Width](https://docs.telerik.com/devtools/document-processing/libraries/radspreadprocessing/working-with-rows-and-columns/resizing#auto-fit-columns-width). You can check the [Export to Excel](https://demos.telerik.com/aspnet-ajax/grid/examples/functionality/exporting/excel-export/defaultcs.aspx) online demo for a practical demonstration.

````ASP.NET
<ExportSettings>
    <Excel Format="Xlsx" AutoFitColumnWidth="AutoFitAll" />
</ExportSettings>
````

The enum type for the AutoFitColumnWidth is Telerik.Web.UI.Export.ExportAutoFitWidthMode with the following options:

- `Disabled` (*default*) - The width of the columns is the default one or the one defined in HeaderStyle-Width property of the column
- `AutoFitExpandOnly` - Does not affect columns that are wide enough to accommodate all cells in the column
- `AutoFitAll` - Resizes all columns so the column width is equal to the width of the widest cell in it
- `ExpandToFitNumberValuesWidth` - It resizes columns with cells that contain only number values

### Generate Export Output

RadGrid provides a convenient way to extract the XLSX output as a string without actually exporting - this is done via the `GenerateXlsxOutput()` method. It is available for .NET version 4.0+ and in Telerik UI for ASP.NET AJAX versions R2 2019 and later.

As of R1 2021, the `GenerateXlsxOutput()` method has a few overloads introduced that allow you to receive the Workbook object or byte[] of the export output.

This can be used to get the content out of multiple grids simultaneously, then modify or save it. You can check the following live demos which demonstrate a practical implementation.

1. [Export Multiple Grids](https://demos.telerik.com/aspnet-ajax/grid/examples/functionality/exporting/excel-export-multiple-grids/defaultcs.aspx?product=grid)
2. [Export Grid to a Preformatted Template file](https://demos.telerik.com/aspnet-ajax/grid/Examples/Functionality/Exporting/Excel-Export-To-Template-File/DefaultCS.aspx)

Example:

````C#
// alias for the using used for shorter definition of the Workbook type
using xlsx = Telerik.Windows.Documents.Spreadsheet.Model;

// various ways to use the GenerateXlsxOutput() method
byte[] outputAsByteArray =  RadGrid1.MasterTableView.GenerateXlsxOutput<byte[]>() as byte[];
xlsx.Workbook outputAsWorkbook = RadGrid1.MasterTableView.GenerateXlsxOutput<xlsx.Workbook>() as xlsx.Workbook;
string outputAsString = RadGrid1.MasterTableView.GenerateXlsxOutput<string>() as string;
string outputAsString2 = RadGrid1.MasterTableView.GenerateXlsxOutput();
````
````VB
' alias for the Import used for shorter definition of the Workbook type
Imports xlsx = Telerik.Windows.Documents.Spreadsheet.Model

' various ways to use the GenerateXlsxOutput() method
Dim outputAsByteArray As Byte() = TryCast(RadGrid1.MasterTableView.GenerateXlsxOutput(Of Byte())(), Byte())
Dim outputAsWorkbook As xlsx.Workbook = TryCast(RadGrid1.MasterTableView.GenerateXlsxOutput(Of xlsx.Workbook)(), xlsx.Workbook)
Dim outputAsString As String = TryCast(RadGrid1.MasterTableView.GenerateXlsxOutput(Of String)(), String)
Dim outputAsString2 As String = RadGrid1.MasterTableView.GenerateXlsxOutput()
````

>important **If you are not actually exporting** the Grid after calling the GenerateXlsxOutput()and the Response is not cleared, the state of the grids may change. This is especially true when the **IgnorePaging** and **HideStructureColumns** properties are enabled. To return the original state, you can set **AllowPaging** to **true** then call the `Rebind()` method of the Grid. Alternatively, you can try using the `Response.Redirect(Request.RawUrl);` approach.

## Limitations

- No hierarchy support
- No automatic row resizing
- [Custom skins]({%slug grid/appearance-and-styling/skins%}) whose images are set via the `ImagesPath` property instead of referenced in the stylesheet.
