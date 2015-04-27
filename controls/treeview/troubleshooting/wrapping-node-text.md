---
title: Wrapping Node Text
page_title: Wrapping Node Text | RadTreeView for ASP.NET AJAX Documentation
description: Wrapping Node Text
slug: treeview/troubleshooting/wrapping-node-text
tags: wrapping,node,text
published: True
position: 0
---

# Wrapping Node Text



## 

Telerik RadTreeView does not support text-wrapping by default. You can, however, use one of the following approaches to accomplish the task:

* Add line breaks to the text of the TreeNodes:

````ASPNET
	    <telerik:RadTreeNode runat="server" Text="Root<br>Node"/> 
````



* To wrap all TreeNodes' Text add the following style to the page:

````ASPNET
	    <style type="text/css">
	     #RadTreeView1 div
	     {
	        style="white-space: normal;"
	     }
	    </style>
````

If the TreeView resides in a naming container, you can get the name of the div tag from the HTML OutPut of the page.

Another way of applying the style is putting the style directly to the TreeView or TreeNode definition like this:

````ASPNET
	    <telerik:RadTreeView ID="RadTreeView1" runat="server" Style="white-space: normal;" />
````



````ASPNET
	    <telerik:RadTreeNode runat="server" Text="Root Node" style="white-space: normal;">
````


