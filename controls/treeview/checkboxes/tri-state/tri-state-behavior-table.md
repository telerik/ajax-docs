---
title: Behavior Table
page_title: Tri-State-Behavior Table | RadTreeView for ASP.NET AJAX Documentation
description: Tri-State-Behavior Table
slug: treeview/checkboxes/tri-state/tri-state-behavior-table
tags: tri-state-behavior,table
published: True
position: 2
---

# Behavior Table



## 

Due to the specifics behind the Tri-State functionality the behavior of **RadTreeView** can be different in some cases. Below is a table describing these differences:


>caption  

|  **Use Case\Properties**  |  **Behavior**  |
| ------ | ------ |
|Clicking on a Node's CheckBox|Clicking on a Node's CheckBox updates the states of its child Nodes' CheckBoxes (if they exist) to match its own: **Checked** or **Unchecked** .|
|Load-On-Demand|Added child Nodes update the state of their Parent according to their CheckBox states to one of the Tri-States: **Checked** , **Indeterminate or Unchecked** .|
|Adding Nodes at the server|Added child Nodes update the state of their Parent according to their CheckBox states to one of the Tri-States: **Checked** , **Indeterminate or Unchecked** .|
|Adding Nodes in Design-Time|Updating the state of a Node's CheckBox updates the states of its child Nodes' CheckBoxes (if they exist) to match its own: **Checked** or **Unchecked** .|
|Checking/Unchecking Nodes in HTML|The state of a parent Node's CheckBox is always determined by the states of its child Nodes' CheckBoxes (regardless of the value of its **Checked** property).|



>tip  To override this behavior, that is to determine the state of the child Node's CheckBoxes based on the state of their parent Node's CheckBox, please see the [Inherit the the Checked state of the parent Node when loading Nodes on demand]({%slug treeview/application-scenarios/checkboxes/inherit-the-the-checked-state-of-the-parent-node-in-load-on-demand%})topic.
>

