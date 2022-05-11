---
title: Filter
page_title: Filter - RadDragDropManager
description: Filter
slug: dragdropmanager/functionality/filter
tags: filter
published: True
---

# Filter


Define Filters to enable Dragging elements with specific selectors.

![](images/dragdropmanager-functionality-filter.gif)


>caption Example

````ASP.NET
<telerik:RadDraggable runat="server" TargetSelectors="#DraggableContainer .draggable">
</telerik:RadDraggable>

<div id="DraggableContainer">
    <div class="draggable">Draggable</div>
    <div class="static">skipped</div>
    <div class="static">skipped</div>
    <div class="draggable">Draggable</div>
</div>

<style>
    .draggable, 
    .static {
        width: 80px;
        height: 50px;
        border: 2px solid green;
        margin: 5px;
        text-align: center;
        line-height: 50px;
        user-select: none;
    }

    .draggable {
        background-color: orange;
    }

    .static {
        background-color: purple;
        color: white;
    }
</style>
````

 