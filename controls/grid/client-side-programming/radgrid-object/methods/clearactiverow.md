---
title: clearActiveRow
page_title: clearActiveRow | UI for ASP.NET AJAX Documentation
description: clearActiveRow
slug: grid/client-side-programming/radgrid-object/methods/clearactiverow
tags: clearactiverow
published: True
position: 0
---

# clearActiveRow



## 

Method which clears the active row in the grid. The setting will be persisted across postbacks/ajax requests.


|  __clearActiveRow()__  |
| ------ |
||

Example:

````JavaScript
	        function clearActiveRowInGrid(sender, args) {
	            var grid = $find("<%=RadGrid1.ClientID %>");
	            grid.clearActiveRow();
	        }
````



>note Please note that this method will work only when Keyboard Navigation and Row Selection of RadGrid are enabled.
>


````ASPNET
	        <ClientSettings AllowKeyboardNavigation="true">
	            <Selecting AllowRowSelect="true" />
	        </ClientSettings>
````


