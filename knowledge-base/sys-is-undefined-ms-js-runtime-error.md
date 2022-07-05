---
title: Sys Is Undefined Microsoft JScript Runtime Error Occurs
page_title: Sys Is Undefined Microsoft JScript Runtime Error Occurs
description: "When working with Telerik UI for ASP.NET AJAX, I get a Microsoft JScript runtime error that Sys is undefined."
slug: sys-is-undefined-ms-js-runtime-error
tags: telerik, asp, net, ajax, troubleshooting, microsoft, jscript, runtime, error, sys, is, undefined
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

When working with Telerik UI for ASP.NET AJAX, I get a Microsoft JScript runtime error that Sys is undefined.

## Error Message

`Microsoft JScript runtime error: 'Sys' is undefined`

## Cause

The possible cause for this issue is that you have added a Telerik UI for ASP.NET AJAX control but your application is not configured to use ASP.NET AJAX.

## Solution

To solve this issue, follow the steps described in the [Common reasons for the Sys is undefined error in ASP.NET Ajax applications]([https://www.asp.net/ajax/documentation/live/ConfiguringASPNETAJAX.aspx](https://www.telerik.com/blogs/common-reasons-for-the-lsquo-sys-is-undefined-rsquo-error-in-asp-net-ajax-applications)) blog post.

You can find more information at:
* [Sys is undefined](https://stackoverflow.com/questions/75322/sys-is-undefined)
* ['Sys' is undefined.](https://social.msdn.microsoft.com/Forums/en-US/e74c84a9-b2a7-40cd-bf2b-365e3b92e6f3/sys-is-undefined?forum=aspdotnetajax)
* [Sys is undefined](https://www.telerik.com/forums/sys-is-undefined-026d9a4c6c1e#3801667)

   
    
