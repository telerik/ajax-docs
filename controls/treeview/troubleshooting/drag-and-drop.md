---
title: Drag and Drop
page_title: Drag and Drop | RadTreeView for ASP.NET AJAX Documentation
description: Drag and Drop
slug: treeview/troubleshooting/drag-and-drop
tags: drag,and,drop
published: True
position: 11
---

# Drag and Drop



Drag and drop does not work between **IFrames** (or Frames). There is no workaround. As a result, if you use **RadPane** (in **RadSplitter**) and set its **ContentUrl** property it will render an **IFrame** and you will not be able to drag and drop nodes on that pane. You can find a workaround in [this forum post](http://www.telerik.com/community/forums/aspnet-ajax/treeview/how-to-drag-and-drop-tree-node-onto-an-iframe.aspx).
