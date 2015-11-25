---
title: Overview
page_title: Overview | RadTimePicker for ASP.NET AJAX Documentation
description: RadTimePicker Server-Side Events Overview
slug: timepicker/server-side-programming/events/overview
tags: server-side,events,overview
published: True
position: 0
---

# Overview



The **RadTimePicker** control exposes the following server-side events:

* [ChildrenCreated]({%slug timepicker/server-side-programming/events/childrencreated%}) occurs when the child controls (the input area, popup buttons, and embedded calendar or time view controls) are created.

* [SelectedDateChanged]({%slug timepicker/server-side-programming/events/selecteddatechanged%}) occurs when the user changes the value of the control, either when input area loses focus after the user has typed a new value, or when the user selects a new value in the popup calendar or time view control. This event does not fire unless the **AutoPostBack** property is **True** (**RadDatePicker**, **RadTimePicker** and **RadMonthYearPicker**) or the **AutoPostBackControl** property is not "None" (**RadDateTimePicker**).

* [ItemCreated]({%slug timepicker/server-side-programming/events/itemcreated%}) occurs when an item in the time view is created.

* [ItemDataBound]({%slug timepicker/server-side-programming/events/itemdatabound%}) occurs when an item in the time view is data bound.




>note In order for the server-side events to be invoked the **RadTimePicker** control needs to perform postback. In order to do this you should set the **AutoPostBack** property of the control to **true**.
>


