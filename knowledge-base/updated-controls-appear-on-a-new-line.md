---
title: Updated Controls Appear on a New Line
page_title: Updated Controls Appear on a New Line
description: "Learn what to do when updated Telerik UI for ASP.NET AJAX controls appear on a new line."
slug: ajaxmanager/troubleshooting/updated-controls-appear-on-a-new-line
previous_url: ajax/radajaxmanager/troubleshooting/updated-controls-appear-on-a-new-line, controls/ajaxmanager/troubleshooting/updated-controls-appear-on-a-new-line
tags: telerik, asp, net, ajax, troubleshooting, ajaxmanager, updated, controls, appear, on, new, lines
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

What can I do when updated Telerik UI for ASP.NET AJAX controls appear on a new line?

## Cause

Controls render on a new line when they are added to the AjaxManager settings. The reason for this behavior is that the AjaxManager dynamically inserts `UpdatePanels` around the updated controls. The `UpdatePanel` is, by default, rendered as a `<div>`, which is a block-level HTML element and leads to changes in the layout.

## Solution

The AjaxManager exposes the `UpdatePanelsRenderMode` property which enables you to control the render mode of the dynamically inserted `UpdatePanels`. You can define the `UpdatePanelRenderMode` property for each updated control and set both properties to either `Block` or `Inline`, which will determine whether the wrapping element will be displayed as a block or as an inline element.

When working with the AjaxManager, you can use the global `UpdatePanelsRenderMode` property to set the render mode for all generated `UpdatePanels` to inline or to block, or to set it explicitly for a particular `UpdatedControl`.

The Inline render mode will ensure that the layout will not change when the AJAX settings are added. Otherwise, the AjaxManager will persist the default render mode of the `UpdatePanel`.

````ASP.NET
<telerik:RadAjaxManager ID="RadAjaxManager1" runat="server" UpdatePanelsRenderMode="Inline">
    <AjaxSettings>
        <telerik:AjaxSetting AjaxControlID="RadGrid1">
            <UpdatedControls>
                <telerik:AjaxUpdatedControl ControlID="RadGrid1" />
                <telerik:AjaxUpdatedControl ControlID="Label1" UpdatePanelRenderMode="Inline" />
                <telerik:AjaxUpdatedControl ControlID="Label2" />
            </UpdatedControls>
        </telerik:AjaxSetting>
    </AjaxSettings>
</telerik:RadAjaxManager>
````


