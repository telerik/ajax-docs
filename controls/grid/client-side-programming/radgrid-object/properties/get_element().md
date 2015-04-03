---
title: get_element()
page_title: get_element() | UI for ASP.NET AJAX Documentation
description: get_element()
slug: grid/client-side-programming/radgrid-object/properties/get_element()
tags: get_element()
published: True
position: 5
---

# get_element()



## 

Property which returns the DOM element of the div in which RadGrid is rendered.


|  __get_element()__  |
| ------ |
||

Example:

````JavaScript
	        function getDivElement() {
	            var grid = $find("<%=RadGrid1.ClientID %>");
	            var gridDiv = grid.get_element();            
	        }
````


