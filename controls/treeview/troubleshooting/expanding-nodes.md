---
title: Expanding Nodes
page_title: Expanding Nodes | UI for ASP.NET AJAX Documentation
description: Expanding Nodes
slug: treeview/troubleshooting/expanding-nodes
tags: expanding,nodes
published: True
position: 6
---

# Expanding Nodes



## 

Here are some general rules when expanding nodes:



1. The server-side method __ExpandAllNodes()__ will expand only the nodes that have __ExpandMode__ set to __ClientSide__. The same applies when you set the __Expanded__ property to *True*.

Nodes that have any other ExpandMode can be expanded only client-side: either by user interaction (mouse click) or by calling the __expand()__ client-side method.

As a result, if you set the __Expanded = true__ to a node which has ExpandMode - __ServerSideCallBack/ServerSide/WebService__ - the node will not expand and the __NodeExpand__ server-side event will __not fire__.

2. Setting the __Expanded__ property to *True* does not fire the [NodeExpand]({%slug treeview/server-side-programming/events/nodeexpand%}) event. You can place the code that is to be executed in that event right after setting the Expanded property to True.

3. Calling the client-side __expand()__ method does not fire __OnClientNodeExpanding__ and __OnClientNodeExpanded__ client-side events.

This is by design. You can put your code from the OnClientNodeExpanding handler before calling the expand() method and the code from the OnClientNodeExpanded after the call of the expand() method.

If the node which is expanding has set ExpandMode to either ServerSideCallBack or WebService - the [OnClientNodePopulating]({%slug treeview/client-side-programming/events/onclientnodepopulating%}) and [OnClientNodePopulated]({%slug treeview/client-side-programming/events/onclientnodepopulated%}) client-side events are fired.


