---
title: OnResponseEnd
page_title: OnResponseEnd | UI for ASP.NET AJAX Documentation
description: OnResponseEnd
slug: ajax/client-side-programming/events/onresponseend
tags: onresponseend
published: True
position: 2
---

# OnResponseEnd



## 

The __OnResponseEnd__client-side event handler is called when a request is received from the server. The event can not be canceled.

Two parameters are passed to the event handler with the following methods:

* __sender__ - The instance of the client-side __RadAjaxManager__/__RadAjaxPanel__ object.

* __eventArgs__, which has the following methods:

* __get_eventTarget()__ - Gets the __UniqueID__ of the element that had raised the request.

* __get_eventArgument()__ - Gets the string passed in the initial AJAX request.

* __get_eventTargetElement()__ - Gets the instance of the client-side object that raised the AJAX request.

The following example displays the control that initiated the request.

````ASPNET
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



# See Also

 * [Overview]({%slug ajax/client-side-programming/overview%})
