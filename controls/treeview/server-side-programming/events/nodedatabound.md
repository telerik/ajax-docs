---
title: NodeDataBound
page_title: NodeDataBound | RadTreeView for ASP.NET AJAX Documentation
description: NodeDataBound
slug: treeview/server-side-programming/events/nodedatabound
tags: nodedatabound
published: True
position: 5
---

# NodeDataBound



## 

The **NodeDataBound** fires for every Node that is bound to data. Use the **RadTreeNodeEventArgs** to access the properties of the bound Node. Use the Node's **DataItem** property to access the underlying object or data row being bound to.

Binding to a database:



````C#
	     
		
	    protected void RadTreeView1_NodeDataBound(object sender, RadTreeNodeEventArgs e) 
	    {     
	        e.Node.ToolTip = (e.Node.DataItem as DataRowView)["Description"].ToString(); 
	    }
				
````
````VB.NET
	    Protected Sub RadTreeView1_NodeDataBound(ByVal sender As Object, ByVal e As RadTreeNodeEventArgs)
	        e.Node.ToolTip = (TryCast(e.Node.DataItem, DataRowView))("Description").ToString()
	    End Sub
````


Binding to XML datasource:



````C#
	     
		protected void RadTreeView_OnNodeDataBound(object sender, RadTreeNodeEventArgs e)
	    { 
	        XmlElement element = (XmlElement)e.Node.DataItem;        
	        e.Node.ToolTip = element.GetAttribute("ToolTip"); 
	        e.Node.Attributes["NodeType"] = element.GetAttribute("NodeType");        
	        e.Node.Attributes["LevelID"] = element.GetAttribute("LevelID");
	    }
				
````
````VB.NET
	    Protected Sub RadTreeView_OnNodeDataBound(ByVal sender As Object, ByVal e As RadTreeNodeEventArgs)
	        Dim element As XmlElement = DirectCast(e.Node.DataItem, XmlElement)
	        e.Node.ToolTip = element.GetAttribute("ToolTip")
	        e.Node.Attributes("NodeType") = element.GetAttribute("NodeType")
	        e.Node.Attributes("LevelID") = element.GetAttribute("LevelID")
	    End Sub
````


# See Also

 * [Overview]({%slug treeview/server-side-programming/events/overview%})

 * [NodeCheck]({%slug treeview/server-side-programming/events/nodecheck%})

 * [NodeClick]({%slug treeview/server-side-programming/events/nodeclick%})

 * [NodeCollapse]({%slug treeview/server-side-programming/events/nodecollapse%})

 * [NodeCreated]({%slug treeview/server-side-programming/events/nodecreated%})

 * [NodeDrop]({%slug treeview/server-side-programming/events/nodedrop%})

 * [NodeEdit]({%slug treeview/server-side-programming/events/nodeedit%})

 * [NodeExpand]({%slug treeview/server-side-programming/events/nodeexpand%})
