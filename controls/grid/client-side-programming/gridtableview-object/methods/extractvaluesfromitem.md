---
title: extractValuesFromItem
page_title: extractValuesFromItem | UI for ASP.NET AJAX Documentation
description: extractValuesFromItem
slug: grid/client-side-programming/gridtableview-object/methods/extractvaluesfromitem
tags: extractvaluesfromitem
published: True
position: 20
---

# extractValuesFromItem



## 

Method which extracts the new values from the edited table row passed as an argument or the row corresponding to the index passed as an argument. The values will be fetched purely client-side and the data will be returned in an object array which can be traversed to get each individual data entry.

>note Supported with InPlace and EditForms auto-generated edit form!
>


>note If invalid index is passed as argument to the method, the returned object array will be empty.
>



|  __extractValuesFromItem(gridItem) or extractValuesFromItem(index)__  |  |  |
| ------ | ------ | ------ |
| __gridItem__ |HTML row object - <tr>|The editable row from which the new values will be extracted ( __GridDataItem__ ).|
| __index__ |Integer|The editable row (corresponding to the __index__ ) from which the new values will be extracted.|

Example:

````JavaScript
	        function GetFirstEditedItemNewValues() {
	            var masterTable = $find("<%= RadGrid1.ClientID %>").get_masterTableView();
	
	            var newValues = masterTable.extractValuesFromItem(0);
	            var newValuesSB = new Sys.StringBuilder();
	
	            for (var property in newValues) {
	                newValuesSB.append(String.format("<b>{0}</b> : {1} <br/>", property, newValues[property]));
	            }
	        }
````


