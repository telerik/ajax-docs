---
title: NodeCreated
page_title: NodeCreated | UI for ASP.NET AJAX Documentation
description: NodeCreated
slug: treeview/server-side-programming/events/nodecreated
tags: nodecreated
published: True
position: 6
---

# NodeCreated



## 

The NodeCreated event fires when new Nodes are created and added to the RadTreeView. The __RadTreeNodeEventArgs__ provides a reference to the newly created Node.



````C#
	     
		protected void RadTreeView1_NodeCreated(object sender, Telerik.Web.UI.RadTreeNodeEventArgs e)
	    {    
	        e.Node.Text = "NodeCreated fired";
	    }
				
````
````VB.NET
	     
	    Protected Sub RadTreeView1_NodeCreated(ByVal sender As Object, ByVal e As Telerik.Web.UI.RadTreeNodeEventArgs)
	        e.Node.Text = "NodeCreated fired"
	    End Sub
	
````


# See Also

 * [Overview]({%slug treeview/server-side-programming/events/overview%})

 * [NodeCheck]({%slug treeview/server-side-programming/events/nodecheck%})

 * [NodeClick]({%slug treeview/server-side-programming/events/nodeclick%})

 * [NodeCollapse]({%slug treeview/server-side-programming/events/nodecollapse%})

 * [NodeDataBound]({%slug treeview/server-side-programming/events/nodedatabound%})

 * [NodeDrop]({%slug treeview/server-side-programming/events/nodedrop%})

 * [NodeEdit]({%slug treeview/server-side-programming/events/nodeedit%})

 * [NodeExpand]({%slug treeview/server-side-programming/events/nodeexpand%})
