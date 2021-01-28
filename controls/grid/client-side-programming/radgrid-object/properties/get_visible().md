---
title: get_visible()
page_title: get_visible() - RadGrid
description: Check our Web Forms article about get_visible().
slug: grid/client-side-programming/radgrid-object/properties/get_visible()
tags: get_visible()
published: True
position: 12
---

# get_visible()



## 

Property which determines whether the grid is visible on the client or not (style="display:none").


|  **get_visible()**  |
| ------ |
||

Example:

````JavaScript
function getVisibleState(sender, args) {
    var grid = $find("<%=RadGrid1.ClientID %>");
    var isVisibleOnClient = grid.get_visible();
    alert(isVisibleOnClient);
}
````


