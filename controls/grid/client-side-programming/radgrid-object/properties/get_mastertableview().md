---
title: get_masterTableView()
page_title: get_masterTableView() - RadGrid
description: Check our Web Forms article about get_masterTableView().
slug: grid/client-side-programming/radgrid-object/properties/get_mastertableview()
tags: get_mastertableview()
published: True
position: 8
---

# get_masterTableView()



## 

This property returns the MasterTableView instance for the respective grid client object.

|  **get_masterTableView()**  |  |  |
| ------ | ------ | ------ |
| - |[Telerik.Web.UI.GridTableView Object]({%slug grid/client-side-programming/gridtableview-object/gridtableview-class-members%})|The main table.|

Example:

````JavaScript
function getMasterTableView() {
    var grid = $find("<%=RadGrid1.ClientID %>");
    var masterTableView = grid.get_masterTableView();
}
````


