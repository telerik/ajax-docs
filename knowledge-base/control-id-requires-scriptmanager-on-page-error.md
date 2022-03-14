---
title: Control with an ID Requires ScriptManager on the Page Error Occurs
page_title: Control with an ID Requires ScriptManager on the Page Error Occurs
description: "When working with Telerik UI for ASP.NET AJAX, I get an error that the control with ID requires a ScriptManager on the page and that the ScriptManager must appear before any controls that need it."
slug: control-id-requires-scriptmanager-on-page-error
tags: telerik, asp, net, ajax, troubleshooting, control, with, ID, [ControlID], requires, ScriptManager, on, page, must, appear, before, any, controls, need, it
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

When working with Telerik UI for ASP.NET AJAX, I get an error that the control with ID `[ControlID]` requires a ScriptManager on the page and that the ScriptManager must appear before any controls that need it.

## Error Message

`The control with ID '[ControlID]' requires a ScriptManager on the page. The ScriptManager must appear before any controls that need it.`

## Cause

The possible cause for this error is that you have added a Telerik UI for ASP.NET AJAX control to a page that does not contain a ScriptManager control.

## Solution

To solve this issue, add a ScriptManager control to your page by using the following snippet.

````ASP.NET
<asp:ScriptManager ID="ScriptManager1" runat="server" />
````

If you are using master pages, you can add the ScriptManager there. The ScriptManager must precede all controls from the Telerik UI for ASP.NET AJAX suite. For further details on the ScriptManager, refer to the [https://msdn.microsoft.com/en-us/library/bb398863(v=vs.100).aspx](https://msdn.microsoft.com/en-us/library/bb398863(v=vs.100).aspx) article.
