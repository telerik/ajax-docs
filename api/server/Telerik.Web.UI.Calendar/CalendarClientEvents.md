---
title: Telerik.Web.UI.Calendar.CalendarClientEvents
page_title: Telerik.Web.UI.Calendar.CalendarClientEvents
description: Telerik.Web.UI.Calendar.CalendarClientEvents
---

# Telerik.Web.UI.Calendar.CalendarClientEvents

Defines the JavaScript functions (client-side event handlers) that are invoked
            when specific client-side event is raised.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.Calendar.Persistence.PropertiesObject
* Telerik.Web.UI.Calendar.CalendarClientEvents

## Properties

###  OnInit `String`

Event fired after the RadCalendar client object has been completely initialized.

###  OnLoad `String`

The event is fired immediately after the page onload event.

###  OnDateSelecting `String`

Event fired when a valid date is being selected. 
            Return false to cancel selection.

###  OnDateSelected `String`

Event fired after a valid date has been selected. Can be used in combination with 
            OnDateClick for maximum convenience. This event can be used to conditionally process the 
            selected date or any related event with it on the client.

###  OnDateClick `String`

Event fired when a calendar cell, representing a date is clicked. This event is not the same as 
            OnDateSelected. One can have an OnDateClick event for a disabled or read only calendar 
            cell which does not allow.s OnDateSelected event to be fired.
            This event can be used to conditionally process some information/event based on the clicked
            date.
            Return false to cancel the click event.

###  OnRowHeaderClick `String`

Event fired when a calendar row header is clicked. This event is not the same as 
            OnDateClick. One can have an OnRowHeaderClick event for a disabled or read only calendar 
            cell which does not allow to select calendar dates.
            This event can be used to conditionally process some information/event based on the clicked
            row header.
            Return false to cancel the click event.

###  OnColumnHeaderClick `String`

Event fired when a calendar column header is clicked. This event is not the same as 
            OnDateClick. One can have an OnColumnHeaderClick event for a disabled or read only calendar 
            cell which does not allow selection of calendar dates.
            This event can be used to conditionally process some information/event based on the clicked
            column header.
            Return false to cancel the click event.

###  OnViewSelectorClick `String`

Event fired when a calendar view selector is clicked. This event is not the same as 
            OnDateClick. One can have an OnViewSelectorClick event for a disabled or read only calendar 
            cell which does not allow selection of calendar cell.
            This event can be used to conditionally process some information/event based on the clicked
            view selector.
            Return false to cancel the click event.

###  OnCalendarViewChanging `String`

Event fired when the calendar view is about to change.
            Return false to cancel the event.

###  OnCalendarViewChanged `String`

Event fired when the calendar view has changed. Generally
            the event is raised as a result of using the built-in navigation controls. Event is
            raised before the results are rendered, so that custom logic could be executed, and the
            change could be prevented if necessary. There is no way to find whether the operation
            was accomplished successfully. This event can be used to preprocess some conditions or
            visual styles/content before the final rendering of the calendar. Return false to
            cancel the event.

###  OnDayRender `String`

Event fired for every calendar day cell when the calendar is rendered as a result of a client-side navigation (i.e. only in OperationType="Client"). 
            This event mimics the server-side DayRender event -- gives final control over the output of a specific calendar cell.
            This event can be used to apply final changes to the output (content and visial styles) just before the content is displayed.

