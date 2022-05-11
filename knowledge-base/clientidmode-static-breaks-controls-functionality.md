---
title: Setting ClientIDMode to Static Breaks the Telerik Controls Functionality
page_title: Setting the ClientIDMode Property to Static Breaks the Telerik Controls Functionality
description: "When working with Telerik UI for ASP.NET AJAX, setting the ClientIDMode property to Static breaks the Telerik controls functionality."
slug: clientidmode-static-breaks-controls-functionality
tags: telerik, asp, net, ajax, troubleshooting, setting, clientidmode, property, to, static, breaks, controls, functionality
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

When working with Telerik UI for ASP.NET AJAX, setting the `ClientIDMode` property to `Static` breaks the functionality of the Telerik controls.

## Cause

Telerik AJAX controls do not support the `ClientIDMode=Static` mode.

## Solution

Microsoft recommends using `ClientIDMode="Static"` only for static controls. The Telerik controls, on the other hand, are controls with complex hierarchies of child controls and templates so setting their `ClientID` mode to static will break their functionality.

To solve this issue, use the `AutoID` mode for the Telerik controls on the page especially when they are performing AJAX requests.
