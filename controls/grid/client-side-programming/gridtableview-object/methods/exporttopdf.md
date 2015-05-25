---
title: exportToPdf
page_title: exportToPdf | RadGrid for ASP.NET AJAX Documentation
description: exportToPdf
slug: grid/client-side-programming/gridtableview-object/methods/exporttopdf
tags: exporttopdf
published: True
position: 17
---

# exportToPdf



## 

Telerik RadGrid can export to PDF format.


|  **exportToPdf()**  |
| ------ |
||

Example:

````JavaScript
function ExportGrid() {
    var masterTable = $find("<%=RadGrid1.ClientID %>").get_masterTableView();
    masterTable.exportToPdf();

}  
````


