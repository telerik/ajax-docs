---
title: Date Selection
page_title: Date Selection | RadCalendar for ASP.NET AJAX Documentation
description: Date Selection
slug: calendar/functionality/date-selection
tags: date,selection
published: True
position: 7
---

# Date Selection



You can specify whether users can use the **RadCalendar** control to select only a single date, whether it permits the selection of multiple dates, or whether it is used for display purposes only and does not permit the user to select any dates.

* The **PresentationType** property specifies whether users can use the calendar to select dates at all. When **PresentationType** is **Preview**, the calendar is read-only, and users cannot select any values. When **PresentationType** is **Interactive**, the calendar acts as a date selection control.

* The **EnableMultiSelect** property controls whether users can select multiple dates using the **RadCalendar** control. You can set the **EnableMultiSelect** property using the properties pane, or by using the **Enable MultiSelect** check box in the **RadCalendar** [Smart Tag]({%slug calendar/design-time/smart-tag%}).

## Selected Values

When **EnableMultiSelect** is **False**, the single selected value of the calendar is given by the **SelectedDate** property. When **EnableMultiSelect** is **True**, the collection of selected values is given by the **SelectedDates** property.

## Selecting Values

When **EnableMultiSelect** is **False**, users select a date by clicking on it in the main calendar area or tabbing to the date and pressing the ENTER key. Selecting one date causes the previously selected date to become unselected.

When **EnableMultiSelect** is **True**, users can still select a date by clicking on it in the main calendar area or tabbing to the date and pressing the ENTER key. Selecting one date does not cause any previously selected date to become unselected. Clicking on a selected date or pressing ENTER while the date has focus causes a selected date to become unselected.

In addition to selecting dates individually, the **RadCalendar** can be configured to let users select an entire row, column, or even all the dates visible in the calendar, with a single mouse click.

* To let the user select an entire row, display the row headers by setting the **ShowRowHeaders** property to **True** and set the **UseRowHeadersAsSelectors** property to **True**. When the user clicks on a row header, the selection state of every date in the row is done in par with the row header selection state (unselected header state -> all dates under that row header become unselected; selected header -> all dates under that row header become selected).

* To let the user select an entire column, display the column headers by setting the **ShowColumnHeaders** property to **True** and set the **UseColumnHeadersAsSelectors** property to **True**. When the user clicks on a column header, the selection state of every date in the column is done in par with the column header selection state (unselected header state -> all dates under that column header become unselected; selected header -> all dates under that column header become selected).

* To let the user select all the dates visible in the calendar, set the **EnableViewSelector** property to **True**. When the user clicks on the view selector (which appears in the upper left corner between the row and column headers), the selection state of every date in the calendar is toggled, so that unselected dates become selected and selected dates become unselected.

# See Also

 * [Column And Row Headers Settings]({%slug calendar/functionality/column-and-row-headers-settings%})
