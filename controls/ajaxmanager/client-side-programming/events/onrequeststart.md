---
title: OnRequestStart
page_title: Ajax Manager OnRequestStart
description: "Learn how to use the OnRequestStart client-side event when working with Telerik UI for ASP.NET AJAX."
slug: ajaxmanager/client-side-programming/events/onrequeststart
previous_url: ajax/client-side-programming/events/onrequeststart
tags: telerik, aspnet, ajax, ajaxmanager, onrequeststart, event, clientside, programming, api
published: True
position: 1
---

# OnRequestStart

The `OnRequestStart` client-side event handler is called when a request to the server is started. 

The event can be initially triggered by an initiating control configured in the AjaxManager settings, a control within an AjaxPanel, or by a client-side `ajaxRequest()` call. The event can be cancelled.

Two parameters are passed to the event handler with the following methods:

* `sender`&mdash;The instance of the client-side `RadAjaxManager` or `RadAjaxPanel` object.

* `eventArgs`&mdash;Provides the following methods:

    * `set_cancel()`&mdash;Lets you permit or block the AJAX request from continuing. Calling `set_cancel(true)` prevents the request from continuing.

    * `get_eventTarget()`&mdash;Gets the `UniqueID` of the element that had raised the request.

    * `get_eventArgument()`&mdash;Gets the string passed in the initial AJAX request.

    * `get_eventTargetElement()`&mdash;Gets the instance of the client-side object that raised the AJAX request. You can iterate each of the settings and retrieve the initiating control `id` and another array of objects that represent updated controls.

    * `get_ajaxSettings()`&mdash;Returns an array of objects that represents AjaxManager current configuration of the AjaxManager or the updated controls of the AjaxPanel.

    * `get_enableAjax()`, `set_enableAjax()`&mdash;Gets or sets if an AJAX request is performed. `set_enableAjax(false)` causes the request to be performed with a standard postback.

The example below displays the control that initiated the request.

```ASP.NET
<script type="text/javascript">
	function requestStart(sender, eventArgs) {
	    alert('Request start initiated by: ' + eventArgs.get_eventTarget());
	}
</script>
<telerik:RadAjaxManager ID="RadAjaxManager1" runat="server">
	<ClientEvents OnRequestStart="requestStart" />
</telerik:RadAjaxManager>
````



## See Also

* [AjaxManager Overview]({%slug ajaxmanager/overview%})
* [Demo: AjaxManager Client-Side API](https://demos.telerik.com/aspnet-ajax/ajax/examples/manager/clientsideapi/defaultcs.aspx)
