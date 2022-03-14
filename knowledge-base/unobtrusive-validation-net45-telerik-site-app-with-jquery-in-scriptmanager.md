---
title: Use Unobtrusive Validation in .NET 4.5 Telerik Site or Application with jQuery Registered in ScriptManager
page_title: Use Unobtrusive Validation in .NET 4.5 Telerik Site or Application with jQuery Registered in ScriptManager
description: "Learn how to use unobtrusive validation in .NET 4.5 Telerik website or web application that has jQuery registered in the RadScriptManager."
slug: unobtrusive-validation-net45-telerik-site-app-with-jquery-in-scriptmanager
tags: telerik, asp, net, ajax, troubleshooting, jquery, using, unobtrusive, validation, in, .net, 4.5, telerik, web, site, application, app, with, registered, in, radscriptmanager
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

How can I use unobtrusive validation in a .NET 4.5 Telerik website or Telerik web application that has jQuery registered in the `RadScriptManager`?

## Cause

Even if you created a website with the .NET 4.5 Telerik website Visual Studio template, you can still have an additional jQuery version that is registered with the `RadScriptManager` as `jquery`&mdash;for example, if you installed the `AspNet.ScriptManager.jQuery` NuGet package.

The situation is similar to [using unobtrusive validation in a .NET 4.5 WebForms site or application with the ScriptManager]({% slug introduction/radcontrols-for-asp.net-ajax-fundamentals/troubleshooting/jquery-troubleshooting %}) because you have two registered versions of jQuery: one with the Telerik controls and one with the NuGet package.

## Solution

To solve this issue, you need to leave only one version of jQuery on the website. In this case, however, the order for registering the scripts in the `RadScriptManager` is not defined by the Visual Studio template and you have to configure it manually.

To configure the unobtrusive validation when you have a custom version of jQuery in the Telerik website:

1. Disable the jQuery that is embedded in `Telerik.Web.UI` by setting the `EnableEmbeddedjQuery` property of the ScriptManager to `false`. Thus, the removal of the `jquery` registration that comes with the website project is prevented.

1. Open **TOOLS** > **Library Package Manager** > **Package Manager Console**. Uninstall and unregister the jQuery version that comes with the webssite by running the `PM> Uninstall-Package AspNet.ScriptManager.jQuery -Version x.x.x` command. Note that `x.x.x` is the jQuery version that comes installed with the website.

1. Install and register [the jQuery version that is specific for your current Telerik controls version]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/using-jquery/using-jquery%}) by running the `PM> Install-Package AspNet.ScriptManager.jQuery -Version x.x.x` command in the Package Manager Console. Note that `x.x.x` is the jQuery version that comes with the Telerik controls.

	You can still install a different version from the one included in the Telerik controls. However, this approach is not tested by the team and full compatibility cannot be guaranteed.

1. Install the Microsoft Ajax optimization bundle for Web Forms with ScriptManager by running the `PM> Install-Package Microsoft.AspNet.ScriptManager.WebForms -Version x.x.x` command in the Package Manager Console. The command will install the `WebForms.js` and `WebUIValidation.js` script files on the website. To check the current version of this NuGet package, refer to [its download page](https://www.nuget.org/packages/Microsoft.AspNet.ScriptManager.WebForms).

1. Configure the `RadScriptManager` as shown in the following example to specify that jQuery is registered before the validation scripts.

	The following example demonstrates how to register the validation scripts in the correct order in the `RadScriptManager` with disabled embedded jQuery.

	````ASP.NET
	<telerik:RadScriptManager ID="RadScriptManager1" runat="server" EnableEmbeddedjQuery="false">
	    <Scripts>
	        <asp:ScriptReference Name="jquery" />
	        <asp:ScriptReference Name="WebForms.js" Assembly="System.Web" Path="~/Scripts/WebForms/WebForms.js" />
	        <asp:ScriptReference Name="WebUIValidation.js" Assembly="System.Web" Path="~/Scripts/WebForms/WebUIValidation.js" />
	    </Scripts>
	</telerik:RadScriptManager>
	````

 
