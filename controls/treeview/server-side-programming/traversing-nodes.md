---
title: Traversing Nodes
page_title: Traversing Nodes | UI for ASP.NET AJAX Documentation
description: Traversing Nodes
slug: treeview/server-side-programming/traversing-nodes
tags: traversing,nodes
published: True
position: 1
---

# Traversing Nodes



## 

To traverse Nodes, iterate the __Nodes__ collection of the TreeView or __Nodes__ collection of a Node. Each member of the collection will be of __RadTreeNode__ type that will allow access to __Text__, __Value__ and other properties. Use the __GetAllNodes()__ method to return Nodes from the entire Tree at one time.

>tabbedCode

````C#
	foreach (RadTreeNode node in RadTreeView1.Nodes)
	{
	   tbResults.Text += node.Text + System.Environment.NewLine;
	}
	foreach (RadTreeNode node in RadTreeView1.GetAllNodes())
	{
	   tbResults.Text += node.Text + System.Environment.NewLine;
	} 		
````



````VB.NET
	For Each node As RadTreeNode In RadTreeView1.Nodes
	 tbResults.Text += node.Text + System.Environment.NewLine
	Next
	For Each node As RadTreeNode In RadTreeView1.GetAllNodes()
	 tbResults.Text += node.Text + System.Environment.NewLine
	Next 		
````


>end
