---
title: NodeClick
page_title: NodeClick | UI for ASP.NET AJAX Documentation
description: NodeClick
slug: treeview/server-side-programming/events/nodeclick
tags: nodeclick
published: True
position: 8
---

# NodeClick



## 

When the user clicks a Node, the __NodeClick__ event fires. Use the __RadTreeNodeEventArgs.____Node__ property to get or set the clicked-on Node properties.

>tabbedCode

````C#
	     
		protected void RadTreeView1_NodeClick(object sender, Telerik.Web.UI.RadTreeNodeEventArgs e)
	    {    
	        e.Node.Text = "NodeClick fired for this node";
	    }
				
````



````VB.NET
	     
	    Protected Sub RadTreeView1_NodeClick(ByVal sender As Object, ByVal e As Telerik.Web.UI.RadTreeNodeEventArgs)
	        e.Node.Text = "NodeClick fired for this node"
	    End Sub
	
````


>end

# See Also

 * [Overview]({%slug treeview/server-side-programming/events/overview%})

 * [NodeCheck]({%slug treeview/server-side-programming/events/nodecheck%})

 * [NodeCollapse]({%slug treeview/server-side-programming/events/nodecollapse%})

 * [NodeCreated]({%slug treeview/server-side-programming/events/nodecreated%})

 * [NodeDataBound]({%slug treeview/server-side-programming/events/nodedatabound%})

 * [NodeDrop]({%slug treeview/server-side-programming/events/nodedrop%})

 * [NodeEdit]({%slug treeview/server-side-programming/events/nodeedit%})

 * [NodeExpand]({%slug treeview/server-side-programming/events/nodeexpand%})
