---
title: OnClientCommandExecuted
page_title: OnClientCommandExecuted | UI for ASP.NET AJAX Documentation
description: OnClientCommandExecuted
slug: imageeditor/client-side-programming/events/onclientcommandexecuted
tags: onclientcommandexecuted
published: True
position: 3
---

# OnClientCommandExecuted



## 

The __OnClientCommandExecuted__ event is raised after the user fires a command of the control. The event is subsequent to the __OnClientCommandExecuting__ event. It cannot be cancelled.

The event handler receives the following parameters:

1. The __RadImageEditor__ client instance that fired the event.

1. Event arguments object. You can call its get_commandName() method to get the command name.

````ASPNET
	    <telerik:RadImageEditor runat="server" ID="RadImageEditor1" OnClientCommandExecuted="OnClientCommandExecuted"></telerik:RadImageEditor>
	    <script type="text/javascript">
	        function OnClientCommandExecuted(sender, eventArgs)
	        {
	            alert("OnClientCommandExecuted event fired. Command name was: " + eventArgs.get_commandName());
	        }
	    </script>
````



# See Also

 * [Client-Side Events Basics]({%slug imageeditor/client-side-programming/events/client-side-events-basics%})
