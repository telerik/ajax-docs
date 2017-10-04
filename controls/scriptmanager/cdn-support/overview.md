---
title: Overview
page_title: CDN Support Overview | RadScriptManager for ASP.NET AJAX Documentation
description: Overview
slug: scriptmanager/cdn-support/overview
tags: overview
published: True
position: 0
---

# CDN Support Overview



Starting with the **Q3 2009 Service Pack 1** release you will be able to load the controls scripts and skins from the Telerik CDN. Telerik CDN is hosted on the Amazon CloudFront service. This is a **global content delivery service** with edge locations in the US, Europe and Asia.

Using the Content Delivery Network has a number of advantages:

* **Reduced latency** – requests will be automatically redirected to the nearest server

* **Compressed output** - the javascript files are already compressed so they are in minimum size

* **Better use of caching** – each resource only needs to be downloaded once

* **Reduced hosting expenses** – we host the resources for you so you can pay less

>note Note that the [RadScriptManager]({%slug scriptmanager/overview%}) does **NOT** combine the web resources needed for the Telerik controls in a single request when the **CDN** is enabled.
>




**Caching** is what a CDN is all about. Say you have a number of applications that all utilize RadGrid. A customer will load the RadGrid scripts just once and then use the cached version until he clears his browser’s cache. Proxies will also aggressively cache these resources.

## When NOT to use CDN?

* Intranet applications in particular are a bad candidate for it. Your Intranet is likely to be a lot faster than any type of CDN. You’ll also lose the ability to run your application without an Internet connection.

* When you are using a latest internal build (not an official one).

## How to enable Telerik CDN

>note CDN support will be enabled ONLY for:
>
* Official Major Releases
* Official Service Packs
* BETA releases>


1. Make sure you are using Telerik.Web.UI version 2009.3.1207 (**Q3 2009 SP1**) or later.

2. Set the **CdnSettings-TelerikCdn** property of the RadScriptManager to Enabled:

````ASPNET
<telerik:RadScriptManager 
	ID="RadScriptManager1"    
	runat="server"    
	CdnSettings-TelerikCdn="Enabled">
</telerik:RadScriptManager>
				
````



Another way to set that property is to use the composite **<CdnSettings>** property of RadScriptManager:

````ASPNET
<telerik:RadScriptManager 
	ID="RadScriptManager1" 
	runat="server">
	<CdnSettings TelerikCdn="Enabled" />
</telerik:RadScriptManager>
````



Moreover, you can enable the CDN support **globally** by adding the following keys in the <AppSettings> section of your web.config file:

````XML
<appSettings>    
	<add key="Telerik.ScriptManager.TelerikCdn" value="Enabled" />    
	<add key="Telerik.StyleSheetManager.TelerikCdn" value="Enabled" />
</appSettings>
````



Note, that the second line will enable the [CDN support for the CSS and image files]({%slug stylesheetmanager/cdn-support/overview%}) for the skins.

## How are my users affected?

The Telerik CDN uses the following host names for loading the control resources:

* **http://aspnet-scripts.telerikstatic.com** - for the scripts;

* **http://aspnet-skins.telerikstatic.com** - for the skins (css and images);

Your users need to have access to the above URLs.



## What about SSL?

When a SSL connection is used RadScriptManager and RadStyleSheetManager will use the native Amazon CloudFront distribution hosts:

* **https://d2i2wahzwrm1n5.cloudfront.net** - for the scripts;

* **https://d35islomi5rx1v.cloudfront.net** - for the skins (css and images);



## Detailed information with an example

Let's add some RadControls on the page (RadMenu, RadTabStrip, RadListBox) and RadScriptManager with enabled CDN support. When you run the page you will observe the following:

1. RadScriptManager combined the **MicrosoftAjax.js** and **MicrosoftAjaxWebForms.js** into a single compressed axd resource.

2. The Core.js, jQuery.js and all the scripts needed for the RadControls are loaded from the CDN network. If the browser supports compression (the request has **Accept-Encoding** HTTP header set to *gzip,deflate*) then the files are served **compressed**. The compression is done before uploading of the files to the CDN network, so there are no CPU cycles on the server to compress at run-time. If the browser is **IE6** then the files are served **uncompressed** (from another URL) that is because earlier versions of the browser has problems with decompressing the output.

Here is how the html output looks like:

