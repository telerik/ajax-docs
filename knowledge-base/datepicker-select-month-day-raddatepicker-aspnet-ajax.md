---
title: Selecting Month and Day with RadDatePicker
description: Learn how to use the RadDatePicker control in Telerik UI for ASP.NET AJAX to guide a user to select a month and a day without displaying the year.
type: how-to
page_title: How to Select Month and Day with RadDatePicker | Telerik UI for ASP.NET AJAX
slug: datepicker-select-month-day-raddatepicker-aspnet-ajax
tags: asp.net-ajax, raddatepicker, month-day, select, control
res_type: kb
---

## Environment

| Product      | Progress Telerik UI for ASP.NET AJAX |
|--------------|-------------------------------------|
| Version      | all                         |

## Description

To guide a user to select a month and a day without displaying the year using Telerik UI for ASP.NET AJAX, you can use the RadDatePicker control with a specific configuration.

## Solution

Follow these steps to configure the RadDatePicker control:

1. Add the RadDatePicker control to your page or form.
2. Set the `DateFormat` and `DisplayDateFormat` properties of the `DateInput` property to "MMMM dd" to ensure that only the month and day part of the date is displayed in the input field.
3. Optionally, you can customize the appearance of the calendar by modifying the properties of the `Calendar` element. For example, you can disable the row headers by setting `UseRowHeadersAsSelectors` and `ShowRowHeaders` properties to "False".

Here is an example of how you can configure the RadDatePicker control:

```html
<telerik:RadDatePicker ID="RadDatePicker1" runat="server" DateInput-DateFormat="MMMM dd" DateInput-DisplayDateFormat="MMMM dd">
    <Calendar UseRowHeadersAsSelectors="False" ShowRowHeaders="False"></Calendar>
</telerik:RadDatePicker>
```

With this configuration, the RadDatePicker control will guide the user to select a month and a day without displaying the year.
