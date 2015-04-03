---
title: get_detailTables()
page_title: get_detailTables() | UI for ASP.NET AJAX Documentation
description: get_detailTables()
slug: grid/client-side-programming/radgrid-object/properties/get_detailtables()
tags: get_detailtables()
published: True
position: 3
---

# get_detailTables()



## 

Property which returns one-dimensional array representing a collection of client-side objects of type GridTableView (all nested grid tables excluding the MasterTableView). The property is read-only.


|  __get_detailTables()__  |
| ------ |
||

Example:

````JavaScript
	        function getDetailTables() {
	            var grid = $find("<%=RadGrid1.ClientID %>");
	            //get all detail tables in the hierarchy
	            var detailTablesArray = grid.get_detailTables();
	        }
````


