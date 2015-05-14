---
title: Overview
page_title: CheckBoxes Overview | RadTreeView for ASP.NET AJAX Documentation
description: Overview
slug: treeview/checkboxes/overview
tags: overview
published: True
position: 0
---

# CheckBoxes Overview



## 

**RadTreeView** provides checkboxes displayed next to each node. Enable this behavior by setting the **CheckBoxes** property of the **RadTreeView** to **True**. Disable the checkbox for a particular node by setting the **Checkable** property of the Node to **False**. Retrieve all checked nodes on postback by using the **CheckedNodes** property of the **RadTreeView**; **CheckedNodes** returns a generic list of **RadTreeNode** objects. Use the **NodeCheck** server event to automatically postback when a Node is checked. If you need to disable postback for certain Nodes, you can use the **OnClientNodeChecking** event and call **set_cancel(true)** in the event handler.

* See the [Using Checkboxes Server-Side]({%slug treeview/checkboxes/server-side%}) topic for more information on configuring checkbox behavior and manipulating checkboxes on postback.

* See the [Using Checkboxes Client-Side]({%slug treeview/checkboxes/client-side%}) topic for more information on configuring checkbox behavior and responding instantly to check events on the client without postback.

For topics covering common checkbox scenarios, see the following:

* To see how to check all child Nodes of a clicked parent node, see the [Checking All Child Nodes]({%slug treeview/application-scenarios/checkboxes/check-uncheck-all-child-nodes%}) topic. This topic is also useful for setting a property for all members of a client-side Nodes collection.

* To have checkboxes behave like radio buttons (i.e. only one checkbox can be checked at a time), see the [Checkbox RadioButton Behavior]({%slug treeview/application-scenarios/checkboxes/checkboxes-radiobutton-behavior%}) topic.

* [Unchecking Parent Nodes when a Child Node has been unchecked]({%slug treeview/application-scenarios/checkboxes/uncheck-parent-nodes-when-a-child-node-is-unchecked%}).

To see a live example of checkbox support for RadTreeView visit the [CheckBox Support live demo](http://demos.telerik.com/aspnet-ajax/TreeView/Examples/Functionality/CheckBoxes/DefaultCS.aspx).


