---
title: Tri-State server-side specifics
page_title: Tri-State server-side specifics | UI for ASP.NET AJAX Documentation
description: Tri-State server-side specifics
slug: treeview/checkboxes/tri-state/tri-state-server-side-specifics
tags: tri-state,server-side,specifics
published: True
position: 1
---

# Tri-State server-side specifics



## 

The RadTreeNode class exposes the read-only __CheckState__property of type __TreeNodeCheckState__ which represents the current state of the Node's CheckBox.



__TreeNodeCheckState__ is an enum type and has the following possible values:

* __Checked__

* __Indeterminate__

* __Unchecked__



If a Node's CheckBox is clicked the server-side __NodeCheck__ event fires only for the clicked Node regardless of the __CheckChildNodes__ property of RadTreeView.
