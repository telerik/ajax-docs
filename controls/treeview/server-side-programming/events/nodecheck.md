---
title: NodeCheck
page_title: NodeCheck | UI for ASP.NET AJAX Documentation
description: NodeCheck
slug: treeview/server-side-programming/events/nodecheck
tags: nodecheck
published: True
position: 9
---

# NodeCheck



## 

When the user selects or unselects a Node checkbox, the __NodeCheck__ event fires. The __RadTreeNodeEventArgs__ has a __Node__ property that can be used to get the current __Checked__ property value of that Node.

>tabbedCode

````C#
	     
		protected void RadTreeView1_NodeCheck(object sender, Telerik.Web.UI.RadTreeNodeEventArgs e)
	    {    
	        e.Node.Text = e.Node.Checked.ToString();
	    }
				
````
````VB.NET
	     
	    Protected Sub RadTreeView1_NodeCheck(ByVal sender As Object, ByVal e As Telerik.Web.UI.RadTreeNodeEventArgs)
	        e.Node.Text = e.Node.Checked.ToString()
	    End Sub
	
````
>end

# See Also

 * [Overview]({%slug treeview/server-side-programming/events/overview%})

 * [NodeClick]({%slug treeview/server-side-programming/events/nodeclick%})

 * [NodeCollapse]({%slug treeview/server-side-programming/events/nodecollapse%})

 * [NodeCreated]({%slug treeview/server-side-programming/events/nodecreated%})

 * [NodeDataBound]({%slug treeview/server-side-programming/events/nodedatabound%})

 * [NodeDrop]({%slug treeview/server-side-programming/events/nodedrop%})

 * [NodeEdit]({%slug treeview/server-side-programming/events/nodeedit%})

 * [NodeExpand]({%slug treeview/server-side-programming/events/nodeexpand%})
