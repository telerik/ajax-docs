---
title: extractKeysFromItem
page_title: extractKeysFromItem | UI for ASP.NET AJAX Documentation
description: extractKeysFromItem
slug: grid/client-side-programming/gridtableview-object/methods/extractkeysfromitem
tags: extractkeysfromitem
published: True
position: 19
---

# extractKeysFromItem



## 

Method which extracts the key values (added to the __ClientDataKeyNames__ collection of the master/detail table) from the edited table row passed as an argument or the row corresponding to the index passed as an argument. The values will be fetched purely client-side and the data will be returned in an object array which can be traversed to get each individual data entry.

>note Supported with InPlace and EditForms auto-generated edit form!
>


>note If invalid index is passed as argument to the method, the returned object array will be empty.
>



|  __extractKeyFromItem(gridItem) or extractKeysFromItem(index)__  |  |  |
| ------ | ------ | ------ |
| __gridItem__ |HTML row object - <tr>|The editable row from which the key values will be extracted ( __GridDataItem__ ).|
| __index__ |Integer|The editable row (corresponding to the __index__ ) from which the key values will be extracted.|

Example:

````JavaScript
	        function GetFirstEditedItemKeyValues() {
	            var masterTable = $find("<%= RadGrid1.ClientID %>").get_masterTableView();
	
	            var keyValues = masterTable.extractKeysFromItem(0);
	            var keyValuesSB = new Sys.StringBuilder();
	
	            for (var property in keyValues) {
	                keyValuesSB.append(String.format("<b>{0}</b> : {1} <br/>", property, keyValues[property]));
	            }
	        }
````


