---
title: Traversing detail tables/items in Telerik RadGrid
page_title: Traversing detail tables/items in Telerik RadGrid - RadGrid
description: Learn how to traverse RadGrid detail tables and items on the server and client by using nested table views, recursion, and the Items collection.
slug: grid/hierarchical-grid-types-and-load-modes/traversing-detail-tables
components: ["grid"]
tags: traversing,detail,tables/items,in,telerik,radgrid
published: True
position: 5
---

# Traversing Detail Tables and Items in Telerik RadGrid

This article explains how to access and traverse the detail tables and items in a hierarchical RadGrid on the server and client.

## Accessing Detail Tables Through the NestedTableViews Collection

In a hierarchical grid, each item in a **GridTableView** `Items` collection has a child item of type **GridNestedViewItem** with a set of nested table views. To access the nested table view of the first item in the master table, use the following code:



````C#
GridTableView nestedTableView = (RadGrid1.MasterTableView.Items[0] as GridDataItem).ChildItem.NestedTableViews[0];
````
````VB
Dim nestedTableView as GridTableView = CType(RadGrid1.MasterTableView.Items(0), GridDataItem).ChildItem.NestedTableViews(0)
````


If you have a reference to an item in a child table and want to access its parent item or table view, use the following code:



````C#
GridDataItem parentItem = childItem.OwnerTableView.ParentItem as GridDataItem;
````
````VB
Dim parentItem As GridDataItem = CType(childItem.OwnerTableView.ParentItem, GridDataItem)
````


## Looping Through All Detail Tables and Items in RadGrid

Each copy of a detail table that corresponds to an item in the parent table resides in a **NestedViewItem**. You can iterate through the nested view items with a recursive method that starts from the **MasterTableView**. Place the loop in the grid's **PreRender** handler.



````C#
void LoopHierarchyRecursive(GridTableView gridTableView)
{
    foreach (GridNestedViewItem nestedViewItem in gridTableView.GetItems(GridItemType.NestedView))
    {
        // you should skip the items if not expanded, or tables not bound
        for (int i = 0; i < nestedViewItem.NestedTableViews.Length; i++)
        {
            LoopHierarchyRecursive(nestedViewItem.NestedTableViews[i]);
        }
    }
}
````
````VB
Sub LoopHierarchyRecursive(ByVal gridTableView As GridTableView)
    For Each nestedViewItem As GridNestedViewItem In gridTableView.GetItems(GridItemType.NestedView)
        'you should skip the items if not expanded, or tables not bound
        For i As Integer = 0 To nestedViewItem.NestedTableViews.Length - 1
            LoopHierarchyRecursive(nestedViewItem.NestedTableViews(i))
        Next
    Next
End Sub
````


When the **HierarchyLoadMode** of the relevant **GridTableView** is `Client` or `ServerBind`, you can use a simpler approach. The **RadGrid.Items** collection contains items from all tables in the hierarchical structure. Loop through the collection to access all data-bound items and their controls:



````C#
foreach (GridDataItem item in RadGrid1.Items)
{
    if (item.OwnerTableView.Name == "MyTableName")
    {
        // if you need you may also check the parent item keys here
        if ((item.OwnerTableView.ParentItem as GridDataItem).GetDataKeyValue("MyKeyFieldName").ToString() == "some key value")
        {
            // operate with the controls in a custom manner
        }
    }
}
````
````VB
For Each item As GridDataItem In RadGrid1.Items
    If (item.OwnerTableView.Name = "MyTableName") Then
        'if you need you may also check the parent item keys here
        If CType(item.OwnerTableView.ParentItem, GridDataItem).GetDataKeyValue("MyKeyFieldName").ToString() = "some key value" Then
            'operate with the controls in a custom manner
        End If
    End If
Next
````


## Looping Through Detail Tables and Items in RadGrid on the Client

You can also loop through the available GridTableView and GridDataItem client objects of a hierarchical RadGrid. Using the client API of the control, you can access the detail tables and items through a recursion similar to that inside the LoopHierarchyRecursive server-side method described above.

````JavaScript
<script type="text/javascript">
    function pageLoad() {
        var grid = $find('<%=RadGrid1.ClientID %>');
        var masterTable = grid.get_masterTableView();
        traverseChildTables(masterTable);
    }

    function traverseChildTables(gridTableView) {
        var dataItems = gridTableView.get_dataItems();
        for (var i = 0; i < dataItems.length; i++) {
            var nestedViews = dataItems[i].get_nestedViews();
            for (var j = 0; j < nestedViews.length; j++) {
                var nestedView = nestedViews[j];
                alert(nestedView.get_name());
                traverseChildTables(nestedView);
            }
        }
    }
</script>
````

## See Also

- [Understanding the hierarchical grid structure]({%slug grid/hierarchical-grid-types-and-load-modes/understanding-hierarchical-grid-structure%})
- [Hierarchy load modes]({%slug grid/hierarchical-grid-types-and-load-modes/hierarchy-load-modes%})


