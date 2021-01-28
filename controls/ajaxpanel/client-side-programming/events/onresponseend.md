---
title: OnResponseEnd
page_title: OnResponseEnd
description: Check our Web Forms article about OnResponseEnd.
slug: ajaxpanel/client-side-programming/events/onresponseend
tags: onresponseend
published: True
position: 2
---

# OnResponseEnd



## 

The **OnResponseEnd** client-side event handler is called when a request is received from the server. The event can not be cancelled.

Two parameters are passed to the event handler with the following methods:

* **sender** - The instance of the client-side **RadAjaxManager** /**RadAjaxPanel** object.

* **eventArgs** , which has the following methods:

* **get_eventTarget()** - Gets the **UniqueID** of the element that had raised the request.

* **get_eventArgument()** - Gets the string passed in the initial AJAX request.

* **get_eventTargetElement()** - Gets the instance of the client-side object that raised the AJAX request.

The following example displays the control that initiated the request.

````ASP.NET
<script type="text/javascript">
	function responseEnd(sender, eventArgs) {
	    alert('Response complete');
	}
</script>
<telerik:RadAjaxPanel ID="RadAjaxPanel1" runat="server" ClientEvents-OnResponseEnd="responseEnd" >
	<telerik:RadButton RenderMode="Lightweight" runat="server" Text="Click me!"></telerik:RadButton>
</telerik:RadAjaxPanel>
````



## See Also

 * [Overview]({%slug ajaxpanel/client-side-programming/overview%})
