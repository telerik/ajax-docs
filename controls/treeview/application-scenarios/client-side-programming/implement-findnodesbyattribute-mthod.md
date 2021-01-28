---
title: Implement findNodesByAttribute Method
page_title: Implement findNodesByAttribute Method - RadTreeView
description: Check our Web Forms article about Implement findNodesByAttribute Method.
slug: treeview/application-scenarios/client-side-programming/implement-findnodesbyattribute-mthod
tags: implement,findnodesbyattribute,mthod
published: True
position: 19
---

# Implement findNodesByAttribute Method



## 

Usually, the findNode client-side methods (**findNodeByText**, **findNodeByValue**, **findNodeByAttribute**) return the first node that satisfies the search criterion.

Below is the implementation of a function which returns an **array of nodes** having the same value of a particular **attribute**:

````JavaScript
function findNodesByAttribute(tree, attribute, value) {
    var nodes = tree.get_allNodes();
    var result = [];
    for (var i = 0; i < nodes.length; i++) {
        var node = nodes[i];
        if (node.get_attributes().getAttribute(attribute) == value) {
            Array.add(result, node);
        }
    }
    return result;

}
````


Here is a simple call to that function:

````JavaScript	
var tree = $find("<%= RadTreeView1.ClientID %>");
var nodes = findNodesByAttribute(tree, "readonly", "true");

for (var i = 0; i < nodes.length; i++) {
    alert(nodes[i].get_text());
}
````





# See Also

 * [Overview]({%slug treeview/client-side-programming/overview%})

 * [RadTreeView]({%slug treeview/client-side-programming/objects/radtreeview%})
