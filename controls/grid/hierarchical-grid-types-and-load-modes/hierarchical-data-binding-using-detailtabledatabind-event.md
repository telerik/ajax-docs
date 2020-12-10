---
title: Hierarchical data-binding using DetailTableDataBind event
page_title: Hierarchical data-binding using DetailTableDataBind event | RadGrid for ASP.NET AJAX Documentation
description: Hierarchical data-binding using DetailTableDataBind event
slug: grid/hierarchical-grid-types-and-load-modes/hierarchical-data-binding-using-detailtabledatabind-event
tags: hierarchical,data-binding,using,detailtabledatabind,event
published: True
position: 4
---

# Hierarchical data-binding using DetailTableDataBind event



To display hierarchical data, **RadGrid** renders one or more detail tables for each item (row) in the **MasterTableView**. In a multi-level hierarchy, each item of every detail table can have one or more detail tables as well. The level of the grid hierarchy can be arbitrarily deep.

When binding each detail table view, **RadGrid** fires the **DetailTableDataBind** event. The argument for a **DetailTableDataBind** event handler carries all the information you need for binding the detail table, including the table view that should be bound, its parent item, and so on.

When the **DetailTableDataBind** event occurs depends on the [HierarchyLoadMode]({%slug grid/hierarchical-grid-types-and-load-modes/hierarchy-load-modes%}) of the corresponding **GridTableView**.

* If **HierarchyLoadMode** is set to **ServerBind**, then the **DetailTableDataBind** event fires immediately after the corresponding parent item is bound.

* If **HierarchyLoadMode** is set to **ServerOnDemand**, the **DetailTableDataBind** event does not occur until the detail table's parent item is expanded.

## Using DetailTableDataBind

The main steps when binding a hierarchical grid using the **DetailTableDataBind** event are as follows:

1. Create the grid, either [statically]({%slug grid/create-radgrid/declarative-definition%}) or [dynamically]({%slug grid/create-radgrid/creating-a-radgrid-programmatically%}). Set the properties of the grid to provide the appearance and functionality you want. You must create and add **GridTableView** objects to the **DetailTables** collection of the **MasterTableView** and any detail tables that have their own nested details.

1. Bind the master table view of the grid either [declaratively]({%slug grid/data-binding/server-side-binding/declarative-datasource%}) or by assigning a [NeedDataSource event handler]({%slug grid/data-binding/server-side-binding/programmatic-databinding-using-needdatasource-event%}) to the grid. Optionally, you can assign data sources to the detail tables, which can subsequently be configured in the **DetailTableDataBind** event handler.

1. Assign the **DetailTableDataBind** event handler to the grid.

1. In the **DetailTableDataBind** event handler, assign or configure the data sources for the detail tables in the grid. You can determine which datasource should be related to the parent **GridTableView** by checking the **Name** property, **DataSourceID** property (when using data source controls) or **DataMember** property (when not using data source controls). If the DetailTableDataBind event is not handled, each detail table will be bound to the same datasource as the master table without any filtering applied on the records.

>note When binding RadGrid in DetailTableDataBind, you must not use declarative relations (ParentTableRelations) in markup.
>


