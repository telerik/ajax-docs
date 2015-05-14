---
title: NodeExpand
page_title: NodeExpand | RadTreeView for ASP.NET AJAX Documentation
description: NodeExpand
slug: treeview/server-side-programming/events/nodeexpand
tags: nodeexpand
published: True
position: 2
---

# NodeExpand



## 

When the user clicks the plus button next to a Node that has child Nodes, the **NodeExpand** event fires. Use the **RadTreeNodeEventArgs.Node** property to get or set the clicked-on Node properties. The Node **ExpandMode** property must be set to **ServerSide, ServerSideCallback or WebService** for this event to fire.



````C#
protected void RadTreeView1_NodeExpand(object sender, Telerik.Web.UI.RadTreeNodeEventArgs e)
{
    for (int i = 1; i <= 10; i++)
    {
        e.Node.Nodes.Add(new Telerik.Web.UI.RadTreeNode("Child Node " + i.ToString()));
    }
    e.Node.ExpandMode = Telerik.Web.UI.TreeNodeExpandMode.ClientSide;
} 		
````
````VB.NET
Protected Sub RadTreeView1_NodeExpand(ByVal sender As Object, ByVal e As Telerik.Web.UI.RadTreeNodeEventArgs)
    Dim i As Integer = 1
    While i <= 10
        e.Node.Nodes.Add(New Telerik.Web.UI.RadTreeNode("Child Node " + i.ToString()))
        System.Math.Max(System.Threading.Interlocked.Increment(i), i - 1)
    End While
    e.Node.ExpandMode = Telerik.Web.UI.TreeNodeExpandMode.ClientSide
End Sub
````


# See Also

 * [Server-side events Overview]({%slug treeview/server-side-programming/events/overview%})

 * [NodeCheck]({%slug treeview/server-side-programming/events/nodecheck%})

 * [NodeClick]({%slug treeview/server-side-programming/events/nodeclick%})

 * [NodeCollapse]({%slug treeview/server-side-programming/events/nodecollapse%})

 * [NodeCreated]({%slug treeview/server-side-programming/events/nodecreated%})

 * [NodeDataBound]({%slug treeview/server-side-programming/events/nodedatabound%})

 * [NodeDrop]({%slug treeview/server-side-programming/events/nodedrop%})

 * [NodeEdit]({%slug treeview/server-side-programming/events/nodeedit%})
