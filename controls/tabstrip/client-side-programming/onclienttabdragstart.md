---
title: OnClientTabDragStart
page_title: OnClientTabDragStart | UI for ASP.NET AJAX Documentation
description: OnClientTabDragStart
slug: tabstrip/client-side-programming/onclienttabdragstart
tags: onclienttabdragstart
published: True
position: 16
---

# OnClientTabDragStart



## 

The __OnClientTabDragStart__ event is fired when a drag-to-reorder operation is about to start.

>note This event will be fired only when the __EnableDragToReorder__ property is set to __"true"__ 
>


The event handler function receives two parameters:

1. The instance of the tabstrip firing the event.

1. An eventArgs parameter containing the following methods:

* __get_tab__ returns a reference to the __RadTab__ which is about to be dragged.

* __get_domEvent__ returns a reference to the DOM event object for the action that caused the drag-to-reorder operation to start.

* __set_cancel__ lets you stop the operation by passing boolen value as a parameter.
