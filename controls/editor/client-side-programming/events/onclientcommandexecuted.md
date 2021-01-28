---
title: OnClientCommandExecuted
page_title: OnClientCommandExecuted - RadEditor
description: Check our Web Forms article about OnClientCommandExecuted.
slug: editor/client-side-programming/events/onclientcommandexecuted
tags: onclientcommandexecuted
published: True
position: 4
---

# OnClientCommandExecuted

This event is fired after a command is executed.

|  **function OnClientCommandExecuted(editor, args)**  |  |  |
| ------ | ------ | ------ |
| **editor** | **object** |Returns a reference to RadEditor client object|
| **args** | **object** |Returns the needed information about the event|


|  **args parameter methods**  |  |
| ------ | ------ |
| **args.get_commandName()** |Returns the command name|
| **args.get_value()** |Returns the value of the executed tool|
| **args.set_value()** |Sets the new content to be pasted in RadEditor|
| **args.get_cancel(true)** |Cancels the command execution|

````ASP.NET	 

<script type="text/javascript">
	function OnClientCommandExecuted(editor, args)
	{
		alert("Executed command was " + args.get_commandName());
	}
</script>
<telerik:radeditor runat="server" ID="RadEditor1" OnClientCommandExecuted="OnClientCommandExecuted">
</telerik:radeditor>			
````




