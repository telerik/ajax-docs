---
title: Overview
page_title: AjaxManager Client-Side Events Overview
description: "Learn how to use the client-side events when working with Telerik UI for ASP.NET AJAX."
slug: ajaxmanager/client-side-programming/events/overview
tags: telerik, aspnet, ajax, ajaxmanager, clientside, events, overview
published: True
position: 0
---

# Client-Side Events Overview


The AjaxManager and the AjaxPanel both descend from the `RadAjaxControl` instance. 

The `RadAjaxControl` introduces the `AjaxClientEvents` property that contains the following events:

* [`OnRequestStart`]({%slug ajaxmanager/client-side-programming/events/onrequeststart%})&mdash;Fired when a request to the server is started.
* [`OnResponseEnd`]({%slug ajaxmanager/client-side-programming/events/onresponseend%})&mdash;Fired when a response from the server is processed.

To use these events, write a JavaScript function that can be called when the event occurs. Then, assign the name of the JavaScript function as the value of the corresponding property.

The following example shows how to display a message when a request starts and ends.

````ASP.NET
<script type="text/javascript">
	function requestStart(sender, eventArgs) {
	    alert('Request start');
	}
	function responseEnd(sender, eventArgs) {
	    alert('Response complete');
	}
</script>
<telerik:RadAjaxManager ID="RadAjaxManager1" runat="server">
	        <ClientEvents OnRequestStart="requestStart" OnResponseEnd="responseEnd" />
	        <AjaxSettings>
	            <telerik:AjaxSetting AjaxControlID="Button1">
	                <UpdatedControls>
	                    <telerik:AjaxUpdatedControl ControlID="TextBox1"></telerik:AjaxUpdatedControl>
	                </UpdatedControls>
	            </telerik:AjaxSetting>
	        </AjaxSettings>
</telerik:RadAjaxManager>
````


## See Also 

* [AjaxManager Overview]({%slug ajaxmanager/overview%})
* [Demo: AjaxManager Client-Side API](https://demos.telerik.com/aspnet-ajax/ajax/examples/manager/clientsideapi/defaultcs.aspx)
* [The RadAjaxManager Client-Side Object]({%slug ajaxmanager/client-side-programming/radajaxmanager-object%})
