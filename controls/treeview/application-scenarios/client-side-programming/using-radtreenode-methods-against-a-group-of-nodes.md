---
title: Using RadTreeNode Methods Against а Group of Nodes
page_title: Using RadTreeNode Methods Against а Group of Nodes | RadTreeView for ASP.NET AJAX Documentation
description: Using RadTreeNode Methods Against а Group of Nodes
slug: treeview/application-scenarios/client-side-programming/using-radtreenode-methods-against-a-group-of-nodes
tags: using,radtreenode,methods,against,а,group,of,nodes
published: True
position: 4
---

# Using RadTreeNode Methods Against а Group of Nodes



## 

To run [RadTreeNode]({%slug treeview/client-side-programming/objects/radtreenode%}) methods against every node in a group, iterate the [RadTreeNodeCollection]({%slug treeview/client-side-programming/objects/radtreenodecollection%}) and call the method for every [RadTreeNode]({%slug treeview/client-side-programming/objects/radtreenode%}) instance. For example, to check all nodes in a tree the RadTreeView get_allNodes() method returns the collection of all nodes, the nodes are iterated and set_checked(true) is called for every node instance. This same general pattern can be followed for all kinds of operations against collections of nodes.

````JavaScript
	
	    <script type="text/javascript">
	        function CheckAll() {
	            var tree = $find("RadTreeView1");
	            var nodes = tree.get_allNodes();
	            for (var i = 0; i < nodes.length; i++) {
	                nodes[i].set_checked(true);
	            }
	        }
	
	    </script>
	
````



# See Also

 * [RadTreeView]({%slug treeview/client-side-programming/objects/radtreeview%})

 * [RadTreeNodeCollection]({%slug treeview/client-side-programming/objects/radtreenodecollection%})

 * [RadTreeNode]({%slug treeview/client-side-programming/objects/radtreenode%})
