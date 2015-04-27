---
title: Finding Nodes at Runtime
page_title: Finding Nodes at Runtime | RadTreeView for ASP.NET AJAX Documentation
description: Finding Nodes at Runtime
slug: treeview/server-side-programming/finding-nodes-at-runtime
tags: finding,nodes,at,runtime
published: True
position: 2
---

# Finding Nodes at Runtime



To find a Node by **Text**, **Value** or Attribute, use the methods **FindNodeByText()**, **FindNodeByValue()** and **FindNodeByAttribute()**. Both RadTreeView and RadTreeView.Nodes has all three methods. In addition, RadTreeView has a **FindNodeByUrl()** method. For a step by step tutorial on using these find methods see [Tutorial: Finding Nodes]({%slug treeview/server-side-programming/tutorial:-finding-nodes%}).

>note To use the code examples below, include a reference to Telerik.Web.UI in the "using" (C#) or the "Imports" (VB) section of code.
>


## FindNodeByText()

The example below searches for a Node with a **Text** property of "Product Categories".



````C#
	protected void btnFind_Click(object sender, EventArgs e)
	{
	   RadTreeNode foundNode = RadTreeView1.FindNodeByText("Product Categories");
	   if (foundNode != null)
	   {
	       tbResults.Text = foundNode.Text;
	   }
	} 		
````
````VB.NET
	    Protected Sub btnFind_Click(ByVal sender As Object, ByVal e As EventArgs)
	        Dim foundNode As RadTreeNode = RadTreeView1.FindNodeByText("Product Categories")
	        If foundNode IsNot Nothing Then
	            tbResults.Text = foundNode.Text
	        End If
	    End Sub
````


## FindNodeByValue()

The example below searches for a Node with a **Value** property of "1234".



````C#
	protected void btnFind_Click(object sender, EventArgs e)
	{
	   RadTreeNode foundNode = RadTreeView1.FindNodeByValue("1234");
	   if (foundNode != null)
	   {
	       tbResults.Text = foundNode.Text;
	   }
	} 		
````
````VB.NET
	    Protected Sub btnFind_Click(ByVal sender As Object, ByVal e As EventArgs)
	        Dim foundNode As RadTreeNode = RadTreeView1.FindNodeByValue("1234")
	        If foundNode IsNot Nothing Then
	            tbResults.Text = foundNode.Text
	        End If
	    End Sub
````


## FindNodeByAttribute()

In the example below several Nodes are added to the RadTreeView. The first Node, "root1" has an attribute added to it. When a button is clicked, the **FindNodeByAttribute()** method looks for the Node with the identical key and value pair.



````C#
	using Telerik.Web.UI;
	namespace RadControls_NodesFind
	{
	   public partial class _Default : System.Web.UI.Page
	   {
	       protected void Page_Load(object sender, EventArgs e)
	       {
	           if (!Page.IsPostBack)
	           {
	               RadTreeNode root1 = new RadTreeNode("root1");
	               root1.Attributes.Add("My Key", "My Value");
	               RadTreeView1.Nodes.Add(root1);
	               RadTreeNode root2 = new RadTreeNode("root2");
	               root2.Nodes.Add(new RadTreeNode("child1"));
	               root2.Nodes.Add(new RadTreeNode("child2"));
	               root2.Nodes.Add(new RadTreeNode("child3"));
	               RadTreeView1.Nodes.Add(root2);
	               RadTreeNode root3 = new RadTreeNode("root3");
	               RadTreeNode child3 = new RadTreeNode("child3");               
	               child3.Nodes.Add(new RadTreeNode("child node under child3"));
	               root3.Nodes.Add(child3);
	               RadTreeView1.Nodes.Add(root3);
	           }
	       }
	       protected void btnFind_Click(object sender, EventArgs e)
	       {
	           RadTreeNode foundNode = RadTreeView1.FindNodeByAttribute("My Key", "My Value");
	           if (foundNode != null)
	           {
	               tbResults.Text = foundNode.Text;
	           }
	       }
	   }
	} 		
````
````VB.NET
	Imports Telerik.Web.UI
	namespace RadControls_NodesFind
	        Partial Public Class _Default
	            Inherits System.Web.UI.Page
	            Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs)
	                If Not Page.IsPostBack Then
	                    Dim root1 As New RadTreeNode("root1")
	                    root1.Attributes.Add("My Key", "My Value")
	                    RadTreeView1.Nodes.Add(root1)
	                    Dim root2 As New RadTreeNode("root2")
	                    root2.Nodes.Add(New RadTreeNode("child1"))
	                    root2.Nodes.Add(New RadTreeNode("child2"))
	                    root2.Nodes.Add(New RadTreeNode("child3"))
	                    RadTreeView1.Nodes.Add(root2)
	                    Dim root3 As New RadTreeNode("root3")
	                    Dim child3 As New RadTreeNode("child3")
	                    child3.Nodes.Add(New RadTreeNode("child node under child3"))
	                    root3.Nodes.Add(child3)
	                    RadTreeView1.Nodes.Add(root3)
	                End If
	            End Sub
	            Protected Sub btnFind_Click(ByVal sender As Object, ByVal e As EventArgs)
	                Dim foundNode As RadTreeNode = RadTreeView1.FindNodeByAttribute("My Key", "My Value")
	                If foundNode IsNot Nothing Then
	                    tbResults.Text = foundNode.Text
	                End If
	            End Sub
	        End Class
	    End Namespace
````


# See Also

 * [Tutorial: Finding Nodes]({%slug treeview/server-side-programming/tutorial:-finding-nodes%})
