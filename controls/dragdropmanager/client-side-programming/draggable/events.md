---
title: Events
page_title: RadDraggable Client-Side Events - RadDragDropManager
description: Client-Side Events of RadDraggable, child component of RadDragDropManager
slug: dragdropmanager/client-side-programming/draggable/events
tags: client-side events, events, raddraggable
published: True
---

# RadDraggable Client-Side Events

The Client-Side events fired by RadDraggable during the interactions.

## Load

Fired when the Draggable finished loading.

Event arguments: 

- **sender**: `Telerik.Web.UI.RadDraggable` Client-Side object
- **args**: `Sys.EventArgs` empty object.


````ASP.NET
<telerik:RadDraggable runat="server" TargetSelectors=".mydraggable">
    <ClientEvents OnLoad="OnLoadEventHandler" />
</telerik:RadDraggable>

<div class="mydraggable">Draggable</div>

<script>
    function OnLoadEventHandler(sender, args){
        var radDraggable = sender;
    }
</script>
````

## Hold

Fired before the `DragStart` event, shortly after clicking and holding an element. The `Hold` event represents a jQuery `mousedown` event.

Event arguments: 

- **sender**: `Telerik.Web.UI.RadDraggable` Client-Side object
- **args**: `Sys.EventArgs` object containing additional properties.
  - **get_sender()**: returns the [kendo.ui.Draggable](https://docs.telerik.com/kendo-ui/api/javascript/ui/draggable) widget
  - **get_target()**: returns the HTML element associated with RadDraggable.


````ASP.NET
<telerik:RadDraggable runat="server" TargetSelectors=".mydraggable">
    <ClientEvents OnHold="OnHoldEventHandler" />
</telerik:RadDraggable>

<div class="mydraggable">Draggable</div>

<script>
    function OnHoldEventHandler(sender, args){
        var radDraggable = sender;
        var draggableKendoWidget = args.get_sender();
        var targetElement = args.get_target();
    }
</script>
````


## DragStart

Fired when item drag starts. The `DragStart` event represents a jQuery `mousedown` event.

Event arguments: 

- **sender**: `Telerik.Web.UI.RadDraggable` Client-Side object
- **args**: `Sys.EventArgs` object containing additional properties.
  - **get_sender()**: returns the [kendo.ui.Draggable](https://docs.telerik.com/kendo-ui/api/javascript/ui/draggable) widget
  - **get_target()**: returns the HTML element associated with RadDraggable.


````ASP.NET
<telerik:RadDraggable runat="server" TargetSelectors=".mydraggable">
    <ClientEvents OnDragStart="OnDragStartEventHandler" />
</telerik:RadDraggable>

<div class="mydraggable">Draggable</div>

<script>
    function OnDragStartEventHandler(sender, args){
        var radDraggable = sender;
        var draggableKendoWidget = args.get_sender();
        var targetElement = args.get_target();
    }
</script>
````

## Drag

Fired while dragging. The `Drag` event represents a jQuery `mousemove` event.

Event arguments: 

- **sender**: `Telerik.Web.UI.RadDraggable` Client-Side object
- **args**: `Sys.EventArgs` object containing additional properties.
  - **get_sender()**: returns the [kendo.ui.Draggable](https://docs.telerik.com/kendo-ui/api/javascript/ui/draggable) widget
  - **get_target()**: returns the HTML element associated with RadDraggable.

````ASP.NET
<telerik:RadDraggable runat="server" TargetSelectors=".mydraggable">
    <ClientEvents OnDrag="OnDragEventHandler" />
</telerik:RadDraggable>

<div class="mydraggable">Draggable</div>

<script>
    function OnDragEventHandler(sender, args){
        var radDraggable = sender;
        var draggableKendoWidget = args.get_sender();
        var targetElement = args.get_target();        
    }
</script>
````

## DragCancel

Fired when item drag is canceled by pressing the Escape key while dragging. The `DragCancel` event represents a jQuery `keyup` event.

Event arguments: 

- **sender**: `Telerik.Web.UI.RadDraggable` Client-Side object
- **args**: `Sys.EventArgs` object containing additional properties.
  - **get_sender()**: returns the [kendo.ui.Draggable](https://docs.telerik.com/kendo-ui/api/javascript/ui/draggable) widget

````ASP.NET
<telerik:RadDraggable runat="server" TargetSelectors=".mydraggable">
    <ClientEvents OnDragCancel="OnDragCancelEventHandler" />
</telerik:RadDraggable>

<div class="mydraggable">Draggable</div>

<script>
    function OnDragCancelEventHandler(sender, args){
        var radDraggable = sender;
        var draggableKendoWidget = args.get_sender();
    }
</script>
````

## DragEnd

Fired when item drag ends. The `DragEnd` event represents a jQuery `mouseup` event.

Event arguments: 

- **sender**: `Telerik.Web.UI.RadDraggable` Client-Side object
- **args**: `Sys.EventArgs` object containing additional properties.
  - **get_sender()**: returns the [kendo.ui.Draggable](https://docs.telerik.com/kendo-ui/api/javascript/ui/draggable) widget
  - **get_target()**: returns the HTML element associated with RadDraggable.
  - **get_hintElement()**: returns a clone of the HTML element associated with RadDraggable.

````ASP.NET
<telerik:RadDraggable runat="server" TargetSelectors=".mydraggable">
    <ClientEvents OnDragEnd="OnDragEndEventHandler" />
</telerik:RadDraggable>

<div class="mydraggable">Draggable</div>

<script>
    function OnDragEndEventHandler(sender, args){
        var radDraggable = sender;
        var draggableKendoWidget = args.get_sender();
        var targetElement = args.get_target();
        var hintElement = args.get_hintElement();
    }
</script>
````
 
