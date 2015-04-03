---
title: Tri-Sate client-side specifics
page_title: Tri-Sate client-side specifics | UI for ASP.NET AJAX Documentation
description: Tri-Sate client-side specifics
slug: treeview/checkboxes/tri-state/tri-sate-client-side-specifics
tags: tri-sate,client-side,specifics
published: True
position: 3
---

# Tri-Sate client-side specifics



## Check State

The RadTreeNode client-side object exposes the __get_checkState__function which returns __TreeNodeCheckState__ which represents the current state of the Node's CheckBox.

__TreeNodeCheckState__ can be:

* __0 - Unchecked__

* __1 - Checked__

* __2 - Indeterminate__

## Rendering

Tri-State CheckBoxes are actually rendered as <span> elements with predefined CSS classes. Images, defined in these CSS classes as backgrounds to the <span> elements represent the three states.


>caption 

![RadTreeView Tri-State CheckBoxes Rendering](images/treeview_tristatecheckboxesrenderingpng.png)

There are three CSS classes for each of the three states of the CheckBoxes: __rtChecked__, __rtUnchecked__ and __rtIndeterminate__.

To get the <span> element of a Node at the client use the __get_checkBoxElement()__ function as you would normally do to get the real CheckBox element in non-Tri-State CheckBoxes mode.

## Events

If a Node's CheckBox is clicked the client-side __OnClientNodeClicking__ and __OnClientNodeClicked__ events fire only for the clicked Node regardless of the __CheckChildNodes__ property of RadTreeView.
