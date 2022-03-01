---
title: No Error Occurs but the Body of the Returned Resource Is Blank
page_title: No Error Occurs but the Body of the Returned Resource Is Blank
description: "When working with Telerik UI for ASP.NET AJAX, no error occurs but the body of the returned resource is blank."
slug: body-of-returned-resource-is-blank
tags: telerik, asp, net, ajax, troubleshooting, no, error, occurs, the, body, of, returned, resource, is, blank
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

When working with Telerik UI for ASP.NET AJAX, no error occurs but the body of the returned resource is blank.

## Solution

If the `Telerik.Web.UI.ScriptFolder` or `Telerik.Web.UI.ScriptsFolder` `web.config` `appSettings` are set, make sure that the path to the resources is valid since it is case-sensitive. For more information about these properties, refer to the article on [combining external scripts]({%slug scriptmanager/combining-external-scripts%}).
