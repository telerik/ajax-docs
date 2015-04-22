---
title: Accessing Cells and Rows
page_title: Accessing Cells and Rows | RadGrid for ASP.NET AJAX Documentation
description: Accessing Cells and Rows
slug: grid/rows/accessing-cells-and-rows
tags: accessing,cells,and,rows
published: True
position: 3
---

# Accessing Cells and Rows



## Accessing Rows

The **GridTableView** object has an **Items** property that contains all the data rows in the table view. Each row is represented by a **GridDataItem** or **GridEditFormItem** object, depending on whether the row is an edit form. The **GridDataItem** or **GridEditFormItem** has an **ItemIndex** property that is its index in the **Items** property collection.

When implementing an event handler for an event such as **ItemCreated**, **ItemDataBound**, **ItemCommand**, **UpdateCommand**, **InsertCommand** or **DeleteCommand**, you can obtain a **GridDataItem** or **GridEditFormItem** for the row from the event arguments (**e.Item** or, in a hierarchical grid, **e.Item.OwnerTableView.ParentItem**).



````C#
	        //e is the event argument object
	        if (e.Item is GridDataItem)
	        {
	            GridDataItem dataItem = e.Item as GridDataItem;
	        }
	        else if (e.Item is GridEditFormItem)
	        {
	            GridEditFormItem editItem = e.Item as GridEditFormItem;
	        }
````
````VB.NET
	    'e is the event argument object
	         If TypeOf e.Item Is GridDataItem Then 
	    Dim dataItem As GridDataItem = CType(e.Item, GridDataItem)
	        ElseIf TypeOf e.Item Is GridEditFormItem Then
	    Dim editItem As GridEditFormItem = CType(e.Item, GridEditFormItem)
	    End If
````


## Accessing Cells Using Column Unique Name

Because of features such as [column reordering]({%slug grid/columns/reordering%}) and [grouping]({%slug grid/functionality/grouping/overview%}), the index of individual columns can change on the client. This means that using indexes to access individual cells in the **Cells** collection of a row is not a reliable method of obtaining a cell in a particular column.

To provide a reliable way of locating the cell in a particular column, each column in the grid has a **UniqueName** propertyof type string. This property is assigned automatically at design time. For example, an auto-generated **GridBoundColumn** with **DataField** 'ContactName' generates a **UniqueName** of 'ContactName').You can also set the **UniqueName** property explicitly, although the automatic generation handles most cases. Using the **UniqueName** property of a column lets you reliably locate a column even when its index changes.



````C#
	        TableCell cell = dataItem["ColumnUniqueName"]; //where dataItem is object of type GridDataItem
````
````VB.NET
	    Dim cell As TableCell = dataItem("ColumnUniqueName")
	    'where dataItem is object of type GridDataItem
````


To get the cell's value, use the **Text** property of the cell:



````C#
	        string itemValue = dataItem["ColumnUniqueName"].Text; //where dataItem is object of type GridDataItem
````
````VB.NET
	    Dim itemValue As String = dataItem("ColumnUniqueName").Text
	    'where dataItem is object of type GridDataItem
````


>caution This approach of obtaining cell values works for auto-generated columns and built-in column types except for **GridTemplateColumn** and **GridCheckBoxColumn** . For template columns, you must find the control in the grid cell and extract its value.
>


When you need to retrieve value from a **GridCheckBoxColumn** you have to	first get reference to the **TableCell** objectand cast the first control from its Controls collection to a **CheckBox**.	Then you can use the **Checked** property for retrieving the checked state:



````C#
	          bool boolValue = (item["GridCheckBoxColumnUniqueName"].Controls[0] as CheckBox).Checked;
````
````VB.NET
	          Dim boolValue As Boolean = TryCast(item("GridCheckBoxColumnUniqueName").Controls(0), CheckBox).Checked
````


The same approach can be applied to header and footer items. Simply reference the header or footer item of the control and use the column **UniqueName** property to identify the cell of interest:



````C#
	        GridHeaderItem headerItem = RadGrid1.MasterTableView.GetItems(GridItemType.Header)[0] as GridHeaderItem;
	        // fetch the data with headerItem["ColumnUniqueName"].Text
	        // or (headerItem["ColumnUniqueName"].Controls(0) as LinkButton).Text if sorting is enabled
````
````VB.NET
	
	    Dim headerItem As GridHeaderItem = CType(RadGrid1.MasterTableView.GetItems(GridItemType.Header)(0), GridHeaderItem)
	    'fetch the data with headerItem("ColumnUniqueName").Text
	    'or CType(headerItem["ColumnUniqueName"].Controls(0), LinkButton).Text if sorting is enabled
	
````




````C#
	        GridFooterItem footerItem = RadGrid1.MasterTableView.GetItems(GridItemType.Footer)[0] as GridFooterItem;
	        //fetch the data with footerItem["ColumnUniqueName"].Text
````
````VB.NET
	    Dim footerItem As GridFooterItem = CType(RadGrid1.MasterTableView.GetItems(GridItemType.Footer)(0), GridFooterItem)
	    'fetch the data with footerItem("ColumnUniqueName").Text
````


## Accessing Controls in Template Column

While accessing cells with Template columns remains the same, you could use a little different approach to get the controls in the cell. For example, to access a TextBox declared in the ItemTemplate of the column:



````C#
	        TableCell cell = dataItem["ColumnUniqueName"];
	        TextBox textBox = dataItem.FindControl("TextBoxID") as TextBox;
