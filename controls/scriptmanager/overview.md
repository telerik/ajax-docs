---
title: Overview
page_title: RadScriptManager Overview | UI for ASP.NET AJAX Documentation
description: Overview
slug: scriptmanager/overview
tags: overview
published: True
position: 1
---

# ScriptManager Overview



## Overview

By default, each of the RadControls for ASP.NET AJAX serves a set of files (JS code) needed for its proper client-side operation.

When loading a page with several controls on it, the number of these files can become very large, often resulting in a reduced page load time and increased traffic. The reason for this problem is that browsers make a separate request to the server for each of these resources.

Usually this problem is overcome by disabling the automatic script serving of the controls, combining them into a smaller set of files and registering the links to these files manually on the page.

This approach is not the best for of a number of reasons:

* You must extract the files from the assembly for each control release.

* Files become too large to be maintainable (or you have to write a script to merge the source files).

* The number of merged files you need to maintain can become very large depending on the control sets you have on different pages.

With the **RadScriptManager** control, the RadControls for ASP.NET AJAX suite gives developers the advantage of a simple drag-and-drop to combine resources into a single request. All you need is to add a **RadScriptManager** to your page and the JavaScript files get combined into a single file.

>tip The performance gain of **RadScriptManager** should be monitored on a remote server, but not in a local development. This is, because the control optimizes the network latency delay when loading the scripts. This comes at the cost of some processor load, because the scripts get combined and compressed on the server.
>When testing locally, the largest part of the result you get is the time **RadScriptManager** takes to combine the scripts and serve them to the browser.
>tip that the **RadScriptManager** does **NOT** combine the web resources needed for the Telerik controls in a single request when the [CDN] ({%slug scriptmanager/cdn-support/overview%}) is enabled.
>


**RadScriptManager** needs an **HttpHandler** to be declared in the application configuration file to operate properly. The addition of the handler is made easier by the SmartTags of the control.


>caption 



The **RadScriptManager** control replaces the ScriptManager available in the Microsoft Ajax Extensions suite.

When put on the page, the **RadScriptManager** combines all requests (to the "JavaScript assembly resource files" on the page) into a single one, thus reducing the time of the page load and the consumed traffic.

**RadScriptManager** does this by outputting a **<script>** tag with a specific URL, making a request to an HttpHandler, which then serves the combined scripts.

If the script combination is not needed for some reason (e.g. debugging) it can be disabled by giving the [EnableScriptCombine](http://docs.telerik.com/devtools/aspnet-ajax/api/server/Telerik.Web.UI/RadScriptManager#properties-EnableScriptCombine) property the value of **False**.

You can change Handler by using the [HttpHandlerUrl](http://www.telerik.com/help/aspnet-ajax/p_telerik_web_ui_radscriptmanager_httphandlerurl.html) property of the control.

## RadScriptManager needs the HttpHandler to be registered in the application's configuration file:

## Registering the HttpHandler for web sites running on IIS 5.0, 5.1 and 6.0:

````XML
<configuration>    
	<system.web>        
		<httpHandlers>    
			<add path="Telerik.Web.UI.WebResource.axd" verb="*" type="Telerik.Web.UI.WebResource" validate="false" />        
		</httpHandlers>    
	</system.web>
</configuration>
````



## Registering the HttpHandler for Websites Running on IIS7:

When in integrated mode, IIS7 reads the application configuration from the **<system.webServer>** section group in the application configuration file, but not the **<system.web>** section group. Since Visual Studio 2005 does not provide "native" support for IIS7, the RadScriptManager registration cannot be automatically added to the **system.webServer**.

There are two cases:

* Telerik.Web.UI.dll is in the **GAC**:

````XML
<system.webserver>
… 
<handlers>
	…  
	<add name="Telerik.Web.UI.WebResource" path="Telerik.Web.UI.WebResource.axd" verb="*" type="Telerik.Web.UI.WebResource, Telerik.Web.UI, Version=[ASSEMBLY_VERSION], Culture=neutral, PublicKeyToken=121fae78165ba3d4" />
	… 
</handlers>
</system.webserver>
````



>caution You need to replace [ **ASSEMBLY_VERSION** ] with the exact version of your DLL, e.g. **2008.2.723.20** - for the Q2 2008 assembly for ASP.NET 2.0 **OR 2008.2.723.35** - for the Q2 2008 assembly for ASP.NET 3.5
>


* Telerik.Web.UI.dll is **not in the GAC**:

````XML
<system.webserver>
	… 
	<handlers>
		…  
		<add name="Telerik.Web.UI.WebResource"  path="Telerik.Web.UI.WebResource.axd" verb="*" type="Telerik.Web.UI.WebResource" />
		… 
	</handlers>
 </system.webserver>
````



>tip Additional information is available in this blog post: [Web Resources demystified](http://blogs.telerik.com/AtanasKorchev/Posts/08-07-18/Web_Resources_demystified_Part_3_Troubleshooting.aspx).
>


## Limitations of the Control:

* **RadScriptManager** ignores ScriptReferences to scripts embedded in an assembly, but pointed to a script file by using the Path property:

````XML
<telerik:RadScriptManager ID="”RadScriptManager1”" runat="”server”">
	<Scripts>
		<asp:ScriptReference Name="MyNamespace.MyFile.js" Assembly="MyAsembly" Path="/MyVirtualLocation/MyFile.js">
	</Scripts>
</telerik:RadScriptManager>
````



* **RadScriptManager** does not support the automatic switch to debug-mode. For example, having an assembly including ScriptReferences in both Debug and Release ScriptMode, where the application is in a debug mode, RadScriptManager will output only the "Release" ones. If debugging is needed, the **EnableScriptCombine** property can be set to **False**.

* **RadScriptManager** currently does not display IntelliSense information for the <Scripts> property and the ScriptReferences.
