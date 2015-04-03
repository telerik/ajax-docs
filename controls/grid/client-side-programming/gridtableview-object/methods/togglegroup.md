---
title: toggleGroup
page_title: toggleGroup | UI for ASP.NET AJAX Documentation
description: toggleGroup
slug: grid/client-side-programming/gridtableview-object/methods/togglegroup
tags: togglegroup
published: True
position: 49
---

# toggleGroup



## 

Method which expands/collapses a group. It receives as a parameterthe closest data row to the group header or directly the group header. The method accepts an optional parameter called Options.It provides more control over the expand\collapse behavior.


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
	        function ToggleGroupUsingDataItem() {
	            var masterTableView = $find("<%=RadGrid1.ClientID %>").get_masterTableView();
	            var dataItems = masterTableView.get_dataItems();
	            masterTableView.toggleGroup(dataItems[5].get_element(),
	            {
	                toggleChildren: false,
	                toggleParents: true
	            });
	        }
	
	        function ToggleGroupUsingGroupHeader() {
	            var masterTableView = $find("<%=RadGrid1.ClientID %>").get_masterTableView();
	            var groupHeader = $telerik.getElementsByClassName(masterTableView.get_element(), "rgGroupHeader")[3];
	            masterTableView.toggleGroup(groupHeader,
	            {
	                toggleChildren: false,
	                toggleParents: true
	            });
	        }
````


