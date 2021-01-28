---
title: clearActiveRow
page_title: clearActiveRow - RadGrid
description: Check our Web Forms article about clearActiveRow.
slug: grid/client-side-programming/radgrid-object/methods/clearactiverow
tags: clearactiverow
published: True
position: 0
---

# clearActiveRow



## 

Method which clears the active row in the grid. The setting will be persisted across postbacks/ajax requests.


|  **clearActiveRow()**  |
| ------ |
||

Example:

````JavaScript
function clearActiveRowInGrid(sender, args) {
    var grid = $find("<%=RadGrid1.ClientID %>");
    grid.clearActiveRow();
}
````



>note Please note that this method will work only when Keyboard Navigation and Row Selection of RadGrid are enabled.
>


````ASP.NET
<ClientSettings AllowKeyboardNavigation="true">
    <Selecting AllowRowSelect="true" />
</ClientSettings>
````


