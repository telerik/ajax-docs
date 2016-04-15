---
title: Overview
page_title: RadStyleSheetManager Overview | UI for ASP.NET AJAX Documentation
description: Overview
slug: stylesheetmanager/overview
tags: overview
published: True
position: 1
---

# StylesheetManager Overview



By default each of the RadControls for ASP.NET Ajax serves a set of files (stylesheets) needed for its proper client-side look.

When loading a page with several controls on it, the number of these files can become very large, often resulting in a reduced page load time and increased traffic. The reason for this problem is that browsers make a separate request to the server for each of these resources.

Usually this problem is overcome by disabling the automatic stylesheet serving of the controls, combining them into a smaller set of files and registering the links to these files manually on the page.

This approach is not the best for of a number of reasons:- you must extract the files from the assembly for each control release;- files become too large to be maintainable (or you have to write a script to merge the source files);- the number of merged files you need to maintain can become very large depending on the control sets you have on different pages;

With the newly added **RadStyleSheetManager** control, RadControls for ASP.NET Ajax suite gives developers the advantage of a simple drag-and-drop to achieve the combination of resources to a single request. All you need is to add a **RadStyleSheetManager** to your page and the stylesheet requests will be combined into a single request.

>note The **performance** gain of **RadStyleSheetManager** should be monitored on a remote server, but not in a local development. This is, because the control optimizes the network latency delay when loading the resources. This comes at the cost of some processor load, because the resources get combined and compressed on the server.
>When testing locally, the largest part of the result you get is the time **RadStyleSheetManager** takes to combine the resources and serve them to the browser.
>


**RadStyleSheetManager** needs an **HttpHandler** to be declared in the application configuration file to operate properly. The addition of the handler is made easy by the SmartTags of the control:


>caption 



As the **RadStyleSheetManager** control uses ASP.NET 2.0 WebResource capabilities it benefits from gzip content compression (for browsers, supporting that) and script caching.

Similar to RadScriptManager, **RadStyleSheetManager** combines all the requests (to the "stylesheet resource files" on the page) into a single one, reducing the page load time and traffic. The difference is that it does not replace the ScriptManager, but instead works together with it.

**RadStyleSheetManager** outputs a **`<link>`** tag with a specific URL, making a request to an HttpHandler, which serves the combined scripts.

RadStyleSheetManager also needs the HttpHandler to be registered in the application's configuration file, e.g.

````XML
<configuration>
	<system.web>
		<httpHandlers>
			<add path="Telerik.Web.UI.WebResource.axd" verb="*" type="Telerik.Web.UI.WebResource, Telerik.Web.UI" validate="false" />
		</httpHandlers>
	</system.web>
</configuration>
````



