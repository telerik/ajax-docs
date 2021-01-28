---
title: collapseGroup
page_title: collapseGroup - RadGrid
description: Check our Web Forms article about collapseGroup.
slug: grid/client-side-programming/gridtableview-object/methods/collapsegroup
tags: collapsegroup
published: True
position: 51
---

# collapseGroup



## 

Method which collapses a group. It receives as a parameterthe closest data row to the group header or directly the group header. The method accepts an optional parameter called Options.It provides more control over the collapse behavior.


|  **"Options" parameter properties**  |  |
| ------ | ------ |
| **expandChildren** |Will expand all child groups|
| **expandParents** |Will expand all parent groups|
| **collapseChildren** |Will collapse all child groups|
| **collapseParents** |Will collapse all parent groups|
| **toggleChildren** |Will expand/collapse all child groups according to the state of the current group|
| **toggleParents** |Will expand/collapse all parent groups according to the state of the current group|
| **findClosestGroup** |Will expand the first parent group|

Example:

````JavaScript
function CollapseGroupUsingDataItem() {
    var masterTableView = $find("<%=RadGrid1.ClientID %>").get_masterTableView();
    masterTableView.collapseGroup(masterTableView.get_dataItems()[4].get_element(),
    {
        expandParents: true,
        expandChildren: false
    });
}

function CollapseGroupUsingGroupHeader() {
    var masterTableView = $find("<%=RadGrid1.ClientID %>").get_masterTableView();
    var groupHeader = $telerik.getElementsByClassName(masterTableView.get_element(), "rgGroupHeader")[4];
    masterTableView.collapseGroup(groupHeader,
    {
        expandChildren: false,
        findClosestGroup: true
    });
}
````


