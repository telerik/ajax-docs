---
title: set_activeRow()
page_title: set_activeRow() - RadGrid
description: Check our Web Forms article about set_activeRow().
slug: grid/client-side-programming/radgrid-object/properties/set_activerow()
tags: set_activerow()
published: True
position: 0
---

# set_activeRow()



## 

Property which marks the row passed as an argument as active and highlighted.


|  **set_activeRow(rowObject)**  |  |  |
| ------ | ------ | ------ |
| **rowObject** |GridDataItem object|The row that will be set as active.|

Example:

````JavaScript
function setActiveRow() {
    var grid = $find("<%=RadGrid1.ClientID %>");
    var masterTableView = grid.get_masterTableView();
    var dataItems = masterTableView.get_dataItems();
    grid.set_activeRow(dataItems[0].get_element());            
}
````


