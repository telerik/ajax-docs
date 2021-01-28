---
title: get_dataItem
page_title: get_dataItem - RadGrid
description: Check our Web Forms article about get_dataItem.
slug: grid/client-side-programming/griddataitem-object/methods/get_dataitem
tags: get_dataitem
published: True
position: 3
---

# get_dataItem





This method provides reference to the DataItem object (data container). Useful to obtain data from a particular row cell passing the UniqueName of the column as an indexer. Applicable only when client-side binding is used.


|  **get_dataItem()**  |
| ------ |
||

Example:

````ASP.NET
<telerik:RadGrid RenderMode="Lightweight" ID="RadGrid1" runat="server">
    <ClientSettings>
        <ClientEvents OnRowDataBound="RadGrid1_RowDataBound" />
    </ClientSettings>
</telerik:RadGrid>
````



````JavaScript
function RadGrid1_RowDataBound(sender, eventArgs) {
    //extracts the employee name (from column with unique name "EmployeeName") of the currently bound grid item
    var employeeName = eventArgs.get_gridDataItem().get_dataItem()["EmployeeName"];
} 
````


