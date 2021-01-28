---
title: OnClientReordered
page_title: OnClientReordered - RadTabStrip
description: Check our Web Forms article about OnClientReordered.
slug: tabstrip/client-side-programming/onclientreordered
tags: onclientreordered
published: True
position: 8
---

# OnClientReordered



## 

The **OnClientReordered** event is fired after the reorder operation is completed and the dragged tab is being inserted into its new position.

>note This event will be fired only when the **EnableDragToReorder** property is set to **"true"** 
>


The event handler function receives two parameters:

1. The instance of the tabstrip firing the event.

1. An eventArgs parameter containing the following methods:

* **get_tab** returns a reference to the **RadTab** which has been reordered by dragging.

* **get_domEvent** returns a reference to the DOM event object for the action that caused the event to fire.

* **get_offset** returns the offset between the index of the dragged tab before the drag operation and the one where it's dropped.
