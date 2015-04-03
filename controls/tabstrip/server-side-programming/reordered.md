---
title: Reordered
page_title: Reordered | UI for ASP.NET AJAX Documentation
description: Reordered
slug: tabstrip/server-side-programming/reordered
tags: reordered
published: True
position: 6
---

# Reordered



## 

The server-side __Reordered__ event occurs when the tabs of the RadTabStrip are reordered.

>note This event will be fired only when the __EnableDragToReorder__ property is set to __"true"__ 
>


The __Reordered__ event handler receives two arguments:

1. The __RadTabStrip__ firing the event. This argument is of type object, but can be cast to the __RadTabStrip__ type.

1. A __RadTabStripReorderedEventArgs__ object with the following two properties: __Tab__ and __Offset__. The Tab property is a reference to the tab which has been reordered, the Offset property is the difference between zero-based index of the tab before it has been reordered and after the reorder operation.
