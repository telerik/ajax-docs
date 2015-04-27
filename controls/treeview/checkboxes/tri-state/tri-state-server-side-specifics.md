---
title: Tri-State server-side specifics
page_title: Tri-State server-side specifics | RadTreeView for ASP.NET AJAX Documentation
description: Tri-State server-side specifics
slug: treeview/checkboxes/tri-state/tri-state-server-side-specifics
tags: tri-state,server-side,specifics
published: True
position: 1
---

# Tri-State server-side specifics



## 

The RadTreeNode class exposes the read-only **CheckState**property of type **TreeNodeCheckState** which represents the current state of the Node's CheckBox.



**TreeNodeCheckState** is an enum type and has the following possible values:

* **Checked**

* **Indeterminate**

* **Unchecked**



If a Node's CheckBox is clicked the server-side **NodeCheck** event fires only for the clicked Node regardless of the **CheckChildNodes** property of RadTreeView.
