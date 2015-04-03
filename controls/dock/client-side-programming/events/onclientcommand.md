---
title: OnClientCommand
page_title: OnClientCommand | UI for ASP.NET AJAX Documentation
description: OnClientCommand
slug: dock/client-side-programming/events/onclientcommand
tags: onclientcommand
published: True
position: 2
---

# OnClientCommand



## 

The __OnClientCommand__client-side event occurs when the user clicks on a command in the __RadDock__ title bar.

The event handler receives two parameters:

1. The instance of the __RadDock__ control firing the event.

1. An eventArgs parameter containing the following properties and methods:

* __command__ (property) is the __DockCommand__ client-side object for the command that was clicked.

* __set_cancel__ lets you prevent the command from raising any additional events.

* __get_cancel__ returns a boolean value indicating whether the command was canceled.

>caution Calling the __set_cancel__ method of the eventArgs parameter does not prevent the default response on built-in command types. It only prevents any subsequent __OnClientCommand__ events and the server-side __Command__ event.
>


>note You can assign an __OnClientCommand__ event handler to the __OnClientCommand__ property of the __RadDock__ control, or to an individual __Command__ object in the __Commands__ property collection. If you assign two __OnClientCommand__ event handlers, one to the __RadDock__ control and one to the __Command__ object, the event handler assigned to the __Command__ object executes first.
>


The following example uses the __OnClientCommand__event to implement an "Undock" custom command:

````ASPNET
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
