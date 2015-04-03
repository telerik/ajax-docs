---
title: cancelAll
page_title: cancelAll | UI for ASP.NET AJAX Documentation
description: cancelAll
slug: grid/client-side-programming/gridtableview-object/methods/cancelall
tags: cancelall
published: True
position: 0
---

# cancelAll



## 

Cancels the edit mode for all grid items that are switched in edit mode prior to the method call.


|  __cancelAll()__  |
| ------ |
||

Example:

````JavaScript
	        function CancelEditMode() {
	            var masterTable = $find("<%= RadGrid1.ClientID %>").get_masterTableView();
	            masterTable.cancelAll();
	        }
````


