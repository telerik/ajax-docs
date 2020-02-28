---
title: Client Confirmation and AJAX
page_title: Client Confirmation and AJAX | RadAjax for ASP.NET AJAX Documentation
description: Client Confirmation and AJAX
slug: ajaxmanager/client-side-programming/how-to/client-confirmation-and-ajax
previous_url: ajax/client-side-programming/how-to/client-confirmation-and-ajax
tags: client,confirmation,and,ajax
published: True
position: 1
---

# Client Confirmation and AJAX



You may need to provide a confirmation dialog to the user and initiate an AJAX request if accepted. Confirmation using standard postbacks often look like this:

## 

````ASP.NET
<asp:ImageButton ID="ImageButton1" runat="server" OnClientClick="return confirm('Are you sure?');" />
````



The **OnClientClick** should be changed a bit to work with AJAX when the button is AJAX-enabled by added the necessaryAJAX setting to **RadAjaxManager** or when the button is placed within a **RadAjaxPanel** control.

````ASP.NET
<asp:ImageButton ID="ImageButton2" runat="server" OnClientClick="if (!confirm('Are you sure?')) return false;" />
````



Alternatively, you can use the **OnRequestStart** client-side event to implement more complex logic.**Example 1** shows a sample script.

Example 1: Displays confirmation message by using OnRequestStart client-side event.

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

 * [Cancel AJAX  Request]({%slug ajaxmanager/client-side-programming/how-to/cancel-ajax--request%})

 * [OnRequestStart]({%slug ajaxmanager/client-side-programming/events/onrequeststart%})

 * [Demo: RadAjaxPanel Client-side Events](https://demos.telerik.com/aspnet-ajax/ajax/examples/panel/clientevents/defaultcs.aspx)
