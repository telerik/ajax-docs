---
title: Overview
page_title: RadAjaxManagerProxy Overview | RadAjax for ASP.NET AJAX Documentation
description: Overview
slug: ajax/radajaxmanagerproxy/overview
tags: overview
published: True
position: 0
---

# RadAjaxManagerProxy Overview



This help article describes how to work with **RadAjaxManagerProxy** controls and provides an example.

## 

**RadAjax** allows only one **RadAjaxManager** on a page. So in a complex scenarios like [WebUserControls]({%slug ajax/radajaxmanager/how-to/radajax-and-webusercontrols%}) or [Master/Content Pages]({%slug ajax/radajaxmanager/how-to/radajax-and-masterpage%}), you should place a **RadAjaxManager** instance on the main/master page and then add a **RadAjaxManagerProxy** control to the user control/content page.**RadAjaxManagerProxy** copies the exact same [RadAjaxManager designer configuration]({%slug ajax/radajaxmanager/overview%}) so that you can set all the necessary AJAX settings within the WebUserControl/ContentPage entirely through the designer. **Example 1** shows how you could use **RadAjaxManagerProxy** to Ajax-enable controls within a WebUserControl/ContentPage.

**Example 1**: **RadAjaxManagerProxy** sample configuration.

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



Using the **RadAjaxManagerProxy** makes design-time configuration easier. The **RadAjaxManagerProxy** does not provide client-side functionality as the **RadAjaxManager** does. Also, **RadAjaxManagerProxy** does not have [client-side object]({%slug ajax/client-side-programming/radajaxmanager-object%}) or functions like [ajaxRequest/ajaxRequestWithTarget]({%slug ajax/client-side-programming/overview%}) and [client-side events]({%slug ajax/client-side-programming/events/overview%}).Instead, you can get the **RadAjaxManager** instance through the **GetCurrent** static method (**Example 2**) similar to the asp:ScriptManager control and call the master **RadAjaxManager** client-side methods if necessary.

**Example 2**: Getting instance of **RadAjaxManager** and firing an Ajax request.

````JavaScript
<telerik:RadCodeBlock ID="RadCodeBlock1" runat="server">
	<script type="text/javascript">
	    function myUserControlClickHandler() {
	        find("<%= RadAjaxManager.GetCurrent(Page).ClientID %>").ajaxRequest("content");
	    }
	</script>
 </telerik:RadCodeBlock>
````



>caution When you use a server-side code block (like in **Example 2** ) you should wrap the entire script in a **RadCodeBlock** . This is necessary to prevent the server error *System.Web.HttpException: The Controls collection cannot be modified because the control contains code blocks (i.e. <% ... %>)* .
>


If you need to handle the master manager events in the user control or content page, you can attach event handlers to the **RadAjaxManager** as shown in **Example 3** .

**Example 3**: Attaching event handlers to a **RadAjaxManager** in a ContentPage



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


>note If you need to add[AJAX settings programmatically]({%slug ajax/radajaxmanager/how-to/add-ajaxsettings-programmatically%}), it is recommended that you get the master **RadAjaxManager** instance and call its methods/properties as well. The same **GetCurrent** method could be used to access the **RadAjaxManager** placed in the Master/Main page from a Content page/WebUserControl.
>


## See Also

 * [Overview]({%slug ajax/radajaxmanager/overview%})

 * [Design Time]({%slug ajax/design-time%})

 * [RadAjax and WebUserControls]({%slug ajax/radajaxmanager/how-to/radajax-and-webusercontrols%})

 * [RadAjax and MasterPage]({%slug ajax/radajaxmanager/how-to/radajax-and-masterpage%})

 * [Demo: RadAjaxManager](http://demos.telerik.com/aspnet-ajax/ajax/examples/overview/defaultcs.aspx)