For a live example that demonstrates binding a hierarchical grid using the **DetailTableDataBind** event, see [Hierarchy with DetailTableDataBind event](https://demos.telerik.com/aspnet-ajax/Grid/Examples/Programming/DetailTableDataBind/DefaultCS.aspx).

>note You can use the **DetailTableDataBind** event handler to assign a **NoRecordsTemplate** for the **GridTableView** . This is a template that is displayed if there are no records in the assigned **DataSource** (see[Using NoRecordsTemplate]({%slug grid/data-binding/using-norecordstemplate%})).
>


When implementing a **DetailTableDataBind** event handler, you should construct a detail data source (list of objects) that the detail table view displays. This data source should be filtered in the appropriate manner: it should contain only detail table records that correspond to the particular parent item in which the table is nested.

The following examples show some possible ways to filter the detail data source. These examples all assume the approach where the **DataSource** and **DataMember** properties of the detail tables are assigned in the **NeedDataSource** event handler, and **DetailTableDataBind** is used to configure the data source:

## Binding detail tables using database select



````C#
private void RadGrid1_DetailTableDataBind(object source, Telerik.Web.UI.GridDetailTableDataBindEventArgs e)
{
    GridDataItem parentItem = e.DetailTableView.ParentItem as GridDataItem;
    if (parentItem.Edit)
    {
        return;
    }
    if (e.DetailTableView.DataMember == "OrderDetails")
    {
        dsNWind1.OrderDetails.Clear();
        daOrderDetails.SelectCommand.CommandText = "Select * from [Order Details] where OrderID = " + parentItem["OrderID"].Text;
        daOrderDetails.Fill(dsNWind1.OrderDetails);
    }
}
````
````VB
Private Sub RadGrid1_DetailTableDataBind(ByVal source As Object, ByVal e As GridDetailTableDataBindEventArgs) Handles RadGrid1.DetailTableDataBind
    Dim parentItem As GridDataItem = CType(e.DetailTableView.ParentItem, GridDataItem)
    If parentItem.Edit Then
        Return
    End If
    If (e.DetailTableView.DataMember = "OrderDetails") Then
        dsNWind1.OrderDetails.Clear()
        daOrderDetails.SelectCommand.CommandText = "Select * from [Order Details] where OrderID = " + parentItem("OrderID").Text
        daOrderDetails.Fill(dsNWind1.OrderDetails)
    End If
End Sub
````


## Binding detail tables using DataTable.Select



````C#
private void RadGrid1_DetailTableDataBind(object source, Telerik.Web.UI.GridDetailTableDataBindEventArgs e)
{
    GridDataItem parentItem = e.DetailTableView.ParentItem as GridDataItem;
    if (parentItem.Edit)
    {
        return;
    }
    if (e.DetailTableView.DataMember == "OrderDetails")
    {
        DataSet ds = (DataSet)e.DetailTableView.DataSource;
        e.DetailTableView.DataSource = ds.Tables["OrderDetails"].Select("CustomerID = '" + parentItem["CustomerID"].Text + "'");
    }
}
````
````VB
Private Sub RadGrid1_DetailTableDataBind(ByVal source As Object, ByVal e As GridDetailTableDataBindEventArgs) Handles RadGrid1.DetailTableDataBind
    Dim parentItem As GridDataItem = CType(e.DetailTableView.ParentItem, GridDataItem)
    If parentItem.Edit Then
        Return
    End If
    If (e.DetailTableView.DataMember = "OrderDetails") Then
        Dim ds As DataSet = CType(e.DetailTableView.DataSource, DataSet)
        e.DetailTableView.DataSource = ds.Tables("OrderDetails").Select("CustomerID = '" + parentItem("CustomerID").Text + "'")
    End If
End Sub
````


## Binding detail tables using a filtered DataView



````C#
private void RadGrid1_DetailTableDataBind(object source, Telerik.Web.UI.GridDetailTableDataBindEventArgs e)
{
    GridDataItem parentItem = e.DetailTableView.ParentItem as GridDataItem;
    if (parentItem.Edit)
    {
        return;
    }
    if (e.DetailTableView.DataMember == "OrderDetails")
    {
        DataSet ds = (DataSet)e.DetailTableView.DataSource;
        DataView dv = ds.Tables["OrderDetails"].DefaultView;
        dv.RowFilter = "CustomerID = '" + parentItem["CustomerID"].Text + "'";
        e.DetailTableView.DataSource = dv;
    }
}
````
````VB
Private Sub RadGrid1_DetailTableDataBind(ByVal source As Object, ByVal e As GridDetailTableDataBindEventArgs) Handles RadGrid1.DetailTableDataBind
    Dim parentItem As GridDataItem = CType(e.DetailTableView.ParentItem, GridDataItem)
    If parentItem.Edit Then
        Return
    End If
    If (e.DetailTableView.DataMember = "OrderDetails") Then
        Dim ds As DataSet = CType(e.DetailTableView.DataSource, DataSet)
        Dim dv As DataView = ds.Tables("OrderDetails").DefaultView
        dv.RowFilter = "CustomerID = '" + parentItem("CustomerID").Text + "'"
        e.DetailTableView.DataSource = dv
    End If
End Sub
````

