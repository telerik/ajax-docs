---
title: How to copy or move TreeNodes depending on the CTRL key
description: How to copy or move TreeNodes depending on the CTRL key. Check it now!
type: how-to
page_title: How to copy or move TreeNodes depending on the CTRL key
slug: treeview-how-to-copy-or-move-treenodes-depending-on-the-ctrl-key
res_type: kb
---

 ## Description

The code below shows a pure client-side logic about how to perform drag and drop. Additionally, holding the `CTRL` key determines whether the node will be copied or moved. The example below will `copy` the node if the `CTRL` key is pressed and `move` it otherwise.  
   
 
## Solution 

#### Option 1

````ASP.NET
 <script> 
    var isCtrl = false; 
    document.onkeydown = function(e) 
    {             
        if(!e) e=window.event; 
        if(e.keyCode == 17) 
            isCtrl = true; 
        
    } 
    document.onkeyup = function(e) 
    {            
        if(!e) e=window.event;                                     
        if(e.keyCode == 17) 
           isCtrl = false;                        
    } 
    function OnClientNodeDropping(sender, args) 
    {             
        var sourceNode = args.get_sourceNode(); 
        var destNode = args.get_destNode();             
         
        if(destNode) 
        { 
            sender.trackChanges(); 
            if(!isCtrl) 
            {                     
                var newNode = new Telerik.Web.UI.RadTreeNode(); 
                newNode.set_text(sourceNode.get_text()); 
                newNode.set_value(sourceNode.get_value()); 
                destNode.get_nodes().add(newNode);
                CloneNode(newNode, sourceNode); 
                                    
            }  
            else 
            { 
                destNode.get_nodes().add(sourceNode);                     
            } 
             
            destNode.set_expanded(true); 
            sender.commitChanges(); 
        }               
    } 
 function CloneNode(newNode, sourceNode) {
         if (sourceNode.get_nodes().get_count()>0) {
             for (var i = 0; i < sourceNode.get_nodes().get_count(); i++) {
                 var node = sourceNode.get_nodes().getNode(i);
                 var newChildNode = new Telerik.Web.UI.RadTreeNode();
                 newChildNode.set_text(node.get_text());
                 newChildNode.set_value(node.get_value()); 
                 newNode.get_nodes().add(newChildNode);
                 CloneNode(newChildNode, node);
             }
         }
     }

</script> 
<asp:ScriptManager ID="ScriptManager1" runat="server" /> 
<telerik:RadTreeView  
    ID="RadTreeView1"  
    runat="server"  
    LoadingStatusPosition="BeforeNodeText"  
    EnableDragAndDrop="True"  
    OnClientNodeDropping="OnClientNodeDropping"> 
    <Nodes> 
        <telerik:RadTreeNode runat="server" ExpandMode="ClientSide" Text="Root RadTreeNode11"> 
            <Nodes> 
                <telerik:RadTreeNode runat="server" ExpandMode="ClientSide" Text="Child RadTreeNode 11"> 
                </telerik:RadTreeNode> 
            </Nodes> 
        </telerik:RadTreeNode> 
        <telerik:RadTreeNode runat="server" ExpandMode="ClientSide" Text="Root RadTreeNode12"> 
            <Nodes> 
                <telerik:RadTreeNode runat="server" ExpandMode="ClientSide" Text="Child RadTreeNode 12"> 
                </telerik:RadTreeNode> 
            </Nodes> 
        </telerik:RadTreeNode> 
    </Nodes> 
    <CollapseAnimation Duration="100" Type="OutQuint" /> 
    <ExpandAnimation Duration="100" Type="OutQuart" /> 
