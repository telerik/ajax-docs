---
title: get_expanded()
page_title: get_expanded() - RadGrid
description: Check our Web Forms article about get_expanded().
slug: grid/client-side-programming/griddataitem-object/properties/get_expanded()
tags: get_expanded()
published: True
position: 3
---

# get_expanded()



## 

This property is of type Boolean and returns whether the row with the specified index is expanded. Please note that this property is meaningful, when the HierarchyLoadMode setting is set to Client.

Example:

````JavaScript
function CheckExpandedState() {
    var masterTable = $find("<%= RadGrid1.ClientID %>").get_masterTableView();
    alert(masterTable.get_dataItems()[2].get_expanded());
}
````


