---
title: Server-Side Objects
page_title: Server-Side Objects | UI for ASP.NET AJAX Documentation
description: Server-Side Objects
slug: calendar/server-side-programming/server-side-objects
tags: server-side,objects
published: True
position: 0
---

# Server-Side Objects



The __RadCalendar__ controls provide a rich API with classes that expose several properties, enumerations, methods and events. You can use the API to easily customize the controls programmatically in the code-behind.

## RadCalendar

The main classes provided for working with the __RadCalendar__ control are:

* __RadCalendar__ is the main class. It provides several properties, methods, and events for customizing the calendar.

* __RadCalendarDay__ maps a date value to its corresponding visual settings and a number of boolean properties that represent its status (weekend date, disabled, selected, and so on). This class is used for the __Day__ property of the event arguments of the __[DayRender]({%slug calendar/server-side-programming/server-side-events/dayrender%})__ event, as well as for the elements in the __[SpecialDays]({%slug calendar/design-time/radcalendarday-collection-editor%})__ collection.

* __CalendarView__ represents the current view of the calendar. It can include links to child views if the calendar is in multi-view mode. This class is the type of the __CalendarView__ property, and is the type of the __OldView__ and __NewView__ properties of the event arguments of the __[DefaultViewChanged]({%slug calendar/server-side-programming/server-side-events/defaultviewchanged%})__ event.

* __MonthView__ is a descendant of __CalendarView__ that represents the view information for a single month. It is the type of the __View__ property of the event arguments of the __[DayRender]({%slug calendar/server-side-programming/server-side-events/dayrender%})__ event. It is the type of the __CalendarView__ property when the calendar is in single-view mode.

* __TableCell__ is the control class for a cell in the day matrix. It is the value of the __Cell__ property of the event arguments of the __[DayRender]({%slug calendar/server-side-programming/server-side-events/dayrender%})__ event.

* __RadDate__ is a wrapper for System.DateTime. It is used for persisting DateTime values in collections such as the __[SelectedDates]({%slug calendar/design-time/raddate-collection-editor%})__ property.

* __DayTemplate__ implements an ITemplate wrapper. It is the type for each element of the __[CalendarDayTemplates]({%slug calendar/design-time/daytemplate-collection-editor%})__ property.

## RadDatePicker, RadTimePicker, RadDateTimePicker and RadMonthYearPicker

The main classes for working with the __RadDatePicker__, __RadTimePicker__, __RadDateTimePicker__ and__RadMonthYearPicker__controls are:

* __RadDatePicker__ is the main class for the date picker control.It provides several properties, methods, and events for customizing the control.

* __RadTimePicker__ is the main class for the time picker control.It provides several properties, methods, and events for customizing the control.

* __RadDateTimePicker__ is the main class for the date-and-time picker control. It provides several properties, methods, and events for customizing the control.

* __RadMonthYearPicker__ is the main class for the month-and-year picker control. It provides several properties, methods, and events for customizing the control.

* __RadDateInput__ is the class for the input area of__RadDatePicker__, __RadTimePicker__, and__RadDateTimePicker__. It handles the formatting and parsing of date and time strings, and has a number of its own properties, methods, and events.__RadDateInput__ is one of the standard __RadInput__ controls.

* __CalendarPopupButton__ is the class for the popup button that displaysthe calendar on __RadDatePicker__ and __RadDateTimePicker__. It is exposed by the __DatePopupButton__ property.

* __TimePopupButton__ is the class for the popup button that displays the time view on __RadTimePicker__ and __RadDateTimePicker__. It is exposed by the __TimePopupButton__ property.

* __DatePopupButton__ is the class for the popup button that displays the monthyear view on __RadMonthYearPicker__. It is exposed by the __DatePopupButton__ property.

* __RadTimeView__ is the class for the popup time view used by__RadTimePicker__ and __RadDateTimePicker__.

* __DataListItem__ is the standard System.Web.UI.WebControls.DataListItem class. The __RadTimeView__ control uses this class for each of the items it displays. It can be [accessed through the DataList property]({%slug calendar/templates/finding-controls-inside-radtimeview-templates%}), and is also available as the __Item__ property of the event arguments of the __[ItemCreated]({%slug calendar/server-side-programming/server-side-events/itemcreated%})__ and __[ItemDataBound]({%slug calendar/server-side-programming/server-side-events/itemdatabound%})__ events.