````
````VB.NET
	    Dim cell As TableCell = dataItem("ColumnUniqueName")
	    Dim textBox As TextBox = CType(dataItem.FindControl("TextBoxID"), TextBox)
````


## Accessing the Value of Cells in Edit Mode

If the grid item is in edit mode, you can still use the column's **UniqueName** to access the cell (even if it is in an edit form). Then you can locate the control that contains the cell's value and, depending on [the type of the column editor]({%slug grid/columns/column-types%}), cast it to the appropriate type, and access the value.



````C#
	
	        TableCell cell = editedItem["ColumnUniqueName"];
	        string itemValue = (cell.Controls[0] as TextBox).Text;
	
````
````VB.NET
	    Dim cell As TableCell = editedItem("ColumnUniqueName")
	    Dim itemValue As String = (CType(cell.Controls(0), TextBox)).Text
````


If you have a reference to the column object, you can get an instance of**GridEditManager** from the item and use its **GetColumnEditor(editableCol)** method to access the column editor.



````C#
	        GridEditableItem editedItem = e.Item as GridEditableItem;
	        GridEditManager editMan = editedItem.EditManager;
	        IGridColumnEditor editor = editMan.GetColumnEditor(columnReference);
````
````VB.NET
	    Dim editedItem As GridEditableItem = CType(e.Item, GridEditableItem)
	    Dim editMan As GridEditManager = editedItem.EditManager
	    Dim editor As IGridColumnEditor = editMan.GetColumnEditor(editableCol)
````


For a live example that uses **GridEditManager** to access the column editor, see [Using Column Editors](http://demos.telerik.com/aspnet-ajax/Grid/Examples/DataEditing/EditModes/DefaultCS.aspx).

## Accessing Controls in Edit/Insert Mode

When editing or inserting a grid item, you could access and modify the controls generated in the editable item.



````C#
	    protected void RadGrid1_ItemDataBound(object sender, GridItemEventArgs e)
	    {
	        if (e.Item is GridEditableItem && e.Item.IsInEditMode)
	        {
	           GridEditableItem editableItem = e.Item as GridEditableItem;
	           // execute custom logic
	        }
	    }
````
````VB.NET
	    Protected Sub RadGrid1_ItemDataBound(sender As Object, e As GridItemEventArgs) Handles RadGrid1.ItemDataBound
	        If TypeOf e.Item Is GridEditableItem AndAlso e.Item.IsInEditMode Then
	            Dim editableItem As GridEditableItem = TryCast(e.Item, GridEditableItem)
	            ' execute custom logic
	        End If
	    End Sub
````


However, you will need to use a different approach corresponding to the chosen **EditFormType**.

* **AutoGenerated:**



````C#
	         TextBox textBox = editableItem["ColumnUniqueName"].Controls[0] as TextBox;
````
````VB.NET
	    Dim textBox As TextBox = CType(editableItem("ColumnUniqueName").Controls(0), TextBox)
````


* **Template:**



````C#
	         TextBox textBox = editableItem.FindControl("TextBox1") as TextBox;
````
````VB.NET
	    Dim textBox As TextBox = CType(editableItem.FindControl("TextBox1"), TextBox)
````


* **WebUserControl:**



````C#
	         UserControl userControl = editableItem.FindControl(GridEditFormItem.EditFormUserControlID) as UserControl;
	         TextBox textBox = userControl.FindControl("TextBox1") as TextBox;
````
````VB.NET
	    Dim userControl As UserControl = CType(editableItem.FindControl(GridEditFormItem.EditFormUserControlID), UserControl)
	    Dim textBox As TextBox = CType(userControl.FindControl("TextBox1"), TextBox)
````


>caution  **InPlace** EditMode is supported only for an **AutoGenerated** EditFormType. In this case, the editable item is of type **GridDataItem** or **GridDataInsertItem** , rather than **GridEditFormItem** and **GridEditFormInsertItem** as usual.
>


## Accessing Cells in Client-Side Code

You can access the cells client-side using the [getCellByColumnUniqueName]({%slug grid/client-side-programming/gridtableview-object/methods/getcellbycolumnuniquename%}) method of the **GridTableView** client-side object. For an example that uses this method to access cell values, see [Getting Cell Values for Selected Rows Client-side](3797B94B-07EE-416C-9E83-57AB21B39EFB).

## Accessing Table Views in a Hierarchical Grid

In a hierarchical grid, each item in the **Items** collection of a parent **GridTableView** has a **ChildItem** property of type **GridNestedViewItem**. This child item is the container for the nested child table(s). The **GridNestedViewItem** has a **NestedTableViews** property that holds the collection of all the detail tables for the parent table.

You can use these properties to access the detail tables of a row in the parent table, as follows:



````C#
	        GridTableView firstDetail = RadGrid1.MasterTableView.Items[0].ChildItem.NestedTableViews[0];
````
````VB.NET
	    Dim firstDetail As GridTableView = RadGrid1.MasterTableView.Items(0).ChildItem.NestedTableViews(0)
````


Conversely, if you have a reference to the instance of an item in a child table and want to access the parent table view, you can use the **ParentItem** property.



````C#
	        GridTableView parentTable = childItem.OwnerTableView.ParentItem.OwnerTableView;
````
````VB.NET
	    Dim parentTable As GridTableView = childItem.OwnerTableView.ParentItem.OwnerTableView
````


# See Also

 * [Column Types]({%slug grid/columns/column-types%})
