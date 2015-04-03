---
title: collapseItem
page_title: collapseItem | UI for ASP.NET AJAX Documentation
description: collapseItem
slug: grid/client-side-programming/gridtableview-object/methods/collapseitem
tags: collapseitem
published: True
position: 6
---

# collapseItem



## 

Method which collapses the table row with index passed as an argument.


|  __collapseItem(index)__  |  |  |
| ------ | ------ | ------ |
| __index__ |Integer|The row corresponding to the __index__ will be collapsed.|

Example:

````JavaScript
	        function CollapseFirstMasterTableViewItem() {
	            $find("<%= RadGrid1.ClientID %>").get_masterTableView().collapseItem(0);
	        }
	        function CollapseFirstDetailTableFirstItem() {
	            $find("<%= RadGrid1.Items[0].ChildItem.NestedTableViews[0].ClientID %>").collapseItem(0);
	        }
````


