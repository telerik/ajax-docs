---
title: HTML-Based Export
page_title: HTML-Based Export | UI for ASP.NET AJAX Documentation
description: HTML-Based Export
slug: grid/functionality/exporting/export-formats/word-and-excel-export/html-based-export
tags: html-based,export
published: True
position: 0
---

# HTML-Based Export



__RadGrid__ is able to export your data to __Word__ and __Excel__ using __HTML/CSS-based__ format. It is not the native binary format used by *Microsoft Office* but it is a popular way to export data and it is also officially supported by __Microsoft__:

[Microsoft® Office HTML and XML Reference](http://msdn.microsoft.com/en-us/library/aa155477%28office.10%29.aspx)

## Styles / Appearance

Due to the fact that this format is based on standard __HTML/CSS__ it is quite straightforward to controlthe appearance of the output by applying __CSS__ tags/classesto the cells/rows/tables, etc.

## ExportCellFormating / ExcelExportCellFormatting events

In order to aid the developers, we exposed the __ExportCellFormatting__ event. It fires for each cell in each *data item* in __RadGrid__.

>note Please note that the __ExcelExportCellFormatting__ event (Excel-specific) is marked as obsolete as from UI for ASP.NET AJAX Q1 2011.
>


There are two important members exposed by the __ExportCellFormattingEventArgs__:

* __Cell__ - this is a reference to the current __TableCell__. You can use it to apply specific __CSS__ style or to gain access to the __GridDataItem__ object:

>tabbedCode

````C#
	    GridDataItem item = e.Cell.Parent as GridDataItem;
````



````VB.NET
	    Dim item As GridDataItem = TryCast(e.Cell.Parent, GridDataItem)
````


>end

* __FormattedColumn__ - this property returns an object of type __GridColumn__. It helps to distinguish to which column the current cell belongs to.

>tabbedCode

````C#
	    GridColumn column = e.FormattedColumn as GridColumn;
	    string columnName = column.UniqueName;
````



````VB.NET
	    Dim column As GridColumn = TryCast(e.FormattedColumn, GridColumn)
	    Dim columnName As String = column.UniqueName
	
````


>end

## HTMLExporting event

The purpose of this event is to allow the developer to insert global styles (CSS) or configuration options (XML) to the exported file. A possible application for this event is to enable the grid lines for the current worksheet:

>tabbedCode

````C#
	    protected void RadGrid1_HTMLExporting(object sender, GridHTMLExportingEventArgs e)
	    {
	        e.Styles.Append("body { border:solid 0.1pt #CCCCCC; }");
	    }
````



````VB.NET
	    Protected Sub RadGrid1_HTMLExporting(ByVal sender As Object, ByVal e As GridHTMLExportingEventArgs) Handles RadGrid1.HTMLExporting
	        e.Styles.Append("body { border:solid 0.1pt #CCCCCC; }")
	    End Sub
````


>end

## Line Breaks

In case you need to use a line breaks when exporting to Excel or Word you can add __<br/>__ tags in order to move the text onthe next line. Nevertheless this approach will move the text in a new cell in the next row rather than creating a line break within the current cell. To get around this you can add __mso-data-placement__ style to the __<br/>__ tags.

>tabbedCode

````C#
	    protected void RadGrid1_HTMLExporting(object sender, GridHTMLExportingEventArgs e)
	    {
	        e.Styles.Append("br { mso-data-placement: same-cell; }");
	    }
````



````VB.NET
	
	    Protected Sub RadGrid1_HTMLExporting(sender As Object, e As GridHTMLExportingEventArgs)
	        e.Styles.Append("br { mso-data-placement: same-cell; }")
	    End Sub
	
````


>end

## Styling rows/cells

Thanks to the __ExportCellFormatting__ event it is really easy to apply custom styles to the rows/cells. The following code-snippet demonstrates how to style the alternating items:

>tabbedCode

````C#
	    protected void RadGrid1_ExportCellFormatting(object source, ExportCellFormattingEventArgs e)
	    {
	        GridDataItem item = e.Cell.Parent as GridDataItem;
	        if (item.ItemType == GridItemType.AlternatingItem)
	            item.Style["background-color"] = "#359AFF";
	        else
	            item.Style["background-color"] = "#2D62FF";
	    }
````



````VB.NET
	    Protected Sub RadGrid1_ExportCellFormatting(ByVal source As Object, ByVal e As ExportCellFormattingEventArgs) Handles RadGrid1.ExportCellFormatting
	        Dim item As GridDataItem = TryCast(e.Cell.Parent, GridDataItem)
	        If item.ItemType = GridItemType.AlternatingItem Then
	            item.Style("background-color") = "#359AFF"
	        Else
	            item.Style("background-color") = "#2D62FF"
	        End If
	    End Sub
	
````


>end

Sometimes the developer needs to highlight the negative values (for example: -1, -5, -10.5) - this could be achieved in the same event handler:

>tabbedCode

````C#
	    protected void RadGrid1_ExportCellFormatting(object source, ExportCellFormattingEventArgs e)
	    {
	        if (e.FormattedColumn.UniqueName == "MyColumn" && double.Parse(e.Cell.Text) < 0)
	            e.Cell.Style["background-color"] = "#FA2020";
	    }
````



````VB.NET
	
	    Protected Sub RadGrid1_ExportCellFormatting(ByVal source As Object, ByVal e As ExportCellFormattingEventArgs) Handles RadGrid1.ExportCellFormatting
	        If e.FormattedColumn.UniqueName = "MyColumn" AndAlso Double.Parse(e.Cell.Text) < 0 Then
	            e.Cell.Style("background-color") = "#FA2020"
	        End If
	    End Sub
	
````


>end

## Using ItemCreated/ItemDataBound

These events are usable in different scenarios such as applying styles to items other than __GridDataItem__

They are not as convenient as the __ExportCellFormatting__ event because the developer should use __flag__ to distinguish whether the current item/cell is being exported or displayed.

Please keep in mind that if you don't use __IgnorePaging="true"____RadGrid__ will be exported directly and the __ItemCreated__/__ItemDataBound__ events won't be fired.

>tabbedCode

````C#
	    bool isExport = false; //Export flagprotected 
	    void Button1_Click(object sender, EventArgs e)
	    {
	        isExport = true;
	        RadGrid1.MasterTableView.ExportToExcel();
	    }
	    protected void RadGrid1_ItemCreated(object sender, GridItemEventArgs e)
	    {
	        if (e.Item is GridHeaderItem && isExport)
	            e.Item.Style["background-color"] = "#EEAAEC";
	    }
````



````VB.NET
	
	    Private isExport As Boolean = False 'Export flagProtected
	    Sub Button1_Click(ByVal sender As Object, ByVal e As EventArgs) Handles Button1.Click
	        isExport = True
	        RadGrid1.MasterTableView.ExportToExcel()
	    End Sub
	    Protected Sub RadGrid1_ItemCreated(ByVal sender As Object, ByVal e As GridItemEventArgs) Handles RadGrid1.ItemCreated
	        If TypeOf e.Item Is GridHeaderItem AndAlso isExport Then
	            e.Item.Style("background-color") = "#EEAAEC"
	        End If
	    End Sub
	
````


>end

When __IgnorePaging="false"__ you should rebind __RadGrid__ manually, otherwise this approach won't work. The above code needs only one change - put __RadGrid1.Rebind()__ after the point where you set the flag.

## XML Options

__XmlOptions__ property allows you to set different options of the exported file.	The XML element contains one or more sub-elements. These include __DocumentProperties__ which is valid for Word and Excel,	__WordDocument__ which can be used when exporting to Word, and finally __ExcelWorkbook__ which applies to Microsoft Excel.

Below you could find a list with the supported sub-elements of the __DocumentProperties__.


| DocumentProperties | Represents |
| ------ | ------ |
|<o:Subject> </o:Subject>|Left-aligned data|
|<o:Author> </o:Author>|String value specifying the author's name.|
|<o:Keywords> </o:Keywords>|Comma-separated string values listing the document’s keywords.|
|<o:Description> </o:Description>|Represents the document description.|
|<o:LastAuthor> </o:LastAuthor>|The account name of the last person who made changes to the file.|
|<o:Category> </o:Category>|The category of the document.|
|<o:Manager> </o:Manager>|Manager’s name.|
|<o:Company> </o:Company>|String value holding the name of the company.|

A list of supported Word properties could be found [here]({%slug grid/functionality/exporting/export-formats/word-and-excel-export/word-format-(html-based)%}).

A list of supported Excel properties could be found [here]({%slug grid/functionality/exporting/export-formats/word-and-excel-export/excel-format-(html-based)%}).

Example:

>tabbedCode

````C#
	    protected void RadGrid1_HTMLExporting(object sender, GridHTMLExportingEventArgs e)
	    {
	        e.XmlOptions = @"<xml>
	                            <o:DocumentProperties>
		                          <o:Category>Reports</o:Category>
		                          <o:Manager>Kate Dresen</o:Manager>
		                          <o:Company>Adventure Works</o:Company>  
	                            </o:DocumentProperties>
	                         </xml>";
	    }
````



````VB.NET
	
	    Protected Sub RadGrid1_HTMLExporting(sender As Object, e As GridHTMLExportingEventArgs)
	        e.XmlOptions = "<xml><o:DocumentProperties><o:Category>Reports</o:Category><o:Manager>Kate Dresen</o:Manager><o:Company>Adventure Works</o:Company></o:DocumentProperties></xml>"
	    End Sub
	
````


>end

## Hiding columns

You can use the __HideStructureColumns__ property to hide *GridRowIndicatorColumn*, *GridExpandColumn* and *GridGroupSplitterColumn.* For the other columns types, you can use the following approach:

>tabbedCode

````C#
	    protected void Button1_Click(object sender, EventArgs e)
	    {
	        RadGrid1.MasterTableView.GetColumn("C2").Visible = false;
	        RadGrid1.MasterTableView.ExportToWord();
	    }
````



````VB.NET
	    Protected Sub Button1_Click(ByVal sender As Object, ByVal e As EventArgs) Handles Button1.Click
	        RadGrid1.MasterTableView.GetColumn("C2").Visible = False
	        RadGrid1.MasterTableView.ExportToWord()
	    End Sub
	
````


>end

>note From Q2 2013 we introduced a new propery named __Exportable__ . This property allows you tochoose whether a certain column should be included in the exported file or not. By setting this property to __false__ the related column will be excluded from the exported file. Its default value is true.
>


## Hiding items

There are two common ways to hide an item.

* __Directly__ - in the button handler when exporting from a button or on __ItemCommand__ when exporting from the built-in buttons

>tabbedCode

````C#
	    protected void RadGrid1_ItemCommand(object source, GridCommandEventArgs e)
	    {
	        if (e.CommandName == RadGrid.ExportToWordCommandName)
	            RadGrid1.MasterTableView.Items[2].Visible = false;
	    }
````



````VB.NET
	
	    Protected Sub RadGrid1_ItemCommand(ByVal source As Object, ByVal e As GridCommandEventArgs) Handles RadGrid1.ItemCommand
	        If e.CommandName = RadGrid.ExportToWordCommandName Then
	            RadGrid1.MasterTableView.Items(2).Visible = False
	        End If
	    End Sub
	
````


>end

>tabbedCode

````C#
	    protected void Button1_Click(object sender, EventArgs e)
	    {
	        RadGrid1.MasterTableView.Items[2].Visible = false;
	        RadGrid1.MasterTableView.ExportToWord();
	    }
````



````VB.NET
	
	    Protected Sub Button1_Click(ByVal sender As Object, ByVal e As EventArgs) Handles Button1.Click
	        RadGrid1.MasterTableView.Items(2).Visible = False
	        RadGrid1.MasterTableView.ExportToWord()
	    End Sub
	
````


>end

* __On ItemCreated / ItemDataBound__ - this approach should be used when __IgnorePaging="true"__ or when you call RadGrid.Rebind before exporting.

>tabbedCode

````C#
	    bool isWordExport = false;
	    protected void RadGrid1_ItemCommand(object source, GridCommandEventArgs e)
	    {
	        if (e.CommandName == RadGrid.ExportToWordCommandName)
	            isWordExport = true;
	    }
	    protected void RadGrid1_ItemCreated(object sender, GridItemEventArgs e)
	    {
	        if (isWordExport && e.Item.ItemIndex == 2)
	            e.Item.Visible = false;
	    }
````



````VB.NET
	    Private isWordExport As Boolean = False
	    Protected Sub RadGrid1_ItemCommand(ByVal source As Object, ByVal e As GridCommandEventArgs)
	        If e.CommandName = RadGrid.ExportToWordCommandName Then
	            isWordExport = True
	        End If
	    End Sub
	    Protected Sub RadGrid1_ItemCreated(ByVal sender As Object, ByVal e As GridItemEventArgs)
	        If isWordExport AndAlso e.Item.ItemIndex = 2 Then
	            e.Item.Visible = False
	        End If
	    End Sub
	
````


>end

## Resizing/Aligning Columns

There are various ways to set the width of a given column.

* declarative approach:

````ASPNET
	     
							<telerik:GridBoundColumn ... HeaderStyle-Width="20px" />
				
````



* in code-behind - before export:

>tabbedCode

````C#
	    protected void Button1_Click(object sender, EventArgs e)
	    {
	        RadGrid1.MasterTableView.GetColumn("C1").HeaderStyle.Width = Unit.Pixel(20);
	        RadGrid1.MasterTableView.ExportToExcel();
	    }
````



````VB.NET
	
	    Protected Sub Button1_Click(ByVal sender As Object, ByVal e As EventArgs) Handles Button1.Click
	        RadGrid1.MasterTableView.GetColumn("C1").HeaderStyle.Width = Unit.Pixel(20)
	        RadGrid1.MasterTableView.ExportToExcel()
	    End Sub
	
````


>end

* in code-behind - on __TH__ elements

>tabbedCode

````C#
	    protected void RadGrid1_ItemCreated(object sender, GridItemEventArgs e)
	    {
	        if (e.Item is GridHeaderItem && isExport)
	        {
	            foreach (TableCell cell in e.Item.Cells)
	                cell.Style["width"] = "20px";
	        }
	    }
````



````VB.NET
	
	    Protected Sub RadGrid1_ItemCreated(ByVal sender As Object, ByVal e As GridItemEventArgs) Handles RadGrid1.ItemCreated
	        If TypeOf e.Item Is GridHeaderItem AndAlso isExport Then
	            For Each cell As TableCell In e.Item.Cells
	                cell.Style("width") = "20px"
	            Next
	        End If
	    End Sub
	
````


>end

## Alignment

You can specify the horizontal alignment, using the __text-align____CSS__ attribute. Please note that it is not possible to apply this attribute to the whole header row - you should set it to each cell (__TH__) separately. The aforementioned limitation concerns only to the header items.

## Unsupported scenarios

There are several limitations that you should have in mind:

* embedded images are not supported

* exporting invisible __RadGrid__ - to avoid problems with missing content, you should temporary show __RadGrid__ before export

* __OpenOffice__, __AbiWord__, etc doesn't support this standard so they won't show the files properly

* in theory all __Microsoft Office__ versions from __2000__ up might work, although we don't guarantee that any version, prior to __2003__ will display the __Office HTML__ formats as expected
