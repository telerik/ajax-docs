---
title: OnClientReordering
page_title: OnClientReordering | RadTabStrip for ASP.NET AJAX Documentation
description: OnClientReordering
slug: tabstrip/client-side-programming/onclientreordering
tags: onclientreordering
published: True
position: 7
---

# OnClientReordering



## 

The **OnClientReordering** event is fired just before the drag-to-reorder operation is completed and the dragged tab is still in its initial position.

>tip This event will be fired only when the **EnableDragToReorder** property is set to **"true"** 
>


The event handler function receives two parameters:

1. The instance of the tabstrip firing the event.

1. An eventArgs parameter containing the following methods:

* **get_tab** returns a reference to the **RadTab** which has been dragged.

* **get_index** returns the zero-based index where the dragged tab will be inserted in the tabs collection once dropped.

* **get_offset** returns the offset between the index of the dragged tab before the drag operation and the one where it's about to be dropped.

* **get_domEvent** returns a reference to the DOM event object for the action that caused this event to be fired.

* **set_cancel** lets you stop the reorder operation by passing boolen value as a parameter. This will leave the dragged tab in its initial position.
