---
title: ContextMenuItemClick
page_title: ContextMenuItemClick | UI for ASP.NET AJAX Documentation
description: ContextMenuItemClick
slug: treeview/server-side-programming/events/contextmenuitemclick
tags: contextmenuitemclick
published: True
position: 1
---

# ContextMenuItemClick



## 

__ContextMenuItemClick__ event fires when the user right clicks on a node that have associated context menu and clicks on a context menu item. Use the __RadTreeViewContextMenuEventArgs.MenuItem__ property to get or set the clicked-on menu item properties. Use the __RadTreeViewContextMenuEventArgs.____Node__ property to get or set the clicked-on Node properties.



````C#
	    protected void RadTreeView1_ContextMenuItemClick(object sender, Telerik.Web.UI.RadTreeViewContextMenuEventArgs e)
	    {
	        if (e.MenuItem.Text == "Delete" && e.Node.Category == "File")
	        {
	            e.Node.Remove();
	        }
	    } 		
````
````VB.NET
	    Protected Sub RadTreeView1_ContextMenuItemClick(ByVal sender As Object, ByVal e As Telerik.Web.UI.RadTreeViewContextMenuEventArgs)
	        If e.MenuItem.Text = "Delete" AndAlso e.Node.Category = "File" Then
	            e.Node.Remove()
	        End If
	    End Sub
````

