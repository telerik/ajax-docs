---
title: ungroupColumn
page_title: ungroupColumn - RadGrid
description: Check our Web Forms article about ungroupColumn.
slug: grid/client-side-programming/gridtableview-object/methods/ungroupcolumn
tags: ungroupcolumn
published: True
position: 46
---

# ungroupColumn



## 

Method which performs ungroup action for the column with UniqueName specified as an argument.


|  **ungroupColumn(colUniqueName)**  |  |  |
| ------ | ------ | ------ |
| **colUniqueName** |String|The UniqueName of the column that will be ungrouped.|

Example:

````JavaScript
	        function UngroupByColumn() {
	            var masterTable = $find("<%= RadGrid1.ClientID %>").get_masterTableView();
	            masterTable.ungroupColumn("Country");
	        } 
````


