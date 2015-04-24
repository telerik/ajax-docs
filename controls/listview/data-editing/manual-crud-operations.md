---
title: Manual CRUD Operations
page_title: Manual CRUD Operations | RadListView for ASP.NET AJAX Documentation
description: Manual CRUD Operations
slug: listview/data-editing/manual-crud-operations
tags: manual,crud,operations
published: True
position: 2
---

# Manual CRUD Operations



## 

The logic for manual database operations in the RadListView control are similar to the approach used in RadGrid.

The general logic is to use the ItemCommand event handler to trap the respective user action – insert/delete/update. Once we attach to the ItemCommand event handler, we can use the e.CommandName to differentiate among the different types of commands:



````C#
	protected void RadListView1_ItemCommand(object sender, RadListViewCommandEventArgs e)
	{            
	    if (e.CommandName == RadListView.CancelCommandName)            
	    {               
	        //cancel action
	    }
	    else if (e.CommandName == RadListView.UpdateCommandName)
	    {               
	        //Perform the update 
	    }
	    else if (e.CommandName == RadListView.PerformInsertCommandName)
	    {               
	        //Perform the insert  
	    }
	    else if (e.CommandName == RadListView.DeleteCommandName)
	    {               
	        //Perform the Delete
	    }        
	}			
````
````VB.NET
	    Protected Sub RadListView1_ItemCommand(ByVal sender As Object, ByVal e As RadListViewCommandEventArgs)
	        If e.CommandName = RadListView.CancelCommandName Then
	            'Cancel action          
	        ElseIf e.CommandName = RadListView.UpdateCommandName Then
	            'Perform(Update)
	        ElseIf e.CommandName = RadListView.PerformInsertCommandName Then
	            'Perform Insert           
	        ElseIf e.CommandName = RadListView.DeleteCommandName Then
	            'Delete item            
	        End If
	    End Sub
````


The **e.ListViewItem** is an object of type **RadListViewEditableItem**, and gives us access to the item, which raised the command. This, in turn, allows us to extract the newly entered data, or get the id of the record which needs to be deleted. Let us look into the possible operations which can be performed in the ItemCommand event handler.

In case the user has entered new values into the edit form, and wants to persist the data into the underlying data source, the logical steps to perform are:

1. Get a reference to the RadListViewEditableItem, which raised the event

1. Prepare a HashTable, which will host the updated values

1. Locate the row(s) to be edited in the original data source, via the keyfield value

1. Perform the actual update

The code would look like this:



