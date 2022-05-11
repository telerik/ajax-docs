---
title: Containers
page_title: Container - RadDragDropManager
description: Container
slug: dragdropmanager/functionality/container
tags: Container
published: True
---

# Containers

With the help of ContainerSelectors property, you can restricting the hint movement within the boundaries of an element.

![](images/dragdropmanager-functionality-containers.gif)

>caption Example

````ASP.NET
<style>
    #container {
        width: 200px;
        height: 200px;
        border: 1px dashed red;
    }

    #ContainerDraggable {
        width: 50px;
        height: 50px;
        background-color: orange;
        border: 2px solid green;
    }
</style>

<telerik:RadDraggable runat="server" ContainerSelectors="#container" TargetSelectors="#ContainerDraggable"></telerik:RadDraggable>

<div id="container">
    <div id="ContainerDraggable"></div>
</div>
````

 