---
title: expandGroup
page_title: expandGroup | UI for ASP.NET AJAX Documentation
description: expandGroup
slug: grid/client-side-programming/gridtableview-object/methods/expandgroup
tags: expandgroup
published: True
position: 50
---

# expandGroup



## 

Method which expands a group. It receives as a parameterthe closest data row to the group header or directly the group header. The method accepts an optional parameter called Options.It provides more control over the expand behavior.


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
	        function ExpandGroupUsingDataItem() {
	            var masterTableView = $find("<%=RadGrid1.ClientID %>").get_masterTableView();
	            masterTableView.expandGroup(masterTableView.get_dataItems()[4].get_element(),
	            {
	                expandChildren: false,
	                findClosestGroup: true
	            });
	        }
	
	        function ExpandGroupUsingGroupHeader() {
	            var masterTableView = $find("<%=RadGrid1.ClientID %>").get_masterTableView();
	            var groupHeader = $telerik.getElementsByClassName(masterTableView.get_element(), "rgGroupHeader")[4];
	            masterTableView.expandGroup(groupHeader,
	            {
	                expandChildren: false,
	                expandParents: true
	            });
	        }
````


