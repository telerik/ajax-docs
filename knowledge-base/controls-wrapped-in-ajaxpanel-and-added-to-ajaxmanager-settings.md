---
title: AjaxManager Settings Are Not Working When Controls Are Wrapped in an AjaxPanel and Added to the Settings
page_title: AjaxManager Settings Are Not Working When Controls Are Wrapped in an AjaxPanel and Added to the Settings
description: "Learn what to do when the same control is placed in an Telerik UI for ASP.NET AjaxPanel and is included in the AjaxManager settings as an ajaxified control."
slug: ajaxmanager/troubleshooting/controls-wrapped-in-ajaxpanel-and-added-to-ajaxmanager-settings
previous_url: ajax/radajaxmanager/troubleshooting/controls-wrapped-in-ajaxpanel-and-added-to-ajaxmanager-settings, controls/ajaxmanager/troubleshooting/controls-wrapped-in-ajaxpanel-and-added-to-ajaxmanager-settings
tags: telerik, asp, net, ajax, troubleshooting, ajaxmanager, settings, not, working, when, controls, wrapped, in, ajaxpanel, and, added
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

The AjaxManager settings are not working when the same control is placed in an AjaxPanel and is included in the AjaxManager settings as an ajaxified control.

## Cause 

If the same control is placed in an AjaxPanel and is included in the AjaxManager settings as an ajaxified control, meaning that the control is ajaxified by both the AjaxPanel and AjaxManager, the settings of the AjaxManager will not work. The reason is that the control is AJAX-enabled by the AjaxPanel and not by the AjaxManager.

## Solution


>It is highly recommended that you avoid working with the AjaxManager and AjaxPanel controls at the same time.

The AjaxPanel is designed to update only its content. Therefore, you cannot use the AjaxManager to update other controls outside the panel from a control that has been ajaxfied by the manager but is inside the AjaxPanel. 

The following example will not work as expected. It demonstrates how the `Button1` on the AjaxManager won't update the label because the AjaxPanel updates only its own content.

````ASP.NET
<telerik:RadScriptManager ID="RadScriptManager1" runat="server">
</telerik:RadScriptManager>
<telerik:RadAjaxManager ID="RadAjaxManager1" runat="server">
	<AjaxSettings>
	    <telerik:AjaxSetting AjaxControlID="Button1">
	        <UpdatedControls>
	            <telerik:AjaxUpdatedControl ControlID="RadAjaxPanel" />
	            <telerik:AjaxUpdatedControl ControlID="Label1" />
	        </UpdatedControls>
	    </telerik:AjaxSetting>
	</AjaxSettings>
</telerik:RadAjaxManager>
<telerik:RadAjaxPanel ID="RadAjaxPanel" runat="server">
	<asp:Button ID="Button1" runat="server" Text="Update Button" />
	<asp:TextBox ID="TextBox1" runat="server" Text="Update me"></asp:TextBox>
</telerik:RadAjaxPanel>
<asp:Label ID="Label1" runat="server">Me too</asp:Label>
````



To work around this issue, you can completely simulate the AjaxPanel functionality with the AjaxManager by replacing the AjaxPanel from the previous example with an `asp:Panel`. The following example demonstrates the modified version of the previous implementation and will perform the same task as if you use the AjaxPanel instead of the AjaxManager.


````ASP.NET
<telerik:RadScriptManager ID="RadScriptManager1" runat="server">
</telerik:RadScriptManager>
<telerik:RadAjaxManager ID="RadAjaxManager1" runat="server">
	<AjaxSettings>
	    <telerik:AjaxSetting AjaxControlID="Panel1">
	        <UpdatedControls>
	            <telerik:AjaxUpdatedControl ControlID="Panel1" />
	        </UpdatedControls>
	    </telerik:AjaxSetting>
	</AjaxSettings>
</telerik:RadAjaxManager>
````



By simulating the AjaxPanel behavior, you are free from the limitation to update controls only within the boundaries of the AjaxPanel.	The following example shows the entire solution of the issue and shows the correct way to ajaxify controls when using the AjaxManager. Note that you can switch the ajaxified `Button1` with `Panel1` if necessary. However, the refresh of the controls embedded in the panel can take a bit longer compared to clicking an ajaxified button.

````ASP.NET
<telerik:RadScriptManager ID="RadScriptManager1" runat="server">
</telerik:RadScriptManager>
<telerik:RadAjaxManager ID="RadAjaxManager1" runat="server">
	<AjaxSettings>
	    <telerik:AjaxSetting AjaxControlID="Button1">
	        <UpdatedControls>
	            <telerik:AjaxUpdatedControl ControlID="Panel1" />
	            <telerik:AjaxUpdatedControl ControlID="Label1" />
	        </UpdatedControls>
	    </telerik:AjaxSetting>
	</AjaxSettings>
</telerik:RadAjaxManager>
<asp:Panel ID="Panel" runat="server">
<asp:Button ID="Button1" runat="server" Text="Update Button" />
<asp:TextBox ID="TextBox1" runat="server" Text="Update me"></asp:TextBox>
</asp:Panel>
<asp:Label ID="Label1" runat="server">Me too</asp:Label>
````





## See Also

* [AjaxManager Overview]({%slug ajaxmanager/overview%})

* [Known Reasons for Error Messages in the AjaxManager]({%slug ajaxmanager/troubleshooting/known-reasons-for-error-messages%})
 
