---
title: Cancel AJAX Requests with the AjaxManager or AjaxPanel
page_title: Cancel AJAX Requests with the AjaxManager or AjaxPanel
description: "Learn how to cancel Ajax requests with the Telerik UI for ASP.NET AjaxManager or AjaxPanel."
slug: ajaxmanager/client-side-programming/how-to/cancel-ajax--request
previous_url: ajax/client-side-programming/how-to/cancel-ajax--request, controls/ajaxmanager/client-side-programming/how-to/cancel-ajax--request
tags: telerik, asp, net, ajax, manager, panel, client, side, programming, cancel, requests
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

How can I cancel an Ajax request with the Telerik UI for ASP.NET AjaxManager or AjaxPanel? 

## Solution

To cancel an AJAX request, in the `OnRequestStart` client-side event handler of the AjaxManager or AjaxPanel, call the `set_cancel(true)` to prevent the request from continuing.

````JavaScript
<telerik:RadCodeBlock ID="RadCodeBlock1" runat="server">
	<script type='text/javascript'>
	            function OnRequestStart(ajaxPanel, eventArgs) {
	                var eventTarget = eventArgs.get_eventTarget();
	                if (eventTarget == "<%= Button1.UniqueID %>") {
	                    if (!CheckZipCode()) {
	                        eventArgs.set_enableAjax(false); // cancel the ajax request
	                    }
	                }
	            }
	
	            function CheckZipCode() {
	                var zipCode = $get('<%= TextBox1.ClientID %>').value;
	                if (zipCode.length != 5) {
	                    alert('Please enter a valid 5 digit postal code!');
	                    return false;
	                }
	                else {
	                    var fiveDigitCheckRE = /^\d{5}$/ //regular expression for checking a 5 digit number
	                    if (zipCode.search(fiveDigitCheckRE) == -1) {
	                        alert("Only digits are allowed!");
	                        return false;
	                    }
	                }
	                return true;
	            }
	 </script>
</telerik:RadCodeBlock>
````



## See Also

* [Client Confirmation and AJAX]({%slug ajaxmanager/client-side-programming/how-to/client-confirmation-and-ajax%})

* [Cancelling AJAX](https://demos.telerik.com/aspnet-ajax/Ajax/Examples/Common/CancelAJAX/DefaultCS.aspx)
