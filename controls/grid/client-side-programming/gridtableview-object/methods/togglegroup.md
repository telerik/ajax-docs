---
title: toggleGroup
page_title: toggleGroup | RadGrid for ASP.NET AJAX Documentation
description: toggleGroup
slug: grid/client-side-programming/gridtableview-object/methods/togglegroup
tags: togglegroup
published: True
position: 49
---

# toggleGroup



## 

Method which expands/collapses a group. It receives as a parameter the closest data row to the group header or directly the group header. The method accepts an optional parameter called Options.It provides more control over the expand\collapse behavior.


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
function ToggleGroupUsingDataItem() {
    var masterTableView = $find("<%=RadGrid1.ClientID %>").get_masterTableView();
    var dataItems = masterTableView.get_dataItems();
    masterTableView.toggleGroup(dataItems[5].get_element(),
    {
        toggleChildren: false,
        toggleParents: true
    });
}

function ToggleGroupUsingGroupHeader() {
    var masterTableView = $find("<%=RadGrid1.ClientID %>").get_masterTableView();
    var groupHeader = $telerik.getElementsByClassName(masterTableView.get_element(), "rgGroupHeader")[3];
    masterTableView.toggleGroup(groupHeader,
    {
        toggleChildren: false,
        toggleParents: true
    });
}
````


