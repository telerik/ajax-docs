---
title: Between Trees
page_title: Between Trees | RadTreeView for ASP.NET AJAX Documentation
description: Between Trees
slug: treeview/drag-and-drop/between-trees
tags: between,trees
published: True
position: 2
---

# Between Trees



## 

**RadTreeView** handles dragging to other **RadTreeViews**. Set the **EnableDragAndDrop** property of the **RadTreeView** that should allow dragging.

>note In the **OnNodeDrop** event, the **RadTreeNodeDragDropEventArgs SourceDragNode** will still be the node from the **RadTreeView** from where the node is being dragged. The **DestDragNode** will be the node in the destination TreeView. You can confirm this behavior by examining each node's **TreeView.ID** property.
>


In the example below, both **RadTreeViews** have their **EnableDragAndDrop** property set to **True**. Both **RadTreeView** controls hook their **OnNodeDrop** to the same event handler. In the screenshot for this example, the second **RadTreeView** "Tree 2" is located directly below the first. Dragging a Node from "Tree 2" to the first tree causes the Node to be moved to the destination Node's **Nodes** collection.

![RadTreeView Drag and Drop Between Trees](images/treeview_draganddropbetweentreespng.png)

````ASPNET
<telerik:RadTreeView RenderMode="Lightweight" ID="RadTreeView1" runat="server" EnableDragAndDrop="true" OnNodeDrop="RadTreeView1_NodeDrop"
    Skin="Vista">
    <Nodes>
        <telerik:RadTreeNode runat="server" Text="Root RadTreeNode1" ExpandMode="ClientSide">
            <Nodes>
                <telerik:RadTreeNode runat="server" Text="Child RadTreeNode 1" ExpandMode="ClientSide">
                    <Nodes>
                        <telerik:RadTreeNode runat="server" ExpandMode="ClientSide" Text="child 1 a">
                        </telerik:RadTreeNode>
                        <telerik:RadTreeNode runat="server" ExpandMode="ClientSide" Text="child 1 b">
                        </telerik:RadTreeNode>
                        <telerik:RadTreeNode runat="server" ExpandMode="ClientSide" Text="child 1 c">
                            <Nodes>
                                <telerik:RadTreeNode runat="server" ExpandMode="ClientSide" Text="child 1 c 1">
                                </telerik:RadTreeNode>
                            </Nodes>
                        </telerik:RadTreeNode>
                    </Nodes>
                </telerik:RadTreeNode>
            </Nodes>
        </telerik:RadTreeNode>
        <telerik:RadTreeNode runat="server" Text="Root RadTreeNode2" ExpandMode="ClientSide">
        </telerik:RadTreeNode>
        <telerik:RadTreeNode runat="server" Text="Root RadTreeNode3" ExpandMode="ClientSide">
        </telerik:RadTreeNode>
    </Nodes>
</telerik:RadTreeView>
<br />
<telerik:RadTreeView RenderMode="Lightweight" ID="RadTreeView2" runat="server" EnableDragAndDrop="true" OnNodeDrop="RadTreeView1_NodeDrop"
    Skin="Vista">
    <Nodes>
        <telerik:RadTreeNode runat="server" ExpandMode="ClientSide" Text="Tree 2 Node 1">
        </telerik:RadTreeNode>
        <telerik:RadTreeNode runat="server" ExpandMode="ClientSide" Text="Tree 2 Node 2">
        </telerik:RadTreeNode>
        <telerik:RadTreeNode runat="server" ExpandMode="ClientSide" Text="Tree 2 Node 3">
        </telerik:RadTreeNode>
    </Nodes>
</telerik:RadTreeView>
````
````C#
using System.Web.UI;
using Telerik.Web.UI;
namespace RadTreeView_Dragging
{
   public partial class _Default : System.Web.UI.Page
   {
       protected void RadTreeView1_NodeDrop(object sender, Telerik.Web.UI.RadTreeNodeDragDropEventArgs e)
       {
           foreach (RadTreeNode node in e.DraggedNodes)
           {
               e.DestDragNode.Nodes.Add(node);
           }
       }
   }
} 
````
````VB.NET
Imports System.Web.UI
Imports Telerik.Web.UI
Namespace RadTreeView_Dragging
    Partial Public Class _Default
        Inherits System.Web.UI.Page
        Protected Sub RadTreeView1_NodeDrop(ByVal sender As Object, ByVal e As Telerik.Web.UI.RadTreeNodeDragDropEventArgs)
            For Each node As RadTreeNode In e.DraggedNodes
                e.DestDragNode.Nodes.Add(node)
            Next
        End Sub
    End Class
End Namespace
````


# See Also

 * [Overview]({%slug treeview/server-side-programming/events/overview%})

 * [NodeDrop]({%slug treeview/server-side-programming/events/nodedrop%})
