---
title: GridExcelBuilder for ExcelML
page_title: GridExcelBuilder for ExcelML (XLS) Export - RadGrid
description: GridExcelBuilder for ExcelML (XLS) Export
slug: grid/functionality/exporting/excel-export/gridexcelbuilder
previous_url: controls/grid/functionality/exporting/export-formats/excelml-export/excelml-structure-/-gridexcelbuilder,controls/grid/functionality/exporting/export-formats/excelml-export/excelml-structure-gridexcelbuilder
tags: excelml,gridexcelbuilder
published: true
position: 1
---

# GridExcelBuilder for ExcelML (XLS) Export

**GridExcelBuilder** is a namespace that unifies the classes, methods and properties used by **RadGrid** to build an **ExcelML** file. The following picture illustrates the structure of the namespace in a hierarchical view.

![grid excelml scheme](images/grid-excelml-schema.jpg)

### Namespace

To work with the GridExcelBuilder you will need to use the `Telerik.Web.UI.GridExcelBuilder` namespace.

Since this contains Classes that might be available in other Libraries or Namespaces, we suggest that you use a unique name in the **using** and **Imports statement** or always use the Fully Qualified Namespace **Telerik.Web.UI.GridExcelBuilder**. 

>caption Example

````C#
using GridExcelBuilder = Telerik.Web.UI.GridExcelBuilder;

public partial class Default : System.Web.UI.Page 
{
	private void myFunction()
	{
 		// Example: Unique name for the using/Imports statement
        GridExcelBuilder.WorkBook workbook1 = new GridExcelBuilder.WorkBook();
        GridExcelBuilder.WorksheetElement worksheetElement1 = workbook1.Worksheets[0];

        // Example: Unique name for the using/Imports statement
        Telerik.Web.UI.GridExcelBuilder.WorkBook workbook2 = new Telerik.Web.UI.GridExcelBuilder.WorkBook();
        Telerik.Web.UI.GridExcelBuilder.WorksheetElement worksheetElement2 = workbook2.Worksheets[0];
	}
}
````
````VB
Imports GridExcelBuilder = Telerik.Web.UI.GridExcelBuilder

Partial Class Default
    Inherits System.Web.UI.Page

    Private Sub myFunction()
		'Example: Unique name for the using/Imports statement
        Dim workbook1 As GridExcelBuilder.WorkBook = New GridExcelBuilder.WorkBook()
        Dim worksheetElement1 As GridExcelBuilder.WorksheetElement = workbook1.Worksheets(0)
		
		'Example: Unique name for the using/Imports statement
        Dim workbook2 As Telerik.Web.UI.GridExcelBuilder.WorkBook = New Telerik.Web.UI.GridExcelBuilder.WorkBook()
        Dim worksheetElement2 As Telerik.Web.UI.GridExcelBuilder.WorksheetElement = workbook2.Worksheets(0)
    End Sub
End Class
````

## WorkBook

