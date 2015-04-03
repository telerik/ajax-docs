---
title: Client-Side Programming Overview
page_title: Overview | UI for ASP.NET AJAX Documentation
description: Overview
slug: dock/client-side-programming/overview
tags: overview
published: True
position: 0
---

# Client-Side Programming Overview



The __RadDock__ and __RadDockZones__ provide a client-side API that lets you interact with the controls and docking zones in client-side code. In addition to a full set of [client-side events]({%slug dock/client-side-programming/events/overview%}), the client-side object model lets you manipulate the dock controls and docking zones while avoiding unnecessary post-backs.

## Getting the RadDock and RadDockZone client-side objects

__RadDock__ creates a client-side object with the __ClientID__ of the control. Similarly, RadDockZone creates a client-side object with the __ClientID__ of the docking zone. You can obtain the reference to these objects using the following JavaScript code:

````JavaScript
	
	        var dock = $find("<%= RadDock1.ClientID %>"); 
	        var zone = $find("<%= RadDockZone1.ClientID %>");
	
````



## Getting the instance of a command object

Once you have the client-side object of __RadDock__ control, you can use the __getCommand()__ method to get the instance of a particular command:

````JavaScript
	
	        var dock = $find("<%= RadDock1.ClientID %>"); 
	        var command = dock.getCommand("MyCustomCommand");
	
````



## Cancelling an action

Some client-side events occur immediately before the __RadDock__ control performs some action. You can use these events to cancel the impending action by using the cancel property of the eventArgs passed to the handler:

````JavaScript
	
	        function OnClientDockPositionChanging(sender, eventArgs)
	        {
	            eventArgs.set_cancel(true); 
	        }
	
````



## Docking and undocking controls

When you get the instance of the __RadDock__ object, you can undock it from its current docking zone by calling the __undock()__ method:

````JavaScript
	
	        function undockIt() 
	        {
	            var dock = $find("<%= RadDock1.ClientID %>");
	            dock.undock(); 
	        }
	
````



To dock a __RadDock__ control, you can call the __dock()__ method of the client-side __RadDockZone__ object:

````JavaScript
	
	
	        function dockAtEnd()
	        {
	            var dock = $find("<%= RadDock1.ClientID %>");
	            var zone = $find("<%= RadDockZone1.ClientID %>");
	            if (dock.get_dockZoneID() != zone.get_id())
	            {
	                zone.dock(dock);
	            } 
	        }
	
	        function dockAtStart()
	        {
	            var dock = $find("<%= RadDock1.ClientID %>");
	            var zone = $find("<%= RadDockZone1.ClientID %>");
	            if (dock.get_dockZoneID() != zone.get_id())
	            {
	                zone.dock(dock, 0);
	            } 
	        }
````



# See Also

 * [RadDock Object]({%slug dock/client-side-programming/raddock-object%})

 * [RadDockZone Object]({%slug dock/client-side-programming/raddockzone-object%})

 * [DockCommand Object]({%slug dock/client-side-programming/dockcommand-object%})
