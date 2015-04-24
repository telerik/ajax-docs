---
title: OnClientCommandExecuted
page_title: OnClientCommandExecuted | RadEditor for ASP.NET AJAX Documentation
description: OnClientCommandExecuted
slug: editor/client-side-programming/events/onclientcommandexecuted
tags: onclientcommandexecuted
published: True
position: 4
---

# OnClientCommandExecuted



## 



This event is fired after a command is executed.




>caption  

|  **function OnClientCommandExecuted(editor, args)**  |  |  |
| ------ | ------ | ------ |
| **editor** | **object** |Returns a reference to RadEditor client object|
| **args** | **object** |Returns the needed information about the event|




>caption  

|  **args parameter methods**  |  |
| ------ | ------ |
| **args.get_commandName()** |Returns the command name|
| **args.get_value()** |Returns the value of the executed tool|
| **args.set_value()** |Sets the new content to be pasted in RadEditor|
| **args.get_cancel(true)** |Cancels the command execution|

````ASPNET
	     
	
	<script type="text/javascript">
	    function OnClientCommandExecuted(editor, args)
	    {
	        alert("Executed command was " + args.get_commandName());
	    }
	</script>
	<telerik:radeditor runat="server" ID="RadEditor1" OnClientCommandExecuted="OnClientCommandExecuted">
	</telerik:radeditor>
				
````




