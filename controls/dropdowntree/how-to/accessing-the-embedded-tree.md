---
title: Accessing the Embedded Tree
page_title: Accessing the Embedded Tree | RadDropDownTree for ASP.NET AJAX Documentation
description: Accessing the Embedded Tree
slug: dropdowntree/how-to/accessing-the-embedded-tree
tags: accessing,the,embedded,tree
published: True
position: 0
---

# Accessing the Embedded Tree



When creating the RadDropDownTree control we embedded the RadTreeView control in the dropdown. By using the properties and methods described below you can easily access the RadTreeView control on the client and server side.

>tip Note that once you have access to the tree there might be unexpected behavior of the control. Since we use the RadTreeView control as embedded tree it is also important to clarify that not all scenarios that can be implemented with the RadTreeView control are supported for the RadDropDownTree. Accessing the embedded tree is available with the **Q2 2013 SP1** (version 2013.2.717 of the RadControls.)
>


## Server side

In order to access the tree in the dropdown on the server side you will need to use the **EmbeddedTree** property. It provides reference to the embedded tree and you can easily use all of the properties and methods that are exposed with the tree control. In case the checkbox property of the RadDropDownTree is enabled you will need to also use the **SyncEmbeddedTree()** method of the RadDropDownTree to create entries in the entries area. Thus, you are synchronizing the tree in the dropdown with the entry area box. Here is an example demonstrating how this looks in code behind:







````C#

protected void Page_Load(object sender, EventArgs e)
{
    RadDropDownTree1.EmbeddedTree.Nodes.FindNodeByText("Node1").Checked = true;
    RadDropDownTree1.SyncEmbeddedTree(); 

}

````
````VB.NET
	
Protected Sub Page_Load(sender As Object, e As EventArgs) Handles Me.Load

    RadDropDownTree1.EmbeddedTree.Nodes.FindNodeByText("Node1").Checked = True
    RadDropDownTree1.SyncEmbeddedTree()

End Sub
	
````


## Client side

To access the tree object from the client side you need to use the **get_embeddedTree()** as demonstrated below:

````ASPNET

<script>
	 function pageLoad() {
		var dropdowntree1 = $find("RadDropDownTree1");
		var tree = dropdowntree1.get_embeddedTree();
		var node1 = tree.get_nodes().getNode(0);
	}
</script>

````

