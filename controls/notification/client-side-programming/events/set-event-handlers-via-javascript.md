---
title: Set Event Handlers via JavaScript
page_title: Set Event Handlers via JavaScript | RadNotification for ASP.NET AJAX Documentation
description: Set Event Handlers via JavaScript
slug: notification/client-side-programming/events/set-event-handlers-via-javascript
tags: set,event,handlers,via,javascript
published: True
position: 1
---

# Set Event Handlers via JavaScript




Aside from declaring an event handler in the server-side properties of the **RadNotification** you can also assign them in client-side code. When using the client-side API, pass a reference to the event handler rather than its name. One advantage of using the client-side API is that you can attach multiple event handlers to one event using the standard MS AJAX convention:

````JavaScript
function addEvents()
{
    var radNotification1 = $find("<%= RadNotification1.ClientID %>");
    radNotification1.add_shown(clientShown1);
    radNotification1.add_shown(clientShown2);
}
````



Another advantage of the client-side API is that you can detach an event handler dynamically:

````JavaScript
function removeEvents()
{
    var radNotification1 = $find("<%= RadNotification1.ClientID %>");
    radNotification1.remove_shown(clientShown1);
}
````




>caption A list with the available methods

| Name | Description |
| ------ | ------ |
| **add_hidden** |Add a handler to the OnClientHidden event.|
| **add_hiding** |Add a handler to the OnClientHiding event.|
| **add_showing** |Add a handler to the OnClientShowing event.|
| **add_shown** |Add a handler to the OnClientShown event.|
| **add_updateError** |dd a handler to the OnClientUpdateError event.|
| **add_updated** |Add a handler to the OnClientUpdated event.|
| **add_updating** |Add a handler to the OnClientUpdating event.|
| **remove_hidden** |Remove a handler from the OnClientHidden event.|
| **remove_hiding** |Remove a handler from the OnClientHiding event.|
| **remove_showing** |Remove a handler from the OnClientShowing event.|
| **remove_shown** |Remove a handler from the OnClientShown event.|
| **remove_updateError** |Remove a handler from the OnClientUpdateError event.|
| **remove_updated** |Remove a handler from the OnClientUpdated event.|
| **remove_updating** |Remove a handler from the OnClientUpdating event.|

# See Also

 * [Setting Event Handlers via JavaScript]({%slug notification/client-side-programming/events/set-event-handlers-via-javascript%})
