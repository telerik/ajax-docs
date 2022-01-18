---
title: Events
page_title: RadDropTarget Client-Side Events - RadDragDropManager
description: Client-Side Events of RadDropTarget, child component of RadDragDropManager
slug: dragdropmanager/client-side-programming/droptarget/events
tags: client-side events, events, raddroptarget
published: True
---

# RadDropTarget Client-Side Events

The Client-Side events fired by RadDropTarget during the interactions.

## Load

Fired when the RadDropTarget finished loading.

- **sender**: `Telerik.Web.UI.RadDropTarget` Client-Side object
- **args**: `Sys.EventArgs` empty object.

>caption Markup

````ASP.NET
<telerik:RadDropTarget runat="server" TargetSelectors=".myDropTarget">
    <ClientEvents OnLoad="OnLoadEventHandler" />
</telerik:RadDropTarget>

<div style="height: 100px; width: 100px; border: 1px solid #808080" class="myDropTarget"></div>

<script>
    function OnLoadEventHandler(sender, args) {
        var radDropTarget = sender;
    }
</script>
````

## DragEnter

Fired when draggable moves over the drop target. The `DragEnter` event represents a jQuery `mousemove` event.

Event arguments: 

- **sender**: `Telerik.Web.UI.RadDropTarget` Client-Side object
- **args**: `Sys.EventArgs` object containing additional properties.
  - **get_sender()**: returns the [kendo.ui.DropTarget](https://docs.telerik.com/kendo-ui/api/javascript/ui/droptarget) widget
  - **get_target()**: returns the HTML element associated with RadDraggable.
  - **get_draggable()**: returns the [kendo.ui.Draggable](https://docs.telerik.com/kendo-ui/api/javascript/ui/draggable) widget
  - **get_dropTarget()**: returns a jQuery Object with the element associated with RadDropTarget.

````ASP.NET
<telerik:RadDropTarget runat="server" TargetSelectors=".myDropTarget">
    <ClientEvents OnDragEnter="OnDragEnterEventHandler" />
</telerik:RadDropTarget>

<div style="height: 100px; width: 100px; border: 1px solid #808080" class="myDropTarget"></div>

<script>
    function OnDragEnterEventHandler(sender, args) {
        var radDropTarget = sender;
        var kendoUiDropTarget = args.get_sender();
        var draggableTargetElement = args.get_target();
        var kendoUiDraggable = args.get_draggable();
        var $jQueryObjDropTargetElement = args.get_dropTarget();
    }
</script>
````

## DragLeave

Fired when draggable moves out of the drop target. The `DragLeave` event represents a jQuery `mousemove` event.

Event arguments: 

- **sender**: `Telerik.Web.UI.RadDropTarget` Client-Side object
- **args**: `Sys.EventArgs` object containing additional properties.
  - **get_sender()**: returns the [kendo.ui.DropTarget](https://docs.telerik.com/kendo-ui/api/javascript/ui/droptarget) widget
  - **get_target()**: returns the HTML element associated with RadDraggable.
  - **get_draggable()**: returns the [kendo.ui.Draggable](https://docs.telerik.com/kendo-ui/api/javascript/ui/draggable) widget
  - **get_dropTarget()**: returns a jQuery Object with the element associated with RadDropTarget.

````ASP.NET
<telerik:RadDropTarget runat="server" TargetSelectors=".myDropTarget">
    <ClientEvents OnDragLeave="OnDragLeaveEventHandler" />
</telerik:RadDropTarget>

<div style="height: 100px; width: 100px; border: 1px solid #808080" class="myDropTarget"></div>

<script>
    function OnDragLeaveEventHandler(sender, args) {
        var radDropTarget = sender;
        var kendoUiDropTarget = args.get_sender();
        var draggableTargetElement = args.get_target();
        var kendoUiDraggable = args.get_draggable();
        var $jQueryObjDropTargetElement = args.get_dropTarget();
    }
</script>
````

## Drop

Fired when draggable is dropped over the drop target. The `Drop` event represents a jQuery `mouseup` event.

Event arguments: 

- **sender**: `Telerik.Web.UI.RadDropTarget` Client-Side object
- **args**: `Sys.EventArgs` object containing additional properties.
  - **get_sender()**: returns the [kendo.ui.DropTarget](https://docs.telerik.com/kendo-ui/api/javascript/ui/droptarget) widget
  - **get_target()**: returns the HTML element associated with RadDraggable.
  - **get_draggable()**: returns the [kendo.ui.Draggable](https://docs.telerik.com/kendo-ui/api/javascript/ui/draggable) widget
  - **get_dropTarget()**: returns a jQuery Object with the element associated with RadDropTarget.

````ASP.NET
<telerik:RadDropTarget runat="server" TargetSelectors=".myDropTarget">
    <ClientEvents OnDrop="OnDropEventHandler" />
</telerik:RadDropTarget>

<div style="height: 100px; width: 100px; border: 1px solid #808080" class="myDropTarget"></div>

<script>
    function OnDropEventHandler(sender, args) {
        var radDropTarget = sender;
        var kendoUiDropTarget = args.get_sender();
        var draggableTargetElement = args.get_target();
        var kendoUiDraggable = args.get_draggable();
        var $jQueryObjDropTargetElement = args.get_dropTarget();
    }
</script>
````
 

