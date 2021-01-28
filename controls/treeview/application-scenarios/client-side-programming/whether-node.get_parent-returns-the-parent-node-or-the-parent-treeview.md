---
title: Whether Node.get_parent Returns the Parent Node or the Parent Treeview
page_title: Whether Node.get_parent Returns the Parent Node or the Parent Treeview - RadTreeView
description: Check our Web Forms article about Whether Node.get_parent Returns the Parent Node or the Parent Treeview.
slug: treeview/application-scenarios/client-side-programming/whether-node.get_parent-returns-the-parent-node-or-the-parent-treeview
tags: whether,node.get_parent,returns,the,parent,node,or,the,parent,treeview
published: True
position: 18
---

# Whether Node.get_parent Returns the Parent Node or the Parent Treeview



## 

Use the following code to check whether a node or a TreeView instance is returned by the **get_parent()** method:



````JavaScript
	     
	
	// node is root node and get_parent() returns the parent TreeView
	if (node.get_parent() == node.get_treeView())    
				
````



or test the node level for zero:



````JavaScript
//node is a root node  
if (node.get_level() == 0) 	
````




