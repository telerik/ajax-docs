---
title: get_allowMultiRowSelection()
page_title: get_allowMultiRowSelection() | RadGrid for ASP.NET AJAX Documentation
description: get_allowMultiRowSelection()
slug: grid/client-side-programming/radgrid-object/properties/get_allowmultirowselection()
tags: get_allowmultirowselection()
published: True
position: 2
---

# get_allowMultiRowSelection()



## 

Property which returns a Boolean result that indicates if multiple row select is enabled. See [Selecting multiple rows (client-side)]({%slug grid/functionality/selecting/selecting-rows/client-side-selecting-multiple-rows%}) topic for more details.


|  **get_allowMultiRowSelection()**  |
| ------ |
||

Example:

````JavaScript
function getMultiRowSelection() {
    var grid = $find("<%=RadGrid1.ClientID %>");
    alert(grid.get_allowMultiRowSelection());     
}       
````


