---
title: The GetWebResourceUrl Method Fails
page_title: The GetWebResourceUrl Method Fails
description: "When working with Telerik UI for ASP.NET AJAX, the GetWebResourceUrl method fails."
slug: getwebresourceurl-fails
tags: telerik, asp, net, ajax, troubleshooting, skins, appearance, getwebresourceurl, fails
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

When working with Telerik UI for ASP.NET AJAX, the `GetWebResourceUrl` method fails.

## Cause

As of Q3 2011, all built-in skins are located in the `Telerik.Web.UI.Skins.dll` assembly. Therefore, the `GetWebResourceUrl` method cannot get a proper URL for the stylesheet or image you are trying to reference as the assembly it searches in is `Telerik.Web.UI.dll` and since the controls themselves are located there.

## Solution

If you are using the `GetWebResourceUrl` method, you need to replace it with its analogue from the `SkinRegistrar` class, for example:

````ASP.NET
<link href='<%= Telerik.Web.SkinRegistrar.GetWebResourceUrl(this, typeof(RadEditor), "Telerik.Web.UI.Skins.Outlook.Editor.Outlook.css") %>' rel="stylesheet" type="text/css" />
````

This example registers the Editor `Outlook` skin-specific stylesheet. If you are using VB, change `this` to `Me` and `typeof` to `GetType` as is the equivalent in this language.

Server code blocks may cause issues in the `head` section of the page where `link` elements are usually placed so you can wrap them in a CodeBlock control. Otherwise, a server error may be thrown or the code may not be executed, that is, the link will not work.

For more information about this method and WebResources in general, refer to the [Easily Access Embedded Resources with Telerik RadControls for ASP.NET AJAX](https://blogs.telerik.com/aspnet-ajax/posts/11-11-23/easily-access-embedded-resources-with-telerik-radcontrols-for-asp-net-ajax.aspx) blog post.
