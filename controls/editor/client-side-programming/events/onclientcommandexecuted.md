---
title: OnClientCommandExecuted
page_title: OnClientCommandExecuted | UI for ASP.NET AJAX Documentation
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

|  __function OnClientCommandExecuted(editor, args)__  |  |  |
| ------ | ------ | ------ |
| __editor__ | __object__ |Returns a reference to RadEditor client object|
| __args__ | __object__ |Returns the needed information about the event|




>caption  

|  __args parameter methods__  |  |
| ------ | ------ |
| __args.get_commandName()__ |Returns the command name|
| __args.get_value()__ |Returns the value of the executed tool|
| __args.set_value()__ |Sets the new content to be pasted in RadEditor|
| __args.get_cancel(true)__ |Cancels the command execution|

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




