---
title: get_cell
page_title: get_cell | RadGrid for ASP.NET AJAX Documentation
description: get_cell
slug: grid/client-side-programming/griddataitem-object/methods/get_cell
tags: get_cell
published: True
position: 2
---

# get_cell



## 

This method takes a column UniqueName and returns the corresponding client table cell of the row. Useful to reference controls inside the cell or changing the appearance of the cell content.


|  **get_cell(columnUniqueName)**  |  |  |
| ------ | ------ | ------ |
| **columnUniqueName** |String|The UniqueName of the column which identifies the cell uniquely|

Example:

````ASPNET
	    <telerik:RadGrid ID="RadGrid1" runat="server">
	        <ClientSettings>
	            <ClientEvents OnRowDataBound="RadGrid1_RowDataBound" />
	        </ClientSettings>
	    </telerik:RadGrid>
````



````JavaScript
	        function RadGrid1_RowDataBound(sender, args){
	            // conditional formatting
	            args.get_item().get_cell("TitleOfCourtesy").style.fontWeight = (args.get_dataItem()["TitleOfCourtesy"] == "Dr.") ? "bold" : "normal";
	        } 
````



>note Note that get_cell() method works only with client-side binding.
>

