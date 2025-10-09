---
title: Disabling Dynamically Added Tokens Server-Side in RadAutoCompleteBox
description: Learn how to disable dynamically added tokens in RadAutoCompleteBox server-side by preventing their removal and customizing appearance.
type: how-to
page_title: Preventing Removal and Customizing Appearance of Tokens in RadAutoCompleteBox
meta_title: Preventing Removal and Customizing Appearance of Tokens in RadAutoCompleteBox
slug: autocompletebox-disabling-dynamically-added-tokens-server-side
tags: autocompletebox, ui-for-aspnet-ajax, server-side, client-side, tokens, appearance
res_type: kb
ticketid: 1700490
---

## Environment
<table>
<tbody>
<tr>
<td> Product </td>
<td> AutoCompleteBox for UI for ASP.NET AJAX </td>
</tr>
<tr>
<td> Version </td>
<td> All </td>
</tr>
</tbody>
</table>

## Description

I want to add default tokens to the [RadAutoCompleteBox](https://docs.telerik.com/devtools/aspnet-ajax/controls/autocompletebox/overview) server-side that cannot be removed by users, while allowing regular tokens added through search to be removable. Additionally, I want to change the appearance of these default tokens by hiding the "x" icon and optionally making them appear disabled or greyed-out.

This knowledge base article also answers the following questions:
- How to prevent removal of predefined tokens in RadAutoCompleteBox?
- How to customize the appearance of default tokens in RadAutoCompleteBox?
- How to hide the "x" icon for specific tokens in RadAutoCompleteBox?

## Solution

### Preventing Removal of Default Tokens

1. Add default tokens server-side and mark them with a custom attribute:

````C#
    AutoCompleteBoxEntry defaultEntry = new AutoCompleteBoxEntry("Some Text", "Some Value");
    defaultEntry.Attributes.Add("DefaultEntry", "true");
    RadAutoCompleteBox1.Entries.Add(defaultEntry);

    AutoCompleteBoxEntry otherEntry = new AutoCompleteBoxEntry("Some Other Text", "Some Other Value");
    RadAutoCompleteBox1.Entries.Add(otherEntry);
````

2. Use the `OnClientEntryRemoving` event to prevent removal of tokens marked as default:

````JavaScript
function onClientEntryRemoving(sender, args) {
    let entry = args.get_entry();
    let isDefaultEntry = entry.get_attributes().getAttribute("DefaultEntry") === "true";

    if (isDefaultEntry) {
        args.set_cancel(true);
    }
}
````

### Customizing the Appearance of Default Tokens

1. Add a CSS class to default tokens in the `OnClientLoad` event:

````JavaScript
function onClientLoad(sender, args) {
    let entries = sender.get_entries();
    let defaultEntry = entries._array.find((entry) => entry.get_attributes().getAttribute("DefaultEntry"));

    if (defaultEntry) {
        let defaultEntryElement = defaultEntry.get_token();
        defaultEntryElement.classList.add("defaultEntry");
    }
}
````

2. Use CSS to hide the "x" icon and modify the appearance of default tokens:

````CSS
html body .RadAutoCompleteBox .defaultEntry .racRemoveTokenLink {
    display: none;
}

html body .RadAutoCompleteBox .defaultEntry {
    pointer-events: none; /* Disable pointer events */
    opacity: 0.6; /* Greyed-out appearance */
}
````

### Notes
Removing the pointer events using `pointer-events: none` ensures the default tokens are unclickable, making the client-side removal prevention redundant.

## See Also
- [RadAutoCompleteBox Overview](https://docs.telerik.com/devtools/aspnet-ajax/controls/autocompletebox/overview)

