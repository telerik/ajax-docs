---
title: showFilterItem
page_title: showFilterItem | UI for ASP.NET AJAX Documentation
description: showFilterItem
slug: grid/client-side-programming/gridtableview-object/methods/showfilteritem
tags: showfilteritem
published: True
position: 41
---

# showFilterItem



## 

Displays the filtering item in the respective GridTableView when it was hidden previously on the client.


|  __showFilterItem()__  |
| ------ |
||

Example:

````JavaScript
	        function ShowFilter() {
	            var masterTable = $find("<%= RadGrid1.ClientID %>").get_masterTableView();
	            masterTable.showFilterItem();
	        } 
````


