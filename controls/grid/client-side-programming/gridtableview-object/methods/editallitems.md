---
title: editAllItems
page_title: editAllItems - RadGrid
description: Check our Web Forms article about editAllItems.
slug: grid/client-side-programming/gridtableview-object/methods/editallitems
tags: editallitems
published: True
position: 11
---

# editAllItems



## 

Method which switches all GridDataItems in edit mode.


|  **editAllItems()**  |
| ------ |
||

Example:

````JavaScript
function EditAllRecords() {
    var masterTable = $find("<%= RadGrid1.ClientID %>").get_masterTableView();
    masterTable.editAllItems();
}  
````


