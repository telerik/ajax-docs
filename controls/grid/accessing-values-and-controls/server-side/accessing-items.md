---
title: Accessing Items
page_title: Accessing rows Server-Side - RadGrid | Telerik UI for ASP.NET AJAX
description: Accessing Grid Rows on server
slug: grid/accessing-values-and-controls/server-side/accessing-items
published: True
position: 2
---


# Accessing rows

The **GridTableView** object has an **Items** property that contains all the data rows in the table view. Each row is represented by a **GridDataItem** or **GridEditFormItem** object, depending on whether the row is an edit form. The **GridDataItem** or **GridEditFormItem** has an **ItemIndex** property that is its index in the **Items** property collection.

When implementing an event handler for an event such as **ItemCreated**, **ItemDataBound**, **ItemCommand**, **UpdateCommand**, **InsertCommand** or **DeleteCommand**, you can obtain a **GridDataItem** or **GridEditFormItem** for the row from the event arguments (**e.Item** or, in a hierarchical grid, **e.Item.OwnerTableView.ParentItem**).

**ItemCreated**

````C#
//e is the event argument object
protected void RadGrid1_ItemCreated(object sender, GridItemEventArgs e)
{
    if (e.Item is GridDataItem)
    {
        GridDataItem dataItem = e.Item as GridDataItem;
    }
    else if (e.Item is GridEditFormItem)
    {
        GridEditFormItem editItem = e.Item as GridEditFormItem;
    }
}
````
````VB
Protected Sub RadGrid1_ItemCreated(ByVal sender As Object, ByVal e As GridItemEventArgs)
    If TypeOf e.Item Is GridDataItem Then
        Dim dataItem As GridDataItem = TryCast(e.Item, GridDataItem)
    ElseIf TypeOf e.Item Is GridEditFormItem Then
        Dim editItem As GridEditFormItem = TryCast(e.Item, GridEditFormItem)
    End If
End Sub
````

**ItemDataBound**

````C#
// e is the event argument object
protected void RadGrid1_ItemDataBound(object sender, GridItemEventArgs e)
{
    if (e.Item is GridDataItem)
    {
        GridDataItem dataItem = e.Item as GridDataItem;
    }
    else if (e.Item is GridEditFormItem)
    {
        GridEditFormItem editItem = e.Item as GridEditFormItem;
    }
}
````
````VB
'e is the event argument object
Protected Sub RadGrid1_ItemDataBound(ByVal sender As Object, ByVal e As GridItemEventArgs)
    If TypeOf e.Item Is GridDataItem Then
        Dim dataItem As GridDataItem = TryCast(e.Item, GridDataItem)
    ElseIf TypeOf e.Item Is GridEditFormItem Then
        Dim editItem As GridEditFormItem = TryCast(e.Item, GridEditFormItem)
    End If
End Sub
````

**PreRender**

````C#
protected void RadGrid1_PreRender(object sender, EventArgs e)
{
    RadGrid grid = (RadGrid)sender;

    foreach (GridDataItem dataItem in grid.Items)
    {

    }
}
````
````VB
Protected Sub RadGrid1_PreRender(ByVal sender As Object, ByVal e As EventArgs)
    Dim grid As RadGrid = CType(sender, RadGrid)

    For Each dataItem As GridDataItem In grid.Items

    Next
End Sub
````

>note Once you have reference to a certain GridItem you can reach the data in its cells and get references to its embedded controls by following the instructions in the [Accessing Cells and Values]({%slug grid/accessing-values-and-controls/server-side/accessing-cells%}) and [Accessing Controls]({%slug grid/accessing-values-and-controls/server-side/accessing-controls%}) articles.

## Accessing items by Looping through the Items collection from a Button Click

