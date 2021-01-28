---
title: set_selected()
page_title: set_selected() - RadGrid
description: Check our Web Forms article about set_selected().
slug: grid/client-side-programming/griddataitem-object/properties/set_selected()
tags: set_selected()
published: True
position: 11
---

# set_selected()



## 

The method is used to select/deselect a row on the client. It takes a single Boolean argument, specifying whether the items should be selected or not.

Example:

````JavaScript
	        function GridCreated() {
	            var masterTable = $find("<%=RadGrid1.ClientID%>").get_masterTableView();
	            var dataItem = masterTable.get_dataItems()[0];
	            dataItem.set_selected(true);
	        }
````


