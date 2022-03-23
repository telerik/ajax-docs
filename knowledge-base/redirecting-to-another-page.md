---
title: Redirect to Another Page from the Server 
page_title: Redirect to Another Page
description: "Learn how to redirect to another page from the server with Telerik UI for ASP.NET AJAX."
slug: ajaxmanager/how-to/redirecting-to-another-page
previous_url: ajax/how-to/redirecting-to-another-page, controls/ajaxmanager/how-to/redirecting-to-another-page
tags: telerik, asp, net, ajax, manager, how, to, redirect, to, another, page
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
			<td>Progress® Telerik® UI for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>

## Description

How can I redirect to a new page from the server with Telerik UI for ASP.NET AJAX? 

## Solution

To redirect to a new page from the server, use wither of the following approaches:

* Use the `Response.Redirect()`, which is the standard ASP.NET way of redirection.

* Generate JavaScript that sets `window.location.href`.

If `Response.Redirect()` does not work for you, for example, if called during partial rendering, you can use the script generation approach through a `RadAjaxControl.Redirect()` server method exposed by the AjaxManager and the AjaxPanel. This Telerik method registers JavaScript code that uses the `window.location.href` property to navigate to a new URL while providing you with the convenience of using a simple server method.

The following example demonstrates how to use `Redirect()` of the AjaxManager.


````C#
	
RadAjaxManager1.Redirect("http://www.google.com/");
//or
RadAjaxManager.GetCurrent(Page).Redirect("http://www.google.com/");
	
````
````VB
RadAjaxManager1.Redirect("http://www.google.com/")
'or
RadAjaxManager.GetCurrent(Page).Redirect("http://www.google.com/")
````


The following example demonstrates how to use `Redirect()` of the AjaxPanel.


````C#
	
RadAjaxPanel1.Redirect("http://www.google.com/");
	        
````
````VB
RadAjaxPanel1.Redirect("http://www.google.com/")
````


## See Also

* [Demo: Redirect with Telerik AJAX](https://demos.telerik.com/aspnet-ajax/Ajax/Examples/Common/Redirect/DefaultCS.aspx)
