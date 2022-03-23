---
title: Ajaxify Invisible Controls
page_title: Ajaxify Invisible Controls
description: "Learn how to ajaxify invisible Telerik UI for ASP.NET controls."
slug: ajaxify-invisible-controls
tags: telerik, asp, net, ajax, manager, panel, ajaxify, invisible, controls
published: True
type: how-to
category: knowledge-base
res_type: kb
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>Progress® Telerik® UI for ASP.NET AJAX AjaxManager</td>
		</tr>
	</tbody>
</table>

## Description

How can I ajaxify Telerik UI for ASP.NET AJAX controls when they are not initially visible on the page?

## Solution  

A control which is initially invisible on the page cannot be added to the AjaxManager settings. The initiator or the updated control has to be always placed in a visible container so that the manager can locate it when necessary.

````ASP.NET
<telerik:RadAjaxManager ID="RadAjaxManager2" runat="server">
	<AjaxSettings>
	    <telerik:AjaxSetting AjaxControlID="Button1">
	         <UpdatedControls>
	            <telerik:AjaxUpdatedControl ControlID="Panel1" />
	        </UpdatedControls>
	     </telerik:AjaxSetting>
	</AjaxSettings>
</telerik:RadAjaxManager>
<asp:Button ID="Button1" runat="server" Text="Button" />
<asp:Panel runat="server" ID="Panel1">
	<asp:Label ID="Label1" Visible="false" runat="server" Text="Label"></asp:Label>
</asp:Panel>
````


