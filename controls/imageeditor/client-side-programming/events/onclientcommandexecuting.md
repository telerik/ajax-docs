---
title: OnClientCommandExecuting
page_title: OnClientCommandExecuting - RadImageEditor
description: Check our Web Forms article about OnClientCommandExecuting.
slug: imageeditor/client-side-programming/events/onclientcommandexecuting
tags: onclientcommandexecuting
published: True
position: 2
---

# OnClientCommandExecuting



 

The **OnClientCommandExecuting** event is raised when the user fires a command of the control. The event can be canceled.

The event handler receives the following parameters:

1. The **RadImageEditor** client instance that fired the event.

1. Event arguments object. You can call its get_commandName() method to get the command name. You can cancel the event by calling its set_cancel(true) method

````ASP.NET
<telerik:RadImageEditor RenderMode="Lightweight" runat="server" ID="RadImageEditor1" OnClientCommandExecuting="OnClientCommandExecuting"></telerik:RadImageEditor>
<script type="text/javascript">
    function OnClientCommandExecuting(sender, eventArgs)
    {
        alert("OnClientCommandExecuting event fired. Command name was: " + eventArgs.get_commandName());
        eventArgs.set_cancel(true); //cancels the event
    }
</script>
````



# See Also

 * [Client-Side Events Basics]({%slug imageeditor/client-side-programming/events/client-side-events-basics%})
