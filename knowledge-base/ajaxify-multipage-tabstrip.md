---
title: Ajaxify the MultiPage and TabStrip Controls
page_title: Ajaxify the MultiPage and TabStrip Controls
description: "Learn how to ajaxify the Telerik UI for ASP.NET MultiPage and TabStrip controls."
slug: ajaxify-multipage-tabstrip-controls
tags: telerik, asp, net, ajax, manager, panel, ajaxify, multipage, tabstrip, controls
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
			<td>Progress® Telerik® UI for ASP.NET AJAX MultiPage</td>
			<td>Progress® Telerik® UI for ASP.NET AJAX TabStrip</td>
		</tr>
	</tbody>
</table>

## Description

How can I ajaxify Telerik UI for ASP.NET AJAX MultiPage and TabStrip controls?

## Solution  

You cannot add a single `PageView` as an AJAX initiator or an updated control in the AJAX settings. To achieve the desired scenario, add the whole MultiPage to the AjaxManager settings or wrap the whole control into an AjaxPanel. When you set the MultiPage as an updated control, include the TabStrip associated with it in the `AjaxSettings`.

````ASP.NET
<telerik:RadAjaxManager ID="RadAjaxManager1" runat="server">
	<AjaxSettings>
	    <telerik:AjaxSetting AjaxControlID="RadTabStrip1">
	        <UpdatedControls>
	            <telerik:AjaxUpdatedControl ControlID="RadTabStrip1" />
	            <telerik:AjaxUpdatedControl ControlID="RadMultiPage1" />
	        </UpdatedControls>
	    </telerik:AjaxSetting>
	    <telerik:AjaxSetting AjaxControlID="RadMultiPage1">
	        <UpdatedControls>
	            <telerik:AjaxUpdatedControl ControlID="RadTabStrip1" />
	            <telerik:AjaxUpdatedControl ControlID="RadMultiPage1" />
	        </UpdatedControls>
	     </telerik:AjaxSetting>
	</AjaxSettings>
</telerik:RadAjaxManager>
<telerik:RadTabStrip RenderMode="Lightweight" ID="RadTabStrip1" runat="server" MultiPageID="RadMultiPage1"
	        SelectedIndex="0" AutoPostBack="True">
	        <Tabs>
	            <telerik:RadTab runat="server" Text="Tab # 1" PageViewID="Tab1" Selected="True">
	            </telerik:RadTab>
	            <telerik:RadTab runat="server" Text="Tab # 2" PageViewID="Tab2">
	            </telerik:RadTab>
	        </Tabs>
</telerik:RadTabStrip>
<telerik:RadMultiPage ID="RadMultiPage1" runat="server" SelectedIndex="0" Height="800px"
	        EnableEmbeddedScripts="true" Width="402px">
	        <telerik:RadPageView ID="Tab1" runat="server" ContentUrl="~/MultiTab1.aspx" Height="800px"
	            Width="948px">
	        </telerik:RadPageView>
	        <telerik:RadPageView ID="Tab2" runat="server" ContentUrl="~/MultiTab2.aspx">
	        </telerik:RadPageView>
</telerik:RadMultiPage>
````



