---
title: OnClientCommandExecuting
page_title: OnClientCommandExecuting | RadEditor for ASP.NET AJAX Documentation
description: OnClientCommandExecuting
slug: editor/client-side-programming/events/onclientcommandexecuting
tags: onclientcommandexecuting
published: True
position: 3
---

# OnClientCommandExecuting

This event is fired just before a command is executed.

|  **function OnClientCommandExecuting(editor, args)**  |  |  |
| ------ | ------ | ------ |
| **editor** | **object** |Returns a reference to RadEditor client object|
| **args** | **object** |Returns the needed information about the event|


|  **args parameter methods**  |  |
| ------ | ------ |
| **args.get_commandName()** |Returns the command name|
| **args.get_value()** |Returns the value of the executed tool|
| **args.set_value()** |Sets the new content to be pasted in RadEditor|
| **args.get_cancel()** |Returns Boolean value that indicates whether the event has been canceled or not.|
| **args.set_cancel(true)** |Cancels the command execution|

The following example demonstrates how to alert the selected dropdown item name and value:

````ASP.NET
<script type="text/javascript">
	function OnClientCommandExecuting(editor, args)
	{    
		//The command name    
		var commandName = args.get_commandName();               
		//The tool that initiated the command    
		var tool = args.get_tool();                   
		//The selected value [if command is coming from a dropdown]    
		var value = args.get_value();           

		//Perform some action     
		var message = "OnClientCommandExecuting.\nSelected value: " + value;                                           
		var answer = confirm(message + "\nExecute command " + commandName +"?");
		//Cancel the command execution by calling args.set_cancel(true);    
		args.set_cancel(!answer);
	}
</script>
<telerik:RadEditor runat="server" ID="RadEditor1" OnClientCommandExecuting="OnClientCommandExecuting">
</telerik:RadEditor>
````


