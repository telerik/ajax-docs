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

To solve this issue, follow the steps described in the [Adding ASP.NET AJAX Configuration Elements to an Existing Web Site](https://www.asp.net/ajax/documentation/live/ConfiguringASPNETAJAX.aspx) article.
