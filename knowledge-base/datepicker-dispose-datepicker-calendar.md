---
title: Disposing RadDatePicker Calendar in Detail Window
description: Learn how to dispose the RadDatePicker calendar in a detail window for a grid.
type: how-to
page_title: How to Dispose RadDatePicker Calendar in Detail Window | RadCalendar for ASP.NET AJAX
slug: datepicker-dispose-datepicker-calendar
tags: datepicker, calendar, dispose, detail window, grid
res_type: kb
---

## Environment
| Product   | RadDatePicker for ASP.NET AJAX |
|-----------|------------------------------|

## Description
I have a RadDatePicker in a detail window for a grid. I needed to modify the background color dynamically, so I added a new script to the calendar. However, I noticed that the calendar is never destroyed from the page. If I close the detail window and open it again, the initialization method is called twice. It seems that the table element with the ID "<ctrl_name>_calendar" is always there and never unloaded. I need help with disposing this object or removing the event from it.

## Solution
To detach the OnLoad event and dispose the RadDatePicker calendar, you can use the following script:

````ASPX
</script>
function initMethodName(sender, args) {
    sender.remove_load(initMethodName);
}

window.onbeforeunload = function () {
    detachCalendarEvents();
};

function detachCalendarEvents() {
    var datePicker = $find("<%= RadDatePicker1.ClientID %>"); // Adjust the ID accordingly
    if (datePicker && datePicker.get_calendar()) {
        datePicker.get_calendar().remove_load(initMethodName); // Assuming remove_load is a valid method
    }
}
</script>
````

This script removes the load event handler from the calendar by calling the `remove_load` method. It also detaches the event handler when the user navigates away from the page by using the `onbeforeunload` event.

Note: Make sure to adjust the ID in the `var datePicker = $find("<%= RadDatePicker1.ClientID %>");` line to match the ID of your RadDatePicker control.

Now the calendar will be properly disposed and the initialization method will not be called multiple times when reopening the detail window.

  
