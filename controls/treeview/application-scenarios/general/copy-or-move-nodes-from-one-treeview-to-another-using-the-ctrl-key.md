---
title: Copy or Move Nodes from One TreeView to Another Using the CTRL Key
page_title: Copy or Move Nodes from One TreeView to Another Using the CTRL Key | RadTreeView for ASP.NET AJAX Documentation
description: Copy or Move Nodes from One TreeView to Another Using the CTRL Key
slug: treeview/application-scenarios/general/copy-or-move-nodes-from-one-treeview-to-another-using-the-ctrl-key
tags: copy,or,move,nodes,from,one,treeview,to,another,using,the,ctrl,key
published: True
position: 1
---

# Copy or Move Nodes from One TreeView to Another Using the CTRL Key



## 

To copy nodes from one TreeView to another, you should make a clone of the dragged TreeNode (sourceNode) and add it to the Nodes collection of the other TreeView. An example is shown below. A hidden field is used to indicate whether a node is being moved or copied.

````ASPNET
	
	    <script type="text/javascript">
	        function SaveCtrlState(sender, eventArgs) {
	            var hidden = document.getElementById("<%= CtrlKeyField.ClientID %>");
	            if (eventArgs.get_domEvent().ctrlKey) {
	                hidden.value = "True";
	            }
	            else {
	                hidden.value = "False";
	            }
	        }
	    </script>
	
	    ...
	    <telerik:RadTreeView ID="RadTreeView1" runat="server" EnableDragAndDrop="True" OnClientNodeDropping="SaveCtrlState"
	        OnNodeDrop="HandleDrop">
	    </telerik:RadTreeView>
	    ...
	    <telerik:RadTreeView ID="RadTreeView2" runat="server" EnableDragAndDrop="True">
	    </telerik:RadTreeView>
	    ...
	    <asp:HiddenField ID="CtrlKeyField" runat="server" Value="False" />
````





````C#
	
	    private bool remove;
	    protected void Page_Load(object sender, EventArgs e)
	    {
	        if (CtrlKeyField.Value == "False")
	        {
	            remove = false;
	        }
	        else
	        {
	            remove = true;
	        }
	    }
	    protected void HandleDrop(object sender, RadTreeNodeDragDropEventArgs e)
	    {
	        RadTreeNode sourceNode = e.SourceDragNode;
	        RadTreeNode destNode = e.DestDragNode;
	        if (destNode != null)
	        {
	            if (sourceNode.TreeView.SelectedNodes.Count <= 1)
	            {
	                PerformDragAndDrop(sourceNode, destNode);
	            }
	            else if (sourceNode.TreeView.SelectedNodes.Count > 1)
	            {
	                foreach (RadTreeNode currentNode in sourceNode.TreeView.SelectedNodes)
	                {
	                    PerformDragAndDrop(currentNode, destNode);
	                }
	            }
	            destNode.Expanded = true;
	        }
	    }
	    private void PerformDragAndDrop(RadTreeNode sourceNode, RadTreeNode destNode)
	    {
	        if (sourceNode.Equals(destNode) || sourceNode.IsAncestorOf(destNode))
	        {
	            return;
	        }
	        // clone the sourceNode
	        RadTreeNode sourceNodeClone = CloneNode(sourceNode);
	        if (remove == false)
	        {
	            sourceNode.Owner.Nodes.Remove(sourceNode);
	        }
	        // add source node as a child of the destination node
	        if (!sourceNode.IsAncestorOf(destNode))
	        {
	            destNode.Nodes.Add(sourceNodeClone);
	        }
	    }
	    private RadTreeNode CloneNode(RadTreeNode sourceNode)
	    {
	        RadTreeNode clonedNode = new RadTreeNode();
	        clonedNode.Text = sourceNode.Text;
	        clonedNode.Value = sourceNode.Value;
	        clonedNode.ImageUrl = sourceNode.ImageUrl;
	        clonedNode.ExpandedImageUrl = sourceNode.ExpandedImageUrl;
	        return clonedNode;
	    } 
				
````
````VB.NET
	     
	    Private remove As Boolean
	    Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs)
	        If CtrlKeyField.Value = "False" Then
	            remove = False
	        Else
	            remove = True
	        End If
	    End Sub
	    Protected Sub HandleDrop(ByVal sender As Object, ByVal e As RadTreeNodeDragDropEventArgs)
	        Dim sourceNode As RadTreeNode = e.SourceDragNode
	        Dim destNode As RadTreeNode = e.DestDragNode
	        If destNode <> Nothing Then
	            If sourceNode.TreeView.SelectedNodes.Count <= 1 Then
	                PerformDragAndDrop(sourceNode, destNode)
	            ElseIf sourceNode.TreeView.SelectedNodes.Count > 1 Then
	                For Each currentNode As RadTreeNode In sourceNode.TreeView.SelectedNodes
	                    PerformDragAndDrop(currentNode, destNode)
	                Next
	            End If
	            destNode.Expanded = True
	        End If
	    End Sub
	    Private Sub PerformDragAndDrop(ByVal sourceNode As RadTreeNode, ByVal destNode As RadTreeNode)
	        If sourceNode.Equals(destNode) OrElse sourceNode.IsAncestorOf(destNode) Then
	            Return
	        End If
	        ' clone the sourceNode
	        Dim sourceNodeClone As RadTreeNode = CloneNode(sourceNode)
	        If remove = False Then
	            sourceNode.Owner.Nodes.Remove(sourceNode)
	        End If
	        ' add source node as a child of the destination node
	        If Not sourceNode.IsAncestorOf(destNode) Then
	            destNode.Nodes.Add(sourceNodeClone)
	        End If
	    End Sub
	    Private Function CloneNode(ByVal sourceNode As RadTreeNode) As RadTreeNode
	        Dim clonedNode As New RadTreeNode()
	        clonedNode.Text = sourceNode.Text
	        clonedNode.Value = sourceNode.Value
	        clonedNode.ImageUrl = sourceNode.ImageUrl
	        clonedNode.ExpandedImageUrl = sourceNode.ExpandedImageUrl
	        Return clonedNode
	    End Function
	
````


# See Also

 * [Overview]({%slug treeview/client-side-programming/events/overview%})

 * [Overview]({%slug treeview/server-side-programming/events/overview%})
