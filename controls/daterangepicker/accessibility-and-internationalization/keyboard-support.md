---
title: Keyboard Support
page_title: Keyboard Support - RadDateRangePicker
description: Check our Web Forms article about RadDateRangePicker Keyboard Support.
slug: daterangepicker/accessibility-and-internationalization/keyboard-support
tags: keyboard,support
published: True
position: 1
---

# Keyboard Support

The **RadDateRangePicker** control supports keyboard navigation using the tab or arrow keys:

 - Tab key Navigation - Once focus is on the **RadDateRangePicker** control, the popup Calendar is automatically opened. The `TAB` key and `SHIFT+TAB` key combination move between the **StartDatePicker** and the **EndDatePicker** controls. When the PopUpButtons of the embedded pickers are shown they are also being focused by pressing the `TAB` or `SHIFT+TAB`. The first time the user presses the TAB key, focus moves to the first date input area, where the user can type a start date value.

 - Arrow key Navigation - Users can navigate within the input areas of the embedded **RadDatePicker** controls using the arrow keys:

   The left and right arrow keys move the cursor one position to the left or right. When the shift key is pressed at the same time, the left and right arrow keys extend or contract the current selection on position to the left or right.
  
   The up and down arrow keys increase or decrease the value of the date part that contains the cursor when the **[StartDatePicker/EndDatePicker].DateInput.IncrementSettings.InterceptArrowKeys** property is true. The **[StartDatePicker/EndDatePicker].DateInput.IncrementSettings.Step** property specifies the number of months, days, years, hours, minutes or seconds by which the value changes.

# See Also

 * [RadDatePicker Keyboard Support]({%slug datepicker/accessibility-and-internationalization/keyboard-support%})


