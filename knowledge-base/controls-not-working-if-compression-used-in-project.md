---
title: Telerik Controls Do Not Work If a Compression Module Is Used in the Project
page_title: Telerik Controls Do Not Work If a Compression Module Is Used in the Project
description: "When working with Telerik UI for ASP.NET AJAX, the Telerik controls are not working if a Compression module is used in the project."
slug: controls-not-working-if-compression-used-in-project
tags: telerik, asp, net, ajax, troubleshooting, controls, not, working, if, compression, module, is, used, in, project
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

When working with Telerik UI for ASP.NET AJAX, the Telerik controls are not working if the project or website uses the Compression module.

## Cause

The possible reason for this issue is that a double compression of web resources occurs. The web resources requested by the Telerik controls are compressed twice&mdash;once by the `Script`, `RadScript`, or `RadStyleSheet` Manager and a second time by the Compression module.

## Solution

To solve this issue, skip the compression for the requested resource in the Compression module. If the `OutputCompression` property of the `RadScriptManager` or the `RadStyleSheetManager` is set to `Disabled`, you can configure the Compression module to compress `Telerik.Web.UI.WebResource.axd`.

|Control | Requested Resources |
| ------ | ------ |
|`ScriptManager`|`WebResource.axd`, `ScriptResource.axd`|
|`RadScriptManager`|`Telerik.Web.UI.WebResource.axd`|
|`RadStyleSheetManager`|`Telerik.Web.UI.WebResource.axd`|
