---
title: RadTimePicker Object
page_title: RadTimePicker Object | RadTimePicker for ASP.NET AJAX Documentation
description: RadTimePicker Client-side Object
slug: timepicker/client-side-programming/radtimepicker-object
tags: radtimepicker,object
published: True
position: 1
---

# RadTimePicker Object



The following table lists the most important methods of the **RadTimePicker** client-side object.

## Properties


| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| **get_selectedDate** ||Date|Returns the selected date and time, or null if no value is assigned.|
| **set_selectedDate** |Date||Assigns the value of the time picker.|
| **isEmpty** ||boolean|Returns **true** if the value is unassigned.|
| **get_maxDate** ||Date|Returns the latest date and time the user can assign.|
| **set_maxDate** |Date||Sets the latest date and time the user can assign.|
| **get_minDate** ||Date|Returns the earliest date and time the user can assign.|
| **set_minDate** |Date||Sets the earliest date and time the user can assign.|
| **get_enabled** ||boolean|Gets whether the control is enabled.|
| **set_enabled** |boolean||Sets whether the control is enabled and operable by the user.|
| **get_enableScreenBoundaryDetection** |boolean||Gets whether the control switches the popup direction automatically, depending on the proximity of the page boundaries.|
| **set_enableScreenBoundaryDetection** |boolean||Sets whether the control switches the popup direction automatically, depending on the proximity of the page boundaries.|
| **get_popupDirection** ||Telerik.Web.RadDatePickerPopupDirection|Gets the (default) popup direction of the calendar and timeview popups. This property is related to the screen boundary detection.|
| **set_popupDirection** |Telerik.Web.RadDatePickerPopupDirection||Sets the (default) popup direction of the calendar and timeview popups. This property is related to the screen boundary detection.|
| **isTimePopupVisible** ||boolean|Returns whether the popup time view is visible.|
| **get_timeView** ||RadTimeView|Returns a reference to the client object for the popup time view.|
| **get_dateInput** ||RadDateInput|Returns a reference to the client object for the input area. For details on using this object, see the RadInput documentation.|
| **get_element** ||HTML element|Returns the DOM element for the entire RadTimePicker control.|
| **get_textBox** ||HTML element|Returns the DOM element for the text box that implements the input area.|
| **get_timePopupButton** ||HTML element|Returns the DOM element for the time popup button.|
| **get_timePopupContainer** ||HTML element|Returns the DOM element for the <DIV> that contains the popup time view.|

## Methods


| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| **clear** |||Clears the selection, leaving the value as unassigned.|
| **showTimePopup** |integer, integer||Displays the popup time view at the specified coordinates. If the two parameters are omitted, the popup appears below the input area (see sample below).|
| **hideTimePopup** |||Hides the popup time view if it is showing.|
| **toggleTimePopup** |||Toggles the visible state of the popup time view.|

# See Also

 * [Overview]({%slug timepicker/client-side-programming/overview%})
