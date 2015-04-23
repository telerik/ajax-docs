---
title: CSS Skin Selectors
page_title: CSS Skin Selectors | RadCalendar for ASP.NET AJAX Documentation
description: CSS Skin Selectors
slug: calendar/appearance-and-styling/css-skin-selectors
tags: css,skin,selectors
published: True
position: 5
---

# CSS Skin Selectors



## 

The following table lists significant CSS selectors and descriptions that apply to the **RadCalendar** controls in RadCalendar style sheets.

>note The "[skin]" that appears in class names is a placeholder for the name of the skin.
>



| Class Name | Element | Description |
| ------ | ------ | ------ |
|.RadCalendar_[skin]|TABLE|The class for the table that lays out the entire **RadCalendar** control.|
|.rcTitlebar|TD|The class for the table cell that contains the titlebar of a calendar.|
|.rcTitle|TD|The class for the titlebar table cell that contains the current month/year.|
|.rcFastPrev, .rcPrev, .rcNext, .rcFastNext|A|The class for the navigation buttons inside the titlebar.|
|.rcMain|TD|The class for the table cell that wraps the main calendar area.|
|.rcMainTable|TABLE|The class for the table that lays out the main calendar area.|
|.rcWeek|TR|The class for the table row that contains the column headers (which are TH elements).|
|.rcWeekend|TD|The class for selectable weekend days in the day matrix that are not selected, hovered, or belonging to a non-focused month.|
|.rcHover|TD|The class for the cells in the day matrix when the mouse hovers over them or over a selector in the row or column headers.|
|.rcSelected|TD|The class for selected dates in the day matrix.|
|.rcToday|TD|The class for the cell in the day matrix that represents "today".|
|.rcDisabled|TD|The class for cells in the day matrix that are disabled.|
|.rcOtherMonth|TD|The class for cells in the day matrix that represent days in a month other than the focused month.|
|.rcOutOfRange|TD|The class for cells in the day matrix that are earlier than the minimum selectable date or later than the maximum selectable date.|
|.RadCalendarMonthView_[skin]|TABLE|The class for the month/year navigation popup.|
|#rcMView_PrevY|A|The class for the "<<" button that scrolls the year values in the month/year navigation popup.|
|#rcMView_NextY|A|The class for the ">>" button that scrolls the year values in the month/year navigation popup.|
|#rcMView_Jan|A|The class for the January selector in the month/year navigation popup|
|#rcMView_Feb|A|The class for the February selector in the month/year navigation popup|
|#rcMView_Mar|A|The class for the March selector in the month/year navigation popup|
|#rcMView_Apr|A|The class for the April selector in the month/year navigation popup|
|#rcMView_May|A|The class for the May selector in the month/year navigation popup|
|#rcMView_Jun|A|The class for the June selector in the month/year navigation popup|
|#rcMView_Jul|A|The class for the July selector in the month/year navigation popup|
|#rcMView_Aug|A|The class for the August selector in the month/year navigation popup|
|#rcMView_Sep|A|The class for the September selector in the month/year navigation popup|
|#rcMView_Oct|A|The class for the October selector in the month/year navigation popup|
|#rcMView_Nov|A|The class for the November selector in the month/year navigation popup|
|#rcMView_Dec|A|The class for the December selector in the month/year navigation popup|
|.rcSelected|TD|The class for the selected month or year in the month/year navigation popup.|
|.rcButtons|TABLE|The class for the cells at the bottom of the month/year navigation popup that contain the "Today", "Ok", and "Cancel" buttons.|
|.RadCalendarTimeView_[skin]|TABLE|The class for the table that lays out the elements of a **RadTimeView** control.|
|.rcHeader|TH|The class for the header of a **RadTimeView** control|
|.rcFooter|TD|The class for the footer of a **RadTimeView** control|
|.rcHover|TD|The class for a selectable time value when the mouse hovers over it in a **RadTimeView** control.|
|.rcDisabled|TD|The class for a disabled time value in a **RadTimeView** control.|
|.RadPicker_[skin]|DIV|The class for the top-level element of a **RadDatePicker** , **RadTimePicker** , or **RadDateTimePicker** control.|
|.RadInput_[skin]|SPAN|The class for the input area in a **RadDatePicker** , **RadTimePicker** , or **RadDateTimePicker** control.

>note This class is defined in the **RadInput** skin CSS files, but can appear, qualified by the .RadPicker_[skin] class in the Calendar skin CSS files.
>
|
|.rcCalPopup|A|The class for the **DatePopupButton** in a **RadDatePicker** or **RadDateTimePicker** control.|
|.rcTimePopup|A|The class for the **TimePopupButton** in a **RadTimePicker** or **RadDateTimePicker** control.|

# See Also

 * [HTML Output]({%slug calendar/appearance-and-styling/html-output%})
