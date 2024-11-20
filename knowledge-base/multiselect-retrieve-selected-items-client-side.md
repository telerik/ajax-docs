---
title: Retrieve Selected Items Client-Side
description: Learn how to capture selected items from RadMultiSelect using its change event and store them in a hidden field on an ASP.NET AJAX page.
type: how-to
page_title: Retrieve Selected Items Client-Side
slug: multiselect-retrieve-selected-items-client-side
tags: radmultiselect, asp.net ajax, client-side, onchange, javascript, hidden field
res_type: kb
ticketid: 1670936
---

## Environment

<table>
<tbody>
<tr>
<td>Product</td>
<td>RadMultiSelect for ASP.NET AJAX</td>
</tr>
<tr>
<td>Version</td>
<td>All</td>
</tr>
</tbody>
</table>

## Description
Capturing selected items from a [RadMultiSelect](https://docs.telerik.com/devtools/aspnet-ajax/controls/multiselect/overview) and storing them in a hidden field on the client side is needed when handling selections without postbacks. This KB article also answers the following questions:

- How can I update a hidden field based on RadMultiSelect selections?
- Is it possible to handle RadMultiSelect change events on the client side?
- How do I store RadMultiSelect selected items in a web form?

## Solution
To list and store the selected items of a RadMultiSelect in a hidden field on an .aspx page, follow these steps:

**Add a Hidden Field to Your Page:** Insert a hidden field in your .aspx page to hold the selected values.

````ASP.NET
<asp:HiddenField ID="hiddenFieldSelectedItems" runat="server" />
````

**Configure RadMultiSelect:** Set up the RadMultiSelect with the necessary configurations and client events.

````ASP.NET
<telerik:RadMultiSelect ID="RadMultiSelect1" runat="server" DataTextField="text" DataValueField="value" Filter="Contains" AutoPostBack="false">
        <Items>
            <telerik:MultiSelectItem Text="Element1" Value="1"></telerik:MultiSelectItem>
            <telerik:MultiSelectItem Text="Element2" Value="2"></telerik:MultiSelectItem>
            <telerik:MultiSelectItem Text="Element3" Value="3"></telerik:MultiSelectItem>
        </Items>
        <ClientEvents OnSelect="onSelect" />
    </telerik:RadMultiSelect>
````

**Implement JavaScript Function:** Create a JavaScript function to update the hidden field with the texts of the selected items, separated by commas.

````JavaScript
function onSelect(sender, args) {
        let selectedTexts = [];
        let selectedItems = sender.get_selectedDataItems();
        let hiddenField = document.getElementById('<%= hiddenFieldSelectedItems.ClientID %>');

        if (selectedTexts.length < 1) {
            selectedTexts.push(args.get_dataItem().text)
        }

        for (let i = 0; i < selectedItems.length; i++) {
            selectedTexts.push(selectedItems[i].text);
        }

        hiddenField.value = selectedTexts.join(", ");
    }
````

### Explanation
- **JavaScript Approach:** Utilizing JavaScript allows for real-time updates to the hidden field without the need for postbacks, enhancing the user experience.
- **Handling Events:** The `OnChange` event of the RadMultiSelect ensures the hidden field is consistently synchronized with the user's selections.

## See Also
- [RadMultiSelect Overview](https://docs.telerik.com/devtools/aspnet-ajax/controls/multiselect/overview)
- [Client-Side Programming](https://docs.telerik.com/devtools/aspnet-ajax/controls/multiselect/client-side-programming/overview)
