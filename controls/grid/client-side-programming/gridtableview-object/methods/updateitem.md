---
title: updateItem
page_title: updateItem | RadGrid for ASP.NET AJAX Documentation
description: updateItem
slug: grid/client-side-programming/gridtableview-object/methods/updateitem
tags: updateitem
published: True
position: 48
---

# updateItem



## 

Method which updates the edited table row passed as an argument or the row corresponding to the index passed as an argument. The updated data will be taken from the edit form editors.


|  **updateItem(gridItem) or updateItem(index)**  |  |  |
| ------ | ------ | ------ |
| **gridItem** |HTML row object - <tr>|The edited row that will be updated.|
| **index** |Integer|The edited row corresponding to the index will be updated.|

Example:

````JavaScript
function UpdateFirstItem() {
    var masterTable = $find("<%= RadGrid1.ClientID %>").get_masterTableView();
    masterTable.updateItem(masterTable.get_dataItems()[0].get_element());
} 
````


