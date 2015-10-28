---
title: Overview
page_title: Overview | RadDateTimePicker for ASP.NET AJAX Documentation
description: RadDateTimePicker Server-Side Events Overview
slug: datetimepicker/server-side-programming/events/overview
tags: server-side,events,basics
published: True
position: 0
---

# Server-Side Events Overview



The **RadDateTimePicker** control raises server-side events, which you can use to customize the parts of the control as they are created, or to respond in the code-behind when the user makes a change.


* [ChildrenCreated]({%slug datetimepicker/server-side-programming/events/childrencreated%}) occurs when the child controls (the input area, popup buttons, and embedded calendar or time view controls) are created.

* [SelectedDateChanged]({%slug datetimepicker/server-side-programming/events/selecteddatechanged%}) occurs when the user changes the value of the control, either when input area loses focus after the user has typed a new value, or when the user selects a new value in the popup calendar or time view control. This event does not fire unless the **AutoPostBack** property is **True** (**RadDatePicker**, **RadTimePicker** and **RadMonthYearPicker**) or the **AutoPostBackControl** property is not "None" (**RadDateTimePicker**).

In addition, **RadTimePicker** and **RadDateTimePicker** controls expose two additional server-side events for configuring the embedded time view control:

* [ItemCreated]({%slug datetimepicker/server-side-programming/events/itemcreated%}) occurs when an item in the time view is created.

* [ItemDataBound]({%slug datetimepicker/server-side-programming/events/itemdatabound%}) occurs when an item in the time view is data bound.



## Postbacks

By default, the **RadDateTimePicker** control does not cause postback on user interaction. In order to change this behavior you need to set the **AutoPostBackControl** property. It can have any of the following values:


| Value | Result |
|---|---|
| None | No postbacks occur when the user changes the selection. |
| Both | Postback occurs when the user changes the selection. |
| TimeView | Postback occurs when the user types a new value in the input area or selects a time in the popup time view. |
| Calendar | Postback occurs when the user types a new value in the input area or selects a date in the popup calendar. |



