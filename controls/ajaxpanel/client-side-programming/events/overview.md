---
title: Overview
page_title: Overview | RadAjax for ASP.NET AJAX Documentation
description: Overview
slug: ajaxpanel/client-side-programming/events/overview
tags: overview
published: True
position: 0
---

# Events Overview



## Client-side events for RadAjaxManager/RadAjaxPanel

**RadAjaxManager** and **RadAjaxPanel** both descend from **RadAjaxControl** . **RadAjaxControl** introduces the **AjaxClientEvents** property that contains the following events:


| Name | Description |
| ------ | ------ |
|[OnRequestStart]({%slug ajaxpanel/client-side-programming/events/onrequeststart%})|Fired when a request to the server is started.|
|[OnResponseEnd]({%slug ajaxpanel/client-side-programming/events/onresponseend%})|Fired when a response from the server is processed.|

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
<telerik:RadAjaxPanel ID="RadAjaxPanel1" runat="server" ClientEvents-OnRequestStart="requestStart" ClientEvents-OnResponseEnd="responseEnd" >
	<telerik:RadButton RenderMode="Lightweight" runat="server" Text="Click me!"></telerik:RadButton>
</telerik:RadAjaxPanel>
````



## See Also

 * [Overview]({%slug ajaxpanel/overview%})

 * [Overview]({%slug ajaxpanel/client-side-programming/overview%})

 * [Demo: RadAjaxManager Client-side API](http://demos.telerik.com/aspnet-ajax/ajax/examples/manager/clientsideapi/defaultcs.aspx)
