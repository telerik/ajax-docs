---
title: Keyboard Support
page_title: Keyboard Support | RadCalendar for ASP.NET AJAX Documentation
description: Keyboard Support
slug: calendar/accessibility-and-internationalization/keyboard-support
tags: keyboard,support
published: True
position: 7
---

# Keyboard Support


The **RadCalendar** controls provide support for **Access Keys** and navigation using the tab or arrow keys:

* **Access Keys** - You can specify a key that lets the end user move focus directly to the **RadCalendar**, **RadDatePicker**, or **RadTimePicker** control. Once focus is on the control, the user can use the keyboard to navigate around the control and enter or select a value. The access key is defined using the **AccessKey** property. For example, if you set the **AccessKey** property to "C", focus moves to the **RadCalendar** control when the user presses "**Alt+C**".

    ````ASPNET
<telerik:RadCalendar ID="RadCalendar1" runat="server" MonthLayout="Layout_7columns_x_6rows" AccessKey="C">       
</telerik:RadCalendar>
````

* **Tab key Navigation** - Once focus is on a **RadCalendar**, **RadDatePicker** or **RadTimePicker** control, the TAB key and SHIFT+TAB key combination move through the parts of the control:


    | Control | Response to TAB key |
    | ------ | ------ |
    | **RadCalendar** | The first time the user presses the TAB key, focus moves to the first navigation control in the title bar. Pressing TAB repeatedly moves through the navigation controls in the title bar and then through each day shown in the main calendar area. Pressing SHIFT+TAB moves backward through the same elements. Pressing the ENTER key when focus is on a navigation control causes the view to change. Pressing the ENTER key when focus is on a day in the main calendar area selects the day. |
    | **RadDatePicker** | The first time the user presses the TAB key, focus moves to the date input area, where the user can type a date value. Pressing the TAB key second time moves focus to the date popup button. Pressing the ENTER key when focus is on the date popup button causes the calendar popup to show. Once the calendar popup is showing, it enters the tab sequence, and behaves like the **RadCalendar** control. |
    | **RadTimePicker** | The first time the user presses the TAB key, focus moves to the time input area, where the user can type a time value. Pressing the TAB key second time moves focus to the time popup button. Pressing the ENTER key when focus is on the time popup button causes the time view popup to show. Once the time view popup is showing, the TAB key navigates through the time values it displays and pressing the ENTER key selects a time value. |
    | **RadDateTimePicker** | The first time the user presses the TAB key, focus moves to the input area, where the user can type a date and time value. Pressing the TAB key second time moves focus to the date popup button, where the ENTER key can display or hide the calendar popup. Pressing the TAB key again moves to the time popup button, where the ENTER key can display or hide the time view popup. When a popup is showing, the TAB key can navigate through it and the ENTER key selects a value. |

* **Arrow key Navigation** - Users can navigate within the input area of a **RadDatePicker**, **RadDateTimePicker**, or **RadTimePicker** control using the arrow keys:

    * The left and right arrow keys move the cursor one position to the left or right. When the shift key is pressed at the same time, the left and right arrow keys extend or contract the current selection on position to the left or right.

    * The up and down arrow keys increase or decrease the value of the date part or time part that contains the cursor when the **DateInput.IncrementSettings.InterceptArrowKeys** property is **true**. The **DateInput.IncrementSettings.Step** property specifies the number of months, days, years, hours, minutes or seconds by which the value changes.

# See Also

 * [Removing RadCalendar from the Tab Sequence]({%slug calendar/how-to/removing-radcalendar-from-the-tab-sequence%})
