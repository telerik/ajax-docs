---
title: Server-Side Events Basics
page_title: Server-Side Events Basics | RadCalendar for ASP.NET AJAX Documentation
description: Server-Side Events Basics
slug: calendar/server-side-programming/server-side-events/server-side-events-basics
tags: server-side,events,basics
published: True
position: 0
---

# Server-Side Events Basics



The **RadCalendar** controls all raise server-side events, which you can use to customize the parts of the control as they are created, or to respond in the code-behind when the user makes a change.

## RadCalendar

**RadCalendar** exposes four server-side events:

* [DayRender]({%slug calendar/server-side-programming/server-side-events/dayrender%}) occurs immediately before the calendar renders the cell for a single day in the day matrix.

* [HeaderCellRender]({%slug calendar/server-side-programming/server-side-events/headercellrender%}) occurs immediately before the calendar renders a cell in the column or row headers (or the view selector).

* [SelectionChanged]({%slug calendar/server-side-programming/server-side-events/selectionchanged%}) occurs when the user changes the current selection in the calendar. This event does not fire unless the **AutoPostBack** property is **True**.

* [DefaultViewChanged]({%slug calendar/server-side-programming/server-side-events/defaultviewchanged%}) occurs when the user changes the current view using the navigation controls in the title bar. This event does not fire unless the **AutoPostBack** property is **True**.

## RadDatePicker, RadTimePicker, RadDateTimePicker and RadMonthYearPicker

The **RadDatePicker**, **RadTimePicker**, **RadDateTimePicker** and **RadMonthYearPicker**controls expose the following two server-side events:

* [ChildrenCreated]({%slug calendar/server-side-programming/server-side-events/childrencreated%}) occurs when the child controls (the input area, popup buttons, and embedded calendar or time view controls) are created.

* [SelectedDateChanged]({%slug calendar/server-side-programming/server-side-events/selecteddatechanged%}) occurs when the user changes the value of the control, either when input area loses focus after the userhas typed a new value, or when the user selects a new value in the popup calendar or time view control. This event does not fire unless the **AutoPostBack** property is **True** (**RadDatePicker**, **RadTimePicker** and **RadMonthYearPicker**) or the **AutoPostBackControl** property is not "None" (**RadDateTimePicker**).

In addition, **RadTimePicker** and **RadDateTimePicker** controls expose two additional server-side events for configuring the embedded time view control:

* [ItemCreated]({%slug calendar/server-side-programming/server-side-events/itemcreated%}) occurs when an item in the time view is created.

* [ItemDataBound]({%slug calendar/server-side-programming/server-side-events/itemdatabound%}) occurs when anitem in the time view is data bound.

The **RadMonthYearPicker** control also exposes additional server-sideevent for customizing the RadMonthYearTableView:

* [ViewCellCreated]({%slug calendar/server-side-programming/server-side-events/viewcellcreated%}) occurs when a cell in MonthYearTableView is created.

>note When setting the **AutoPostBack** or **AutoPostBackControl** properties to enable server-side events that respond when the user makes a change, you can still have the smooth performance of client mode by making the postback asynchronous. To do this, use a **RadAjaxManager** control.
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
|RadDateTimePicker|AutoPostBackControl|SelectedDateChangedDateInput.TextChanged| **AutoPostBack** can have any of the following values:

* " *None* ": no postbacks occur when the user changes the selection.

* " *Both* ": a postback occurs when the user changes the selection.

* " *TimeView* ": a postback occurs when the user types a new value in the input area or selects a time in the popup time view.

* " *Calendar* ": a postback occurs when the user types a new value in the input area or selects a date in the popup calendar.|
