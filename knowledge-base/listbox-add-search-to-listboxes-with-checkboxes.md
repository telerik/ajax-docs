---
title: Implementing Search Functionality in RadListBox with Checkboxes
description: Learn how to add a search or filter feature to a RadListBox with checkboxes while preserving the checkbox states during filtering.
type: how-to
page_title: Add Search to ListBoxes with Checkboxes
slug: listbox-add-search-to-listboxes-with-checkboxes
tags: radlistbox, asp.net ajax, search, filter, checkboxes, preserve state
res_type: kb
ticketid: 1677570
---

## Environment

<table>
<tbody>
<tr>
<td>Product</td>
<td>RadListBox for ASP.NET AJAX</td>
</tr>
</tbody>
</table>

## Description

I'm trying to implement a search box on a RadListBox that has checkboxes. However, when I apply the filter, the checkbox functionality is lost. Is there a way to keep the checkbox functionality while filtering? This knowledge base article also answers the following questions:

- How to filter items in RadListBox without losing checkbox states?
- How to implement a client-side search feature in RadListBox?
- How to preserve checkbox states in RadListBox during filtering?

## Solution

To achieve a search or filter functionality in a RadListBox with checkboxes without losing the checkbox states, follow these steps:

1. **Implement Client-Side Filtering**: Use JavaScript to filter the items in the RadListBox based on the user's input in a search box.
   
2. **Preserve Checkbox State**: Ensure that checkbox states are preserved during filtering by saving and restoring the checked states.

Here is a sample implementation:

````ASP.NET
<telerik:RadListBox ID="RadListBox1" runat="server" CheckBoxes="true" ShowCheckAll="true" AutoPostBack="false">
    <Items>
        <telerik:RadListBoxItem Text="Music-Country" Value="Music-Country" />
        <telerik:RadListBoxItem Text="Music-Rap" Value="Music-Rap" />
        <telerik:RadListBoxItem Text="TV-Cartoons" Value="TV-Cartoons" />
        <telerik:RadListBoxItem Text="TV-Drama" Value="TV-Drama" />
    </Items>
</telerik:RadListBox>
````

````JavaScript
function filterListBox(sender) {
    let checkedStates = [];
    let searchText = sender.value.toLowerCase();

    let listBox = $find('<%= RadListBox1.ClientID %>');
    let items = listBox.get_items();

    // Save the checked states
    for (let i = 0; i < items.get_count(); i++) {
        let item = items.getItem(i);
        checkedStates.push(item.get_checked());
    }

    // Filter items based on the search text
    for (let i = 0; i < items.get_count(); i++) {
        let item = items.getItem(i);
        let itemText = item.get_text().toLowerCase();
        item.set_visible(itemText.indexOf(searchText) !== -1);
    }

    // Restore the checked states
    for (let i = 0; i < items.get_count(); i++) {
        let item = items.getItem(i);
        item.set_checked(checkedStates[i]);
    }
}
````

**Key Points:**

- **Search Box**: The input element captures the user's search query and calls the `filterListBox()` function on every key press.

- **JavaScript Filtering**: The `filterListBox()` function iterates over all items in the RadListBox, setting their visibility based on the search query.

- **Preserving Checkbox States**: Before filtering, the checked states of each item are saved. After filtering, these states are restored, ensuring that checkbox functionality is not lost.

## See Also

- [RadListBox Overview](https://docs.telerik.com/devtools/aspnet-ajax/controls/listbox/overview)
- [RadListBox Client-Side Programming](https://docs.telerik.com/devtools/aspnet-ajax/controls/listbox/client-side-programming/overview)
- [RadListBox Server-Side Programming](https://docs.telerik.com/devtools/aspnet-ajax/controls/listbox/server-side-programming/overview)
