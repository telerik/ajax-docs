---
title: Add AjaxSettings Programmatically
page_title: Add AjaxSettings Programmatically | UI for ASP.NET AJAX Documentation
description: Add AjaxSettings Programmatically
slug: ajax/radajaxmanager/how-to/add-ajaxsettings-programmatically
tags: add,ajaxsettings,programmatically
published: True
position: 0
---

# Add AjaxSettings Programmatically



## 

This help article discusses the __AjaxSettings__ which represent a mapping between a control that initiates an AJAX request and acollection of controls to be updated. There are different cases where, you need to add AJAX pairs dynamically (at runtime).For example, when the controls in the setting are not directly accessible (they are children of other controls in the form) or the__RadAjaxManager__ is placed on the parent page and there is no __RadAjax__ control on the child page/user control. Note that the way the usercreates the settings depeneds on its preferences and application implementation.

When adding __AjaxSettings__ namically you should always do this in the __Page__ event handler, which is executed each time during the pagelifecycle (__Page_Load__, __Page_PreRender__) so that the control could be ajaxified when the page is initially loaded. __Example 1__shows how to AJAX-enable a Button control in a page __Page_Load__ event.

>note Note that you need to assure that the controls that take part in the AJAX pair are available on the page!
>


>note You cannot add __AjaxSettings__ dynamically in the __Page_Init__ event. It is too early in the page lifecycle since the __RadAjaxManager__ is not created yet.
>


The example below demonstrates how to AJAX-enable a Button control dynamically to toggle the visibility of an image. The markup and code show how to use __AjaxSettings__ to add AJAX to a button control in the __Page_Load__ event to display an image (the Telerik logo).

````ASPNET
	    <telerik:RadAjaxManager ID="RadAjaxManager1" runat="server">
	    </telerik:RadAjaxManager>
	    <asp:Button ID="Button1" runat="server" Text="Button" OnClick="Button1_Click" />
	    <asp:Panel ID="Panel1" runat="server" Height="95px">
	        <asp:Image ID="Image1" runat="server" ImageUrl="http://www.Telerik.com/images/Homepage/TelerikLogo.gif" />
	    </asp:Panel>
````



And in the code-behind:

>tabbedCode

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
````VB.NET
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
>end

# See Also[](251A6C11-CA84-419B-A65C-3A3329FB1FDD)

 * [Update in Composite Control]({%slug ajax/radajaxmanager/how-to/update-in-composite-control%})
