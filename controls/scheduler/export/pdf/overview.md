---
title: PDF Overview
page_title: Overview | UI for ASP.NET AJAX Documentation
description: Overview
slug: scheduler/export/pdf/overview
tags: overview
published: True
position: 0
---

# PDF Overview



This help article lists all __RadScheduler__ common properties used in the RadScheduler PDF Export.

## Common Properties

You can configure the exporting settings for the scheduler through the __RadScheduler.ExportSettings__ section. Furthermore there is an additional sub-category (Pdf) dedicated on various configuration settings for the exported .pdf document. Here are the available properties:

* __FileName__ - a string specifying the name (without the extension) of the file that will be created. The file extension is automatically added based on the method that is used.

* __OpenInNewWindow__ - open the exported scheduler in a new page.

There is an additional sub-category __(Pdf)__for the __ExportSettings__ dedicated on various configuration settings for the exported .pdf document. Below is a list of them:

As of Q3 2013 SP1 two properties are introduced for this section:__StyleSheets__ and __AllowPaging__.

* __AllowAdd__- Boolean property which determines whether content adding is allowed.

* __AllowCopy__- Boolean property which determines whether content copying is allowed.

* __AllowModify__- Boolean property which determines whether content modifications are allowed.

* __AllowPaging__- Boolean property which determines whether paging are allowed. [Page settings article ]({%slug scheduler/export/pdf/page-settings%}).

* __AllowPrint__ - Boolean property which determines whether the pdf document can be printed.

* __PageTitle__- Sets the title of the page.

* __PageLeftMargin__- Sets the left margin for the pages in the pdf document.

* __PageRightMargin__- Sets the right margin for the pages in the pdf document.

* __PageTopMargin__- Sets the top margin for the pages in the pdf document.

* __PageBottomMargin__- Sets the bottom margin for the pages in the pdf document.

* __PageHeaderMargin__- Sets the header margin for the pages in the pdf document.

* __PageFooterMargin__- Sets the footer margin for the pages in the pdf document.

* __PageHeight__- Sets the height of the pages in the pdf document.

* __PageWidth__- Sets the width of the pages in the pdf document.

* __StyleSheets__- Sets path to the stylesheet files used to style the RadScheduler PDF document.Please note that those path values could be absolute and relative. [Using custom style sheet files article ]({%slug scheduler/export/pdf/using-custom-style-sheet-files%}).

* __Author__- Sets the name of the author of the pdf document.

* __Keywords__- Sets the keywords for the pdf document.

* __Subject__- Sets the subject of the pdf document.

* __Title__- Sets the title of the pdf document.

* __PaperSize__- Enumeration which specifies the paper font size. The default value is Letter.

* __PaperOrientation__- Enumeration which specifies the paper orienatation - Landscape or Portrait. The default value is Portrait.

* __Producer__ - Specifies the producer of the resulting pdf document.

* __Creator__- Specifies the creator of the resulting pdf document.

Here is an example of how to apply these settings:

````ASPNET
	
	<ExportSettings OpenInNewWindow="true" FileName="SchedulerExport">
	  <Pdf PageTitle="Schedule" Author="Telerik" Creator="Telerik" Title="Schedule" />
	 </ExportSettings>
	
	
````



>tabbedCode

````C#
	
		protected void RadButton1_Click(object sender, EventArgs e)
		{
			RadScheduler1.ExportToPdf();
			RadScheduler1.ExportSettings.Pdf.PageTitle = "New Title";
		} 
	
	
````
````VB.NET
		Protected Sub RadButton1_Click(ByVal sender As Object, ByVal e As EventArgs)
			RadScheduler1.ExportToPdf()
			RadScheduler1.ExportSettings.Pdf.PageTitle = "New Title"
	
		End Sub
	
	
	
````
>end
