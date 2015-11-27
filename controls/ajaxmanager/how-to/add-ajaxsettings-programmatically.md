---
title: Add AjaxSettings Programmatically
page_title: Add AjaxSettings Programmatically | RadAjax for ASP.NET AJAX Documentation
description: Add AjaxSettings Programmatically
slug: ajaxmanager/how-to/add-ajaxsettings-programmatically
previous_url: ajax/radajaxmanager/how-to/add-ajaxsettings-programmatically
tags: add,ajaxsettings,programmatically
published: True
position: 0
---

# Add AjaxSettings Programmatically



## 

This help article discusses the **AjaxSettings** which represent a mapping between a control that initiates an AJAX request and a collection of controls to be updated. There are different cases where, you need to add AJAX pairs dynamically (at runtime).For example, when the controls in the setting are not directly accessible (they are children of other controls in the form) or the**RadAjaxManager** is placed on the parent page and there is no **RadAjax** control on the child page/user control. Note that the way the user creates the settings depends on its preferences and application implementation.

When adding **AjaxSettings** dynamically you should always do this in the **Page** event handler, which is executed each time during the page lifecycle (**Page_Load**, **Page_PreRender**) so that the control could be ajaxified when the page is initially loaded. **Example 1** shows how to AJAX-enable a Button control in a page **Page_Load** event.

>note Note that you need to assure that the controls that take part in the AJAX pair are available on the page!
>


>note You cannot add **AjaxSettings** dynamically in the **Page_Init** event. It is too early in the page lifecycle since the **RadAjaxManager** is not created yet.
>


The example below demonstrates how to AJAX-enable a Button control dynamically to toggle the visibility of an image. The markup and code show how to use **AjaxSettings** to add AJAX to a button control in the **Page_Load** event to display an image (the Telerik logo).

````ASP.NET
 <telerik:RadAjaxManager ID="RadAjaxManager1" runat="server">
 </telerik:RadAjaxManager>
 <asp:Button ID="Button1" runat="server" Text="Button" OnClick="Button1_Click" />
 <asp:Panel ID="Panel1" runat="server" Height="95px">
	        <asp:Image ID="Image1" runat="server" ImageUrl="http://www.Telerik.com/images/Homepage/TelerikLogo.gif" />
</asp:Panel>
````



And in the code-behind:



````C#
 protected void Page_Load(object sender, EventArgs e)    
	 {        
	    RadAjaxManager1.AjaxSettings.AddAjaxSetting(Button1, Panel1, null);
	    //where the AddAjaxSettings() methods has the below overloads
	    //public void AddAjaxSetting(Control ajaxifiedControl, Control updatedControl)
	    //public void AddAjaxSetting(Control ajaxifiedControl, Control updatedControl, RadAjaxLoadingPanel loadingPanel)
	    //public void AddAjaxSetting(Control ajaxifiedControl, Control updatedControl, RadAjaxLoadingPanel loadingPanel, UpdatePanelRenderMode renderMode)
	    //public void AddAjaxSetting(Control ajaxifiedControl, Control updatedControl, RadAjaxLoadingPanel loadingPanel, UpdatePanelRenderMode renderMode, Unit updatePanelHeight)
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
 End Sub
 Protected Sub Button1_Click(ByVal sender As Object, ByVal e As EventArgs)
	        Image1.Visible = Not Image1.Visible
 End Sub
````


## See Also

 * [Update in Composite Control]({%slug ajaxmanager/how-to/update-in-composite-control%})
