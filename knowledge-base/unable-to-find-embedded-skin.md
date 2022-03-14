---
title: Unable to Find Embedded Skin Error Occurs
page_title: Unable to Find Embedded Skin Error Occurs
description: "When working with Telerik UI for ASP.NET AJAX, I get an error that the embedded skin cannot be found."
slug: unable-to-find-embedded-skin
tags: telerik, asp, net, ajax, troubleshooting, skins, appearance, unable, to find, embedded, skin, error
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

When working with Telerik UI for ASP.NET AJAX, I get an error that the embedded skin cannot be found.

## Error Message

`Telerik.Web.UI.[Telerik Control] with ID='[Telerik Control ID]' was unable to find embedded skin with name '[Skin Name]'. Please, make sure that you spelled the skin name correctly, or if you want to use a custom skin, set EnableEmbeddedSkins=false.`

## Cause

The possible reasons for this issue include the following:

* As of Q3 2011, all built-in skins are located in the `Telerik.Web.UI.Skins.dll` assembly. The change was announced in a blog post with [Q2 2011](https://blogs.telerik.com/blogs/posts/11-07-05/new-telerik-ajax-skins-assembly.aspx) and again with [Q3 2011](https://blogs.telerik.com/blogs/posts/11-11-15/separate-skin-assembly-in-radcontrols-for-asp-net-ajax-with-q3-apos-11.aspx).

* If you get this error after an upgrade to a later version, the most likely reason for the problem is that an issue has occurred with the Visual Studio Project references.

## Solution

Depending on the use case, apply the respective approach to solve the issue:

* (`Telerik.Web.UI.Skins.dll` assembly) Add the `Telerik.Web.UI.Skins.dll` assembly to your project. For more information, refer to [this article]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/controlling-visual-appearance/skins-location%}).

* (Visual Studio Project) Perform a [manual upgrade]({%slug introduction/installation/upgrading-instructions/upgrading-a-trial-to-a-developer-license-or-to-a-newer-version%}#manual-upgrade).

Note that if for some reason you cannot resolve the error or you'd like to resolve it right away, you can set the `Skins` property to `Default`. This approach will solve the issue as the Default skin is located in the main `Telerik.Web.UI.dll` assembly.
