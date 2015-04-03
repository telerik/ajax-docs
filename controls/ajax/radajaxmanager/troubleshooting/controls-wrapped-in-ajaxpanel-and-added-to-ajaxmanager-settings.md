---
title: Controls Wrapped in AjaxPanel and Added to AjaxManager Settings
page_title: Controls Wrapped in AjaxPanel and Added to AjaxManager Settings | UI for ASP.NET AJAX Documentation
description: Controls Wrapped in AjaxPanel and Added to AjaxManager Settings
slug: ajax/radajaxmanager/troubleshooting/controls-wrapped-in-ajaxpanel-and-added-to-ajaxmanager-settings
tags: controls,wrapped,in,ajaxpanel,and,added,to,ajaxmanager,settings
published: True
position: 0
---

# Controls Wrapped in AjaxPanel and Added to AjaxManager Settings



## 

>note We highly recommend that you try to avoid working with the __RadAjaxManager__ and __RadAjaxPanel__ controls on the same time.
>


If the same control is placed in a __RadAjaxPanel__ as well as included in __RadAjaxManager__ settingsas an AJAXified control (i.e., it is AJAXified by both the __RadAjaxPanel__ and __RadAjaxManager__),the __RadAjaxManager's__ setting will not work. This is because the __RadAjaxPanel__ AJAX-enables thatcontrol instead of the __RadAjaxManager__. __RadAjaxPanel__ is designed to update only its content;therefore you cannot use the manager to update other controls outside of the panel from a control that has been AJAXfied by the manager but is insidethe __RadAjaxPanel__. __Example 1__ will not work as expected.

Example 1: Button1 on the RadAjaxManager won't update the label because the RadAjaxPanel only updates its own content.

````ASPNET
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



The __RadAjaxPanel__ functionality can be simulated completely by the manager - simply replace the__RadAjaxPanel__ from __Example 1__ with an asp:Panel. As you can see in __Example 2__,the modified version of __Example 1__ will perform the same task as if you use __RadAjaxPanel__ instead of__RadAjaxManager__.

Example 2: Both control inside the Panel1 will be AJAXified.

````ASPNET
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



Moreover, you are free from the limitation to update controls only within the boundaries of the AJAX panel.	__Example 3__ shows the entire solution of the problematic settings defined in the beginning of this article.

Example 3: Showing the correct way to AJAXify controls when using RadAjaxManager.

````ASPNET
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



Keep in mind that you can switch the AJAXified "Button1" with "Panel1" if necessary. However, the refresh of the controls embeded in the panelcan take a bit longer compared to clicking an AJAXified button.

# See Also

 * [Overview]({%slug ajax/radajaxmanager/overview%})

 * [Overview]({%slug ajax/radajaxpanel/overview%})

 * [Known Reasons for Error Messages]({%slug ajax/troubleshooting/known-reasons-for-error-messages%})[](6DFFC156-E88F-48C8-A34F-D99B805AEEB3)
