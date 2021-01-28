---
title: Server-side
page_title: Server-side - RadTreeView
description: Check our Web Forms article about Server-side.
slug: treeview/checkboxes/server-side
tags: server-side
published: True
position: 1
---

# Server-side



## Events

* **NodeCheck**: This event fires when a Node text has been checked. The **RadTreeNodeEventArgs** event arguments' property**Node** provides a reference to the clicked Node.

## Properties

* **CheckBoxes (RadTreeView):** When set to **True**, this property displays a checkbox next to each tree Node.

* **CheckedNodes (RadTreeView):** Gets a collection of **RadTreeNode** objects where the check boxes have been selected.

* **Checkable (RadTreeNode):** If the parent **RadTreeView** object has its **CheckBoxes** property set to **True**, **RadTreeView** automatically displays a checkbox next to each Node. Set this property to **False** for Nodes that do not need to display a checkbox.

* **Checked (RadTreeNode):** If the checkbox mode is turned on, this property shows whether the Node is checked or not.


