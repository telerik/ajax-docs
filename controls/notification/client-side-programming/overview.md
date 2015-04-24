---
title: Overview
page_title: Client-side Programming Overview | RadNotification for ASP.NET AJAX Documentation
description: Overview
slug: notification/client-side-programming/overview
tags: overview
published: True
position: 0
---

# Client-side Programming Overview



The **RadNotification** object provides a client-side API that lets you interact with the control in client-side code. In addition to a full set of [client-side events]({%slug notification/client-side-programming/events/overview%}), the client-side object model lets you manipulate notifications while avoiding unnecessary post-backs.

## Getting the RadNotification client-side object

The **RadNotification** creates a client-side object with the ClientID of the control. You can obtain the reference to this object by using the following JavaScript code:

````JavaScript
	    var radNotification1 = $find("<%= RadNotification1.ClientID %>");
````



## Cancelling an action

Some client-side events occur immediately before **RadNotification**performs some action. You can use these events to cancel the impending action by using the cancel property of the eventArgs passed to the handler:

````JavaScript
	        function OnClientShowing(sender, eventArgs)
	        {
	            eventArgs.set_cancel(true);
	        }
````



# See Also

 * [Client-Side Events]({%slug notification/client-side-programming/events/overview%})

 * [RadNotification Client-Side Object]({%slug notification/client-side-programming/radnotification-object%})
