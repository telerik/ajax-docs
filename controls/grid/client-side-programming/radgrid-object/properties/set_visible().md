---
title: set_visible()
page_title: set_visible() | UI for ASP.NET AJAX Documentation
description: set_visible()
slug: grid/client-side-programming/radgrid-object/properties/set_visible()
tags: set_visible()
published: True
position: 13
---

# set_visible()



## 

Property which sets the grid as visible or not on the client (changing the *style -> display* value of the grid div).


|  __set_visible(bool)__  |  |
| ------ | ------ |
|bool|Boolean parameter which accepts __true__ or __false__ values|

Example:

````JavaScript
	        function ShowGrid() {
	            var grid = $find("<%=RadGrid1.ClientID %>");
	            grid.set_visible(true);
	        }
	        function HideGrid() {
	            var grid = $find("<%=RadGrid1.ClientID %>");
	            grid.set_visible(false);
	        }
````



>note Note that in case RadGrid is bound on the server and you change its visibility using this property, after postback either from outer control or when performing operations like paging, sorting, etc. in the grid its initial visibility will be restored. The grid will keep its current visibility only when using[client-side binding]({%slug grid/data-binding/understanding-data-binding/client-side-binding/client-side-binding%}).
>

