---
title: hideFilterItem
page_title: hideFilterItem | UI for ASP.NET AJAX Documentation
description: hideFilterItem
slug: grid/client-side-programming/gridtableview-object/methods/hidefilteritem
tags: hidefilteritem
published: True
position: 29
---

# hideFilterItem



## 

Hides the filtering item in the respective GridTableView.


|  __hideFilterItem()__  |
| ------ |
||

Example:

````JavaScript
	        function HideFilter() {
	            var masterTable = $find("<%= RadGrid1.ClientID %>").get_masterTableView();
	            masterTable.hideFilterItem();
	        }
````


