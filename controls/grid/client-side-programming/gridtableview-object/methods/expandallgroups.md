---
title: expandAllGroups
page_title: expandAllGroups | UI for ASP.NET AJAX Documentation
description: expandAllGroups
slug: grid/client-side-programming/gridtableview-object/methods/expandallgroups
tags: expandallgroups
published: True
position: 52
---

# expandAllGroups



## 

Method which expands all groups. It receives an optional parameter indicating which group level should be expanded.

Example:

````JavaScript
	        function ExpandAllGroups() {
	            var masterTableView = $find("<%=RadGrid1.ClientID %>").get_masterTableView();
	            masterTableView.expandAllGroups(2);
	        }
````


