---
title: set_reorderable()
page_title: set_reorderable() | RadGrid for ASP.NET AJAX Documentation
description: set_reorderable()
slug: grid/client-side-programming/gridcolumn-object/properties/set_reorderable()
tags: set_reorderable()
published: True
position: 4
---

# set_reorderable()



## 

This methods takes a singe Boolean argument, specifying whether the column should be reorderable or not.

Example:

````JavaScript
function GridCreated() {
    var column1 = $find("RadGrid1").get_masterTableView().get_columns()[0];
    column1.set_reorderable(false);
}
````


