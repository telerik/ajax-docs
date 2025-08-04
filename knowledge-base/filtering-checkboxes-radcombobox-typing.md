---
title: Implementing CheckBox Filtering in RadComboBox When Typing
description: Learn how to use the OnClientBlur event to implement checkbox filtering functionality in RadComboBox based on typed input.
type: how-to
page_title: Filtering CheckBoxes in RadComboBox While Typing
meta_title: Filtering CheckBoxes in RadComboBox While Typing
slug: filtering-checkboxes-radcombobox-typing
tags: combobox, ui for asp.net ajax, client-side, checkboxes, filtering
res_type: kb
ticketid: 1695228
---

## Environment

<table>
<tbody>
<tr>
<td>Product</td>
<td>ComboBox for UI for ASP.NET AJAX</td>
</tr>
<tr>
<td>Version</td>
<td>All</td>
</tr>
</tbody>
</table>

## Description

I need to implement dynamic checkbox selection in a [RadComboBox](https://www.telerik.com/products/aspnet-ajax/documentation/controls/combobox/overview) based on typed input. When typing in the input field, items matching the entered text should be checked. If the input is cleared or modified, items that no longer match should be unchecked.

For instance, typing "St" should check all items containing "St". Further typing, such as "Stain", should narrow the selection down to items containing "Stain".

## Solution

To achieve this, use the `OnClientBlur` event of RadComboBox. This event fires when the combobox loses focus, enabling client-side filtering and checkbox selection:

1. Configure the RadComboBox with `CheckBoxes="true"` and `AllowCustomText="true"`.
2. Define the `OnClientBlur` event to handle the filtering logic.
3. Use the client-side API to loop through the items and check/uncheck based on the typed input.

````ASP.NET
<telerik:RadComboBox ID="drpConfig" runat="server" CheckBoxes="true" OnClientBlur="onClientBlur" AllowCustomText="true">
    <Items>
        <telerik:RadComboBoxItem Text="SteelA36" />
        <telerik:RadComboBoxItem Text="SteelA572" />
        <telerik:RadComboBoxItem Text="Stainless304" />
        <telerik:RadComboBoxItem Text="Stainless316" />
        <telerik:RadComboBoxItem Text="Aluminum6061" />
        <telerik:RadComboBoxItem Text="Aluminum7075" />
    </Items>
</telerik:RadComboBox>
````

````JavaScript
function onClientBlur(sender, args) {
    let text = sender.get_text().toLowerCase();
    let items = sender.get_items();

    items.forEach((item) => {
        let itemText = item.get_text().toLowerCase();

        itemText.indexOf(text) !== -1 ? item.set_checked(true) : item.set_checked(false);
    });
}
````

Important Notes

- Using `AllowCustomText` with `CheckBoxes` is not fully supported and may lead to unexpected behavior. However, it works reliably for this specific scenario.
- Ensure that the `AutoPostBack` property is set to `false` to avoid unnecessary server-side actions.

## See Also

- [RadComboBox Client-Side Programming Documentation](https://www.telerik.com/products/aspnet-ajax/documentation/controls/combobox/client-side-programming/overview)
- [RadComboBox OnClientBlur Event](https://www.telerik.com/products/aspnet-ajax/documentation/controls/combobox/client-side-programming/events/onclientblur)

