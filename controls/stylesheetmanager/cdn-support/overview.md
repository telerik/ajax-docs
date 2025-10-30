---
title: Overview
page_title: CDN Support Overview - RadStyleSheetManager
description: Check our Web Forms article about Overview.
slug: stylesheetmanager/cdn-support/overview
tags: overview
published: True
position: 0
---

# CDN Support Overview

Telerik UI for ASP.NET AJAX supports loading control skins (CSS and images) from the Telerik CDN. This feature has been available since Q3 2009 SP1 and is included in all supported versions. The Telerik CDN uses Amazon CloudFront to deliver resources from global edge locations in the US, Europe, and Asia.

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


## How to enable Telerik CDN

1. Make sure you are using Telerik.Web.UI version 2009.3.1207 (**Q3 2009 SP1**) or later.

2. Set the **CdnSettings-TelerikCdn** property of the RadStyleSheetManager to Enabled:

````ASPNET
<telerik:RadStyleSheetManager 
    ID="RadStyleSheetManager1" 
    runat="server" 
    CdnSettings-TelerikCdn="Enabled" />
````

Another way to set that property is to use the composite **`<CdnSettings>`** property of RadStyleSheetManager:

````ASPNET
<telerik:RadStyleSheetManager 
    ID="RadStyleSheetManager1" 
    runat="server">
    <CdnSettings TelerikCdn="Enabled" />
</telerik:RadStyleSheetManager>
````



Moreover, you can enable the CDN support **globally** by adding the following keys in the `<appSettings>` section of your web.config file:

````XML
<appsettings>   
    <add key="Telerik.ScriptManager.TelerikCdn" value="Enabled" />   
    <add key="Telerik.StyleSheetManager.TelerikCdn" value="Enabled" />
</appsettings>
````



Note, that the first line will enable the CDN support for the [JavasSript files]({%slug scriptmanager/cdn-support/overview%}).

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


## Additional Resources

* [CDN Fallback to Local Resources](https://www.telerik.com/support/code-library/cdn-fallback)