````C#
protected void RadButton1_Click(object sender, EventArgs e)
{
    foreach (GridDataItem dataItem in RadGrid1.Items)
    {
        // do something
    }

    foreach (GridDataItem dataItem in RadGrid1.MasterTableView.Items)
    {
        // do something
    }
}
````
````VB
Protected Sub RadButton1_Click(ByVal sender As Object, ByVal e As EventArgs)
    For Each dataItem As GridDataItem In RadGrid1.Items

    Next

    For Each dataItem As GridDataItem In RadGrid1.MasterTableView.Items

    Next
End Sub
````

## Accessing Items by Index on a Button Click

````C#
protected void RadButton1_Click(object sender, EventArgs e)
{
    GridDataItem dataItem = RadGrid1.Items[0];
}
````
````VB
Protected Sub RadButton1_Click(ByVal sender As Object, ByVal e As EventArgs)
    Dim dataItem As GridDataItem = RadGrid1.Items(0)
End Sub
````

>note In order to have access to all the items/rows in all Tables/DetailTables in the Hierarchy, the rows/items must be expanded propor to accessing them or the HierarchyLoadMode set to Client.

## Accessing all items in the Hierarchy at once on Button Click

````C#
protected void RadButton1_Click(object sender, EventArgs e)
{
    GridDataItemCollection allItemsHierarchy = RadGrid1.MasterTableView.ItemsHierarchy;
}
````
````VB
Protected Sub RadButton1_Click(ByVal sender As Object, ByVal e As EventArgs)
    Dim allItemsHierarchy As GridDataItemCollection = RadGrid1.MasterTableView.ItemsHierarchy
End Sub
````

## Iterating through the rows of tables on a 3 level hierarchy on Button Click

