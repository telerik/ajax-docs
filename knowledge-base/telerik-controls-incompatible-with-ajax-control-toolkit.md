---
title: Telerik Controls Are Incompatible with the Ajax Control Toolkit
page_title: Telerik Controls Are Incompatible with the Ajax Control Toolkit
description: "When working with Telerik UI for ASP.NET AJAX, I get an error that the AJAX Toolkit Team announced the standard script manager can no longer be used with their controls."
slug: telerik-controls-incompatible-with-ajax-control-toolkit
tags: telerik, asp, net, ajax, troubleshooting, controls, not, compatible, with, ajax, control, toolkit
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

When working with Telerik UI for ASP.NET AJAX, I get an error that the AJAX Toolkit Team announced the standard script manager can no longer be used with their controls.

## Error Message

`You must use the ToolkitScriptManager instead of the ScriptManager with the Ajax Control Toolkit.`

## Cause

Since the `RadScriptManager` is based on the standard `asp:ScriptManager`, [this change in the Ajax Control Toolkit](http://ajaxcontroltoolkit.codeplex.com/releases/view/112805) makes it incompatible.

## Solution

To use both Telerik UI and AJAX Toolkit control bundles simultaneously within the same project, you have to use the `ToolkitScriptManager`. Upon using the toolkit manager, you can come across an error when using an UpdatePanel. This error is due to the `ToolkitScriptManager` having a bug with script combining. The bug is now fixed within a day after the release:

* [http://ajaxcontroltoolkit.codeplex.com/workitem/27517](http://ajaxcontroltoolkit.codeplex.com/workitem/27517)

* [http://ajaxcontroltoolkit.codeplex.com/releases/view/116091](http://ajaxcontroltoolkit.codeplex.com/releases/view/116091)

If the problem is reproduced in the release mode when the scripts are combined and after an AJAX request, use the temporary workaround&mdash;set the `CombineScripts` property in the `ToolkitScriptManager` tag to `false`. The issue is not reproducible into debug mode, because the script combining logic works only in release mode.

For additional information about the Telerik controls and AJAX Control Toolkit history, refer to the [troubleshooting scenarios of the `RadScriptManager`]({%slug scriptmanager/troubleshooting/overview%}).
