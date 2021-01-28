---
title: deleteSelectedItems
page_title: deleteSelectedItems - RadGrid
description: Check our Web Forms article about deleteSelectedItems.
slug: grid/client-side-programming/gridtableview-object/methods/deleteselecteditems
tags: deleteselecteditems
published: True
position: 9
---

# deleteSelectedItems



## 

Method which deletes all selected items in the grid.




|  **deleteSelectedItems()**  |
| ------ |
||

Example:

````JavaScript
function DeleteSelectedGridItems() {
    var masterTable = $find("<%= RadGrid1.ClientID %>").get_masterTableView();
    masterTable.deleteSelectedItems();
}
````


