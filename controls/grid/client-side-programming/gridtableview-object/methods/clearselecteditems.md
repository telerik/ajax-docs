---
title: clearSelectedItems
page_title: clearSelectedItems | RadGrid for ASP.NET AJAX Documentation
description: clearSelectedItems
slug: grid/client-side-programming/gridtableview-object/methods/clearselecteditems
tags: clearselecteditems
published: True
position: 4
---

# clearSelectedItems



## 

Method which clears the selected items for the respective **GridTableView** client object. This method will clear the selected items from the table's child tables (meaningful in hierarchical grid only).


|  **clearSelectedItems()**  |
| ------ |
||

Example:

````JavaScript
function clearSelectedItems(sender, args) {
    var grid = $find("<%=RadGrid1.ClientID %>");
    var masterTableView = grid.get_masterTableView();
    masterTableView.clearSelectedItems();
}
````



>tip  This method is only applicable when Row Selection of RadGrid is enabled.
>


````ASP.NET
<ClientSettings>
    <Selecting AllowRowSelect="true" />
</ClientSettings>     
````


