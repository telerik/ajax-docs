---
title: selectItem
page_title: selectItem | RadGrid for ASP.NET AJAX Documentation
description: selectItem
slug: grid/client-side-programming/gridtableview-object/methods/selectitem
tags: selectitem
published: True
position: 38
---

# selectItem



## 

Method which selects the table row passed as an argument or the row corresponding to the index passed as an argument. If you want to have single row selected at a time (meaningful with multi-row selection enabled), execute the [clearSelectedItems()]({%slug grid/client-side-programming/radgrid-object/methods/clearselecteditems%}) method prior to the call to the *selectItem(gridItem)* method.

>caution If the -index- passed as argument does not correspond to item of type GridDataItem, the next GridDataItem (immediately below the item with argument -index- ) will be selected.
>



|  **selectItem(gridItem) or selectItem(index)**  |  |  |
| ------ | ------ | ------ |
| **gridItem** |HTML row object - <tr>|The row that will be selected.|
| **index** |Integer|The row corresponding to the **index** will be selected.|

Example:

````JavaScript
	        function SelectFirstItem() {
	            var masterTable = $find("<%= RadGrid1.ClientID %>").get_masterTableView();
	            //clear the previously selected items if necessary
	            masterTable.clearSelectedItems();
	            masterTable.selectItem(masterTable.get_dataItems()[0].get_element());
	        } 
````


