---
title: RadTimePicker object
page_title: RadTimePicker object | UI for ASP.NET AJAX Documentation
description: RadTimePicker object
slug: calendar/client-side-programming/radtimepicker-object
tags: radtimepicker,object
published: True
position: 3
---

# RadTimePicker object



The following table lists the most important methods of the __RadTimePicker__ client-side object.

## Properties


| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| __get_selectedDate__ ||Date|Returns the selected date and time, or null if no value is assigned.|
| __set_selectedDate__ |Date||Assigns the value of the time picker.|
| __isEmpty__ ||boolean|Returns __true__ if the value is unassigned.|
| __get_maxDate__ ||Date|Returns the latest date and time the user can assign.|
| __set_maxDate__ |Date||Sets the latest date and time the user can assign.|
| __get_minDate__ ||Date|Returns the earliest date and time the user can assign.|
| __set_minDate__ |Date||Sets the earliest date and time the user can assign.|
| __get_enabled__ ||boolean|Gets whether the control is enabled.|
| __set_enabled__ |boolean||Sets whether the control is enabled and operable by the user.|
| __get_enableScreenBoundaryDetection__ |boolean||Gets whether the control switches the popup direction automatically, depending on the proximity of the page boundaries.|
| __set_enableScreenBoundaryDetection__ |boolean||Sets whether the control switches the popup direction automatically, depending on the proximity of the page boundaries.|
| __get_popupDirection__ ||Telerik.Web.RadDatePickerPopupDirection|Gets the (default) popup direction of the calendar and timeview popups. This property is related to the screen boundary detection.|
| __set_popupDirection__ |Telerik.Web.RadDatePickerPopupDirection||Sets the (default) popup direction of the calendar and timeview popups. This property is related to the screen boundary detection.|
| __isTimePopupVisible__ ||boolean|Returns whether the popup time view is visible.|
| __get_timeView__ ||RadTimeView|Returns a reference to the client object for the popup time view.|
| __get_dateInput__ ||RadDateInput|Returns a reference to the client object for the input area. For details on using this object, see the RadInput documentation.|
| __get_element__ ||HTML element|Returns the DOM element for the entire RadTimePicker control.|
| __get_textBox__ ||HTML element|Returns the DOM element for the text box that implements the input area.|
| __get_timePopupButton__ ||HTML element|Returns the DOM element for the time popup button.|
| __get_timePopupContainer__ ||HTML element|Returns the DOM element for the <DIV> that contains the popup time view.|

## Methods


| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| __clear__ |||Clears the selection, leaving the value as unassigned.|
| __showTimePopup__ |integer, integer||Displays the popup time view at the specified coordinates. If the two parameters are omitted, the popup appears below the input area (see sample below).|
| __hideTimePopup__ |||Hides the popup time view if it is showing.|
| __toggleTimePopup__ |||Toggles the visible state of the popup time view.|

# See Also

 * [Overview]({%slug calendar/client-side-programming/overview%})
