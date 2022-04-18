---
title: Render Modes
page_title: AjaxManager Render Modes
description: "Learn about the render modes supported by the Telerik UI for ASP.NET AjaxManager."
slug: ajaxmanager/appearance-and-styling/render-modes
previous_url: ajax/appearance-and-styling/render-modes, controls/ajaxmanager/appearance-and-styling/render-modes
tags: telerik, aspnet, ajax, ajaxmanager, render, modes
published: True
position: 7
---

# Render Modes

No matter which control you select to work with, the AJAX-updated controls will render in an HTML `DIV` tag which displays, by default, as a block element. 

To change this behaviour, the AjaxManager exposes the `UpdatePanelsRenderMode`, `UpdatePanelRenderMode`, and `RenderMode` properties you can set:

* `UpdatePanelsRenderMode`&mdash;You can set this property to the AjaxManager to control the render mode for all AJAX-enabled controls. `UpdatePanelsRenderMode` has two possible values: `Block` (the default value) and `Inline`. 

    The following example shows how to set the `UpdatePanelsRenderMode` value to `Inline`.

    ````ASP.NET
    <telerik:RadAjaxManager ID="RadAjaxManager1" runat="server" UpdatePanelsRenderMode="Inline">
		<AjaxSettings>
			<telerik:AjaxSetting AjaxControlID="Button1">
				<UpdatedControls>
					<telerik:AjaxUpdatedControl ControlID="Label1" />
					<telerik:AjaxUpdatedControl ControlID="Label2" />
				</UpdatedControls>
			</telerik:AjaxSetting>
		</AjaxSettings>
    </telerik:RadAjaxManager>
    ````



* `UpdatePanelRenderMode`&mdash;You can set this property for a particular `AjaxUpdatedControl` setting in the AjaxManager. Its default value is `Block`. You can change it to `Inline` as shown in the following example.

    ````ASP.NET
    <telerik:RadAjaxManager ID="RadAjaxManager1" runat="server">
	<AjaxSettings>
		telerik:AjaxSetting AjaxControlID="Button1">
			<UpdatedControls>
					<telerik:AjaxUpdatedControl ControlID="Label1" UpdatePanelRenderMode="Inline" />
					telerik:AjaxUpdatedControl ControlID="Label2" />
			</UpdatedControls>
		</telerik:AjaxSetting>
	</AjaxSettings>
    </telerik:RadAjaxManager>
    ````



* `RenderMode`&mdash;You can change the render mode of the controls wrapped in an AjaxManager control by setting its `RenderMode` property to `Inline` or `Block` (the default value).

    ````ASP.NET
    <telerik:RadAjaxPanel ID="RadAjaxPanel1" runat="server" RenderMode="Inline">
		<asp:Button ID="Button1" runat="server" Text="AJAX" />
		<asp:Label ID="Label1" runat="server" Text="Label1" />
    </telerik:RadAjaxPanel>
    ````



If an updated control has several initiators and is present in several places in the `AjaxSettings`, then setting `UpdatePanelRenderMode="Inline"` at one place will set the final render mode of the generated update panel to `Inline`. The only way to override this is at runtime in `AjaxSettingCreated` as shown in the following example.


````C#
protected void RadAjaxManager1_AjaxSettingCreated(object sender, AjaxSettingCreatedEventArgs e)
	{
	    if (e.Updated.ID == "Label1")
	    e.UpdatePanel.RenderMode = UpdatePanelRenderMode.Block;
	}  
				
````
````VB.NET
Protected Sub RadAjaxManager1_AjaxSettingCreated(ByVal sender As Object, ByVal e As AjaxSettingCreatedEventArgs)
	If e.Updated.ID = "Label1" Then
	    e.UpdatePanel.RenderMode = UpdatePanelRenderMode.Block
	End If
End Sub
````


The following scenario is currently unsupported including the properties for both the AjaxManager and the `AjaxUpdatedControl`.


````ASP.NET
<telerik:RadAjaxManager ID="RadAjaxManager1" runat="server" UpdatePanelsRenderMode="Inline">
	<AjaxSettings>
	    <telerik:AjaxSetting AjaxControlID="Button1">
	        <UpdatedControls>
	            <telerik:AjaxUpdatedControl ControlID="Label1" UpdatePanelRenderMode="Block" />
	            <telerik:AjaxUpdatedControl ControlID="Label2" />
	        </UpdatedControls>
	    </telerik:AjaxSetting>
	 </AjaxSettings>
</telerik:RadAjaxManager>
````


