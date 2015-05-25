---
title: deleteItem
page_title: deleteItem | RadGrid for ASP.NET AJAX Documentation
description: deleteItem
slug: grid/client-side-programming/gridtableview-object/methods/deleteitem
tags: deleteitem
published: True
position: 8
---

# deleteItem



## 

Method which deletes the table row passed as an argument or the row corresponding to the index passed as an argument.


|  **deleteItem(gridItem) or deleteItem(index)**  |  |  |
| ------ | ------ | ------ |
| **gridItem** |HTML row object - <tr>|The row that will be deleted.|
| **index** |Integer|The row corresponding to the **index** will be deleted.|

Example:

````JavaScript
function DeleteFirstItem() {
    var masterTable = $find("<%= RadGrid1.ClientID %>").get_masterTableView();
    masterTable.deleteItem(masterTable.get_dataItems()[0].get_element());
}
````


