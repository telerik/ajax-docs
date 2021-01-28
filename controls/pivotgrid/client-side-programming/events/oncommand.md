---
title: OnCommand
page_title: OnCommand - RadPivotGrid
description: Check our Web Forms article about OnCommand.
slug: pivotgrid/client-side-programming/events/oncommand
tags: oncommand
published: True
position: 0
---

# OnCommand



This event will be raised when client command is executed in RadPivotGrid. The command can be canceled.

## 


>caption  

|  **Fired by**  | RadPivotGrid |
| ------ | ------ |
| **Arguments** | **get_commandArgument()** - the command argument(s) value(s). **get_commandName()** -the name of the command which is about to be processed. **get_cancel()** - returns a boolean indicating whether the event is cancelled. **set_cancel(bool)** - indicates whether the event should be cancelled.|
| **Can be canceled** |Yes|

Example:

````JavaScript
<script type="text/javascript">
	function oncommand(sender, eventArgs) {
		alert("RadPivotGrid fired a command with name: " + eventArgs.get_commandName() + " and argument: " + eventArgs.get_commandArgument());
	}
</script>
````