</telerik:RadTreeView> 
<br> 
<br> 
<br> 
<br> 
<br> 
<br> 
<br> 
<telerik:RadTreeView ID="RadTreeView2" runat="server" LoadingStatusPosition="BeforeNodeText" EnableDragAndDrop="True"> 
    <Nodes> 
        <telerik:RadTreeNode runat="server" ExpandMode="ClientSide" Text="Root RadTreeNode21"> 
            <Nodes> 
                <telerik:RadTreeNode runat="server" ExpandMode="ClientSide" Text="Child RadTreeNode 21"> 
                </telerik:RadTreeNode> 
            </Nodes> 
        </telerik:RadTreeNode> 
        <telerik:RadTreeNode runat="server" ExpandMode="ClientSide" Text="Root RadTreeNode22"> 
            <Nodes> 
                <telerik:RadTreeNode runat="server" ExpandMode="ClientSide" Text="Child RadTreeNode 22"> 
                </telerik:RadTreeNode> 
            </Nodes> 
        </telerik:RadTreeNode> 
    </Nodes> 
    <CollapseAnimation Duration="100" Type="OutQuint" /> 
    <ExpandAnimation Duration="100" Type="OutQuart" /> 
</telerik:RadTreeView> 
````

#### Option 2

Another approach to use is simply indicating whether the action should be `copy` or `move` and perform the Drag And Drop at the server. There is a `Clone()` method at the server side. You can use the `NodeDrop` event to clone the source node and add it to the destination node. You can pass the value of the `isCtrl` variable from the `OnClientNodeDropping` event to the server `NodeDrop` event by setting this value as a custom attribute to the source node, like:  
   
````JavaScript

<script>  
            var isCtrl = false;  
            document.onkeydown = function(e)  
            {              
                if(!e) e=window.event;  
                if(e.keyCode == 17)  
                    isCtrl = true;  
                 
            }  
            document.onkeyup = function(e)  
            {             
                if(!e) e=window.event;                                      
                if(e.keyCode == 17)  
                   isCtrl = false;                         
            }  
            function OnClientNodeDropping(sender, args)  
            {              
                var sourceNode = args.get_sourceNode();  
                var destNode = args.get_destNode();              
                  
                if(destNode)  
                {  
                    sender.trackChanges();  
                    if(!isCtrl)  
                    {                    
                        sourceNode.get_attributes().setAttribute("isCtrl", "no"); 
                    }   
                    else  
                    {                  
                        sourceNode.get_attributes().setAttribute("isCtrl", "yes"); 
                    }               
                     
                    sender.commitChanges();  
                }                
            }  
        </script> 
````

Then, in the server-side `NodeDrop` event handler, you can do the following:

````C#
protected void RadTreeView1_NodeDrop(object sender, Telerik.Web.UI.RadTreeNodeDragDropEventArgs e) 
    { 
        RadTreeNode sourceNode = e.SourceDragNode; 
        RadTreeNode destNode = e.DestDragNode; 
        if (destNode != null) 
        { 
            if (sourceNode.Attributes["isCtrl"] == "no") 
            {                 
                RadTreeNode newNode = sourceNode.Clone(); 
                destNode.Nodes.Add(newNode);                 
            } 
            else 
            { 
                sourceNode.Owner.Nodes.Remove(sourceNode); 
                destNode.Nodes.Add(sourceNode); 
            } 
            destNode.Expanded = true; 
        } 
    } 
````
````VB
Protected Sub RadTreeView1_NodeDrop(ByVal sender As Object, ByVal e As Telerik.Web.UI.RadTreeNodeDragDropEventArgs)
    Dim sourceNode As RadTreeNode = e.SourceDragNode
    Dim destNode As RadTreeNode = e.DestDragNode

    If destNode IsNot Nothing Then

        If sourceNode.Attributes("isCtrl") = "no" Then
            Dim newNode As RadTreeNode = sourceNode.Clone()
            destNode.Nodes.Add(newNode)
        Else
            sourceNode.Owner.Nodes.Remove(sourceNode)
            destNode.Nodes.Add(sourceNode)
        End If

        destNode.Expanded = True
    End If
End Sub
````



