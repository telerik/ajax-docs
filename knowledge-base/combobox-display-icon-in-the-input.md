---
title: Showing the image icon of the selected item in the combobox input 
description: See how to display the icon of the selected item in the input box of the combobox control - Telerik UI for ASP.NET AJAX
type: how-to
page_title: Show the image icon of the selected item in the combobox input 
slug: combobox-display-icon-in-the-input
position: 
tags: 
ticketid: 1375460
res_type: kb
---

## Environment
<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>RadComboBox for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>


## Description
Find below a solution of how to display programmatically the icon of the selected dropdown item in the input box of the combobox control.

## Solution
You can achieve the requested functionality with the client-side API of the combobox:

````ASP.NET
    <style>
        .RadComboBox .rcbInput {
            padding-left: 30px;
        }
    </style>
    <telerik:RadComboBox ID="uxIconCombo" runat="server"
        OnClientLoad="OnClientLoad"
        OnClientSelectedIndexChanged="OnClientSelectedIndexChanged">
        <Items>
            <telerik:RadComboBoxItem runat="server" ImageUrl="~/Images/Icon1.png" Text="Item 1" />
            <telerik:RadComboBoxItem runat="server" ImageUrl="~/Images/Icon2.png" Text="Item 2" />
        </Items>
    </telerik:RadComboBox>
    <script>
        function OnClientLoad(sender, args) {
            var input = sender.get_inputDomElement();
            input.style.backgroundImage = "url(" + sender.get_selectedItem().get_imageUrl() + ")";
            input.style.backgroundRepeat = "no-repeat";
        }

        function OnClientSelectedIndexChanged(sender, args) {
            var input = sender.get_inputDomElement();
            input.style.backgroundImage = "url(" + args.get_item().get_imageUrl() + ")";
            input.style.backgroundRepeat = "no-repeat";
            input.blur();
        }
    </script>
````
