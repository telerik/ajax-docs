---
title: groupColumn
page_title: groupColumn | RadGrid for ASP.NET AJAX Documentation
description: groupColumn
slug: grid/client-side-programming/gridtableview-object/methods/groupcolumn
tags: groupcolumn
published: True
position: 27
---

# groupColumn



## 

Method which groups the grid by the column with UniqueName specified as an argument. All server grouping capabilities of RadGrid are applicable for this case as well.


|  **groupColumn(colUniqueName)**  |  |  |
| ------ | ------ | ------ |
| **colUniqueName** |String|The UniqueName of the column that will be grouped.|

Example:

````JavaScript
	        function GroupByColumn() {
	            var masterTable = $find("<%= RadGrid1.ClientID %>").get_masterTableView();
	            masterTable.groupColumn("Country");
	        }
````


