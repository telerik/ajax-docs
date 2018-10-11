---
title: Overview
page_title: Exporting Overview | RadGrid for ASP.NET AJAX Documentation
description: Overview
slug: grid/functionality/exporting/overview
tags: overview
published: True
position: 0
---

# Exporting Overview

This article provides an overview of the RadGrid Export functionality—properties, events, common questions and issues.

Below you can find the following sections:

* [Supported Formats](#supported-formats)
* [Properties and Events](#properties-and-events)
	* [OnGridExporting Event](#properties-and-events-OnGridExporting)
* [FAQ and Application Scenarios](#faq-and-application-scenarios)
	* [Export Large Amount of Data](#export-large-amount-of-data)
	* [Export with Custom Paging](#export-with-custom-paging)
	* [Export from AJAX-enabled RadGrid](#export-from-ajax-enabled-radgrid)
	* [Nested Grids / Exporting Multiple RadGrids](#nested-grids--exporting-multiple-radgrids)
	* [IgnorePaging not working on DetailTables Excel Export](#ignorepaging-not-working-on-detailtables-excel-export)
	* [Export with Client-side Binding](#export-with-client-side-binding)
	* [Export in SharePoint Web Part](#export-in-sharepoint-web-part)
	* [Export in Web Farm](#export-in-web-farm)
	* [Export over SSL](#export-over-ssl)
	* [Export Template Columns](#export-template-columns)
* [Obsolete Methods](#obsolete-methods)
* [Live Demos](#live-demos)

## Supported Formats

*Telerik RadGrid* can export your data to the following formats:

|  **Format**  |  **Sub-format**  |  **Inner type**  |  **Command name**  |  **Predefined constants**  |  **Server-side method**  |  **Client-side method**  |
| ------ | ------ | ------ | ------ | ------ | ------ | ------ |
|PDF|n/a|binary|ExportToPdf|RadGrid.ExportToPdfCommandName|ExportToPdf()|ExportToPdf()|
|Excel|HTML|HTML|ExportToExcel|RadGrid.ExportToExcelCommandName|ExportToExcel()|ExportToExcel()|
|Excel|ExcelML|XML|ExportToExcel|RadGrid.ExportToExcelCommandName|ExportToExcel()|ExportToExcel()|
|Word|n/a|HTML|ExportToWord|RadGrid.ExportToWordCommandName|ExportToWord()|ExportToWord()|
|CSV|n/a|text|ExportToCsv|RadGrid.ExportToCsvCommandName|ExportToCSV()|ExportToCsv()|

>tip We strongly recommend that you use [Advanced Data Binding](http://www.telerik.com/help/aspnet-ajax/grid-advanced-data-binding.html) when exporting the **RadGrid**.

>important RadGrid exporting works only when the **ViewState** is persisted in a hidden field (the default setting). In case you are using an analternative way to persist the **ViewState**, such as storing it in a database or a session, you will receive an exception.

## Properties and Events

In addition to the export format's specific properties, the **ExportSettings** group exposes several common properties that control its behavior:

* **ExportOnlyData**—As the name says, this property is helpful when you want to export only the data - e.g. to exclude the controls from the exported file.

* **IgnorePaging**—When you enable *IgnorePaging*, *RadGrid* will rebind before export in order to fetch all the data from your datasource.

* **OpenInNewWindow**—By default, the exported file will be handled by the program associated with the appropriate file type.If you prefer to give the user the option to choose whether to save, open (inline) or cancel you should enable this property.

	>tip Even if you set **OpenInNewWindow="false"**, that doesn't guarantee that the file will be opened inside the browser window. The way the exported file will be displayed inline depends on the *OS* / *browser* settings.The end-user could manage the file extensions with programs like [NirSoft's FileTypesMan](http://www.nirsoft.net/utils/file_types_manager.html). For browsers, other than *Internet Explorer* , you should use the built-in settings.
>


* **FileName**—This is helpful when you want to give a predefined name for your file. Please note that the file name can't be longer than 256 symbols.

	**Unicode** names are not supported out-of-the-box for **Internet Explorer 6** and **7**. Of course, you can manually encode the file name and it will be shown properly in the "**Save**" dialog (**OpenInNewWindow**="**true**").

	**HttpUtility.UrlEncode("unicode string", System.Text.Encoding.UTF8);**

	>tip  **Internet Explorer** ignores the **FileName** property when **OpenInNewWindow** is set to false.



* **HideStructureColumns**—Removes the structure columns - *GridRowIndicatorColumn*, *GridExpandColumn* as well as the first *GridGroupSplitterColumn*. Note that this property will affect only the first level in hierarchical *RadGrids*.


	**ASP.NET**

		<ExportSettings
		   HideStructureColumns="true"
		   ExportOnlyData="true"
		   IgnorePaging="true"
		   OpenInNewWindow="true">
		</ExportSettings>


	>tip You can receive this error if the file name is longer than 256 symbols:
	> **`<filename>.<extension>` could not be found. Check the spelling of the file name, and verify that thefile location is correct.** 



* **SuppressColumnDataFormatStrings**—This property will help avoid exporting already formatted values which would cause Microsoft Excel to treat them as string values.Enabling this functionality will result in rebinding the control before exporting. Note that even if both *IgnorePaging* and*SuppressColumnDataFormatStrings* are enabled, RadGrid will rebind only once.

* **UseItemStyles**—As the name says, this property gives you the ability to apply the item styles to the exported file.

### OnGridExporting Event

This event is usable in many scenarios when you want to modify the output file. For example you may want to add some custom information above *RadGrid* or when you want to remove/add/replace parts of the content.The only limitation applies to the *PDF* export because by the time the **OnGridExporting** event is raised, the *PDF* is already generated. For more information, please visit the dedicated [PDF format topic]({%slug grid/functionality/exporting/export-formats/pdf-export%}) which introduces the **OnPdfExporting** event that is designed specifically for this format.

Below is the bare bone logic for **OnGridExporting** event:



````C#
protected void RadGrid1_GridExporting(object source, GridExportingArgs e)
{
    switch (e.ExportType)
    {
        case ExportType.Excel:
            //do something with the e.ExportOutput value      
            break;
        case ExportType.ExcelML:
            //do something with the e.ExportOutput value     
            break;
        case ExportType.Word:
            //do something with the e.ExportOutput value       
            break;
        case ExportType.Csv:
            //do something with the e.ExportOutput value    
            break;
        case ExportType.Pdf:
            //you can't change the output here - use the PdfExporting event instead   
            break;
    }
}
````
````VB
Protected Sub RadGrid1_GridExporting(ByVal source As Object, ByVal e As GridExportingArgs)
    Select Case e.ExportType
        Case ExportType.Excel
            'do something with the e.ExportOutput value   
            Exit Select
        Case ExportType.ExcelML
            'do something with the e.ExportOutput value
            Exit Select
        Case ExportType.Word
            'do something with the e.ExportOutput value  
            Exit Select
        Case ExportType.Csv
            'do something with the e.ExportOutput value 
            Exit Select
        Case ExportType.Pdf
            'you can't change the output here - use the PdfExporting event instead   
    End Select
End Sub
````


## FAQ and Application Scenarios


This section lists common questions, issues and scenarios together with answers and solutions:

* [Export Large Amount of Data](#export-large-amount-of-data)
* [Export with Custom Paging](#export-with-custom-paging)
* [Export from AJAX-enabled RadGrid](#export-from-ajax-enabled-radgrid)
* [Nested Grids / Exporting Multiple RadGrids](#nested-grids--exporting-multiple-radgrids)
* [IgnorePaging not working on DetailTables Excel Export](#ignorepaging-not-working-on-detailtables-excel-export)
* [Export with Client-side Binding](#export-with-client-side-binding)
* [Export in SharePoint Web Part](#export-in-sharepoint-web-part)
* [Export in Web Farm](#export-in-web-farm)
* [Export over SSL](#export-over-ssl)
* [Export Template Columns](#export-template-columns)

### Export Large Amount of Data

We strongly recommend that you do not to export large amounts of data because there is a chance to encounter an exception (*Timeout* or *OutOfMemory*) if more than one user tries to export the same data simultaneously. **RadGrid** is not suitable for such scenarios and therefore we suggest that you limit the number of columns and rows. Also it is important to note that the hierarchy and the nested controls have a considerable effect on the performance in this scenario.

### Export with Custom Paging

When you have custom paging enabled for your grid, you need to set the *PageSize* property of the grid to be equal to the *VirtualItemCount* in order to export all records successfully with *IgnorePaging* set to *true*. Here is an example:



````C#
protected void Button1_Click(object sender, EventArgs e)
{
    RadGrid1.PageSize = RadGrid1.MasterTableView.VirtualItemCount;
    RadGrid1.ExportSettings.IgnorePaging = true;
    RadGrid1.ExportSettings.OpenInNewWindow = true;
    RadGrid1.MasterTableView.ExportToExcel();
}
````
````VB
Protected Sub Button1_Click(ByVal sender As Object, ByVal e As EventArgs)
    RadGrid1.PageSize = RadGrid1.MasterTableView.VirtualItemCount
    RadGrid1.ExportSettings.IgnorePaging = True
    RadGrid1.ExportSettings.OpenInNewWindow = True
    RadGrid1.MasterTableView.ExportToExcel()
End Sub
````


### Export from AJAX-enabled RadGrid

The exporting feature works only with regular postbacks. This means, that the asynchronous postback should be canceled when performing an export. As of Q1 2016, the default built-in export buttons perform full postbacks, so it is not needed to manually exclude them from AJAX, even the RadGrid control is AJAX-enabled, in order to perform export with them.

More details on manually canceling the asynchronous postback can be found in following resources: 

* [Export from ajaxified grid]({%slug grid/how-to/exporting/what-you-should-have-in-mind/export-from-ajaxified-grid%})

* [Exclude controls from ajaxifying]({%slug ajaxmanager/how-to/exclude-controls-from-ajaxifying%})

* [Export RadGrid content to Excel/Word/CSV/PDF with Ajax enabled](http://www.telerik.com/community/code-library/aspnet-ajax/general/export-radgrid-content-to-excel-word-csv-pdf-with-ajax-enabled.aspx)

### Nested Grids / Exporting Multiple RadGrids

The following code-library project demonstrates how to export nested *RadGrids* to*PDF*/*Excel* (HTML): [Export multiple RadGrids in single PDF/Excel file](http://www.telerik.com/support/code-library/export-multiple-radgrids-in-single-pdf-excel-file)

### IgnorePaging not Working on DetailTables Excel Export

This applies to the XLS format when used together with hierarchy.

If you want to export all data in the detail grids, you need to **disable their paging** in addition to setting `IgnorePaging` to `true` for the main grid. You can do this in the `ItemCommand` event. See example below.

This is necessary because the table views take the necessary information for their first page only.

````C#
protected void RadGrid1_ItemCommand(object sender, GridCommandEventArgs e)
{
	if (e.CommandName.Contains("Export"))
	{
		//disable paging on the main grid for the export operation
		RadGrid1.ExportSettings.IgnorePaging = false;
		//expand detail tables
		RadGrid1.MasterTableView.HierarchyDefaultExpanded = true;
		RadGrid1.MasterTableView.DetailTables[0].HierarchyDefaultExpanded = true;
		foreach (GridTableView tbl in RadGrid1.MasterTableView.DetailTables)
		{
			tbl.HierarchyDefaultExpanded = true;
			//disable paging for the detail grids for the export operation
			tbl.AllowPaging = false;
		}
	}
}
````
````VB
Protected Sub RadGrid1_ItemCommand(sender As Object, e As GridCommandEventArgs) Handles RadGrid1.ItemCommand
	If e.CommandName.Contains("Export") Then
		'disable paging on the main grid for the export operation
		RadGrid1.ExportSettings.IgnorePaging = False
		'expand detail tables
		RadGrid1.MasterTableView.HierarchyDefaultExpanded = True
		RadGrid1.MasterTableView.DetailTables(0).HierarchyDefaultExpanded = True
		For Each tbl As GridTableView In RadGrid1.MasterTableView.DetailTables
			tbl.HierarchyDefaultExpanded = True
			'disable paging for the detail grids for the export operation
			tbl.AllowPaging = False
		Next
	End If
End Sub
````

### Export with Client-side Binding

Exporting with **client-side binding** is not supported, **RadGrid** must be bound **server-side**, otherwise you will receive an empty file.

### Export in SharePoint Web Part

There is a special flag (`_spFormOnSubmitCalled`) in **SharePoint** that prevents the form from being submitted twice. The flag is set when the form is submitted and then cleared when the response is received. When using the exporting functionality, this flag won't be cleared because the response is redirected and therefore all further postbacks will be blocked. For more details see the [Controls not functional after Export to Excel or Export to PDF of Telerik in Sharepoint Application page](http://www.faisalmb.com/post/Controls-not-functional-after-Export-to-Excel-or-Export-to-PDF-of-Telerik-in-Sharepoint-Application-page.aspx) blog post.

### Export in Web Farm

If you receive "Invalid ViewState" or similar exception in web farm scenario, you can try to copy the *machinekey* from your *web.config* to the *machine.config* of the web server.

### Export over SSL

You might receive the following error message when using the export feature over *SSL* in *Internet Explorer*:

> *Internet Explorer* cannot download  *'file'* from  *'server'*. *Internet Explorer* was not able to open this Internet site. The requested site is either unavailable or cannot be found. Please try again later."


In order to prevent this error, add the following lines just before the exporting:

````C#
RadGrid1.Page.Response.ClearHeaders();
RadGrid1.Page.Response.Cache.SetCacheability(HttpCacheability.Private);
````
````VB
RadGrid1.Page.Response.ClearHeaders()
RadGrid1.Page.Response.Cache.SetCacheability(HttpCacheability.[Private])
````

### Export Template Columns

Exporting usually contains only data. This applies mostly to Excel/CSV export. Template columns can contain arbitrary HTML and controls, and may not get exported as expected. In such case, the developer must provide `Text` for the cell when exporting the grid. For example:

````C#
protected void RadGrid1_PreRender(object sender, EventArgs e)
{
	//generate text for the template columns for the export
	
	if (RadGrid1.IsExporting) { //check if grid is exporting
		foreach (GridDataItem item in RadGrid1.Items) { //loop through the grid items
			GenerateText(ref item); //generate text for each template column
		}
	}
}

protected void GenerateText(GridDataItem gridItem)
{
	//you can use gridItem["columnUniqueName"].FindControl() to access child controls if needed
	gridItem("myTemplateColumn").Text = gridItem.DataItem("SomeColumn").ToString();
	//generate a string for Excel here, according to the concrete business logic
	//and according to the Excel rules (e.g., special new line characters, simple strings without HTML, etc.)
}
````
````VB
Protected Sub RadGrid1_PreRender(sender As Object, e As EventArgs) Handles RadGrid1.PreRender
	'generate text for the template columns for the export

	If RadGrid1.IsExporting Then 'check if grid is exporting
		For Each item As GridDataItem In RadGrid1.Items 'loop through the grid items
			GenerateText(item) 'generate text for each template column
		Next
	End If
End Sub

Protected Sub GenerateText(ByRef gridItem As GridDataItem)
	'you can use gridItem["columnUniqueName"].FindControl() to access child controls if needed
	gridItem("myTemplateColumn").Text = gridItem.DataItem("SomeColumn").ToString()
	'generate a string for Excel here, according to the concrete business logic
	'and according to the Excel rules (e.g., special new line characters, simple strings without HTML, etc.)
End Sub
````


## Obsolete Methods

The following methods are marked as obsolete as of *RadGrid* v4.6 (part of *UIfor ASP.NET.AJAX*)

* **server-side:**

	* *ExportToWord(fileName, dataOnly, ignorePaging)*
	
	* *ExportToExcel(fileName, dataOnly, ignorePaging)*
	
	* *ExportToWord2007(fileName, dataOnly, ignorePaging)*
	
	* *ExportToExcel2007(fileName, dataOnly, ignorePaging)*

* **client-side:**

	* *ExportToWord(fileName)*
	
	* *ExportToExcel(fileName)*

## Live Demos

For real-life example, review the online demos:

* [Grid - Word/CSV Export](http://demos.telerik.com/aspnet-ajax/grid/examples/functionality/exporting/export-word-csv/defaultcs.aspx)
* [Grid - Export to Excel](http://demos.telerik.com/aspnet-ajax/grid/examples/functionality/exporting/excel-export/defaultcs.aspx)
* [Grid - Export to PDF](http://demos.telerik.com/aspnet-ajax/grid/examples/functionality/exporting/pdf-export/defaultcs.aspx)
