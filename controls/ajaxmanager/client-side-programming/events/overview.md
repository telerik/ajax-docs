---
title: Overview
page_title: Overview | RadAjax for ASP.NET AJAX Documentation
description: Overview
slug: ajaxmanager/client-side-programming/events/overview
tags: overview
published: True
position: 0
---

# Events Overview



## Client-side events for RadAjaxManager/RadAjaxPanel

**RadAjaxManager** and **RadAjaxPanel** both descend from **RadAjaxControl** . **RadAjaxControl** introduces the **AjaxClientEvents** property that contains the following events:


| Name | Description |
| ------ | ------ |
|[OnRequestStart]({%slug ajaxmanager/client-side-programming/events/onrequeststart%})|Fired when a request to the server is started.|
|[OnResponseEnd]({%slug ajaxmanager/client-side-programming/events/onresponseend%})|Fired when a response from the server is processed.|

To use these events, simply write a JavaScript function that can be called when the event occurs(**Example 1** ). Then assign the name of the JavaScript function as the value of the the corresponding property.

Example 1: Displays a message when request starts and ends.

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

 * [Overview]({%slug ajaxmanager/overview%})

 * [Client-side Overview]({%slug ajaxmanager/client-side-programming/overview%})

 * [RadAjaxManager Object]({%slug ajaxmanager/client-side-programming/radajaxmanager-object%})

 * [Demo: RadAjaxManager Client-side API](http://demos.telerik.com/aspnet-ajax/ajax/examples/manager/clientsideapi/defaultcs.aspx)
