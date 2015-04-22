---
title: get_id()
page_title: get_id() | RadGrid for ASP.NET AJAX Documentation
description: get_id()
slug: grid/client-side-programming/radgrid-object/properties/get_id()
tags: get_id()
published: True
position: 7
---

# get_id()



## 

Property which returns the id of the grid client object.


|  **get_id()**  |
| ------ |
||

Example:

````JavaScript
	        function getRadGridID() {
	            var grid = $find("<%=RadGrid1.ClientID %>");
	            var gridId = grid.get_id();            
	        }
````