The actual URL of the HttpHandler can be changed using the [HttpHandlerUrl](http://www.telerik.com/help/aspnet-ajax/p_telerik_web_ui_radstylesheetmanager_httphandlerurl.html) property of the control.

If the stylesheet combination is not needed for some reason (e.g. debugging) it can be disabled by setting the [EnableStyleSheetCombine](http://www.telerik.com/help/aspnet-ajax/p_telerik_web_ui_radstylesheetmanager_enablestylesheetcombine.html) property to *false*.



## Including custom StyleSheets as WebResources to RadStyleSheetManager

1. RadStyleSheetManager reads css resource information from assemblies and outputs a single <link> tag to the page HTML. Reading the link tag’s href attribute, the browser makes a request to the Telerik.Web.UI.WebResource handler, which extracts the resource contents from the assemblies and merges them into a single response stream. To make StyleSheets merged by RadStyleSheetManager, they have to be included as an Assembly WebResource.

1. Adding an assembly as a WebResource:

	1. Add a new project of type **Class Library** to the solution and call it **TelerikCustomSkins**;

	1. Add a StyleSheet file to the **TelerikCustomSkins** project and call it **TelerikSkinForComboBox**;

	1. Set it to be an EmbeddedResource (using the Visual Studio Properties pane). **Right-click** the css file -> **Properties** ->choose **Embedded Resource** for **Build Action**;

	1. Rename **Class1.cs** to **TelerikSkin.cs** in the TelerikCustomSkins project (this is a cosmetic step to create more meaningful names for the files used in this guide);

	1. Declare **TelerikSkinForComboBox.css** as a WebResource by adding the **WebResource** assembly attribute to the TelerikSkin.cs code file:



		````C#
		using System;
		using System.Collections.Generic;
		using System.Linq;
		using System.Text;
		using System.Web.UI;
		
		[assembly: WebResource("TelerikCustomSkins.TelerikSkinForComboBox.css", "text/css")]
		namespace TelerikCustomSkins 
		{ 
			public class TelerikSkin 
			{ 
			} 
		}
			
		````
		````VB.NET
		Imports System
		Imports System.Collections.Generic
		Imports System.Linq
		Imports System.Text
		Imports System.Web.UI
		
		<Assembly: WebResource("TelerikCustomSkins.TelerikSkinForComboBox.css", "text/css")> 
		Namespace TelerikCustomSkins
			Public Class TelerikSkin
			End Class
		End Namespace
			
		````


	1. Copy the content of [My Telerik.Web.UI installation]\Skins\Telerik -> **ComboBox.Telerik.css** to the **TelerikSkinForComboBox.css** file.

	1. If the skin css file uses images, which you want to store as WebResources, you need to:

		1. Copy the images to **TelerikCustomSkins** project. For the RadComboBox Telerik skin, the images are located at [My Telerik.Web.UI installation]\Skins\Telerik\ComboBox. Let's create a **ComboBox_Images** folder to store the images.

		1. Set the images as EmbeddedResources (using the Visual Studio Properties pane);

		1. Declare an assembly WebResource attribute for each image by adding the WebResource assembly attribute to the TelerikSkin.cs code file:



			````C#
			using System.Web.UI;
			[assembly: WebResource("TelerikCustomSkins.TelerikSkinForComboBox.css", "text/css")]
			[assembly: WebResource("TelerikCustomSkins.ComboBox_Images.rcbArrowCell.gif", "image/gif")]
			[assembly: WebResource("TelerikCustomSkins.ComboBox_Images.rcbBg.gif", "image/gif")]
			[assembly: WebResource("TelerikCustomSkins.ComboBox_Images.rcbDropDownBg.gif", "image/gif")]
			[assembly: WebResource("TelerikCustomSkins.ComboBox_Images.rcbMoreResults.gif", "image/gif")]
			[assembly: WebResource("TelerikCustomSkins.ComboBox_Images.Telerik.gif", "image/gif")]
			
			namespace TelerikCustomSkins 
			{ 
				public class TelerikSkin 
				{ 
				} 
			}
							
			````
			````VB.NET
			Imports System.Web.UI
			<Assembly: WebResource("TelerikCustomSkins.TelerikSkinForComboBox.css", "text/css")> 
			<Assembly: WebResource("TelerikCustomSkins.ComboBox_Images.rcbArrowCell.gif", "image/gif")> 
			<Assembly: WebResource("TelerikCustomSkins.ComboBox_Images.rcbBg.gif", "image/gif")> 
			<Assembly: WebResource("TelerikCustomSkins.ComboBox_Images.rcbDropDownBg.gif", "image/gif")> 
			<Assembly: WebResource("TelerikCustomSkins.ComboBox_Images.rcbMoreResults.gif", "image/gif")> 
			<Assembly: WebResource("TelerikCustomSkins.ComboBox_Images.Telerik.gif", "image/gif")> 
			
			Namespace TelerikCustomSkins
				Public Class TelerikSkin
				End Class
			End Namespace
				
			````


			>note Note that ComboBox_Images is the folder which contains the skin images.
			>


			>caution In **Visual Basic** the name of the folder is [not honored](http://msdn.microsoft.com/en-us/library/aa289232(VS.71).aspx) so you need to be careful with the embedded resource name
			>


		1. Modify the CSS class declaration’s url attribute to contain the web resource path, e.g..imageBg

			````CSS
						
			.RadComboBox_Telerik .rcbArrowCell
			{
				border: 0;
				padding: 0;
				width: 23px;
				background: transparent url('<%=WebResource("TelerikCustomSkins.ComboBox_Images.rcbArrowCell.gif")%>') no-repeat;
			}
						
			````



1. Add System.Web as reference for the **TelerikCustomSkins** project and build the project. 

1. Add the **TelerikCustomSkins** project as reference to your web site and Build the entire solution.

1. Add a StyleSheetReference to the StyleSheets property of RadStyleSheetManager, providing the full StyleSheet resource name and the Assembly it is located in, e.g

	````ASPNET
	<telerik:RadStyleSheetManager ID="RadStyleSheetManager1" runat="server">
		<StyleSheets>
			<telerik:StyleSheetReference Name="TelerikCustomSkins.TelerikSkinForComboBox.css"
				Assembly="TelerikCustomSkins"></telerik:StyleSheetReference>
		</StyleSheets>
	</telerik:RadStyleSheetManager>
	````

* Test the page by adding RadComboBox with Skin="Telerik" and **EnableEmbeddedSkins="False"**. The expected result is that the Telerik skin is successfully applied to RadCombobBox.

	````ASPNET
	<telerik:RadComboBox RenderMode="Lightweight" ID="RadComboBox1" Skin="Telerik" EnableEmbeddedSkins="False"
		runat="server">
	````



You can download a [sample project](http://www.telerik.com/support/code-library/including-custom-stylesheets-as-webresources-to-radstylesheetmanager) from our code library section.

## Serving external StyleSheets through RadStyleSheetManager

Since **Q2 2011 SP RadStyleSheetManager** provides the ability to combine external style sheets as well. [This](http://www.telerik.com/help/aspnet-ajax/radstylesheetmanager-serving-external-style-sheets.html) help topic describes the feature and how it is configured in more detail.
