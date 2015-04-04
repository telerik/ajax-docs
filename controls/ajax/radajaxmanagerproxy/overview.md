---
title: RadAjaxManagerProxy Overview
page_title: Overview | UI for ASP.NET AJAX Documentation
description: Overview
slug: ajax/radajaxmanagerproxy/overview
tags: overview
published: True
position: 0
---

# RadAjaxManagerProxy Overview



This help article describes how to work with __RadAjaxManagerProxy__ controls and provides an example.

## 

__RadAjax__ allows only one __RadAjaxManager__ on a page. So in a complex scenarios like [WebUserControls]({%slug ajax/radajaxmanager/how-to/radajax-and-webusercontrols%}) or [Master/Content Pages]({%slug ajax/radajaxmanager/how-to/radajax-and-masterpage%}), you should place a __RadAjaxManager__ instance on the main/master page and then add a __RadAjaxManagerProxy__ control to the user control/content page.__RadAjaxManagerProxy__ copies the exact same [RadAjaxManager designer configuration]({%slug ajax/radajaxmanager/overview%}) so that you can set all the necessary AJAX settings within the WebUserControl/ContentPage entirely through the designer. __Example 1__ shows how you could use __RadAjaxManagerProxy__ to Ajax-enable controls within a WebUserControl/ContentPage.

__Example 1__: __RadAjaxManagerProxy__ sample configuration.

````ASPNET
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



Using the __RadAjaxManagerProxy__ makes design-time configuration easier. The __RadAjaxManagerProxy__ does not provide client-side functionality as the __RadAjaxManager__ does. Also, __RadAjaxManagerProxy__ does not have [client-side object]({%slug ajax/client-side-programming/radajaxmanager-object%}) or functions like [ajaxRequest/ajaxRequestWithTarget]({%slug ajax/client-side-programming/overview%}) and [client-side events]({%slug ajax/client-side-programming/events/overview%}).Instead, you can get the __RadAjaxManager__ instance through the __GetCurrent__ static method (__Example 2__) similar to the asp:ScriptManager control and call the master __RadAjaxManager__ client-side methods if necessary.

__Example 2__: Getting instance of __RadAjaxManager__ and firing an Ajax request.

````JavaScript
	    <telerik:RadCodeBlock ID="RadCodeBlock1" runat="server">
	        <script type="text/javascript">
	            function myUserControlClickHandler() {
	                $find("<%= RadAjaxManager.GetCurrent(Page).ClientID %>").ajaxRequest("content");
	            }
	        </script>
	    </telerik:RadCodeBlock>
````



>caution When you use a server-side code block (like in __Example 2__ ) you should wrap the entire script in a __RadCodeBlock__ . This is necessary to prevent the server error *System.Web.HttpException: The Controls collection cannot be modified because the control contains code blocks (i.e. <% ... %>)* .
>


If you need to handle the master manager events in the user control or content page, you can attach event handlers to the __RadAjaxManager__ as shown in __Example 3__.

__Example 3__: Attaching event handlers to a __RadAjaxManager__ in a ContentPage

>tabbedCode

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
````VB.NET
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
>end

>note If you need to add[AJAX settings programmatically]({%slug ajax/radajaxmanager/how-to/add-ajaxsettings-programmatically%}), it is recommended that you get the master __RadAjaxManager__ instance and call its methods/properties as well. The same __GetCurrent__ method could be used to access the __RadAjaxManager__ placed in the Master/Main page from a Content page/WebUserControl.
>


# See Also

 * [Overview]({%slug ajax/radajaxmanager/overview%})

 * [Design Time]({%slug ajax/design-time%})

 * [RadAjax and WebUserControls]({%slug ajax/radajaxmanager/how-to/radajax-and-webusercontrols%})

 * [RadAjax and MasterPage]({%slug ajax/radajaxmanager/how-to/radajax-and-masterpage%})

 * [Demo: RadAjaxManager](http://demos.telerik.com/aspnet-ajax/ajax/examples/overview/defaultcs.aspx)
