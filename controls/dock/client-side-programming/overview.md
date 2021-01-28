---
title: Overview
page_title: Client-Side Programming Overview - RadDock
description: Check our Web Forms article about Overview.
slug: dock/client-side-programming/overview
tags: overview
published: True
position: 0
---

# Client-Side Programming Overview



The **RadDock** and **RadDockZones** provide a client-side API that lets you interact with the controls and docking zones in client-side code. In addition to a full set of [client-side events]({%slug dock/client-side-programming/events/overview%}), the client-side object model lets you manipulate the dock controls and docking zones while avoiding unnecessary post-backs.

## Getting the RadDock and RadDockZone Client-side Objects

**RadDock** creates a client-side object with the **ClientID** of the control. Similarly, RadDockZone creates a client-side object with the **ClientID** of the docking zone. You can obtain the reference to these objects using the following JavaScript code:

````JavaScript
var dock = $find("<%= RadDock1.ClientID %>"); 
var zone = $find("<%= RadDockZone1.ClientID %>");
````



## Getting the Instance of a Command Object

Once you have the client-side object of **RadDock** control, you can use the **getCommand()** method to get the instance of a particular command:

````JavaScript
var dock = $find("<%= RadDock1.ClientID %>"); 
var command = dock.getCommand("MyCustomCommand");
````



## Cancelling an Action

Some client-side events occur immediately before the **RadDock** control performs some action. You can use these events to cancel the impending action by using the cancel property of the eventArgs passed to the handler:

````JavaScript
function OnClientDockPositionChanging(sender, eventArgs)
{
    eventArgs.set_cancel(true); 
}
````



## Docking and Undocking Controls

When you get the instance of the **RadDock** object, you can undock it from its current docking zone by calling the **undock()** method:

````JavaScript
function undockIt() 
{
    var dock = $find("<%= RadDock1.ClientID %>");
    dock.undock(); 
}
````



To dock a **RadDock** control, you can call the **dock()** method of the client-side **RadDockZone** object:

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
