---
title: Keyboard Support
page_title: Keyboard Support | RadDatePicker for ASP.NET AJAX Documentation
description: RadDatePicker Keyboard Support
slug: datepicker/accessibility-and-internationalization/keyboard-support
tags: keyboard,support
published: True
position: 1
---

# Keyboard Support


The **RadDatePicker** control supports keyboard navigation using the tab or arrow keys:

* **Tab key Navigation** - Once focus is on the **RadDatePicker** control, the TAB key and SHIFT+TAB key combination move through the parts of the control. The first time the user presses the TAB key, focus moves to the date input area, where the user can type a date value. Pressing the TAB key second time moves focus to the date popup button. Pressing the ENTER key when focus is on the date popup button causes the calendar popup to show. Once the calendar popup is showing, it enters the tab sequence, and behaves like the **RadCalendar** control.

* **Arrow key Navigation** - Users can navigate within the input area of a **RadDatePicker** control using the arrow keys:

    * The left and right arrow keys move the cursor one position to the left or right. When the shift key is pressed at the same time, the left and right arrow keys extend or contract the current selection on position to the left or right.

    * The up and down arrow keys increase or decrease the value of the date part or time part that contains the cursor when the **DateInput.IncrementSettings.InterceptArrowKeys** property is **true**. The **DateInput.IncrementSettings.Step** property specifies the number of months, days, years, hours, minutes or seconds by which the value changes.

# See Also

 * [RadCalendar Keyboard Support]({%slug calendar/accessibility-and-internationalization/keyboard-support%})


