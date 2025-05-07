---
title: Showing Only the Current Year in RadMonthYearPicker for ASP.NET AJAX
description: Learn how to customize the RadMonthYearPicker to display only the current year and render it in the first row of the popup.
type: how-to
page_title: Displaying Current Year in RadMonthYearPicker Popup
slug: radmonthyearpicker-show-current-year
tags: radmonthyearpicker, asp.net ajax, popup, customization, client-side
res_type: kb
ticketid: 1686443
---

## Environment
<table>
<tbody>
<tr>
<td>Product</td>
<td>RadMonthYearPicker for ASP.NET AJAX</td>
</tr>
<tr>
<td>Version</td>
<td>All</td>
</tr>
</tbody>
</table>

## Description

I want to customize the RadMonthYearPicker to display only the current year (2025) in its popup. Years such as 2021-2024 and 2026-2030 should be hidden or removed. Additionally, I want the current year (2025) to appear in the first row of the popup.

This knowledge base article also answers the following questions:

- How to hide all years except the current year in RadMonthYearPicker?
- How to render the current year in the first row of the RadMonthYearPicker popup?
- How to customize the popup content in RadMonthYearPicker?

## Solution

To achieve this functionality, use client-side code to manipulate the popup content during the [OnPopupOpening](https://www.telerik.com/products/aspnet-ajax/documentation/controls/monthyearpicker/client-side-programming/events/onpopupopening#onpopupopening) event:

````ASP.NET
<telerik:RadMonthYearPicker ID="RadMonthYearPicker1" runat="server">
    <ClientEvents OnPopupOpening="onPopupOpening" />
</telerik:RadMonthYearPicker>
````

In the event handler, hide all other years and move the current year (2025) to the first row of the popup:

````JavaScript
function onPopupOpening(sender, args) {
    setTimeout(() => {
        let pickerItems = document.querySelectorAll(".RadCalendarFastNavPopup td a");

        pickerItems.forEach((item) => {
            let itemText = item.innerHTML;
            let itemValue = parseInt(itemText);

            if (!isNaN(itemValue) && itemValue !== 2025) {
                item.parentElement.style.display = 'none'; // Hide the years that are not 2025
            }

            if (itemText === "2025") {
                let firstRow = item.parentElement.closest("tbody").querySelector("tr"); // Find the first row of the Picker
                firstRow.appendChild(item.parentElement); // Append the 2025 cell to the first row
            }   
        });
    }, 10);
}
````

## See Also
- [RadMonthYearPicker Documentation](https://www.telerik.com/products/aspnet-ajax/documentation/controls/monthyearpicker/overview)
- [RadMonthYearPicker Client-Side Events](https://www.telerik.com/products/aspnet-ajax/documentation/controls/monthyearpicker/client-side-programming/events/onpopupopening#onpopupopening)
