---
title: Add SelectAll button to select all visible dropdown items when clicked
description: Provide the ability to select all dropdown entries in the multiselect dropdown. Right now the users have to select one at the time and it is time consuming.
type: how-to
page_title: Create a SelectAll button to select all visible dropdown items when pressed
slug: multiselect-select-all-entries-via-selectall-button
position: 
tags: 
ticketid: 1603682
res_type: kb
---

## Environment
<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>RadMultiSelect for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>


## Description
Right now the users have to select one at a time and it is time-consuming. The solution provides the ability to select all dropdown entries in the multi-select popup. 

## Solution
Add a SelectAll button element in the HeaderTemplate of RadMultiSelect for ASP.NET AJAX. In the click event of the button, call the SelectAllItems function that will select all visible dropdown items, e.g.

````ASPX
<script>
    function SelectAllItems() {
        var multiSelect = $find("<%=requiredMultiSelect.ClientID%>");
        var items = multiSelect.get_items();
        
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            item.click(); //click to select all visible dropdown items
        }
    }
</script>
<telerik:RadMultiSelect runat="server" DataValueField="text" Filter="Contains" AutoClose="false" EnforceMinLength="false" Placeholder="Select attendees..."
    DataTextField="text" Width="500px" ID="requiredMultiSelect">
    <HeaderTemplate>
        <div>
            <button type="button" onclick="SelectAllItems()">Select All</button>
        </div>
    </HeaderTemplate>
    <Items>
        <telerik:MultiSelectItem Text="Steven White"></telerik:MultiSelectItem>
        <telerik:MultiSelectItem Text="Nancy King"></telerik:MultiSelectItem>
        <telerik:MultiSelectItem Text="Nancy Davolio"></telerik:MultiSelectItem>
        <telerik:MultiSelectItem Text="Robert Davolio"></telerik:MultiSelectItem>
        <telerik:MultiSelectItem Text="Michael Leverling"></telerik:MultiSelectItem>
        <telerik:MultiSelectItem Text="Andrew Callahan"></telerik:MultiSelectItem>
        <telerik:MultiSelectItem Text="Michael Suyama"></telerik:MultiSelectItem>
        <telerik:MultiSelectItem Text="Anne King"></telerik:MultiSelectItem>
        <telerik:MultiSelectItem Text="Laura Peacock"></telerik:MultiSelectItem>
        <telerik:MultiSelectItem Text="Robert Fuller"></telerik:MultiSelectItem>
        <telerik:MultiSelectItem Text="Janet White"></telerik:MultiSelectItem>
        <telerik:MultiSelectItem Text="Nancy Leverling"></telerik:MultiSelectItem>
        <telerik:MultiSelectItem Text="Robert Buchanan"></telerik:MultiSelectItem>
        <telerik:MultiSelectItem Text="Margaret Buchanan"></telerik:MultiSelectItem>
        <telerik:MultiSelectItem Text="Andrew Fuller"></telerik:MultiSelectItem>
        <telerik:MultiSelectItem Text="Anne Davolio"></telerik:MultiSelectItem>
        <telerik:MultiSelectItem Text="Andrew Suyama"></telerik:MultiSelectItem>
        <telerik:MultiSelectItem Text="Nige Buchanan"></telerik:MultiSelectItem>
        <telerik:MultiSelectItem Text="Laura Fuller"></telerik:MultiSelectItem>
    </Items>
</telerik:RadMultiSelect>
````
 
   