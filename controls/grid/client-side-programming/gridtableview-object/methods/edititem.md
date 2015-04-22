---
title: editItem
page_title: editItem | RadGrid for ASP.NET AJAX Documentation
description: editItem
slug: grid/client-side-programming/gridtableview-object/methods/edititem
tags: edititem
published: True
position: 12
---

# editItem



## 

Method which switches the table row passed as an argument or the row corresponding to the index passed as an argument in edit mode.


|  **editItem(gridItem) or editItem(index)**  |  |  |
| ------ | ------ | ------ |
| **gridItem** |HTML row object - <tr>|The row that will be switched in edit mode.|
| **index** |Integer|The row corresponding to the **index** will be switched in edit mode.|

Example:

````JavaScript
	        function EditFirstItem() {
	            var masterTable = $find("<%= RadGrid1.ClientID %>").get_masterTableView();
	            masterTable.editItem(masterTable.get_dataItems()[0].get_element());
	        }  
````


