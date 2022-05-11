---
title: Groups
page_title: Groups - RadDragDropManager
description: Groups
slug: dragdropmanager/functionality/groups
tags: Groups
published: True
---

# Group

The **Group** property Allows Draggable elements to be dropped only on DropTargets with the same group.

![](images/dragdropmanager-functionality-group.gif)

>caption Example

````ASP.NET
<telerik:RadDraggable runat="server" TargetSelectors=".orange" Group="orangeGroup">
</telerik:RadDraggable>
<telerik:RadDraggable runat="server" TargetSelectors=".purple" Group="purpleGroup">
</telerik:RadDraggable>

<telerik:RadDropTarget runat="server" TargetSelectors="#orangeArea" Group="orangeGroup">
    <ClientEvents OnDrop="colorAreaOnDrop" />
</telerik:RadDropTarget>
<telerik:RadDropTarget runat="server" TargetSelectors="#purpleArea" Group="purpleGroup">
    <ClientEvents OnDrop="colorAreaOnDrop" />
</telerik:RadDropTarget>

<div class="draggables">
    <div class="orange"></div>
    <div class="orange"></div>
    <div class="purple"></div>
    <div class="purple"></div>
</div>
<div class="dropTargets">
    <div id="orangeArea">DropTarget</div>
    <div id="purpleArea">DropTarget</div>
</div>

<script>
    function colorAreaOnDrop(sender, args) {
        args.get_draggable().destroy();
        args.get_draggable().element.remove();
    }
</script>
<style>
    .draggables div
    {
        display: inline-block;
    }
    .orange, .purple {
        width: 50px;
        height: 50px;
        border: 2px solid green;
        /*margin-right: 5px;*/
    }

    #orangeArea, #purpleArea {
        width: 104px;
        height: 55px;
        border: 2px solid green;
        margin-bottom: 5px;
        text-align: center;
        line-height: 55px;
    }

    .orange, #orangeArea {
        background-color: orange;
    }

    .purple, #purpleArea {
        background-color: purple;
        color: white;
    }
</style>
````
 

