---
title: Set Event Handlers via JavaScript
page_title: Set Event Handlers via JavaScript | UI for ASP.NET AJAX Documentation
description: Set Event Handlers via JavaScript
slug: notification/client-side-programming/events/set-event-handlers-via-javascript
tags: set,event,handlers,via,javascript
published: True
position: 1
---

# Set Event Handlers via JavaScript



## 

Aside from declaring an event handler in the server-side properties of the __RadNotification__ you can also assign them in client-side code. When using the client-side API, pass a reference to the event handler rather than its name. One advantage of using the client-side API is that you can attach multiple event handlers to one event using the standard MS AJAX convention:

````ASPNET
	    function addEvents()
	    {
	        var radNotification1 = $find("<%= RadNotification1.ClientID %>");
	        radNotification1.add_shown(clientShown1);
	        radNotification1.add_shown(clientShown2);
	    }
````



Another advantage of the client-side API is that you can detach an event handler dynamically:

````ASPNET
	    function removeEvents()
	    {
	        var radNotification1 = $find("<%= RadNotification1.ClientID %>");
	        radNotification1.remove_shown(clientShown1);
	    }
````




>caption A list with the available methods

| Name | Description |
| ------ | ------ |
| __add_hidden__ |Add a handler to the OnClientHidden event.|
| __add_hiding__ |Add a handler to the OnClientHiding event.|
| __add_showing__ |Add a handler to the OnClientShowing event.|
| __add_shown__ |Add a handler to the OnClientShown event.|
| __add_updateError__ |dd a handler to the OnClientUpdateError event.|
| __add_updated__ |Add a handler to the OnClientUpdated event.|
| __add_updating__ |Add a handler to the OnClientUpdating event.|
| __remove_hidden__ |Remove a handler from the OnClientHidden event.|
| __remove_hiding__ |Remove a handler from the OnClientHiding event.|
| __remove_showing__ |Remove a handler from the OnClientShowing event.|
| __remove_shown__ |Remove a handler from the OnClientShown event.|
| __remove_updateError__ |Remove a handler from the OnClientUpdateError event.|
| __remove_updated__ |Remove a handler from the OnClientUpdated event.|
| __remove_updating__ |Remove a handler from the OnClientUpdating event.|

# See Also

 * [Setting Event Handlers via JavaScript]({%slug notification/client-side-programming/events/set-event-handlers-via-javascript%})
