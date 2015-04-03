---
title: filter
page_title: filter | UI for ASP.NET AJAX Documentation
description: filter
slug: grid/client-side-programming/gridtableview-object/methods/filter
tags: filter
published: True
position: 21
---

# filter



## 

Method which triggers filter command for the column with *UniqueName* (set on the server) passed as a first argument. The second argument should be value to compare (or two values separated by [space] for between filter pattern) or an empty string for EqualTo, NoFilter, IsNull, etc. The last third argument has to be a value from the __Telerik.Web.UI.GridFilterFunction__ enumeration which internally recognizes the filter criteria that should be applied. All server-side filtering capabilities of RadGrid are applicable here as well. See the topic describing the [fireCommand method]({%slug grid/client-side-programming/gridtableview-object/methods/firecommand%}) for further details.


|  __filter(colUniqueName, valueToCompare, filterFunction, shouldUpdateFilterControl)__  |  |  |
| ------ | ------ | ------ |
| __colUniqueName__ |String|The UniqueName of the column that will be filtered.|
| __valueToCompare__ |Optional argument (String, Integer, etc.)|The value which will be used for the comparison against the entire set of data through the filter criteria.|
| __filterFunction__ |Enumeration value|The filter pattern that will be applied.|
| __shouldUpdateFilterControl__ |Boolean (Optional)|Determines whether the filter control will be updated with the relevant filter value applied by the grid filter expression. The default value is false.|

Example:

````JavaScript
	        function RemoveFilter() {
	            var masterTable = $find("<%= RadGrid1.ClientID %>").get_masterTableView();
	            masterTable.filter("OrderID", "", Telerik.Web.UI.GridFilterFunction.NoFilter);
	        }
	
	        function ApplyGreaterThanFilter() {
	            var masterTable = $find("<%= RadGrid1.ClientID %>").get_masterTableView();
	            masterTable.filter("OrderID", 10254, Telerik.Web.UI.GridFilterFunction.GreaterThan, true);
	        }
	
	        function ApplyBetweenFilter() {
	            var masterTable = $find("<%= RadGrid1.ClientID %>").get_masterTableView();
	            masterTable.filter("OrderID", "10256 10260", Telerik.Web.UI.GridFilterFunction.Between, true);
	        }
````



__Telerik.Web.UI.GridFilterFunction enumeration__


|  __Internal integer value__  |  __Public value__  |
| ------ | ------ |
|0|NoFilter|
|1|Contains|
|2|DoesNotContain|
|3|StartsWith|
|4|EndsWith|
|5|EqualTo|
|6|NotEqualTo|
|7|GreaterThan|
|8|LessThan|
|9|GreaterThanOrEqualTo|
|10|LessThanOrEqualTo|
|11|Between|
|12|NotBetween|
|13|IsEmpty|
|14|NotIsEmpty|
|15|IsNull|
|16|NotIsNull|
|17|Custom|
