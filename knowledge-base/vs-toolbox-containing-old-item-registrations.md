---
title: The VS ToolBox Contains Old Item Registrations
page_title: The Visual Studio ToolBox Contains Old Item Registrations
description: "After installing the new Telerik UI for ASP.NET AJAX version, the Visual Studio ToolBox still has the old item registrations."
slug: vs-toolbox-containing-old-item-registrations
tags: telerik, asp, net, ajax, troubleshooting, visual, studio, toolbox, contains, old, item, registrations
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

I uninstalled the old Telerik UI for ASP.NET AJAX version and installed the new one, but the VS ToolBox contains the old item registrations.

## Cause

The Visual Studio `ToolBoxControlInstaller` package did not refresh the ToolBox items during the first start of the IDE after the installation.

## Solution

To solve this issue, right-click the ToolBox and choose **Reset**.
