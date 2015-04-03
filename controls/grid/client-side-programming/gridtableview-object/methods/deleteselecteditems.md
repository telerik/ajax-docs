---
title: deleteSelectedItems
page_title: deleteSelectedItems | UI for ASP.NET AJAX Documentation
description: deleteSelectedItems
slug: grid/client-side-programming/gridtableview-object/methods/deleteselecteditems
tags: deleteselecteditems
published: True
position: 9
---

# deleteSelectedItems



## 

Method which deletes all selected items in the grid.




|  __deleteSelectedItems()__  |
| ------ |
||

Example:

````JavaScript
	        function DeleteSelectedGridItems() {
	            var masterTable = $find("<%= RadGrid1.ClientID %>").get_masterTableView();
	            masterTable.deleteSelectedItems();
	        }
````


