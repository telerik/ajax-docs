---
title: selectAllItems
page_title: selectAllItems - RadGrid
description: Check our Web Forms article about selectAllItems.
slug: grid/client-side-programming/gridtableview-object/methods/selectallitems
tags: selectallitems
published: True
position: 37
---

# selectAllItems



## 

Selects all items in the GridTableView for which the method is invoked.

>note The AllowMultiRowSelection property of RadGrid should be set to true to select multiple items!
>



|  **selectAllItems()**  |
| ------ |
||

Example:

````JavaScript
function SelectMasterTableItems() {
    var masterTable = $find("<%= RadGrid1.ClientID %>").get_masterTableView();
    //select all master table items
    masterTable.selectAllItems();
}
````


