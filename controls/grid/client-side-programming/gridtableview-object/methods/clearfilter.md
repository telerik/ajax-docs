---
title: clearFilter
page_title: clearFilter | UI for ASP.NET AJAX Documentation
description: clearFilter
slug: grid/client-side-programming/gridtableview-object/methods/clearfilter
tags: clearfilter
published: True
position: 3
---

# clearFilter



## 

Method which clears the filter for a specific column or the whole filter expression of the TableView object if no argument is passed.


|  __clearFilter(), clearFilter(columnUniqueName)__  |  |  |
| ------ | ------ | ------ |
| __columnUniqueName__ |String|The unique name of the column whose filter should be cleared.|

Example:

````JavaScript
	        function clearFilterExpressions() {
	            var grid = $find("<%=RadGrid1.ClientID %>");
	            var masterTableView = grid.get_masterTableView();
	            masterTableView.clearFilter();
	        }
	
	        function clearColumnFilter() {
	            var grid = $find("<%=RadGrid1.ClientID %>");
	            var masterTableView = grid.get_masterTableView();
	            masterTableView.clearFilter("CompanyName");
	        }
````


