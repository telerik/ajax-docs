---
title: Hint
page_title: Hint - RadDragDropManager
description: Hint
slug: dragdropmanager/functionality/hint
tags: Hint
published: True
---

# Hint

By default, the Draggable creates an exact clone of the Target Element and uses it as a Hint. 

![](images/dragdropmanager-functionality-default-hint.gif)


Using the `Hint` property, you can set a hint-handler (JavaScript function) to change the Draggable element to something else.

![](images/dragdropmanager-functionality-hint.gif)


>caption Example

````ASP.NET
<telerik:RadDraggable runat="server" Hint="customHintHandler" TargetSelectors="#CustomHintDraggable">
</telerik:RadDraggable>

<div id="CustomHintDraggable"></div>

<script>
    function customHintHandler(element) {
        var hintElement = $("<div id='hint'></div>");
        hintElement.css({
            "box-sizing": "border-box",
            "background-image": "url('https://demos.telerik.com/aspnet-ajax/common/images/site/devcraft-ninja-cta.svg')",
            "background-repeat": "no-repeat",
            "width": "110px",
            "height": "100px"
        });
        return hintElement;
    }
</script>
<style>
    #CustomHintDraggable {
        width: 50px;
        height: 50px;
        background-color: orange;
        border: 2px solid green;
    }
</style>
````

  

