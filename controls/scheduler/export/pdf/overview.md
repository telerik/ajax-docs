---
title: PDF Overview
page_title: Overview | RadScheduler for ASP.NET AJAX Documentation
description: Overview
slug: scheduler/export/pdf/overview
tags: overview
published: True
position: 0
---

# PDF Overview



This help article lists all **RadScheduler** common properties used in the RadScheduler PDF Export.

## Common Properties

You can configure the exporting settings for the scheduler through the **RadScheduler.ExportSettings** section. Furthermore there is an additional sub-category (Pdf) dedicated on various configuration settings for the exported .pdf document. Here are the available properties:

* **FileName** - a string specifying the name (without the extension) of the file that will be created. The file extension is automatically added based on the method that is used.

* **OpenInNewWindow** - open the exported scheduler in a new page.

There is an additional sub-category **(Pdf)**for the **ExportSettings** dedicated on various configuration settings for the exported .pdf document. Below is a list of them:

As of Q3 2013 SP1 two properties are introduced for this section:**StyleSheets** and **AllowPaging**.

* **AllowAdd**- Boolean property which determines whether content adding is allowed.

* **AllowCopy**- Boolean property which determines whether content copying is allowed.

* **AllowModify**- Boolean property which determines whether content modifications are allowed.

* **AllowPaging**- Boolean property which determines whether paging are allowed. [Page settings article ]({%slug scheduler/export/pdf/page-settings%}).

* **AllowPrint** - Boolean property which determines whether the pdf document can be printed.

* **PageTitle**- Sets the title of the page.

* **PageLeftMargin**- Sets the left margin for the pages in the pdf document.

* **PageRightMargin**- Sets the right margin for the pages in the pdf document.

* **PageTopMargin**- Sets the top margin for the pages in the pdf document.

* **PageBottomMargin**- Sets the bottom margin for the pages in the pdf document.

* **PageHeaderMargin**- Sets the header margin for the pages in the pdf document.

* **PageFooterMargin**- Sets the footer margin for the pages in the pdf document.

* **PageHeight**- Sets the height of the pages in the pdf document.

* **PageWidth**- Sets the width of the pages in the pdf document.

* **StyleSheets**- Sets path to the stylesheet files used to style the RadScheduler PDF document.Please note that those path values could be absolute and relative. [Using custom style sheet files article ]({%slug scheduler/export/pdf/using-custom-style-sheet-files%}).

* **Author**- Sets the name of the author of the pdf document.

* **Keywords**- Sets the keywords for the pdf document.

* **Subject**- Sets the subject of the pdf document.

* **Title**- Sets the title of the pdf document.

* **PaperSize**- Enumeration which specifies the paper font size. The default value is Letter.

* **PaperOrientation**- Enumeration which specifies the paper orienatation - Landscape or Portrait. The default value is Portrait.

* **Producer** - Specifies the producer of the resulting pdf document.

* **Creator**- Specifies the creator of the resulting pdf document.

Here is an example of how to apply these settings:

````ASPNET
	
	<ExportSettings OpenInNewWindow="true" FileName="SchedulerExport">
	  <Pdf PageTitle="Schedule" Author="Telerik" Creator="Telerik" Title="Schedule" />
	 </ExportSettings>
	
	
````





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

