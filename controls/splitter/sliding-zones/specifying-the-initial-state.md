---
title: Specifying the Initial State
page_title: Specifying the Initial State | RadSplitter for ASP.NET AJAX Documentation
description: Specifying the Initial State
slug: splitter/sliding-zones/specifying-the-initial-state
tags: specifying,the,initial,state
published: True
position: 3
---

# Specifying the Initial State

By default, when the page first loads, all of the sliding panes in a sliding zone are collapsed. Two properties let you change this default behavior so that the sliding zone starts with one of its sliding panes expanded to show its content:

* Set the **DockedPaneId** property of the **RadSlidingZone** control to the **ID** property of one of its sliding panes to cause the sliding zone to load with that pane expanded and docked.

	>note The **EnableDock** property of the sliding pane must be **True** , or the **DockedPaneId** property of the parent zone has no effect.


* Set the **ExpandedPaneId** property of the **RadSlidingZone** control to the ID property of one of its sliding panes to cause the sliding zone to load with that pane expanded but not docked.

## See Also

 * [Sliding Pane Behavior]({%slug splitter/sliding-zones/sliding-pane-behavior%})
