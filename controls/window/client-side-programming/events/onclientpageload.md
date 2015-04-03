---
title: OnClientPageLoad
page_title: OnClientPageLoad | UI for ASP.NET AJAX Documentation
description: OnClientPageLoad
slug: window/client-side-programming/events/onclientpageload
tags: onclientpageload
published: True
position: 10
---

# OnClientPageLoad



## 

The __OnClientPageLoad__ event of the __RadWindow__ fires when the pageset through its __NavigateUrl__ property finishes loading. Since this page is loaded inside an iframe, this event is fired bythe iframe's `onload` event.

You can use this event to know when the page is loaded inside the popup, including pages changed dynamically	via the `setUrl()` method the [client-side API]({%slug window/client-side-programming/radwindow-object%}) of the control exposes.	At this point you can call the `autoSize()` method of the control, for example, or[call a function in the loaded page]({%slug window/application-scenarios/calling-functions-in-windows%}) to modify it or provide data to it.

The event handler receives the following arguments:

1. The [RadWindow]({%slug window/client-side-programming/radwindow-object%}) object that fired the event.

1. An event arguments object that does not expose any methods and properties.

When a content page is loaded in the __RadWindow__, its URL is set in the status bar of the control in this event,so if you need to modify or remove it, this is the point at which you can use the set_status() method. An alternative is to set the *VisibleStatusbar*property to *false* to avoid having the statusbar at all.

# See Also

 * [Overview]({%slug window/client-side-programming/events/overview%})

 * [RadWindow Object]({%slug window/client-side-programming/radwindow-object%})

 * [Calling Functions in Windows]({%slug window/application-scenarios/calling-functions-in-windows%})
