---
title: Keyboard Support
page_title: Keyboard Support | UI for ASP.NET AJAX Documentation
description: Keyboard Support
slug: scheduler/accessibility-and-internationalization/keyboard-support
tags: keyboard,support
published: True
position: 4
---

# Keyboard Support



## 

As of __Q2 2011__ RadScheduler introduces keyboars support. In order to activate it, appropriate TabIndex should be set.

The keyboard navigation has the following functionalities:

* Use the up and down arrows to move up and down the selected time slot (Day view)

* Use the up/down/right/left arrows to navigate through timeslots(Month/Week views)

* Use tab to switch the focus among appointments

* Press enter to add an appointment when the focus is on a time slot

* Press enter on existing appointment to trigger edit

* Press delete on appointment to remove it from the schedule

* Press Esc to cancel insert/update of an Appointment

* Use Shift + arrows to select multiple timeslots (like in Outlook)

The available key combinations are listed below:

>note Keyboard shortcuts are the same as the Microsoft Outlook ones
>


* CTRL+RIGHT ARROW(day view) - Go to the next day.

* CTRL+LEFT ARROW(dayview) - Go to the previous day.

* ALT+DOWN ARROW (week view) - Go to the next week.

* ALT+UP ARROW(week view) - Go to the previous week.

* ALT+PAGE DOWN(month view) - Go to the next month.

* ALT+PAGE UP (month view) - Go to the previous month.

* CTRL + G - Open the date picker.

* ALT+HOME(week and day view) - Go to the start of the week.

* ALT+END(week and day view) - Go to the end of the week.

* ALT and "+" - Go to month view.

* ALT and "–" - Go to week view.

* ALT + any number (0-9) - Go to day view.

See live example at[Keyboard Support](http://demos.telerik.com/aspnet-ajax/scheduler/examples/keyboardsupport/defaultcs.aspx)
