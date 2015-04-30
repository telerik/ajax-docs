---
title: get_masterTableViewFooter()
page_title: get_masterTableViewFooter() | RadGrid for ASP.NET AJAX Documentation
description: get_masterTableViewFooter()
slug: grid/client-side-programming/radgrid-object/properties/get_mastertableviewfooter()
tags: get_mastertableviewfooter()
published: True
position: 9
---

# get_masterTableViewFooter()



## 

This property returns the MasterTableView footer instance for the respective grid client object.


|  **get_masterTableViewFooter()**  |
| ------ |
||

Example:

````JavaScript
	        function getMasterTableViewFooter() {
	            var grid = $find("<%=RadGrid1.ClientID %>");
	            var masterTableViewFooter = grid.get_masterTableViewFooter();
	        }
````



>note Please, keep in mind that this property would only return a non-null value, when a footer is present in the grid (ShowFooter="true"), as well as when scrolling with static headers is enabled:
>


````ASP.NET
	        <clientsettings>
	                <Scrolling AllowScroll="true" UseStaticHeaders="true" />
	        </clientsettings>
````



In all other cases, this property will return a null value.
