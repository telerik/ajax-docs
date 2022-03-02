---
title: Telerik Controls Do Not Appear in the VS Toolbox
page_title: Telerik Controls Do Not Appear in the Visual Studio Toolbox
description: "When working with Telerik UI for ASP.NET AJAX, the controls do not appear in the Visual Studio Toolbox."
slug: introduction/radcontrols-for-asp.net-ajax-fundamentals/troubleshooting/toolbox-troubleshooting
tags: telerik, asp, net, ajax, troubleshooting, visual, studio, controls, not, appearing, in, toolbox
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

The Telerik UI for ASP.NET AJAX controls do not appear in the Visual Studio toolbox.

## Cause

The possible reasons for this issue are the following:

* If the Telerik UI for ASP.NET AJAX installer was not installed, the Visual Studio Extensions feature may cause the issue.

* The issue may be caused by custom, third-party, or Telerik `exe` installer that is used to register Telerik controls to the toolbox and prevents the `ToolboxControlInstaller` package of the IDE from running correctly.

## Solution

Depending on the use case, apply the following approaches to solve the issue:

* (VS Extensions feature) Uninstall Telerik UI for ASP.NET AJAX and run the installer again. Click the **Custom** button in the **Setup Type** screen and ensure that the **Visual Studio Extensions for Visual Studio xxxx** feature is selected for installation.

* (Custom, third-party, or Telerik installer) Right-click the Toolbox and choose **Reset**. You need to manually re-populate the toolbox with the items you've previously added.

* (Solution for all cases) Run the [Toolbox Configuration tool]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/integration-with-visual-studio/visual-studio-extensions/toolbox-configuration%}) from the [Telerik Visual Studio Extensions]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/integration-with-visual-studio/visual-studio-extensions/overview%}).
