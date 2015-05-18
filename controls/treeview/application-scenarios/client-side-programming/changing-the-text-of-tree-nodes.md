---
title: Changing the Text of Tree Nodes
page_title: Changing the Text of Tree Nodes | RadTreeView for ASP.NET AJAX Documentation
description: Changing the Text of Tree Nodes
slug: treeview/application-scenarios/client-side-programming/changing-the-text-of-tree-nodes
tags: changing,the,text,of,tree,nodes
published: True
position: 9
---

# Changing the Text of Tree Nodes



## 

The client-side API of Telerik RadTreeView for ASP.NET AJAX provides the **get_textElement()** function that returns the instance of the text element of a particular node.

For example, the following JavaScript changes the first node of the TreeView to "new text":

````JavaScript
//RadTreeView1 is the server-side treeview object
var tree = $find("<%= RadTreeView1.ClientID %>");
tree.get_nodes().getNode(0).get_textElement().innerHTML = "new text"; 
````



>note The changes however will not be persisted after post-back.
>


# See Also

 * [RadTreeView]({%slug treeview/client-side-programming/objects/radtreeview%})

 * [RadTreeNodeCollection]({%slug treeview/client-side-programming/objects/radtreenodecollection%})

 * [RadTreeNode]({%slug treeview/client-side-programming/objects/radtreenode%})
