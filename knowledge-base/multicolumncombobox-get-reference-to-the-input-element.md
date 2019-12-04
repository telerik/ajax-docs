---
title: Get the Input DOM element of MultiColumnComboBox
description: The article explains how to get reference to the input element of the multi column combobox.
type: how-to
page_title: Get reference to the input element of RadMultiColumnComboBox
slug: multicolumncombobox-get-reference-to-the-input-element
position: 
tags: 
ticketid: 1444464
res_type: kb
---

## Environment
<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>RadMultiColumnComboBox for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>


## Description
The article demonstrates how you can get reference to the DOM input element of the [RadMultiColumnComboBox](https://demos.telerik.com/aspnet-ajax/multicolumncombobox/overview/defaultcs.aspx).

## Solution
RadMultiColumnComboBox is a server wrapper of the [Kendo UI MultiColumnComboBox](https://docs.telerik.com/kendo-ui/api/javascript/ui/multicolumncombobox) and you can obtain reference to its input through the kendoWidget as shown below:

````JavaScript
var multicolumncombo = $find("<%= RadMultiColumnComboBox1.ClientID %>");
//get reference to the input element
var input = multicolumncombo.kendoWidget.input;

//get for example the input value
var inputValue = multicolumncombo.kendoWidget.input.val();
````

You can find more information for the client-side API at [RadMultiColumnComboBox Object](https://docs.telerik.com/devtools/aspnet-ajax/controls/multicolumncombobox/client-side-programming/overview).



