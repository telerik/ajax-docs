---
title: exportToWord
page_title: exportToWord | UI for ASP.NET AJAX Documentation
description: exportToWord
slug: grid/client-side-programming/gridtableview-object/methods/exporttoword
tags: exporttoword
published: True
position: 18
---

# exportToWord



## 

Telerik RadGrid can export to MS Word 2003 or later.


|  __exportToWord()__  |
| ------ |
||

Example:

````JavaScript
	        function ExportGrid() {
	            var masterTable = $find("<%=RadGrid1.ClientID %>").get_masterTableView();
	            masterTable.exportToWord();
	
	        }
````


