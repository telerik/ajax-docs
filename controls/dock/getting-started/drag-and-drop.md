---
title: Drag And Drop
page_title: Drag And Drop | RadDock for ASP.NET AJAX Documentation
description: Drag And Drop
slug: dock/getting-started/drag-and-drop
tags: drag,and,drop
published: True
position: 1
---

# Drag And Drop



**RadDock** controls are designed to be dragged by the user and dropped to various locations around the Web page.

## Initiating a drag operation

The **DockHandle** property controls where the user must click on the **RadDock** control to initiate a drag operation.

## DockHandle = "TitleBar"

When **DockHandle** is "TitleBar", the user initiates a drag operation by clicking anywhere on the title bar of the RadDockcontrol. When the user hovers the mouse over the title bar, the cursor changes to a move icon:


![](images/dock-titlebardragicon.png)

When the user clicks on the title bar and begins to drag, the cursor changes to the drag icon:


![](images/dock-titlebardraggingicon.png)

## DockHandle = "Grip"

When **DockHandle** is "Grip", the RadDock control does not display a title bar. This maximizes the content area, but providesno access to the command icons. The user initiates a drag operation by clicking on the "Grip" area at the top of the control. When the user hoversthe mouse over the "Grip" area, the cursor changes to a move icon:


![](images/dock-gripdragicon.png)

When the user clicks on the title bar and begins to drag, the cursor changes to the drag icon:


![](images/dock-gripdraggingicon.png)

## DockHandle = "None"

When **DockHandle** is "None", the **RadDock** has no built-in area for the user to initiate a drag operation. You can specify your own handle for dragging by using the client-side **set_handle** method inside an **OnClientInitialize** event handler:

````JavaScript
function SetTheDockHandle(dock, args)
{
    var calendar = $find("<%= RadCalendar1.ClientID %>");
    dock.set_handle(calendar.get_element()); 
}
````



The user can then initiate a drag operation by clicking on the element you have specified:

![](images/dock-embeddedcontroldraggingicon.png)

## Dropping the control

When the **RadDock** control is dragged over a location where it will be docked in a **RadDockZone** control if the user drops it, the **RadDockZone** indicates where the **RadDock** control will be docked:

![](images/dock-showdockposition.png)

The **ForbiddenZones** and **DockMode** properties control where the user can drop a **RadDock** control at the end of a drag operation. If the user drops the control in any location not allowed by the **ForbiddenZones** and **DockMode** properties, it snaps back to its previous location.

## Using ForbiddenZones

The **ForbiddenZones** property lists the dock zones where the **RadDock** control can't be docked. **ForbiddenZones** is a list of strings, each of which matches the **UniqueName** property of a **RadDockZone** control. When the user drags the **RadDock** control over a **RadDockZone** whose **UniqueName** property matches a string in the **ForbiddenZones** property, the **RadDockZone** does *not* indicate a docking rectangle and the user cannot dock the **RadDock** control in that zone.

For a live example of the **ForbiddenZones** property, see [Forbidden Zones](http://demos.telerik.com/aspnet-ajax/Dock/Examples/ForbiddenZones/DefaultCS.aspx).

## Using DockMode

**DockMode** controls whether the **RadDock** control must be docked in a **RadDockZone** control, or whether it can be dropped anywhere on the page, to act as a floating control. **DockMode** can be set to one of three values:

* **Default**: When **DockMode** is "Default", the **RadDock** control can be either docked or floating. The user can drag it to any location. If the dock is docked, it will be rendered as a direct child of the dock zone element; otherwise it will be a direct child of the form.

* **Floating**: When **DockMode** is "Floating", the **RadDock** control can not be docked in any dock zone. The user can drag it to any location, but when dropped over a dock zone, it remains floating. The HTML element of the dock is rendered as a direct child of the main form on the page.

* **Docked**: When **DockMode** is "Docked", the **RadDock** control must be docked in a dock zone. The user can only drag it to a new position within its current dock zone or drag it to a new dock zone. The HTML element of the dock is rendered as a direct child of the dock zone element.

![](images/dockmode.png)

>tip In case you want to display the RadDock in a particular location on your page, you need to dock it in a RadDockZone.This is the only mode that will render the dock at the location in the DOM tree that you have specified.For example, if you create a div HTML element in the page’s form and place inside a RadDock without RadDockZone,this dock is floating and will be rendered outside the div. However, if you wrap the dock in a dock zone,it will remain in the div element.
>


For a live example of the **DockMode** property, see [DockMode](http://demos.telerik.com/aspnet-ajax/Dock/Examples/DockMode/DefaultCS.aspx).

# See Also

 * [Highlighting]({%slug dock/structure/dock-zones/highlighting%})

 * [Dock Zone Orientation]({%slug dock/getting-started/dock-zone-orientation%})
