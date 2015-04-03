---
title: RadDatePicker object
page_title: RadDatePicker object | UI for ASP.NET AJAX Documentation
description: RadDatePicker object
slug: calendar/client-side-programming/raddatepicker-object
tags: raddatepicker,object
published: True
position: 2
---

# RadDatePicker object



The following table lists the most important properties and methods of the __RadDatePicker__ client-side object.

## Properties


| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| __get_selectedDate__ ||Date|Returns the selected date, or null if no date is selected.|
| __set_selectedDate__ |Date||Assigns the value of the date picker.|
| __isEmpty__ ||boolean|Returns __true__ if the value is unassigned.|
| __get_maxDate__ ||Date|Returns the latest date the user can select.|
| __set_maxDate__ |Date||Sets the latest date the user can select.|
| __get_minDate__ ||Date|Returns the earliest date the user can select.|
| __set_minDate__ |Date||Sets the earliest date the user can select.|
| __get_focusedDate__ ||Date|Returns the date that determines the view the popup calendar uses when the value of the date picker is not assigned.|
| __set_focusedDate__ |Date||Sets the date that determines the view the popup calendar uses when the value of the date picker is not assigned.|
| __get_enabled__ ||boolean|Gets whether the control is enabled.|
| __set_enabled__ |boolean||Sets whether the control is enabled and operable by the user.|
| __get_enableScreenBoundaryDetection__ |boolean||Gets whether the control switches the popup direction automatically, depending on the proximity of the page boundaries.|
| __set_enableScreenBoundaryDetection__ |boolean||Sets whether the control switches the popup direction automatically, depending on the proximity of the page boundaries.|
| __get_popupDirection__ ||Telerik.Web.RadDatePickerPopupDirection|Gets the (default) popup direction of the calendar and timeview popups. This property is related to the screen boundary detection.|
| __set_popupDirection__ |Telerik.Web.RadDatePickerPopupDirection||Sets the (default) popup direction of the calendar and timeview popups. This property is related to the screen boundary detection.|
| __isPopupVisible__ ||boolean|Returns whether the popup calendar is visible.|
| __get_calendar__ ||RadCalendar|Returns a reference to the client object for the popup calendar.|
| __get_dateInput__ ||RadDateInput|Returns a reference to the client object for the input area. For details on using this object, see the __RadInput__ documentation.|
| __get_element__ ||HTML element|Returns the DOM element for the entire __RadDatePicker__ control.|
| __get_textBox__ ||HTML element|Returns the DOM element for the text box that implements the input area.|
| __get_popupButton__ ||HTML element|Returns the DOM element for the calendar popup button.|
| __get_popupContainer__ ||HTML element|Returns the DOM element for the <DIV> that contains the popup calendar.|

## Methods


| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| __clear__ |||Clears the selection, leaving the value as unassigned.|
| __showPopup__ |integer, integer||Displays the popup calendar at the specified coordinates. If the two parameters are omitted, the popup appears below the input area (see example below).|
| __hidePopup__ |||Hides the popup calendar if it is showing.|
| __togglePopup__ |||Toggles the visible state of the popup calendar.|

# See Also

 * [Overview]({%slug calendar/client-side-programming/overview%})
