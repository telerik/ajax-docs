---
title: OnClientDragStart
page_title: OnClientDragStart | RadWindow for ASP.NET AJAX Documentation
description: OnClientDragStart
slug: window/client-side-programming/events/onclientdragstart
tags: onclientdragstart
published: True
position: 9
---

# OnClientDragStart

The **OnClientDragStart** event of the **RadWindow** fires when the user starts dragging the popup. This action is also initiated by a click or a tap on the title bar.

The event handler receives the following arguments:

1. The [RadWindow]({%slug window/client-side-programming/radwindow-object%}) object that fired the event.

1. An event arguments object that does not expose any methods and properties.

You can use this event to get the starting position of the dialog by calling the `getWindowBounds()` method from the [RadWindow client-side API]({%slug window/client-side-programming/radwindow-object%}).

## See Also

 * [Overview]({%slug window/client-side-programming/events/overview%})

 * [RadWindow Object]({%slug window/client-side-programming/radwindow-object%})
