---
title: CheckBoxes
page_title: CheckBoxes | UI for ASP.NET AJAX Documentation
description: CheckBoxes
slug: dropdowntree/functionality/checkboxes
tags: checkboxes
published: True
position: 0
---

# CheckBoxes



## CheckBoxes

__RadDropDownTree__ has a built-in property that enables easy usage of the checkboxes. The default value of CheckBoxes property is __None__ and there are three states that can be set to the nodes of the tree in the dropdown:

* __SingleCheck__ - Enables checking of nodes without effecting its child or parent nodes like in "CheckChildNodes" and "TriState".

* __CheckChildNodes__ - Checks all child and sub child nodes (if there are any) of a single node.

* __TriState__ - When set in the DropDownTree it allows for Nodes' CheckBoxes to have an additional, third state called Indeterminate. A Node's CheckBox is in Indeterminate state if it has both Checked and Unchecked CheckBoxes of child Nodes.

You can also use the __ShowCheckAll__ properties that is available with the ButtonSettings as described in the [ButtonSettings article]({%slug dropdowntree/functionality/button-settings%}).

## CheckNodeOnClick

From Q1 2014 __RadDropDownTree__ has a built-in property called __CheckNodeOnClick__. Its default value is set to __false__ but when it is set to __true__ it allow checking the checkbox when clicking on the node itself. This functionality can be quite handy in mobile scenarios when touching the checkbox may be tricky for the users.

# See Also

 * [RadDropDownTree CheckBoxes](http://demos.telerik.com/aspnet-ajax/dropdowntree/examples/functionality/checkboxes/defaultcs.aspx)
