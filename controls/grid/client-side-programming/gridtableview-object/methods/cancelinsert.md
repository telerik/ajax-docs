---
title: cancelInsert
page_title: cancelInsert | RadGrid for ASP.NET AJAX Documentation
description: cancelInsert
slug: grid/client-side-programming/gridtableview-object/methods/cancelinsert
tags: cancelinsert
published: True
position: 1
---

# cancelInsert



## 

Method which cancels the insert action and switches the grid in regular mode.


|  **cancelInsert()**  |
| ------ |
||

Example:

````JavaScript
	        function SwitchInRegularMode() {
	            var masterTable = $find("<%= RadGrid1.ClientID %>").get_masterTableView();
	            masterTable.cancelInsert();
	        }
````


