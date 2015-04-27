---
title: Reordered
page_title: Reordered | RadTabStrip for ASP.NET AJAX Documentation
description: Reordered
slug: tabstrip/server-side-programming/reordered
tags: reordered
published: True
position: 6
---

# Reordered



## 

The server-side **Reordered** event occurs when the tabs of the RadTabStrip are reordered.

>note This event will be fired only when the **EnableDragToReorder** property is set to **"true"** 
>


The **Reordered** event handler receives two arguments:

1. The **RadTabStrip** firing the event. This argument is of type object, but can be cast to the **RadTabStrip** type.

1. A **RadTabStripReorderedEventArgs** object with the following two properties: **Tab** and **Offset**. The Tab property is a reference to the tab which has been reordered, the Offset property is the difference between zero-based index of the tab before it has been reordered and after the reorder operation.
