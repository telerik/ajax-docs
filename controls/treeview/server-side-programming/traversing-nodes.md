---
title: Traversing Nodes
page_title: Traversing Nodes - RadTreeView
description: Check our Web Forms article about Traversing Nodes.
slug: treeview/server-side-programming/traversing-nodes
tags: traversing,nodes
published: True
position: 1
---

# Traversing Nodes



## 

To traverse Nodes, iterate the **Nodes** collection of the **TreeView** or **Nodes** collection of a Node. Each member of the collection will be of **RadTreeNode** type that will allow access to **Text**, **Value** and other properties. Use the **GetAllNodes()** method to return Nodes from the entire Tree at one time.



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

