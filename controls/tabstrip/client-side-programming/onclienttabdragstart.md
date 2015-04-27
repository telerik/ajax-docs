---
title: OnClientTabDragStart
page_title: OnClientTabDragStart | RadTabStrip for ASP.NET AJAX Documentation
description: OnClientTabDragStart
slug: tabstrip/client-side-programming/onclienttabdragstart
tags: onclienttabdragstart
published: True
position: 16
---

# OnClientTabDragStart



## 

The **OnClientTabDragStart** event is fired when a drag-to-reorder operation is about to start.

>note This event will be fired only when the **EnableDragToReorder** property is set to **"true"** 
>


The event handler function receives two parameters:

1. The instance of the tabstrip firing the event.

1. An eventArgs parameter containing the following methods:

* **get_tab** returns a reference to the **RadTab** which is about to be dragged.

* **get_domEvent** returns a reference to the DOM event object for the action that caused the drag-to-reorder operation to start.

* **set_cancel** lets you stop the operation by passing boolen value as a parameter.