Sample Code Snippets for a three level hierarchy can be found at [Programmatic Data Binding Using the NeedDataSource Event - Three level Hierarchy]({%slug grid/data-binding/server-side-binding/programmatic-databinding-using-needdatasource-event %}#three-level-hierarchy)

````C#
protected void RadButton1_Click(object sender, EventArgs e)
{
    GridTableView CustomersTbl = RadGrid1.MasterTableView;

    // for each row in Customers Table
    foreach (GridDataItem customerItem in CustomersTbl.Items)
    {
        // if has Child items
        if (customerItem.HasChildItems)
        {
            // Get the Nested Table of that row
            GridTableView OrdersTbl = customerItem.ChildItem.NestedTableViews[0];

            // for each row in the Nested Table Orders Table.
            foreach (GridDataItem orderItem in OrdersTbl.Items)
            {
                if (orderItem.HasChildItems)
                {
                    // Get the Nested Table of that row
                    GridTableView OrderDetailsTbl = orderItem.ChildItem.NestedTableViews[0];

                    // for each row in the Nested Table OrderDetails Table.
                    foreach (GridDataItem orderDetailItem in OrderDetailsTbl.Items)
                    {
                        // do something
                    }
                }
            }
        }
    }
}
````
````VB
Protected Sub RadButton1_Click(ByVal sender As Object, ByVal e As EventArgs)
    Dim CustomersTbl As GridTableView = RadGrid1.MasterTableView

    For Each customerItem As GridDataItem In CustomersTbl.Items

        If customerItem.HasChildItems Then
            Dim OrdersTbl As GridTableView = customerItem.ChildItem.NestedTableViews(0)

            For Each orderItem As GridDataItem In OrdersTbl.Items

                If orderItem.HasChildItems Then
                    Dim OrderDetailsTbl As GridTableView = orderItem.ChildItem.NestedTableViews(0)

                    For Each orderDetailItem As GridDataItem In OrderDetailsTbl.Items

                    Next

                End If

            Next

        End If
    Next
End Sub
````

## Accessing the parent row of a DetailTable by clicking on a Button inside the DetailTable

````C#
protected void RadButton1_Click(object sender, EventArgs e)
{
    // Button in Template column of Table Level3
    RadButton btn = (RadButton)sender;
    // Row in which the Button is located at
    GridDataItem currentRow = btn.NamingContainer as GridDataItem;
    // Table level 3
    GridTableView currentTable = currentRow.OwnerTableView;
    // NestedViewItem for Table level 3
    GridNestedViewItem currentNestedViewItem = currentTable.NamingContainer as GridNestedViewItem;
    // Row of Table level 2
    GridDataItem parentRow = currentNestedViewItem.ParentItem;
}
````
````VB
Protected Sub RadButton1_Click(ByVal sender As Object, ByVal e As EventArgs)
    Dim btn As RadButton = CType(sender, RadButton)
    Dim currentRow As GridDataItem = TryCast(btn.NamingContainer, GridDataItem)
    Dim currentTable As GridTableView = currentRow.OwnerTableView
    Dim currentNestedViewItem As GridNestedViewItem = TryCast(currentTable.NamingContainer, GridNestedViewItem)
    Dim parentRow As GridDataItem = currentNestedViewItem.ParentItem
End Sub
````

## Accessing GroupHeaderItem

````C#
protected void RadGrid1_PreRender(object sender, EventArgs e)
{
    var grid = (RadGrid)sender;

    foreach (GridGroupHeaderItem groupHeader in grid.MasterTableView.GetItems(GridItemType.GroupHeader))
    {
        var aggreGateValue = (int)groupHeader.AggregatesValues["ShipCountry"];
        var lblItemCount = groupHeader.FindControl("lblGroupItemCount") as Label;
        lblItemCount.Text = string.Format("({0})", aggreGateValue.ToString());
    }
}
````
````VB
Protected Sub RadGrid1_PreRender(ByVal sender As Object, ByVal e As EventArgs)
    Dim grid = CType(sender, RadGrid)

    For Each groupHeader As GridGroupHeaderItem In grid.MasterTableView.GetItems(GridItemType.GroupHeader)
        Dim aggreGateValue = CInt(groupHeader.AggregatesValues("ShipCountry"))
        Dim lblItemCount = TryCast(groupHeader.FindControl("lblGroupItemCount"), Label)
        lblItemCount.Text = String.Format("({0})", aggreGateValue.ToString())
    Next
End Sub
````

## Accessing GridDetailTemplateItem

````C#
protected void RadGrid1_PreRender(object sender, EventArgs e)
{
    var grid = (RadGrid)sender;
    var detailTemplateItems = grid.MasterTableView.GetItems(GridItemType.DetailTemplateItem);

    foreach (GridDetailTemplateItem detailTemplateItem in detailTemplateItems)
    {
        detailTemplateItem.BackColor = Color.LightGray;
    }
}
````
````VB
Protected Sub RadGrid1_PreRender(ByVal sender As Object, ByVal e As EventArgs)
    Dim grid = CType(sender, RadGrid)
    Dim detailTemplateItems = grid.MasterTableView.GetItems(GridItemType.DetailTemplateItem)

    For Each detailTemplateItem As GridDetailTemplateItem In detailTemplateItems
        detailTemplateItem.BackColor = Color.LightGray
    Next
End Sub
````

## Hiding GridDetailTemplateItem when exporting

````C#
protected void RadGrid1_PreRender(object sender, EventArgs e)
{
    var grid = (RadGrid)sender;

    if (grid.IsExporting)
    {
        var detailTemplateItems = grid.MasterTableView.GetItems(GridItemType.DetailTemplateItem);

        foreach (GridDetailTemplateItem detailTemplateItem in detailTemplateItems)
        {
            detailTemplateItem.Visible = false;
        }
    }
}
````
````VB
Protected Sub RadGrid1_PreRender(ByVal sender As Object, ByVal e As EventArgs)
    Dim grid = CType(sender, RadGrid)

    If grid.IsExporting Then
        Dim detailTemplateItems = grid.MasterTableView.GetItems(GridItemType.DetailTemplateItem)

        For Each detailTemplateItem As GridDetailTemplateItem In detailTemplateItems
            detailTemplateItem.Visible = False
        Next
    End If
End Sub
````


# Edit items

Items in edit mode are contained in the [EditItems](https://docs.telerik.com/devtools/aspnet-ajax/api/server/Telerik.Web.UI/RadGrid#edititems) property of the [RadGrid](https://docs.telerik.com/devtools/aspnet-ajax/api/server/Telerik.Web.UI/RadGrid) object.

## Accessing the Edit item on Button Click


````C#
protected void RadButton1_Click(object sender, EventArgs e)
{
    // Insert Item
    if (RadGrid1.MasterTableView.IsItemInserted)
    {
        GridEditableItem insertItem = RadGrid1.MasterTableView.GetInsertItem();
    }

    // Edit Item
    GridItemCollection editItems = RadGrid1.EditItems;

    foreach(GridEditableItem editItem in editItems)
    {

    }
}
````
````VB
Protected Sub RadButton1_Click(ByVal sender As Object, ByVal e As EventArgs)
    'Insert Item
    If RadGrid1.MasterTableView.IsItemInserted Then
        Dim insertItem As GridEditableItem = RadGrid1.MasterTableView.GetInsertItem()
    End If

    'Edit item
    Dim editItems As GridItemCollection = RadGrid1.EditItems
    
    For Each editItem As GridEditableItem In editItems
    
    Next
End Sub
````


## Accessing the Edit Item when the Grid enters into Insert/Edit Mode

The type of the editable item is can differ depending on the **EditMode** set to the **MasterTableView**.
* In **WebForms** and **PopUp** edit mode, the insert item is **GridEditFormInsertItem** and edit item is **GridEditFormItem**.
* When using **InPlace** edit mode, the insert item comes as **GridDataInsertItem** and the edit item as **GridDataItem**.

````C#
private void RadGrid1_ItemCreated(object sender, Telerik.Web.UI.GridItemEventArgs e)
{
    if(e.Item is GridEditableItem && e.Item.IsInEditMode)
    {
        if (e.Item is GridEditFormInsertItem || e.Item is GridDataInsertItem)
        {
            // insert item
        }
        else
        {
            // edit item

            if (e.Item is GridEditFormItem) //EditMode WebForms/PopUp
            {
                // edit item containig the controls for editing
                GridEditFormItem editItem = (e.Item as GridEditFormItem);

                // respective data item containing the cells with populated text
                GridDataItem dataItem = editItem.ParentItem as GridDataItem;
            }
            else if (e.Item is GridDataItem) //EditMode InPlace
            {
                // edit item containing the controls for editing
                GridDataItem editItem = (e.Item as GridDataItem);
            }
        }
    }
}

private void RadGrid1_ItemDataBound(object sender, Telerik.Web.UI.GridItemEventArgs e)
{
    if (e.Item is GridEditFormInsertItem || e.Item is GridDataInsertItem)
    {
        // insert item
    }
    else
    {
        // edit item

        if (e.Item is GridEditFormItem) //EditMode WebForms/PopUp
        {
            // edit item containig the controls for editing
            GridEditFormItem editItem = (e.Item as GridEditFormItem);

            // respective data item containing the cells with populated text
            GridDataItem dataItem = editItem.ParentItem as GridDataItem;
        }
        else if (e.Item is GridDataItem) //EditMode InPlace
        {
            // edit item containing the controls for editing
            GridDataItem editItem = (e.Item as GridDataItem);
        }
    }
}
````
````VB
Private Sub RadGrid1_ItemCreated(ByVal sender As Object, ByVal e As Telerik.Web.UI.GridItemEventArgs) Handles RadGrid1.ItemCreated
    If TypeOf e.Item Is GridEditableItem And e.Item.IsInEditMode Then

        If TypeOf e.Item Is GridEditFormInsertItem OrElse TypeOf e.Item Is GridDataInsertItem Then
            ' insert item
        Else
            ' edit item

            If TypeOf e.Item is GridEditFormItem 'EditMode WebForms/PopUp
                ' edit item containig the controls for editing
                Dim edititem As GridEditFormItem = CType(e.Item, GridEditFormItem)

                ' respective data item containing the cells with populated text
                Dim dataItem As GridDataItem = CType(editItem.ParentItem, GridDataItem)

            Elseif TypeOf e.Item Is GridDataItem Then 'EditMode WebForms/PopUp
                ' edit item containing the controls for editing
                Dim editItem As GridDataItem = CType(e.Item, GridDataItem))
            End If
        End If
    End If
End Sub 'RadGrid1_ItemCreated

Private Sub RadGrid1_ItemDataBound(ByVal sender As Object, ByVal e As Telerik.Web.UI.GridItemEventArgs) Handles RadGrid1.ItemDataBound
    If TypeOf e.Item Is GridEditableItem And e.Item.IsInEditMode Then

        If TypeOf e.Item Is GridEditFormInsertItem OrElse TypeOf e.Item Is GridDataInsertItem Then
            ' insert item
        Else
            ' edit item

            If TypeOf e.Item is GridEditFormItem 'EditMode WebForms/PopUp
                ' edit item containig the controls for editing
                Dim edititem As GridEditFormItem = CType(e.Item, GridEditFormItem)

                ' respective data item containing the cells with populated text
                Dim dataItem As GridDataItem = CType(editItem.ParentItem, GridDataItem)

            Elseif TypeOf e.Item Is GridDataItem Then 'EditMode WebForms/PopUp
                ' edit item containing the controls for editing
                Dim editItem As GridDataItem = CType(e.Item, GridDataItem))
            End If
        End If
    End If
