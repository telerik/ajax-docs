---
title: OnClientReordered
page_title: OnClientReordered | UI for ASP.NET AJAX Documentation
description: OnClientReordered
slug: tabstrip/client-side-programming/onclientreordered
tags: onclientreordered
published: True
position: 15
---

# OnClientReordered



## 

The __OnClientReordered__ event is fired after the reorder operation is completed and the dragged tab is being inserted into its new position.

>note This event will be fired only when the __EnableDragToReorder__ property is set to __"true"__ 
>


The event handler function receives two parameters:

1. The instance of the tabstrip firing the event.

1. An eventArgs parameter containing the following methods:

* __get_tab__ returns a reference to the __RadTab__ which has been reordered by dragging.

* __get_domEvent__ returns a reference to the DOM event object for the action that caused the event to fire.

* __get_offset__ returns the offset between the index of the dragged tab before the drag operation and the one where it's dropped.
