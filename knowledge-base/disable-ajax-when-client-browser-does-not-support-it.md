---
title: Disable AJAX with the AjaxManager When the Client Browser Does Not Support it
page_title: Disable AJAX with the AjaxManager When the Client Browser Does Not Support it
description: "Learn how to disable Ajax with the AjaxManager when the browser of the client does not support it."
slug: ajaxmanager/how-to/disable-ajax-when-client-browser-does-not-support-it
previous_url: ajax/how-to/disable-ajax-when-client-browser-does-not-support-it, controls/ajaxmanager/how-to/disable-ajax-when-client-browser-does-not-support-it
tags: telerik, asp, net, ajax, manager, disable, ajax, when, client, browser, does, not, support, it
published: True
type: how-to
category: knowledge-base
res_type: kb
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>Progress® Telerik® UI for ASP.NET AJAX AjaxManager</td>
		</tr>
	</tbody>
</table>

## Description 

The Telerik RadAjax controls won't work in browsers that do not support [`XmlHttpRequests`](https://en.wikipedia.org/wiki/XMLHttpRequest). How can I disable AJAX when such a browser opens my website? 

## Solution 

To disable AJAX, set the `EnableAJAX` property of the Telerik AjaxManager or AjaxPanel control to `false` both client- and server-side.

The .NET 2.0 framework provides the `SupportsXmlHttp` property which you can use to check if the browser supports `XmlHttpRequest`.

>caution Even though some browsers support `XmlHttpRequests`, they can still return `false` for the `SupportsXmlHttp` property. In such cases, you need to define the browser definition files. For more information, refer to the [Browser Definition File Schema (browsers Element) in MSDN](https://msdn.microsoft.com/en-us/library/ms228122%28v=vs.100%29.aspx) and [Browser Detection using ASP.NET](https://www.codeproject.com/aspnet/browsercaps.asp) articles. 

The following example demonstrates how to achieve the desired scenario. When the check is over in the `Page_Load` event handler, it will make your page work as if it was in a standard postback scenario for those browsers.




````C#
	
RadAjaxManager1.EnableAJAX = Page.Request.Browser.SupportsXmlHttp;
	
````
````VB
	
RadAjaxManager1.EnableAJAX = Page.Request.Browser.SupportsXmlHttp
	
````





## See Also

* [Browser Definition File Schema (browsers Element) in MSDN](https://msdn.microsoft.com/en-us/library/ms228122%28v=vs.100%29.aspx)

* [Browser Detection using ASP.NET](https://www.codeproject.com/aspnet/browsercaps.asp)
