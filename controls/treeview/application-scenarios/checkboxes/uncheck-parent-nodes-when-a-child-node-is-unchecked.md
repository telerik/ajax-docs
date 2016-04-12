---
title: Uncheck Parent Nodes When a Child Node Is Unchecked
page_title: Uncheck Parent Nodes When a Child Node Is Unchecked | RadTreeView for ASP.NET AJAX Documentation
description: Uncheck Parent Nodes When a Child Node Is Unchecked
slug: treeview/application-scenarios/checkboxes/uncheck-parent-nodes-when-a-child-node-is-unchecked
tags: uncheck,parent,nodes,when,a,child,node,is,unchecked
published: True
position: 2
---

# Uncheck Parent Nodes When a Child Node Is Unchecked



## 

To uncheck parent Nodes when any child Node has been unchecked, traverse from the child Node upward toward the root Node, unchecking Nodes as you go. The example below extracts the current Node (the child Node) and if it is unchecked, walks back through the Node hierarchy moving from parent to parent. Also node the condition of the **while()** loop. The condition checks that the parent has a **set_checked** function. If **set_checked** is undefined, we are at the root Node (the treeview itself does not have a **set_checked** function).

````JavaScript
function clientNodeChecked(sender, eventArgs) {
    var node = eventArgs.get_node();
    if (!node.get_checked()) {
        while (node.get_parent().set_checked != null) {
            node.get_parent().set_checked(false);
            node = node.get_parent();
        }
    }
}
````
````ASPNET
<telerik:RadTreeView RenderMode="Lightweight" ID="RadTreeView1" runat="server" CheckBoxes="True" OnClientNodeChecked="clientNodeChecked">
</telerik:RadTreeView>
````


