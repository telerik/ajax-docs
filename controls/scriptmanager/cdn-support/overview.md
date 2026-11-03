---
title: Overview
page_title: CDN Support Overview - RadScriptManager
description: Learn about the CDN support in the ScriptManager control for optimizing script loading in web apps.
slug: scriptmanager/cdn-support/overview
components: ["scriptmanager"]
tags: overview
published: True
position: 0
---

# CDN Support Overview

Telerik UI for ASP.NET AJAX can load the control scripts and skins from a Content Delivery Network (CDN) instead of serving them from the application. The CDN support has been available since Q3 2009 SP1 and is included in all supported versions.

>important **The Telerik-hosted CDN is discontinued.** Starting with the **November 11, 2026 release**, new versions of the Telerik UI for ASP.NET AJAX scripts and skins are **no longer published** to the Telerik CDN (the Amazon CloudFront and `telerikstatic.com` hosts). The files of the versions that are already published remain accessible, but no new releases, service packs, or bug fixes will be added to them. To use a CDN with newer versions, host the resources yourself or use a CDN provider of your choice. For more information, see the [Telerik CDN Is Discontinued](#telerik-cdn-is-discontinued) section below and the [Custom CDN Provider]({%slug scriptmanager/cdn-support/custom-cdn-provider%}) article.

Using a Content Delivery Network has a number of advantages:

* **Reduced latency** – requests will be automatically redirected to the nearest server

* **Better use of caching** – each resource only needs to be downloaded once

* **Reduced hosting load** – the resources are delivered by the CDN instead of your web server

>note Note that the [RadScriptManager]({%slug scriptmanager/overview%}) does **NOT** combine the web resources needed for the Telerik controls in a single request when the **CDN** is enabled.
>


**Caching** is what a CDN is all about. Say you have a number of applications that all utilize RadGrid. A customer will load the RadGrid scripts just once and then use the cached version until they clear the browser cache. Proxies will also aggressively cache these resources.

## When NOT to use CDN?

* Intranet scenarios often do not benefit from external CDNs, as internal networks can provide lower latency and do not depend on external connectivity. 

* When you are using an internal build (not an official one).

## Telerik CDN Is Discontinued

Starting with the **November 11, 2026 release**, the Telerik CDN no longer receives new versions of the Telerik UI for ASP.NET AJAX resources. This affects the following hosts that were used by the built-in CDN support:

* `https://d2i2wahzwrm1n5.cloudfront.net` - scripts
* `https://d35islomi5rx1v.cloudfront.net` - skins (CSS and images)
* `http(s)://aspnet-scripts.telerikstatic.com` - scripts
* `http(s)://aspnet-skins.telerikstatic.com` - skins (CSS and images)

The files of the versions that were published before the discontinuation remain accessible, so applications that use older versions continue to work.

### What happens when you upgrade

When you upgrade to a version that no longer has resources on the Telerik CDN, the following behavior applies:

* If `TelerikCdn` is `Enabled` (or `Auto` and `EnableCdn` is `true` on the RadScriptManager) and you **have not** changed `BaseUrl` and `BaseSecureUrl`, or they still point to one of the discontinued Telerik hosts listed above, the scripts are **served from the Telerik.Web.UI assembly**, exactly as if `TelerikCdn` was `Disabled`. You do not need to change your code or web.config to keep the application working, but the resources are no longer delivered by a CDN.

* If `BaseUrl` and `BaseSecureUrl` point to your own host or CDN provider, they continue to work as before. See the [Custom CDN Provider]({%slug scriptmanager/cdn-support/custom-cdn-provider%}) article.

* Because the resources are served from the assembly in the first scenario, the [combined request]({%slug scriptmanager/cdn-support/combined-request-for-telerik-controls%}) (`CombinedResource`) is not applied either, as it requires a working CDN.

>tip If you want to keep the benefits of a CDN with the new releases, follow the steps in the [Custom CDN Provider]({%slug scriptmanager/cdn-support/custom-cdn-provider%}) article to host the resources on your own server or on a commercial CDN provider, such as Cloudflare, Amazon CloudFront, or Azure Front Door. The CDN resource package is available for download in your [Telerik account](https://www.telerik.com/account).

>note The Telerik UI for ASP.NET AJAX resources are not published as an npm package and are not available through public CDNs such as jsDelivr or unpkg.

### Recommended actions

* Remove any hard-coded references to the discontinued Telerik CDN hosts from your pages, master pages, custom scripts, and Content Security Policy (CSP) rules.

* If you do not need a CDN, set `TelerikCdn` to `Disabled` (or remove the setting) to serve the resources from the assembly.

* If you need a CDN, configure a [custom CDN provider]({%slug scriptmanager/cdn-support/custom-cdn-provider%}).

## How to enable the CDN support

By default, `TelerikCdn` is set to `Auto`. In this mode, the Telerik CDN is used only when `EnableCdn` is set to `true` on the RadScriptManager, and the resources are served from the assembly otherwise. Since the Telerik CDN is discontinued, `EnableCdn="true"` alone (without custom `BaseUrl` and `BaseSecureUrl`) loads only the Microsoft AJAX scripts from the Microsoft CDN, while the Telerik scripts are served from the assembly. To load the Telerik scripts from a CDN, set `TelerikCdn` to `Enabled` and specify your own base URLs.

>important The Telerik CDN settings take effect only through the **RadScriptManager** (and the **RadStyleSheetManager** for the skins). The standard `asp:ScriptManager` does not know about them, so `EnableCdn="true"` on it loads only the Microsoft AJAX scripts from the Microsoft CDN, while the Telerik scripts and skins are still served from the assembly through `Telerik.Web.UI.WebResource.axd`.

>note Since the Telerik CDN is discontinued for new releases, enabling `TelerikCdn` **without** a custom `BaseUrl` and `BaseSecureUrl` results in serving the resources from the assembly. To load the resources from a CDN, always specify your own base URLs as described in the [Custom CDN Provider]({%slug scriptmanager/cdn-support/custom-cdn-provider%}) article.

The **RadStyleSheetManager** has the same configuration for enabling the CDN and for convenience, the examples below show enabling the CDN for the styles along with the scripts. In the examples, `my.favorite.cdn` stands for your own CDN host, which hosts the resources as described in the [Custom CDN Provider]({%slug scriptmanager/cdn-support/custom-cdn-provider%}) article.

>note CDN support will be enabled ONLY for:
>
* Official Major Releases
* Official Service Packs


1. Host the Telerik UI for ASP.NET AJAX resources for your version on your own server or CDN provider, as described in the [Custom CDN Provider]({%slug scriptmanager/cdn-support/custom-cdn-provider%}) article.

2. Set the **CdnSettings-TelerikCdn**, **CdnSettings-BaseUrl** and **CdnSettings-BaseSecureUrl** properties of the RadScriptManager and RadStyleSheetManager:

````ASPNET
<telerik:RadScriptManager 
	ID="RadScriptManager1"    
	runat="server"    
	CdnSettings-TelerikCdn="Enabled"
	CdnSettings-BaseUrl="http://my.favorite.cdn"
	CdnSettings-BaseSecureUrl="https://my.favorite.cdn">
</telerik:RadScriptManager>

<telerik:RadStyleSheetManager 
	ID="RadStyleSheetManager1"
	runat="server" 
	CdnSettings-TelerikCdn="Enabled"
	CdnSettings-BaseUrl="http://my.favorite.cdn"
	CdnSettings-BaseSecureUrl="https://my.favorite.cdn">
</telerik:RadStyleSheetManager>
				
````


Another way to set these properties is to use the composite **<CdnSettings>** property of RadScriptManager and RadStyleSheetManager:

````ASPNET
<telerik:RadScriptManager 
	ID="RadScriptManager1" 
	runat="server">
	<CdnSettings TelerikCdn="Enabled" BaseUrl="http://my.favorite.cdn" BaseSecureUrl="https://my.favorite.cdn" />
</telerik:RadScriptManager>

<telerik:RadStyleSheetManager 
	ID="RadStyleSheetManager1"
	runat="server">
    <CdnSettings TelerikCdn="Enabled" BaseUrl="http://my.favorite.cdn" BaseSecureUrl="https://my.favorite.cdn" />
</telerik:RadStyleSheetManager>
````



Moreover, you can enable the CDN support **globally** by adding the following keys in the <AppSettings> section of your web.config file:

````XML
<appSettings>    
	<add key="Telerik.ScriptManager.TelerikCdn" value="Enabled" />    
	<add key="Telerik.ScriptManager.TelerikCdn.BaseUrl" value="http://my.favorite.cdn" />    
	<add key="Telerik.ScriptManager.TelerikCdn.BaseSecureUrl" value="https://my.favorite.cdn" />    
	<add key="Telerik.StyleSheetManager.TelerikCdn" value="Enabled" />
	<add key="Telerik.StyleSheetManager.TelerikCdn.BaseUrl" value="http://my.favorite.cdn" />
	<add key="Telerik.StyleSheetManager.TelerikCdn.BaseSecureUrl" value="https://my.favorite.cdn" />
</appSettings>
````


Note, that the `Telerik.StyleSheetManager.*` keys enable the [CDN support for the CSS and image files]({%slug stylesheetmanager/cdn-support/overview%}) for the skins. The scripts and the skins are served from separate base URLs, so you can host them on different origins.

## How are my users affected?

When the CDN support is enabled with a custom `BaseUrl` and `BaseSecureUrl` (`<CdnSettings TelerikCdn="Enabled" BaseUrl="..." BaseSecureUrl="..." />`), the RadScriptManager and RadStyleSheetManager render CDN URLs that match the page protocol: `BaseUrl` is used for HTTP requests and `BaseSecureUrl` for HTTPS requests. The framework renders the URLs based on the page request scheme, and modern browsers may upgrade requests to HTTPS (HSTS, corporate policies, etc.), so it is recommended that your CDN supports HTTPS.

The rendered URLs have the `{BaseUrl}/ajax/{version}/...` or `{BaseUrl}/ajaxz/{version}/...` format, where `{version}` is the short version of the Telerik.Web.UI assembly (for example, `2025.2.609`). Make sure the folder structure on your CDN matches it.

> Note: If your environment uses firewalls, proxies, or strict corporate security policies, ensure that your CDN domain is allowed. Otherwise, disable CDN support to serve resources locally.

## More Optimizations

To further optimize the load of the scripts you can download the Microsoft ASP.NET AJAX scripts from the Microsoft CDN by setting EnableCdn="true":

````ASPNET
<telerik:RadScriptManager 
	runat="server" 
	ID="RadScriptManager1" 
	EnableCdn="true"> 
	<CdnSettings TelerikCdn="Enabled" BaseUrl="http://my.favorite.cdn" BaseSecureUrl="https://my.favorite.cdn" />
</telerik:RadScriptManager>
<telerik:RadStyleSheetManager 
	runat="server" 
	ID="RadStyleSheetManager1">    
	<CdnSettings TelerikCdn="Enabled" BaseUrl="http://my.favorite.cdn" BaseSecureUrl="https://my.favorite.cdn" />
</telerik:RadStyleSheetManager>
````

Both MS AJAX scripts and Telerik resources will be served from the respective CDNs.



## Additional Resources

* [Configure Local CDN](https://www.youtube.com/watch?v=iPcvj7Vl5TM)
