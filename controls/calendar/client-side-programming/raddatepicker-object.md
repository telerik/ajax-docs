---
title: RadDatePicker object
page_title: RadDatePicker object | RadCalendar for ASP.NET AJAX Documentation
description: RadDatePicker object
slug: calendar/client-side-programming/raddatepicker-object
tags: raddatepicker,object
published: True
position: 2
---

# RadDatePicker object



The following table lists the most important properties and methods of the **RadDatePicker** client-side object.

## Properties


| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| **get_selectedDate** ||Date|Returns the selected date, or null if no date is selected.|
| **set_selectedDate** |Date||Assigns the value of the date picker.|
| **isEmpty** ||boolean|Returns **true** if the value is unassigned.|
| **get_maxDate** ||Date|Returns the latest date the user can select.|
| **set_maxDate** |Date||Sets the latest date the user can select.|
| **get_minDate** ||Date|Returns the earliest date the user can select.|
| **set_minDate** |Date||Sets the earliest date the user can select.|
| **get_focusedDate** ||Date|Returns the date that determines the view the popup calendar uses when the value of the date picker is not assigned.|
| **set_focusedDate** |Date||Sets the date that determines the view the popup calendar uses when the value of the date picker is not assigned.|
| **get_enabled** ||boolean|Gets whether the control is enabled.|
| **set_enabled** |boolean||Sets whether the control is enabled and operable by the user.|
| **get_enableScreenBoundaryDetection** |boolean||Gets whether the control switches the popup direction automatically, depending on the proximity of the page boundaries.|
| **set_enableScreenBoundaryDetection** |boolean||Sets whether the control switches the popup direction automatically, depending on the proximity of the page boundaries.|
| **get_popupDirection** ||Telerik.Web.RadDatePickerPopupDirection|Gets the (default) popup direction of the calendar and timeview popups. This property is related to the screen boundary detection.|
| **set_popupDirection** |Telerik.Web.RadDatePickerPopupDirection||Sets the (default) popup direction of the calendar and timeview popups. This property is related to the screen boundary detection.|
| **isPopupVisible** ||boolean|Returns whether the popup calendar is visible.|
| **get_calendar** ||RadCalendar|Returns a reference to the client object for the popup calendar.|
| **get_dateInput** ||RadDateInput|Returns a reference to the client object for the input area. For details on using this object, see the **RadInput** documentation.|
| **get_element** ||HTML element|Returns the DOM element for the entire **RadDatePicker** control.|
| **get_textBox** ||HTML element|Returns the DOM element for the text box that implements the input area.|
| **get_popupButton** ||HTML element|Returns the DOM element for the calendar popup button.|
| **get_popupContainer** ||HTML element|Returns the DOM element for the <DIV> that contains the popup calendar.|

## Methods


| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| **clear** |||Clears the selection, leaving the value as unassigned.|
| **showPopup** |integer, integer||Displays the popup calendar at the specified coordinates. If the two parameters are omitted, the popup appears below the input area (see example below).|
| **hidePopup** |||Hides the popup calendar if it is showing.|
| **togglePopup** |||Toggles the visible state of the popup calendar.|

# See Also

 * [Overview]({%slug calendar/client-side-programming/overview%})
