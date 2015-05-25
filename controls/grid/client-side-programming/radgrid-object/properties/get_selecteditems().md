---
title: get_selectedItems()
page_title: get_selectedItems() | RadGrid for ASP.NET AJAX Documentation
description: get_selectedItems()
slug: grid/client-side-programming/radgrid-object/properties/get_selecteditems()
tags: get_selecteditems()
published: True
position: 11
---

# get_selectedItems()



## 

Property which returns one-dimensional array representing a collection of client-side objects of type GridDataItem that are marked as selected.


|  **get_selectedItems()**  |
| ------ |
||

Example:

````JavaScript
function getSelectedItems() {            
    var grid = $find("<%=RadGrid1.ClientID %>");            
    var gridSelectedItems = grid.get_selectedItems();
}
````


