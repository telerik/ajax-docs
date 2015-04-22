---
title: getColumnByUniqueName
page_title: getColumnByUniqueName | RadGrid for ASP.NET AJAX Documentation
description: getColumnByUniqueName
slug: grid/client-side-programming/gridtableview-object/methods/getcolumnbyuniquename
tags: getcolumnbyuniquename
published: True
position: 24
---

# getColumnByUniqueName



## 

Returns a GridColumn object representing the column with the specified UniqueName.


|  **getColumnByUniqueName(colUniqueName)**  |  |  |
| ------ | ------ | ------ |
| **colUniqueName** |String|The UniqueName of the GridColumn object that will be referenced.|

Example:

````JavaScript
	        function FindColumnOnClient() {
	            var grid = $find("<%= RadGrid1.ClientID %>");
	            grid.get_masterTableView().getColumnByUniqueName("ProductName");
	        } 
````


