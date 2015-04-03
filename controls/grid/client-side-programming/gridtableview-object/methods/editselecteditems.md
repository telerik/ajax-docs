---
title: editSelectedItems
page_title: editSelectedItems | UI for ASP.NET AJAX Documentation
description: editSelectedItems
slug: grid/client-side-programming/gridtableview-object/methods/editselecteditems
tags: editselecteditems
published: True
position: 13
---

# editSelectedItems



## 

Method which switches all selected items in the grid in edit mode.


|  __function editSelectedItems()__  |
| ------ |
||

Example:

````JavaScript
	        function EditFirstItem() {
	            var masterTable = $find("<%= RadGrid1.ClientID %>").get_masterTableView();
	            masterTable.editItem(masterTable.get_dataItems()[0].get_element());
	        }  
````


