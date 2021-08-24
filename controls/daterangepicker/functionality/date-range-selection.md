---
title: Date Range Selection
page_title: Date Range Selection - RadDateRangePicker
description: Check our Web Forms article about Date Range Selection.
slug: daterangepicker/functionality/date-range-selection
tags: date,range,selection
published: True
position: 0
---

# Date Range Selection

The **RadDateRangePicker** control provides two modes for selecting date ranges. You can define the mode by setting the **RangeSelectionMode** property of the embedded RadCalendar to one of the following values:

* **ConsecutiveClicks**- Allow range selection by clicking consecutively two dates.

* **OnKeyHold** - Allow range selection by pressing **[Shift]** key and clicking on the date.

By default the **RangeSelectionMode** property is set to **ConsecutiveClicks**.

>note the **RangeSelectionMode** also allows setting **None** value which is the default value of a standalone RadCalendar. If set inside the RadDateRangePicker, *RangeSelectionMode.None* would disable the main function of the control. 

On the client you could get the Start/End range dates by using the **get_rangeSelectionStartDate()** and **get_rangeSelectionEndDate()** methods of the RadDateRangePicker object. You can set them programmatically by using **set_rangeSelectionStartDate(startDate)** and **set_rangeSelectionEndDate(endDate)** client-side methods:

````ASPX
<telerik:RadDateRangePicker runat="server" ID="DateRangePicker1"></telerik:RadDateRangePicker>

<telerik:RadButton runat="server" ID="RadButton1" Text="Call JavaScript function" AutoPostBack="false" OnClientClicked="OnClientClicked" />
<script>
    function OnClientClicked(sender, args) {
        var startDate = new Date('August 8, 2021');
        var endDate = new Date('September 9, 2021');

        var rangePicker = $find("<%= DateRangePicker1.ClientID %>");
        rangePicker.set_rangeSelectionStartDate(startDate)
        rangePicker.set_rangeSelectionEndDate(endDate)
    }
</script>
````

On the server Start/End dates are available through **RadDateRangePicker.RangeSelectionStartDate** and **RadDateRangePicker.RangeSelectionEndDate** properties.

