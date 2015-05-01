---
title: Overview
page_title: Troubleshooting Overview | RadScriptManager for ASP.NET AJAX Documentation
description: Overview
slug: scriptmanager/troubleshooting/overview
tags: overview
published: True
position: 0
---

# Troubleshooting Overview



## 

**Problem**: 

**When using RadScriptManager with**

Cause:There are different reasons for this error to happen. Please, check the list below:
1) RadScriptManager was unable to correctly determine if the browser supports gzip/deflate compression;
2) A custom ScriptReference is added to RadScriptManager (having a Path property specified), which depends on the combined scripts or vice-versa;
3) There is an unfound bug in RadScriptManager;

Resolution:Below are the respective resolutions for the problems, described above:
1) Implement your own browser detection mechanism and use the **OutputCompression** property of RadScriptManager to control it. You might also try to reinstall the browser,
 or restore its initial settings;2) Upgrade to the latest Telerik.Web.UI version. You can download it from your [ClientNet](http://www.telerik.com/client.net/my-client.net.aspx) 
 account. RadScriptManager now supports the addition/insertion of custom scripts depending/dependent on other scripts. The custom script is added as a separate  `<script>` tag and the general merged script is split respectively.
 3) Check the [Release notes](http://www.telerik.com/products/aspnet-ajax/release-history.aspx) - the problem might have already 
 been fixed. Upgrade to the latest Telerik.Web.UI version and check if the bug is not fixed while fixing another one. [Send us](http://www.telerik.com/support/home.aspx) a 
 small website, demonstrating theproblem.



**Problem:**

**You receive the following error even if you had already added the handler.**

**~/Telerik.Web.UI.WebResource.axd' is missing in web.config. RadScriptManager requires a HttpHandler registration in web.config.**

Cause:

The <handlers> or <httpHandlers> sections are placed under the <location> section and RadScriptManager cannot find them.

Resolution:

Set the **EnableHandlerDetection="false"** property of RadScriptManager.



**Problem:**

**There is not RadScriptManagerProxy, what should I do?**

Resolution

You can use the **ScriptManagerProxy**. Yes, place the RadScriptManager control on the page /master page and the **ScriptManagerControl** on the user control / content page.

**Problem:**

**The RadScriptManager is incompatible with the**

**NOTE**: Since the winter of 2013, the AjaxControlToolkit is incompatible with the standard`asp:ScriptManager` and, thus, by extension, with `telerik:RadScriptManager`.This means that using the **ToolkitScriptManager** can break the Telerik controls and a potential workaround is setting its**CombineScript** property to **false**.Moreover, we cannot guarantee that the controls from the AjaxControlToolkit suite will work when RadScriptManager is used.

For older version of the AjaxControlToolkit, there are specific errors and resolutions that you can find below.

The following error appears when controls from the ACT are present on the page:

Microsoft JScript runtime error: AjaxControlToolkit requires ASP.NET Ajax 4.0 scripts. Ensure the correct version of the scripts are referenced. If you are using an ASP.NET ScriptManager, switch to the ToolkitScriptManager in AjaxControlToolkit.dll.



Resolution for .NET 4.0 projects:

Upgrade the RadControls for ASP.NET AJAX version 2010.1.625 or newer.

**Important:** Make sure you use the .NET 4.0 build of both Telerik.Web.UI.dll and AjaxControlToolkit.dll

If upgrade is not option you can use the following workaround:

````ASPNET
	    <telerik:RadScriptManager runat="server" EnableScriptCombine="false" /> 
````



Resolution for .NET 3.5 projects:

Override the references to MicrosoftAjax.js and MicrosoftAjaxWebForms.js to point to the ACT script files.

````ASPNET
<telerik:RadScriptManager runat="server">
   <Scripts>
	   <asp:ScriptReference Assembly="System.Web.Extensions, Version=3.5.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35"
		   Name="MicrosoftAjax.js" Path="Scripts-40412/MicrosoftAjax.js" />
	   <asp:ScriptReference Assembly="System.Web.Extensions, Version=3.5.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35"
		   Name="MicrosoftAjaxWebForms.js" Path="Scripts-40412/MicrosoftAjaxWebForms.js" />
   </Scripts>
</telerik:RadScriptManager>   
````



The script files are obtained by building the ACT from source. Sample project, including the scripts for version 40412, is attached.

**Problem:**

**Using RadControls with RadScriptManager on your login page throws one of the following errors:**

**ASP.NET Ajax client-side framework failed to load**

**'Sys' is undefined**

**'Telerik.Web.UI' is undefined**

Cause:

As the website denies access to all pages to unauthorized users, access to the **Telerik.Web.UI.WebResource.axd** handler is unauthorized. This causes the handler to serve the content of the login page instead of the combined scripts, hence the error.

	Resolution:

Add a **<location>** section to the application configuration file to allow access to **Telerik.Web.UI.WebResource.axd** to all users, like:

````XML
<configuration>
...
<location path="Telerik.Web.UI.WebResource.axd">
   <system.web>
	 <authorization>
	   <allow users="*"/>
	 </authorization>
   </system.web>
 </location>
...
</configuration> 
````





**Problem:**

**Getting**

Resolution

The issue is observed because all such handler must be placed at the end of the web.config otherwise they are going to intercept all requests for other**.axd** handlers. That is why in order to solve the problem one should structure the web.config in a way that the specialized handlers, such as**Telerik.Web.UI.WebResource.axd**, are placed in the beginning of the web.config whereas the more generic ones, which accept path with **.axd** are placed at the end.

**Current limitation:**

**Gettng**

Resolution

The issue is observed because the standard ScriptManager automatically resolves the short name whereas RadScriptManager require full name. We will optimize that behavior in the future, however until then please make use of the**fully qualified name** as below.

````ASPNET
	    <asp:ScriptReference Name="WebForms.js" Assembly=" System.Web, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a" />
	    <asp:ScriptReference Name="WebUIValidation.js" Assembly=" System.Web, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a"" /
````


