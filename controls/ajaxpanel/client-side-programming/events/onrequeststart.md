---
title: OnRequestStart
page_title: OnRequestStart | RadAjax for ASP.NET AJAX Documentation
description: OnRequestStart
slug: ajaxpanel/client-side-programming/events/onrequeststart
tags: onrequeststart
published: True
position: 1
---

# OnRequestStart



## 

The **OnRequestStart** client-side event handler is called when a request to the server is started. The event can be initially triggered by an initiating control configured in **RadAjaxManager** settings, a control within a **RadAjaxPanel** or by a client-side **ajaxRequest()** call. The event can be cancelled.

Two parameters are passed to the event handler with the following methods:

* **sender** - The instance of the client-side **RadAjaxManager** /**RadAjaxPanel** object.

* **eventArgs** , which has the following methods:

* **set_cancel()** - Lets you permit or block the AJAX request from continuing. Calling **set_cancel(true)** prevents the request from continuing.

* **get_eventTarget()** - Gets the **UniqueID** of the element that had raised the request.

* **get_eventArgument()** - Gets the string passed in the initial AJAX request.

* **get_eventTargetElement()** - Gets the instance of the client-side object that raised the AJAX request. You can iterate each of the settings and retrieve the initiating control id and another array of objects that represent updated controls.

* **get_enableAjax()** , **set_enableAjax()** - Gets or sets if an AJAX request is performed. **set_enableAjax(false)** causes the request to be performed via standard postback.

The example below displays the control that initiated the request.

````ASP.NET
<script type="text/javascript">
	function requestStart(sender, eventArgs) {
	    alert('Request start');
	}
</script>
<telerik:RadAjaxPanel ID="RadAjaxPanel1" runat="server" ClientEvents-OnRequestStart="requestStart">
	<telerik:RadButton RenderMode="Lightweight" runat="server" Text="Click me!"></telerik:RadButton>
</telerik:RadAjaxPanel>
````



## See Also

 * [Overview]({%slug ajaxpanel/client-side-programming/overview%})
