---
title: cancelUpdate
page_title: cancelUpdate | RadGrid for ASP.NET AJAX Documentation
description: cancelUpdate
slug: grid/client-side-programming/gridtableview-object/methods/cancelupdate
tags: cancelupdate
published: True
position: 2
---

# cancelUpdate



## 

Method which cancels the update for the edited table row passed as an argument or the row corresponding to the index passed as an argument.


|  **cancelUpdate(gridItem)or cancelUpdate(index)**  |  |  |
| ------ | ------ | ------ |
| **gridItem** |HTML row object - <tr>|The edited row that will be switched in non-editable mode.|
| **index** |Integer|The row corresponding to the **index** will be switched in non-editable mode.|

Example:

````JavaScript
	        function CancelUpdateForFirstItem() {
	            var masterTable = $find("<%= RadGrid1.ClientID %>").get_masterTableView();
	            masterTable.cancelUpdate(masterTable.get_dataItems()[0].get_element());
	        }
````


