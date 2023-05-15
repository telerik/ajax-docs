---
title: Ajaxifying Multi-Page Projects
page_title: Ajaxifying Multi-Page Projects with the AjaxManagerProxy
description: "Learn how to use the AjaxManagerProxy when working with the Telerik UI for ASP.NET AjaxManager."
slug: ajaxmanager/radajaxmanagerproxy/overview
previous_url: ajax/radajaxmanagerproxy/overview, controls/ajaxmanager/radajaxmanagerproxy/overview
tags: telerik, aspnet, ajax, ajaxmanager, ajaxify, multipage, projects
published: True
position: 4
---

# Ajaxifying Multi-Page Projects with the AjaxManagerProxy

The Ajaxifying Telerik mechanism allows you to use only a single AjaxManager on a page.

To work around this functionality and handle complex scenarios, for example, when using [WebUserControls]({%slug ajaxmanager/how-to/radajax-and-webusercontrols%}) or [Master/Content Pages]({%slug ajaxmanager/how-to/radajax-and-masterpage%}), place a `RadAjaxManager` instance on the main or master page, and then add a `RadAjaxManagerProxy` control to the user control or content page.

The `RadAjaxManagerProxy` copies the exact same [AjaxManager designer configuration]({%slug ajaxmanager/overview%}) so that you can set all the necessary AJAX settings within the WebUserControl or ContentPage entirely through the designer. 

The following example shows how to use the `RadAjaxManagerProxy` to Ajax-enable controls within a WebUserControl or ContentPage.


````ASP.NET
<telerik:RadAjaxManagerProxy ID="RadAjaxManagerProxy1" runat="server">
	<AjaxSettings>
	    <telerik:AjaxSetting AjaxControlID="DropDownList1">
	        <UpdatedControls>
	            <telerik:AjaxUpdatedControl ControlID="DetailsView1" />
	            <telerik:AjaxUpdatedControl ControlID="GridView1" />
	        </UpdatedControls>
	    </telerik:AjaxSetting>
	    <telerik:AjaxSetting AjaxControlID="GridView1">
	        <UpdatedControls>
	            <telerik:AjaxUpdatedControl ControlID="GridView1" />
	            <telerik:AjaxUpdatedControl ControlID="DetailsView1" />
	        </UpdatedControls>
	    </telerik:AjaxSetting>
	</AjaxSettings>
</telerik:RadAjaxManagerProxy>
````



Using the `RadAjaxManagerProxy` makes the design-time configuration easier: 

* `RadAjaxManagerProxy` is an extension of the AjaxManager. To work work with it on client, use the [AjaxManager Client-side APIs]({%slug ajaxmanager/client-side-programming/overview%})

* You can get the `RadAjaxManager` instance through the `GetCurrent` static method similar to the `asp:ScriptManager` control and call the master `RadAjaxManager` client-side methods if necessary.

The following example demonstrates how to set the `RadAjaxManager` instance and fire an AJAX request.

>caution When you use a server-side code block, wrap the entire script in a `RadCodeBlock` to prevent the `System.Web.HttpException: The Controls collection cannot be modified because the control contains code blocks (i.e. <% ... %>)` server error.

````JavaScript
<telerik:RadCodeBlock ID="RadCodeBlock1" runat="server">
	<script type="text/javascript">
	    function myUserControlClickHandler() {
	        find("<%= RadAjaxManager.GetCurrent(Page).ClientID %>").ajaxRequest("content");
	    }
	</script>
 </telerik:RadCodeBlock>
````




If you need to handle the master manager events in the user control or content page, attach event handlers to the `RadAjaxManager` as shown in the following example. 

>* To add [AJAX settings programmatically]({%slug ajaxmanager/how-to/add-ajaxsettings-programmatically%}), it is recommended that you get the master `RadAjaxManager` instance and call its methods or properties as well. 
>* You can use the same `GetCurrent` method to access the `RadAjaxManager` placed in the Master or Main page from a Content page or WebUserControl.


````C#
protected void Page_Load(object sender, EventArgs e)
{
	RadAjaxManager manager = RadAjaxManager.GetCurrent(Page);
	manager.ClientEvents.OnRequestStart = "onRequestStart";
	manager.ClientEvents.OnResponseEnd = "onResponseEnd";
	manager.AjaxRequest += new RadAjaxControl.AjaxRequestDelegate(manager_AjaxRequest);
}

protected void manager_AjaxRequest(object sender, Telerik.Web.UI.AjaxRequestEventArgs e)
{
	//handle the manager AjaxRequest event here
}	
````
````VB
Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs)
	Dim manager As RadAjaxManager = RadAjaxManager.GetCurrent(Page)
	manager.ClientEvents.OnRequestStart = "onRequestStart"
	manager.ClientEvents.OnResponseEnd = "onResponseEnd"
	AddHandler manager.AjaxRequest, AddressOf manager_AjaxRequest
End Sub

Protected Sub manager_AjaxRequest(ByVal sender As Object, ByVal e As Telerik.Web.UI.AjaxRequestEventArgs)
	'handle the manager AjaxRequest event here
End Sub
````

## See Also

* [AjaxManager Overview]({%slug ajaxmanager/overview%})
* [Design-Time]({%slug ajaxmanager/design-time%})
* [Telerik Ajaxifying Mechanism and WebUserControls]({%slug ajaxmanager/how-to/radajax-and-webusercontrols%})
* [Telerik Ajaxifying Mechanism and MasterPage]({%slug ajaxmanager/how-to/radajax-and-masterpage%})
* [Using the AjaxManager (Demo)](https://demos.telerik.com/aspnet-ajax/ajax/examples/overview/defaultcs.aspx)
