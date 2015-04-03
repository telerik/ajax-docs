---
title: OnRequestStart
page_title: OnRequestStart | UI for ASP.NET AJAX Documentation
description: OnRequestStart
slug: ajax/client-side-programming/events/onrequeststart
tags: onrequeststart
published: True
position: 1
---

# OnRequestStart



## 

The __OnRequestStart__client-side event handler is called when a request to the server is started. The event can be initially triggered by an initiating control configured in __RadAjaxManager__settings, a control within a __RadAjaxPanel__or by a client-side __ajaxRequest()__call. The event can be canceled.

Two parameters are passed to the event handler with the following methods:

* __sender__ - The instance of the client-side __RadAjaxManager__/__RadAjaxPanel__ object.

* __eventArgs__, which has the following methods:

* __set_cancel()__ - Lets you permit or block the AJAX request from continuing. Calling __set_cancel(true)__ prevents the request from continuing.

* __get_eventTarget()__ - Gets the __UniqueID__ of the element that had raised the request.

* __get_eventArgument()__ - Gets the string passed in the initial AJAX request.

* __get_eventTargetElement()__ - Gets the instance of the client-side object that raised the AJAX request. You can iterate each of the settings and retrieve the initiating control id and another array of objects that represent updated controls.

* __get_ajaxSettings()__ - Returns an array of objects that represents __RadAjaxManager__'s current configuration or __RadAjaxPanel__'s updated controls

* __get_enableAjax()__, __set_enableAjax()__ - Gets or sets if an AJAX request is performed. __set_enableAjax(false)__ causes the request to be performed via standard postback.

The example below displays the control that initiated the request.

````ASPNET
	    <script type="text/javascript">
	        function requestStart(sender, eventArgs) {
	            alert('Request start initiated by: ' + eventArgs.get_eventTarget());
	        }
	    </script>
	    <telerik:RadScriptManager ID="RadScriptManager1" runat="server">
	    </telerik:RadScriptManager>
	    <telerik:RadAjaxManager ID="RadAjaxManager1" runat="server">
	        <ClientEvents OnRequestStart="requestStart" />
	    </telerik:RadAjaxManager>
````



# See Also

 * [Overview]({%slug ajax/client-side-programming/overview%})
