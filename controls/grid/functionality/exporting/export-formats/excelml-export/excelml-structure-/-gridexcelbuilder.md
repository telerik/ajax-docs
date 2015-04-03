---
title: ExcelML structure / GridExcelBuilder
page_title: ExcelML structure / GridExcelBuilder | UI for ASP.NET AJAX Documentation
description: ExcelML structure / GridExcelBuilder
slug: grid/functionality/exporting/export-formats/excelml-export/excelml-structure-/-gridexcelbuilder
tags: excelml,structure,/,gridexcelbuilder
published: True
position: 1
---

# ExcelML structure / GridExcelBuilder



## Overview

__GridExcelBuilder__is a namespace that unifies the classes, methods and properties used by __RadGrid__to build an __ExcelML__file. The following table shows the structure of the namespace in a hierarchical view.![grid excelml scheme](images/grid_excelml_scheme.jpg)

The __WorkBook__ element is not directly accessible when using the built-in export however it can (and should ) be used when using the __GridExcelBuilder__ to export manually.

## WorksheetElement

__AutoFilter__ - define the range of the __AutoFilter__ header. To remove the filter controls from the header row set the __Range__ property to empty string. (e.Worksheet.AutoFilter.Range = "").

__IsProtected__ - enable/disable the worksheet protection (used in conjunction with the cell protection).

__Name__ - the name of the worksheet as displayed in __Microsoft Excel.__

__Table__ - this element holds the actual content of the worksheet - __Rows__/__Cells__/__Columns.__

__WorksheetOptions__ - defines various Worksheet-related options (for more information - see below).

## TableElement

__Rows__ - __RowElement__ collection.

__Columns__ - __ColumnElement__ collection.

## RowElement

__Cells__ - __CellElement__ collection.

__Hidden__ - __True__ specifies that this row is hidden. __False__ (or omitted) specifies that this row is shown.

__Cells.GetCellByUniqueName__ method - accepts a __Column__ name as parameter and returns a __CellElement.__

## CellElement

__ColumnName__ - the name of the __Column__ the __CellElement__ belongs to.

__Data__ - the __DataElement__ represents the content of the current cell.

__HRef__ - enables the content of a cell to work as a hyperlink with the specified target:

>tabbedCode

````C#
	    protected void RadGrid1_ExcelMLExportRowCreated(object sender, GridExportExcelMLRowCreatedArgs e)
	    {
	        CellElement cell = e.Row.Cells.GetCellByName("ContactName");
	        cell.HRef = String.Format("http://www.google.com/search?hl=en&amp;q={0}&amp;btnG=Google+Search", cell.Data.DataItem.ToString());
	    }
````



````VB.NET
	    Protected Sub RadGrid1_ExcelMLExportRowCreated(sender As Object, e As GridExportExcelMLRowCreatedArgs)
	        Dim cell As CellElement = e.Row.Cells.GetCellByName("ContactName")
	        cell.HRef = [String].Format("http://www.google.com/search?hl=en&amp;q={0}&amp;btnG=Google+Search", cell.Data.DataItem.ToString())
	    End Sub
````


>end

__MergeAcross__ - specifies the number of cells to merge across (right in LTR mode).

__MergeDown__ - specifies the number of cells to merge down.

__StyleValue__ - the __Style____ID__ of the relevant cell.

## DataElement

__DataItem__ - cell contents.

__DataType__ - represents the data type bound to the cell. Read-only.

____

## ColumnElement

__Width__ - Specifies the width of a column. This value must be greater than or equal to 0.

__Hidden__ - __True__ specifies that this column is hidden. __False__ (or omitted) specifies that this column is shown.

## WorksheetOptionsElement

__AllowFreezePanes__ - enable the__Frozen Panes__ functionality.

__LeftColumnRightPaneNumber__- contains the column number of the leftmost visible column in the right pane of a worksheet window.

__FitToPage__- boolean property, which specifies whether all columns should be fitted in a single page when printing or not.

__PageSetup - PageSetupElement__ - used to set __Page__ -specific options like __orientation__, __margins__, __footer__/__header__, etc.

__SplitHorizontalOffset__ - contains the number of points from the top of the window that a worksheet is split horizontally.

__SplitVerticalOffset__ - contains the number of points from the left of the window that a worksheet is split vertically.

__TopRowBottomPanelNumber__- contains the row number of the topmost visible row in the bottom pane of a worksheet window.

__Zoom__- specifies the percentage in which the content is zoomed when opening the exported file.

## PrintElement

__FitHeight__ - specifies the maximum count of the pages in which the content is distributed to. Meaningful when __FitToPage__ is *true*.

__PaperSize__ - specifies the paper size in a value from the [PaperKind](http://msdn.microsoft.com/en-us/library/system.drawing.printing.paperkind.aspx) enumeration.

## PageSetupElement

__PageHeaderElement__ - represents the __Page Header.__

__PageFooterElement -__represents the __Page Footer.__

__PageLayoutElement__ - contains various options to control the page layout.

__PageMarginsElement -__ defines the page margins - top, bottom, left, right.

## PageHeaderElement / PageFooterElement

__Data__ - the contents of the footer/header.

__Margin__ - the margin of the footer/header (in inches; default = 0.5).

## PageLayoutElement

__IsCenteredHorizontal__ - you can set this property to __true__ to center the page horizontally on the page.

__IsCenteredVertical__ - this property determines whether the page is centered vertically on the page.

__PageOrientation__ - used to set the page orientation - __Portrait__ (default) or __Landscape.__

## PageMarginsElement

__Top__ - top margin (in inches; default = 1).

__Bottom__ - bottom margin (in inches; default = 1).

__Right__ - right margin (in inches; default = 0.75).

__Left__ - left margin (in inches; default = 0.75).

## StyleElement

__AlignmentElement__ - determines the horizontal/vertical alignment.

__Borders__ - represents the cell borders - please go to the [ExcelML export topic]( http://www.telerik.com/help/aspnet-ajax/grid-excelml-export.html ) for more information.

__CellProtection__ - the __CellProtectionElement__ contains information whether the current cell is protected.

__FontStyle__ - __FontStyleElement__ - contains the font-related information.

__Id__ - the __Style Id__

__InteriorStyle__ - background options provided by the __InteriorStyleElement.__

__NumberFormat__- the __NumberFormatStyleElement__ is used to set the number format of a given style manually.

## AlignmentStyleElement

__HorizontalAlignment__ - determines the horizontal alignment for the current cell.

__VerticalAlignment__ - determines the vertical alignment for the current cell.

## CellProtectionElement

__IsProtected__ - the cell will be protected (read-only) if this property is set to __true__ (default).

## FontStyleElement

__Bold__ - sets/gets the relevant font style.

__Color__ -contains the font color.

__FontName__ - specifies the name of the font (case insensitive).

__Italic__ - sets/gets the relevant font style.

__Size__ - specifies the font size in points.

__Underline__ -sets/gets the relevant font style.

## InteriorStyleElement

__Color__ - the interior (background) color.

__Pattern__ - determines the fill type for the current cell.

## NumberFormatStyleElement

__FormatType -__used to get/set the number format for the relevant cell. Visit [ExcelML export topic](http://www.telerik.com/help/aspnet-ajax/grid-excelml-export.html) for more information.
