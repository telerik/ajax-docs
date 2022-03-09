---
title: Telerik Is Undefined Error Occurs When Running a Website on IIS 7+ Integrated Mode
page_title: Telerik Is Undefined Error Occurs When Running a Website on IIS 7+ Integrated Mode
description: "When running a website on IIS 7 and later, a Telerik is undefined error occurs for Telerik UI for ASP.NET AJAX."
slug: introduction/radcontrols-for-asp.net-ajax-fundamentals/troubleshooting/general-troubleshooting
tags: telerik, asp, net, ajax, troubleshooting, undefine, error, when, running, wbebsite, iis, 7+, integrated, mode
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

I get an error message that Telerik is undefined when running my website in the Integrated mode on IIS 7+.

## Error Message

`'Telerik' is undefined.`

## Cause

When in its Integrated mode, IIS7 does not read the application configuration from the `<system.web>` section group of the application configuration file but from the `<system.webServer>` section group. Since Visual Studio 2005 does not provide native support for IIS7, the ScriptManager registration cannot be automatically added to the `system.webServer`.

## Solution

To solve the issue, manually add the `HttpHandler` registration to the `system.webServer` section group.

Depending on the specific scenario, use either of the following approaches:


* When `Telerik.Web.UI.dll` is in the `GAC`, use the following code (XML). Note that you have to replace `[ASSEMBLY_VERSION]` with the exact version of your DLL.

		<system.webServer>
		…
			<handlers>
			…
				<add name="Telerik.Web.UI.WebResource"  path="Telerik.Web.UI.WebResource.axd" verb="*" type="Telerik.Web.UI.WebResource, Telerik.Web.UI, Version=[ASSEMBLY_VERSION], Culture=neutral, PublicKeyToken=121fae78165ba3d4" />
			…
			</handlers>
		</system.webServer>


* When `Telerik.Web.UI.dll` is not in the `GAC`, use the following code (XML):

		<system.webServer>
		…
			<handlers>
			…
				<add name="Telerik.Web.UI.WebResource"  path="Telerik.Web.UI.WebResource.axd" verb="*" type="Telerik.Web.UI.WebResource" />
			…
			</handlers>
		</system.webServer>


For more information, refer to the [Web Resources demystified](https://blogs.telerik.com/aspnet-ajax/posts/08-07-18/web-resources-demystified-part-3-troubleshooting.aspx) blog post.
