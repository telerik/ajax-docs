---
title: Access underlying dataitem values of RadGrid rows
description: 
type: how-to
page_title: 
slug: grid-access-underlying-dataitem-values
position: 
tags: 
ticketid: 1443146
res_type: kb
---

## Environment
<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>RadGrid for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>


## Solution
It is possible to acquire all raw data coming for a given record from the database using the ItemDataBound event handler. Outside of this event, this info is not present because the binding process is already over.

If you want to access this info in another event like SelectedIndexChanged or PreRender, you can set the Field Name you are interested in to be included in the DataKeyNames collection of the MasterTableView tag. Then, you will be able to use the GetDataKeyValue() method. More info you can find in the following section:

[https://docs.telerik.com/devtools/aspnet-ajax/controls/grid/rows/accessing-cells-and-rows#accessing-raw-field-data-and-key-values](https://docs.telerik.com/devtools/aspnet-ajax/controls/grid/rows/accessing-cells-and-rows#accessing-raw-field-data-and-key-values)
