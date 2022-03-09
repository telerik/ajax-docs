---
title: System.Web.UI.IScriptControl Is Defined in an Assembly That Is Not Referenced Error Occurs
page_title: System.Web.UI.IScriptControl Is Defined in an Assembly That Is Not Referenced Error Occurs
description: "When working with Telerik UI for ASP.NET AJAX, I get an error that System.Web.UI.IScriptControl is defined in an assembly that is not referenced and that I must add a reference to assembly System.Web.Extensions."
slug: systemwebuiiscriptcontrol-in-assembly-not-referenced-error
tags: telerik, asp, net, ajax, troubleshooting, systemwebuiiscriptcontrol, defined, in, assembly, not, referenced, must, reference, systemwebextensions, Version=1.0.61025.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35
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

When working with Telerik UI for ASP.NET AJAX, I get an error that `System.Web.UI.IScriptControl` is defined in an assembly that is not referenced and that I must add a reference to assembly `System.Web.Extensions`, `Version=1.0.61025.0`, `Culture=neutral`, `PublicKeyToken=31bf3856ad364e35`.

## Error Message

`The type 'System.Web.UI.IScriptControl' is defined in an assembly that is not referenced. You must add a reference to assembly 'System.Web.Extensions, Version=1.0.61025.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35'`

## Cause

The possible cause for this error is that you have added a Telerik UI for ASP.NET AJAX control but your application is not configured to use ASP.NET AJAX.

## Solution

To solve this issue, follow the steps described in the [Adding ASP.NET AJAX Configuration Elements to an Existing Web Site](https://www.asp.net/ajax/documentation/live/ConfiguringASPNETAJAX.aspx) article.
