---
title: Overview
page_title: Overview | RadMonthYearPicker for ASP.NET AJAX Documentation
description: RadMonthYearPicker Server-Side Events Overview
slug: monthyearpicker/server-side-programming/events/overview
tags: server-side,events,overview
published: True
position: 0
---

# Server-Side Events Overview



The **RadMonthYearPicker** control exposes the following two server-side events:

* [ChildrenCreated]({%slug monthyearpicker/server-side-programming/events/childrencreated%}) occurs when the child controls (the input area, popup buttons, and embedded calendar or time view controls) are created.

* [SelectedDateChanged]({%slug monthyearpicker/server-side-programming/events/selecteddatechanged%}) occurs when the user changes the value of the control, either when input area loses focus after the user has typed a new value, or when the user selects a new value in the popup calendar or time view control. This event does not fire unless the **AutoPostBack** property is **True**.

* [ViewCellCreated]({%slug monthyearpicker/server-side-programming/server-side-events/viewcellcreated%}) occurs when a cell in **MonthYearTableView** is created.

>note 
When setting the **AutoPostBack** or **AutoPostBackControl** properties to enable server-side events that respond when the user makes a change, you can still have the smooth performance of client mode by making the postback asynchronous. To do this, use a **RadAjaxManager** control.
>


## Postbacks

By default, none of the **RadCalendar** controls cause postbacks when the user selects or deselects a date. This means that some of the server-side events are not raised.

The following table indicates the properties you can use to enable postbacks on the different **RadCalendar** controls, allowing their server-side events to occur:


| Control | Property | Events | Comments |
| ------ | ------ | ------ | ------ |
|RadCalendar|AutoPostBack|DefaultViewChangedSelectionChanged|When **AutoPostBack** is **true** , a postback occurs both when the user changes the selection and when the user clicks on a navigation control to change the view.|
|RadDatePicker|AutoPostBack|SelectedDateChangedDateInput.TextChanged|When **AutoPostBack** is **true** , a postback only occurs when the user changes the selected date.|
|RadTimePicker|AutoPostBack|SelectedDateChangedDateInput.TextChanged|When **AutoPostBack** is **true** , a postback occurs when the user changes the selected time.|
|RadMonthYearPicker|AutoPostBack|SelectedDateChangedDateInput.TextChanged|When **AutoPostBack** is **true** , a postback only occurs when the user changes the selected date.|
|RadDateTimePicker|AutoPostBackControl|SelectedDateChangedDateInput.TextChanged| **AutoPostBack** can have any of the following values: "*None*": no postbacks occur when the user changes the selection; "*Both*": a postback occurs when the user changes the selection; "*TimeView*": a postback occurs when the user types a new value in the input area or selects a time in the popup time view; "*Calendar*": a postback occurs when the user types a new value in the input area or selects a date in the popup calendar.|



