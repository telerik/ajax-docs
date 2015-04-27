---
title: The NodeClick Event Does Not Fire
page_title: The NodeClick Event Does Not Fire | RadTreeView for ASP.NET AJAX Documentation
description: The NodeClick Event Does Not Fire
slug: treeview/troubleshooting/the-nodeclick-event-does-not-fire
tags: the,nodeclick,event,does,not,fire
published: True
position: 2
---

# The NodeClick Event Does Not Fire



## 

The only prerequisite for the **NodeClick** event to fire is to have an event handler associated with it. However, even if you have an associated event handler, sometimes it still does not fire. Here are two possible reasons:

1. The **PostBack** property of Nodes is set to **False**. In order for the **NodeClick** event to fire, a postback should be made when a Node is clicked. Therefore the **PostBack** property of Nodes which fire the **NodeClick** event should be set to **True**.

1. The Nodes are marked with **NavigateUrl** - if the **NavigateUrl** property is set, clicking a Node will cause another page to be opened either in a new or the same window. Hence, the **NodeClick** event will not fire as there has been a page redirection.
