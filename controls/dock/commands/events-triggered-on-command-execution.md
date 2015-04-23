---
title: Events Triggered on Command Execution
page_title: Events Triggered on Command Execution | RadDock for ASP.NET AJAX Documentation
description: Events Triggered on Command Execution
slug: dock/commands/events-triggered-on-command-execution
tags: events,triggered,on,command,execution
published: True
position: 1
---

# Events Triggered on Command Execution



The following sequence of events occurs when the user clicks on the icon for a command in the **RadDock** title bar:

1. The client-side **OnClientCommand** event occurs.

1. If the command is one of the built-in command types, it performs its default action.

1. The server-side **Command** event occurs.

You can use the client-side **OnClientCommand** and server-side **Command** events to augment the default behavior of built-in commands, or implement any custom commands you add to the **RadDock** title bar.

## OnClientCommand

There are two ways to assign an **OnClientCommand** event handler:

* Set the **OnClientCommand** property of the **RadDock** object. If you use this approach, a single **OnClientCommand** event handler executes for all the commands on the **RadDock** title bar. If the title bar contains multiple commands, the event handler must use the event arguments to determine which command generated the event.

* Set the **OnClientCommand** property on individual command objects. To use this approach, you must add the commands to the **Commands** property collection. (That is, you can't simply use the **DefaultCommands** property to specify which commands appear on the title bar.) Using the **OnClientCommand** property of the individual command objects has the advantage that you can assign a different handler for each command.

You can use the **OnClientCommand** event to do any of the following:

* Perform any preprocessing tasks before the built-in command action occurs.

* Cancel the command, so that its server-side **Command** event does not occur.

* Implement a response to the command in client-side code.

## Command (Server-side)

There are several ways to control whether the server-side **Command** event occurs when the user clicks on a command in the title bar:

* If you have added the commands to the title bar using the **DefaultCommands** property, the server-side **Command** event does not occur.

* When the **CommandsAutoPostBack** property is set to **True**, the server-side **Command** event handler is called for all the commands in the **Commands** property collection, regardless of the value of their **AutoPostBack** property. When **CommandsAutoPostBack** is set to **False**, the server-side **Command** event handler is only called for commands that have their **AutoPostBack** property set to **True**.

* When an **OnClientCommand** event handler has cancelled the command, the server-side **Command** event does not occur.

You can use the **Command** event to do the following:

* Perform any post-processing tasks after the built-in command action occurs.

* Implement a response to custom commands that can't be handled in a client-side **OnClientCommand** event handler.

# See Also

 * [Overview]({%slug dock/commands/overview%})

 * [Command]({%slug dock/server-side-programming/events/command%})

 * [OnClientCommand]({%slug dock/client-side-programming/events/onclientcommand%})
