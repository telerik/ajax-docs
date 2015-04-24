---
title: OnClientCommand
page_title: OnClientCommand | RadDock for ASP.NET AJAX Documentation
description: OnClientCommand
slug: dock/client-side-programming/events/onclientcommand
tags: onclientcommand
published: True
position: 2
---

# OnClientCommand




The **OnClientCommand** client-side event occurs when the user clicks on a command in the **RadDock** title bar.

The event handler receives two parameters:

1. The instance of the **RadDock** control firing the event.

1. An eventArgs parameter containing the following properties and methods:
	* **command** (property) is the **DockCommand** client-side object for the command that was clicked.
	* **set_cancel** lets you prevent the command from raising any additional events.
	* **get_cancel** returns a boolean value indicating whether the command was canceled.

>caution Calling the **set_cancel** method of the eventArgs parameter does not prevent the default response on built-in command types. It only prevents any subsequent **OnClientCommand** events and the server-side **Command** event.



>note You can assign an **OnClientCommand** event handler to the **OnClientCommand** property of the **RadDock** control, or to an individual **Command** object in the **Commands** property collection. If you assign two **OnClientCommand** event handlers, one to the **RadDock** control and one to the **Command** object, the event handler assigned to the **Command** object executes first.



The following example uses the **OnClientCommand** event to implement an "Undock" custom command:

````ASP.NET
<script type="text/javascript">
    function Undock(sender, eventArgs)
    {
        if (sender.get_dockZoneID() != "")
        {
            sender.undock();
        }
    }
</script>
<telerik:raddocklayout id="RadDockLayout1" runat="server">  
    <telerik:RadDockZone ID="RadDockZone1" runat="server">     
        <telerik:RadDock ID="RadDock1" runat="server">
            <Commands>         
                <telerik:DockCommand Name="Undock" OnClientCommand="Undock" />         
                <telerik:DockExpandCollapseCommand />         
                <telerik:DockCloseCommand />       
            </Commands>     
        </telerik:RadDock>  
    </telerik:RadDockZone>
</telerik:raddocklayout>
````





# See Also

 * [DockCommand Object]({%slug dock/client-side-programming/dockcommand-object%})

 * [Events Triggered on Command Execution]({%slug dock/commands/events-triggered-on-command-execution%})

 * [Command]({%slug dock/server-side-programming/events/command%})
