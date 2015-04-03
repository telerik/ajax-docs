---
title: insertItem
page_title: insertItem | UI for ASP.NET AJAX Documentation
description: insertItem
slug: grid/client-side-programming/gridtableview-object/methods/insertitem
tags: insertitem
published: True
position: 31
---

# insertItem



## 

Method which inserts new table row to the grid. The new data will be taken from the insertion form editors fields.


|  __insertItem()__  |
| ------ |
||

Example:

````JavaScript
	        function AddNewItem() {
	            var masterTable = $find("<%= RadGrid1.ClientID %>").get_masterTableView();
	            masterTable.insertItem();
	        } 
````


