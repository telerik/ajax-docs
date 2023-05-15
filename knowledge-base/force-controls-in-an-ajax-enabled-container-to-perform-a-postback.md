---
title: Force Controls in an AJAX-Enabled Container to Perform a Postback
page_title: Force Controls in an AJAX-Enabled Container to Perform a Postback
description: "Learn how to force controls in an AJAX-enabled container to perform a postback."
slug: ajaxmanager/troubleshooting/force-controls-in-an-ajax-enabled-container-to-perform-a-postback
previous_url: ajax/radajaxmanager/troubleshooting/force-controls-in-an-ajax-enabled-container-to-perform-a-postback, controls/ajaxmanager/troubleshooting/force-controls-in-an-ajax-enabled-container-to-perform-a-postback
tags: telerik, asp, net, ajax, troubleshooting, ajaxmanager, force, controls, in, an, ajax, enabled, container, to, perform, a, postback
type: how-to
category: knowledge-base
res_type: kb
published: True
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>Progress® Telerik® UI for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>

## Description

How can I force controls in an AJAX-enabled container to perform a postback?

## Solution


If you use the AjaxManager to AJAX-enable a container control but you need to conditionally do a full postback with some of its inner controls, you need to apply the following settings. 


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



However, once the container control is added to the `UpdatedControls` collection, all postback controls in it will start performing callbacks instead of regular postbacks. To force these controls to perform postbacks, use either of the following approaches:

* Disable AJAX in the `OnRequestStart` client-side event handler of the AjaxManager control for the particular postback. Note that you need to add an AJAX setting where the container control updates itself.



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



* (This approach is not longer supported. Use the previous suggestion.) Set the `ChildrenAsTriggers` property of the update panel that is added dynamically around the container control to `false`. For that purpose, you need to handle the `OnAjaxSettingCreated` server-side event of the AjaxManager control. 



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

* [Cancel AJAX Requests]({%slug ajaxmanager/client-side-programming/how-to/cancel-ajax--request%})

* [OnRequestStart]({%slug ajaxmanager/client-side-programming/events/requeststart%})
