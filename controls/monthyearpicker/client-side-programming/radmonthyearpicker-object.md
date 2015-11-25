---
title: RadMonthYearPicker Object
page_title: RadMonthYearPicker Object | RadMonthYearPicker for ASP.NET AJAX Documentation
description: RadMonthYearPicker Object
slug: monthyearpicker/client-side-programming/radmonthyearpicker-object
tags: radmonthyearpicker,object
published: True
position: 0
---

# RadMonthYearPicker Object



The following table lists the most important properties and methods of the **RadMonthYearPicker** client-side object.

## Properties


| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| **get_selectedDate** |none|Date|Returns the selected date, or null if no date is selected.|
| **set_selectedDate** |Date|none|Assigns the value of the monthyear picker.|
| **isEmpty** |none|boolean|Returns **true** if the value is unassigned.|
| **get_maxDate** |none|Date|Returns the latest date the user can select.|
| **set_maxDate** |Date|none|Sets the latest date the user can select.|
| **get_minDate** |none|Date|Returns the earliest date the user can select.|
| **set_minDate** |Date|none|Sets the earliest date the user can select.|
| **get_focusedDate** |none|Date|Returns the date that determines the view the popup calendar uses when the value of the date picker is not assigned.|
| **set_focusedDate** |Date|none|Sets the date that determines the view MonthYearView uses when the value of the picker is not assigned.|
| **get_enabled** |none|boolean|Gets whether the control is enabled.|
| **set_enabled** |boolean|none|Sets whether the control is enabled and operable by the user.|
| **get_enableScreenBoundaryDetection** |boolean|none|Gets whether the control switches the popup direction automatically, depending on the proximity of the page boundaries.|
| **set_enableScreenBoundaryDetection** |boolean|none|Sets whether the control switches the popup direction automatically, depending on the proximity of the page boundaries.|
| **get_popupDirection** |none|Telerik.Web.RadDatePickerPopupDirection|Gets the (default) popup direction of the monthyearview popup. This property is related to the screen boundary detection.|
| **set_popupDirection** |Telerik.Web.RadDatePickerPopupDirection|none|Sets the (default) popup direction of the monthyearview popup. This property is related to the screen boundary detection.|
| **isPopupVisible** |none|boolean|Returns whether the popup view is visible.|
| **get_dateInput** |none|RadDateInput|Returns a reference to the client object for the input area. For details on using this object, see the **RadInput** documentation.|
| **get_element** |none|HTML element|Returns the DOM element for the entire **RadMonthYearPicker** control.|
| **get_textBox** |none|HTML element|Returns the DOM element for the text box that implements the input area.|
| **get_popupButton** |none|HTML element|Returns the DOM element for the calendar popup button.|

## Methods


| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| **clear** |none|none|Clears the selection, leaving the value as unassigned.|
| **showPopup** |integer, integer|none|Displays the popup view at the specified coordinates. If the two parameters are omitted, the popup appears below the input area.|
| **hidePopup** |none|none|Hides the popup calendar if it is showing.|
| **togglePopup** |none|none|Toggles the visible state of the popup calendar.|
| **navigateToDate** |Date|none|Causes the calendar to switch to the view containing the specified date.|


