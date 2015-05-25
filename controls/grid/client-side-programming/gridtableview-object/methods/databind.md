---
title: dataBind
page_title: dataBind | RadGrid for ASP.NET AJAX Documentation
description: dataBind
slug: grid/client-side-programming/gridtableview-object/methods/databind
tags: databind
published: True
position: 7
---

# dataBind



## 

Method which will force client rebind of the grid and will refresh its state when a new data source is assigned using the [set_dataSource()]({%slug grid/client-side-programming/gridtableview-object/methods/set_datasource%}) method. Meaningful in this scenario only.


|  **dataBind()**  |
| ------ |
||

Example:

````JavaScript
function assignDataSourceAndRefresh()
{
    var masterTable = $find("<%= RadGrid1.ClientID %>").get_masterTableView();
    masterTable.set_dataSource(<some_data_source_of_the_specified_type_above>);
    masterTable.dataBind();
}
````


