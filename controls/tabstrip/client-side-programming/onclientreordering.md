---
title: OnClientReordering
page_title: OnClientReordering | UI for ASP.NET AJAX Documentation
description: OnClientReordering
slug: tabstrip/client-side-programming/onclientreordering
tags: onclientreordering
published: True
position: 14
---

# OnClientReordering



## 

The __OnClientReordering__ event is fired just before the drag-to-reorder operation is completed and the dragged tab is still in its initial position.

>note This event will be fired only when the __EnableDragToReorder__ property is set to __"true"__ 
>


The event handler function receives two parameters:

1. The instance of the tabstrip firing the event.

1. An eventArgs parameter containing the following methods:

* __get_tab__ returns a reference to the __RadTab__ which has been dragged.

* __get_index__ returns the zero-based index where the dragged tab will be inserted in the tabs collection once dropped.

* __get_offset__ returns the offset between the index of the dragged tab before the drag operation and the one where it's about to be dropped.

* __get_domEvent__ returns a reference to the DOM event object for the action that caused this event to be fired.

* __set_cancel__ lets you stop the reorder operation by passing boolen value as a parameter. This will leave the dragged tab in its initial position.
