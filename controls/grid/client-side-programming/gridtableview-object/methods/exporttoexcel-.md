---
title: exportToExcel 
page_title: exportToExcel  | UI for ASP.NET AJAX Documentation
description: exportToExcel 
slug: grid/client-side-programming/gridtableview-object/methods/exporttoexcel-
tags: exporttoexcel,
published: True
position: 16
---

# exportToExcel 



## 

Telerik RadGrid can export to MS Excel 2003 or later.


|  __exportToExcel()__  |
| ------ |
||

Example:

````JavaScript
	        function ExportGrid() {
	            var masterTable = $find("<%=RadGrid1.ClientID %>").get_masterTableView();
	            masterTable.exportToExcel();
	
	        } 
````


