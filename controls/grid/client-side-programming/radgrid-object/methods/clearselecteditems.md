---
title: clearSelectedItems
page_title: clearSelectedItems | RadGrid for ASP.NET AJAX Documentation
description: clearSelectedItems
slug: grid/client-side-programming/radgrid-object/methods/clearselecteditems
tags: clearselecteditems
published: True
position: 1
---

# clearSelectedItems



## 

Method which clears the selected items in the grid (and all sub-levels in hierarchical grid structure) on the client.


|  **clearSelectedItems()**  |
| ------ |
||

Example:

````JavaScript
	        function clearSelectedItems(sender, args) {
	            var grid = $find("<%=RadGrid1.ClientID %>");
	            grid.clearSelectedItems();
	        }
````



>note Please note that this method is only applicable whenRow Selection of RadGrid is enabled.
>


````ASP.NET
	        <ClientSettings>
	            <Selecting AllowRowSelect="true" />
	        </ClientSettings>     
````


