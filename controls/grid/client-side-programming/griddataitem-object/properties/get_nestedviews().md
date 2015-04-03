---
title: get_nestedViews()
page_title: get_nestedViews() | UI for ASP.NET AJAX Documentation
description: get_nestedViews()
slug: grid/client-side-programming/griddataitem-object/properties/get_nestedviews()
tags: get_nestedviews()
published: True
position: 8
---

# get_nestedViews()



## 

This is one-dimensional array representing a collection of client-side objects of type GridTableView (one level below the parent GridDataItem). The array will contain only one element if you use standard hierarchy with single table at a level.

>note If you have HierarchyLoadMode="ServerBind" or "ServerOnDemand" for the corresponding table, to reference the nested tables for a particular GridDataItem this very item should be expanded!
>


Example:

````JavaScript
	        function getNestedViewsForFirstMasterItem() {
	            var masterTable = $find("<%= RadGrid1.ClientID %>").get_masterTableView();
	            //get all nested views for the first item in the master table
	            masterTable.get_dataItems()[0].get_nestedViews();
	        } 
````


