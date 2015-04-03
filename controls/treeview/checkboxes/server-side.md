---
title: Server-Side
page_title: Server-Side | UI for ASP.NET AJAX Documentation
description: Server-Side
slug: treeview/checkboxes/server-side
tags: server-side
published: True
position: 1
---

# Server-Side



## Events

* __NodeCheck__: This event fires when a Node text has been checked. The __RadTreeNodeEventArgs__event arguments' property__Node__provides a reference to the clicked Node.

## Properties

* __CheckBoxes (RadTreeView):__When set to __True__, this property displays a checkbox next to each tree Node.

* __CheckedNodes (RadTreeView):__ Gets a collection of __RadTreeNode__ objects where the check boxes have been selected.

* __Checkable (RadTreeNode):__ If the parent __RadTreeView__ object has its __CheckBoxes__ property set to __True__, RadTreeView automatically displays a checkbox next to each Node. Set this property to __False__ for Nodes that do not need to display a checkbox.

* __Checked (RadTreeNode):__ If the checkbox mode is turned on, this property shows whether the Node is checked or not.
