---
title: OnClientActivate
page_title: OnClientActivate - RadWindow
description: Check our Web Forms article about OnClientActivate.
slug: window/client-side-programming/events/onclientactivate
tags: onclientactivate
published: True
position: 2
---

# OnClientActivate

The **OnClientActivate** event of the **RadWindow** is fired when the control becomes the active window.This happens when it opens, when the user clicks or taps on it, and when its [client-side API]({%slug window/client-side-programming/radwindow-object%}) is used to activate it via the `setActive()` method. You can get the currently active **RadWindow** through the [RadWindowManager's client-side API]({%slug window/client-side-programming/radwindowmanager-object%}) and its `getActiveWindow()` method.

The event handler receives the following arguments:

1. The [RadWindow]({%slug window/client-side-programming/radwindow-object%}) object that fired the event.

1. An event arguments object that does not expose any methods and properties.

## See Also

 * [Overview]({%slug window/client-side-programming/events/overview%})

 * [RadWindow Object]({%slug window/client-side-programming/radwindow-object%})

 * [RadWindowManager Object]({%slug window/client-side-programming/radwindowmanager-object%})
