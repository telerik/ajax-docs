---
title: The AjaxManager Designer Does Not Locate All Controls
page_title: The AjaxManager Designer Does Not Locate All Controls
description: "Learn what to do when the Telerik UI for ASP.NET AjaxManager designer does not locate the controls."
slug: ajaxmanager/troubleshooting/radajaxmanager-designer-does-not-locate-all-controls
previous_url: ajax/radajaxmanager/troubleshooting/radajaxmanager-designer-does-not-locate-all-controls, controls/ajaxmanager/troubleshooting/radajaxmanager-designer-does-not-locate-all-controls
tags: telerik, asp, net, ajax, troubleshooting, ajaxmanager, designer, does, not, locate, all, controls
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

What can I do when the AjaxManager is not able to locate some controls on a page but they are still AJAX-enabled and updated by AjaxManager?

## Solution

To fix this issue and depending on your scenario, use any of the following approaches: 

* If the controls are placed in `asp:Table` cells&mdash;Set an `ID` for the table cells and include the `runat="server"` configuration. As a result, the designer will locate all the controls within the table. 

	The following example demonstrates how to set the `ID` for table cells of an `asp:Table` and set `runat='server'`.

		````ASP.NET
		<asp:Table ID="Table1" runat="server">
			        <asp:TableRow runat="server" ID="rol_1">
			            <asp:TableCell runat="server" ID="cell_11">
			                <asp:Panel ID="Panel1" runat="server">
			                    <asp:Button ID="Button1" runat="server" Text="Button" />
			                    <asp:TextBox ID="TextBox1" runat="server"></asp:TextBox>
			                </asp:Panel>
			            </asp:TableCell>
			            <asp:TableCell runat="server" ID="cell_12"></asp:TableCell>
			            <asp:TableCell runat="server" ID="cell_13"></asp:TableCell>
			        </asp:TableRow>
			        <asp:TableRow runat="server" ID="row_2">
			            <asp:TableCell runat="server" ID="cell_21">
			                <div runat="server" id="div1">
			                    <asp:CheckBox ID="CheckBox1" runat="server" />
			                </div>
			            </asp:TableCell>
			            <asp:TableCell runat="server" ID="cell_22"></asp:TableCell>
			            <asp:TableCell runat="server" ID="cell_23"></asp:TableCell>
			        </asp:TableRow>
		</asp:Table>
		````

		After you have set the `ID` of the table cells and the `runat="server"` configuration, the designer can locate the button, check-box, and text box, and you can AJAXify the controls in the `asp:Table` cells as demonstrated by the following example.

		````ASP.NET
		<telerik:RadScriptManager ID="RadScriptManager1" runat="server">
		</telerik:RadScriptManager>
		<telerik:RadAjaxManager ID="RadAjaxManager1" runat="server">
			        <AjaxSettings>
			            <telerik:AjaxSetting AjaxControlID="Button1">
			                <UpdatedControls>
			                    <telerik:AjaxUpdatedControl ControlID="TextBox1" />
			                </UpdatedControls>
			            </telerik:AjaxSetting>
			            <telerik:AjaxSetting AjaxControlID="CheckBox1">
			                <UpdatedControls>
			                    <telerik:AjaxUpdatedControl ControlID="TextBox1" />
			                </UpdatedControls>
			            </telerik:AjaxSetting>
			        </AjaxSettings>
		</telerik:RadAjaxManager>
		````



* If the control is nested in a template of a composite control&mdash;The templates may prevent the designer from recognizing the wrapped controls. In such scenarios, it is recommended that you add the AJAX settings [programmatically]({%slug ajaxmanager/how-to/add-ajaxsettings-programmatically%}). This, together with using the `FindControl` method, enables the AjaxManager to AJAX-enable and update controls at all levels of the application. 

	For example, if the control you want to update is located within [DockableObject](https://www.telerik.com/RadDock) web control, you can find it at runtime by using `RadDockableObject.FindControl("<controlID>")` and then set it as an updated control. For more information, refer to the [AJAX RadDock online demo](https://demos.telerik.com/aspnet-ajax/dock/examples/overview/defaultcs.aspx).

* If the controls are placed in a WebUserControl&mdash;The previous case is valid here as well. You can use the same approach and add the AJAX settings [dynamically]({%slug ajaxmanager/troubleshooting/controls-wrapped-in-ajaxpanel-and-added-to-ajaxmanager-settings%}).

	For example, if the control is placed in a WebUserControl, you can find it at runtime by using `WebUserControl1.FindControl("<controlID>")` and then set it as an updated control. For more information, refer to the article on [how to AJAX-enable user controls]({%slug ajaxmanager/how-to/radajax-and-webusercontrols%}).

* If the controls are placed in different content of a MasterPage scenario&mdash;Use the example for adding the AJAX setting [programmatically]({%slug ajaxmanager/troubleshooting/controls-wrapped-in-ajaxpanel-and-added-to-ajaxmanager-settings%}) as the controls are hidden from the designer when placed in a content place holder. In this case, you can find the control at runtime by using `ContentPlaceHolder1.FindControl("<controlID>")` and then set it as an updated control.

## See Also

* [Adding the AjaxSettings Programmatically]({%slug ajaxmanager/how-to/add-ajaxsettings-programmatically%})

* [Using the AjaxManager and the AjaxManagerProxy with Master and Content Pages]({%slug ajaxmanager/how-to/radajax-and-masterpage%})

* [Using the AjaxManager and the AjaxManager Proxy with WebUserControls]({%slug ajaxmanager/how-to/radajax-and-webusercontrols%})

* [RadDock Demo: Telerik ASP.NET for AJAX Dock](https://demos.telerik.com/aspnet-ajax/dock/examples/overview/defaultcs.aspx)
