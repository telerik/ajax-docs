---
title: RadMonthYearPicker object
page_title: RadMonthYearPicker object | UI for ASP.NET AJAX Documentation
description: RadMonthYearPicker object
slug: calendar/client-side-programming/radmonthyearpicker-object
tags: radmonthyearpicker,object
published: True
position: 5
---

# RadMonthYearPicker object



The following table lists the most important properties and methods of the __RadMonthYearPicker__ client-side object.

## Properties


| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| __get_selectedDate__ |none|Date|Returns the selected date, or null if no date is selected.|
| __set_selectedDate__ |Date|none|Assigns the value of the monthyear picker.|
| __isEmpty__ |none|boolean|Returns __true__ if the value is unassigned.|
| __get_maxDate__ |none|Date|Returns the latest date the user can select.|
| __set_maxDate__ |Date|none|Sets the latest date the user can select.|
| __get_minDate__ |none|Date|Returns the earliest date the user can select.|
| __set_minDate__ |Date|none|Sets the earliest date the user can select.|
| __get_focusedDate__ |none|Date|Returns the date that determines the view the popup calendar uses when the value of the date picker is not assigned.|
| __set_focusedDate__ |Date|none|Sets the date that determines the view MonthYearView uses when the value of the picker is not assigned.|
| __get_enabled__ |none|boolean|Gets whether the control is enabled.|
| __set_enabled__ |boolean|none|Sets whether the control is enabled and operable by the user.|
| __get_enableScreenBoundaryDetection__ |boolean|none|Gets whether the control switches the popup direction automatically, depending on the proximity of the page boundaries.|
| __set_enableScreenBoundaryDetection__ |boolean|none|Sets whether the control switches the popup direction automatically, depending on the proximity of the page boundaries.|
| __get_popupDirection__ |none|Telerik.Web.RadDatePickerPopupDirection|Gets the (default) popup direction of the monthyearview popup. This property is related to the screen boundary detection.|
| __set_popupDirection__ |Telerik.Web.RadDatePickerPopupDirection|none|Sets the (default) popup direction of the monthyearview popup. This property is related to the screen boundary detection.|
| __isPopupVisible__ |none|boolean|Returns whether the popup view is visible.|
| __get_dateInput__ |none|RadDateInput|Returns a reference to the client object for the input area. For details on using this object, see the __RadInput__ documentation.|
| __get_element__ |none|HTML element|Returns the DOM element for the entire __RadMonthYearPicker__ control.|
| __get_textBox__ |none|HTML element|Returns the DOM element for the text box that implements the input area.|
| __get_popupButton__ |none|HTML element|Returns the DOM element for the calendar popup button.|

## Methods


| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| __clear__ |none|none|Clears the selection, leaving the value as unassigned.|
| __showPopup__ |integer, integer|none|Displays the popup view at the specified coordinates. If the two parameters are omitted, the popup appears below the input area.|
| __hidePopup__ |none|none|Hides the popup calendar if it is showing.|
| __togglePopup__ |none|none|Toggles the visible state of the popup calendar.|
| __navigateToDate__ |Date|none|Causes the calendar to switch to the view containing the specified date.|
