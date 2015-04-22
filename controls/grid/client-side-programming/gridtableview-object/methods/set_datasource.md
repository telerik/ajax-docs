---
title: set_dataSource
page_title: set_dataSource | RadGrid for ASP.NET AJAX Documentation
description: set_dataSource
slug: grid/client-side-programming/gridtableview-object/methods/set_datasource
tags: set_datasource
published: True
position: 39
---

# set_dataSource



## 

Method which can be used to assign data source for the corresponding GridTableView client instance. This data source should be of JSON format which can be serialized by a web service or page method. The method be used for a flat grid or hierarchical grid with HierarchyLoadMode set to Client.


|  **set_dataSource(dataSource)**  |  |  |
| ------ | ------ | ------ |
| **dataSource** |Object|The source which will be assigned to the respective GridTableView instance.|

Example:

````JavaScript
	        function assignDataSource()
	        {
	            var masterTable = $find("<%= RadGrid1.ClientID %>").get_masterTableView();
	            masterTable.set_dataSource(<some_data_source_of_the_specified_type_above>);
	            masterTable.dataBind();
	        }
````


