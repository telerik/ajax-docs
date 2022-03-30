---
title: AjaxUpdatedControl Properties
page_title: AjaxUpdatedControl Server-Side Properties
description: "Learn how to set the AjaxUpdatedControl server-side properties when working with Telerik UI for ASP.NET AJAX."
slug: ajaxmanager/server-side-programming/ajaxupdatedcontrol-properties
previous_url: ajax/server-side-programming/ajaxupdatedcontrol-properties
tags: telerik, aspnet, ajax, ajaxmanager, ajaxupdatedcontrol, properties
published: True
position: 2
---

# AjaxUpdatedControl Properties

When configuring the Ajax settings, either declaratively or dynamically, you might need to set some of the following properties to each of the updated controls:

* `LoadingPanelID`&mdash;Gets or sets the `ID` of the loading panel which is will be displayed over the updated control during AJAX.

* `UpdatePanelHeight`&mdash;Determines the height of the AJAX panel wrapped around the updated control. Useful when you need to set 100% height to the parent of the updated control.

* `UpdatePanelRenderMode`&mdash;Determines the [render mode of the AJAX panel]({%slug ajaxmanager/appearance-and-styling/render-modes%}).

The following example demonstrates how to set the `AjaxUpdatedControl` properties. 


````ASP.NET
<telerik:RadScriptManager ID="RadScriptManager1" runat="server">
</telerik:RadScriptManager>
<telerik:RadAjaxManager ID="RadAjaxManager1" runat="server">
	 <AjaxSettings>
	    <telerik:AjaxSetting AjaxControlID="Button1">
	        <UpdatedControls>
	            <telerik:AjaxUpdatedControl ControlID="Panel1" LoadingPanelID="RadAjaxLoadingPanel1"
	                UpdatePanelHeight="200px" UpdatePanelRenderMode="Inline" />
	        </UpdatedControls>
	    </telerik:AjaxSetting>
	</AjaxSettings>
</telerik:RadAjaxManager>
<telerik:RadAjaxLoadingPanel ID="RadAjaxLoadingPanel1" runat="server" Skin="Default">
</telerik:RadAjaxLoadingPanel>
<asp:Button ID="Button1" runat="server" OnClick="Button1_Click" Text="Button" />
<asp:Panel ID="Panel1" runat="server">
</asp:Panel>
````


````C#
protected void Page_Load(object sender, EventArgs e)
{
	AjaxSetting ajaxSetting = new AjaxSetting();
	ajaxSetting.AjaxControlID = "Button1";

	AjaxUpdatedControl updatedControl = new AjaxUpdatedControl();
	updatedControl.ControlID = "Panel1";
	updatedControl.LoadingPanelID = "RadAjaxLoadingPanel1";
	updatedControl.UpdatePanelHeight = Unit.Pixel(200);
	updatedControl.UpdatePanelRenderMode = UpdatePanelRenderMode.Inline;

	ajaxSetting.UpdatedControls.Add(updatedControl);

	RadAjaxManager1.AjaxSettings.Add(ajaxSetting);
}
````
````VB
Protected Sub Page_Load(sender As Object, e As EventArgs) Handles Me.Load
    Dim ajaxSetting As New AjaxSetting()
    ajaxSetting.AjaxControlID = "Button1"

    Dim updatedControl As New AjaxUpdatedControl()
    updatedControl.ControlID = "Panel1"
    updatedControl.LoadingPanelID = "RadAjaxLoadingPanel1"
    updatedControl.UpdatePanelHeight = Unit.Pixel(200)
    updatedControl.UpdatePanelRenderMode = UpdatePanelRenderMode.Inline

    ajaxSetting.UpdatedControls.Add(updatedControl)

    RadAjaxManager1.AjaxSettings.Add(ajaxSetting)
End Sub	
````


