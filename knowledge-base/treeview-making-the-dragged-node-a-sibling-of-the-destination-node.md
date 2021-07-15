---
title: Making the dragged node a sibling of the destination node
description: Making the dragged node a sibling of the destination node. Check it now!
type: how-to
page_title: Making the dragged node a sibling of the destination node
slug: treeview-making-the-dragged-node-a-sibling-of-the-destination-node
res_type: kb
---

 
## HOW-TO  
Make the dragged node sibling of the destination node when using drag and drop  
  
## SOLUTION   
The forthcoming custom modification of RadTreeView's **NodeDrop** event handler shows the means to implement this functionality:  
  
````C#
protected void HandleDrop(object sender, RadTreeNodeEventArgs NodeEvent)  
{                    
                                             
   RadTreeNode sourceNode = NodeEvent.SourceDragNode;  
   RadTreeNode destNode = NodeEvent.DestDragNode;           
   RadTreeNodeCollection collection;                 
                      
   if (sourceNode != destNode.Parent)  
   {  
    if(sourceNode.ParentNodeCollection == destNode.ParentNodeCollection)  
    {  
     collection = sourceNode.ParentNodeCollection;  
     sourceNode.Remove();  
    }  
    else  
    {  
     collection = sourceNode.ParentNodeCollection;  
     sourceNode.Remove();  
     collection = destNode.ParentNodeCollection;  
    }  
  
     int index = 0;  
  
     foreach(RadTreeNode node in collection)  
     {  
       if (node.Text == destNode.Text)  
       {  
          break;  
       }  
      index++;  
     } 

collection.Insert(index, sourceNode);  
   }                          
}
````
 
Take into account that the dragged node will precede the destination node. You can change the code in order to meet the conventions of your project.


  