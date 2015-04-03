---
title: Date Selection
page_title: Date Selection | UI for ASP.NET AJAX Documentation
description: Date Selection
slug: calendar/radcalendar/date-selection
tags: date,selection
published: True
position: 7
---

# Date Selection



You can specify whether users can use the __RadCalendar__ control to select only a single date, whether it permits the selection of multiple dates, or whether it is used for display purposes only and does not permit the user to select any dates.

* The __PresentationType__ property specifies whether users can use the calendar to select dates at all. When __PresentationType__ is "Preview", the calendar is read-only, and users cannot select any values. When __PresentationType__ is "Interactive", the calendar acts as a date selection control.

* The __EnableMultiSelect__ property controls whether users can select multiple dates using the __RadCalendar__ control. You can set the __EnableMultiSelect__ property using the properties pane, or by using the __Enable MultiSelect__ check box in the __RadCalendar__[Smart Tag]({%slug calendar/design-time/smart-tag%}).

## Selected Values

When __EnableMultiSelect__ is __False__, the single selected value of the calendar is given by the __SelectedDate__ property. When __EnableMultiSelect__ is __True__, the collection of selected values is given by the __SelectedDates__ property.

## Selecting Values

When __EnableMultiSelect__ is __False__, users select a date by clicking on it in the main calendar area or tabbing to the date and pressing the ENTER key. Selecting one date causes the previously selected date to become unselected.

When __EnableMultiSelect__ is __True__, users can still select a date by clicking on it in the main calendar area or tabbing to the date and pressing the ENTER key. Selecting one date does not cause any previously selected date to become unselected. Clicking on a selected date or pressing ENTER while the date has focus causes a selected date to become unselected.

In addition to selecting dates individually, the __RadCalendar__ can be configured to let users select an entire row, column, or even all the dates visible in the calendar, with a single mouse click.

* To let the user select an entire row, display the row headers by setting the __ShowRowHeaders__ property to __True__ and set the __UseRowHeadersAsSelectors__ property to __True__. When the user clicks on a row header, the selection state of every date in the row is done in par with the row header selection state (unselected header state -> all dates under that row header become unselected; selected header -> all dates under that row header become selected).

* To let the user select an entire column, display the column headers by setting the __ShowColumnHeaders__ property to __True__ and set the __UseColumnHeadersAsSelectors__ property to __True__. When the user clicks on a column header, the selection state of every date in the column is done in par with the column header selection state (unselected header state -> all dates under that column header become unselected; selected header -> all dates under that column header become selected).

* To let the user select all the dates visible in the calendar, set the __EnableViewSelector__ property to __True__. When the user clicks on the view selector (which appears in the upper left corner between the row and column headers), the selection state of every date in the calendar is toggled, so that unselected dates become selected and selected dates become unselected.

# See Also

 * [Column And Row Headers Settings]({%slug calendar/radcalendar/column-and-row-headers-settings%})
