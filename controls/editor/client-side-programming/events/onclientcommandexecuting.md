---
title: OnClientCommandExecuting
page_title: OnClientCommandExecuting | UI for ASP.NET AJAX Documentation
description: OnClientCommandExecuting
slug: editor/client-side-programming/events/onclientcommandexecuting
tags: onclientcommandexecuting
published: True
position: 3
---

# OnClientCommandExecuting



## 

This event is fired just before a command is executed.


>caption  

|  __function OnClientCommandExecuting(editor, args)__  |  |  |
| ------ | ------ | ------ |
| __editor__ | __object__ |Returns a reference to RadEditor client object|
| __args__ | __object__ |Returns the needed information about the event|


>caption  

|  __args parameter methods__  |  |
| ------ | ------ |
| __args.get_commandName()__ |Returns the command name|
| __args.get_value()__ |Returns the value of the executed tool|
| __args.set_value()__ |Sets the new content to be pasted in RadEditor|
| __args.get_cancel()__ |Returns Boolean value that indicates whether the event has been canceled or not.|
| __args.set_cancel(true)__ |Cancels the command execution|

The following example demonstrates how to alert the selected dropdown item name and value:

````ASPNET
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


