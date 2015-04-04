---
title: Traversing detail tables/items in Telerik RadGrid
page_title: Traversing detail tables/items in Telerik RadGrid | UI for ASP.NET AJAX Documentation
description: Traversing detail tables/items in Telerik RadGrid
slug: grid/hierarchical-grid-types-and-load-modes/traversing-detail-tables/items-in-telerik-radgrid
tags: traversing,detail,tables/items,in,telerik,radgrid
published: True
position: 5
---

# Traversing detail tables/items in Telerik RadGrid



## Accessing the DetailTables through NestedTableViews Collection

If you have a hierarchical grid each item in __GridTableView's____Items__ collection has a child item of type __GridNestedViewItem__ that has a set of __DetailTables__. So if you want to access, for example, the nested table view of the first item in the grid's master table you should have the following code:



````C#
	    GridTableView nestedTableView = (RadGrid1.MasterTableView.Items[0] as GridDataItem).ChildItem.NestedTableViews[0];
````
````VB.NET
	Dim nestedTableView as GridTableView = CType(RadGrid1.MasterTableView.Items[0], GridDataItem).ChildItem.NestedTableViews[0]          
````


Or if you have a reference to an instance of an item in a child table and if you want to access the parent item/parent table view you have to write the following code:



````C#
	    GridDataItem parentItem = childItem.OwnerTableView.ParentItem as GridDataItem;
````
````VB.NET
	
	    Dim parentItem As GridDataItem = CType(childItem.OwnerTableView.ParentItem, GridDataItem)
	
````


## Looping through all detail tables/items in Telerik RadGrid

Before proceeding with the rest of this chapter we recommend you reading the KB article of Telerik RadGrid concerning Hierarchical binding tips. After reading the article, you will understand that each copy of a detail table corresponding to an item from the parent table resides in a __NestedViewItem__. You can iterate through the NestedViewItems in the grid using a recursive method, starting from the __MasterTableView__ (note that the proper place to make the loop is the __PreRender__ handler of the grid):



````C#
	    void LoopHierarchyRecursive(GridTableView gridTableView)
	    {
	        foreach (GridNestedViewItem nestedViewItem in gridTableView.GetItems(GridItemType.NestedView))
	        {
	            // you should skip the items if not expanded, or tables not bound
	            if (nestedViewItem.NestedTableViews.Length > 0)
	            {
	                // now you can access: nestedViewItem.NestedTableViews[0].Items, which will be the DataItems of this nested table
	                // then make recursive call
	                LoopHierarchyRecursive(nestedViewItem.NestedTableViews[0]);
	                // above [0] stands for the first table in the hierarchy, since Telerik RadGrid supports multiple tables at a level
	            }
	        }
	    }
````
````VB.NET
	    Sub LoopHierarchyRecursive(ByVal gridTableView As GridTableView)
	        For Each nestedViewItem As GridNestedViewItem In gridTableView.GetItems(GridItemType.NestedView)
	            'you should skip the items if not expanded, or tables not bound
	            If nestedViewItem.NestedTableViews.Length > 0 Then
	                'now you can access: nestedViewItem.NestedTableViews[0].Items, which will be the DataItems of this nested table
	                'then make recursive call
	                LoopHierarchyRecursive(nestedViewItem.NestedTableViews(0))
	                ' above [0] stands for the first table in the hierarchy, since Telerik RadGrid supports multiple tables at a level
	            End If
	        Next
	    End Sub
	
````


When __HieararchyLoadMode__ of the relevant __GridTableView__ is "__Client__" or "__ServerBind__" a much easier approach could be used. The __RadGrid.Items__ collection contains all items from all tables in the hierarchical structure of __Telerik RadGrid__. By simply looping through the collection you can access all data-bound items and their controls:



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
````VB.NET
	        For Each item As GridDataItem In RadGrid1.Items
	            If (item.OwnerTableView.Name = "MyTableName") Then
	                'if you need you may also check the parent item keys here
	                If CType(item.OwnerTableView.ParentItem, GridDataItem).GetDataKeyValue("MyKeyFieldName").ToString() = "some key value" Then
	                    'operate with the controls in a custom manner
	                End If
	            End If
	        Next
````


## Looping through the detail tables/items in Telerik RadGrid on the client

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
	                if (dataItems[i].get_nestedViews().length > 0) {
	                    var nestedView = dataItems[i].get_nestedViews()[0];
	                    //here you can access the nested table's data items using nestedView.get_dataItems()
	                    alert(nestedView.get_name());
	                    traverseChildTables(nestedView);
	                }
	            }
	        }
	    </script>
````


