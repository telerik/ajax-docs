---
title: Force a Postback with the AjaxManager or AjaxPanel
page_title: Forcing a Postback with the AjaxManager or AjaxPanel
description: "Learn how to force a postback with the Telerik UI for ASP.NET AjaxManager or AjaxPanel."
slug: ajaxmanager/client-side-programming/how-to/forcing-a-postback
previous_url: ajax/client-side-programming/how-to/forcing-a-postback, controls/ajaxmanager/client-side-programming/how-to/forcing-a-postback
tags: telerik, asp, net, ajax, manager, panel, client, side, programming, force, postback
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
			<td>Progress® Telerik® UI for ASP.NET AJAX AjaxPanel</td>
		</tr>
	</tbody>
</table>

## Description

How can I force a postback with the Telerik UI for ASP.NET AjaxManager or AjaxPanel? 

## Solution

To perform a single postback instead of an AJAX request, set `arguments.EnableAjax` to `false`.

The following example demonstrates the code-behind.

````C#
if (!RadAjaxManager1.EnableAJAX)
	{
	     RadAjaxManager1.ClientEvents.OnRequestStart = "OnRequestStart";
	}
	
````
````VB
 If Not RadAjaxManager1.EnableAJAX Then
	    RadAjaxManager1.ClientEvents.OnRequestStart = "OnRequestStart"
End If
````


The following example demonstrates the settings on the client.

````JavaScript
function OnRequestStart(sender, args) {
	args.set_enableAjax(false); 
}
````



To disable AJAX because of unsupported browsers or previous browser versions, it is recommended that you do it on the server as demonstrated in the following snippets. 

````C#
	
RadAjaxManager1.EnableAJAX = Page.Request.Browser.SupportsXmlHttp;
	
````
````VB
RadAjaxManager1.EnableAJAX = Page.Request.Browser.SupportsXmlHttp
````


## See Also

* [Cancelling AJAX Requests]({%slug ajaxmanager/client-side-programming/how-to/cancel-ajax--request%})

* [OnRequestStart]({%slug ajaxmanager/client-side-programming/events/onrequeststart%})
