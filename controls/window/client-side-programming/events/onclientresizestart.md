---
title: OnClientResizeStart
page_title: OnClientResizeStart | RadWindow for ASP.NET AJAX Documentation
description: OnClientResizeStart
slug: window/client-side-programming/events/onclientresizestart
tags: onclientresizestart
published: True
position: 13
---

# OnClientResizeStart



## 

The **OnClientResizeStart** event of the **RadWindow** fires when the user is about to start resizing the popup.You can cancel the event to prevent the user from resizing the control by calling the `set_canel(true)` method theevent arguments object exposes. You can also entirely disable resizing through the	[Behaviors]({%slug window/getting-started/user-interaction-with-the-window%}) property of the **RadWindow**.

The event handler receives the following arguments:

1. The [RadWindow]({%slug window/client-side-programming/radwindow-object%}) object that fired the event.

1. An event arguments object that exposes the following methods:


| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
|get_cancel||boolean|Gets a value indicating whether the event is going to be cancelled.|
|set_cancel|boolean||Sets a value indicating whether the event is going to be cancelled.Pass *true* to cancel the event.The method takes the following arguments:

1. boolean—a value that indicates whether the event is to be cancelled.|

# See Also

 * [Overview]({%slug window/client-side-programming/events/overview%})

 * [RadWindow Object]({%slug window/client-side-programming/radwindow-object%})
