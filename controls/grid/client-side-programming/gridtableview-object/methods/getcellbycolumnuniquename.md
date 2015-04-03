---
title: getCellByColumnUniqueName
page_title: getCellByColumnUniqueName | UI for ASP.NET AJAX Documentation
description: getCellByColumnUniqueName
slug: grid/client-side-programming/gridtableview-object/methods/getcellbycolumnuniquename
tags: getcellbycolumnuniquename
published: True
position: 23
---

# getCellByColumnUniqueName



## 

Gives you the cell specified by a row and a column unique name.


|  __getCellByColumnUniqueName(gridRow, columnUniqueName)__  |  |  |
| ------ | ------ | ------ |
| __gridRow__ | __GridDataItem__ |The row which holds the cell.|
| __columnUniqueName__ | __String__ |The UniqueName of the column which identifies the cell uniquely.|

In order to get the cell value, you need to use the innerHTML property:

````JavaScript
	        function GetFirstItemContactNameCell() {
	            var masterTable = $find("<%=RadGrid1.ClientID%>").get_masterTableView();
	            var contactName = masterTable.getCellByColumnUniqueName(masterTable.get_dataItems()[0], "ContactName").innerHTML;
	        }
````



>note  __Note:__ The __ShowHeader__ attribute for the RadGrid/MasterTableView should be set to __true__ in order to use this method.
>

