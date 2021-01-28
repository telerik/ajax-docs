---
title: Keyboard Support
page_title: Keyboard Support - RadDateTimePicker
description: Check our Web Forms article about Keyboard Support.
slug: datetimepicker/accessibility-and-internationalization/keyboard-support
tags: keyboard,support
published: True
position: 7
---

# Keyboard Support


The **RadCalendar** controls provide support tab or arrow keys navigation:


* **Tab key Navigation** - The first time the user presses the TAB key, focus moves to the input area, where the user can type a date and time value. Pressing the TAB key second time moves focus to the date popup button, where the ENTER key can display or hide the calendar popup. Pressing the TAB key again moves to the time popup button, where the ENTER key can display or hide the time view popup. When a popup is showing, the TAB key can navigate through it and the ENTER key selects a value.

* **Arrow key Navigation** - Users can navigate within the input area of a **RadDateTimePicker** control using the arrow keys:

    * The left and right arrow keys move the cursor one position to the left or right. When the shift key is pressed at the same time, the left and right arrow keys extend or contract the current selection on position to the left or right.

    * The up and down arrow keys increase or decrease the value of the date part or time part that contains the cursor when the **DateInput.IncrementSettings.InterceptArrowKeys** property is **true**. The **DateInput.IncrementSettings.Step** property specifies the number of months, days, years, hours, minutes or seconds by which the value changes.


