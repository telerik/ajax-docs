---
title: Adding a "Select All" Checkbox to RadMultiSelect dropdown header
description: Learn how to add a "Select All" checkbox in the RadMultiSelect component header to easily select or deselect all items.
type: how-to
page_title: How to Implement a "Select All" Checkbox in RadMultiSelect for ASP.NET AJAX
slug: how-to-add-select-all-checkbox-radmultiselect
tags: radmultiselect, multiselect, select-all, header-template, asp.net ajax
res_type: kb
ticketid: 1673089
---

## Description

I want to add a "Select All" checkbox in the MultiSelect component to allow users to select or deselect all items in the dropdown. Utilizing the headerTemplate configuration enables rendering a checkbox at the top of the dropdown list, facilitating the selection or deselection of all items through user interaction.

This knowledge base article also answers the following questions:
- How to implement a "Select All" feature in MultiSelect?
- How to customize the header of the MultiSelect popup?
- How to manage multiple selections in MultiSelect through a single checkbox?

## Environment

<table>
<tbody>
<tr>
<td>Product</td>
<td>RadAjax for ASP.NET AJAX</td>
</tr>
</tbody>
</table>

## Solution

To add a "Select All" checkbox in the RadMultiSelect component, utilize the `HeaderTemplate` configuration. This template renders a checkbox at the top of the dropdown list, allowing users to select or deselect all items with a single interaction.

Here is how to implement the "Select All" checkbox feature in the `RadMultiSelect` component:

1. Define the `RadMultiSelect` component with the required settings and data fields. Include the `HeaderTemplate` that contains the "Select All" checkbox.

```ASPX
        <telerik:RadMultiSelect runat="server" Width="100%" ID="RadMultiSelect1"
            DataTextField="text"
            DataValueField="text"
            DropDownHeight="400"
            CssClass="customers-wrapper"
            Placeholder="Select attendees...">
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
            </Items>
            <HeaderTemplate>
                <div style="padding:4px 8px">
                    <input type="checkbox" id="selectAll" /> Select All
                </div>
            </HeaderTemplate>
            <ClientEvents OnLoad="OnLoad" />
        </telerik:RadMultiSelect>
```

2. Implement the JavaScript functions to handle the "Select All" and "Deselect All" actions. Attach these functions to the "Select All" checkbox within the `OnLoad` client-side event.

```javascript
<script type="text/javascript">
    function OnLoad(sender, args) {
        // Attach the Select All logic to the checkbox
        var selectAllCheckbox = document.getElementById("selectAll");
        selectAllCheckbox.addEventListener("change", function () {
            var multiSelect = $find("<%= RadMultiSelect1.ClientID %>");
            if (this.checked) {
                selectAllItems(multiSelect);
            } else {
                deselectAllItems(multiSelect);
            }
        });
    }

    function selectAllItems(multiSelect) {
        var $ = $telerik.$;
        var values = $.map(multiSelect.get_itemsData(), function (dataItem) {
            return dataItem.text; // Use the 'text' field from itemsData
        });
        multiSelect.set_value(values); // Select all items
    }

    function deselectAllItems(multiSelect) {
        multiSelect.set_value([]); // Deselect all items
    }
</script>
```

By following these steps, you can easily add a "Select All" checkbox to the `RadMultiSelect` component, enhancing user interaction and selection efficiency within your ASP.NET AJAX applications.

## See Also

- [RadMultiSelect Overview](https://docs.telerik.com/devtools/aspnet-ajax/controls/multiselect/overview)
- [Client-Side Programming Overview](https://docs.telerik.com/devtools/aspnet-ajax/controls/multiselect/client-side-programming/overview)
