---
title: expandItem
page_title: expandItem - RadGrid
description: Check our Web Forms article about expandItem.
slug: grid/client-side-programming/gridtableview-object/methods/expanditem
tags: expanditem
published: True
position: 14
---

# expandItem



## 

Method which expands the table row with index passed as an argument. If the index corresponds to nested table item, all parent items will be expanded to top.


|  **expandItem(index)**  |  |  |
| ------ | ------ | ------ |
| **index** |Integer|The row corresponding to the **index** will be expanded.|

Example:

````JavaScript
function ExpandFirstItem() {
    var masterTable = $find("<%= RadGrid1.ClientID %>").get_masterTableView();
    masterTable.expandItem(masterTable.get_dataItems()[0].get_element());
}  
````


