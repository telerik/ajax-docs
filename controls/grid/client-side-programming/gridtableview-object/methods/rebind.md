---
title: rebind
page_title: rebind | RadGrid for ASP.NET AJAX Documentation
description: rebind
slug: grid/client-side-programming/gridtableview-object/methods/rebind
tags: rebind
published: True
position: 33
---

# rebind



## 

Method which will force rebind of the grid and will refresh its state using internally the [fireCommand()]({%slug grid/client-side-programming/gridtableview-object/methods/firecommand%}) client-side method. The action will be performed on the server with ajax request in case the grid is ajaxified with RadAjaxManager/RadAjaxPanel or ASP:UpdatePanel.


|  **rebind()**  |
| ------ |
||

Example:

````JavaScript
	        function RefreshGrid() {
	            var masterTable = $find("<%= RadGrid1.ClientID %>").get_masterTableView();
	            masterTable.rebind();
	        }
````


