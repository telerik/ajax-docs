---
title: Expand Parent Nodes
page_title: Expand Parent Nodes - RadTreeView
description: Check our Web Forms article about Expand Parent Nodes.
slug: treeview/application-scenarios/client-side-programming/expand-parent-nodes
tags: expand,parent,nodes
published: True
position: 15
---

# Expand Parent Nodes



## 

To expand the parent Nodes of a certain Node, you could use the following approach:

````JavaScript
function pageLoad()
{
     var tree = $find("<%= RadTreeView1.ClientID %>");
     var node = tree.findNodeByText("The Text Of The Needed Node");
     // or
     //var node = tree.findNodeByValue("The Value Of The Needed Node");  
     
     node = node.get_parent();
 
     while(node != null)
    {
      if (node.expand)
      {
       node.expand();
      }
  
     node = node.get_parent();
    }
}
````


