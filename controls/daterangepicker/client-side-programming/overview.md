---
title: RadDateRangePicker object
page_title: RadDateRangePicker object - RadDateRangePicker
description: Check our Web Forms article about RadDateRangePicker object.
slug: daterangepicker/client-side-programming/overview
tags: raddaterangepicker,object
published: True
position: 0
---

# RadDateRangePicker object

This article lists the client-side API of **RadDateRangePicker** and shows how to use it.

To use the API, you must first [get a reference to the control's client-side object]({%slug general-information/get-client-side-reference%}). For example:

````JavaScript
var dateRangePickerObject = $find("<%=RadDateRangePicker1.ClientID %>");
````

Once you have reference to the RadDateRangePicker, you can use the following three functions to reach the embedded Calendar and DatePicker(s) and use their own Client-side APIs

| Property              | RETURN TYPE   | DESCRIPTION                                                            |
|-----------------------|---------------|------------------------------------------------------------------------|
| get_calendar()        | RadCalendar   | Returns   a reference to the client object for the popup Calendar.     |
| get_startDatePicker() | RadDatePicker | Returns   a reference to the client object for the start DatePicker |
| get_endDatePicker()   | RadDatePicker | Returns   a reference to the client object for the end DatePicker   |

For the further use of the embedded controls on the client-side, check out the Client-side programming articles for [RadCalendar]({%slug calendar/client-side-programming/overview%}) and [RadDatePicker]({%slug datepicker/client-side-programming/raddatepicker-object%}).


The following table lists the most important properties of the **RadDateRangePicker** client-side object.

## Properties

| NAME                        | PARAMETERS | RETURN TYPE    | DESCRIPTION                                                                     |
|-----------------------------|------------|----------------|---------------------------------------------------------------------------------|
| get_rangeSelectionStartDate |            | Date           | Returns   the first date in the selected range, or null if no date is selected. |
| set_rangeSelectionStartDate | Date       |                | Sets   the first/start date of the range selection.                             |
| get_rangeSelectionEndDate   |            | Date           | Returns the last date in the selected range, or null if no date is   selected.  |
| set_rangeSelectionEndDate   | Date       |                | Sets   the last/end date of the range selection.                                |
| get_rangeMinDate           |            | Date           | Returns   the earliest date the user can select.                                |
| set_rangeMinDate           | Date       |                | Sets   the earliest date the user can select.                                   |
| get_rangeMaxDate           |            | Date           | Returns   the latest date the user can select.                                  |
| set_rangeMaxDate           | Date       |                | Sets   the latest date the user can select.                                     |
| get_enabled                 |            | boolean        | Returns   whether the control is enabled.                                       |
| set_enabled                 | boolean    |                | Sets   whether the control is enabled and operable by the user.                 |
| get_element                 |            | HTML   element | Returns   the DOM element for the entire RadDateRangePicker control. 

## Methods

| NAME        | PARAMETERS       | RETURN TYPE | DESCRIPTION                                                                                                                                              |
|-------------|------------------|-------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|
| clear       |                  |             | Clears the selection, leaving the values as unassigned.                                                                                                   |
| showPopup   | integer, integer |             | Displays the popup calendar at the specified coordinates. If the two parameters are omitted, the popup appears below the input area. |
| hidePopup   |                  |             | Hides the popup calendar if it is shown.                                                                                                               |
| togglePopup |                  |             | Toggles the visible state of the popup calendar.                                                                                                         |
| _doPostBack |                  |             | Initiates a Postback so the client-side selection is submitted to the server.                                                                                                    |


# See Also

 * [RadDateRangePicker Client-side Events]({%slug daterangepicker/client-side-programming/events%})

 * [RadCalendar]({%slug calendar/client-side-programming/overview%})
 
 * [RadDatePicker]({%slug datepicker/client-side-programming/raddatepicker-object%}).


