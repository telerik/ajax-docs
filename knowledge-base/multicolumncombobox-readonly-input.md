---
title: Making the input field of RadMultiColumnCombobox readonly
description: How to make the RadMultiColumnCombobox textbox readonly while keeping the selection option functional 
type: how-to
page_title: Making the input field of RadMultiColumnCombobox readonly
slug: multicolumncombobox-readonly-input
position: 
tags: 
ticketid: 1575377
res_type: kb
---

## Environment
<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>RadMenu for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>


## Description
See how to make the RadMultiColumnCombobox textbox read-only while keeping the dropdown selection functionality operational.

## Solution
The solution shows how to get a reference to the textbox and set its readonly attribute:

````ASPX
    <script>
        function OnClientLoad(sender, args) {
                $telerik.$(".k-input")[0].setAttribute("readonly", "true");
        }
    </script>
    <telerik:RadMultiColumnComboBox ClientEvents-OnLoad="OnClientLoad" runat="server" ID="RadMultiColumnComboBox3"
        DataTextField="ShipName" DataValueField="OrderID" DataSourceID="SqlDataSource1"
        Width="100%" DropDownWidth="600">
        <ColumnsCollection>
            <telerik:MultiColumnComboBoxColumn Field="OrderID" Title="OrderID" />
            <telerik:MultiColumnComboBoxColumn Field="Freight" Title="Freight" />
            <telerik:MultiColumnComboBoxColumn Field="ShipName" Title="ShipName" />
        </ColumnsCollection>
        <PopupSettings />
    </telerik:RadMultiColumnComboBox>
````

   
   