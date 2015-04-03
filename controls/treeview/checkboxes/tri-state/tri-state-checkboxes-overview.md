---
title: Tri-State CheckBoxes Overview
page_title: Tri-State CheckBoxes Overview | UI for ASP.NET AJAX Documentation
description: Tri-State CheckBoxes Overview
slug: treeview/checkboxes/tri-state/tri-state-checkboxes-overview
tags: tri-state,checkboxes,overview
published: True
position: 0
---

# Tri-State CheckBoxes Overview



## 


>caption 

![RadTreeView Tri-State CheckBoxes Overview](images/treeview_tristatecheckboxesoverview.png)

The Tri-State CheckBox mode of RadTreeView allows for Nodes' CheckBoxes (when enabled) to have an additional, third state - __Indeterminate__. A Node's CheckBox is in __Indeterminate__state if it has both __Checked__ and __Unchecked__CheckBoxes of child Nodes.

When RadTreeView is in Tri-State CheckBox mode, a Node's CheckBox can be in either of the following states:

* __Checked -__CheckBoxes of all child Nodes are __Checked__.

* __Unchecked__ - CheckBoxes of all child Nodes are __Unchecked__.

* __Indeterminate__ - there are __Checked__and __Unchecked__child Nodes' CheckBoxes.

A CheckBox in Tri-State-enabled TreeView goes through its states in the following order:

* __Checked__ -> __Unchecked__

* __Unchecked__ -> __Checked__

* __Indeterminate__ -> __Checked__

The Tri-State CheckBox mode of RadTreeView is enabled by setting the __TriStateCheckBoxes__ property of the control to __True__. A prerequisite for this mode to work is to have enabled also __CheckBoxes__ for Nodes.

An addition to the Tri-State CheckBox mode of RadTreeView is the "Check Child Nodes" functionality. When the __CheckChildNodes__ property of RadTreeView is set to __True__and____if:

* A parent Node's CheckBox is checked then all child Nodes' CheckBoxes are also checked.

* A parent Node's CheckBox is unchecked then all child Node's CheckBoxes are also unchecked.

The __Indeterminate__ state of a Node is not persisted. That is if a Node's CheckBox is in __Indeterminate__state and is unchecked, it can no longer return in the *same*__Indeterminate__ state.



>caution Tri-State CheckBoxes are actually rendered as <span> elements with predefined CSS styles. They are not styled by the[RadFormDectorator](4F3D6E83-A8FB-4DE9-9DDD-D007366B31B9)control. For more information, please read the[Tri-Sate client-side specifics]({%slug treeview/checkboxes/tri-state/tri-sate-client-side-specifics%})topic.
>

