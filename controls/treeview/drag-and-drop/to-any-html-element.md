---
title: To Any HTML Element
page_title: To Any HTML Element | UI for ASP.NET AJAX Documentation
description: To Any HTML Element
slug: treeview/drag-and-drop/to-any-html-element
tags: to,any,html,element
published: True
position: 3
---

# To Any HTML Element



## 

To drop onto any arbitrary HTML element including standard HTML tags, ASP.NET controls and RadControls, use the __HtmlElementID__ property of the__RadTreenodeDragDropEventArgs__ that is available in the __OnNodeDrop__ event. In the example below, Nodes are dragged down to a standard Panel component with ID property "myPanel". When the __OnNodeDrop__ event fires, if __HtmlElementID__ is "myPanel" then the __DraggedNodes__ are iterated and in this case, LiteralControls are added to the Panel Collection.

![RadTreeView Drag and Drop to HTML](images/treeview_draganddroptohtmlelementspng.png)



````C#
	using System.Web.UI;
	using Telerik.Web.UI;
	namespace RadTreeView_Dragging
	{
	   public partial class _Default : System.Web.UI.Page
	   {
	       protected void RadTreeView1_NodeDrop(object sender, Telerik.Web.UI.RadTreeNodeDragDropEventArgs e)
	       {
	           if (e.HtmlElementID == "myPanel")
	           {
	               foreach (RadTreeNode node in e.DraggedNodes)
	               {
	                   myPanel.Controls.Add(new LiteralControl(node.Text));
	                   myPanel.Controls.Add(new LiteralControl("<br>"));
	               }
	           }
	       }
	   }
	}      
````
````VB.NET
	Imports System.Web.UI
	Imports Telerik.Web.UI
	namespace RadTreeView_Dragging
	        Partial Public Class _Default
	            Inherits System.Web.UI.Page
	            Protected Sub RadTreeView1_NodeDrop(ByVal sender As Object, ByVal e As Telerik.Web.UI.RadTreeNodeDragDropEventArgs)
	                If e.HtmlElementID = "myPanel" Then
	                    For Each node As RadTreeNode In e.DraggedNodes
	                        myPanel.Controls.Add(New LiteralControl(node.Text))
	                        myPanel.Controls.Add(New LiteralControl("<br>"))
	                    Next
	                End If
	            End Sub
	        End Class
	    End Namespace
````


To see a live example of drag and drop to an HTML element visit the [Drag & Drop live demo](http://demos.telerik.com/aspnet-ajax/TreeView/Examples/Functionality/DragAndDropNodes/DefaultCS.aspx).

# See Also

 * [Overview]({%slug treeview/server-side-programming/events/overview%})

 * [NodeDrop]({%slug treeview/server-side-programming/events/nodedrop%})
