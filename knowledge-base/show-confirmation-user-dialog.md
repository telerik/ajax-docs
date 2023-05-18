---
title: Show a User Confirmation Dialog and Initiate an AJAX Request
page_title: Show a User Confirmation Dialog and Initiate an AJAX Request
description: "Learn how to show a confirmation dialog for the user and initiate an Ajax request with the Telerik UI for ASP.NET AjaxManager or AjaxPanel."
slug: ajaxmanager/client-side-programming/how-to/client-confirmation-and-ajax
previous_url: ajax/client-side-programming/how-to/client-confirmation-and-ajax, controls/ajaxmanager/client-side-programming/how-to/client-confirmation-and-ajax
tags: telerik, asp, net, ajax, manager, panel, client, side, programming, show, user, confirmation, dialog, initiate, request
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

How can I show a confirmation dialog for the user and initiate an Ajax request if accepted with the Telerik UI for ASP.NET AjaxManager or AjaxPanel? 

## Solution


The following snippet shows the application of standard postbacks.

````ASP.NET
<asp:ImageButton ID="ImageButton1" runat="server" OnClientClick="return confirm('Are you sure?');" />
````



To achieve the desired behavior, you need to change the `OnClientClick` event settings. The purpose is to make it work with AJAX when the button is AJAX-enabled by adding AJAX setting to the AjaxManager or when the button is placed within a AjaxPanel.

````ASP.NET
<asp:ImageButton ID="ImageButton2" runat="server" OnClientClick="if (!confirm('Are you sure?')) return false;" />
````



Alternatively, use the `OnRequestStart` client-side event to implement more complex logic. The following example demonstrates how to display a confirmation message by setting `OnRequestStart`.

````JavaScript
<telerik:RadCodeBlock ID="RadCodeBlock1" runat="server">
<script type="text/javascript">
	        function OnRequestStart(ajaxControl, eventArgs) {
	            var eventTarget = eventArgs.get_eventTarget(); 
	            if (eventTarget == "<%= ImageButton1.UniqueID %>") {
	                return confirm('Are you sure?');
	            }
	            else {
	                return false;
	            }
	        }
</script>
</telerik:RadCodeBlock>
````



## See Also

* [Cancelling AJAX Request]({%slug ajaxmanager/client-side-programming/how-to/cancel-ajax--request%})

* [RequestStart]({%slug ajaxmanager/client-side-programming/events/requeststart%})

* [Demo: AjaxPanel Client-Side Events](https://demos.telerik.com/aspnet-ajax/ajax/examples/panel/clientevents/defaultcs.aspx)
