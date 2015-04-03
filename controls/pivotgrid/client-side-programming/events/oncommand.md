---
title: OnCommand
page_title: OnCommand | UI for ASP.NET AJAX Documentation
description: OnCommand
slug: pivotgrid/client-side-programming/events/oncommand
tags: oncommand
published: True
position: 0
---

# OnCommand



This event will be raised when client command is executed in RadPivotGrid. The command can be canceled.

## 


>caption  

|  __Fired by__  | RadPivotGrid |
| ------ | ------ |
| __Arguments__ | __get_commandArgument()__ - the command argument(s) value(s). __get_commandName()__ -the name of the command which is about to be processed. __get_cancel()__ - returns a boolean indicating whether the event is cancelled. __set_cancel(bool)__ - indicates whether the event should be cancelled.|
| __Can be canceled__ |Yes|

Example:

````JavaScript
				<script type="text/javascript">
					function oncommand(sender, eventArgs) {
						alert("RadPivotGrid fired a command with name: " + eventArgs.get_commandName() + " and argument: " + eventArgs.get_commandArgument());
					}
				</script>
````


