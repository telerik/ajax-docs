---
title: Switching source and destination nodes and moving their children in RadTreeView
description: Switching source and destination nodes and moving their children in RadTreeView. Check it now!
type: how-to
page_title: Switching source and destination nodes and moving their children in RadTreeView
slug: treeview-switching-source-and-destination-nodes-and-moving-their-children
res_type: kb
---

## How to  

Switch the source and destination nodes and their children in the treeview (using the drag and drop mechanism).  
   
## Solution

Custom modification of the NodeDrop event handler of RadTreeView will do the job. Review the following code snippets:  

````C#
protected void RadTreeView1_NodeDrop(object sender, Telerik.Web.UI.RadTreeNodeDragDropEventArgs e)
{
    RadTreeNode sourceNode = e.SourceDragNode;
    RadTreeNode destNode = e.DestDragNode;

    if (((sourceNode.Parent != null) && (sourceNode.Parent.Equals(destNode))) ||
        ((destNode.Parent != null) && (destNode.Parent.Equals(sourceNode))))
    {
        return;
    }

    string text = sourceNode.Text;
    string category = sourceNode.Category;
    string node_value = sourceNode.Value;

    ArrayList sourceNodeChildren = new ArrayList();
    ArrayList destNodeChildren = new ArrayList();

    foreach (RadTreeNode childNode in sourceNode.Nodes)
    {
        sourceNodeChildren.Add(childNode);
    }

    foreach (RadTreeNode childNode in destNode.Nodes)
    {
        destNodeChildren.Add(childNode);
    }

    sourceNode.Text = destNode.Text;
    sourceNode.Category = destNode.Category;
    sourceNode.Value = destNode.Value;

    sourceNode.Nodes.Clear();

    foreach (RadTreeNode childNode in destNodeChildren)
    {
        sourceNode.Nodes.Add(childNode);
    }

    destNode.Text = text;
    destNode.Category = category;
    destNode.Value = node_value;

    destNode.Nodes.Clear();

    foreach (RadTreeNode childNode in sourceNodeChildren)
    {
        destNode.Nodes.Add(childNode);
    }

    sourceNode.Expanded = true;
    destNode.Expanded = true;
}
````
````VB
Protected Sub RadTreeView1_NodeDrop(ByVal o As Object, ByVal e As RadTreeNodeDragDropEventArgs) 
  Dim sourceNode As RadTreeNode = e.SourceDragNode 
  Dim destNode As RadTreeNode = e.DestDragNode 

  If ((sourceNode.Parent IsNot Nothing) AndAlso (sourceNode.Parent.Equals(destNode))) OrElse _ 
      ((destNode.Parent IsNot Nothing) AndAlso (destNode.Parent.Equals(sourceNode))) Then 
      Return 
  End If 

  Dim text As String = sourceNode.Text 
  Dim category As String = sourceNode.Category 
  Dim node_value As String = sourceNode.Value 

  Dim sourceNodeChildren As New ArrayList() 
  Dim destNodeChildren As New ArrayList() 

  For Each childNode As RadTreeNode In sourceNode.Nodes 
      sourceNodeChildren.Add(childNode) 
  Next 

  For Each childNode As RadTreeNode In destNode.Nodes 
      destNodeChildren.Add(childNode) 
  Next 

  sourceNode.Text = destNode.Text 
  sourceNode.Category = destNode.Category 
  sourceNode.Value = destNode.Value 

  sourceNode.Nodes.Clear() 

  For Each childNode As RadTreeNode In destNodeChildren 
      sourceNode.Nodes.Add(childNode) 
  Next 

  destNode.Text = text 
  destNode.Category = category 
  destNode.Value = node_value 

  destNode.Nodes.Clear() 

  For Each childNode As RadTreeNode In sourceNodeChildren 
      destNode.Nodes.Add(childNode) 
  Next 

  sourceNode.Expanded = True 
  destNode.Expanded = True 
End Sub 
````
   
>important Keep in mind that this will save only the Text, Category and Value attributes of the exchanged nodes. Info of other kind will be lost. If you would like to keep other additional properties and functions connected to the corresponding nodes, you should add extra code in the HandleDrop event handler.  


