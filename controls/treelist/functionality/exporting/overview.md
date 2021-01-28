---
title: Overview
page_title: Exporting Overview - RadTreeList
description: Check our Web Forms article about Overview.
slug: treelist/functionality/exporting/overview
tags: overview
published: True
position: 0
---

# Exporting Overview



Since Q3 2011 the Telerik RadTreeList can export your data to PDF after a call to its *ExportToPdf()* method.

Export to Excel functionality is added since Q1 2012. The corresponding method is *ExportToExcel()*.

## Common properties

In addition to the export format's specific properties, the **ExportSettings** group exposes several common properties:

**ExportMode** - this is an enumeration with four possible values described below:

* *DefaultContent* - the whole data and content of the RadTreeList are sent for export,without removing or replacing anything;

* *RemoveControls* - removes all controls that implement the *IButton*,*ITextBox*, *ICheckBox* and *IScriptControl* interfaces;

* *ReplaceControls* - tries to replace all controls that implement the *IButton*,*ITextBox*, *ICheckBox* and *IScriptControl* interfaces with their text;

* *RemoveAll* - removes all non-text controls.

**IgnorePaging** - when you enable it, the RadTreeList will rebind before export in order tofetch all the data from your datasource.

**OpenInNewWindow** - by default, the exported file will be handled by the program associated with theappropriate file type. If you prefer to give the user the option to choose whether to save, open (inline) or cancel, youcan enable this property.

>note Even if you set *OpenInNewWindow="false"* , that does not guarantee that the file will be opened inside the browser window.The way the exported file will be displayed inline depends on the *OS* / *browser* settings.The end-user could manage the file extensions with programs like [NirSoft's FileTypesMan](http://www.nirsoft.net/utils/file_types_manager.html). For browsers, other than *Internet Explorer* , you should use the built-in settings.
>


**FileName** - This is helpful when you want to give a predefined name for your file. Please note that the file namecannot be longer than 256 symbols. **Unicode** names are not supported out-of-the-box for *Internet Explorer 6* and *7*. Of course you can manually encode the file name and it will be shown properly in the "*Save*" dialog (*OpenInNewWindow="true"*):

*HttpUtility.UrlEncode("unicode string", System.Text.Encoding.UTF8);*

>note  *Internet Explorer* ignores the *FileName* property when *OpenInNewWindow* is set to *false* .
>


````ASPNET
<ExportSettings
	ExportMode="DefaultContent"
	IgnorePaging="true"
	OpenInNewWindow="true"
	FileName="RadTreeListExport1">
</ExportSettings>  
````



## OnExporting event

By the time the *OnExporting* event is raised, the Pdf / Excel output is already generated and ready for adding to the response.Although you cannot modify the contents on *OnExporting*, you can use this event to achieve some other tasks. For example to save the file on the server, send it via mail or preview it in another window.

## Export from AJAX-enabled RadTreeList

The exporting feature works only with regular postbacks. This means that the asynchronous postback should be canceled when performing an export.More information is available in [the corresponding help topic]({%slug treelist/functionality/exporting/export-from-ajaxified-radtreelist%}).

## Exporting a large amount of data

We strongly recommend not to export large amounts of data since there is a chance to encounter an exception (*Timeout* or *OutOfMemory*) if more than one user tries to export the same data simultaneously. **RadTreeList** is not suitable for such scenarios and therefore we suggest that you limit the number of columns and rows.

## Export in SharePoint webpart

There is a special flag (**_spFormOnSubmitCalled**) in *SharePoint* that prevents the form to be submitted twice. The flag is set when the form is submitted and then cleared when the response is received. When using the exporting functionality, this flag won't be cleared because the response is redirected and therefore all furtherpostbacks will be blocked. [Controls not functional after Export to Excel or Export to PDF of Telerik in Sharepoint Application page](http://www.faisalmb.com/blog/post/2010/01/28/Controls-not-functional-after-Export-to-Excel-or-Export-to-PDF-of-Telerik-in-Sharepoint-Application-page.aspx)

## Export in web farm

If you receive "Invalid ViewState" or similar exception in web farm scenario, you can try to copy the *machinekey* from your*web.config* to the *machine.config* of the web server.

## Export over SSL

You might receive the following error message when using the export feature over *SSL* and *Internet Explorer*:


>note *Internet Explorer* cannot download ' *file'* from ' *server'* . *Internet Explorer* was not able to open this Internet site. The requested site is either unavailable or cannot be found. Please try again later.
>

In order to prevent this error add the following lines just before the exporting:



````C#
RadTreeList1.Page.Response.ClearHeaders();
RadTreeList1.Page.Response.Cache.SetCacheability(HttpCacheability.Private);
````
````VB
RadTreeList1.Page.Response.ClearHeaders()
RadTreeList1.Page.Response.Cache.SetCacheability(HttpCacheability.[Private])
````

## See Also

 * [Command Item for built in export buttons]({%slug treelist/items/command-item%})

