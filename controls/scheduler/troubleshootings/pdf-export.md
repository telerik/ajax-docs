---
title: PDF Export
page_title: PDF Export | RadScheduler for ASP.NET AJAX Documentation
description: PDF Export
slug: scheduler/troubleshootings/pdf-export
tags: pdf,export
published: True
position: 1
---

# PDF Export



This article shows some of the known RadScheduler PDF Export issues and solutions.

## Troubleshooting

Please note that as of Q3 2013 SP1 there are some issues fixed in the **RadScheduler Export** functionality:

* Setting the RadScheduler skin using the RadSkinManager is properly applied in the exported PDF document.

* The content of the appointment template section isproperly applied in the exported PDF document.

* You are absolutely able to export the advanced form of the RadScheduler control.

The rendered scheduler output should be valid XHTML. If it is not, you will receive exceptions on export. The most common cause for bad XHTML are symbols like **<**,**>**,**&** that need to be replaced by the correct *XHTML* entity: **& l t ;**, **& g t ;**, **& a m p ;** respectively. Another frequent problem is unclosed tags.

Problem:

**'div' start tag on line 96 position 15 does not match the end tag of 'li'. Line 102, position 13.**

Suggested solution:

Most likely it is caused by not closed html tags declared in scheduler templates for example.Please [validate](http://validator.w3.org/) the page output.

Problem:

**System.SystemException: Error while creating area : Encountered web exception while fetching image from**

**http://localhost:51300/Telerik.Web.UI.WebResource.axd?imgid=324e7fbdeca947c2b9a6c7ca14c88e87&type=rbi:**

**The remote server returned an error: (500) Internal Server Error.**

Suggested solution:

To troubleshoot the issue, please open the url, specified in the error details. In the above example it is:

http://localhost:51300/Telerik.Web.UI.WebResource.axd?imgid=324e7fbdeca947c2b9a6c7ca14c88e87&type=rbi:

Most probable cause of this issue is incorrect web resource handler registration when the Telerik.Web.UI.dll is referenced trough the GAC. For more details refer to the [General TroubleShooting help topic](http://www.telerik.com/help/aspnet-ajax/introduction-troubleshooting.html) .

Problem:

**System.ArgumentException: Parameter is not valid. at System.Drawing.Bitmap..ctor(Stream stream) at Telerik.Web.Apoc.Image.ApocImage..ctor(String href, Byte[] imageData) at Telerik.Web.Apoc.Image.ApocImageFactory.Make(String href) at Telerik.Web.Apoc.Fo.Flow.ExternalGraphic.Layout(Area area) at Telerik.Web.Apoc.Fo.Flow.Block.Layout(Area area) at Telerik.Web.Apoc.Fo.Flow.Flow.Layout(Area area, Region region) at Telerik.Web.Apoc.Fo.Flow.Flow.Layout(Area area) at Telerik.Web.Apoc.Fo.Pagination.PageSequence.Format(AreaTree areaTree) at Telerik.Web.Apoc.StreamRenderer.Render(PageSequence pageSequence) at Telerik.Web.Apoc.Fo.FOTreeBuilder.EndElement() at Telerik.Web.Apoc.Fo.FOTreeBuilder.Parse(XmlReader reader)**

Suggested solution:

1. This problem appears on export when the Telerik.Web.UI .dllis referenced trough the GAC and the assembly version is different from the WebResource.axdversion registered in the web.config file. Please check you web.configfor proper handler registration in the following section:

	**ASP.NET**
	
		<system.webServer>
			<handlers>
				<add name="Telerik.Web.UI.WebResource"  path="Telerik.Web.UI.WebResource.axd" verb="*" type="Telerik.Web.UI.WebResource, Telerik.Web.UI, Version=[ASSEMBLY_VERSION], Culture=neutral, PublicKeyToken=121fae78165ba3d4" />
			</handlers>
		</system.webServer>
	

	Where [ASSEMBLY_VERSION] is the exact version of your Telerik.Web.UI.dll.

2. If you are using Forms authentication please add the following section to your web.config file:

	**ASPNET**
	
		<location path="Telerik.Web.UI.WebResource.axd">
			<system.web>
				<authorization>
					<allow users="?"/>
				</authorization>
			</system.web>
		</location>
	
	Problem:

**An error occurred while parsing EntityName. Line 1246, position 58or '' is an unexpected token. The expected token is ';'. Line 131, position 10.**

Suggested solution:

If special characters are used, replace them by valid HTML equivalents: **&** - **& a m p ;** …..

You can use this article for reference - [Special Characters in HTML](http://www.degraeve.com/reference/specialcharacters.php) .
