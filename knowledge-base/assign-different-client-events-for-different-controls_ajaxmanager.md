---
title: Assign Different Client Events for Different Controls with the AjaxManager or AjaxPanel
page_title: Assign Different Client Events for Different Controls with the AjaxManager or AjaxPanel
description: "Learn how to assign different client events for different controls with the Telerik UI for ASP.NET AjaxManager or AjaxPanel."
slug: ajaxmanager/client-side-programming/how-to/assign-different-client-events-for-different-controls
previous_url: ajax/client-side-programming/how-to/assign-different-client-events-for-different-controls, controls/ajaxmanager/client-side-programming/how-to/assign-different-client-events-for-different-controls
tags: telerik, asp, net, ajax, manager, panel, client, side, programming, assign, different, event, for, different, controls
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
			<td>Progress® Telerik® UI for ASP.NET AJAX AjaxPanel</td>
		</tr>
	</tbody>
</table>

## Description

How can I assign different client-events to different AJAX-enabled controls with the Telerik UI for ASP.NET AjaxManager or AjaxPanel? 

## Solution  

The following example demonstrates how to achieve the desired scenario by determining the target control of the AJAX request with the client-side events of the AjaxManager. As a result, the DropDownList and the Button will have different client-events although they are using the same AjaxManager or AjaxPanel.

````ASP.NET
<telerik:RadAjaxManager ID="RadAjaxManager1" runat="server">
	<AjaxSettings>
	    <telerik:AjaxSetting AjaxControlID="Button1">
	        <UpdatedControls>
	            <telerik:AjaxUpdatedControl ControlID="Label1" />
	         </UpdatedControls>
	    </telerik:AjaxSetting>
	    <telerik:AjaxSetting AjaxControlID="DropDownList1">
	        <UpdatedControls>
	            <telerik:AjaxUpdatedControl ControlID="Label1" />
	        </UpdatedControls>
	    </telerik:AjaxSetting>
	</AjaxSettings>
	<ClientEvents OnRequestStart="Start" OnResponseEnd="End" />
</telerik:RadAjaxManager>
<asp:Button ID="Button1" runat="server" OnClick="Button1_Click" Text="Button" />
<asp:DropDownList ID="DropDownList1" runat="server" AutoPostBack="True" OnSelectedIndexChanged="DropDownList1_SelectedIndexChanged">
	<asp:ListItem>111</asp:ListItem>
	<asp:ListItem>222</asp:ListItem>
</asp:DropDownList>
````



````JavaScript
<telerik:RadCodeBlock ID="RadCodeBlock1" runat="server">
	        <script type="text/javascript">
	
	            function Start(sender, arguments) {
	                if (arguments.EventTarget == "<%= Button1.UniqueID %>") {
	                    alert("StartButton");
	                }
	                if (arguments.EventTarget == "<%= DropDownList1.UniqueID %>") {
	                    alert("StartDropdown");
	                }
	            }
	            function End(sender, arguments) {
	                if (arguments.EventTarget == "<%= Button1.UniqueID %>") {
	                    alert("EndButton");
	                } if (arguments.EventTarget == "<%= DropDownList1.UniqueID %>") {
	                    alert("EndDropdown");
	                }
	            }
	        </script>
</telerik:RadCodeBlock>
````




## See Also

* [Client-Side Programming with the AjaxManager Overview]({%slug ajaxmanager/client-side-programming/overview%})

* [OnRequestStart]({%slug ajaxmanager/client-side-programming/events/requeststart%})

* [OnResponseEnd]({%slug ajaxmanager/client-side-programming/events/responseend%})
