---
title: Distinguish grid rows in hierarchy on ItemCreated/ItemDataBound
page_title: Distinguish grid rows in hierarchy on ItemCreated/ItemDataBound | RadGrid for ASP.NET AJAX Documentation
description: Distinguish grid rows in hierarchy on ItemCreated/ItemDataBound
slug: grid/hierarchical-grid-types-and-load-modes/how-to/distinguish-grid-rows-in-hierarchy-on-itemcreated/itemdatabound
tags: distinguish,grid,rows,in,hierarchy,on,itemcreated/itemdatabound
published: True
position: 0
---

# Distinguish grid rows in hierarchy on ItemCreated/ItemDataBound



## 

There are cases in which you may want to identify to which level of the hierarchy the currently created/bound row is. This is suitable when you would like to undertake a task (formatting a row, binding values to its column editors or attaching client events to them when a row is in edit mode, etc.).To identify the table to which the current row belongs/is bound (in the **ItemCreated**/**ItemDataBound** handler), you can use the **DataMember** property of the respective **GridTableView** (under NET 2.x/3.x when you do not populate the nested table content through data source control) or the **DataSourceID** property (.NET 2.x/NET 3.x). The third option is to utilize the **Name** property of each **GridTableView**(applicable for NET 2.x and NET 3.x) assigning unique value for it beforehand.Below are some sample code snippets:

**Without data source controls**



````C#
	    private void RadGrid1_ItemCreated(object sender, Telerik.Web.UI.GridItemEventArgs e)
	    {
	        //identify to which table belongs the currently bound item
	        if (e.Item.OwnerTableView.DataMember == "MyDataMember")
	        {
	            //process requested operations
	        }
	
	    }
	    private void RadGrid1_ItemDataBound(object sender, Telerik.Web.UI.GridItemEventArgs e)
	    {
	        //identify to which table belongs the currently bound item
	        if (e.Item.OwnerTableView.DataMember == "MyDataMember")
	        {
	            //process requested operations
	        }
	
	    }
````
````VB.NET
	    Private Sub RadGrid1_ItemCreated(ByVal sender As Object, ByVal e As Telerik.Web.UI.GridItemEventArgs) Handles RadGrid1.ItemCreated
	        'identify to which table belongs the currently bound item
	        If (e.Item.OwnerTableView.DataMember = "MyDataMember") Then
	            'process requested operations
	        End If
	
	    End Sub
	    Private Sub RadGrid1_ItemDataBound(ByVal sender As Object, ByVal e As Telerik.Web.UI.GridItemEventArgs) Handles RadGrid1.ItemDataBound
	        'identify to which table belongs the currently bound item
	        If (e.Item.OwnerTableView.DataMember = "MyDataMember") Then
	            'process requested operations
	        End If
	
	    End Sub
````


**With data source controls**



````C#
	    private void RadGrid1_ItemCreated(object sender, Telerik.Web.UI.GridItemEventArgs e)
	    {
	        //identify to which table belongs the currently bound item
	        if (e.Item.OwnerTableView.DataSourceID == "MyDataSourceID")
	        {
	            //process requested operations
	        }
	
	    }
	    private void RadGrid1_ItemDataBound(object sender, Telerik.Web.UI.GridItemEventArgs e)
	    {
	        //identify to which table belongs the currently bound item
	        if (e.Item.OwnerTableView.DataSourceID == "MyDataSourceID")
	        {
	            //process requested operations
	        }
	
	    }
````
````VB.NET
	    Private Sub RadGrid1_ItemCreated(ByVal sender As Object, ByVal e As Telerik.Web.UI.GridItemEventArgs) Handles RadGrid1.ItemCreated
	        'identify to which table belongs the currently bound item
	        If (e.Item.OwnerTableView.DataSourceID = "MyDataSourceID") Then
	            'process requested operations
	        End If
	    End Sub
	    Private Sub RadGrid1_ItemDataBound(ByVal sender As Object, ByVal e As Telerik.Web.UI.GridItemEventArgs) Handles RadGrid1.ItemDataBound
	        'identify to which table belongs the currently bound item
	        If (e.Item.OwnerTableView.DataSourceID = "MyDataSourceID") Then
	            'process requested operations
	        End If
	    End Sub
````


**Using Name property**



````C#
	    private void RadGrid1_ItemCreated(object sender, Telerik.Web.UI.GridItemEventArgs e)
	    {
	        //identify to which table belongs the currently bound item
	        if (e.Item.OwnerTableView.Name == "MyUniqueTableName")
	        {
	            //process requested operations
	        }
	
	    }
	    private void RadGrid1_ItemDataBound(object sender, Telerik.Web.UI.GridItemEventArgs e)
	    {
	        //identify to which table belongs the currently bound item
	        if (e.Item.OwnerTableView.Name == "MyUniqueTableName")
	        {
	            //process requested operations
	        }
	
	    }
````
````VB.NET
	    Private Sub RadGrid1_ItemCreated(ByVal sender As Object, ByVal e As Telerik.Web.UI.GridItemEventArgs) Handles RadGrid1.ItemCreated
	        'identify to which table belongs the currently bound item
	        If (e.Item.OwnerTableView.Name = "MyUniqueTableName") Then
	            'process requested operations
	        End If
	    End Sub
	    Private Sub RadGrid1_ItemDataBound(ByVal sender As Object, ByVal e As Telerik.Web.UI.GridItemEventArgs) Handles RadGrid1.ItemDataBound
	        'identify to which table belongs the currently bound item
	        If (e.Item.OwnerTableView.Name = "MyUniqueTableName") Then
	            'process requested operations
	        End If
	    End Sub
````

