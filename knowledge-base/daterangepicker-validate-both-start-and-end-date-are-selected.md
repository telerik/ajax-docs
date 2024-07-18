---
title: Validating Both Dates in RadDateRangePicker for ASP.NET AJAX
description: Learn how to ensure that both start and end dates are selected in the RadDateRangePicker control.
type: how-to
page_title: How to Validate Date Selection in RadDateRangePicker for ASP.NET AJAX
slug: daterangepicker-validate-both-start-and-end-date-are-selected
tags: rad-daterangepicker, asp.net-ajax, validation, date selection
res_type: kb
ticketid: 1658550
---

## Environment

| Product | Version |
| --- | --- |
| RadDateRangePicker for ASP.NET AJAX | All |

## Description

When working with the [RadDateRangePicker](https://docs.telerik.com/devtools/aspnet-ajax/controls/daterangepicker/overview) control, it's necessary to validate that the user has selected both a start and an end date. This article demonstrates how to validate the date selection within the RadDateRangePicker control.

This KB article also answers the following questions:

- How can I ensure a user selects both dates in RadDateRangePicker?
- What is the method for validating date selection in RadDateRangePicker?
- How do I prevent form submission without both dates selected in RadDateRangePicker?

## Solution

To validate that both the start and end dates are selected in the RadDateRangePicker control, follow these steps:

1. Include the DateRangePicker and a Button control in your ASPX page.

````ASP.NET
<telerik:RadDateRangePicker runat="server" ID="DateRangePicker1"  />

<telerik:RadButton RenderMode="Lightweight" runat="server" Text="Save" ID="Button1" OnClientClicked="onClientClicked" />
````

2. Implement the client-side validation logic in JavaScript to check if both dates are selected. If not, display an alert message to the user.

````JavaScript
function onClientClicked(sender, args) {
    var dateRangePicker = $find("<%= DateRangePicker1.ClientID %>");
    var startDate = dateRangePicker.get_startDatePicker().get_selectedDate();
    var endDate = dateRangePicker.get_endDatePicker().get_selectedDate();

    if (!startDate || !endDate) {
        alert("Please select both start and end dates.");
        return false;
    }
    return true;
}
````

By following these steps, you can effectively ensure that both the start and end dates are selected in the RadDateRangePicker control before proceeding with any further action, such as form submission.

## See Also

- [RadButton Overview](https://docs.telerik.com/devtools/aspnet-ajax/controls/button/overview)
