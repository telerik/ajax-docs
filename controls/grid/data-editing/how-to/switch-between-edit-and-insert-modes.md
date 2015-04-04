---
title: Switch Between Edit and Insert Modes
page_title: Switch Between Edit and Insert Modes | UI for ASP.NET AJAX Documentation
description: Switch Between Edit and Insert Modes
slug: grid/data-editing/how-to/switch-between-edit-and-insert-modes
tags: switch,between,edit,and,insert,modes
published: True
position: 1
---

# Switch Between Edit and Insert Modes



You can fine tune the behavior of Telerik RadGrid when inserting/editing items. Consider the scenario below:

## Update to Insert mode and Insert to Update mode

This is extended version of the previous case.Here is the new part:You click "Add New Record" button and a new record is inserted in Telerik RadGrid. Then you click the edit button at another record. The selected item goes in edit mode and the insert new record closes. You should modify the setting for the __IsItemInserted__ property of the respective __GridTableView__:



````C#
	    protected void RadGrid1_ItemCommand(object source, Telerik.Web.UI.GridCommandEventArgs e)
	    {
	        RadGrid grid = (source as RadGrid);
	        if (e.CommandName == RadGrid.InitInsertCommandName)
	        {
	            grid.MasterTableView.ClearEditItems();
	        }
	        if (e.CommandName == RadGrid.EditCommandName)
	        {
	            e.Item.OwnerTableView.IsItemInserted = false;
	        }
	    } 
````
````VB.NET
	    Protected Sub RadGrid1_ItemCommand(ByVal source As Object, ByVal e As Telerik.Web.UI.GridCommandEventArgs)
	        Dim grid As RadGrid = CType(source, RadGrid)
	        If (e.CommandName = RadGrid.InitInsertCommandName) Then
	            grid.MasterTableView.ClearEditItems()
	        End If
	        If (e.CommandName = RadGrid.EditCommandName) Then
	            e.Item.OwnerTableView.IsItemInserted = False
	        End If
	    End Sub
````

