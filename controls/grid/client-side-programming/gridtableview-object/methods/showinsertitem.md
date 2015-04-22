---
title: showInsertItem
page_title: showInsertItem | RadGrid for ASP.NET AJAX Documentation
description: showInsertItem
slug: grid/client-side-programming/gridtableview-object/methods/showinsertitem
tags: showinsertitem
published: True
position: 42
---

# showInsertItem



## 

Method which switches the grid in insert mode and displays the insertion form.


|  **showInsertItem()**  |
| ------ |
||

Example:

````JavaScript
	        function SwitchGridInInsertMode() {
	            var masterTable = $find("<%= RadGrid1.ClientID %>").get_masterTableView();
	            masterTable.showInsertItem();
	        } 
````


