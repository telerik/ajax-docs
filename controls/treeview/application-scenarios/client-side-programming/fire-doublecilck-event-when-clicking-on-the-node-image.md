---
title: Fire Doublecilck Event When Clicking on the Node Image
page_title: Fire Doublecilck Event When Clicking on the Node Image | RadTreeView for ASP.NET AJAX Documentation
description: Fire Doublecilck Event When Clicking on the Node Image
slug: treeview/application-scenarios/client-side-programming/fire-doublecilck-event-when-clicking-on-the-node-image
tags: fire,doublecilck,event,when,clicking,on,the,node,image
published: True
position: 21
---

# Fire Doublecilck Event When Clicking on the Node Image



## 

This article shows how to subscribe to a node's image double click event. Similarly, it can be used for a single click event. What we will achieve is when clicking on a node's image or text - a JavaScript method will be executed. That method will have two parameters - the TreeView and the node.

The JavaScript code below uses the [jQuery](http://jQuery.com) library which is integrated in **RadTreeView in Q3 2008**.


````ASPNET
<telerik:RadTreeView ID="RadTreeView1" runat="server" OnClientDoubleClick="onDoubleClick"
    Skin="Vista">
    <Nodes>
        <telerik:RadTreeNode Text="Node 1" ImageUrl="image1.jpg" runat="server">
            <Nodes>
                <telerik:RadTreeNode Text="Node 2" ImageUrl="image2.jpg" runat="server">
                </telerik:RadTreeNode>
            </Nodes>
        </telerik:RadTreeNode>
        <telerik:RadTreeNode Text="Node 3" ImageUrl="image3.jpg" runat="server">
        </telerik:RadTreeNode>
    </Nodes>
</telerik:RadTreeView>
````
````JavaScript
window.$ = $telerik.$;
$(document).ready(function () {
   $(".rtImg").dblclick(imageDoubleClick); });
   
function onDoubleClick(sender, e)
{
   handleDoubleClick(sender, e.get_node());                
};

function imageDoubleClick()
{               
   var tree = null;
   var node = null;
   //find the tree
   $(this).parents().each(function (i, parent){
       if ($(parent).is(".RadTreeView"))
           tree = $find(parent.id);
   });
   
   //find the node
   nodeText = this.nextSibling.innerHTML;
   node = tree.findNodeByText(nodeText);
   
   handleDoubleClick(tree, node);
}

function handleDoubleClick(tree, node)
{
   alert(tree.get_id() + "\n" + node.get_text());
}
````



Here is a brief description:

This code finds all html elements having the **rtImg** CSS class - these are the nodes' images. These elements are subscribed to a double click event. The function **imageDoubleClick** will be executed when someone double clicks the image. Similarly, here you can subscribe to the **click** event instead of the double click event.

````JavaScript
window.$ = $telerik.$;
$(document).ready(function () {
$(".rtImg").dblclick(imageDoubleClick); });	
````


The **imageDoubleClick** method will find the **TreeView** and the node client objects from the clicked image (sender):

````JavaScript
function imageDoubleClick() {
   var tree = null;
   var node = null;
   //find the tree
   $(this).parents().each(function(i, parent) {
       if ($(parent).is(".RadTreeView"))
           tree = $find(parent.id);
   });

   //find the node
   nodeText = this.nextSibling.innerHTML;
   node = tree.findNodeByText(nodeText);

   handleDoubleClick(tree, node);
}
````



The [RadTreeView]({%slug treeview/client-side-programming/objects/radtreeview%}) and [RadTreeNode]({%slug treeview/client-side-programming/objects/radtreenode%}) client objects are passed to the **handleDoubleClick** event which can execute the necessary code on them.
