---
title: exportToCsv
page_title: exportToCsv - RadGrid
description: Check our Web Forms article about exportToCsv.
slug: grid/client-side-programming/gridtableview-object/methods/exporttocsv
tags: exporttocsv
published: True
position: 15
---

# exportToCsv



## 

Telerik RadGrid can export to CSV format (comma-separated values).


|  **exportToCsv()**  |
| ------ |
||

Example:

````JavaScript
function ExportGrid() {
    var masterTable = $find("<%=RadGrid1.ClientID %>").get_masterTableView();
    masterTable.exportToCsv();

} 
````


