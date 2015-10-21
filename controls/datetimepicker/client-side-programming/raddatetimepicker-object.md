---
title: RadDateTimePicker Object
page_title: RadDateTimePicker Object | RadDateTimePicker for ASP.NET AJAX Documentation
description: RadDateTimePicker Client-side Object
slug: datepicker/client-side-programming/raddatetimepicker-object
tags: raddatetimepicker,object
published: True
position: 0
---

# RadDateTimePicker Object



The following table lists the most important methods of the **RadDateTimePicker** client-side object.




| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| **get_selectedDate** |none|Date|Returns the selected date and time, or null if no date is selected.|
| **set_selectedDate** |Date|none|Assigns the value of the date/time picker.|
| **isEmpty** |none|boolean|Returns **true** if the value is unassigned.|
| **get_maxDate** |none|Date|Returns the latest dateand time the user can select.|
| **set_maxDate** |Date|none|Sets the latest date and time the user can select.|
| **get_minDate** |none|Date|Returns the earliest date and time the user can select.|
| **set_minDate** |Date|none|Sets the earliest date and time the user can select.|
| **get_focusedDate** |none|Date|Returns the date that determines the view the popup calendar uses when the value of the date/time picker is not assigned.|
| **set_focusedDate** |Date|none|Sets the date that determines the view the popup calendar uses when the value of the date/time picker is not assigned.|
| **get_enabled** |none|boolean|Gets whether the control is enabled.|
| **set_enabled** |boolean|none|Sets whether the control is enabled and operable by the user.|
| **get_enableScreenBoundaryDetection** |boolean|none|Gets whether the control switches the popup direction automatically, depending on the proximity of the page boundaries.|
| **set_enableScreenBoundaryDetection** |boolean|none|Sets whether the control switches the popup direction automatically, depending on the proximity of the page boundaries.|
| **get_popupDirection** |none|Telerik.Web.RadDatePickerPopupDirection|Gets the (default) popup direction of the calendar and timeview popups. This property is related to the screen boundary detection.|
| **set_popupDirection** |Telerik.Web.RadDatePickerPopupDirection|none|Sets the (default) popup direction of the calendar and timeview popups. This property is related to the screen boundary detection.|
| **isPopupVisible** |none|boolean|Returns whether the popup calendar is visible.|
| **isTimePopupVisible** |none|boolean|Returns whether the popup time view is visible.|
| **get_calendar** |none|RadCalendar|Returns a reference to the client object for the popup calendar.|
| **get_timeView** |none|RadTimeView|Returns a reference to the client object for the popup time view.|
| **get_dateInput** |none|RadDateInput|Returns a reference to the client object for the input area. For details on using this object, see the **RadInput** documentation.|
| **get_element** |none|HTML element|Returns the DOM element for the entire **RadDateTimePicker** control.|
| **get_textBox** |none|HTML element|Returns the DOM element for the text box that implements the input area.|
| **get_popupButton** |none|HTML element|Returns the DOM element for the calendar popup button.|
| **get_timePopupButton** |none|HTML element|returns the DOM element for the time popup button.|
| **get_popupContainer** |none|HTML element|Returns the DOM element for the <DIV> that contains the popup calendar.|
| **get_timePopupContainer** |none|HTML element|Returns the DOM element for the <DIV> that contains the popup time view.|

## Methods


| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| **clear** |none|none|Clears the selection, leaving the value as unassigned.|
| **showPopup** |integer, integer|none|Displays the popup calendar at the specified coordinates. If the two parameters are omitted, the popup appears below the input area.|
| **showTimePopup** |integer, integer|none|Displays the popup time view at the specified coordinates. If the two parameters are omitted, the popup appears below the input area.|
| **hidePopup** |none|none|Hides the popup calendar if it is showing.|
| **hideTimePopup** |none|none|Hides the popup time view if it is showing.|
| **togglePopup** |none|none|Toggles the visible state of the popup calendar.|
| **toggleTimePopup** |none|none|Toggles the visible state of the popup time view.|

# See Also

 * [Overview]({%slug calendar/client-side-programming/overview%})
