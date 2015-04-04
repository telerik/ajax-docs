---
title: Adding Tooltips for Grid Items
page_title: Adding Tooltips for Grid Items | UI for ASP.NET AJAX Documentation
description: Adding Tooltips for Grid Items
slug: grid/appearance-and-styling/adding-tooltips-for-grid-items
tags: adding,tooltips,for,grid,items
published: True
position: 7
---

# Adding Tooltips for Grid Items



## 

There are many cases when you want you grid to show a tooltip when an item is hovered with the mouse. Tooltips are understood by screen readers and can be used as an accessibility feature.

In brief you need to handle either __ItemDataBound__ or __ItemCreatedEvent__. There are two possible scenarios.In the first one you show the tooltips only when __GridHeaderItem__ is hovered. In this case you should check in the event handler if __e.Item__ is __GridHeaderItem__.

The second scenario is when the tooltips will be shown for any grid item. In this case you should check if __e.Item__ is __GridDataItem__.

Consider the example below:



````C#
	    protected void RadGrid1_ItemCreated(object sender, Telerik.Web.UI.GridItemEventArgs e)
	    {
	        //Check for GridHeaderItem if you wish tooltips only for the header cells
	        if (e.Item is GridHeaderItem)
	        {
	            GridHeaderItem headerItem = e.Item as GridHeaderItem;
	
	            foreach (GridColumn column in RadGrid1.MasterTableView.RenderColumns)
	            {
	                if (column is GridBoundColumn)
	                {
	                    //if the sorting feature of the grid is enabled
	                    (headerItem[column.UniqueName].Controls[0] as LinkButton).ToolTip = column.UniqueName;
	
	                    //if the sorting feature is disabled for this column or the entire grid
	                    headerItem[column.UniqueName].ToolTip = column.UniqueName;
	                }
	            }
	        }
	        if (e.Item is GridDataItem)
	        {
	            GridDataItem gridItem = e.Item as GridDataItem;
	            foreach (GridColumn column in RadGrid1.MasterTableView.RenderColumns)
	            {
	                if (column is GridBoundColumn)
	                {
	                    //this line will show a tooltip based on the CustomerID data field
	                    gridItem[column.UniqueName].ToolTip = "CustomerID: " + 
	                        gridItem.OwnerTableView.DataKeyValues[gridItem.ItemIndex]["CustomerID"].ToString();
	
	                    //This is in case you wish to display the column name instead of data field.
	                    //gridItem[column.UniqueName].ToolTip = "Tooltip: " + column.UniqueName;
	                }
	            }
	        }
	    }
````
````VB.NET
	    Protected Sub RadGrid1_ItemCreated(ByVal sender As Object, ByVal e As Telerik.Web.UI.GridItemEventArgs)
	        'Check for GridHeaderItem if you wish tooltips only for the header cells
	        If (TypeOf e.Item Is GridHeaderItem) Then
	            Dim headerItem As GridHeaderItem = CType(e.Item, GridHeaderItem)
	
	            For Each column As GridColumn In RadGrid1.MasterTableView.RenderColumns
	                If (TypeOf column Is GridBoundColumn) Then
	                    'if the sorting feature of the grid is enabled
	                    CType(headerItem(column.UniqueName).Controls(0), LinkButton).ToolTip = column.UniqueName
	
	                    'if the sorting feature is disabled for this column or the entire grid
	                    headerItem(column.UniqueName).ToolTip = column.UniqueName
	                End If
	            Next
	        End If
	
	        If (TypeOf e.Item Is GridDataItem) Then
	            Dim gridItem As GridDataItem = CType(e.Item, GridDataItem)
	
	            For Each column As GridColumn In RadGrid1.MasterTableView.RenderColumns
	                If (TypeOf column Is GridBoundColumn) Then
	                    'this line will show a tooltip based on the CustomerID data field
	                    gridItem(column.UniqueName).ToolTip = ("CustomerID: " +
	                                                           gridItem.OwnerTableView.DataKeyValues(gridItem.ItemIndex)("CustomerID").ToString)
	                    'This is in case you wish to display the column name instead of data field.
	                    'gridItem[column.UniqueName].ToolTip = "Tooltip: " + column.UniqueName;
	                End If
	            Next
	        End If
	    End Sub
````

