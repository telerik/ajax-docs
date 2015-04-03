---
title: Events Triggered on Command Execution
page_title: Events Triggered on Command Execution | UI for ASP.NET AJAX Documentation
description: Events Triggered on Command Execution
slug: dock/commands/events-triggered-on-command-execution
tags: events,triggered,on,command,execution
published: True
position: 1
---

# Events Triggered on Command Execution



The following sequence of events occurs when the user clicks on the icon for a command in the __RadDock__ title bar:

1. The client-side __OnClientCommand__ event occurs.

1. If the command is one of the built-in command types, it performs its default action.

1. The server-side __Command__ event occurs.

You can use the client-side __OnClientCommand__ and server-side __Command__ events to augment the default behavior of built-in commands, or implement any custom commands you add to the __RadDock__ title bar.

## OnClientCommand

There are two ways to assign an __OnClientCommand__ event handler:

* Set the __OnClientCommand__ property of the __RadDock__ object. If you use this approach, a single __OnClientCommand__ event handler executes for all the commands on the __RadDock__ title bar. If the title bar contains multiple commands, the event handler must use the event arguments to determine which command generated the event.

* Set the __OnClientCommand__ property on individual command objects. To use this approach, you must add the commands to the __Commands__ property collection. (That is, you can't simply use the __DefaultCommands__ property to specify which commands appear on the title bar.) Using the __OnClientCommand__ property of the individual command objects has the advantage that you can assign a different handler for each command.

You can use the __OnClientCommand__ event to do any of the following:

* Perform any preprocessing tasks before the built-in command action occurs.

* Cancel the command, so that its server-side __Command__ event does not occur.

* Implement a response to the command in client-side code.

## Command (server-side)

There are several ways to control whether the server-side __Command__ event occurs when the user clicks on a command in the title bar:

* If you have added the commands to the title bar using the __DefaultCommands__ property, the server-side __Command__ event does not occur.

* When the __CommandsAutoPostBack__ property is set to __True__, the server-side __Command__ event handler is called for all the commands in the __Commands__ property collection, regardless of the value of their __AutoPostBack__ property. When __CommandsAutoPostBack__ is set to __False__, the server-side __Command__ event handler is only called for commands that have their __AutoPostBack__ property set to __True__.

* When an __OnClientCommand__ event handler has cancelled the command, the server-side __Command__ event does not occur.

You can use the __Command__ event to do the following:

* Perform any post-processing tasks after the built-in command action occurs.

* Implement a response to custom commands that can't be handled in a client-side __OnClientCommand__ event handler.

# See Also

 * [Overview]({%slug dock/commands/overview%})

 * [Command]({%slug dock/server-side-programming/events/command%})

 * [OnClientCommand]({%slug dock/client-side-programming/events/onclientcommand%})
