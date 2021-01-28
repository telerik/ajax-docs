---
title: NodeCheck
page_title: NodeCheck - RadTreeView
description: Check our Web Forms article about NodeCheck.
slug: treeview/server-side-programming/events/nodecheck
tags: nodecheck
published: True
position: 9
---

# NodeCheck



## 

When the user selects or unselects a Node checkbox, the **NodeCheck** event fires. The **RadTreeNodeEventArgs** has a **Node** property that can be used to get the current **Checked** property value of that Node.



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


# See Also

 * [Server-side events Overview]({%slug treeview/server-side-programming/events/overview%})

 * [NodeClick]({%slug treeview/server-side-programming/events/nodeclick%})

 * [NodeCollapse]({%slug treeview/server-side-programming/events/nodecollapse%})

 * [NodeCreated]({%slug treeview/server-side-programming/events/nodecreated%})

 * [NodeDataBound]({%slug treeview/server-side-programming/events/nodedatabound%})

 * [NodeDrop]({%slug treeview/server-side-programming/events/nodedrop%})

 * [NodeEdit]({%slug treeview/server-side-programming/events/nodeedit%})

 * [NodeExpand]({%slug treeview/server-side-programming/events/nodeexpand%})
