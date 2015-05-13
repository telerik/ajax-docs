---
title: OnClientCommand
page_title: OnClientCommand | RadWindow for ASP.NET AJAX Documentation
description: OnClientCommand
slug: window/client-side-programming/events/onclientcommand
tags: onclientcommand
published: True
position: 7
---

# OnClientCommand


The **OnClientCommand** event fires when a command button from the **RadWindow**'s title bar is clicked or tapped by the user.	The developer can also initiate it by using the [client-side API]({%slug window/client-side-programming/radwindow-object%}) of the control(e.g., the `minimize()`, `maximize()`, `restore()`, `togglePin()` and `reload()` methods). You can cancel this event to prevent the command from executing (**Example 1**).

The event handler receives the following arguments:

1. The [RadWindow]({%slug window/client-side-programming/radwindow-object%}) object that fired the event.

1. An event arguments object that exposes the following methods:


| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
|get_cancel||boolean|Gets a value indicating whether the event is going to be cancelled.|
|get_commandName||string|This is the name of the command that was initiated.|
|set_cancel|boolean||Sets a value indicating whether the event is going to be cancelled. Pass *true* to cancel the event. The method takes the following arguments: *boolean*—a value that indicates whether the event is to be cancelled.|

>caption Example 1: Getting the command and cancelling its execution according to a condition.

````ASP.NET
<telerik:RadWindow runat="server" ID="RadWindow1" OnClientCommand="OnClientCommandHandler" VisibleonPageLoad="true"></telerik:RadWindow>
<script type="text/javascript">
	function OnClientCommandHandler(sender, args) {
		var command = args.get_commandName(); //get the initiated command
		if (command == "Reload") {
			args.set_cancel(true); //prevent reloading
		}
	}
</script>
````



## See Also

 * [Overview]({%slug window/client-side-programming/events/overview%})

 * [RadWindow Object]({%slug window/client-side-programming/radwindow-object%})
