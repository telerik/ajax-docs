---
title: Displaying RadListBox Total Item Count in Footer Template
description: Learn how to show the total number of items in the footer template of a RadListBox in ASP.NET AJAX.
type: how-to
page_title: How to Show Total Item Count in RadListBox Footer Template - ASP.NET AJAX
slug: listbox-how-to-display-total-item-count
tags: radlistbox, asp.net ajax, footer template, item count, client-side programming, onclientload
res_type: kb
ticketid: 1662812
---

## Environment

| Product | Version |
| --- | --- |
| RadListBox for ASP.NET AJAX | All |

## Description

I want to display the total item count in the footer template of a RadListBox. This count should update dynamically as items are added or removed from the list.

This KB article also answers the following questions:

- How can I show the number of items in a RadListBox?
- How to update the item count in RadListBox dynamically?
- Is it possible to display additional information in the footer of RadListBox?

## Solution

To display and dynamically update the total number of items in the footer template of a [RadListBox](https://docs.telerik.com/devtools/aspnet-ajax/controls/listbox/overview), use the `OnClientLoad` event. This event fires after the RadListBox has been fully loaded on the client side, making it an ideal place to set the initial count and update it as items are manipulated.

Define the RadListBox in the ASPX file with a FooterTemplate with a span element where the total item count will be displayed. 

````ASP.NET
<telerik:RadListBox runat="server" ID="RadListBox1" OnClientLoad="onLoad">
    <Items>
        <telerik:RadListBoxItem Text="Item 1" />
        <telerik:RadListBoxItem Text="Item 2" />
        <telerik:RadListBoxItem Text="Item 3" />
        <telerik:RadListBoxItem Text="Item 4" />
    </Items>
    <FooterTemplate>
        Total items: <span id="totalItemsSpan"></span>
    </FooterTemplate>
</telerik:RadListBox>
````

Implement the `onLoad` client-side event to calculate the total items count and display it within the span element in the footer.

````JavaScript
function onLoad(sender, args) {
    var totalItems = sender.get_items().get_count();

    if (totalItems) {
        document.getElementById("totalItemsSpan").textContent = totalItems;
    }
}
````

This approach ensures that the total number of items in the RadListBox is displayed in the footer template and is updated dynamically as items are added or removed.

## Notes

- Ensure the ID of the span element in the FooterTemplate is unique if multiple RadListBox controls are used on the same page.
- To update the item count dynamically upon item addition or removal, additional client-side event handling (such as for item transfer or deletion) may be required, invoking similar logic to update the count.

## See Also

- [RadListBox Overview](https://docs.telerik.com/devtools/aspnet-ajax/controls/listbox/overview)
- [RadListBox Client-Side Programming](https://docs.telerik.com/devtools/aspnet-ajax/controls/listbox/client-side-programming/overview)
- [OnClientLoad Event](https://docs.telerik.com/devtools/aspnet-ajax/controls/listbox/client-side-programming/events/onclientload#onclientload)
