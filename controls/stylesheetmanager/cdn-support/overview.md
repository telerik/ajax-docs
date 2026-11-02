---
title: Overview
page_title: CDN Support Overview - RadStyleSheetManager
description: Check our Web Forms article about Overview.
slug: stylesheetmanager/cdn-support/overview
components: ["stylesheetmanager"]
tags: overview
published: True
position: 0
---

# CDN Support Overview

Telerik UI for ASP.NET AJAX can load the control skins (CSS and images) from a Content Delivery Network (CDN) instead of serving them from the application. This feature has been available since Q3 2009 SP1 and is included in all supported versions.

>important **The Telerik-hosted CDN is discontinued.** Starting with the **November 11, 2026 release**, new versions of the Telerik UI for ASP.NET AJAX skins and scripts are **no longer published** to the Telerik CDN (the Amazon CloudFront and `telerikstatic.com` hosts). The files of the versions that are already published remain accessible, but no new releases, service packs, or bug fixes will be added to them. To use a CDN with newer versions, host the resources yourself or use a CDN provider of your choice. For more information, see the [Telerik CDN Is Discontinued](#telerik-cdn-is-discontinued) section below and the [Custom CDN Provider]({%slug scriptmanager/cdn-support/custom-cdn-provider%}) article.

Using a Content Delivery Network offers several benefits:

* **Reduced latency** - requests are routed to the nearest CDN edge location
* **Improved caching** - resources are downloaded once and reused across sites and sessions
* **Reduced hosting load** - CDN delivery reduces bandwidth and hosting costs on your server

**Caching** is a key advantage. For example, if multiple applications use RadGrid, a user downloads the RadGrid CSS and images once, then continues using the cached resources until the browser cache is cleared. Network proxies may also cache these files aggressively.

## When NOT to use CDN

CDN usage may not be ideal in cases such as:

* **Intranet environments** - internal networks are often faster than external CDNs and may block external resource requests
* **Offline or restricted networks** - CDN requires internet access
* **Internal or development builds** - CDN is available only for official release versions

## Telerik CDN Is Discontinued

Starting with the **November 11, 2026 release**, the Telerik CDN no longer receives new versions of the Telerik UI for ASP.NET AJAX resources. This affects the following hosts that were used by the built-in CDN support:

* `https://d2i2wahzwrm1n5.cloudfront.net` - scripts
* `https://d35islomi5rx1v.cloudfront.net` - skins (CSS and images)
* `http(s)://aspnet-scripts.telerikstatic.com` - scripts
* `http(s)://aspnet-skins.telerikstatic.com` - skins (CSS and images)

The files of the versions that were published before the discontinuation remain accessible, so applications that use older versions continue to work.

### What happens when you upgrade

When you upgrade to a version that no longer has resources on the Telerik CDN, the following behavior applies:

* If `TelerikCdn` is `Enabled` and you **have not** changed `BaseUrl` and `BaseSecureUrl`, or they still point to one of the discontinued Telerik hosts listed above, the skins are **served from the Telerik.Web.UI assembly**, exactly as if `TelerikCdn` was `Disabled`. You do not need to change your code or web.config to keep the application working, but the resources are no longer delivered by a CDN.

* If `BaseUrl` and `BaseSecureUrl` point to your own host or CDN provider, they continue to work as before. See the [Custom CDN Provider]({%slug scriptmanager/cdn-support/custom-cdn-provider%}) article.

* Because the resources are served from the assembly in the first scenario, the [combined request]({%slug stylesheetmanager/cdn-support/combined-request-for-telerik-controls%}) (`CombinedResource`) is not applied either, as it requires a working CDN.

>tip If you want to keep the benefits of a CDN with the new releases, follow the steps in the [Custom CDN Provider]({%slug scriptmanager/cdn-support/custom-cdn-provider%}) article to host the resources on your own server or on a commercial CDN provider, such as Cloudflare, Amazon CloudFront, or Azure Front Door. The CDN resource package is available for download in your [Telerik account](https://www.telerik.com/account).

>note The Telerik UI for ASP.NET AJAX resources are not published as an npm package and are not available through public CDNs such as jsDelivr or unpkg.

### Recommended actions

* Remove any hard-coded references to the discontinued Telerik CDN hosts from your pages, master pages, custom stylesheets, and Content Security Policy (CSP) rules.

* If you do not need a CDN, set `TelerikCdn` to `Disabled` (or remove the setting) to serve the skins from the assembly.

* If you need a CDN, configure a [custom CDN provider]({%slug scriptmanager/cdn-support/custom-cdn-provider%}).

## How to enable the CDN support

By default, `TelerikCdn` is set to `Auto`. In this mode, the Telerik CDN is used only when `EnableCdn` is set to `true` on the RadScriptManager, and the skins are served from the assembly otherwise. Since the Telerik CDN is discontinued, `EnableCdn="true"` alone (without custom `BaseUrl` and `BaseSecureUrl`) does not load the skins from a CDN. To load the skins from a CDN, set `TelerikCdn` to `Enabled` and specify your own base URLs.

>note Since the Telerik CDN is discontinued for new releases, enabling `TelerikCdn` **without** a custom `BaseUrl` and `BaseSecureUrl` results in serving the resources from the assembly. To load the skins from a CDN, always specify your own base URLs as described in the [Custom CDN Provider]({%slug scriptmanager/cdn-support/custom-cdn-provider%}) article.

1. Host the Telerik UI for ASP.NET AJAX resources for your version on your own server or CDN provider, as described in the [Custom CDN Provider]({%slug scriptmanager/cdn-support/custom-cdn-provider%}) article.

2. Set the **CdnSettings-TelerikCdn**, **CdnSettings-BaseUrl** and **CdnSettings-BaseSecureUrl** properties of the RadStyleSheetManager (`my.favorite.cdn` stands for your own CDN host):

````ASPNET
<telerik:RadStyleSheetManager 
    ID="RadStyleSheetManager1" 
    runat="server" 
    CdnSettings-TelerikCdn="Enabled"
    CdnSettings-BaseUrl="http://my.favorite.cdn"
    CdnSettings-BaseSecureUrl="https://my.favorite.cdn" />
````

Another way to set these properties is to use the composite **`<CdnSettings>`** property of RadStyleSheetManager:

````ASPNET
<telerik:RadStyleSheetManager 
    ID="RadStyleSheetManager1" 
    runat="server">
    <CdnSettings TelerikCdn="Enabled" BaseUrl="http://my.favorite.cdn" BaseSecureUrl="https://my.favorite.cdn" />
</telerik:RadStyleSheetManager>
````



Moreover, you can enable the CDN support **globally** by adding the following keys in the `<appSettings>` section of your web.config file:

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



Note, that the `Telerik.ScriptManager.*` keys enable the CDN support for the [JavaScript files]({%slug scriptmanager/cdn-support/overview%}). The skins and the scripts are served from separate base URLs, so you can host them on different origins.

## How are my users affected?

When the CDN support is enabled with a custom `BaseUrl` and `BaseSecureUrl`, the RadStyleSheetManager renders CDN URLs that match the page protocol: `BaseUrl` is used for HTTP requests and `BaseSecureUrl` for HTTPS requests. The framework renders the URLs based on the page request scheme, and modern browsers may upgrade requests to HTTPS (HSTS, corporate policies, etc.), so it is recommended that your CDN supports HTTPS.

> Note: If your environment uses firewalls, proxies, or strict corporate security policies, ensure that your CDN domain is allowed. Otherwise, disable CDN support to serve resources locally.

