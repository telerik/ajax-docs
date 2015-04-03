---
title: collapseGroup
page_title: collapseGroup | UI for ASP.NET AJAX Documentation
description: collapseGroup
slug: grid/client-side-programming/gridtableview-object/methods/collapsegroup
tags: collapsegroup
published: True
position: 51
---

# collapseGroup



## 

Method which collapses a group. It receives as a parameterthe closest data row to the group header or directly the group header. The method accepts an optional parameter called Options.It provides more control over the collapse behavior.


|  __"Options" parameter properties__  |  |
| ------ | ------ |
| __expandChildren__ |Will expand all child groups|
| __expandParents__ |Will expand all parent groups|
| __collapseChildren__ |Will collapse all child groups|
| __collapseParents__ |Will collapse all parent groups|
| __toggleChildren__ |Will expand/collapse all child groups according to the state of the current group|
| __toggleParents__ |Will expand/collapse all parent groups according to the state of the current group|
| __findClosestGroup__ |Will expand the first parent group|

Example:

````JavaScript
	        function CollapseGroupUsingDataItem() {
	            var masterTableView = $find("<%=RadGrid1.ClientID %>").get_masterTableView();
	            masterTableView.collapseGroup(masterTableView.get_dataItems()[4].get_element(),
	            {
	                expandParents: true,
	                expandChildren: false
	            });
	        }
	
	        function CollapseGroupUsingGroupHeader() {
	            var masterTableView = $find("<%=RadGrid1.ClientID %>").get_masterTableView();
	            var groupHeader = $telerik.getElementsByClassName(masterTableView.get_element(), "rgGroupHeader")[4];
	            masterTableView.collapseGroup(groupHeader,
	            {
	                expandChildren: false,
	                findClosestGroup: true
	            });
	        }
````


