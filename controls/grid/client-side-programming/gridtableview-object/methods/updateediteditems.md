---
title: updateEditedItems
page_title: updateEditedItems | RadGrid for ASP.NET AJAX Documentation
description: updateEditedItems
slug: grid/client-side-programming/gridtableview-object/methods/updateediteditems
tags: updateediteditems
published: True
position: 47
---

# updateEditedItems



## 

Method which updates all edited items in the grid. The new data will be taken from the edit form editors.


|  **updateEditedItems()**  |
| ------ |
||

Example:

````JavaScript
	        function UpdateEditedGridItems() {
	            var masterTable = $find("<%= RadGrid1.ClientID %>").get_masterTableView();
	            masterTable.updateEditedItems();
	        }
````


