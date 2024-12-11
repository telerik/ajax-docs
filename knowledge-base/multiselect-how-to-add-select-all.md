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

1. **Add RadMultiSelect and RadButton to Your ASP.NET Page**

   Define RadMultiSelect using the desired options and items. Additionally, add a RadButton that will serve as the trigger for selecting or deselecting all items.

    ```ASPX
        <telerik:RadMultiSelect runat="server" DataValueField="text" Filter="Contains" EnforceMinLength="false" Placeholder="Select attendees..."
            DataTextField="text" Width="500px" ID="RadMultiSelect1">
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
    ```

2. **Implement the Client-side Logic**

   Write a JavaScript function that toggles the selection of all items in RadMultiSelect. This function is triggered by the client-side `OnClientClicked` event of the RadButton.

    ```JavaScript
    <script>
        function OnClientClicked(sender, args) {
            var multiSelect = $find("<%= RadMultiSelect1.ClientID %>");
            var values;
            var $ = $telerik.$;
            if (multiSelect.get_value().length == 0) {
                values = $.map(multiSelect.get_itemsData(), function (dataItem) {
                    return dataItem.text;
                });
            }
            else {
                values = [];
            }
            multiSelect.set_value(values);
        }
    </script>
    ```

This script checks if any items are currently selected in the RadMultiSelect. If none are selected, it selects all items. If any item is selected, it clears the selection, effectively acting as a toggle between select all and deselect all states.

For more advanced scenarios, consider accessing the underlying [Kendo MultiSelect widget](https://docs.telerik.com/kendo-ui/knowledge-base/select-deselect-all-items) for additional functionalities not directly exposed by RadMultiSelect.

## See Also

- [RadMultiSelect Object](https://docs.telerik.com/devtools/aspnet-ajax/controls/multiselect/client-side-programming/overview)
- [Kendo MultiSelect | Select or Deselect All MultiSelect Items](https://docs.telerik.com/kendo-ui/knowledge-base/select-deselect-all-items)
