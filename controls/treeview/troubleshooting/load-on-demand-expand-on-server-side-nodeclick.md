---
title: Load On Demand Expand on Server-side NodeClick
page_title: Load On Demand Expand on Server-side NodeClick - RadTreeView
description: Check our Web Forms article about Load On Demand Expand on Server-side NodeClick.
slug: treeview/troubleshooting/load-on-demand-expand-on-server-side-nodeclick
tags: load,on,demand,expand,on,server-side,nodeclick
published: True
position: 13
---

# Load On Demand Expand on Server-side NodeClick



## 

**Case:**

A Load On Demand TreeView for which:

* The **ExpandMode** for Load On Demand Nodes is either **ServerSideCallBack** or **WebService**.

* The **NodeClick** server-side event is handled.

* A Node is expanded when clicked (in either the **OnClientNodeClicking** or **OnClientNodeClicked** event handlers).

**Problem:**

Due to timing issues in case **ExpandMode** for the clicked Node is:

* **ServerSideCallBack** - the Node does not expand after the postback although its child Nodes are loaded.

* **WebService** - the Web Method fails.

**Resolution:**

Ensure that the **NodeClick** event fires after the Node finishes loading its Nodes:

1. Expand the Node in the **OnClientNodeClicking** event handler. If the Node's **ExpandMode** is **ServerSideCallBack** or **WebService** and the Node does not have children, cancel the event. Below is an example:
	````JavaScript
function onClientNodeClicking(sender, eventArgs){

    var node = eventArgs.get_node();

    if ((node.get_expandMode() > 1) &&
     (node.get_nodes().get_count() == 0))
    {
     eventArgs.set_cancel(true);
    }

    node.expand();
}
````



1. Handle the **OnClientNodePopulated** event and select the expanded Node in the event handler, like this:
	````JavaScript
function onClientNodePopulated(sender, eventArgs){ 

    eventArgs.get_node().select();
}
````




