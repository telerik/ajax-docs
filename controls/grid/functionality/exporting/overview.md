---
title: Exporting Overview
page_title: Overview | UI for ASP.NET AJAX Documentation
description: Overview
slug: grid/functionality/exporting/overview
tags: overview
published: True
position: 0
---

# Exporting Overview



## Supported formats

*Telerik RadGrid* can export your data to the following formats:


>caption  

|  __Format__  |  __Sub-format__  |  __Inner type__  |  __Command name__  |  __Predefined constants__  |  __Server-side method__  |  __Client-side method__  |
| ------ | ------ | ------ | ------ | ------ | ------ | ------ |
|PDF|n/a|binary|ExportToPdf|RadGrid.ExportToPdfCommandName|ExportToPdf()|ExportToPdf()|
|Excel|HTML|HTML|ExportToExcel|RadGrid.ExportToExcelCommandName|ExportToExcel()|ExportToExcel()|
|Excel|ExcelML|XML|ExportToExcel|RadGrid.ExportToExcelCommandName|ExportToExcel()|ExportToExcel()|
|Word|n/a|HTML|ExportToWord|RadGrid.ExportToWordCommandName|ExportToWord()|ExportToWord()|
|CSV|n/a|text|ExportToCsv|RadGrid.ExportToCsvCommandName|ExportToCSV()|ExportToCsv()|

