---
title: Force Controls in an AJAX-enabled Container to Perform a Postback
page_title: Force Controls in an AJAX-enabled Container to Perform a Postback | RadAjax for ASP.NET AJAX Documentation
description: Force Controls in an AJAX-enabled Container to Perform a Postback
slug: ajaxmanager/troubleshooting/force-controls-in-an-ajax-enabled-container-to-perform-a-postback
previous_url: ajax/radajaxmanager/troubleshooting/force-controls-in-an-ajax-enabled-container-to-perform-a-postback
tags: force,controls,in,an,ajax-enabled,container,to,perform,a,postback
published: True
position: 5
---

# Force Controls in an AJAX-enabled Container to Perform a Postback



## 

If you used **RadAjaxManager** to AJAX-enable a container control but you need to conditionally do a full postback with some of its inner controls, this article will demonstrate two steps you can do to allow that.

````ASP.NET
<telerik:RadAjaxManager ID="RadAjaxManager1" runat="server">
	<AjaxSettings>
	    <telerik:AjaxSetting AjaxControlID="Button1">
	        <UpdatedControls>
	            <telerik:AjaxUpdatedControl ControlID="Panel1" />
	        </UpdatedControls>
	    </telerik:AjaxSetting>
	</AjaxSettings>
</telerik:RadAjaxManager>
<asp:Button ID="Button1" runat="server" Text="Button" />
<asp:Panel ID="Panel1" runat="server">
	<asp:Label ID="Label1" runat="server" Text="Label"></asp:Label>
	<asp:Button ID="Button2" runat="server" Text="Button" />
</asp:Panel>
````



However, once the container control is added to the UpdatedControls collection, all postback controls in it start performing callbacks instead of regular postbacks. To force these controls to perform postbacks, you can follow these two steps:

**1. Disable AJAX in the OnRequestStart client-side event handler of the RadAjaxManager control for the particular postback.**



````JavaScript
<telerik:RadCodeBlock ID="RadCodeBlock1" runat="server">
	<script type="text/javascript">
	    function RequestStart(sender, eventArgs) {
	         var eventTarget = eventArgs.get_eventTarget();
	        if (eventTarget.indexOf("Button2") != -1) {
	            eventArgs.set_enableAjax(false);
	        }
	    }
	</script>
</telerik:RadCodeBlock>
````



````ASP.NET
<telerik:RadAjaxManager ID="RadAjaxManager1" runat="server">
	<ClientEvents OnRequestStart="RequestStart" />
	<AjaxSettings>
	    <telerik:AjaxSetting AjaxControlID="Button1">
	        <UpdatedControls>
	            <telerik:AjaxUpdatedControl ControlID="Panel1" />
	        </UpdatedControls>
	    </telerik:AjaxSetting>
	    <telerik:AjaxSetting AjaxControlID="Panel1">
	        <UpdatedControls>
	            <telerik:AjaxUpdatedControl ControlID="Panel1" />
	        </UpdatedControls>
	    </telerik:AjaxSetting>
	</AjaxSettings>
</telerik:RadAjaxManager>
<asp:Button ID="Button1" runat="server" Text="Button" />
<asp:Panel ID="Panel1" runat="server">
	<asp:Label ID="Label1" runat="server" Text="Label"></asp:Label>
	<asp:Button ID="Button2" runat="server" Text="Button" />
</asp:Panel>
````









>note Note that you need to add an AJAX setting where the container control updates itself.
>


**2. Set the ChildrenAsTriggers property of the update panel added dynamically around the container control to false**

For that purpose you need to handle the **OnAjaxSettingCreated** server-side event of the **RadAjaxManager** control:



````ASP.NET
<telerik:RadAjaxManager ID="RadAjaxManager1" runat="server" OnAjaxSettingCreated="RadAjaxManager1_AjaxSettingCreated">
	<AjaxSettings>
	    <telerik:AjaxSetting AjaxControlID="Button1">
	        <UpdatedControls>
	            <telerik:AjaxUpdatedControl ControlID="Panel1" />
	        </UpdatedControls>
	    </telerik:AjaxSetting>
	</AjaxSettings>
</telerik:RadAjaxManager>
<asp:Button ID="Button1" runat="server" Text="Button" />
<asp:Panel ID="Panel1" runat="server">
	<asp:Label ID="Label1" runat="server" Text="Label"></asp:Label>
	<asp:Button ID="Button2" runat="server" Text="Button" />
</asp:Panel>
````
````C#
	     
protected void RadAjaxManager1_AjaxSettingCreated(object sender, AjaxSettingCreatedEventArgs e)
{   
	        if (e.Updated.ClientID == Panel1.ClientID)   
	        {       
	            e.UpdatePanel.ChildrenAsTriggers = false;   
	        }
}
				
````
````VB
Protected Sub RadAjaxManager1_AjaxSettingCreated(ByVal sender As Object, ByVal e As AjaxSettingCreatedEventArgs)
	        If e.Updated.ClientID = Panel1.ClientID Then
	            e.UpdatePanel.ChildrenAsTriggers = False
	        End If
End Sub
	
	
````


## See Also

 * [Cancel AJAX  Request]({%slug ajaxmanager/client-side-programming/how-to/cancel-ajax--request%})

 * [OnRequestStart]({%slug ajaxmanager/client-side-programming/events/onrequeststart%})
