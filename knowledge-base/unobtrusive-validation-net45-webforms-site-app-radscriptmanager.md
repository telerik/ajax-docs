---
title: Use Unobtrusive Validation in .NET 4.5 WebForms Site or Application with the ScriptManager
page_title: Use Unobtrusive Validation in .NET 4.5 WebForms Site or Application with the ScriptManager
description: "Learn how to use unobtrusive validation in .NET 4.5 WebForms site or application with the ScriptManager."
slug: introduction/radcontrols-for-asp.net-ajax-fundamentals/troubleshooting/jquery-troubleshooting
tags: telerik, asp, net, ajax, troubleshooting, jquery, using, unobtrusive, validation, in, .net, 4.5, webforms, site, application, app, with, radscriptmanager
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

When you create a .NET 4.5 WebForms Site, it comes with a jQuery library that is already registered with the ScriptManager as `jquery`. The unobtrusive validation will work as long as the standard `asp:ScriptManager` control is used. How can I use unobtrusive validation in a .NET 4.5 WebForms site or application with the ScriptManager?

## Cause

The Telerik controls bring their own specific version of jQuery and the ScriptManager control registers that version as `jquery` after removing all registrations with the same name. As a result, when you replace the `asp:ScriptManager` with a `RadScriptManager`, the initial `jquery`registration will be removed and the unobtrusive validation will not find it.

## Solution

To solve this issue, ensure that only one version of jQuery is used in the website and that you register it so that the unobtrusive validation can locate it:

1. Set the `EnableEmbeddedjQuery` property of the `RadScriptManager` to `false` to disable the jQuery that is embedded in `Telerik.Web.UI`. Thus, the removal of the `jquery` registration that comes with the website project is prevented.

1. Open **TOOLS** > **Library Package Manager** > **Package Manager Console**. Uninstall and unregister the jQuery version that is provided with the Visual Studio template by running the `PM> Uninstall-Package AspNet.ScriptManager.jQuery -Version x.x.x` command. Note that `x.x.x` is the jQuery version that comes installed with the website.

1. Install and register [the jQuery version that is specific for your current Telerik controls version]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/using-jquery/using-jquery%}) by running the `PM> Install-Package AspNet.ScriptManager.jQuery -Version x.x.x` command in the Package Manager Console. Note that `x.x.x` is the jQuery version that comes with the Telerik controls.

	You can still install a different version from the one included in the Telerik controls. However, this approach is not tested by the team and full compatibility cannot be guaranteed.
