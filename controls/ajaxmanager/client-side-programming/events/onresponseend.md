---
title: OnResponseEnd
page_title: AjaxManager OnResponseEnd
description: "Learn how to use the OnResponseEnd client-side event when working with Telerik UI for ASP.NET AJAX."
slug: ajaxmanager/client-side-programming/events/onresponseend
previous_url: ajax/client-side-programming/events/onresponseend
tags: telerik, aspnet, ajax, ajaxmanager, onresponseend, event, clientside, programming, api
published: True
position: 2
---

# OnResponseEnd

The `OnResponseEnd` client-side event handler is called when a request is received from the server. The event can not be cancelled.

Two parameters are passed to the event handler with the following methods:

* `sender`&mdash;The instance of the client-side `RadAjaxManager` /`RadAjaxPanel` object.

* `eventArgs`&mdash;Provides the following methods:

		* `get_eventTarget()`&mdash;Gets the `UniqueID` of the element that had raised the request.

		* `get_eventArgument()`&mdash;Gets the string passed in the initial AJAX request.

		* `get_eventTargetElement()`&mdash;Gets the instance of the client-side object that raised the AJAX request.

The following example displays the control that initiated the request.

````ASP.NET
<script type="text/javascript">
	function responseEnd(sender, eventArgs) {
	    alert('Response end initiated by: ' + eventArgs.get_eventTarget());
	}
</script>
<telerik:RadScriptManager ID="RadScriptManager1" runat="server">
</telerik:RadScriptManager>
<telerik:RadAjaxManager ID="RadAjaxManager1" runat="server">
	<ClientEvents OnResponseEnd="responseEnd" />
</telerik:RadAjaxManager>
````



## See Also

* [AjaxManager Overview]({%slug ajaxmanager/overview%})
* [Demo: AjaxManager Client-Side API](https://demos.telerik.com/aspnet-ajax/ajax/examples/manager/clientsideapi/defaultcs.aspx)