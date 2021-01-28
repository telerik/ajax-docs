---
title: set_resizable()
page_title: set_resizable() - RadGrid
description: Check our Web Forms article about set_resizable().
slug: grid/client-side-programming/gridcolumn-object/properties/set_resizable()
tags: set_resizable()
published: True
position: 6
---

# set_resizable()



## 

The method takes a single Boolean argument, specifying whether or not the column instance should be resizable or not.

Example:

````JavaScript
function GridCreated() {
    var column1 = $find("RadGrid1").get_masterTableView().get_columns()[0];
    column1.set_resizable(false);
}
````


