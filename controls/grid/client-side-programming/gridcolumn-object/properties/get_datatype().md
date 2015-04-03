---
title: get_dataType()
page_title: get_dataType() | UI for ASP.NET AJAX Documentation
description: get_dataType()
slug: grid/client-side-programming/gridcolumn-object/properties/get_datatype()
tags: get_datatype()
published: True
position: 0
---

# get_dataType()



## 

Property which returns the data type of the corresponding column.

>caution Meaningful when filtering is enabled for the grid or client-side command is handled (inside the OnCommand client-side event handler) and the grid is not bound server-side. Otherwise the returned value will be 'undefined'!
>



|  __get_dataType()__  |
| ------ |
||

Example:

````JavaScript
	        function getFirstColumnDataType() {
	            var masterTable = $find("<%= RadGrid1.ClientID %>").get_masterTableView();
	            //determine the data type for the first grid column
	            var dataType = masterTable.get_columns()[0].get_dataType();
	        } 
````


