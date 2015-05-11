---
title: AjaxUpdatedControl Properties
page_title: AjaxUpdatedControl Properties | RadAjax for ASP.NET AJAX Documentation
description: AjaxUpdatedControl Properties
slug: ajax/server-side-programming/ajaxupdatedcontrol-properties
tags: ajaxupdatedcontrol,properties
published: True
position: 2
---

# AjaxUpdatedControl Properties



## 

When configuring ajax settings, be it declaratively, or dynamically, you might need to set some of the below properties to each of the updated controls:

* **LoadingPanelID** - gets or sets the loading panel ID which is will be displayed over the updated control during ajax.

* **UpdatePanelHeight** - determines what will be the height of the ajax panel wrapped around the updated control. Useful when you need to set 100% high to the parent of the updated control.

* **UpdatePanelRenderMode** - determines what will be the ajax panel render mode. For more information see [this article]({%slug ajax/appearance-and-styling/render-modes%})

Example:



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
	        RadAjaxManager1.AjaxSettings.Add(ajaxSetting)
End Sub
	
````


