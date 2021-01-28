---
title: Cancel AJAX  Request
page_title: Cancel AJAX Request
description: Check our Web Forms article about Cancel AJAX  Request.
slug: ajaxpanel/client-side-programming/how-to/cancel-ajax--request
tags: cancel,ajax,,request
published: True
position: 0
---

# Cancel AJAX  Request



## 

You can cancel an AJAX request in the **OnRequestStart** client-side event handler of your RadAjaxManager/RadAjaxPanel.Calling **set_cancel(true)** prevents the request from continuing.

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

 * [Client Confirmation and AJAX]({%slug ajaxpanel/client-side-programming/how-to/client-confirmation-and-ajax%})

 * [Cancel AJAX](https://demos.telerik.com/aspnet-ajax/Ajax/Examples/Common/CancelAJAX/DefaultCS.aspx)
