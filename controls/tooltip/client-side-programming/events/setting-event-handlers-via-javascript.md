---
title: Setting Event Handlers via JavaScript
page_title: Setting Event Handlers via JavaScript - RadTooltip
description: Check our Web Forms article about Setting Event Handlers via JavaScript.
slug: tooltip/client-side-programming/events/setting-event-handlers-via-javascript
tags: setting,event,handlers,via,javascript
published: True
position: 1
---

# Setting Event Handlers via JavaScript


You can use the client-side API of the RadToolTip and RadToolTipManager controls to modify the event handlers they call.
 

When using the client-side API, pass a reference to the event handler rather than its name. One advantage of using the client-side API is that you can attach multiple event handlers to one event using the standard MS AJAX convention:

````JavaScript
function addEvents()
{
    var radToolTip1 = $find("<%= RadToolTip1.ClientID %>");
    radToolTip1.add_show(clientShow1);
    radToolTip1.add_show(clientShow2);
}
````



Another advantage of the client-side API is that you can detach an event handler dynamically:

````JavaScript
function removeEvents()
{
    var radToolTip1 = $find("<%= RadToolTip1.ClientID %>");
    radToolTip1.remove_show(clientShow);
}
````




>caption A list with the available methods

| Name | Description |
| ------ | ------ |
| **add_beforeShow** |Add a handler to the BeforeShow event.|
| **add_show** |Add a handler to the Show event.|
| **add_beforeHide** |Add a handler to the BeforeHide event.|
| **add_hide** |Add a handler to the Hide event.|
| **remove_beforeShow** |Remove a handler from the BeforeShow event.|
| **remove_show** |Remove a handler from the Show event.|
| **remove_beforeHide** |Remove a handler from the BeforeHide event.|
| **remove_hide** |Remove a handler from the Hide event.|