````C#
	    else if (e.CommandName == RadListView.UpdateCommandName)
	    {                
	        RadListViewEditableItem editedItem = (RadListViewEditableItem)e.ListViewItem;
	        Hashtable newValues = new Hashtable();
	        editedItem.ExtractValues(newValues);
	        DataTable ProductsTable = this.RadListViewSource; //Locate the changed row in the DataSource   
	        DataRow[] changedRows = ProductsTable.Select("ProductID = " + e.ListViewItem.OwnerListView.DataKeyValues[e.ListViewItem.OwnerListView.EditIndexes[0&cd;["ProductID"].ToString());
	        if (changedRows.Length != 1)
	        {  
	            e.Canceled = true;         
	            return;            
	        }                //Update new values            
	        changedRows[0].BeginEdit();     
	        try
	        {                   
	            foreach (DictionaryEntry entry in newValues)                    
	            {                       
	                changedRows[0][(string)entry.Key] = entry.Value;            
	            }                    
	            changedRows[0].EndEdit();        
	            this.ViewState["_lvds"] = ProductsTable;           
	        }               
	        catch (Exception ex)           
	        {                  
	            changedRows[0].CancelEdit();//output a warning message as necessary  
	            e.Canceled = true;               
	        }
	    }			
````
````VB.NET
	ElseIf e.CommandName = RadListView.UpdateCommandName Then
	    Dim editedItem As RadListViewEditableItem = DirectCast(e.ListViewItem, RadListViewEditableItem)
	    Dim newValues As New Hashtable()
	        editedItem.ExtractValues(newValues)
	    Dim ProductsTable As DataTable = Me.RadListViewSource
	    'Locate the changed row in the DataSource
	    Dim changedRows As DataRow() = ProductsTable.Select("ProductID = " + e.ListViewItem.OwnerListView.DataKeyValues(e.ListViewItem.OwnerListView.EditIndexes(0))("ProductID").ToString())
	        If changedRows.Length = 0 Then
	            e.Canceled = True
	            Return
	        End If
	    'Update new values 
	        changedRows(0).BeginEdit()
	        Try
	            For Each entry As DictionaryEntry In newValues
	                changedRows(0)(DirectCast(entry.Key, String)) = entry.Value
	            Next
	            changedRows(0).EndEdit()
	            Me.ViewState("_lvds") = ProductsTable
	        Catch ex As Exception
	            changedRows(0).CancelEdit()
	    'output a warning message as necessary
	            e.Canceled = True
	        End Try
	
````


When inserting new records into the underlying datasource, the logic is very similar:

1. Get a reference to the RadListViewEditableItem, which raised the event

1. Prepare a HashTable, which will host the new values

1. Insert the new values into the actual database

The code for performing these actions would look like this:



````C#
	    else if (e.CommandName == RadListView.PerformInsertCommandName)
	    {               
	        RadListView1.FindControl("Button1").Visible = true;       
	        RadListViewEditableItem insertedItem = (RadListViewEditableItem)e.ListViewItem;   
	        Hashtable newValues = new Hashtable();                
	        insertedItem.ExtractValues(newValues);     
	        DataTable ProductsTable = this.RadListViewSource;
	                
	        DataRow newRow = ProductsTable.NewRow();
	        try
	        {                   
	            newRow["ProductID"] = ProductsTable.Rows.Count;                   
	            foreach (DictionaryEntry entry in newValues)        
	            {                        
	                newRow[(string)entry.Key] = entry.Value;           
	            }                    
	            ProductsTable.Rows.Add(newRow);                
	            this.ViewState["_lvds"] = ProductsTable;                
	            RadListView1.InsertItemPosition = RadListViewInsertItemPosition.None;   
	            RadListView1.Rebind();        
	        }               
	        catch (Exception ex)   
	        {                    //output a warning message as necessary
	        e.Canceled = true;           
	        }
	    }		
````
````VB.NET
	ElseIf e.CommandName = RadListView.PerformInsertCommandName Then
	        RadListView1.FindControl("Button1").Visible = True
	    Dim insertedItem As RadListViewEditableItem = DirectCast(e.ListViewItem, RadListViewEditableItem)
	    Dim newValues As New Hashtable()
	        insertedItem.ExtractValues(newValues)
	    Dim ProductsTable As DataTable = Me.RadListViewSource
	    Dim newRow As DataRow = ProductsTable.NewRow()
	        Try
	            newRow("ProductID") = ProductsTable.Rows.Count
	            For Each entry As DictionaryEntry In newValues
	                newRow(DirectCast(entry.Key, String)) = entry.Value
	            Next
	            ProductsTable.Rows.Add(newRow)
	            Me.ViewState("_lvds") = ProductsTable
	            RadListView1.InsertItemPosition = RadListViewInsertItemPosition.None
	            RadListView1.Rebind()
	        Catch ex As Exception
	    'output a warning message as necessary
	            e.Canceled = True
	        End Try
	
````


Finally, when deleting a record, the logic which we follow is described in the following steps:

1. Get the id of the record (from the primaryKey field), which would allow us to uniquely identify the record in the underlying data source.

1. Locate the field in the actual data table.

1. Perform the delete

The code for this operation would look like this:



````C#
	    else if (e.CommandName == RadListView.DeleteCommandName)
	    {
	        try
	        {
	            DataTable ProductsTable = this.RadListViewSource;
	            DataColumn pk = ProductsTable.Columns["ProductID"];
	            DataColumn[] pkeys = new DataColumn[1];
	            pkeys[0] = pk;
	            ProductsTable.PrimaryKey = pkeys;
	            int id = int.Parse(e.CommandArgument.ToString());
	            ProductsTable.Rows.Find(id).Delete();
	            ProductsTable.AcceptChanges();
	            this.ViewState["_lvds"] = ProductsTable;
	            RadListView1.Rebind();
	        }
	        catch (Exception ex)
	        {
	            //output a warning message as necessary
	            e.Canceled = true;
	        }
	    }	
````
````VB.NET
	ElseIf e.CommandName = RadListView.DeleteCommandName Then
	Try
	    Dim ProductsTable As DataTable = Me.RadListViewSource
	    Dim pk As DataColumn = ProductsTable.Columns("ProductID")
	    Dim pkeys As DataColumn() = New DataColumn(1) {}
	pkeys(0) = pk
	ProductsTable.PrimaryKey = pkeys
	    Dim id As Integer = Integer.Parse(e.CommandArgument.ToString())
	ProductsTable.Rows.Find(id).Delete()
	ProductsTable.AcceptChanges()
	Me.ViewState("_lvds") = ProductsTable
	RadListView1.Rebind()
	Catch ex As Exception
	    'output a warning message as necessary
	e.Canceled = True
	End Try
````

