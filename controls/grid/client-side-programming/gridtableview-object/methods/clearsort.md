---
title: clearSort
page_title: clearSort | RadGrid for ASP.NET AJAX Documentation
description: clearSort
slug: grid/client-side-programming/gridtableview-object/methods/clearsort
tags: clearsort
published: True
position: 5
---

# clearSort



## 

Method which clears the sort expression for a specific column or all sort expressions for the TableView object if no argument is passed.


|  **clearSort(), clearSort(fieldName)**  |  |  |
| ------ | ------ | ------ |
| **fieldName** |String|The DataField of the column whose sort expression should be cleared.|

Example:

````JavaScript
function clearSortExpressions() {
    var grid = $find("<%=RadGrid1.ClientID %>");
    var masterTableView = grid.get_masterTableView();
    masterTableView.clearSort();
}

function clearColumnSortExpression() {
    var grid = $find("<%=RadGrid1.ClientID %>");
    var masterTableView = grid.get_masterTableView();
    masterTableView.clearSort("CompanyName");
}
````


