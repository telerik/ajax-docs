---
title: Load On Demand
page_title: Load On Demand | RadTreeList for ASP.NET AJAX Documentation
description: Load On Demand
slug: treelist/data-binding/load-on-demand
tags: load,on,demand
published: True
position: 4
---

# Load On Demand



Starting with the Q2 2011 release **RadTreeList** supports a new **Load-on-Demand** functionality. It allows child nodes to be added on the fly as parent nodes are expanded. This mode is useful when you need to fill sub nodes only when the parent node is expanded or the data source contains thousands of records:

## Load On Demand mechanism

To use the Load-On-Demand mechanism:

1. Set **AllowLoadOnDemand** property to **true**

1. Get the root items from the datasource and assign them to the **RadTreeList.DataSource** into **RadTreeList.NeedDataSource** event handler:



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


1. Handle the **RadTreeList.ChildItemsDataBind** event and select the subset of items related to theexpanded item. Assign them to the child items datasource property that is available through the second argument passed to the event handler:



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


In addition, the RadTreeList control always shows the ExpandCollapse button in front of each item. When the item is expanded and there are no nested items, nothing will be displayed below the expanded item, even though there was a button to exapnd it.


## Limitations

The data source of the control and items is not fully resolved when load-on-demand is used, and this poses a couple of limitations:

* The **HideExpandCollapseButtonIfNoChildren** property is not applicable when LoadOnDemand is enabled.
* [Aggregates]({%slug treelist/column/aggregates%}) cannot be used with load-on-demand.