End Sub 'RadGrid1_ItemDataBound
````

## Accessing Selected items from a Button Click

For convenient proccesing of selected items on the server-side, **RadGrid** exposes the **SelectedItems** collection. It contains the selected items in all nested tables inside the grid. To reach the selected items in a certain **GridTableView**(e.g. MasterTableView) use the **GetSelectedItems()** method. By using the **ChildSelectedItems** property you can get collection of the selected items in the GridTableView, including the selected ones from its embedded DetailTable(s) (if such exist).    

````C#
protected void RadButton1_Click(object sender, EventArgs e)
{
    //Get all selected items inside the RadGrid
    foreach (GridDataItem selectedDataItem in RadGrid1.SelectedItems)
    {
        // do something
    }

    //Get the selected items in the MasterTableView
    foreach (GridDataItem selectedDataItem in RadGrid1.MasterTableView.GetSelectedItems())
    {
        // do something
    }

    //Get the selected items in the MasterTableView including the selected items inside all nested tables
    foreach (GridDataItem selectedDataItem in RadGrid1.MasterTableView.ChildSelectedItems)
    {
        // do something
    }
}
````
````VB
Protected Sub RadButton1_Click(ByVal sender As Object, ByVal e As EventArgs)
    'Get all selected items inside the RadGrid
    For Each selectedDataItem As GridDataItem In RadGrid1.SelectedItems

    Next
    'Get the selected items in the MasterTableView
    For Each selectedDataItem As GridDataItem In RadGrid1.MasterTableView.GetSelectedItems())

    Next
    'Get the selected items in the MasterTableView including the selected items inside all nested tables
    For Each selectedDataItem As GridDataItem In RadGrid1.MasterTableView.ChildSelectedItems)

    Next
End Sub
````


## See Also
 
- [Accessing Values and Controls - Overview]({%slug grid/accessing-values-and-controls/overview %})
- [Accessing RadGrid]({%slug grid/accessing-values-and-controls/server-side/accessing-radgrid %})
- [Accessing Tables]({%slug grid/accessing-values-and-controls/server-side/accessing-tables %})
- [Accessing Cells]({%slug grid/accessing-values-and-controls/server-side/accessing-cells %})
- [Accessing Controls]({%slug grid/accessing-values-and-controls/server-side/accessing-controls %})