````HTML
 <script src="/Telerik.Web.UI.WebResource.axd?_TSM_HiddenField_=RadScriptManager1_TSM&amp;compress=1&amp;_TSM_CombinedScripts_=%3b%3bSystem.Web.Extensions%2c+Version%3d3.5.0.0%2c+Culture%3dneutral%2c+PublicKeyToken%3d31bf3856ad364e35%3aen-US%3a0d787d5c-3903-4814-ad72-296cea810318%3aea597d4b%3ab25378d2" type="text/javascript"></script><script src="http://aspnet-scripts.telerikstatic.com/ajaxz/2009.3.1203/Common/Core.js" type="text/javascript"></script><script src="http://aspnet-scripts.telerikstatic.com/ajaxz/2009.3.1203/Common/jQuery.js" type="text/javascript"></script><script src="http://aspnet-scripts.telerikstatic.com/ajaxz/2009.3.1203/Common/jQueryPlugins.js" type="text/javascript"></script><script src="http://aspnet-scripts.telerikstatic.com/ajaxz/2009.3.1203/Common/Scrolling/ScrollingScripts.js" type="text/javascript"></script><script src="http://aspnet-scripts.telerikstatic.com/ajaxz/2009.3.1203/Common/Navigation/NavigationScripts.js" type="text/javascript"></script><script src="http://aspnet-scripts.telerikstatic.com/ajaxz/2009.3.1203/Menu/RadMenuScripts.js" type="text/javascript"></script><script src="http://aspnet-scripts.telerikstatic.com/ajaxz/2009.3.1203/TabStrip/RadTabStripScripts.js" type="text/javascript"></script><script src="http://aspnet-scripts.telerikstatic.com/ajaxz/2009.3.1203/ListBox/RadListBoxScripts.js" type="text/javascript"></script>
````



Note that scripts from the CDN are placed in the **/ajaxz/** folder - this means that the compressed file is downloaded. If your browser does not support content encoding (or it is IE6) then you will notice that the scripts are loaded from the **/ajax/** folder.



## More Optimizations

To further optimize the load of the scripts you can download the **MicrosoftAjax.js** file from the Microsoft CDN (valid for **.NET 3.5** only):

````ASPNET
<telerik:RadScriptManager 
	ID="RadScriptManager1" 
	runat="server">    
	<CdnSettings TelerikCdn="Enabled" />    
	<Scripts>        
	<asp:ScriptReference 
		Assembly="System.Web.Extensions, Version=3.5.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35" 
		Name="MicrosoftAjax.js"
		Path="http://ajax.microsoft.com/ajax/3.5/MicrosoftAjax.js" />                           
	</Scripts>
</telerik:RadScriptManager>
````





## Recommended setup

## ASP.NET 2.0

````ASPNET
<telerik:RadScriptManager 
	runat="server" 
	ID="RadScriptManager1">    
	<CdnSettings TelerikCdn="Enabled" />
</telerik:RadScriptManager> 

<telerik:RadStyleSheetManager 
	runat="server" 
	ID="RadStyleSheetManager1">    
	<CdnSettings TelerikCdn="Enabled" />
</telerik:RadStyleSheetManager>
````



The Telerik resources will be loaded from the CDN, MS AJAX will be served by RadScriptManager.

## ASP.NET 3.5

````ASPNET
<telerik:RadScriptManager 
	runat="server" 
	ID="RadScriptManager1">    
	<CdnSettings TelerikCdn="Enabled" />    
	<Scripts>        
		<asp:ScriptReference Assembly="System.Web.Extensions, Version=3.5.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35"                             
		Name="MicrosoftAjax.js"                             
		Path="http://ajax.microsoft.com/ajax/3.5/MicrosoftAjax.js" />    
	</Scripts>
</telerik:RadScriptManager>
````



Both MS AJAX scripts and Telerik resources will be served from the respective CDNs.

## ASP.NET 4.0

````ASPNET
<telerik:RadScriptManager 
	runat="server" 
	ID="RadScriptManager1" 
	EnableCdn="true"> 
</telerik:RadScriptManager>
<telerik:RadStyleSheetManager 
	runat="server" 
	ID="RadStyleSheetManager1">    
	<CdnSettings TelerikCdn="Enabled" />
</telerik:RadStyleSheetManager>
````



All ASP.NET scripts and Telerik resources are served from the respective CDNs.

## Additional Resources

* [CDN Fallback to Local Resources](http://www.telerik.com/support/code-library/cdn-fallback)
