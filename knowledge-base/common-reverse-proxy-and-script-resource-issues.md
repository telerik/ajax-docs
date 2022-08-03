---
title: Reverse Proxy (ARR) and Script Resource Issues
description: Reverse Proxy (ARR) and Script Resource Issues. Check it now!
type: how-to
page_title: Reverse Proxy (ARR) and Script Resource Issues
slug: common-reverse-proxy-and-script-resource-issues
res_type: kb
---

### Problem

When executing this page directly from the application server everything works as expected.

Going through the reverse proxy server, results are in a 'pending' call to a script resource when the application is accessed. The request eventually times out. Then, JavaScript errors may occur (such as `'Sys.WebForms.PageRequestManager' is null or not an object, 'Telerik' is undefined`).

Basically, the Telerik controls do not work behind a reverse proxy (ARR).

### Description

The problem is most likely due to the fact that the proxy server is caching the HTTP handlers we use to get the needed WebResources and this makes them invalid. For this reason the controls are unable to load their scripts and resources and do not work.

The Telerik UI for ASP.NET AJAX controls rely heavily on WebResource requests to fetch the necessary scripts and styles they require to operate. This is the standard (default) way to fetch resources in the MS AJAX library and if it does not work, it is likely the the framework itself will not operate. Thus, Telerik UI for ASP.NET AJAX does not officially support (reverse) proxy scenarios.

You need to ensure that all requests return successfully.

### Solution

To fix it you can try the following:

- Exclude the [Telerik-specific handlers]({%slug general-information/web-config-settings-overview%}#mandatory-additions-to-the-webconfig) from the proxy caching
- Use a RadScriptManager instead of the asp:ScriptManager as then the requests for the Telerik controls scripts will go through the Telerik handler and not the standard ScriptResource.axd handler. This may help in case the standard handler has some special settings built-in into IIS.
- Other possible issues with the URL:
    - WebResource URLs can be very long so the character length (or size, depending on the configuration options) may need to be increased as well.
    - WebResource requests use querystrings so they must be supported by the proxy (see the [Reverse Proxy (ARR) and ScriptResource.axd Issue forum thread](https://www.telerik.com/forums/aspnet-ajax?tagId=706)).
- Enable the CDN scripts as explained in the following help articles: [Script CDN Overview]({%slug scriptmanager/cdn-support/overview%})
 and [StyleSheet CDN]({%slug stylesheetmanager/cdn-support/overview%}).
- If the issue is with file uploads only, you can [create a custom file upload handler]({%slug asyncupload/how-to/how-to-extend-the-radasyncupload-handler%}) that will not get broken by the proxy.
- More tips for load balancing and HTTPS scenario are available in the following forum thread: [Asp.net Ajax Control with reverse proxy (ARR) on IIS](https://www.telerik.com/forums/asp-net-ajax-control-with-reverse-proxy-arr-on-iis).

 

