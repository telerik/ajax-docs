---
title: Use Unobtrusive Validation in .NET 4.5 Telerik Site or Application
page_title: Use Unobtrusive Validation in .NET 4.5 Telerik Site or Application
description: "Learn how to use unobtrusive validation in .NET 4.5 Telerik website or web application."
slug: unobtrusive-validation-net45-telerik-site-app
tags: telerik, asp, net, ajax, troubleshooting, jquery, using, unobtrusive, validation, in, .net, 4.5, telerik, web, site, application, app
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

How can use unobtrusive validation in .NET 4.5 Telerik website or Telerik web application?

## Solution

When you create a .NET 4.5 Telerik website, the default web form has a `RadScriptManager` which means that the jQuery version that goes with the Telerik controls is registered with the ScriptManager as `jquery`. Therefore, you need to specify the order in which jQuery and the validation scripts are registered. The validation scripts of the unobtrusive validation, `WebForms.js` and `WebUIValidation.js`, are not available in this case and you also need to install them on the web site.

To set up the unobtrusive validation:

1. Open **TOOLS** > **Library Package Manager** > **Package Manager Console**. Install the Microsoft Ajax optimization bundle for Web Forms with the ScriptManager by running the `PM> Install-Package Microsoft.AspNet.ScriptManager.WebForms -Version x.x.x` command. To check the current version of this NuGet package, refer to [its download page](https://www.nuget.org/packages/Microsoft.AspNet.ScriptManager.WebForms).As a result, the `WebForms.js` and `WebUIValidation.js` script files will be installed on the website.

1. Configure the `RadScriptManager` as shown in the following example to specify that jQuery is registered before the validation scripts:

	````ASP.NET
	<telerik:RadScriptManager runat="server" ID="RadScriptManager1">
	    <Scripts>
	        <asp:ScriptReference Assembly="Telerik.Web.UI" Name="Telerik.Web.UI.Common.Core.js" />
	        <asp:ScriptReference Assembly="Telerik.Web.UI" Name="Telerik.Web.UI.Common.jQuery.js" />
	        <asp:ScriptReference Assembly="Telerik.Web.UI" Name="Telerik.Web.UI.Common.jQueryInclude.js" />
	        <asp:ScriptReference Name="WebForms.js" Assembly="System.Web" Path="~/Scripts/WebForms/WebForms.js" />
	        <asp:ScriptReference Name="WebUIValidation.js" Assembly="System.Web" Path="~/Scripts/WebForms/WebUIValidation.js" />
	    </Scripts>
	</telerik:RadScriptManager>
	````
	
	 
