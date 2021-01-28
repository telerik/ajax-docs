---
title: RadTreeNodeCollection
page_title: RadTreeNodeCollection - RadTreeView
description: Check our Web Forms article about RadTreeNodeCollection.
slug: treeview/client-side-programming/objects/radtreenodecollection
tags: radtreenodecollection
published: True
position: 2
---

# RadTreeNodeCollection



The table below lists the most important functions of the client-side **RadTreeNodeCollection** object. The **RadTreeNodeCollection** object can be accessed using the **RadTreeView** **get_nodes()** function.



| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| **add** |RadTreeNode|none|Adds a child Node to the Nodes collection of a Node. (see **Example 1**)|
|  **insert**  | int, RadTreeNode | none | Inserts a Node at the position defined by the first (index) parameter. The Node is inserted in the Nodes collection of a Node. (see **Example 2**)|
|  **remove**  | RadTreeNode | none | Removes a child Node from the Nodes collection of a Node. (see **Example 3**)|
|  **removeAt**  | int | none | Removes the Node at the specified index. (see **Example 4**)|
|  **clear**  | none | none | Removes all Nodes from a Node collection. (see **Example 5**)|
|  **getNode**  | int | RadTreeNode | Gets the Node from the Nodes collection residing at the index defined by the parameter passed to the function. (see **Example 6**)|
|  **indexOf**  | RadTreeNode | int | Gets the position of the Node within the Nodes collection. (see **Example 6**)|
|  **get_count**  | none | int | Gets the count of the Nodes in the Nodes collection of a Node. (see **Example 7**)|


>caption Example 1: Demonstrates the usage of the add method
````JavaScript
function AddNode() {
    var tree = $find("<%= RadTreeView1.ClientID %>");
    tree.trackChanges();
    var node = new Telerik.Web.UI.RadTreeNode();
    node.set_text("New Node");
    tree.get_nodes().add(node);
    tree.commitChanges();
}		
````

>caption Example 2: Demonstrates the usage of the insert method
````JavaScript
function InsertNode() {
    var tree = $find("<%= RadTreeView1.ClientID %>");
    tree.trackChanges();
    var node = new Telerik.Web.UI.RadTreeNode();
    node.set_text("New Node");
    tree.get_nodes().insert(0, node);
    tree.commitChanges();
}		
````

>caption Example 3: Demonstrates the usage of the remove method
````JavaScript
function RemoveNode() {
    var tree = $find("<%= RadTreeView1.ClientID %>");
    var node = tree.findNodeByText("New Node");
    tree.trackChanges();
    node.get_parent().get_nodes().remove(node);
    tree.commitChanges();
}		
````

>caption Example 4: Demonstrates the usage of the removeAt method
````JavaScript
function RemoveNode() {
    var tree = $find("<%= RadTreeView1.ClientID %>");
    var node = tree.findNodeByText("New Node");
    tree.trackChanges();
    node.get_parent().get_nodes().removeAt(0);
    tree.commitChanges();
}		
````

>caption Example 5: Demonstrates the usage of the clear method
````JavaScript
function RemoveNode() {
    var tree = $find("<%= RadTreeView1.ClientID %>");
    var node = tree.findNodeByText("New Node");
    tree.trackChanges();
    node.get_parent().get_nodes().clear();
    tree.commitChanges();
}		
````

>caption Example 6: Demonstrates the usage of the getNode method
````JavaScript
function GetNode() {
    var tree = $find("<%= RadTreeView1.ClientID %>");
    var node = tree.get_nodes().getNode(0);
    node.set_text("My Text");
}	
````

>caption Example 6: Demonstrates the usage of the indexOf method
````JavaScript
function IndexOf() {
    var tree = $find("<%= RadTreeView1.ClientID %>");
    var node = tree.get_nodes().getNode(0);
    var index = tree.get_nodes().indexOf(node);
    node.set_text("index: " + index);
}		
````

>caption Example 7: Demonstrates the usage of the get_count method
````JavaScript
function GetCount() {
    var tree = $find("<%= RadTreeView1.ClientID %>");
    var node = tree.get_nodes().getNode(0);
    var count = node.get_nodes().get_count();
    node.set_text("Count: " + count);
}	
````

