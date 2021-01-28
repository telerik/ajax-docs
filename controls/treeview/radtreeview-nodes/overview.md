---
title: Overview
page_title: RadTreeView Nodes Overview
description: Check our Web Forms article about Overview.
slug: treeview/radtreeview-nodes/overview
tags: overview
published: True
position: 0
---

# RadTreeView Nodes Overview



## The Properties of RadTreeView nodes

**RadTreeNode** objects have a few important properties, which are listed below:

* **Text** is the string that the user sees displayed in each node of the tree.

* **ToolTip** is a string that appears in the tooltip window when the user hovers the mouse over a node in the tree.
>note Setting the tooltip can enable an accessibility feature: Special accessibility readers like JAWS can pronounce the tooltip of the highlighted item.
>

* **Value** is the value associated with the node. It determines the value of the **RadTreeNode** **Value** property.

* **Selected** lets you specify which node is initially selected when the **RadTreeView** first appears.
>note If the **MultipleSelect** property of **RadTreeView** is set to **False** (the default), only one node can be selected at a time. If you set Selected to True for a node, the Selected property of all other nodes is automatically set to False.
>

* **Enabled** determines whether the user can select the node.

* **CssClass, DisabledCssClass, HoveredCssClass, SelectedCss** are the names of CSS styles to be applied to the TreeView node depending on its state. The style can be declared in the CSS file of the applied [Skin]({%slug ribbonbar/appearance-and-styling/skins%}).
>note You can also customize the appearance of items using [templates]({%slug treeview/templates/overview%}).
>

* **Checkable** determines if a node displays a checkbox. This property is used in conjunction with the **RadTreeView** **CheckBoxes** property which enables checkboxes for the entire tree. **Checked** determines if the checkbox is currently checked. See the [Checkboxes Overview]({%slug treeview/checkboxes/overview%}) topic for more information.

* **Category** allows the node to be a member of an arbitrary group, for example "Customers", "Employees" or "Products".

* **NavigateUrl** is a web address that will be navigated to when the node is clicked. Target supports standard HTML targets (i.e. *_self*, *_blank*, *_top*, *_parent*). For example, set the NavigateUrl to https://www.telerik.com and Target to *_blank* to display the Telerik site in a new browser window.

* **Level** is an integer value that indicates the node distance from the root node: the root node Level property is zero, children of the root nodes have a level property of "1" and so on.

In addition to the built-in properties, you can add your own [Custom Attributes]({%slug treeview/custom-attributes/custom-attributes-overview%}) to TreeView nodes to expand their functionality.

## Populating RadTreeView

There are a number of ways you can control the nodes that **RadTreeView** holds. You can:

* [Specify the nodes statically]({%slug treeview/radtreeview-nodes/creating-node-structure-in-line%}) at design time.

* [Bind the RadTreeView]({%slug treeview/data-binding/overview%}) to a data source.

* [Add, remove, and edit the nodes of RadTreeView]({%slug treeview/radtreeview-nodes/working-with-nodes-at-the-server%}) in server-side code.

* [Add, remove, and edit the nodes of RadTreeView]({%slug treeview/radtreeview-nodes/working-with-nodes-at-the-client%}) in client-side code.

* Let the RadTreeView [load nodes on demand]({%slug treeview/load-on-demand/overview%}) to improve performance.
