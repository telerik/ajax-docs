---
title: Ignore
page_title: Ignore - RadDragDropManager
description: Hint
slug: dragdropmanager/functionality/ignore
tags: Ignore
published: True
---


# Ignore

Using the **IgnoreSelectors** you specify elements within a Draggable that should not trigger the Drag functionality.

![](images/dragdropmanager-functionality-ignore.gif)


>caption Example

````ASP.NET
<telerik:RadDraggable runat="server" IgnoreSelectors="input" TargetSelectors="#IgnoreDraggable">
</telerik:RadDraggable>
<div id="IgnoreDraggable">
    <input type="text" />
    <div>Foo</div>
</div>
<style>
    #IgnoreDraggable {
        width: 50px;
        height: 50px;
        border: 2px solid green;
        margin: 5px;
    }

    #IgnoreDraggable input {
        width: 100%;
        box-sizing: border-box;
    }
</style>
````
 

