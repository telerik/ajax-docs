---
title: How-to Expand and Collapse nodes by clicking on node's text
description: How-to Expand and Collapse nodes by clicking on node's text. Check it now!
type: how-to
page_title: How-to Expand and Collapse nodes by clicking on node's text
slug: treeview-how-to-expand-and-collapse-nodes-by-clicking-on-node-s-text
res_type: kb
---


 
## HOW-TO
Expand and collapse nodes by clicking on node's text  
   
## SOLUTION  
 Subscribe to the [OnClientNodeClicked]({%slug treeview/client-side-programming/events/onclientnodeclicked}) and define its event handler as follows:  
   
   
````
<telerik:RadTreeView ID="RadTreeView1"  
    OnClientNodeClicked="onClientNodeClickedHandler" 
    runat="server"> 
</telerik:RadTreeView>
<script>
function onClientNodeClickedHandler(sender, eventArgs) 
{ 
    var node = eventArgs.get_node(); 
    node.toggle(); 
}   
</script>
````

  