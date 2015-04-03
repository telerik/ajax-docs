---
title: expandItem
page_title: expandItem | UI for ASP.NET AJAX Documentation
description: expandItem
slug: grid/client-side-programming/gridtableview-object/methods/expanditem
tags: expanditem
published: True
position: 14
---

# expandItem



## 

Method which expands the table row with index passed as an argument. If the index corresponds to nested table item, all parent items will be expanded to top.


|  __expandItem(index)__  |  |  |
| ------ | ------ | ------ |
| __index__ |Integer|The row corresponding to the __index__ will be expanded.|

Example:

````JavaScript
	        function ExpandFirstItem() {
	            var masterTable = $find("<%= RadGrid1.ClientID %>").get_masterTableView();
	            masterTable.expandItem(masterTable.get_dataItems()[0].get_element());
	        }  
````


