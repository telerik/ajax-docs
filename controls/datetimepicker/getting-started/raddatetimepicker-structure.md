---
title: RadDateTimePicker Structure
page_title: RadDateTimePicker Structure | RadDateTimePicker for ASP.NET AJAX Documentation
description: RadDateTimePicker Structure
slug: datetimepicker/getting-started/raddatetimepicker-structure
tags: raddatetimepicker,structure
published: True
position: 2
---

# RadDateTimePicker Structure



The **RadDateTimePicker** control is a composite control that combines the functionality of **RadCalendar** and **RadTimeView** with the functionality of **RadDateInput** to give the broadest possible range of options for selecting date and time values. The controls has the following structure:
![Overview of picker structure](images/calendar_overviewpickerstructure_001.png)

The three major components of a **RadDateTimePicker** control are:

* **InputArea** - This is an embedded **RadInput** control, which validates dates or times as the user types.

* **Popup Control** - This is a **RadCalendar** and **RadTimeView** control that is shown in a popup element, so that the user can select a date or time by clicking on the desired selection.

* **Calendar Popup Button** and **Time Popup Button** - an image button, displayed next to the input area that shows and hides the popup control.

>caution 
If the popup control is a **RadCalendar** control it must have **AutoPostBack** set to **False** in order to work properly. This means that a popup calendar cannot be used in multi-view mode.
>


Since **RadDatePicker** does not recognize other **Time Popups** excepts its own,it closes only the **Calendar Popups**. The following script can be added in order to allow the **RadDatePicker** to close all of the currently open Time Popups on the page:


# See Also

 * [RadCalendar Structure]({%slug calendar/getting-started/structure%})

 * [RadTimeView Structure]({%slug datetimepicker/getting-started/radtimeview-structure%})
