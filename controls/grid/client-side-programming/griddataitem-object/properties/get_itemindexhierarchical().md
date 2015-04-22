---
title: get_itemIndexHierarchical()
page_title: get_itemIndexHierarchical() | RadGrid for ASP.NET AJAX Documentation
description: get_itemIndexHierarchical()
slug: grid/client-side-programming/griddataitem-object/properties/get_itemindexhierarchical()
tags: get_itemindexhierarchical()
published: True
position: 7
---

# get_itemIndexHierarchical()



## 

Property which retrieves the hierarchical index of a particular GridDataItem.


|  **get_itemIndexHierarchical()**  |
| ------ |
||

Example:

````JavaScript
	        function getItemIndexHierarchical() {
	            var grid = $find("<%=RadGrid1.ClientID %>");
	            var masterTableView = grid.get_masterTableView();
	            var dataItems = masterTableView.get_dataItems();
	            alert(dataItems[0].get_itemIndexHierarchical());            
	        }       
````


