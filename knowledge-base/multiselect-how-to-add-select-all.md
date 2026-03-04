---
title: Adding a Select All Option to RadMultiSelect
description: Learn how to implement a Select All/Unselect All feature in RadMultiSelect using an external button and the client-side API.
type: how-to
page_title: How to Add Select All Functionality to RadMultiSelect in ASP.NET AJAX
slug: multiselect-how-to-add-select-all
tags: radmultiselect, select-all, client-side, asp.net-ajax, multiselect
res_type: kb
ticketid: 1673089
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

I want to add a "Select All" option to RadMultiSelect.

This knowledge base article also answers the following questions:
- How do I implement a Select All feature for RadMultiSelect?
- What client-side API can be used to manage RadMultiSelect selections?
- Is there a way to toggle between selecting all items and deselecting all in RadMultiSelect?

## Solution

To add a Select All / Unselect All functionality to RadMultiSelect, utilize an external element (for example, a button) along with the client-side API of the MultiSelect. Follow the steps below to implement this behavior:

First, define RadMultiSelect using the desired options and items. Additionally, add a RadButton that will serve as the trigger for selecting or deselecting all items.

````ASP.NET
<telerik:RadMultiSelect runat="server" ID="RadMultiSelect2" DataTextField="text" DataValueField="value" Width="500px">
    <Items>
        <telerik:MultiSelectItem Value="Person1" Text="Steven White"></telerik:MultiSelectItem>
        <telerik:MultiSelectItem Value="Person2" Text="Nancy King"></telerik:MultiSelectItem>
        <telerik:MultiSelectItem Value="Person3" Text="Nancy Davolio"></telerik:MultiSelectItem>
        <telerik:MultiSelectItem Value="Person4" Text="Robert Davolio"></telerik:MultiSelectItem>
        <telerik:MultiSelectItem Value="Person5" Text="Michael Leverling"></telerik:MultiSelectItem>
    </Items>
</telerik:RadMultiSelect>

<telerik:RadButton runat="server" ID="RadButton1" Text="Select All/Unselect All" AutoPostBack="false" OnClientClicked="onClientClicked" />
````

After that, write a JavaScript function that toggles the selection of all items in RadMultiSelect. This function is triggered by the client-side `OnClientClicked` event of the RadButton.

````JavaScript
function onClientClicked(sender, args) {
    let multiSelect = $find("<%= RadMultiSelect2.ClientID %>");
    let length = multiSelect.get_value().length;

    if (length === 0) {
        let values = multiSelect.get_itemsData().map(dataItem => dataItem.value);
        multiSelect.set_value(values);
    }
    else {
        multiSelect.set_value([]);
    }
}
````

This script checks if any items are currently selected in the RadMultiSelect. If none are selected, it selects all items. If any item is selected, it clears the selection, effectively acting as a toggle between select all and deselect all states.

For more advanced scenarios, consider accessing the underlying [Kendo MultiSelect widget](https://docs.telerik.com/kendo-ui/knowledge-base/select-deselect-all-items) for additional functionalities not directly exposed by RadMultiSelect.

## See Also

- [RadMultiSelect Object](https://docs.telerik.com/devtools/aspnet-ajax/controls/multiselect/client-side-programming/overview)
- [Kendo MultiSelect | Select or Deselect All MultiSelect Items](https://docs.telerik.com/kendo-ui/knowledge-base/select-deselect-all-items)
