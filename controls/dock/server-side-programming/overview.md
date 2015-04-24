---
title: Overview
page_title: Server-Side Programming Overview | RadDock for ASP.NET AJAX Documentation
description: Overview
slug: dock/server-side-programming/overview
tags: overview
published: True
position: 0
---

# Server-Side Programming Overview



The **RadDockLayout** and **RadDock** controls both raise server-side events.

## RadDockLayout

**RadDockLayout** exposes two server-side events, that you can use to make the layout of docked controls persist by saving it to and loading it from some storage medium such as a cookie or database. These events are also necessary to allow the state of [dynamically-created RadDock controls]({%slug dock/how-to/creating-raddock-dynamically%}) persist after a postback. The server-side events are

* [SaveDockLayout]({%slug dock/server-side-programming/events/savedocklayout%}), which occurs when the application should save the state of all **RadDock** controls on the page so that it can be restored at a later time.

* [LoadDockLayout]({%slug dock/server-side-programming/events/loaddocklayout%}), which occurs when the application should restore the layout of **RadDock** controls that was saved in a previously-called **SaveDockLayout** event handler.

>note For more information about how these events fit into the lifecycle of the **RadDock** controls, see[RadDock Lifecycle]({%slug dock/structure/dock/lifecycle%}).
>


## RadDock

The **RadDock** control exposes two server-side events that let your application respond when the user clicks on command icons in the title bar or changes the position of a the control. By default, the **RadDock** control does not cause a postback immediately after these events occur. you must set additional properties to specify when these events are raised:

* [Command]({%slug dock/server-side-programming/events/command%}) occurs when the user clicks on any of the [command]({%slug dock/commands/overview%}) icons in the title bar. To cause the **RadDock** control to raise this event for *all* commands on the title bar, set the **CommandsAutoPostBack** property to **True**. If you want this event to be raised only for certain commands but not others, use the **AutoPostBack** property of the individual command objects.

* [DockPositionChanged]({%slug dock/server-side-programming/events/dockpositionchanged%}) occurs when the user changes the position of a **RadDock** control by a [drag-and-drop operation]({%slug dock/getting-started/drag-and-drop%}). By default, the **RadDock** control does not initiate a postback when this event occurs, but waits until another control on the page causes a postback, and calls the event handler at that time. If you want the **DockPositionChanged** event handler to respond immediately after the user changes the position of the **RadDock** control, set the **AutoPostBack** property of the **RadDock** control to **True**.

# See Also

 * [Overview]({%slug dock/client-side-programming/events/overview%})
