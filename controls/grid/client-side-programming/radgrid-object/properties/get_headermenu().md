---
title: get_headerMenu()
page_title: get_headerMenu() | RadGrid for ASP.NET AJAX Documentation
description: get_headerMenu()
slug: grid/client-side-programming/radgrid-object/properties/get_headermenu()
tags: get_headermenu()
published: True
position: 6
---

# get_headerMenu()



## 

Property which returns the client object of the [grid header context menu](http://demos.telerik.com/aspnet-ajax/grid/examples/generalfeatures/headercontextmenu/defaultcs.aspx) when switched on. Useful when you would like to customize the items in it on the client (see the javascript logic at the top of [this help topic]({%slug grid/functionality/filtering/how-to/reduce-the-filter-menu-options%}) for a reference).


|  **get_headerMenu()**  |
| ------ |
||

Example:

````JavaScript
	        function getHeaderContextMenu() {
	            var grid = $find("<%=RadGrid1.ClientID %>");
	            var headerContextMenu = grid.get_headerMenu();
	        }
````


