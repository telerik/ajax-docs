---
title: AutoScroll
page_title: AutoScroll - RadDragDropManager
description: AutoScroll
slug: dragdropmanager/functionality/autoscroll
tags: AutoScroll
published: True
---

# AutoScroll

The **AutoScroll** property Enables automatic scrolling of the container once the dragged element approaches the boundaries.

![](images/dragdropmanager-functionality-autoscroll.gif)

>caption Example

````ASP.NET
<telerik:RadDraggable runat="server" AutoScroll="true" TargetSelectors="#AutoScrollDraggable"></telerik:RadDraggable>

<div style="width: 200px; height: 200px; overflow: auto; padding: 20px;">
    <div style="width: 1000px; height: 1000px;">
        <div id="AutoScrollDraggable"></div>
    </div>
</div>

<style>
    #AutoScrollDraggable {
        width: 50px;
        height: 50px;
        background-color: orange;
        border: 2px solid green;
    }
</style>
````
 
