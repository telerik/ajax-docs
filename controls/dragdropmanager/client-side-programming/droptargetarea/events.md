---
title: Events
page_title: RadDropTargetArea Client-Side Events - RadDragDropManager
description: Client-Side Events of RadDropTargetArea, child component of RadDragDropManager
slug: dragdropmanager/client-side-programming/droptargetarea/events
tags: client-side events, events, raddroptargetarea
published: True
---

# RadDropTargetArea Client-Side Events

The Client-Side events fired by RadDropTargetArea during the interactions.

## Load

Fired when the RadDropTargetArea finished loading.

- **sender**: `Telerik.Web.UI.RadDropTargetArea` Client-Side object
- **args**: `Sys.EventArgs` empty object.

>caption Markup

````ASP.NET
<telerik:RadDropTargetArea runat="server" TargetSelectors=".myDropTargetArea">
    <ClientEvents OnLoad="OnLoadEventHandler" />
</telerik:RadDropTargetArea>

<div style="height: 100px; width: 100px; border: 1px solid #808080" class="myDropTargetArea"></div>

<script>
    function OnLoadEventHandler(sender, args) {
        var radDropTargetArea = sender;
    }
</script>
````

## DragEnter

Fired when draggable moves over the drop target. The `DragEnter` event represents a jQuery `mousemove` event.

Event arguments: 

- **sender**: `Telerik.Web.UI.RadDropTargetArea` Client-Side object
- **args**: `Sys.EventArgs` object containing additional properties.
  - **get_sender()**: returns the [kendo.ui.DropTarget](https://docs.telerik.com/kendo-ui/api/javascript/ui/droptarget) widget
  - **get_target()**: returns the HTML element associated with RadDraggable.
  - **get_draggable()**: returns the [kendo.ui.Draggable](https://docs.telerik.com/kendo-ui/api/javascript/ui/draggable) widget
  - **get_dropTarget()**: returns a jQuery Object with the element associated with RadDropTargetArea.

````ASP.NET
<telerik:RadDropTargetArea runat="server" TargetSelectors=".myDropTargetArea">
    <ClientEvents OnDragEnter="OnDragEnterEventHandler" />
</telerik:RadDropTargetArea>

<div style="height: 100px; width: 100px; border: 1px solid #808080" class="myDropTargetArea"></div>

<script>
    function OnDragEnterEventHandler(sender, args) {
        var radDropTargetArea = sender;
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

- **sender**: `Telerik.Web.UI.RadDropTargetArea` Client-Side object
- **args**: `Sys.EventArgs` object containing additional properties.
  - **get_sender()**: returns the [kendo.ui.DropTarget](https://docs.telerik.com/kendo-ui/api/javascript/ui/droptarget) widget
  - **get_target()**: returns the HTML element associated with RadDraggable.
  - **get_draggable()**: returns the [kendo.ui.Draggable](https://docs.telerik.com/kendo-ui/api/javascript/ui/draggable) widget
  - **get_dropTarget()**: returns a jQuery Object with the element associated with RadDropTargetArea.

````ASP.NET
<telerik:RadDropTargetArea runat="server" TargetSelectors=".myDropTargetArea">
    <ClientEvents OnDragLeave="OnDragLeaveEventHandler" />
</telerik:RadDropTargetArea>

<div style="height: 100px; width: 100px; border: 1px solid #808080" class="myDropTargetArea"></div>

<script>
    function OnDragLeaveEventHandler(sender, args) {
        var radDropTargetArea = sender;
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

- **sender**: `Telerik.Web.UI.RadDropTargetArea` Client-Side object
- **args**: `Sys.EventArgs` object containing additional properties.
  - **get_sender()**: returns the [kendo.ui.DropTarget](https://docs.telerik.com/kendo-ui/api/javascript/ui/droptarget) widget
  - **get_target()**: returns the HTML element associated with RadDraggable.
  - **get_draggable()**: returns the [kendo.ui.Draggable](https://docs.telerik.com/kendo-ui/api/javascript/ui/draggable) widget
  - **get_dropTarget()**: returns a jQuery Object with the element associated with RadDropTargetArea.

````ASP.NET
<telerik:RadDropTargetArea runat="server" TargetSelectors=".myDropTargetArea">
    <ClientEvents OnDrop="OnDropEventHandler" />
</telerik:RadDropTargetArea>

<div style="height: 100px; width: 100px; border: 1px solid #808080" class="myDropTargetArea"></div>

<script>
    function OnDropEventHandler(sender, args) {
        var radDropTargetArea = sender;
        var kendoUiDropTarget = args.get_sender();
        var draggableTargetElement = args.get_target();
        var kendoUiDraggable = args.get_draggable();
        var $jQueryObjDropTargetElement = args.get_dropTarget();
    }
</script>
````
 

