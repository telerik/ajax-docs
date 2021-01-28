---
title: getCellByColumnUniqueName
page_title: getCellByColumnUniqueName - RadGrid
description: Check our Web Forms article about getCellByColumnUniqueName.
slug: grid/client-side-programming/gridtableview-object/methods/getcellbycolumnuniquename
tags: getcellbycolumnuniquename
published: True
position: 23
---

# getCellByColumnUniqueName



## 

Gives you the cell specified by a row and a column unique name.


|  **getCellByColumnUniqueName(gridRow, columnUniqueName)**  |  |  |
| ------ | ------ | ------ |
| **gridRow** | **GridDataItem** |The row which holds the cell.|
| **columnUniqueName** | **String** |The UniqueName of the column which identifies the cell uniquely.|

In order to get the cell value, you need to use the innerHTML property:

````JavaScript
function GetFirstItemContactNameCell() {
    var masterTable = $find("<%=RadGrid1.ClientID%>").get_masterTableView();
    var contactName = masterTable.getCellByColumnUniqueName(masterTable.get_dataItems()[0], "ContactName").innerHTML;
}
````



>note  The **ShowHeader** attribute for the RadGrid/MasterTableView should be set to **true** in order to use this method.
>

