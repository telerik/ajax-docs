---
title: cancelAll
page_title: cancelAll - RadGrid
description: Check our Web Forms article about cancelAll.
slug: grid/client-side-programming/gridtableview-object/methods/cancelall
tags: cancelall
published: True
position: 0
---

# cancelAll



## 

Cancels the edit mode for all grid items that are switched in edit mode prior to the method call.


|  **cancelAll()**  |
| ------ |
||

Example:

````JavaScript
function CancelEditMode() {
    var masterTable = $find("<%= RadGrid1.ClientID %>").get_masterTableView();
    masterTable.cancelAll();
}
````


