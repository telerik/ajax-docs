---
title: Load On Demand
page_title: Load On Demand | UI for ASP.NET AJAX Documentation
description: Load On Demand
slug: treelist/data-binding/load-on-demand
tags: load,on,demand
published: True
position: 4
---

# Load On Demand



Starting with the Q2 2011 release __RadTreeList__ supports a new __Load-on-Demand__functionality. It allows child nodes to be added on the fly as parent nodes are expanded. This mode is useful when you need to fill sub nodes only when the parent node is expanded or the data source contains thousands of records:

## Load On Demand mechanism

To use the Load-On-Demand mechanism:

1. Set __AllowLoadOnDemand__ property to __true__

1. Get the root items from the datasource and assign them to the __RadTreeList.DataSource__ into __RadTreeList.NeedDataSource__ event handler:

>tabbedCode

````C#
	    protected void RadTreeList1_NeedDataSource(object sender, TreeListNeedDataSourceEventArgs e)
	    {
	       RadTreeList1.DataSource = GetDataTable("SELECT * FROM TestItems WHERE ParentID IS NULL", null);
	    }
````
````VB.NET
	    Protected Sub RadTreeList1_NeedDataSource(ByVal sender As Object, ByVal e As TreeListNeedDataSourceEventArgs)
	        RadTreeList1.DataSource = GetDataTable("SELECT * FROM TestItems WHERE ParentID IS NULL", Nothing)
	    End Sub
````
>end

1. Handle the __RadTreeList.ChildItemsDataBind__ event and select the subset of items related to theexpanded item. Assign them to the child items datasource property that is available through the second argument passed to the event handler:

>tabbedCode

````C#
	    protected void RadTreeList1_ChildItemsDataBind(object sender, TreeListChildItemsDataBindEventArgs e)
	    {
	        int id = Convert.ToInt32(e.ParentDataKeyValues["ID"].ToString());
	        e.ChildItemsDataSource = GetDataTable("SELECT * FROM TestItems WHERE ParentID = " + id);
	    }
````
````VB.NET
	    Protected Sub RadTreeList1_ChildItemsDataBind(ByVal sender As Object, ByVal e As TreeListChildItemsDataBindEventArgs)
	        Dim id As Integer = Convert.ToInt32(e.ParentDataKeyValues("ID").ToString())
	        e.ChildItemsDataSource = GetDataTable("SELECT * FROM TestItems WHERE ParentID = " & id)
	    End Sub
````
>end

## 

In addition the RadTreeList control always shows ExpandCollapse button in front of each item. When the item is expanded and there is no nested items, by default nothing will be displayed below the expanded item, but the ExpandCollapse button will stay.

>note Note that the __HideExpandCollapseButtonIfNoChildren__ property is not applicable when LoadOnDemand is enabled.
>

