---
title: NodeCollapse
page_title: NodeCollapse | RadTreeView for ASP.NET AJAX Documentation
description: NodeCollapse
slug: treeview/server-side-programming/events/nodecollapse
tags: nodecollapse
published: True
position: 7
---

# NodeCollapse



## 

When the user clicks the minus button next to a Node that has child Nodes, the **NodeCollapse** event fires. Use the **RadTreeNodeEventArgs.Node** property to get or set the collapsed Node properties. The Node **ExpandMode** property must be set to **ServerSide** for this event to fire.



````C#
protected void RadTreeView1_NodeCollapse(object sender, Telerik.Web.UI.RadTreeNodeEventArgs e)
{    
    e.Node.Text = "NodeCollapse fired for this node";
}
````
````VB.NET
Protected Sub RadTreeView1_NodeCollapse(ByVal sender As Object, ByVal e As Telerik.Web.UI.RadTreeNodeEventArgs)
    e.Node.Text = "NodeCollapse fired for this node"
End Sub
````


>tip Every collapse of a node **causes a postback** if the **ExpandMode** is set to **ServerSide**.
>


# See Also

 * [Server-side events Overview]({%slug treeview/server-side-programming/events/overview%})

 * [NodeCheck]({%slug treeview/server-side-programming/events/nodecheck%})

 * [NodeClick]({%slug treeview/server-side-programming/events/nodeclick%})

 * [NodeCreated]({%slug treeview/server-side-programming/events/nodecreated%})

 * [NodeDataBound]({%slug treeview/server-side-programming/events/nodedatabound%})

 * [NodeDrop]({%slug treeview/server-side-programming/events/nodedrop%})

 * [NodeEdit]({%slug treeview/server-side-programming/events/nodeedit%})

 * [NodeExpand]({%slug treeview/server-side-programming/events/nodeexpand%})
