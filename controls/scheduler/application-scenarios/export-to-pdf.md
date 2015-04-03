---
title: Export to PDF
page_title: Export to PDF | UI for ASP.NET AJAX Documentation
description: Export to PDF
slug: scheduler/application-scenarios/export-to-pdf
tags: export,to,pdf
published: False
position: 0
---

# Export to PDF



## 

To export the scheduler content to PDF format simply use the__ExportToPdf()__server-side method. For example in case you want to apply a simple button using the server-side OnClick event of the button you could add the following code:

````ASPNET
	 
	 <telerik:RadButton ID="RadButton1" runat="server" Text="Export to PDF" OnClick="RadButton1_Click">
	 </telerik:RadButton>
	
	
````



>tabbedCode

````C#
	
	
		protected void RadButton1_Click(object sender, EventArgs e)
		{
			RadScheduler1.ExportToPdf();
		}
		
````



````VB.NET
	
		Protected Sub RadButton1_Click(ByVal sender As Object, ByVal e As EventArgs)
			RadScheduler1.ExportToPdf()
		End Sub
	
	
````


>end

>note Current limitation: RadScheduler exports without appointments if the default browser for the web server is IE6 or RadScheduler is populated with a Web Service.
>


## Troubleshooting

The rendered scheduler output should be valid XHTML. If it is not, you will receive exceptions on export.The most common cause for bad XHTML are symbols like __<__,__>__,__&__ that need to bereplaced by the correct *XHTML* entity: __& l t ;__, __& g t ;__, __& a m p ;__respectively. Another frequent problem is unclosed tags.

Problem:

__'div' start tag on line 96 position 15 does not match the end tag of 'li'. Line 102, position 13.__

Suggested solution:

Most likely it is caused by not closed html tags declared in scheduler templates for example.Please [validate](http://validator.w3.org/)the page output.

Problem:

__System.SystemException: Error while creating area : Encountered web exception while fetching image from__

__http://localhost:51300/Telerik.Web.UI.WebResource.axd?imgid=324e7fbdeca947c2b9a6c7ca14c88e87&type=rbi:__

__The remote server returned an error: (500) Internal Server Error.__

Suggested solution:

To troubleshoot the issue, please open the url, specified in the error details. In the above example it is:

http://localhost:51300/Telerik.Web.UI.WebResource.axd?imgid=324e7fbdeca947c2b9a6c7ca14c88e87&type=rbi:

Most probable cause of this issue is incorrect web resource handler registration when the Telerik.Web.UI.dll is referenced trough the GAC.
For more details refer to the [General TroubleShooting help topic](http://www.telerik.com/help/aspnet-ajax/introduction-troubleshooting.html)
.

Problem:

__System.ArgumentException: Parameter is not valid.
at System.Drawing.Bitmap..ctor(Stream stream)
at Telerik.Web.Apoc.Image.ApocImage..ctor(String href, Byte[] imageData)
at Telerik.Web.Apoc.Image.ApocImageFactory.Make(String href)
at Telerik.Web.Apoc.Fo.Flow.ExternalGraphic.Layout(Area area)
at Telerik.Web.Apoc.Fo.Flow.Block.Layout(Area area)
at Telerik.Web.Apoc.Fo.Flow.Flow.Layout(Area area, Region region)
at Telerik.Web.Apoc.Fo.Flow.Flow.Layout(Area area)
at Telerik.Web.Apoc.Fo.Pagination.PageSequence.Format(AreaTree areaTree)
at Telerik.Web.Apoc.StreamRenderer.Render(PageSequence pageSequence)
at Telerik.Web.Apoc.Fo.FOTreeBuilder.EndElement()
at Telerik.Web.Apoc.Fo.FOTreeBuilder.Parse(XmlReader reader)__

Suggested solution:

1. This problem appears on export when the Telerik.Web.UI .dllis referenced trough the GAC and the assembly version is different from the WebResource.axdversion registered in the web.config file.Please check you web.configfor proper handler registration in the following section:

````ASPNET
	
	<system.webServer>
		
		<handlers>
		
			<add name="Telerik.Web.UI.WebResource"  path="Telerik.Web.UI.WebResource.axd" verb="*" type="Telerik.Web.UI.WebResource, Telerik.Web.UI, Version=[ASSEMBLY_VERSION], Culture=neutral, PublicKeyToken=121fae78165ba3d4" />
		
		</handlers>
	</system.webServer>
	
````



Where [ASSEMBLY_VERSION] is the exact version of your Telerik.Web.UI.dll.

2. If you are using Forms authentication please add the following section to your web.config file:

````ASPNET
	
	<location path="Telerik.Web.UI.WebResource.axd">
		<system.web>
			<authorization>
				<allow users="?"/>
			</authorization>
		</system.web>
	</location>
	
````



Problem:

__An error occurred while parsing EntityName. Line 1246, position 58or'' is an unexpected token. The expected token is ';'. Line 131, position 10.__

Suggested solution:

If special characters are used, replace them by valid HTML equivalents:
__&__ - __& a m p ;__ …..

You can use this article for reference -[Special Characters in HTML](http://www.degraeve.com/reference/specialcharacters.php)
.

## Common properties

You can configure the exporting settings for the scheduler through the	__RadScheduler.ExportSettings__ section. Furthermore there is additional sub-category (Pdf) dedicated on various configuration settings for the exported .pdf document. Here are the available properties:

* __FileName__ - - a string specifying the name (without the extension)of the file that will be created. The file extension is automatically added based on the method that is used.

* __OpenInNewWindow__ - open the exported scheduler in a new instead of the same page.

There is an additional sub-category __(Pdf)__for the __ExportSettings__ dedicated on various configuration settings for the exported .pdf document. Below is a list of them:

* __AllowAdd__- Boolean property which determines whether content adding is allowed

* __AllowCopy__- Boolean property which determines whether content copying is allowed

* __AllowModify__- Boolean property which determines whether content modifications are allowed

* __AllowPrint__ - Boolean property which determines whether the pdf document can be printed

* __PageTitle__- Sets the title of the page

* __PageLeftMargin__- Sets the left margin for the pages in the pdf document

* __PageRightMargin__- Sets the right margin for the pages in the pdf document

* __PageTopMargin__- Sets the top margin for the pages in the pdf document

* __PageBottomMargin__- Sets the bottom margin for the pages in the pdf document

* __PageHeaderMargin__- Sets the header margin for the pages in the pdf document

* __PageFooterMargin__- Sets the footer margin for the pages in the pdf document

* __PageHeight__- Sets the height of the pages in the pdf document

* __PageWidth__- Sets the width of the pages in the pdf document

* __Author__- Sets the name of the author of the pdf document

* __Keywords__- Sets the keywords for the pdf document

* __Subject__- Sets the subject of the pdf document

* __Title__- Sets the title of the pdf document

* __PaperSize__- Enumeration which specifies the paper font size. The default value is Letter

* __Producer__ - Specifies the producer of the resulting pdf document

* __Creator__- Specifies the creator of the resulting pdf document

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
