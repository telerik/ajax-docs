---
title: CheckBoxes
page_title: CheckBoxes - RadDropDownTree
description: Check our Web Forms article about CheckBoxes.
slug: dropdowntree/functionality/checkboxes
tags: checkboxes
published: True
position: 0
---

# CheckBoxes



## CheckBoxes

**RadDropDownTree** has a built-in property that enables easy usage of the checkboxes. The default value of CheckBoxes property is **None** and there are three states that can be set to the nodes of the tree in the dropdown:

* **SingleCheck** - Enables checking of nodes without effecting its child or parent nodes like in "CheckChildNodes" and "TriState".

* **CheckChildNodes** - Checks all child and sub child nodes (if there are any) of a single node.

* **TriState** - When set in the DropDownTree it allows for Nodes' CheckBoxes to have an additional, third state called Indeterminate. A Node's CheckBox is in Indeterminate state if it has both Checked and Unchecked CheckBoxes of child Nodes.

You can also use the **ShowCheckAll** properties that is available with the ButtonSettings as described in the [ButtonSettings article]({%slug dropdowntree/functionality/button-settings%}).

## CheckNodeOnClick

From Q1 2014 **RadDropDownTree** has a built-in property called **CheckNodeOnClick**. Its default value is set to **false** but when it is set to **true** it allow checking the checkbox when clicking on the node itself. This functionality can be quite handy in mobile scenarios when touching the checkbox may be tricky for the users.

# See Also

 * [RadDropDownTree CheckBoxes](https://demos.telerik.com/aspnet-ajax/dropdowntree/examples/functionality/checkboxes/defaultcs.aspx)
