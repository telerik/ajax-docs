---
title: get_masterTableViewHeader()
page_title: get_masterTableViewHeader() | RadGrid for ASP.NET AJAX Documentation
description: get_masterTableViewHeader()
slug: grid/client-side-programming/radgrid-object/properties/get_mastertableviewheader()
tags: get_mastertableviewheader()
published: True
position: 10
---

# get_masterTableViewHeader()



## 

This property returns the MasterTableView header instance for the respective grid client object.


|  **get_masterTableViewHeader()**  |
| ------ |
||

Example:

````JavaScript
function getMasterTableViewHeader() {
    var grid = $find("<%=RadGrid1.ClientID %>");
    var masterTableViewHeader = grid.get_masterTableViewHeader();
}
````



>note Please, keep in mind that this property would only return a non-null value when scrolling with static headers is enabled:
>


````ASP.NET
<clientsettings>
        <Scrolling AllowScroll="true" UseStaticHeaders="true" />
</clientsettings>
````



In all other cases, this property will return a null value.