>note We strongly recommend that you use[Advanced Data Binding](http://http://www.telerik.com/help/aspnet-ajax/grid-advanced-data-binding.html)when exporting the __RadGrid__ .
>


## Common properties and events

In addition to the export format's specific properties, the __ExportSettings__ group exposes severalcommon properties:

* __ExportOnlyData__

As the name says, this property is helpful when you want to export only the data - e.g. to exclude the controlsfrom the exported file.

* __IgnorePaging__

When you enable *IgnorePaging*, *RadGrid* will rebind before exportin order to fetch all the data from your datasource.

* __OpenInNewWindow__

By default, the exported file will be handled by the program associated with the appropriate file type.If you prefer to give the user the option to choose whether to save, open (inline) or cancel you should enable this property.

>note Even if you set __OpenInNewWindow="false"__ , that doesn't guarantee that the file will be opened insidethe browser window. The way the exported file will be displayed inline depends on the *OS* / *browser* settings.The end-user could manage the file extensions with programs like[NirSoft's FileTypesMan](http://www.nirsoft.net/utils/file_types_manager.html). For browsers, other than *Internet Explorer* , you should use the built-in settings.
>


* __FileName__

This is helpful when you want to give a predefined name for your file. Please note that the file name can't be longerthan 256 symbols.

__Unicode__ names are not supported out-of-the-box for __Internet Explorer____6__ and __7__. Of course you can manually encode the file name and it will be shownproperly in the "__Save__" dialog (__OpenInNewWindow__="__true__").

__HttpUtility.UrlEncode("unicode string", System.Text.Encoding.UTF8);__

>note  __Internet Explorer__ ignores the __FileName__ property when __OpenInNewWindow__ is set to false.
>


* __HideStructureColumns__

Removes the structure columns - *GridRowIndicatorColumn*, *GridExpandColumn*as well as the first *GridGroupSplitterColumn*. Note that this property will affect only the firstlevel in hierarchical *RadGrids*.

````ASPNET
	<ExportSettings
	   HideStructureColumns="true"
	   ExportOnlyData="true"
	   IgnorePaging="true"
	   OpenInNewWindow="true">
	</ExportSettings>
````



>note You can receive this error if the file name is longer than 256 symbols:
> __'<filename>.<extension>' could not be found. Check the spelling of the file name, and verify that thefile location is correct.__ 
>


* __SuppressColumnDataFormatStrings__

This property will help avoid exporting already formatted values whichwould cause Microsoft Excel to treat them as string values.Enabling this functionality will result in rebinding the controlbefore exporting. Note that even if both *IgnorePaging* and*SuppressColumnDataFormatStrings* are enabled, RadGrid will rebind only once.

* __UseItemStyles__

As the name says, this property gives you the ability to apply the item styles to the exported file.

## OnGridExporting event

This event is useable in many scenarios when you want to modify the output file - for example you may want to add some custominformation above *RadGrid* or when you want to remove/add/replace parts of the content.The only limitation applies to the *PDF* export because by the time the__OnGridExporting__ event is raised, the *PDF* is already generated.For more information, please visit the dedicated __PDF format topic__ which introduces the__OnPdfExporting__ event that is designed specifically for this format.

Below is the barebone logic for __OnGridExporting__ event:

>tabbedCode

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



````VB.NET
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


>end

## Common scenarios

>caution Exporting with __client-side binding__ is not supported, __RadGrid__ should be bound __server-side__ , otherwise you will receive an empty file.
>


>caution RadGrid exporting works only when the __ViewState__ is persisted in a hidden field (default). In case you are using analternative way to persist the __ViewState__ such as storing it in a database or a session, you will receive an exception.
>


## Exporting a large amount of data

We strongly recommend not to export large amounts of data since there is a chance to encounter an exception(*Timeout* or *OutOfMemory*) if more than one user tries to export the same data simultaneously. __RadGrid__ is not suitable for such scenarios and therefore we suggest that you limitthe number of columns and rows. Also it is important to note that the hierarchy and the nested controls have a considerable effecton the performance in this scenario.

## Export with custom paging

When you have custom paging enabled for your grid, you need to set the *PageSize* property of the gridto be equal to the *VirtualItemCount* in order to export all records successfully with*IgnorePaging* set to true. Here is an example:

>tabbedCode

````C#
	    protected void Button1_Click(object sender, EventArgs e)
	    {
	        RadGrid1.PageSize = RadGrid1.MasterTableView.VirtualItemCount;
	        RadGrid1.ExportSettings.IgnorePaging = true;
	        RadGrid1.ExportSettings.OpenInNewWindow = true;
	        RadGrid1.MasterTableView.ExportToExcel();
	    }
````



````VB.NET
	    Protected Sub Button1_Click(ByVal sender As Object, ByVal e As EventArgs)
	        RadGrid1.PageSize = RadGrid1.MasterTableView.VirtualItemCount
	        RadGrid1.ExportSettings.IgnorePaging = True
	        RadGrid1.ExportSettings.OpenInNewWindow = True
	        RadGrid1.MasterTableView.ExportToExcel()
	    End Sub
````


>end

## Export from AJAX-enabled RadGrid

The exporting feature works only with regular postbacks. This means, that the asynchronous postback should be canceled when performing an export.

More information on this topic is available below:

[Export from ajaxified grid]( http://www.telerik.com/help/aspnet-ajax/grdexportwithajax.html)

[ Exclude controls from ajaxifying ](http://www.telerik.com/help/aspnet-ajax/ajxexclude.html)

[ Export RadGrid content to Excel/Word/CSV/PDF with Ajax enabled ](http://www.telerik.com/community/code-library/aspnet-ajax/general/export-radgrid-content-to-excel-word-csv-pdf-with-ajax-enabled.aspx)

## Nested grids / Exporting multiple RadGrids

The following code-library project demonstrates how to export nested *RadGrids* to*PDF*/*Excel* (HTML)

[Export multiple RadGrids in single PDF/Excel file](http://www.telerik.com/community/code-library/aspnet-ajax/grid/export-multiple-radgrids-in-single-pdf-excel-file.aspx)

## Export with client-side binding

__RadGrid__ doesn't support exporting with *client-side binding*.To be able to export in such scenario, you should bind __RadGrid__ on the server.

## Export in SharePoint webpart

There is a special flag ([_spFormOnSubmitCalled](http://www.bewise.fr/article/ptc/57/WSS-V3-Use-ASP-NET-AJAX-Framework-with-WSS-30.aspx)) in __SharePoint__ that prevents the form to be submitted twice.The flag is set when the form is submitted and then cleared when the response is received. When using the exporting functionality,this flag won't be cleared because the response is redirected and therefore all further postbacks will be blocked. [Controls not functional after Export to Excel or Export to PDF of Telerik in Sharepoint Application page](http://www.faisalmb.com/blog/post/2010/01/28/Controls-not-functional-after-Export-to-Excel-or-Export-to-PDF-of-Telerik-in-Sharepoint-Application-page.aspx)

## Export in web farm

If you receive "Invalid ViewState" or similar exception in web farm scenario, you can try to copy the*machinekey *from your *web.config* to the*machine.config *of the web server.

## Export over SSL

You might receive the following error message when using the export feature over *SSL* and*Internet Explorer*:


>caption  

| " *Internet Explorer* cannot download ' *file'* from ' *server'* . *Internet Explorer* was not able to open this Internet site. The requested site is eitherunavailable or cannot be found. Please try again later." |
| ------ |

In order to prevent this error add the following lines just before the exporting:

>tabbedCode

````C#
	        RadGrid1.Page.Response.ClearHeaders();
	        RadGrid1.Page.Response.Cache.SetCacheability(HttpCacheability.Private);
````



````VB.NET
	        RadGrid1.Page.Response.ClearHeaders()
	        RadGrid1.Page.Response.Cache.SetCacheability(HttpCacheability.[Private])
````


>end

## Obsolete methods

The following methods are marked as obsolete as of *RadGrid* v4.6 (part of *UIfor ASP.NET.AJAX*)

* __server-side:__

* *ExportToWord(fileName, dataOnly, ignorePaging)*

* *ExportToExcel(fileName, dataOnly, ignorePaging)*

* *ExportToWord2007(fileName, dataOnly, ignorePaging)*

* *ExportToExcel2007(fileName, dataOnly, ignorePaging)*

* __client-side:__

* *ExportToWord(fileName)*

* *ExportToExcel(fileName)*

For real-life example, review our [online demo](http://demos.telerik.com/aspnet-ajax/Grid/Examples/GeneralFeatures/Exporting/DefaultCS.aspx).
