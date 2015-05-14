---
title: Working with Nodes on the Client
page_title: Working with Nodes on the Client | RadTreeView for ASP.NET AJAX Documentation
description: Working with Nodes on the Client
slug: treeview/radtreeview-nodes/working-with-nodes-at-the-client
tags: working,with,nodes,at,the,client
published: True
position: 3
---

# Working with Nodes on the Client



Using the client-side API, you can programmatically add, remove, disable, or select **RadTreeView** nodes.

>note Note that you should call the **trackChanges** function before you add/delete/update nodes and **commitChanges** function after you finished the client-side changes. This will ensure that all changes made will persist at the server side.
>


## Adding Nodes

To add a node programmatically, get a reference to the **RadTreeView** object. Create a new client-side **RadTreeNode** object and set its text. Get a reference to the **RadTreeView** nodes collection and add the new node. You can add the node to the **RadTreeView** Nodes collection or the Nodes collection of another Node.

````JavaScript
function AddNode() 
{
    var tree = $find("<%= RadTreeView1.ClientID %>");
    tree.trackChanges();
    var node = new Telerik.Web.UI.RadTreeNode();
    node.set_text("New Node");
    tree.get_nodes().add(node);
    tree.commitChanges();
}
````



## Removing Nodes

You can remove nodes by:

* Calling the Nodes collection's **remove()** method and passing a reference to the node.

* Calling the Nodes collection's **removeAt()** method and passing the index of the node to be removed. Be careful with this function as the index is relative to each Nodes collection. Notice in the code example how the **removeAt()** function is called not from the **RadTreeView** nodes collection, but through the parent of the node being removed.

* Calling **nodes.clear()** to remove all nodes at one time.

````JavaScript
function DeleteNode() 
{

    var tree = $find("<%= RadTreeView1.ClientID %>");
    var node = tree.findNodeByText("New Node");
    tree.trackChanges();
    node.get_parent().get_nodes().remove(node);
    //... or by ordinal position    
    //node.get_parent().get_nodes().removeAt(0);    
    //... or remove all nodes at one time
    //node.get_parent().get_nodes().clear();
    tree.commitChanges();
}
````



## Selecting Nodes

Selecting typically highlights the node, depending on the styling of the **RadTreeView** [skin](A2ACD8E0-A5F3-4093-A5DA-FF45D737F6FA). The typical scenario for selecting a node programmatically is first locating the node, then calling the select() or unselect() functions.

````JavaScript
function SelectNode()        
{

    var tree = $find("<%= RadTreeView1.ClientID %>");
    var node = tree.findNodeByText("New Node");
    tree.trackChanges();
    if (node.get_selected()) 
    {
        node.unselect();
    }
    else 
    {
        node.select();
    }
    tree.commitChanges();

}
````



## Disabling/Enabling Nodes

Disabling a node makes the node inactive and un-clickable. The appearance of the node is typically in a gray or other faint color, depending on the styling of the **RadTreeView** [Skin](A2ACD8E0-A5F3-4093-A5DA-FF45D737F6FA).

````ASPNET
function ToggleNode()
{
   var tree= $find("<%= RadTreeView1.ClientID %>");
   var node = tree.findNodeByText("New Node");
   tree.trackChanges();
   if (node.get_enabled())
   {
       node.disable();
   }
   else
   {
       node.enable();
   }
   tree.commitChanges();
}
````