- **Styles** (`IStylesCollection`) - Gets the collection of [StyleElement](#styleelement)
- **Worksheets** (`IWorksheetCollection`) - Gets the collection of [WorksheetElement](#worksheetelement)

## StyleElement

- **AlignmentElement** (`AlignmentElement`) - Gets the AlignmentElement used for manipulating the horizontal/vertical alignment.
- **Borders** - represents the cell borders - please go to the [ExcelML export topic]({%slug slug grid/functionality/exporting/excel-export/excel-excelml%}) for more information.
- **CellProtection** - the **CellProtectionElement** contains information whether the current cell is protected.
- **FontStyle** - **FontStyleElement** - contains the font-related information.
- **Id** - the **Style Id**
- **InteriorStyle** - background options provided by the **InteriorStyleElement.**
- **NumberFormat** - the **NumberFormatStyleElement** is used to set the number format of a given style manually.

## WorksheetElement

- **AutoFilter** (`AutoFilterElement`) - Gets the [AutoFilterElement](#autofilterelement). 
- **IsProtected** (`bool`) - Gets or Sets (enable/disable) the worksheet protection (used in conjunction with the cell protection).
- **Name** (`string`) - Gets or Sets the name of the Worksheet
- **Table** - Gets the [TableElement](#tableelement) which holds the actual content of the worksheet **Rows**/**Cells**/**Columns.**
- **WorksheetOptions** (`WorksheetOptionsElement`) - Gets the [WorksheetOptionsElement](#worksheetoptionselement) that can be used for various Worksheet-related options.

## AutoFilterElement

- **Range** - Gets or Set the range of the **AutoFilter** in the Table header. To remove the filter controls from the header row set the **Range** property to empty string. 

>caption Example

````C#
	worksheet.AutoFilter.Range = "";
````


## TableElement

- **Rows** - **RowElement** collection.
- **Columns** - **ColumnElement** collection.

## RowElement

- **Cells** - **CellElement** collection.
- **Hidden** - **True** specifies that this row is hidden. **False** (or omitted) specifies that this row is shown.
- **Cells.GetCellByUniqueName** method - accepts a **Column** name as parameter and returns a **CellElement.**

## CellElement

- **ColumnName** - the name of the **Column** the **CellElement** belongs to.
- **Data** - the **DataElement** represents the content of the current cell.
- **HRef** - enables the content of a cell to work as a hyperlink with the specified target:

````C#
protected void RadGrid1_ExcelMLExportRowCreated(object sender, GridExportExcelMLRowCreatedArgs e)
{
    CellElement cell = e.Row.Cells.GetCellByName("ContactName");
    cell.HRef = String.Format("http://www.google.com/search?hl=en&amp;q={0}&amp;btnG=Google+Search", cell.Data.DataItem.ToString());
}
````
````VB
	    Protected Sub RadGrid1_ExcelMLExportRowCreated(sender As Object, e As GridExportExcelMLRowCreatedArgs)
	        Dim cell As CellElement = e.Row.Cells.GetCellByName("ContactName")
	        cell.HRef = [String].Format("http://www.google.com/search?hl=en&amp;q={0}&amp;btnG=Google+Search", cell.Data.DataItem.ToString())
	    End Sub
````

- **MergeAcross** - specifies the number of cells to merge across (right in LTR mode).
- **MergeDown** - specifies the number of cells to merge down.
- **StyleValue** - the **Style ID** of the relevant cell.

## DataElement

- **DataItem** - cell contents.
- **DataType** - represents the data type bound to the cell. Read-only.

## ColumnElement

-**Width** - Specifies the width of a column. This value must be greater than or equal to 0.
-**Hidden** - **True** specifies that this column is hidden. **False** (or omitted) specifies that this column is shown.

## WorksheetOptionsElement

- **AllowFreezePanes** - enable the**Frozen Panes** functionality.
- **LeftColumnRightPaneNumber** - contains the column number of the leftmost visible column in the right pane of a worksheet window.
- **FitToPage** - boolean property, which specifies whether all columns should be fitted in a single page when printing or not.
- **PageSetup - PageSetupElement** - used to set **Page** -specific options like **orientation**, **margins**, **footer**/**header**, etc.
- **SplitHorizontalOffset** - contains the number of points from the top of the window that a worksheet is split horizontally.
- **SplitVerticalOffset** - contains the number of points from the left of the window that a worksheet is split vertically.
- **TopRowBottomPanelNumber** - contains the row number of the topmost visible row in the bottom pane of a worksheet window.
- **Zoom** - specifies the percentage in which the content is zoomed when opening the exported file.

## PrintElement

- **FitHeight** - specifies the maximum count of the pages in which the content is distributed to. Meaningful when **FitToPage** is *true*.
- **PaperSize** - specifies the paper size in a value from the [PaperKind](https://msdn.microsoft.com/en-us/library/system.drawing.printing.paperkind.aspx) enumeration.

## PageSetupElement

- **PageHeaderElement** - represents the **Page Header.**
- **PageFooterElement** - represents the **Page Footer.**
- **PageLayoutElement** - contains various options to control the page layout.
- **PageMarginsElement** - defines the page margins - top, bottom, left, right.

## PageHeaderElement / PageFooterElement

- **Data** - the contents of the footer/header.
- **Margin** - the margin of the footer/header (in inches; default = 0.5).

## PageLayoutElement

- **IsCenteredHorizontal** - you can set this property to **true** to center the page horizontally on the page.
- **IsCenteredVertical** - this property determines whether the page is centered vertically on the page.
- **PageOrientation** - used to set the page orientation - **Portrait** (default) or **Landscape.**

## PageMarginsElement

- **Top** - top margin (in inches; default = 1).
- **Bottom** - bottom margin (in inches; default = 1).
- **Right** - right margin (in inches; default = 0.75).
- **Left** - left margin (in inches; default = 0.75).

## AlignmentStyleElement

- **HorizontalAlignment** - determines the horizontal alignment for the current cell.
- **VerticalAlignment** - determines the vertical alignment for the current cell.

## CellProtectionElement

- **IsProtected** - the cell will be protected (read-only) if this property is set to **true** (default).

## FontStyleElement

- **Bold** - sets/gets the relevant font style.
- **Color** - contains the font color.
- **FontName** - specifies the name of the font (case insensitive).
- **Italic** - sets/gets the relevant font style.
- **Size** - specifies the font size in points.
- **Underline** -sets/gets the relevant font style.

## InteriorStyleElement

- **Color** - the interior (background) color.
- **Pattern** - determines the fill type for the current cell.

## NumberFormatStyleElement

- **FormatType** - used to get/set the number format for the relevant cell. Visit [ExcelML export topic](https://www.telerik.com/help/aspnet-ajax/grid-excelml-export.html) for more information.

<!-- ## Limitation -->

<!-- ## See Also -->


 