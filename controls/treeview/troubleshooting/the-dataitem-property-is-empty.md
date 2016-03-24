---
title: The DataItem Pperty is Empty
page_title: The DataItem Pperty is Empty | RadTreeView for ASP.NET AJAX Documentation
description: The DataItem Pperty is Empty
slug: treeview/troubleshooting/the-dataitem-property-is-empty
tags: the,dataitem,pperty,is,empty
published: True
position: 1
---

# The DataItem Property is Empty



## 

The **DataItem** property is available only during data binding in the [NodeDataBound]({%slug treeview/server-side-programming/events/nodedatabound%}) event:



````C#	
protected void RadTreeView1_NodeDataBound(object o, RadTreeNodeEventArgs e)
{
    DataRowView dataSourceRow = (DataRowView)e.Node.DataItem;
}
````
````VB.NET
Protected Sub RadTreeView1_NodeDataBound(ByVal o As Object, ByVal e As RadTreeNodeEventArgs)
    Dim dataSourceRow As DataRowView = CType(e.Node.DataItem, DataRowView)
End Sub
````


You should not use it elsewhere. You can use the **Value** property or [Custom Attributes]({%slug treeview/custom-attributes/custom-attributes-overview%}) instead.
