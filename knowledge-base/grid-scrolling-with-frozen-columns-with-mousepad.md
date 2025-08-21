---
title: Enabling Horizontal Mousepad Scrolling with FrozenColumnCount in UI for ASP.NET AJAX Grid
description: Learn how to enable horizontal scrolling using a laptop trackpad or gestures when FrozenColumnCount is set in the UI for ASP.NET AJAX Grid.
type: how-to
page_title: Mousepad Scrolling with Frozen Columns
meta_title: Mousepad Scrolling with Frozen Columns
slug: grid-scrolling-with-frozen-columns-with-mousepad
tags: grid, asp.net ajax, frozen columns, scrolling, javascript workaround, mousepad
res_type: kb
ticketid: 1696661
---

## Environment

<table>
<tbody>
<tr>
<td>Product</td>
<td>Grid for UI for ASP.NET AJAX</td>
</tr>
<tr>
<td>Version</td>
<td>All</td>
</tr>
</tbody>
</table>

## Description

When using the Grid with the `FrozenColumnCount` property set, native horizontal scrolling with a laptop trackpad or gestures becomes unavailable. This limitation arises because the Grid applies `overflow: hidden` to its scrollable container and uses a "fake" scrollbar to manage frozen columns. Users are typically restricted to using the grid's built-in scrollbars for scrolling.

There is no official solution to enable native horizontal scrolling in this scenario. However, a custom JavaScript workaround can allow trackpad or gesture-based scrolling by intercepting wheel or touch events and manually adjusting the scroll position.

This knowledge base article also answers the following questions:

- How to scroll horizontally in ASP.NET AJAX Grid with FrozenColumnCount enabled?
- Is there a workaround for trackpad scrolling in ASP.NET AJAX Grid frozen columns?
- How to enable gesture-based scrolling for frozen columns in ASP.NET AJAX Grid?

## Solution

To enable scrolling using a laptop trackpad or gestures, use the following JavaScript workaround to adjust the scroll position of the container based on the `deltaX` value from the event.

````ASP.NET
<telerik:RadGrid ID="RadGrid1" runat="server" OnNeedDataSource="RadGrid1_NeedDataSource">
    <MasterTableView AutoGenerateColumns="False" DataKeyNames="OrderID">
        <Columns>
            ...
        </Columns>
    </MasterTableView>
    <ClientSettings>
        <ClientEvents OnGridCreated="onGridCreated" />
        <Scrolling AllowScroll="True" UseStaticHeaders="True" FrozenColumnsCount="1" />
    </ClientSettings>
</telerik:RadGrid>
````

````JavaScript
function onGridCreated(sender, args) {
    let gridScrollableDiv = sender.get_element().querySelector(".rgDataDiv");  // Find the scrollable container of the grid.

    gridScrollableDiv.addEventListener('wheel', function (e) {    // Add a wheel event listener to enable trackpad scrolling.
        if (e.deltaX !== 0) {
            gridScrollableDiv.scrollLeft += e.deltaX; // Adjust scroll position.
            e.preventDefault(); // Prevent default behavior.
        }
    }, { passive: false });
}
````

Limitations:

- This workaround does not update the position of the horizontal scrollbar visually.
- It is not officially supported by Telerik and may require adjustments depending on your implementation.

## See Also

- [RadGrid](https://docs.telerik.com/devtools/aspnet-ajax/controls/grid/overview)
- [Wheel Event Documentation - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/wheel_event)
