---
title: get_visible()
page_title: get_visible() | UI for ASP.NET AJAX Documentation
description: get_visible()
slug: grid/client-side-programming/radgrid-object/properties/get_visible()
tags: get_visible()
published: True
position: 12
---

# get_visible()



## 

Property which determines whether the grid is visible on the client or not (style="display:none").


|  __get_visible()__  |
| ------ |
||

Example:

````JavaScript
	        function getVisibleState(sender, args) {
	            var grid = $find("<%=RadGrid1.ClientID %>");
	            var isVisibleOnClient = grid.get_visible();
	            alert(isVisibleOnClient);
	        }
````


