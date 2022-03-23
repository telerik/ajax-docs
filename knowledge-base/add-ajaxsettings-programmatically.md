---
title: Add AjaxSettings to the AajaxManager Programmatically
page_title: Add AjaxSettings to the AajaxManager Programmatically
description: "Learn how to programmatically add the AjaxSettings to the Telerik UI for ASP.NET AJAX AjaxManager."
slug: ajaxmanager/how-to/add-ajaxsettings-programmatically
previous_url: ajax/radajaxmanager/how-to/add-ajaxsettings-programmatically, controls/ajaxmanager/how-to/add-ajaxsettings-programmatically
tags: telerik, asp, net, ajax, manager, add, ajaxsettings, programmatically
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

How can I add the `AjaxSettings` programmatically to the AjaxManager? 

## Solution  

The `AjaxSettings` represent the mapping between a control that initiates an AJAX request and a collection of controls that will be updated. 

In some cases, you need to add AJAX pairs dynamically, at runtime. For example, when the controls in the setting are not directly accessible, that is, when they are children of other controls in the form, or when  the `RadAjaxManager` is placed on the parent page and the child page or user control does not contain a `RadAjax` control. Note that the way users create the settings depends on their preferences and the application implementation.

When you add the `AjaxSettings` dynamically, you need to always do this in the `Page` event handler. It is executed each time during the page lifecycle (on `Page_Load` and `Page_PreRender`) so that the control can be ajaxified when the page is initially loaded. 

> * Make sure that the controls in the AJAX pair are available on the page.
> * You cannot add the `AjaxSettings` dynamically in the `Page_Init` event at this stage of the page lifecycle because the `RadAjaxManager` is not created yet.

The following example demonstrates how to AJAX-enable a Button control dynamically to toggle the visibility of an image. The markup and code show how to use `AjaxSettings` to add AJAX to the Button in the `Page_Load` event to display the image of the Telerik logo.

````ASP.NET
 <telerik:RadAjaxManager ID="RadAjaxManager1" runat="server">
 </telerik:RadAjaxManager>
 <asp:Button ID="Button1" runat="server" Text="Button" OnClick="Button1_Click" />
 <asp:Panel ID="Panel1" runat="server" Height="95px">
	        <asp:Image ID="Image1" runat="server" ImageUrl="https://www.telerik.com/images/Homepage/TelerikLogo.gif" />
</asp:Panel>
````

The following example shows the code-behind.


````C#
 protected void Page_Load(object sender, EventArgs e)    
	 {        
	    RadAjaxManager1.AjaxSettings.AddAjaxSetting(Button1, Panel1, null);
	    //where the AddAjaxSettings() methods has the below overloads
	    //public void AddAjaxSetting(Control ajaxifiedControl, Control updatedControl)
	    //public void AddAjaxSetting(Control ajaxifiedControl, Control updatedControl, RadAjaxLoadingPanel loadingPanel)
	    //public void AddAjaxSetting(Control ajaxifiedControl, Control updatedControl, RadAjaxLoadingPanel loadingPanel, UpdatePanelRenderMode renderMode)
	    //public void AddAjaxSetting(Control ajaxifiedControl, Control updatedControl, RadAjaxLoadingPanel loadingPanel, UpdatePanelRenderMode renderMode, Unit updatePanelHeight)
	    // Introduced in R1 2022 SP1
	    //public void AddAjaxSetting(Control ajaxifiedControl, Control updatedControl, RadAjaxLoadingPanel loadingPanel, UpdatePanelRenderMode renderMode, Unit updatePanelHeight, string updatePanelCssClass)
	 }
	    
 protected void Button1_Click(object sender, EventArgs e)   
	 {   
	     Image1.Visible = !Image1.Visible;    
	 }
	
````
````VB 
 Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs)
	        RadAjaxManager1.AjaxSettings.AddAjaxSetting(Button1, Panel1, Nothing)
	        'where the AddAjaxSettings() methods has the below overloads
	        'Public Sub AddAjaxSetting(Control ajaxifiedControl, Control updatedControl)
	        'Public Sub AddAjaxSetting(Control ajaxifiedControl, Control updatedControl, RadAjaxLoadingPanel loadingPanel)
	        'Public Sub AddAjaxSetting(Control ajaxifiedControl, Control updatedControl, RadAjaxLoadingPanel loadingPanel, UpdatePanelRenderMode renderMode)
	        'Public Sub AddAjaxSetting(Control ajaxifiedControl, Control updatedControl, RadAjaxLoadingPanel loadingPanel, UpdatePanelRenderMode renderMode, Unit updatePanelHeight)
		'Introduced in R1 2022 SP1
		'Public Sub AddAjaxSetting(Control ajaxifiedControl, Control updatedControl, RadAjaxLoadingPanel loadingPanel, UpdatePanelRenderMode renderMode, Unit updatePanelHeight, string updatePanelCssClass)
 End Sub
 Protected Sub Button1_Click(ByVal sender As Object, ByVal e As EventArgs)
	        Image1.Visible = Not Image1.Visible
 End Sub
````


## See Also

* [Update in Composite Control]({%slug ajaxmanager/how-to/update-in-composite-control%})
