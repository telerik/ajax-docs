---
title: deselectItem
page_title: deselectItem | UI for ASP.NET AJAX Documentation
description: deselectItem
slug: grid/client-side-programming/gridtableview-object/methods/deselectitem
tags: deselectitem
published: True
position: 10
---

# deselectItem



## 

Method which deselects the table row passed as an argument or the row corresponding to the index passed as an argument. If you want to deselect all rows (meaningful with multi-row selection enabled), execute the [clearSelectedItems()]({%slug grid/client-side-programming/radgrid-object/methods/clearselecteditems%}) method instead.


|  __deselectItem (gridItem) or deselectItem(index)__  |  |  |
| ------ | ------ | ------ |
| __row__ |HTML row object - <tr>|The row that will be selected.|
| __index__ |Integer|The row corresponding to the __index__ will be deselected.|

Example:

````JavaScript
	        function DeselectFirstItem() {
	            var masterTable = $find("<%= RadGrid1.ClientID %>").get_masterTableView();
	            masterTable.deselectItem(masterTable.get_dataItems()[0].get_element());
	        }  
````


