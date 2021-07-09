---
title: Drag and drop nodes between two treeviews inside RadPanelBar
description: Drag and drop nodes between two treeviews inside RadPanelBar. Check it now!
type: how-to
page_title: Drag and drop nodes between two treeviews inside RadPanelBar
slug: panelbar-drag-and-drop-nodes-between-two-treeviews-inside-radpanelbar
res_type: kb
---


   
## HOW-TO  
 
 Drag and drop nodes between two TreeViews inside RadPanelBar.  
   
## DESCRIPTION  
 In some cases you may want to reorder the structure of the treeview controls which reside in RadPanelBar. By taking advantage of the drag and drop feature of RadTreeView you can easily modify the hierarchy they represent (including multiple drag and drop).  
   

   
## SOLUTION 
 Simply hook to **OnNodeDrop** server event of the TreeViews and provide the necessary program logic in the respective event handlers to ensure the proper execution of the drag and drop mechanism. Please review the  ASPX / C# / VB.NET sections of the article for further details (note that the **tree.xml** and **tree1.xml** are arbitrary TreeView XML Data Source files).  
   
````ASP.NET
      <telerik:RadPanelBar id="RadPanelbar1" style="Z-INDEX: 101; LEFT: 24px; POSITION: absolute; TOP: 24px" 
            Runat="server" Width="176px"> 
            <Items> 
               <telerik:RadPanelItem Text="subroot1"> 
                  <Items> 
                        <telerik:RadPanelItem> 
                           <ItemTemplate> 
                              <telerik:RadTreeView  
                                    ID="RadTreeView1"  
                                    runat="server" 
                                    OnNodeDrop="TreeDrop" 
                                    MultipleSelect="True" 
                                    DataSourceID="XmlDataSource1" 
                                    DataTextField="Text" 
                                    DataValueField="Value" 
                                    EnableDragAndDrop="true"> 
                              </telerik:RadTreeView> 
                           </ItemTemplate> 
                        </telerik:RadPanelItem> 
                  </Items> 
               </telerik:RadPanelItem> 
               <telerik:RadPanelItem Text="subroot2"> 
                  <Items> 
                        <telerik:RadPanelItem> 
                           <ItemTemplate> 
                              <telerik:RadTreeView  
                                    ID="RadTreeView2"  
                                    runat="server" 
                                    OnNodeDrop="TreeDrop" 
                                    MultipleSelect="True" 
                                    DataSourceID="XmlDataSource2" 
                                    DataTextField="Text" 
                                    DataValueField="Value" 
                                    EnableDragAndDrop="true"> 
                              </telerik:RadTreeView> 
                           </ItemTemplate> 
                        </telerik:RadPanelItem> 
                  </Items> 
               </telerik:RadPanelItem> 
            </Items> 
         </telerik:RadPanelBar> 
      <asp:XmlDataSource ID="XmlDataSource1" runat="server" DataFile="~/tree.xml" XPath="/Nodes/Node"> 
      </asp:XmlDataSource> 
      <asp:XmlDataSource ID="XmlDataSource2" runat="server" DataFile="~/tree1.xml" XPath="/Nodes/Node"> 
      </asp:XmlDataSource> 
````
 
 
   

````C#
    protected void TreeDrop(object sender, RadTreeNodeDragDropEventArgs NodeEvent) 
    { 
        RadTreeNode destNode = NodeEvent.DestDragNode; 
 
        string result = string.Empty; 
 
        if (NodeEvent.DraggedNodes.Count > 0) 
        { 
            foreach (RadTreeNode node in NodeEvent.DraggedNodes) 
            { 
                if (node != destNode.Parent) 
                { 
                    RadTreeNodeCollection nodeCollection = (node.ParentNode != null) ? node.ParentNode.Nodes : node.TreeView.Nodes; 
                    nodeCollection.Remove(node); 
                    destNode.Nodes.Add(node); 
                } 
 
                node.Selected = false; 
            } 
        } 
 
        destNode.Expanded = true; 
    } 
 ````  

````VB  
    Protected Sub TreeDrop(ByVal sender As Object, ByVal NodeEvent As RadTreeNodeDragDropEventArgs) 
        Dim destNode As RadTreeNode = NodeEvent.DestDragNode 
 
        Dim result As String = String.Empty 
 
        If NodeEvent.DraggedNodes.Count > 0 Then 
            For Each node As RadTreeNode In NodeEvent.DraggedNodes 
                If node IsNot destNode.Parent Then 
                    Dim nodeCollection As RadTreeNodeCollection 
 
                    If (node.ParentNode Is Nothing) Then 
                        nodeCollection = node.TreeView.Nodes 
                    Else 
                        nodeCollection = node.ParentNode.Nodes 
                    End If 
 
                    nodeCollection.Remove(node) 
                    destNode.Nodes.Add(node) 
                End If 
 
                node.Selected = False 
            Next 
        End If 
 
        destNode.Expanded = True 
    End Sub 
````
 
   