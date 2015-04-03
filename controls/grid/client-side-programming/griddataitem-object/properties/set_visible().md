---
title: set_visible()
page_title: set_visible() | UI for ASP.NET AJAX Documentation
description: set_visible()
slug: grid/client-side-programming/griddataitem-object/properties/set_visible()
tags: set_visible()
published: True
position: 12
---

# set_visible()



## 

The method toggles the visibility of an item on and off. It takes a boolean value indicating whether the item will be visible or not.

Example:

````JavaScript
	        function GridCreated() {
	            var masterTable = $find("<%=RadGrid1.ClientID%>").get_masterTableView();
	            var dataItem = masterTable.get_dataItems()[0]; 
	            dataItem.set_visible(false);
	        }
````


