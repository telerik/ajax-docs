---
title: In Place
page_title: In Place | UI for ASP.NET AJAX Documentation
description: In Place
slug: grid/data-editing/edit-mode/in-place
tags: in,place
published: True
position: 0
---

# In Place



To display the grid column editors inline when the grid switches into edit mode, change the table view's __EditMode__ property to "InPlace".

````ASPNET
	<telerik:RadGrid
	   ID="RadGrid1" runat="server"
	   DataSourceID="SqlDataSource1"
	   GridLines="None">
	   <MasterTableView
	      EditMode="InPlace"
	      DataSourceID="SqlDataSource1">
	      <Columns>
	         <telerik:GridEditCommandColumn />
	      </Columns>
	   </MasterTableView>
	</telerik:RadGrid>
````



![A row in edit mode](images/grd_EditMode_markedup.png)

>note To limit the number of characters the user can enter in the text box editor of the inline editor, set the __MaxLength__ property of the column.
>


## Relations between the edited item and the item in regular mode

When __InPlace__ editing is applied, the grid row is of type __GridDataItem__ in regular mode and__GridEditableItem__ in edit regime. Hence you can cast the item in the __ItemCreated__ event (for example) to those types according to its current mode:

>tabbedCode

````C#
	    private void RadGrid1_ItemCreated(object sender, Telerik.Web.UI.GridItemEventArgs e)
	    {
	        if (e.Item is GridEditableItem && e.Item.IsInEditMode)
	        {
	            //the item is in edit mode    
	            GridEditableItem editedItem = e.Item as GridEditableItem;
	            //do something here 
	        }
	        else if (e.Item is GridDataItem)
	        {
	            //the item is in regular mode
	            GridDataItem dataItem = e.Item as GridDataItem;
	            //do something here 
	        }
	    }
````
````VB.NET
	    Private Sub RadGrid1_ItemCreated(ByVal sender As Object, ByVal e As Telerik.Web.UI.GridItemEventArgs) Handles RadGrid1.ItemCreated
	        If (TypeOf e.Item Is GridEditableItem AndAlso e.Item.IsInEditMode) Then
	            'the item is in edit mode   
	            Dim editedItem As GridEditableItem = CType(e.Item, GridEditableItem)
	            'do something here
	        ElseIf (TypeOf e.Item Is GridDataItem) Then
	            'the item is in regular mode   
	            Dim dataItem As GridDataItem = CType(e.Item, GridDataItem)
	            'do something here         
	        End If
	    End Sub
````
>end

For information about how to reference controls inside grid rows and edit forms, see [Referencing controls in grid row/edit form]({%slug grid/how-to/referencing-controls-in-grid-row-edit-form%}).

## Detecting edit/insert mode with in-place editing

To determine whether edit or insert operation is in progress inside the ItemCreated/ItemDataBound handler of the grid (when having inplace editing), check whether the e.Item instance inside the handler is of type __GridEditableItem__or __GridDataInsertItem__respectively. Here are some code snippets which illustrate the approach in question:

>tabbedCode

````C#
	    protected void RadGrid1_ItemCreated(object sender, Telerik.Web.UI.GridItemEventArgs e)
	    {
	        if ((e.Item is GridDataInsertItem) && e.Item.IsInEditMode)
	        {
	            //init insert operation triggered   
	        }
	        else if ((e.Item is GridEditableItem) && e.Item.IsInEditMode)
	        {
	            //edit operation triggered   
	        }
	    }
````
````VB.NET
	
	
	    Private Sub RadGrid1_ItemCreated(ByVal sender As Object, ByVal e As Telerik.Web.UI.GridItemEventArgs) Handles RadGrid1.ItemCreated
	        If (TypeOf e.Item Is GridDataInsertItem AndAlso e.Item.IsInEditMode) Then
	            'init insert operation triggered
	        ElseIf (TypeOf e.Item Is GridEditableItem AndAlso e.Item.IsInEditMode) Then
	            'edit operation triggered
	        End If
	    End Sub
````
>end
