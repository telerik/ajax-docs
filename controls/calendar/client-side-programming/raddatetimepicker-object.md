---
title: RadDateTimePicker object
page_title: RadDateTimePicker object | UI for ASP.NET AJAX Documentation
description: RadDateTimePicker object
slug: calendar/client-side-programming/raddatetimepicker-object
tags: raddatetimepicker,object
published: True
position: 4
---

# RadDateTimePicker object



## 

The following table lists the most important methods of the __RadDateTimePicker__ client-side object.




| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| __get_selectedDate__ |none|Date|Returns the selected date and time, or null if no date is selected.|
| __set_selectedDate__ |Date|none|Assigns the value of the date/time picker.|
| __isEmpty__ |none|boolean|Returns __true__ if the value is unassigned.|
| __get_maxDate__ |none|Date|Returns the latest dateand time the user can select.|
| __set_maxDate__ |Date|none|Sets the latest date and time the user can select.|
| __get_minDate__ |none|Date|Returns the earliest date and time the user can select.|
| __set_minDate__ |Date|none|Sets the earliest date and time the user can select.|
| __get_focusedDate__ |none|Date|Returns the date that determines the view the popup calendar uses when the value of the date/time picker is not assigned.|
| __set_focusedDate__ |Date|none|Sets the date that determines the view the popup calendar uses when the value of the date/time picker is not assigned.|
| __get_enabled__ |none|boolean|Gets whether the control is enabled.|
| __set_enabled__ |boolean|none|Sets whether the control is enabled and operable by the user.|
| __get_enableScreenBoundaryDetection__ |boolean|none|Gets whether the control switches the popup direction automatically, depending on the proximity of the page boundaries.|
| __set_enableScreenBoundaryDetection__ |boolean|none|Sets whether the control switches the popup direction automatically, depending on the proximity of the page boundaries.|
| __get_popupDirection__ |none|Telerik.Web.RadDatePickerPopupDirection|Gets the (default) popup direction of the calendar and timeview popups. This property is related to the screen boundary detection.|
| __set_popupDirection__ |Telerik.Web.RadDatePickerPopupDirection|none|Sets the (default) popup direction of the calendar and timeview popups. This property is related to the screen boundary detection.|
| __isPopupVisible__ |none|boolean|Returns whether the popup calendar is visible.|
| __isTimePopupVisible__ |none|boolean|Returns whether the popup time view is visible.|
| __get_calendar__ |none|RadCalendar|Returns a reference to the client object for the popup calendar.|
| __get_timeView__ |none|RadTimeView|Returns a reference to the client object for the popup time view.|
| __get_dateInput__ |none|RadDateInput|Returns a reference to the client object for the input area. For details on using this object, see the __RadInput__ documentation.|
| __get_element__ |none|HTML element|Returns the DOM element for the entire __RadDateTimePicker__ control.|
| __get_textBox__ |none|HTML element|Returns the DOM element for the text box that implements the input area.|
| __get_popupButton__ |none|HTML element|Returns the DOM element for the calendar popup button.|
| __get_timePopupButton__ |none|HTML element|returns the DOM element for the time popup button.|
| __get_popupContainer__ |none|HTML element|Returns the DOM element for the <DIV> that contains the popup calendar.|
| __get_timePopupContainer__ |none|HTML element|Returns the DOM element for the <DIV> that contains the popup time view.|

## Methods


| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| __clear__ |none|none|Clears the selection, leaving the value as unassigned.|
| __showPopup__ |integer, integer|none|Displays the popup calendar at the specified coordinates. If the two parameters are omitted, the popup appears below the input area.|
| __showTimePopup__ |integer, integer|none|Displays the popup time view at the specified coordinates. If the two parameters are omitted, the popup appears below the input area.|
| __hidePopup__ |none|none|Hides the popup calendar if it is showing.|
| __hideTimePopup__ |none|none|Hides the popup time view if it is showing.|
| __togglePopup__ |none|none|Toggles the visible state of the popup calendar.|
| __toggleTimePopup__ |none|none|Toggles the visible state of the popup time view.|

# See Also

 * [Overview]({%slug calendar/client-side-programming/overview%})
