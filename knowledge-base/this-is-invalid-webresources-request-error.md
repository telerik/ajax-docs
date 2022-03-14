---
title: This Is an Invalid WebResource Request Error
page_title: This Is an Invalid WebResource Request Error
description: "When working with Telerik UI for ASP.NET AJAX, an invalid WebResource request occurs."
slug: introduction/radcontrols-for-asp.net-ajax-fundamentals/troubleshooting/web-resources-troubleshooting
tags: telerik, asp, net, ajax, troubleshooting, this, is, an, invalid, webresource, request, error
type: troubleshooting
category: knowledge-base
res_type: kb
published: True
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>Progress® Telerik® UI for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>

## Description

When working with Telerik UI for ASP.NET AJAX, I get an error that this is an invalid WebResource request.

## Error Message

`This is an invalid WebResource request error.`

## Cause

Such issues often occur when a user has a copy of the page that contains WebResource URLs that have been invalidated by the server, that is, the machine key changed or the Application Pool was recycled. When such a cached copy of the page with the old links is executed, the browser will invoke GET requests for those WebResource URLs and .NET will not be able to decode them anymore. WebResource URLs are handled by the .NET code and individual controls, such as the Telerik controls, cannot affect or fix this.

## Solution

Even though it is not currently possible to solve this issue, you can use the CDNs for [scripts]({%slug scriptmanager/cdn-support/overview%}) and [skins]({%slug stylesheetmanager/cdn-support/overview%}) plus the [MS AJAX CDN](https://www.asp.net/ajax/cdn#Using_ASPNET_Ajax_from_the_CDN_20) so that WebResources are used as rarely as possible. As a result, only some dialogs and the binary image and file uploads will keep using WebResources.

You can also alleviate the issue by using the following approaches:

* After a while, the browser caches are cleaned up and the users will get correct links, so simply waiting a bit may alleviate the situation.

* Clearing the cache of the browser always helps. Press `Ctrl`+`Shift`+`Del` to open the **Clear Browsing Data** browser dialog or test in Incognito mode.

* Look into ways to increase the Application Pool recycle time or implement a heartbeat-like functionality to keep it alive at all times.

* You may experience the error in a load-balanced environment where the servers are configured to use different machine keys. In this case, the request to a resource may fail due to the encrypted `querystring` parameter which identifies the resource as being non-decryptable on the other server.

	To solve this issue, ensure that all servers use the same `<machineKey>` and `Telerik.Web.UI.WebResourceSession` as explained in the [Integrating RadControls in WebFarm/WebGarden](https://www.telerik.com/blogs/integrate-radcontrols-for-asp.net-ajax-in-a-webfarm-or-webgarden) blog post.
