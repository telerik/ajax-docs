---
title: get_editItems()
page_title: get_editItems() - RadGrid
description: Check our Web Forms article about get_editItems().
slug: grid/client-side-programming/radgrid-object/properties/get_edititems()
tags: get_edititems()
published: True
position: 4
---

# get_editItems()



## 

Property which returns one-dimensional array representing a collection of client-side objects of type GridDataItem that are in edit mode accross all grid tables.


|  **get_editItems()**  |
| ------ |
||

Example:

````JavaScript
function getEditItems() {
    var grid = $find("<%=RadGrid1.ClientID %>");
    //get all edited GridDataItems across all grid tables
    var editedItemsArray = grid.get_editItems();
}
````


