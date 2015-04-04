---
title: NodeEdit
page_title: NodeEdit | UI for ASP.NET AJAX Documentation
description: NodeEdit
slug: treeview/server-side-programming/events/nodeedit
tags: nodeedit
published: True
position: 3
---

# NodeEdit



## 

The __NodeEdit__ event fires when the user clicks the __Enter__ key after [editing a Node]({%slug treeview/accessibility-and-internationalization/keyboard-support%}). The __RadTreeNodeEditEventArgs__ passed to the event handler provides a reference to the edited Node and a __Text__ property. Set the RadTreeView __AllowNodeEditing__ to enable the ability to edit. Edited nodes don't automatically persist user changes.

In the example below the "old" text is represented by e.Node.Text and the "new" text entered by the user as e.Text. The new text is assigned to the Node.



````C#
	     
		protected void RadTreeView1_NodeEdit(object sender, Telerik.Web.UI.RadTreeNodeEditEventArgs e)
	    {    
	        e.Node.Text = e.Text;
	    }
				
````
````VB.NET
	     
	    Protected Sub RadTreeView1_NodeEdit(ByVal sender As Object, ByVal e As Telerik.Web.UI.RadTreeNodeEditEventArgs)
	        e.Node.Text = e.Text
	    End Sub
	
````


# See Also

 * [Overview]({%slug treeview/server-side-programming/events/overview%})

 * [NodeCheck]({%slug treeview/server-side-programming/events/nodecheck%})

 * [NodeClick]({%slug treeview/server-side-programming/events/nodeclick%})

 * [NodeCollapse]({%slug treeview/server-side-programming/events/nodecollapse%})

 * [NodeCreated]({%slug treeview/server-side-programming/events/nodecreated%})

 * [NodeDataBound]({%slug treeview/server-side-programming/events/nodedatabound%})

 * [NodeDrop]({%slug treeview/server-side-programming/events/nodedrop%})

 * [NodeExpand]({%slug treeview/server-side-programming/events/nodeexpand%})
