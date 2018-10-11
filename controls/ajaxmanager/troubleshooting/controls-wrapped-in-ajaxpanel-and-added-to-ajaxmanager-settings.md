---
title: Controls Wrapped in AjaxPanel and Added to AjaxManager Settings
page_title: Controls Wrapped in AjaxPanel and Added to AjaxManager Settings | RadAjax for ASP.NET AJAX Documentation
description: Controls Wrapped in AjaxPanel and Added to AjaxManager Settings
slug: ajaxmanager/troubleshooting/controls-wrapped-in-ajaxpanel-and-added-to-ajaxmanager-settings
previous_url: ajax/radajaxmanager/troubleshooting/controls-wrapped-in-ajaxpanel-and-added-to-ajaxmanager-settings
tags: controls,wrapped,in,ajaxpanel,and,added,to,ajaxmanager,settings
published: True
position: 0
---

# Controls Wrapped in AjaxPanel and Added to AjaxManager Settings



## 

>tip We highly recommend that you try to avoid working with the **RadAjaxManager** and **RadAjaxPanel** controls on the same time.
>


If the same control is placed in a **RadAjaxPanel** as well as included in **RadAjaxManager** settings as an AJAXified control (i.e., it is AJAXified by both the **RadAjaxPanel** and **RadAjaxManager**),the **RadAjaxManager's** setting will not work. This is because the **RadAjaxPanel** AJAX-enables that control instead of the **RadAjaxManager**. **RadAjaxPanel** is designed to update only its content;therefore you cannot use the manager to update other controls outside of the panel from a control that has been AJAXfied by the manager but is inside the **RadAjaxPanel**. **Example 1** will not work as expected.

Example 1: Button1 on the RadAjaxManager won't update the label because the RadAjaxPanel only updates its own content.

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



The **RadAjaxPanel** functionality can be simulated completely by the manager - simply replace the **RadAjaxPanel** from **Example 1** with an asp:Panel. As you can see in **Example 2** ,the modified version of **Example 1** will perform the same task as if you use **RadAjaxPanel** instead of**RadAjaxManager** .

Example 2: Both control inside the Panel1 will be AJAXified.

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



Moreover, you are free from the limitation to update controls only within the boundaries of the AJAX panel.	**Example 3** shows the entire solution of the problematic settings defined in the beginning of this article.

Example 3: Showing the correct way to Ajax-ify controls when using RadAjaxManager.

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



Keep in mind that you can switch the AJAXified "Button1" with "Panel1" if necessary. However, the refresh of the controls embedded in the panel can take a bit longer compared to clicking an AJAXified button.

## See Also

 * [Overview]({%slug ajaxmanager/overview%})

 * [Known Reasons for Error Messages]({%slug ajaxmanager/troubleshooting/known-reasons-for-error-messages%})
 
