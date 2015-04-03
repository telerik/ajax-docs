---
title: Hierarchical data-binding using DetailTableDataBind event
page_title: Hierarchical data-binding using DetailTableDataBind event | UI for ASP.NET AJAX Documentation
description: Hierarchical data-binding using DetailTableDataBind event
slug: grid/hierarchical-grid-types-and-load-modes/hierarchical-data-binding-using-detailtabledatabind-event
tags: hierarchical,data-binding,using,detailtabledatabind,event
published: True
position: 4
---

# Hierarchical data-binding using DetailTableDataBind event



To display hierarchical data, __RadGrid__ renders one or more detail tables for each item (row) in the __MasterTableView__. In a multi-level hierarchy, each item of every detail table can have one or more detail tables as well. The level of the grid hierarchy can be arbitrarily deep.

When binding each detail table view, __RadGrid__ fires the __DetailTableDataBind__ event. The argument for a __DetailTableDataBind__ event handler carries all the information you need for binding the detail table, including the table view that should be bound, its parent item, and so on.

When the __DetailTableDataBind__ event occurs depends on the [HierarchyLoadMode]({%slug grid/hierarchical-grid-types-and-load-modes/hierarchy-load-modes%}) of the corresponding __GridTableView__.

* If __HierarchyLoadMode__ is set to __ServerBind__, then the __DetailTableDataBind__ event fires immediately after the corresponding parent item is bound.

* If __HierarchyLoadMode__ is set to __ServerOnDemand__, the __DetailTableDataBind__ event does not occur until the detail table's parent item is expanded.

## Using DetailTableDataBind

The main steps when binding a hierarchical grid using the __DetailTableDataBind__ event are as follows:

1. Create the grid, either [statically]({%slug grid/defining-structure/declarative-definition%}) or [dynamically]({%slug grid/defining-structure/creating-a-radgrid-programmatically%}). Set the properties of the grid to provide the appearance and functionality you want. You must create and add __GridTableView__ objects to the __DetailTables__ collection of the __MasterTableView__ and any detail tables that have their own nested details.

1. Bind the master table view of the grid either [declaratively]({%slug grid/data-binding/understanding-data-binding/server-side-binding/declarative-datasource%}) or by assigning a [NeedDataSource event handler]({%slug grid/data-binding/understanding-data-binding/server-side-binding/advanced-data-binding-(using-needdatasource-event)%}) to the grid. Optionally, you can assign data sources to the detail tables, which can subsequently be configured in the __DetailTableDataBind__ event handler.

1. Assign the __DetailTableDataBind__ event handler to the grid.

1. In the __DetailTableDataBind__ event handler, assign or configure the data sources for the detail tables in the grid. You can determine which datasource should be related to the parent __GridTableView__ by checking the __Name__ property, __DataSourceID__ property (when using data source controls) or __DataMember__ property (when not using data source controls). If the DetailTableDataBind event is not handled, each detail table will be bound to the same datasource as the master table without any filtering applied on the records.

>note When binding RadGrid in DetailTableDataBind, you must not use declarative relations (ParentTableRelations) in markup.
>


For a live example that demonstrates binding a hierarchical grid using the __DetailTableDataBind__ event, see [Hierarchy with DetailTableDataBind event](http://demos.telerik.com/aspnet-ajax/Grid/Examples/Programming/DetailTableDataBind/DefaultCS.aspx).

>note You can use the __DetailTableDataBind__ event handler to assign a __NoRecordsTemplate__ for the __GridTableView__ . This is a template that is displayed if there are no records in the assigned __DataSource__ (see[Using NoRecordsTemplate]({%slug grid/data-binding/using-norecordstemplate%})).
>


When implementing a __DetailTableDataBind__ event handler, you should construct a detail data source (list of objects) that the detail table view displays. This data source should be filtered in the appropriate manner: it should contain only detail table records that correspond to the particular parent item in which the table is nested.

The following examples show some possible ways to filter the detail data source. These examples all assume the approach where the __DataSource__ and __DataMember__ properties of the detail tables are assigned in the __NeedDataSource__ event handler, and __DetailTableDataBind__ is used to configure the data source:

## Binding detail tables using database select

>tabbedCode

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



````VB.NET
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


>end

## Binding detail tables using DataTable.Select

>tabbedCode

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



````VB.NET
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


>end

## Binding detail tables using a filtered DataView

>tabbedCode

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



````VB.NET
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


>end
