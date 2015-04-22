---
title: collapseAllGroups
page_title: collapseAllGroups | RadGrid for ASP.NET AJAX Documentation
description: collapseAllGroups
slug: grid/client-side-programming/gridtableview-object/methods/collapseallgroups
tags: collapseallgroups
published: True
position: 53
---

# collapseAllGroups



## 

Method which collapses all groups. It receives an optional parameter indicating which group level should be collapsed.

Example:

````JavaScript
			function CollapseAllGroups() {
	            var masterTableView = $find("<%=RadGrid1.ClientID %>").get_masterTableView();
	            masterTableView.collapseAllGroups(2);
	        }
````


