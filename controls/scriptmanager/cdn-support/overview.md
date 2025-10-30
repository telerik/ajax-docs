---
title: Overview
page_title: CDN Support Overview - RadScriptManager
description: Learn about the CDN support in the ScriptManager control for optimizing script loading in web apps.
slug: scriptmanager/cdn-support/overview
tags: overview
published: True
position: 0
---

# CDN Support Overview

Telerik UI for ASP.NET AJAX supports loading control scripts and skins from the Telerik CDN. This functionality has been available since Q3 2009 SP1 and is included in all supported versions. Telerik CDN is hosted on the Amazon CloudFront service. This is a **global content delivery service** with edge locations in the US, Europe and Asia.

Using the Content Delivery Network has a number of advantages:

* **Reduced latency** – requests will be automatically redirected to the nearest server

* **Better use of caching** – each resource only needs to be downloaded once

* **Reduced hosting expenses** – we host the resources for you so you can pay less

>note Note that the [RadScriptManager]({%slug scriptmanager/overview%}) does **NOT** combine the web resources needed for the Telerik controls in a single request when the **CDN** is enabled.
>


**Caching** is what a CDN is all about. Say you have a number of applications that all utilize RadGrid. A customer will load the RadGrid scripts just once and then use the cached version until they clear the browser cache. Proxies will also aggressively cache these resources.

## When NOT to use CDN?

* Intranet scenarios often do not benefit from external CDNs, as internal networks can provide lower latency and do not depend on external connectivity. 

* When you are using an internal build (not an official one).

## How to enable Telerik CDN

The **RadStyleSheetManager** has the same configuration for enabling the Telerik CDN and for convenience, the example below will show enabling the Telerik CDN for the styles along with the scripts.

>note CDN support will be enabled ONLY for:
>
* Official Major Releases
* Official Service Packs


1. Make sure you are using Telerik.Web.UI version 2009.3.1207 (**Q3 2009 SP1**) or later.

2. Set the **CdnSettings-TelerikCdn** property of the RadScriptManager and RadStyleSheetManager to Enabled:

````ASPNET
<telerik:RadScriptManager 
	ID="RadScriptManager1"    
	runat="server"    
	CdnSettings-TelerikCdn="Enabled">
</telerik:RadScriptManager>

<telerik:RadStyleSheetManager 
	ID="RadStyleSheetManager1"
	runat="server" 
    CdnSettings-TelerikCdn="Enabled">
</telerik:RadStyleSheetManager>
				
````


Another way to set that property is to use the composite **<CdnSettings>** property of RadScriptManager:

````ASPNET
<telerik:RadScriptManager 
	ID="RadScriptManager1" 
	runat="server">
	<CdnSettings TelerikCdn="Enabled" />
</telerik:RadScriptManager>

<telerik:RadStyleSheetManager 
	ID="RadStyleSheetManager1"
	runat="server">
    <CdnSettings TelerikCdn="Enabled" />
</telerik:RadStyleSheetManager>
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

When CDN support is enabled (`EnableCdn="true"` or `<CdnSettings TelerikCdn="Enabled" />`), the RadScriptManager and RadStyleSheetManager render CDN URLs that match the page protocol (HTTP or HTTPS). The CDN does not switch protocols on its own; the framework renders URLs based on the page request scheme, and modern browsers may upgrade requests to HTTPS (HSTS, corporate policies, etc.). Telerik provides distinct host names for each protocol.

Active CDN host names:

CloudFront (HTTPS pages):
* **https://d2i2wahzwrm1n5.cloudfront.net** – scripts
* **https://d35islomi5rx1v.cloudfront.net** – skins (CSS and images)

TelerikStatic (supports both HTTP and HTTPS):
* **http://aspnet-scripts.telerikstatic.com** / **https://aspnet-scripts.telerikstatic.com** – scripts
* **http://aspnet-skins.telerikstatic.com** / **https://aspnet-skins.telerikstatic.com** – skins (CSS and images)


These CDN endpoints are certificate-enabled and served over secure HTTPS. The actual domain used is selected automatically by the framework based on protocol and browser behavior. Do not hard-code CDN URLs; always rely on the built-in CDN support.

> Note: If your environment uses firewalls, proxies, or strict corporate security policies, ensure the Telerik CDN domains are allowed. Otherwise, disable CDN support to serve resources locally.

## More Optimizations

To further optimize the load of the scripts you can download the Microsoft ASP.NET AJAX scripts from the Microsoft CDN by setting EnableCdn="true":

````ASPNET
<telerik:RadScriptManager 
	runat="server" 
	ID="RadScriptManager1" 
	EnableCdn="true"> 
	<CdnSettings TelerikCdn="Enabled" />
</telerik:RadScriptManager>
<telerik:RadStyleSheetManager 
	runat="server" 
	ID="RadStyleSheetManager1">    
	<CdnSettings TelerikCdn="Enabled" />
</telerik:RadStyleSheetManager>
````

Both MS AJAX scripts and Telerik resources will be served from the respective CDNs.



## Additional Resources

* [Configure Local CDN](https://www.youtube.com/watch?v=iPcvj7Vl5TM)
