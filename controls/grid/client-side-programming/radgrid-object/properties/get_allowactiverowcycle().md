---
title: get_allowActiveRowCycle()
page_title: get_allowActiveRowCycle() - RadGrid
description: Check our Web Forms article about get_allowActiveRowCycle().
slug: grid/client-side-programming/radgrid-object/properties/get_allowactiverowcycle()
tags: get_allowactiverowcycle()
published: True
position: 1
---

# get_allowActiveRowCycle()



## 

Property which returns the value for the respective server property of the control (ClientSettings-KeyboardNavigationSettings-AllowActiveRowCycle).


|  **get_allowActiveRowCycle()**  |
| ------ |
||

Example:

````JavaScript
function allowActiveRowCycle() {
    var grid = $find("<%=RadGrid1.ClientID %>");
    var activeRowCycle = grid.get_allowActiveRowCycle();
}
````


