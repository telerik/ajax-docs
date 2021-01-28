---
title: Expanding Nodes
page_title: Expanding Nodes - RadTreeView
description: Check our Web Forms article about Expanding Nodes.
slug: treeview/troubleshooting/expanding-nodes
tags: expanding,nodes
published: True
position: 6
---

# Expanding Nodes



## 

Here are some general rules when expanding nodes:



1. The server-side method **ExpandAllNodes()** will expand only the nodes that have **ExpandMode** set to **ClientSide**. The same applies when you set the **Expanded** property to *True*.

Nodes that have any other **ExpandMode** can be expanded only client-side: either by user interaction (mouse click) or by calling the **expand()** client-side method.

As a result, if you set the **Expanded = true** to a node which has **ExpandMode** - **ServerSideCallBack/ServerSide/WebService** - the node will not expand and the **NodeExpand** server-side event will **not fire**.

2. Setting the **Expanded** property to *True* does not fire the [NodeExpand]({%slug treeview/server-side-programming/events/nodeexpand%}) event. You can place the code that is to be executed in that event right after setting the Expanded property to True.

3. Calling the client-side **expand()** method does not fire **OnClientNodeExpanding** and **OnClientNodeExpanded** client-side events.

This is by design. You can put your code from the **OnClientNodeExpanding** handler before calling the expand() method and the code from the **OnClientNodeExpanded** after the call of the expand() method.

If the node which is expanding has set **ExpandMode** to either **ServerSideCallBack** or **WebService** - the [OnClientNodePopulating]({%slug treeview/client-side-programming/events/onclientnodepopulating%}) and [OnClientNodePopulated]({%slug treeview/client-side-programming/events/onclientnodepopulated%}) client-side events are fired.


