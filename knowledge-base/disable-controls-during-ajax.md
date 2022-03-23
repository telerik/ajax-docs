---
title: Disable Controls during AJAX Requests with the AjaxManager
page_title: Disable Controls During AJAX Requests with the AjaxManager
description: "Learn how to disable controls during Ajax with the Telerik UI for AJAX AjaxManager."
slug: ajaxmanager/how-to/disable-controls-during-ajax
previous_url: ajax/how-to/disable-controls-during-ajax, controls/ajaxmanager/how-to/disable-controls-during-ajax
tags: telerik, asp, net, ajax, manager, disable, controls, during, ajax
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

How can I disable a single control during an AJAX update so that users are not able to use it before the response ends? How can I set a global flag to disable a control with the AjaxManager control?

## Solution 

To disable a control during an AJAX update, use the [`OnRequestStart`]({%slug ajaxmanager/client-side-programming/events/onrequeststart%}) and [`OnResponseEnd`]({%slug ajaxmanager/client-side-programming/events/onresponseend%}) client-side events. Then, change the `disabled` value.

The following example demonstrates how to prevent the interaction with a control during an AJAX request. Implementing the code will disable any control that has already started a request until its response ends.



````ASPNET
<script type="text/javascript">
	function RequestStart(sender, args) {
	    args.EventTargetElement.disabled = true;
	}
	function ResponseEnd(sender, args) {
	    args.EventTargetElement.disabled = false;
	}        
</script>

<asp:Button ID="btnUpdate" runat="server" Text="Update" />
<asp:Label ID="Label1" runat="server"></asp:Label>
<telerik:RadScriptManager ID="RadScriptManager1" runat="server">
</telerik:RadScriptManager>
<telerik:RadAjaxManager ID="RadAjaxManager1" runat="server">
	<AjaxSettings>
	<telerik:AjaxSetting AjaxControlID="btnUpdate">
	    <UpdatedControls>
	         <telerik:AjaxUpdatedControl ControlID="Label1" />
	    </UpdatedControls>
	</telerik:AjaxSetting>
	</AjaxSettings>
<ClientEvents OnRequestStart="RequestStart" OnResponseEnd="ResponseEnd" />
</telerik:RadAjaxManager>
````


If you need to disable AJAX until the current response finishes, no matter which control has started the first request and which is going to make a second one, you can set a global flag. 

The following example demonstrates how to notify the user that an action is in progress.

````JavaScript
	
var AjaxIsActive = false;
	function RequestStart() {
     if (!AjaxIsActive) {
	 AjaxIsActive = true;
	}
	else {
	alert('Wait for ajax to finish'); return false;
	 }
	}
	function ResponseEnd() {
	jaxIsActive = false;
	}
	
````



## See Also

* [`OnRequestStart`]({%slug ajaxmanager/client-side-programming/events/onrequeststart%})

* [`OnResponseEnd`]({%slug ajaxmanager/client-side-programming/events/onresponseend%})
