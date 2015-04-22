---
title: sort
page_title: sort | RadGrid for ASP.NET AJAX Documentation
description: sort
slug: grid/client-side-programming/gridtableview-object/methods/sort
tags: sort
published: True
position: 44
---

# sort



## 

Method which triggers sort command for the column with *DataField* (set on the server) passed as an argument. If you set *AllowMultiColumnSorting* to true server-side, each subsequent call to this method will sort the corresponding column. All server-side sorting capabilities of RadGrid are applicable here as well. See the topic describing the [fireCommand()]({%slug grid/client-side-programming/gridtableview-object/methods/firecommand%}) client-side method for further details.


|  **sort(sortExpression)**  |  |  |
| ------ | ------ | ------ |
| **sortExpression** |String|The DataField of the column to be sorted.|

Example:

````JavaScript
	        function SortColumnContactName() {
	            var masterTable = $find("<%= RadGrid1.ClientID %>").get_masterTableView();
	            masterTable.sort("ContactName");
	        } 
````


