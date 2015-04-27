---
title: Using Additional Columns
page_title: Using Additional Columns | RadTreeView for ASP.NET AJAX Documentation
description: Using Additional Columns
slug: treeview/data-binding/using-additional-columns
tags: using,additional,columns
published: True
position: 6
---

# Using Additional Columns



## 

If you need to map additional columns from the Data Source to properties of the RadTreeView Nodes, you can use the **NodeDataBound** event. The event arguments passed to the event, **e.Node**and **e.Node.DataItem**, hold the instance of the RadTreeView Node being bound and the **DataItem** to which it is bound. You can map a property from the **DataItem** to the corresponding property of the RadTreeView Node. Be sure to cast the **DataItem** object to the proper data type first.

In the example below, the RadTreeView is bound to a **DataTable** and the DataItem is of type **DataRowView**. If you were binding to an array of a custom object "Employee", then the **DataItem** would be cast to the **Employee** type before using.



````C#
	
	    protected void RadTreeView1_NodeDataBound(object sender, RadTreeNodeEventArgs e) 
	    { 
	        e.Node.ToolTip = (e.Node.DataItem as DataRowView)["Description"].ToString(); 
	    }
	
````
````VB.NET
	     
	
	    Protected Sub RadTreeView1_NodeDataBound(ByVal sender As Object, ByVal e As RadTreeNodeEventArgs)
	        e.Node.ToolTip = (TryCast(e.Node.DataItem, DataRowView))("Description").ToString()
	    End Sub
	
````

